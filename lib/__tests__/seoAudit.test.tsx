import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, cleanup, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../ThemeContext';
import { LocaleSync } from '../../components/LocaleSync';
import { eagerPages } from '../../components/eagerPages';
import { ROUTE_TABLE } from '../../components/routeTable';
import { withLocale } from '../seo/localePath';

vi.mock('framer-motion', () => {
  const Pass = ({ children, ...rest }: React.PropsWithChildren<Record<string, unknown>>) => {
    const cleaned = { ...rest };
    for (const key of Object.keys(cleaned)) {
      if (
        /^(initial|animate|exit|transition|layoutId|whileInView|viewport|whileHover|variants)$/.test(
          key
        )
      ) {
        delete cleaned[key];
      }
    }
    return React.createElement('div', cleaned, children);
  };
  return {
    motion: new Proxy({}, { get: () => Pass }),
    AnimatePresence: ({ children }: React.PropsWithChildren) => children,
  };
});

function renderPath(path: string) {
  return render(
    <HelmetProvider>
      <ThemeProvider initialLanguage={path.startsWith('/ar') ? 'ar' : 'en'}>
        <MemoryRouter initialEntries={[path]}>
          <LocaleSync />
          <Routes>
            {ROUTE_TABLE.flatMap(({ path: routePath, page }) => {
              const Page = eagerPages[page];
              return [routePath, withLocale(routePath, 'ar')].map((p) => (
                <Route key={p} path={p} element={<Page />} />
              ));
            })}
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

describe('technical SEO audit (hydrated page head)', () => {
  beforeEach(() => {
    cleanup();
    document.head.innerHTML = '';
    localStorage.clear();
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
  });

  const paths = [
    '/',
    '/about',
    '/ar',
    '/ar/about',
    '/services/web',
    '/ar/services/web',
    '/legal/privacy',
    '/ar/legal/privacy',
  ];

  for (const path of paths) {
    it(`emits title, description, canonical, hreflang, schema, and H1 for ${path}`, async () => {
      const { container } = renderPath(path);

      await waitFor(() => {
        expect(document.title.length).toBeGreaterThan(3);
      });

      expect(document.head.querySelector('meta[name="description"]')?.getAttribute('content')).toBeTruthy();
      expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toMatch(
        /https:\/\/elsakr\.company/
      );
      expect(document.head.querySelector('link[hreflang="en"]')).toBeTruthy();
      expect(document.head.querySelector('link[hreflang="ar"]')).toBeTruthy();
      expect(document.head.querySelector('link[hreflang="x-default"]')).toBeTruthy();
      expect(document.head.querySelectorAll('script[type="application/ld+json"]').length).toBeGreaterThan(0);
      expect(container.querySelector('h1')).toBeTruthy();
      expect(container.textContent?.trim().length).toBeGreaterThan(50);
    });
  }

  it('renders service detail body text for English and Arabic service routes', async () => {
    const en = renderPath('/services/web');
    await waitFor(() => {
      expect(document.title).toContain('Web Architecture');
    });
    expect(en.container.querySelector('h1')?.textContent).toContain('World-Class Web Apps');
    expect(en.container.textContent).toContain('Web Architecture');

    cleanup();
    document.head.innerHTML = '';

    const ar = renderPath('/ar/services/web');
    await waitFor(() => {
      expect(document.title).toContain('Web Architecture');
    });
    expect(ar.container.querySelector('h1')?.textContent).toContain('Web Apps بمواصفات عالمية');
    expect(ar.container.textContent).toContain('Web Architecture');
  });
});
