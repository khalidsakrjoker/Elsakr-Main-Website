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
      delete rest.initial; delete rest.animate; delete rest.exit; delete rest.transition;
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
      value: () => ({ matches: false, media: '', addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent: () => false }),
    });
    Object.defineProperty(window.navigator, 'language', { configurable: true, get: () => 'en-US' });
  });

  it('renders services grid with capability links', () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter>
            <Services />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );
    expect(screen.getByTestId('services-grid')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Web Architecture/i })).toBeInTheDocument();
  });
});
