import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import type { SiteContent } from '../../lib/types';

export interface ServicesMegaMenuProps {
  content: SiteContent;
  language: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({
  content,
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
          data-testid="services-mega-menu"
        >
          <div className="max-w-7xl w-full mx-auto px-6 py-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8 grid grid-cols-2 gap-4">
                {content.services.items.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    onClick={onClose}
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
                <Link to="/contact" onClick={onClose}>
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
  );
};
