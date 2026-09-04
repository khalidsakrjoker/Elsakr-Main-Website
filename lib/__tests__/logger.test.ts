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
});
