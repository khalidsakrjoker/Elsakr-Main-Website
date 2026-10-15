import { describe, it, expect, afterEach, vi } from 'vitest';
import { getWhatsAppNumber, getWhatsAppTelephone, getWhatsAppMeUrl } from '../contactConfig';

describe('contactConfig', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('reads VITE_WHATSAPP_NUMBER and builds wa.me / tel forms', () => {
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '19995550123');

    expect(getWhatsAppNumber()).toBe('19995550123');
    expect(getWhatsAppTelephone()).toBe('+19995550123');
    expect(getWhatsAppMeUrl()).toBe('https://wa.me/19995550123');
    expect(getWhatsAppMeUrl('Hello')).toBe(
      `https://wa.me/19995550123?text=${encodeURIComponent('Hello')}`
    );
  });

  it('strips a leading plus and returns empty when unset', () => {
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '+20105551234');
    expect(getWhatsAppNumber()).toBe('20105551234');
    expect(getWhatsAppTelephone()).toBe('+20105551234');

    vi.stubEnv('VITE_WHATSAPP_NUMBER', '');
    expect(getWhatsAppNumber()).toBe('');
    expect(getWhatsAppTelephone()).toBe('');
    expect(getWhatsAppMeUrl()).toBe('https://wa.me/');
  });
});
