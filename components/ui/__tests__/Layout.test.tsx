import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, cleanup, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '../Layout';
import { ThemeProvider } from '../../../lib/ThemeContext';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const {
        initial,
        animate,
        exit,
        transition,
        layoutId,
        whileInView,
        viewport,
        whileHover,
        ...rest
      } = props;
      void initial;
      void animate;
      void exit;
      void transition;
      void layoutId;
      void whileInView;
      void viewport;
      void whileHover;
      return <div {...rest}>{children}</div>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

function renderLayout(ui: React.ReactNode = <div>Page content</div>) {
  return render(
    <HelmetProvider>
      <ThemeProvider>
        <MemoryRouter>
          <Layout>{ui}</Layout>
        </MemoryRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

describe('Layout', () => {
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

  it('renders the brand name and page children', () => {
    renderLayout();

    const brand = screen.getAllByText('Elsakr')[0];
    expect(brand).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: 'Elsakr' }).length).toBeGreaterThan(0);
    expect(screen.getByText('Page content')).toBeInTheDocument();
  });

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup();
    renderLayout();

    const toggle = screen.getByRole('button', { name: 'Toggle menu' });
    expect(screen.queryByRole('button', { name: /Capabilities/i })).not.toBeInTheDocument();

    await user.click(toggle);
    const mobileServices = await screen.findByRole('button', { name: /Capabilities/i });
    expect(mobileServices).toBeInTheDocument();

    await user.click(toggle);
    expect(screen.queryByRole('button', { name: /Capabilities/i })).not.toBeInTheDocument();
  });

  it('switches language via the language switcher', async () => {
    const user = userEvent.setup();
    renderLayout();

    const root = document.querySelector('[dir]') as HTMLElement;
    expect(root).toHaveAttribute('dir', 'ltr');
    expect(within(root).getAllByText('Dashboard').length).toBeGreaterThan(0);

    const switchers = screen.getAllByRole('button', { name: 'Toggle Language' });
    await user.click(switchers[0]);

    expect(root).toHaveAttribute('dir', 'rtl');
    expect(within(root).getAllByText('الداشبورد').length).toBeGreaterThan(0);
    expect(within(root).getAllByText('الصقر').length).toBeGreaterThan(0);
    expect(switchers[0]).toHaveTextContent('EN');
  });

  it('opens mobile services and tools mega sections', async () => {
    const user = userEvent.setup();
    renderLayout();

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }));

    await user.click(await screen.findByRole('button', { name: /Capabilities/i }));
    expect(await screen.findByRole('link', { name: /Web Architecture/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View All Services/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /^Tools$/i }));
    expect(await screen.findByRole('link', { name: /Desktop Apps/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Web Apps/i })).toBeInTheDocument();
  });

  it('shows desktop services and tools mega menus on hover', () => {
    renderLayout();

    const servicesTrigger = screen.getByRole('link', { name: /Capabilities/i });
    fireEvent.mouseEnter(servicesTrigger.parentElement as HTMLElement);
    expect(screen.getByText('Tailored Solutions')).toBeInTheDocument();
    expect(screen.getAllByText('Web Architecture').length).toBeGreaterThan(0);

    const toolsTrigger = screen.getByRole('link', { name: /^Tools$/i });
    fireEvent.mouseEnter(toolsTrigger.parentElement as HTMLElement);
    expect(screen.getByText('Open Source Tools')).toBeInTheDocument();
    expect(screen.getByText('Desktop Apps')).toBeInTheDocument();
    expect(screen.getByText('Web Apps')).toBeInTheDocument();
  });
});
