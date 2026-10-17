import { logger } from './logger';

export type WebVitalName = 'LCP' | 'CLS' | 'INP' | 'TTFB';

export interface WebVitalMetric {
  name: WebVitalName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

type Reporter = (metric: WebVitalMetric) => void;

function rate(name: WebVitalName, value: number): WebVitalMetric['rating'] {
  // Thresholds aligned with Chrome UX / web.dev guidance (approximate).
  if (name === 'LCP') {
    if (value <= 2500) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }
  if (name === 'CLS') {
    if (value <= 0.1) return 'good';
    if (value <= 0.25) return 'needs-improvement';
    return 'poor';
  }
  if (name === 'INP') {
    if (value <= 200) return 'good';
    if (value <= 500) return 'needs-improvement';
    return 'poor';
  }
  // TTFB
  if (value <= 800) return 'good';
  if (value <= 1800) return 'needs-improvement';
  return 'poor';
}

function report(name: WebVitalName, value: number, onReport: Reporter) {
  const metric: WebVitalMetric = { name, value, rating: rate(name, value) };
  onReport(metric);
  logger.info('web-vital', metric);
}

/**
 * Lightweight Core Web Vitals observers (no extra dependency).
 * Safe to call once on the client after hydration; no-ops during SSR.
 */
export function initWebVitals(onReport: Reporter = () => undefined): () => void {
  if (typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') {
    return () => undefined;
  }

  const cleanups: Array<() => void> = [];

  try {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (nav) {
      report('TTFB', nav.responseStart, onReport);
    }
  } catch {
    // Ignore environments without Navigation Timing.
  }

  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      if (last) report('LCP', last.startTime, onReport);
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    cleanups.push(() => lcpObserver.disconnect());
  } catch {
    // LCP unsupported
  }

  try {
    let cls = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as Array<PerformanceEntry & { hadRecentInput?: boolean; value?: number }>) {
        if (!entry.hadRecentInput) {
          cls += entry.value ?? 0;
        }
      }
      report('CLS', cls, onReport);
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    cleanups.push(() => clsObserver.disconnect());
  } catch {
    // CLS unsupported
  }

  try {
    const inpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries() as Array<PerformanceEntry & { duration?: number; interactionId?: number }>;
      for (const entry of entries) {
        if (entry.interactionId) {
          report('INP', entry.duration ?? entry.startTime, onReport);
        }
      }
    });
    inpObserver.observe({ type: 'event', buffered: true, durationThreshold: 16 } as PerformanceObserverInit);
    cleanups.push(() => inpObserver.disconnect());
  } catch {
    // INP / event timing unsupported
  }

  return () => {
    for (const cleanup of cleanups) cleanup();
  };
}
