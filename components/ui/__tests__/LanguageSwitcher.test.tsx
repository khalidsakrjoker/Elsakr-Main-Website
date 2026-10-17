import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { LocaleSync } from '../../LocaleSync';
import { ThemeProvider } from '../../../lib/ThemeContext';

function LocationProbe() {
  const location = useLocation();
  return <output data-testid="location">{`${location.pathname}${location.search}`}</output>;
}

function renderSwitcher(path = '/') {
  return render(
    <ThemeProvider initialLanguage={path.startsWith('/ar') ? 'ar' : 'en'}>
      <MemoryRouter initialEntries={[path]}>
        <LocaleSync />
        <LanguageSwitcher />
        <LocationProbe />
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    cleanup();
    localStorage.clear();
    document.documentElement.removeAttribute('dir');
    document.documentElement.removeAttribute('lang');
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

  it('announces the next language and toggles EN ↔ AR', async () => {
    const user = userEvent.setup();
    renderSwitcher();

    const button = screen.getByRole('button', { name: 'Switch to Arabic' });
    expect(button).toHaveAttribute('lang', 'ar');
    expect(button).toHaveTextContent('AR');

    await user.click(button);

    const switched = screen.getByRole('button', { name: 'Switch to English' });
    expect(switched).toHaveAttribute('lang', 'en');
    expect(switched).toHaveTextContent('EN');
    expect(document.documentElement).toHaveAttribute('dir', 'rtl');
    expect(document.documentElement).toHaveAttribute('lang', 'ar');
    expect(localStorage.getItem('language')).toBe('ar');
  });

  it('navigates from the English home to /ar and back', async () => {
    const user = userEvent.setup();
    renderSwitcher('/');
    expect(screen.getByTestId('location')).toHaveTextContent('/');

    await user.click(screen.getByRole('button', { name: 'Switch to Arabic' }));
    expect(screen.getByTestId('location').textContent).toBe('/ar');

    await user.click(screen.getByRole('button', { name: 'Switch to English' }));
    expect(screen.getByTestId('location').textContent).toBe('/');
  });

  it('preserves the current path and query when switching locale', async () => {
    const user = userEvent.setup();
    renderSwitcher('/tools/seo-toolkit');

    await user.click(screen.getByRole('button', { name: 'Switch to Arabic' }));
    expect(screen.getByTestId('location').textContent).toBe('/ar/tools/seo-toolkit');
    expect(document.documentElement).toHaveAttribute('dir', 'rtl');

    await user.click(screen.getByRole('button', { name: 'Switch to English' }));
    expect(screen.getByTestId('location').textContent).toBe('/tools/seo-toolkit');
    expect(document.documentElement).toHaveAttribute('dir', 'ltr');
  });

  it('keeps ?type= filters when switching', async () => {
    const user = userEvent.setup();
    renderSwitcher('/tools?type=web');
    await user.click(screen.getByRole('button', { name: 'Switch to Arabic' }));
    expect(screen.getByTestId('location').textContent).toBe('/ar/tools?type=web');
  });

  it('starts in Arabic under /ar and offers English', () => {
    renderSwitcher('/ar/about');
    expect(screen.getByRole('button', { name: 'Switch to English' })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('lang', 'ar');
  });
});
