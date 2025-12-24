
import React from 'react';
import { Globe } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';
import { motion } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useTheme();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-200 focus:outline-none group"
      aria-label="Toggle Language"
    >
      <Globe className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
      <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        {language === 'en' ? 'AR' : 'EN'}
      </span>
      
      {/* Active Indicator */}
      <motion.div 
        layoutId="lang-active"
        className="absolute inset-0 border border-slate-300 dark:border-white/10 rounded-full"
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};
