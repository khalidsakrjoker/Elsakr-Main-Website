import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Globe, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-medium hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-ink-muted'}`
          }
        >
          {content.nav.home}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-sm font-medium hover:text-accent transition-colors ${isActive ? 'text-accent' : 'text-ink-muted'}`
          }
        >
          {content.nav.about}
        </NavLink>

        {/* Services Mega Menu Trigger */}
        <div
          className="relative h-full flex items-center"
          onMouseEnter={() => {
            setIsServicesHovered(true);
            setIsToolsHovered(false);
          }}
        >
          <NavLink
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
          </NavLink>
        </div>

        {/* Tools Menu Trigger */}
        <div
          className="relative h-full flex items-center"
          onMouseEnter={() => {
            setIsToolsHovered(true);
            setIsServicesHovered(false);
          }}
        >
          <NavLink
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
          </NavLink>
        </div>

        <div className="h-4 w-[1px] bg-[var(--color-border)] mx-2" />
        <LanguageSwitcher />
        <ThemeToggle />
        <NavLink to="/contact">
          <Button variant="primary" className="!py-2 !px-5 text-xs">
            {content.nav.contact}
          </Button>
        </NavLink>
      </div>

      {/* Mega Menu Dropdown - FIXED POSITIONING */}
      <AnimatePresence>
        {isServicesHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
            className="hidden md:flex fixed top-20 left-0 right-0 w-full bg-surface border-b border-app shadow-lg z-40 justify-center"
          >
            <div className="max-w-7xl w-full mx-auto px-6 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Services Grid */}
                <div className="col-span-8 grid grid-cols-2 gap-4">
                  {content.services.items.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      onClick={() => setIsServicesHovered(false)}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-all group border border-transparent hover:border-slate-200 dark:hover:border-white/5"
                    >
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center rounded text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Sidebar Callout */}
                <div className="col-span-4 bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-white/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {language === 'ar' ? 'حلول مصممة' : 'Tailored Solutions'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {language === 'ar'
                        ? 'تحتاج إلى بنية مخصصة؟ يتخصص مهندسونا في الحالات المعقدة.'
                        : 'Need a custom architecture? Our engineers specialize in high-complexity use cases.'}
                    </p>
                  </div>
                  <Link to="/contact" onClick={() => setIsServicesHovered(false)}>
                    <Button variant="outline" fullWidth>
                      {language === 'ar' ? 'تحدث إلى خبير' : 'Talk to an Expert'}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tools Mega Menu Dropdown */}
      <AnimatePresence>
        {isToolsHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsToolsHovered(true)}
            onMouseLeave={() => setIsToolsHovered(false)}
            className="hidden md:flex fixed top-20 left-0 right-0 w-full bg-surface border-b border-app shadow-lg z-40 justify-center"
          >
            <div className="max-w-4xl w-full mx-auto px-6 py-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'أدوات مفتوحة المصدر' : 'Open Source Tools'}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {language === 'ar' ? 'أدوات مجانية للمطورين والمصممين' : 'Free tools for developers and designers'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Desktop Apps */}
                <Link
                  to="/tools?type=desktop"
                  onClick={() => setIsToolsHovered(false)}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all border border-transparent hover:border-blue-500/30 group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {language === 'ar' ? 'تطبيقات سطح المكتب' : 'Desktop Apps'}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {language === 'ar' ? 'تطبيقات EXE للويندوز' : 'Windows .EXE applications'}
                    </p>
                  </div>
                </Link>

                {/* Web Apps */}
                <Link
                  to="/tools?type=web"
                  onClick={() => setIsToolsHovered(false)}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all border border-transparent hover:border-emerald-500/30 group"
                >
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center rounded-xl text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {language === 'ar' ? 'تطبيقات الويب' : 'Web Apps'}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {language === 'ar' ? 'استخدمها أونلاين مباشرة' : 'Use directly in your browser'}
                    </p>
                  </div>
                </Link>
              </div>

              {/* View All Link */}
              <div className="text-center mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <Link
                  to="/tools"
                  onClick={() => setIsToolsHovered(false)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {language === 'ar' ? 'عرض كل الأدوات' : 'View All Tools'}
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
