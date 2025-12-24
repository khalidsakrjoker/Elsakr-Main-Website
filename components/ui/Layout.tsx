
import React, { useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Hexagon, ChevronDown, ChevronRight, Globe, Shield, Smartphone, Cloud, PenTool, Cpu, Wrench, Monitor } from 'lucide-react';
import { useContent } from '../../lib/useContent';
import { Button } from './Button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isToolsHovered, setIsToolsHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);
  
  const location = useLocation();
  const { content, language } = useContent();
  const isRTL = language === 'ar';

  React.useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileToolsOpen(false);
    setIsServicesHovered(false);
    setIsToolsHovered(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const toggleMobileTools = () => {
    setIsMobileToolsOpen(!isMobileToolsOpen);
  };

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50/50 dark:bg-luxury-black text-slate-800 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-luxury-gold/30 transition-colors duration-300">
      
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-luxury-gold/10 dark:bg-luxury-gold/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 dark:bg-amber-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal" />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20" />
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.08) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />


      {/* Navigation */}
      <nav 
        className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-luxury-gold/10 bg-stone-500/30 dark:bg-luxury-black/90 backdrop-blur-md transition-colors duration-300"
        onMouseLeave={() => setIsServicesHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          <NavLink to="/" className="flex items-center gap-2 group z-50">
            <div className="relative">
              <img 
                src="/Sakr-logo.webp" 
                alt={content.brand.name} 
                className="w-14 h-14 object-contain transition-transform group-hover:scale-110 duration-300" 
              />
            </div>
            <span className="text-3xl font-bold tracking-widest uppercase font-mono text-gold-24k">
              {content.brand.name}
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
            <NavLink to="/" className={({isActive}) => `text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}>
              {content.nav.home}
            </NavLink>
             <NavLink to="/about" className={({isActive}) => `text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}>
              {content.nav.about}
            </NavLink>
            
            {/* Services Mega Menu Trigger */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => { setIsServicesHovered(true); setIsToolsHovered(false); }}
            >
              <NavLink 
                to="/services" 
                className={({isActive}) => `flex items-center gap-1 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive || isServicesHovered ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
              >
                {content.nav.services}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
              </NavLink>
            </div>

            {/* Tools Menu Trigger */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => { setIsToolsHovered(true); setIsServicesHovered(false); }}
            >
              <NavLink 
                to="/tools" 
                className={({isActive}) => `flex items-center gap-1 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isActive || isToolsHovered ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
              >
                {language === 'ar' ? 'الأدوات' : 'Tools'}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isToolsHovered ? 'rotate-180' : ''}`} />
              </NavLink>
            </div>

            <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2" />
            <LanguageSwitcher />
            <ThemeToggle />
            <NavLink to="/contact">
              <Button variant="primary" className="!py-2 !px-6 text-xs">
                {content.nav.contact}
              </Button>
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
             <LanguageSwitcher />
             <ThemeToggle />
             <button 
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
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
              className="hidden md:flex fixed top-20 left-0 right-0 w-full bg-white/95 dark:bg-[#010208]/95 border-b border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-3xl z-40 justify-center"
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
                          {language === 'ar' ? "حلول مصممة" : "Tailored Solutions"}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          {language === 'ar' 
                            ? "تحتاج إلى بنية مخصصة؟ يتخصص مهندسونا في الحالات المعقدة."
                            : "Need a custom architecture? Our engineers specialize in high-complexity use cases."
                          }
                        </p>
                     </div>
                     <Link to="/contact" onClick={() => setIsServicesHovered(false)}>
                        <Button variant="outline" fullWidth>
                           {language === 'ar' ? "تحدث إلى خبير" : "Talk to an Expert"}
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
              className="hidden md:flex fixed top-20 left-0 right-0 w-full bg-white/95 dark:bg-[#010208]/95 border-b border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-3xl z-40 justify-center"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-[#010208] border-b border-slate-200 dark:border-white/10 flex flex-col gap-0 backdrop-blur-xl shadow-xl overflow-hidden max-h-[85vh] overflow-y-auto"
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
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-slate-50 dark:bg-slate-900/50 rounded-lg mb-4"
                      >
                        {content.services.items.map(service => (
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
                            {language === 'ar' ? "عرض جميع الخدمات" : "View All Services"} <ChevronRight className="w-3 h-3 rtl:rotate-180" />
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
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMobileToolsOpen ? 'rotate-180' : ''}`} />
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
                          {language === 'ar' ? 'عرض كل الأدوات' : 'View All Tools'} <ChevronRight className="w-3 h-3 rtl:rotate-180" />
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
      </nav>

      <main className="relative z-10 pt-20 min-h-[calc(100vh-80px)]">
        {children}
      </main>

      <Footer />
    </div>
  );
};
