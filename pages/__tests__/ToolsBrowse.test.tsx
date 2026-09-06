import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ToolsBrowse from '../ToolsBrowse';
import { ThemeProvider } from '../../lib/ThemeContext';

vi.mock('../../components/ui/Layout', () => ({
  Layout: ({ children }: React.PropsWithChildren) => <div data-testid="layout">{children}</div>,
}));

vi.mock('../../components/seo/SEO', () => ({
  SEO: () => null,
}));

describe('ToolsBrowse', () => {
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

  it('renders tools grid with logos and filters by search', () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter>
            <ToolsBrowse />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );

    expect(screen.getByRole('heading', { level: 1, name: /Open Source Tools/i })).toBeInTheDocument();
    expect(screen.getByText(/Elsakr SQLite Browser/i)).toBeInTheDocument();

    const search = screen.getByLabelText(/Search tools/i);
    fireEvent.change(search, { target: { value: 'seo toolkit' } });

    expect(screen.getByText(/SEO Toolkit/i)).toBeInTheDocument();
    expect(screen.queryByText(/Elsakr SQLite Browser/i)).not.toBeInTheDocument();
  });

  it('switches category tabs without crashing', () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter>
            <ToolsBrowse />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );

    fireEvent.click(screen.getByRole('tab', { name: /Desktop/i }));
    expect(screen.getByText(/Showing/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('tab', { name: /Web/i }));
    expect(screen.getByText(/Showing/i)).toBeInTheDocument();
  });
});
