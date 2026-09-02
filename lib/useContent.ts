
import { useTheme } from './ThemeContext';
import { content as enContent } from '../content/en';
import { content as arContent } from '../content/ar';
import type { ContentWithTools } from './types';

export const useContent = () => {
  const { language } = useTheme();
  const content = (language === 'ar' ? arContent : enContent) as typeof enContent & ContentWithTools;
  return {
    content,
    language,
  };
};
