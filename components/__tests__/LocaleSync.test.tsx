import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Link } from 'react-router-dom';
import { LocaleSync } from '../LocaleSync';
import { ThemeProvider, useTheme } from '../../lib/ThemeContext';

function Probe() {
  const { language, direction } = useTheme();
  return (
    <div>
      <span data-testid="language">{language}</span>
      <span data-testid="direction">{direction}</span>
      <Link to="/ar/about">to arabic</Link>
      <Link to="/about">to english</Link>
    </div>
  );
}

function renderAt(path: string, initialLanguage?: 'en' | 'ar') {
  return render(
    <ThemeProvider initialLanguage={initialLanguage}>
      <MemoryRouter initialEntries={[path]}>
        <LocaleSync />
        <Probe />
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('LocaleSync', () => {
  beforeEach(() => {
    cleanup();
    localStorage.clear();
  });

  it('switches to Arabic on /ar routes', () => {
    renderAt('/ar/about', 'en');
    expect(screen.getByTestId('language')).toHaveTextContent('ar');
    expect(screen.getByTestId('direction')).toHaveTextContent('rtl');
    expect(document.documentElement.getAttribute('lang')).toBe('ar');
  });

  it('switches to English on unprefixed routes even when Arabic was preferred', () => {
    localStorage.setItem('language', 'ar');
    renderAt('/about', 'ar');
    expect(screen.getByTestId('language')).toHaveTextContent('en');
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');
  });

  it('follows client-side navigation between locales', async () => {
    const user = userEvent.setup();
    renderAt('/about', 'en');
    expect(screen.getByTestId('language')).toHaveTextContent('en');

    await user.click(screen.getByRole('link', { name: 'to arabic' }));
    expect(screen.getByTestId('language')).toHaveTextContent('ar');

    await user.click(screen.getByRole('link', { name: 'to english' }));
    expect(screen.getByTestId('language')).toHaveTextContent('en');
  });
});
