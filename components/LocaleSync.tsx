import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { getLocaleFromPathname } from '../lib/seo/localePath';

/**
 * Keeps the ThemeProvider language aligned with the URL: `/ar/*` is Arabic,
 * every other route is English. Must render inside a Router and ThemeProvider.
 */
export const LocaleSync: React.FC = () => {
  const { pathname } = useLocation();
  const { language, setLanguage } = useTheme();
  const routeLanguage = getLocaleFromPathname(pathname);

  useEffect(() => {
    if (routeLanguage !== language) {
      setLanguage(routeLanguage);
    }
  }, [routeLanguage, language, setLanguage]);

  return null;
};
