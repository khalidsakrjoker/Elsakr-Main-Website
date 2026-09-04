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

  it('renders tool title and description for a known tool id', () => {
    renderToolDetail('sqlite-browser');

    expect(screen.getByRole('heading', { name: /Elsakr SQLite Browser/i })).toBeInTheDocument();
    expect(screen.getByText(/professional desktop tool to explore/i)).toBeInTheDocument();
  });

  it('redirects to /tools when the tool id is unknown', () => {
    renderToolDetail('does-not-exist');

    expect(screen.getByText('Tools Browse')).toBeInTheDocument();
  });
});
