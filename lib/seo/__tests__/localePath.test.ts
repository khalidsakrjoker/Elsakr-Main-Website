import { describe, it, expect } from 'vitest';
import {
  getLocaleFromPathname,
  isArabicPath,
  localizedPath,
  stripLocalePrefix,
  withLocale,
} from '../localePath';

describe('isArabicPath', () => {
  it('detects /ar and nested Arabic paths', () => {
    expect(isArabicPath('/ar')).toBe(true);
    expect(isArabicPath('/ar/')).toBe(true);
    expect(isArabicPath('/ar/about')).toBe(true);
    expect(isArabicPath('/ar/tools/seo-toolkit')).toBe(true);
  });

  it('does not treat look-alike or English paths as Arabic', () => {
    expect(isArabicPath('/')).toBe(false);
    expect(isArabicPath('/about')).toBe(false);
    expect(isArabicPath('/arabic')).toBe(false);
    expect(isArabicPath('/tools/ar')).toBe(false);
  });
});

describe('getLocaleFromPathname', () => {
  it('maps pathnames to a locale', () => {
    expect(getLocaleFromPathname('/ar/services')).toBe('ar');
    expect(getLocaleFromPathname('/services')).toBe('en');
    expect(getLocaleFromPathname('')).toBe('en');
  });
});

describe('stripLocalePrefix', () => {
  it('removes the /ar prefix', () => {
    expect(stripLocalePrefix('/ar')).toBe('/');
    expect(stripLocalePrefix('/ar/')).toBe('/');
    expect(stripLocalePrefix('/ar/about')).toBe('/about');
    expect(stripLocalePrefix('/ar/services/web/')).toBe('/services/web');
  });

  it('keeps English paths unchanged and normalizes trailing slashes', () => {
    expect(stripLocalePrefix('/')).toBe('/');
    expect(stripLocalePrefix('/about')).toBe('/about');
    expect(stripLocalePrefix('/about/')).toBe('/about');
    expect(stripLocalePrefix('/arabic')).toBe('/arabic');
    expect(stripLocalePrefix('')).toBe('/');
  });
});

describe('withLocale', () => {
  it('maps English paths to Arabic', () => {
    expect(withLocale('/', 'ar')).toBe('/ar');
    expect(withLocale('/about', 'ar')).toBe('/ar/about');
    expect(withLocale('/tools/seo-toolkit', 'ar')).toBe('/ar/tools/seo-toolkit');
  });

  it('maps Arabic paths to English', () => {
    expect(withLocale('/ar', 'en')).toBe('/');
    expect(withLocale('/ar/about', 'en')).toBe('/about');
  });

  it('is idempotent for the same locale', () => {
    expect(withLocale('/ar/about', 'ar')).toBe('/ar/about');
    expect(withLocale('/about', 'en')).toBe('/about');
  });
});

describe('localizedPath', () => {
  it('prefixes internal links for Arabic and leaves English untouched', () => {
    expect(localizedPath('/', 'ar')).toBe('/ar');
    expect(localizedPath('/services/web', 'ar')).toBe('/ar/services/web');
    expect(localizedPath('/services/web', 'en')).toBe('/services/web');
  });

  it('preserves query strings and hashes', () => {
    expect(localizedPath('/tools?type=web', 'ar')).toBe('/ar/tools?type=web');
    expect(localizedPath('/contact#form', 'ar')).toBe('/ar/contact#form');
  });

  it('preserves combined query and hash, including when switching to English', () => {
    expect(localizedPath('/tools?type=web#list', 'ar')).toBe('/ar/tools?type=web#list');
    expect(localizedPath('/ar/tools?type=web#list', 'en')).toBe('/tools?type=web#list');
    expect(localizedPath('/ar?utm=1', 'en')).toBe('/?utm=1');
  });

  it('normalizes trailing slashes on the path while keeping the suffix', () => {
    expect(localizedPath('/about/', 'ar')).toBe('/ar/about');
    expect(localizedPath('/ar/about/', 'en')).toBe('/about');
    expect(localizedPath('/services/web/?ref=nav', 'ar')).toBe('/ar/services/web?ref=nav');
    expect(withLocale('/ar/', 'en')).toBe('/');
    expect(getLocaleFromPathname('/ar/?x=1')).toBe('ar');
    expect(stripLocalePrefix('/ar/?x=1')).toBe('/');
  });

  it('does not rewrite external, protocol-relative, hash-only or relative targets', () => {
    expect(localizedPath('https://example.com/x', 'ar')).toBe('https://example.com/x');
    expect(localizedPath('//cdn.example.com/x', 'ar')).toBe('//cdn.example.com/x');
    expect(localizedPath('#main', 'ar')).toBe('#main');
    expect(localizedPath('about', 'ar')).toBe('about');
  });

  it('does not double-prefix Arabic links', () => {
    expect(localizedPath('/ar/about', 'ar')).toBe('/ar/about');
    expect(localizedPath('/ar/about', 'en')).toBe('/about');
  });
});

