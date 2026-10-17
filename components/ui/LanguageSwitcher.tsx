import React from 'react';
import { Globe } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../lib/ThemeContext';
import { withLocale } from '../../lib/seo/localePath';
import { motion } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
  const { language } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const nextLanguage = language === 'en' ? 'ar' : 'en';
  const ariaLabel = language === 'en' ? 'Switch to Arabic' : 'Switch to English';

  // The URL is the source of truth: navigate to the mirrored EN/AR path and
  // LocaleSync updates the ThemeProvider language from the new pathname.
  const handleSwitch = () => {
    navigate({
      pathname: withLocale(location.pathname, nextLanguage),
      search: location.search,
      hash: location.hash,
    });
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 group"
      aria-label={ariaLabel}
      title={ariaLabel}
      lang={nextLanguage}
    >
      <Globe className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true" />
      <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        {language === 'en' ? 'AR' : 'EN'}
      </span>
      
      {/* Active Indicator */}
      <motion.div 
        layoutId="lang-active"
        className="absolute inset-0 border border-slate-300 dark:border-white/10 rounded-full"
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
    </button>
  );
};
