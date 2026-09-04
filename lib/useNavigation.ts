import { useCallback, useEffect, useState } from 'react';

export interface NavigationState {
  isMenuOpen: boolean;
  isServicesHovered: boolean;
  isToolsHovered: boolean;
  isMobileServicesOpen: boolean;
  isMobileToolsOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  setIsServicesHovered: (open: boolean) => void;
  setIsToolsHovered: (open: boolean) => void;
  toggleMenu: () => void;
  toggleMobileServices: () => void;
  toggleMobileTools: () => void;
  closeAll: () => void;
}

export function useNavigation(pathname: string): NavigationState {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isToolsHovered, setIsToolsHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);

  const closeAll = useCallback(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileToolsOpen(false);
    setIsServicesHovered(false);
    setIsToolsHovered(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional menu reset on route change
    closeAll();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, closeAll]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const toggleMobileServices = useCallback(() => {
    setIsMobileServicesOpen((prev) => !prev);
  }, []);

  const toggleMobileTools = useCallback(() => {
    setIsMobileToolsOpen((prev) => !prev);
  }, []);

  return {
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
    closeAll,
  };
}
