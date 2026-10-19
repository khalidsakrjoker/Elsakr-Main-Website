import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LocaleLink, LocaleNavLink } from '../LocaleLink';
import { LocaleSync } from '../../LocaleSync';
import { ThemeProvider } from '../../../lib/ThemeContext';

function renderLinks(path: string) {
  return render(
    <ThemeProvider initialLanguage={path.startsWith('/ar') ? 'ar' : 'en'}>
      <MemoryRouter initialEntries={[path]}>
        <LocaleSync />
        <LocaleLink to="/">Home</LocaleLink>
        <LocaleLink to="/about">About</LocaleLink>
        <LocaleLink to="/services/web">Web</LocaleLink>
        <LocaleNavLink to="/">Nav Home</LocaleNavLink>
        <LocaleNavLink to="/about">Nav About</LocaleNavLink>
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('LocaleLink', () => {
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

  it('keeps Arabic visitors under /ar for home, about, and service links', () => {
    renderLinks('/ar/services');

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/ar');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/ar/about');
    expect(screen.getByRole('link', { name: 'Web' })).toHaveAttribute('href', '/ar/services/web');
    expect(screen.getByRole('link', { name: 'Nav Home' })).toHaveAttribute('href', '/ar');
    expect(screen.getByRole('link', { name: 'Nav About' })).toHaveAttribute('href', '/ar/about');
  });

  it('leaves English visitors on unprefixed paths', () => {
    renderLinks('/services');

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Web' })).toHaveAttribute('href', '/services/web');
    expect(screen.getByRole('link', { name: 'Nav Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Nav About' })).toHaveAttribute('href', '/about');
  });
});
