export type LogLevel = 'info' | 'warn' | 'error';

export interface LogPayload {
  level: LogLevel;
  message: string;
  timestamp: string;
  details?: unknown;
}

export type ErrorSink = (payload: LogPayload) => void;

let activeErrorSink: ErrorSink | null = null;

export function setErrorSink(sink: ErrorSink | null) {
  activeErrorSink = sink;
}

export function getErrorTrackingDsn(): string | undefined {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env.VITE_ERROR_TRACKING_DSN;
  }
  return undefined;
}

function write(level: LogLevel, message: string, details?: unknown) {
  const payload: LogPayload = {
    level,
    message,
    timestamp: new Date().toISOString(),
    details,
  };

  if (level === 'error') {
    console.error(payload);
    if (activeErrorSink) {
      activeErrorSink(payload);
    } else {
      const dsn = getErrorTrackingDsn();
      if (dsn && typeof window !== 'undefined' && typeof window.fetch === 'function') {
        try {
          window.fetch(dsn, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true,
          }).catch(() => undefined);
        } catch {
          // Non-blocking error reporting
        }
      }
    }
    return;
  }
  if (level === 'warn') {
    console.warn(payload);
    return;
  }
  console.info(payload);
}

export const logger = {
  info: (message: string, details?: unknown) => write('info', message, details),
  warn: (message: string, details?: unknown) => write('warn', message, details),
  error: (message: string, details?: unknown) => write('error', message, details),
  reportError: (message: string, details?: unknown) => write('error', message, details),
  setErrorSink,
};

