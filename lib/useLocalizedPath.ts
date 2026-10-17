import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { getLocaleFromPathname, localizedPath } from './seo/localePath';

/**
 * Returns a function that maps English internal paths to the locale of the current URL
 * (`/ar` prefix while browsing Arabic). The URL is the source of truth, so links are
 * correct even before the ThemeProvider language has caught up after a navigation.
 */
export function useLocalizedPath(): (path: string) => string {
  const { pathname } = useLocation();
  const language = getLocaleFromPathname(pathname);
  return useCallback((path: string) => localizedPath(path, language), [language]);
}
