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

function renderApp(path: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppShell pages={eagerPages} />
      </MemoryRouter>
    </HelmetProvider>
  );
}

describe('integration tools catalog flow', () => {
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

  it('navigates from /tools to a tool detail page via the catalog card', async () => {
    const user = userEvent.setup();
    renderApp('/tools');

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: /Open Source Tools/i })).toBeInTheDocument();
    });

    const catalogCard = screen.getByRole('link', { name: /SEO Toolkit/i });
    expect(catalogCard).toHaveAttribute('href', '/tools/seo-toolkit');

    await user.click(catalogCard);

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: /SEO Toolkit/i })).toBeInTheDocument();
    });
    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://elsakr.company/tools/seo-toolkit'
    );
  }, 15000);
});

