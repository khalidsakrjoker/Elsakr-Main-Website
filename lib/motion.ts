/** Shared page-enter / reduced-motion helpers for Falcon polish. */

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const pageEnterTransition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function getPageEnterProps() {
  if (prefersReducedMotion()) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: pageEnterTransition,
  };
}
