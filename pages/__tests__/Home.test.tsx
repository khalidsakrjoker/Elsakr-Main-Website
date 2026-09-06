import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../Home';
import { ThemeProvider } from '../../lib/ThemeContext';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, exit, transition, ...rest } = props;
      void initial;
      void animate;
      void exit;
      void transition;
      return <div {...rest}>{children}</div>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

vi.mock('../../components/ui/Layout', () => ({
  Layout: ({ children }: React.PropsWithChildren) => <div data-testid="layout">{children}</div>,
}));

vi.mock('../../components/seo/SEO', () => ({
  SEO: () => null,
}));

vi.mock('../../components/ui/Button', () => ({
  Button: ({ children }: React.PropsWithChildren) => <button type="button">{children}</button>,
}));

describe('Home', () => {
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
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('renders brand-led hero, platforms, tools slider, and +100 accounts without marquees', () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Software Engineering/i);
    expect(screen.getAllByText('Elsakr').length).toBeGreaterThan(0);
    expect(screen.getByTestId('hero-showcase')).toBeInTheDocument();
    expect(screen.getByText(/Selected Platforms/i)).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/System Operational/i);
    expect(document.body.textContent).not.toMatch(/PROCESSING_DATA/i);
    expect(screen.getByText(/Kashx Company/i)).toBeInTheDocument();
    expect(screen.getAllByText(/StoreX/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/From our free tools/i)).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /Tools slider/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Next tools/i)).toBeInTheDocument();
    expect(screen.getByText(/Selected alliances/i)).toBeInTheDocument();
    expect(screen.getByText('+100')).toBeInTheDocument();
    expect(screen.getByText(/Active enterprise accounts/i)).toBeInTheDocument();
    expect(screen.getByText(/Ready to build with Elsakr/i)).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/System Operational/i);
    expect(document.body.textContent).not.toMatch(/Technical Alliances/i);
  });
});
