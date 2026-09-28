import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Services from '../Services';
import { ThemeProvider } from '../../lib/ThemeContext';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const rest = { ...props };
      delete rest.initial;
      delete rest.animate;
      delete rest.exit;
      delete rest.transition;
      return <div {...rest}>{children}</div>;
    },
  },
}));

vi.mock('../../components/ui/Layout', () => ({
  Layout: ({ children }: React.PropsWithChildren) => <div>{children}</div>,
}));

describe('Services page', () => {
  beforeEach(() => {
    cleanup();
    localStorage.clear();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: () => ({
        matches: false,
        media: '',
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
        dispatchEvent: () => false,
      }),
    });
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      get: () => 'en-US',
    });
  });

  it('renders services list with capability titles and detail links', () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter>
            <Services />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );
    expect(screen.getByTestId('services-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('service-card').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: /Web Architecture/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Explore Details/i }).length).toBeGreaterThan(0);
  });
});
