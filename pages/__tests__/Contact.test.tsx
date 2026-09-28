import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Contact from '../Contact';
import { ThemeProvider } from '../../lib/ThemeContext';

vi.mock('../../components/ui/Layout', () => ({
  Layout: ({ children }: React.PropsWithChildren) => <div>{children}</div>,
}));

vi.mock('../../components/ui/MultiStepForm', () => ({
  MultiStepForm: () => <div data-testid="multi-step-form" />,
}));

vi.mock('../../components/ui/Accordion', () => ({
  Accordion: ({ items }: { items: { question: string }[] }) => (
    <ul data-testid="faq-items">
      {items.map((item) => (
        <li key={item.question}>{item.question}</li>
      ))}
    </ul>
  ),
}));

describe('Contact page', () => {
  beforeEach(() => {
    cleanup();
    localStorage.clear();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: () => ({ matches: false, media: '', addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent: () => false }),
    });
    Object.defineProperty(window.navigator, 'language', { configurable: true, get: () => 'en-US' });
  });

  it('renders FAQ block with expanded question set', () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <MemoryRouter>
            <Contact />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    );
    expect(screen.getByTestId('contact-faq')).toBeInTheDocument();
    expect(screen.getByTestId('faq-items').querySelectorAll('li').length).toBe(4);
    expect(screen.getByTestId('multi-step-form')).toBeInTheDocument();
  });
});
