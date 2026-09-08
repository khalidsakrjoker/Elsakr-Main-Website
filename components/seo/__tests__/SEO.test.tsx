import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, cleanup, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from '../SEO';
import { ThemeProvider } from '../../../lib/ThemeContext';

function renderSEO(initialEntries: string[] = ['/']) {
  return render(
    <HelmetProvider>
      <ThemeProvider>
        <MemoryRouter initialEntries={initialEntries}>
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

  it('uses Arabic company naming in title and schema after language switch', async () => {
    localStorage.setItem('language', 'ar');
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      get: () => 'ar-EG',
    });

    renderSEO();

    await waitFor(() => {
      expect(document.title).toContain('شركة الصقر للبرمجيات');
    });
    expect(document.title).toMatch(/حلول|أنظمة|كود/);

    const payloads = jsonLdScripts().join('\n');
    expect(payloads).toContain('شركة الصقر للبرمجيات');
    expect(payloads).toContain('الصقر برمجيات');
    expect(payloads).toContain('تطوير البرمجيات');
  });

  it('includes Arabic SEO keywords in the document head', async () => {
    localStorage.setItem('language', 'ar');
    renderSEO();

    await waitFor(() => {
      const keywords = document.querySelector('meta[name="keywords"]');
      expect(keywords?.getAttribute('content')).toContain('الصقر برمجيات');
      expect(keywords?.getAttribute('content')).toContain('شركة الصقر للبرمجيات');
    });
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
