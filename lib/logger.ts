type LogLevel = 'info' | 'warn' | 'error';

function write(level: LogLevel, message: string, details?: unknown) {
  const payload = {
    level,
    message,
    timestamp: new Date().toISOString(),
    details,
  };

  if (level === 'error') {
    console.error(payload);
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
};
