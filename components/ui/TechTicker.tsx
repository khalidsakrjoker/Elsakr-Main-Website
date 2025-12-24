import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../../lib/useContent';

export const TechTicker: React.FC = () => {
  const { content, language } = useContent();
  const direction = language === 'ar' ? 1 : -1;
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // IntersectionObserver for visibility-based animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '50px', threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={containerRef}
      aria-label={language === 'ar' ? "التقنيات المستخدمة" : "Technologies Used"}
      className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-900/30 border-y border-slate-200 dark:border-white/5 py-8 backdrop-blur-sm group"
    >
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-100 dark:from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-100 dark:from-slate-950 to-transparent pointer-events-none" />
      
      <motion.div 
        className="flex gap-16 min-w-max px-8 motion-reduce:animate-none group-hover:[animation-play-state:paused]"
        style={{ willChange: 'transform' }}
        animate={isVisible ? { x: ["0%", `${direction * 50}%`] } : {}}
        transition={{ 
          duration: 40, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {/* Original List */}
        <ul className="flex gap-16 items-center m-0 p-0 list-none">
          {content.techStack.map((tech, i) => (
            <li key={`original-${i}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 group/item cursor-default">
              <tech.icon className="w-6 h-6 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors" />
              <span className="font-mono text-sm uppercase tracking-wider font-bold group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Duplicate List for Loop */}
        <ul aria-hidden="true" className="flex gap-16 items-center m-0 p-0 list-none">
          {content.techStack.map((tech, i) => (
            <li key={`duplicate-${i}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 group/item cursor-default">
              <tech.icon className="w-6 h-6 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors" />
              <span className="font-mono text-sm uppercase tracking-wider font-bold group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
