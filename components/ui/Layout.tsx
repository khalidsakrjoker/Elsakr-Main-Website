import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useContent } from '../../lib/useContent';
import { useNavigation } from '../../lib/useNavigation';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { Footer } from './Footer';
import { motion } from 'framer-motion';
import { getPageEnterProps } from '../../lib/motion';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { content, language } = useContent();
  const {
    isMenuOpen,
    isServicesHovered,
    isToolsHovered,
    isMobileServicesOpen,
    isMobileToolsOpen,
    setIsMenuOpen,
    setIsServicesHovered,
    setIsToolsHovered,
    toggleMenu,
    toggleMobileServices,
    toggleMobileTools,
  } = useNavigation(location.pathname);

  return (
    <div
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-app text-ink font-sans overflow-x-hidden theme-crossfade"
    >
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 border-b border-app bg-surface/90 backdrop-blur-md transition-colors duration-300"
        onMouseLeave={() => {
          setIsServicesHovered(false);
          setIsToolsHovered(false);
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          <NavLink to="/" className="flex items-center gap-2 group z-50">
            <div className="relative">
              <img
                src="/Sakr-logo.webp"
                alt={content.brand.shortName}
                className="w-12 h-12 object-contain transition-transform group-hover:scale-105 duration-300"
              />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-ink">
              {content.brand.shortName}
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <DesktopNav
            content={content}
            language={language}
            isServicesHovered={isServicesHovered}
            isToolsHovered={isToolsHovered}
            setIsServicesHovered={setIsServicesHovered}
            setIsToolsHovered={setIsToolsHovered}
          />

          {/* Mobile Nav */}
          <MobileNav
            content={content}
            language={language}
            isMenuOpen={isMenuOpen}
            isMobileServicesOpen={isMobileServicesOpen}
            isMobileToolsOpen={isMobileToolsOpen}
            setIsMenuOpen={setIsMenuOpen}
            toggleMenu={toggleMenu}
            toggleMobileServices={toggleMobileServices}
            toggleMobileTools={toggleMobileTools}
          />
        </div>
      </nav>

      <main className="relative z-10 pt-20 min-h-[calc(100vh-80px)]">
        <motion.div {...getPageEnterProps()}>{children}</motion.div>
      </main>

      <Footer />
    </div>
  );
};
