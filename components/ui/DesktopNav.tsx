import React from 'react';
import { LocaleNavLink } from './LocaleLink';
import { ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import { ToolsMegaMenu } from './ToolsMegaMenu';
import type { SiteContent } from '../../lib/types';

export interface DesktopNavProps {
  content: SiteContent;
  language: string;
  isServicesHovered: boolean;
  isToolsHovered: boolean;
  setIsServicesHovered: (value: boolean) => void;
  setIsToolsHovered: (value: boolean) => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  content,
  language,
  isServicesHovered,
  isToolsHovered,
  setIsServicesHovered,
  setIsToolsHovered,
}) => {
  return (
    <>
      <div className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
        <LocaleNavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-medium hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-ink-muted'}`
          }
        >
          {content.nav.home}
        </LocaleNavLink>
        <LocaleNavLink
          to="/about"
          className={({ isActive }) =>
            `text-sm font-medium hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-ink-muted'}`
          }
        >
          {content.nav.about}
        </LocaleNavLink>
        <LocaleNavLink
          to="/case-studies"
          className={({ isActive }) =>
            `text-sm font-medium hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-ink-muted'}`
          }
        >
          {language === 'ar' ? 'دراسات الحالة' : 'Case Studies'}
        </LocaleNavLink>
        <LocaleNavLink
          to="/insights"
          className={({ isActive }) =>
            `text-sm font-medium hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-ink-muted'}`
          }
        >
          {language === 'ar' ? 'مقالات' : 'Insights'}
        </LocaleNavLink>

        <div
          className="relative h-full flex items-center"
          onMouseEnter={() => {
            setIsServicesHovered(true);
            setIsToolsHovered(false);
          }}
        >
          <LocaleNavLink
            to="/services"
            className={({ isActive }) =>
              `flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${
                isActive || isServicesHovered ? 'text-accent' : 'text-ink-muted'
              }`
            }
          >
            {content.nav.services}
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`}
            />
          </LocaleNavLink>
        </div>

        <div
          className="relative h-full flex items-center"
          onMouseEnter={() => {
            setIsToolsHovered(true);
            setIsServicesHovered(false);
          }}
        >
          <LocaleNavLink
            to="/tools"
            className={({ isActive }) =>
              `flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${
                isActive || isToolsHovered ? 'text-accent' : 'text-ink-muted'
              }`
            }
          >
            {language === 'ar' ? 'الأدوات' : 'Tools'}
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-300 ${isToolsHovered ? 'rotate-180' : ''}`}
            />
          </LocaleNavLink>
        </div>

        <div className="h-4 w-[1px] bg-[var(--color-border)] mx-2" />
        <LanguageSwitcher />
        <ThemeToggle />
        <LocaleNavLink to="/contact">
          <Button variant="primary" className="!py-2 !px-5 text-xs">
            {content.nav.contact}
          </Button>
        </LocaleNavLink>
      </div>

      <ServicesMegaMenu
        content={content}
        language={language}
        isOpen={isServicesHovered}
        onOpen={() => setIsServicesHovered(true)}
        onClose={() => setIsServicesHovered(false)}
      />

      <ToolsMegaMenu
        language={language}
        isOpen={isToolsHovered}
        onOpen={() => setIsToolsHovered(true)}
        onClose={() => setIsToolsHovered(false)}
      />
    </>
  );
};
