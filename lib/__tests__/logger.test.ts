import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { logger } from '../logger';

describe('logger', () => {
  beforeEach(() => {
    vi.spyOn(console, 'info').mockImplementation(() => undefined);
    vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('writes structured info payloads', () => {
    logger.info('hello', { ok: true });
    expect(console.info).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'info',
        message: 'hello',
        details: { ok: true },
      })
    );
  });

  it('writes structured error payloads', () => {
    logger.error('boom', { code: 1 });
    expect(console.error).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'error',
        message: 'boom',
        details: { code: 1 },
      })
    );
  });

  it('forwards error payloads to a registered error sink', () => {
    const sink = vi.fn();
    logger.setErrorSink(sink);

    logger.error('network failure', { status: 500 });
    expect(sink).toHaveBeenCalledTimes(1);
    expect(sink).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'error',
        message: 'network failure',
        details: { status: 500 },
      })
    );

    logger.setErrorSink(null);
  });

  it('supports reportError as an alias for logger.error', () => {
    const sink = vi.fn();
    logger.setErrorSink(sink);

    logger.reportError('unhandled rejection', { reason: 'timeout' });
    expect(console.error).toHaveBeenCalledWith(
      expect.objectContaining({
        level: 'error',
        message: 'unhandled rejection',
      })
    );
    expect(sink).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'unhandled rejection',
        details: { reason: 'timeout' },
      })
    );

    logger.setErrorSink(null);
  });
});

