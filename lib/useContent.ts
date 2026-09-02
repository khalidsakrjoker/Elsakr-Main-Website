
import { useTheme } from './ThemeContext';
import { content as enContent } from '../content/en/index';
import { content as arContent } from '../content/ar/index';
import type { SiteContent } from './types';

export const useContent = () => {
  const { language } = useTheme();
  const content: SiteContent = language === 'ar' ? arContent : enContent;
  return {
    content,
    language,
  };
};
