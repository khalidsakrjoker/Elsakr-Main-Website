import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppShell } from '../../../App';
import { eagerPages } from '../../../components/eagerPages';

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

function hreflangHrefs(): Record<string, string | null> {
  const result: Record<string, string | null> = {};
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => {
    result[node.getAttribute('hreflang') ?? ''] = node.getAttribute('href');
  });
  return result;
}

function renderApp(path: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppShell pages={eagerPages} initialLanguage={path.startsWith('/ar') ? 'ar' : 'en'} />
      </MemoryRouter>
    </HelmetProvider>
  );
}

describe('integration locale routing', () => {
  beforeEach(() => {
    cleanup();
    document.head.innerHTML = '';
    localStorage.clear();
    window.scrollTo = vi.fn();
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

  it('switches /about ↔ /ar/about and keeps canonical plus hreflang in sync', async () => {
    const user = userEvent.setup();
    renderApp('/about');

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: /Falcon/i })).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
        'https://elsakr.company/about'
      );
    });
    expect(hreflangHrefs()).toEqual({
      en: 'https://elsakr.company/about',
      ar: 'https://elsakr.company/ar/about',
      'x-default': 'https://elsakr.company/about',
    });

    const [switchToArabic] = screen.getAllByRole('button', { name: 'Switch to Arabic' });
    await user.click(switchToArabic);

    await waitFor(() => {
      expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
        'https://elsakr.company/ar/about'
      );
    });
    expect(hreflangHrefs()).toEqual({
      en: 'https://elsakr.company/about',
      ar: 'https://elsakr.company/ar/about',
      'x-default': 'https://elsakr.company/about',
    });
    expect(document.documentElement).toHaveAttribute('lang', 'ar');
    expect(document.documentElement).toHaveAttribute('dir', 'rtl');

    const [switchToEnglish] = screen.getAllByRole('button', { name: 'Switch to English' });
    await user.click(switchToEnglish);

    await waitFor(() => {
      expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
        'https://elsakr.company/about'
      );
    });
    expect(hreflangHrefs()['x-default']).toBe('https://elsakr.company/about');
    expect(document.documentElement).toHaveAttribute('lang', 'en');
  });
});
