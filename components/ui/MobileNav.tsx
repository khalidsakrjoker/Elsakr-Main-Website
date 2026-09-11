import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Globe, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './Button';
import type { SiteContent } from '../../lib/types';

export interface MobileNavProps {
  content: SiteContent;
  language: string;
  isMenuOpen: boolean;
  isMobileServicesOpen: boolean;
  isMobileToolsOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  toggleMenu: () => void;
  toggleMobileServices: () => void;
  toggleMobileTools: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  content,
  language,
  isMenuOpen,
  isMobileServicesOpen,
  isMobileToolsOpen,
  setIsMenuOpen,
  toggleMenu,
  toggleMobileServices,
  toggleMobileTools,
}) => {
  return (
    <>
      {/* Mobile Toggle Controls */}
      <div className="flex items-center gap-4 md:hidden">
        <LanguageSwitcher />
        <ThemeToggle />
        <button
          className="p-2 text-ink-muted hover:text-ink"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-20 left-0 right-0 w-full bg-white dark:bg-[#010208] border-b border-slate-200 dark:border-white/10 flex flex-col gap-0 backdrop-blur-xl shadow-xl overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="p-6 flex flex-col">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 border-b border-slate-100 dark:border-white/5"
              >
                {content.nav.home}
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 border-b border-slate-100 dark:border-white/5"
              >
                {content.nav.about}
              </NavLink>

              {/* Mobile Services Accordion */}
              <div className="border-b border-slate-100 dark:border-white/5">
                <button
                  onClick={toggleMobileServices}
                  className="w-full py-4 flex items-center justify-between text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500"
                >
                  {content.nav.services}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-slate-50 dark:bg-slate-900/50 rounded-lg mb-4"
                    >
                      {content.services.items.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 py-3 px-4 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-white dark:hover:bg-white/5 transition-all"
                        >
                          <service.icon className="w-4 h-4 opacity-70" />
                          {service.title}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      >
                        {language === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}{' '}
                        <ChevronRight className="w-3 h-3 rtl:rotate-180" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Tools Accordion */}
              <div className="border-b border-slate-100 dark:border-white/5">
                <button
                  onClick={toggleMobileTools}
                  className="w-full py-4 flex items-center justify-between text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500"
                >
                  {language === 'ar' ? 'الأدوات' : 'Tools'}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isMobileToolsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isMobileToolsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-slate-50 dark:bg-slate-900/50 rounded-lg mb-4"
                    >
                      <Link
                        to="/tools?type=desktop"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-white dark:hover:bg-white/5 transition-all"
                      >
                        <Monitor className="w-4 h-4 opacity-70" />
                        {language === 'ar' ? 'تطبيقات سطح المكتب' : 'Desktop Apps'}
                      </Link>
                      <Link
                        to="/tools?type=web"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:bg-white dark:hover:bg-white/5 transition-all"
                      >
                        <Globe className="w-4 h-4 opacity-70" />
                        {language === 'ar' ? 'تطبيقات الويب' : 'Web Apps'}
                      </Link>
                      <Link
                        to="/tools"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      >
                        {language === 'ar' ? 'عرض كل الأدوات' : 'View All Tools'}{' '}
                        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500"
              >
                {content.nav.contact}
              </NavLink>

              <div className="mt-8">
                <Button fullWidth onClick={() => setIsMenuOpen(false)}>
                  <Link to="/contact">{content.hero.cta}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
