import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { initWebVitals } from '../webVitals';

describe('initWebVitals', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('is a no-op without PerformanceObserver and still returns a cleanup', () => {
    vi.stubGlobal('PerformanceObserver', undefined);
    const cleanup = initWebVitals();
    expect(typeof cleanup).toBe('function');
    cleanup();
  });

  it('reports TTFB from navigation timing when available', () => {
    const onReport = vi.fn();
    vi.spyOn(performance, 'getEntriesByType').mockReturnValue([
      { responseStart: 120 } as PerformanceNavigationTiming,
    ]);
    class FakeObserver {
      observe() {
        return undefined;
      }
      disconnect() {
        return undefined;
      }
    }
    vi.stubGlobal('PerformanceObserver', FakeObserver);
    const cleanup = initWebVitals(onReport);
    expect(onReport).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'TTFB', value: 120, rating: 'good' })
    );
    cleanup();
  });
});
