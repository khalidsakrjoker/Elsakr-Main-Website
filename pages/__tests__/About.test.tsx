import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import About from '../About';
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
}));

vi.mock('../../components/ui/Layout', () => ({
  Layout: ({ children }: React.PropsWithChildren) => <div>{children}</div>,
}));

vi.mock('../../components/ui/Button', () => ({
  Button: ({ children }: React.PropsWithChildren) => <button type="button">{children}</button>,
}));

vi.mock('../../components/ui/Timeline', () => ({
  Timeline: () => <div data-testid="timeline" />,
}));

describe('About page', () => {
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

  it('renders brand-led about content under Falcon tokens', () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter>
            <About />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );

    expect(screen.getByText('Elsakr')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Operating Principles/i)).toBeInTheDocument();
    expect(screen.getByTestId('timeline')).toBeInTheDocument();
  });
});
