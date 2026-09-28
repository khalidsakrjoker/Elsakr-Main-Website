import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ToolsMegaMenuProps {
  language: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ToolsMegaMenu: React.FC<ToolsMegaMenuProps> = ({
  language,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          className="hidden md:flex fixed top-20 left-0 right-0 w-full bg-surface border-b border-app shadow-lg z-40 justify-center"
          data-testid="tools-mega-menu"
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
              <Link
                to="/tools?type=desktop"
                onClick={onClose}
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

              <Link
                to="/tools?type=web"
                onClick={onClose}
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

            <div className="text-center mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
              <Link
                to="/tools"
                onClick={onClose}
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
  );
};
