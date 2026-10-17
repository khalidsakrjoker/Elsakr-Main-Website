import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { logger } from './logger';
import { getLocaleFromPathname } from './seo/localePath';

export type Theme = 'dark' | 'light';
export type Language = 'en' | 'ar';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  direction: 'ltr' | 'rtl';
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  /** Language used for the first render (SSR / prerender). Defaults to the URL locale. */
  initialLanguage?: Language;
  /** Theme used for the first render. Defaults to `dark` and is refined on the client. */
  initialTheme?: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const hasWindow = () => typeof window !== 'undefined';

function safeSetItem(key: string, value: string) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    logger.error('ThemeContext storage write failed', {
      key,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

/** Client-only: saved theme, then OS preference, then dark. Never touches window during SSR. */
function readClientTheme(): Theme {
  if (!hasWindow()) return 'dark';

  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
  } catch (error) {
    logger.error('ThemeContext storage read failed', {
      key: 'theme',
      error: error instanceof Error ? error.message : String(error),
    });
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  return 'dark';
}

/** The URL is the source of truth for language: `/ar/*` is Arabic, everything else English. */
function resolveInitialLanguage(initialLanguage?: Language): Language {
  if (initialLanguage) return initialLanguage;
  if (!hasWindow()) return 'en';
  return getLocaleFromPathname(window.location.pathname);
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialLanguage,
  initialTheme,
}) => {
  // Start from a deterministic theme so server HTML and the first client render agree;
  // the saved / system preference is applied right after mount.
  const [theme, setTheme] = useState<Theme>(initialTheme ?? 'dark');
  const [language, setLanguage] = useState<Language>(() => resolveInitialLanguage(initialLanguage));

  useEffect(() => {
    if (initialTheme) return;
    const preferred = readClientTheme();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- apply stored preference after hydration
    setTheme(preferred);
  }, [initialTheme]);

  useEffect(() => {
    if (!hasWindow()) return;
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (!hasWindow()) return;
    const root = window.document.documentElement;
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    root.setAttribute('dir', dir);
    root.setAttribute('lang', language);
    safeSetItem('language', language);

    if (language === 'ar') {
      root.style.fontFamily = 'var(--font-ar)';
    } else {
      root.style.fontFamily = 'var(--font-sans)';
    }
  }, [language]);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    safeSetItem('theme', next);
  }, [theme]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const value = useMemo<ThemeContextType>(
    () => ({
      theme,
      toggleTheme,
      language,
      setLanguage,
      toggleLanguage,
      direction: language === 'ar' ? 'rtl' : 'ltr',
    }),
    [theme, toggleTheme, language, toggleLanguage]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
