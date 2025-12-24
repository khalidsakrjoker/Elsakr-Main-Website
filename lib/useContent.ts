
import { useTheme } from './ThemeContext';
import { content as enContent } from '../content/en';
import { content as arContent } from '../content/ar';

export const useContent = () => {
  const { language } = useTheme();
  return {
    content: language === 'ar' ? arContent : enContent,
    language
  };
};
