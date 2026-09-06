import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '../../components/ui/Layout';
import { ThemeProvider } from '../ThemeContext';

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

describe('Layout chrome', () => {
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
    window.scrollTo = vi.fn();
  });

  it('renders brand name without gold shimmer class and shows children', () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter>
            <Layout>
              <div>Page content</div>
            </Layout>
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );

    const brand = screen.getAllByText('Elsakr')[0];
    expect(brand).toBeInTheDocument();
    expect(brand.className).not.toContain('text-gold-24k');
    expect(screen.getByText('Page content')).toBeInTheDocument();
  });
});
