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
      const {
        initial,
        animate,
        exit,
        transition,
        whileInView,
        viewport,
        whileHover,
        ...rest
      } = props;
      void initial;
      void animate;
      void exit;
      void transition;
      void whileInView;
      void viewport;
      void whileHover;
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

vi.mock('../../components/ui/CyberGrid', () => ({
  CyberGrid: () => null,
}));

vi.mock('../../components/ui/TechTicker', () => ({
  TechTicker: () => <div>TechTicker</div>,
}));

vi.mock('../../components/ui/VelocityText', () => ({
  VelocityText: () => null,
}));

vi.mock('../../components/ui/FreeTools', () => ({
  FreeTools: () => <div>FreeTools</div>,
}));

vi.mock('../../components/ui/Testimonials', () => ({
  Testimonials: () => <div>Testimonials</div>,
}));

vi.mock('../../components/ui/Accordion', () => ({
  Accordion: () => null,
}));

vi.mock('../../components/ui/PartnersMarquee', () => ({
  PartnersMarquee: () => <div>Partners</div>,
}));

vi.mock('../../components/ui/PlatformsMarquee', () => ({
  PlatformsMarquee: () => <div>Platforms</div>,
}));

vi.mock('../../components/ui/SpotlightCard', () => ({
  SpotlightCard: ({ children }: React.PropsWithChildren) => <div>{children}</div>,
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
  });

  it('renders hero headline and services section title', () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/ENGINEER/i);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/THE FUTURE/i);
    expect(screen.getByText(/Our Stack \(Services\)/i)).toBeInTheDocument();
    expect(screen.getByText('FreeTools')).toBeInTheDocument();
  });
});
