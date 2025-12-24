
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
type Language = 'en' | 'ar';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
  direction: 'ltr' | 'rtl';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Check local storage
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    
    // 2. Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
       return 'light';
    }
    
    // 3. Default to dark
    return 'dark';
  });

  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'ar') return saved;
    // Default to browser preference
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'ar' ? 'ar' : 'en';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    root.setAttribute('dir', dir);
    root.setAttribute('lang', language);
    localStorage.setItem('language', language);
    
    // Update font based on language
    if (language === 'ar') {
      root.style.fontFamily = "'Cairo', sans-serif";
    } else {
      root.style.fontFamily = "'Inter', sans-serif";
    }
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      language, 
      toggleLanguage,
      direction: language === 'ar' ? 'rtl' : 'ltr'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
