/**
 * Public contact channels sourced from Vite env (see `.env.example`).
 * Never hardcode phone numbers in components — read them here.
 */

function readWhatsAppNumber(): string {
  const raw = import.meta.env.VITE_WHATSAPP_NUMBER;
  return typeof raw === 'string' ? raw.trim() : '';
}

/** Digits-only WhatsApp destination (country code + number, no +). */
export function getWhatsAppNumber(): string {
  return readWhatsAppNumber().replace(/^\+/, '');
}

/** E.164-style telephone for schema.org ContactPoint. */
export function getWhatsAppTelephone(): string {
  const number = getWhatsAppNumber();
  return number ? `+${number}` : '';
}

/** https://wa.me/<number> with optional prefilled text. */
export function getWhatsAppMeUrl(text?: string): string {
  const number = getWhatsAppNumber();
  const base = `https://wa.me/${number}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
