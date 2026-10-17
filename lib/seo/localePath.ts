/**
 * URL-based locale helpers.
 *
 * English keeps the canonical, unprefixed URLs (`/`, `/services`, ...).
 * Arabic mirrors every English URL under the `/ar` prefix (`/ar`, `/ar/services`, ...).
 */

export type Locale = 'en' | 'ar';

export const ARABIC_PREFIX = '/ar';

function normalizePathname(pathname: string): string {
  if (!pathname) return '/';
  // Only the path portion matters here; drop any query string or hash defensively.
  const bare = pathname.split(/[?#]/)[0] ?? '';
  let path = bare.startsWith('/') ? bare : `/${bare}`;
  if (path.length > 1 && path.endsWith('/')) {
    path = path.replace(/\/+$/, '') || '/';
  }
  return path;
}

/** True for `/ar` and anything below it (`/ar/about`), but not look-alikes such as `/arabic`. */
export function isArabicPath(pathname: string): boolean {
  const path = normalizePathname(pathname);
  return path === ARABIC_PREFIX || path.startsWith(`${ARABIC_PREFIX}/`);
}

export function getLocaleFromPathname(pathname: string): Locale {
  return isArabicPath(pathname) ? 'ar' : 'en';
}

/** Remove the `/ar` prefix, returning the English path (`/ar` -> `/`). */
export function stripLocalePrefix(pathname: string): string {
  const path = normalizePathname(pathname);
  if (!isArabicPath(path)) return path;
  const stripped = path.slice(ARABIC_PREFIX.length);
  return stripped === '' ? '/' : stripped;
}

/** Return the pathname expressed in the requested locale (swaps between EN and AR). */
export function withLocale(pathname: string, locale: Locale): string {
  const base = stripLocalePrefix(pathname);
  if (locale === 'en') return base;
  return base === '/' ? ARABIC_PREFIX : `${ARABIC_PREFIX}${base}`;
}

/**
 * Locale-aware internal link target. Preserves query string and hash, and leaves
 * external / hash-only / relative targets untouched.
 */
export function localizedPath(to: string, language: Locale): string {
  if (!to.startsWith('/') || to.startsWith('//')) return to;
  const suffixIndex = to.search(/[?#]/);
  const pathname = suffixIndex === -1 ? to : to.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? '' : to.slice(suffixIndex);
  return `${withLocale(pathname, language)}${suffix}`;
}
