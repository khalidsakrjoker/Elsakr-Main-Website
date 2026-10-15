import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ToolDetail from '../ToolDetail';
import { ThemeProvider } from '../../lib/ThemeContext';

vi.mock('../../components/ui/Layout', () => ({
  Layout: ({ children }: React.PropsWithChildren) => <div data-testid="layout">{children}</div>,
}));

vi.mock('../../components/seo/SEO', () => ({
  SEO: () => null,
}));

vi.mock('../../components/ui/Button', () => ({
  Button: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
    <button type="button" {...props}>
      {children}
    </button>
  ),
}));

function renderToolDetail(id: string) {
  return render(
    <HelmetProvider>
      <ThemeProvider>
        <MemoryRouter initialEntries={[`/tools/${id}`]}>
          <Routes>
            <Route path="/tools/:id" element={<ToolDetail />} />
            <Route path="/tools" element={<div>Tools Browse</div>} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

describe('ToolDetail', () => {
  beforeEach(() => {
    cleanup();
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
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      get: () => 'en-US',
    });
  });

  it('renders tool title, description, and unique logo for a known tool id', () => {
    renderToolDetail('sqlite-browser');

    expect(screen.getByRole('heading', { name: /Elsakr SQLite Browser/i })).toBeInTheDocument();
    expect(screen.getByText(/professional desktop tool to explore/i)).toBeInTheDocument();
    const logo = screen.getByTestId('tool-logo');
    expect(logo).toHaveAttribute('src', '/assets/tools/logos/sqlite-browser.svg');
  });

  it('redirects to /tools when the tool id is unknown', () => {
    renderToolDetail('does-not-exist');

    expect(screen.getByText('Tools Browse')).toBeInTheDocument();
  });

  it('lists related tools from the same category excluding the current tool', () => {
    renderToolDetail('sqlite-browser');

    expect(screen.getByRole('heading', { name: /Related Tools/i })).toBeInTheDocument();
    const relatedLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href')?.startsWith('/tools/'))
      .filter((link) => link.getAttribute('href') !== '/tools/sqlite-browser');

    expect(relatedLinks.length).toBeGreaterThan(0);
    expect(relatedLinks.every((link) => !link.getAttribute('href')?.includes('sqlite-browser'))).toBe(
      true
    );
  });

  it('emits SoftwareApplication JSON-LD for the current tool', () => {
    const { container } = renderToolDetail('seo-toolkit');
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeTruthy();

    const data = JSON.parse(script!.textContent ?? '{}') as {
      '@type': string;
      name: string;
      url: string;
      applicationCategory: string;
      offers: { price: string };
    };

    expect(data['@type']).toBe('SoftwareApplication');
    expect(data.name.toLowerCase()).toContain('seo');
    expect(data.url).toBe('https://elsakr.company/tools/seo-toolkit');
    expect(data.applicationCategory).toBe('WebApplication');
    expect(data.offers.price).toBe('0');
  });
});
