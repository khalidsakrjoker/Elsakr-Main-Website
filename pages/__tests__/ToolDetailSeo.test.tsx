import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, cleanup, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ToolDetail from '../ToolDetail';
import { ThemeProvider } from '../../lib/ThemeContext';

vi.mock('../../components/ui/Layout', () => ({
  Layout: ({ children }: React.PropsWithChildren) => <div>{children}</div>,
}));

vi.mock('../../components/ui/Button', () => ({
  Button: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
    <button type="button" {...props}>
      {children}
    </button>
  ),
}));

describe('ToolDetail SEO', () => {
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

  it('sets document title from the tool name via Helmet', async () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter initialEntries={['/tools/seo-toolkit']}>
            <Routes>
              <Route path="/tools/:id" element={<ToolDetail />} />
            </Routes>
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );

    await waitFor(() => {
      expect(document.title.toLowerCase()).toContain('seo');
    });
  });
});
