import { useTheme } from './ThemeContext';
import { editorial as enEditorial } from '../content/en/editorial';
import { editorial as arEditorial } from '../content/ar/editorial';
import type { EditorialContent } from '../content/shared/editorialTypes';
import type { Language } from './ThemeContext';

export function useEditorial(): { editorial: EditorialContent; language: Language } {
  const { language } = useTheme();
  return { editorial: language === 'ar' ? arEditorial : enEditorial, language };
}
