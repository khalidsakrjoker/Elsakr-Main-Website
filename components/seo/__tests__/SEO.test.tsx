import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, cleanup, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from '../SEO';
import { ThemeProvider } from '../../../lib/ThemeContext';
import { LocaleSync } from '../../LocaleSync';

function renderSEO(initialEntries: string[] = ['/'], initialLanguage?: 'en' | 'ar') {
  return render(
    <HelmetProvider>
      <ThemeProvider initialLanguage={initialLanguage}>
        <MemoryRouter initialEntries={initialEntries}>
          <LocaleSync />
          <SEO />
        </MemoryRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

function jsonLdScripts(): string[] {
  return Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(
    (node) => node.textContent ?? ''
  );
}

function head(selector: string): string | null {
  return document.head.querySelector(selector)?.getAttribute('content') ?? null;
}

function alternates(): Record<string, string | null> {
  const result: Record<string, string | null> = {};
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => {
    result[node.getAttribute('hreflang') ?? ''] = node.getAttribute('href');
  });
  return result;
}

describe('SEO', () => {
  beforeEach(() => {
    cleanup();
    localStorage.clear();
    document.head.innerHTML = '';
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => undefined,
        removeListener: () => undefined,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        dispatchEvent: () => false,
      }),
    });
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      get: () => 'en-US',
    });
  });

  it('sets an English default title and Organization JSON-LD', async () => {
    renderSEO();

    await waitFor(() => {
      expect(document.title).toContain('Elsakr');
    });

    const payloads = jsonLdScripts().join('\n');
    expect(payloads).toContain('Organization');
    expect(payloads).toContain('Elsakr Software Studio');
    expect(payloads).toContain('alternateName');
  });

  it('uses Arabic company naming in title and schema on /ar routes', async () => {
    renderSEO(['/ar'], 'ar');

    await waitFor(() => {
      expect(document.title).toContain('شركة الصقر للبرمجيات');
    });
    expect(document.title).toMatch(/حلول|أنظمة|كود/);

    const payloads = jsonLdScripts().join('\n');
    expect(payloads).toContain('شركة الصقر للبرمجيات');
    expect(payloads).toContain('الصقر برمجيات');
    expect(payloads).toContain('تطوير البرمجيات');
  });

  it('includes Arabic SEO keywords in the document head on /ar routes', async () => {
    renderSEO(['/ar/about'], 'ar');

    await waitFor(() => {
      const keywords = head('meta[name="keywords"]');
      expect(keywords).toContain('الصقر برمجيات');
      expect(keywords).toContain('شركة الصقر للبرمجيات');
    });
  });

  it('emits the English canonical and hreflang set for an English route', async () => {
    renderSEO(['/about']);

    await waitFor(() => {
      expect(document.head.querySelector('link[rel="canonical"]')).not.toBeNull();
    });

    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://elsakr.company/about'
    );
    expect(alternates()).toEqual({
      en: 'https://elsakr.company/about',
      ar: 'https://elsakr.company/ar/about',
      'x-default': 'https://elsakr.company/about',
    });
    expect(head('meta[property="og:locale"]')).toBe('en_US');
    expect(head('meta[property="og:url"]')).toBe('https://elsakr.company/about');
  });

  it('uses the Arabic URL as canonical on /ar/about while x-default stays English', async () => {
    renderSEO(['/ar/about'], 'ar');

    await waitFor(() => {
      expect(document.head.querySelector('link[rel="canonical"]')).not.toBeNull();
    });

    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://elsakr.company/ar/about'
    );
    expect(alternates()).toEqual({
      en: 'https://elsakr.company/about',
      ar: 'https://elsakr.company/ar/about',
      'x-default': 'https://elsakr.company/about',
    });
    expect(head('meta[property="og:locale"]')).toBe('ar_EG');
    expect(head('meta[property="og:locale:alternate"]')).toBe('en_US');
    expect(document.documentElement.getAttribute('lang')).toBe('ar');
  });

  it('maps the home page to / and /ar and strips trailing slashes', async () => {
    renderSEO(['/ar/']);

    await waitFor(() => {
      expect(document.head.querySelector('link[rel="canonical"]')).not.toBeNull();
    });

    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://elsakr.company/ar'
    );
    expect(alternates().en).toBe('https://elsakr.company/');
    expect(alternates().ar).toBe('https://elsakr.company/ar');
  });

  it('renders extra SoftwareApplication JSON-LD when provided', async () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter initialEntries={['/tools']}>
            <SEO
              title="Free Open Source Tools"
              jsonLdExtra={{
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                      '@type': 'SoftwareApplication',
                      name: 'Demo Tool',
                      url: 'https://elsakr.company/tools/demo',
                    },
                  },
                ],
              }}
            />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );

    await waitFor(() => {
      const payloads = jsonLdScripts().join('\n');
      expect(payloads).toContain('SoftwareApplication');
      expect(payloads).toContain('Demo Tool');
    });
  });
});
