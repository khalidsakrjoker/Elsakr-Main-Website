import { describe, it, expect, afterEach, vi } from 'vitest';
import { getWhatsAppNumber, getWhatsAppTelephone, getWhatsAppMeUrl } from '../contactConfig';

describe('contactConfig', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('reads VITE_WHATSAPP_NUMBER and builds wa.me / tel forms', () => {
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '201016495229');

    expect(getWhatsAppNumber()).toBe('201016495229');
    expect(getWhatsAppTelephone()).toBe('+201016495229');
    expect(getWhatsAppMeUrl()).toBe('https://wa.me/201016495229');
    expect(getWhatsAppMeUrl('Hello')).toBe(
      `https://wa.me/201016495229?text=${encodeURIComponent('Hello')}`
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
