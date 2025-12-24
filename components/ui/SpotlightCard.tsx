
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  spotlightColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.5)"
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden 
        bg-white dark:bg-slate-900/40 
        border border-slate-200 dark:border-white/10 
        backdrop-blur-md
        group
        shadow-sm dark:shadow-none
        ${className}
      `}
    >
      {/* Spotlight Effect Layer */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          opacity: opacity,
        }}
      />
      
      {/* Inner Content Mask */}
      <div className="relative h-full bg-white/95 dark:bg-slate-950/80 p-6 z-10 m-[1px] transition-colors duration-500">
        {children}
      </div>

      {/* Sharp Edge Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-300 dark:border-white/10 transition-colors group-hover:border-blue-500/50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-300 dark:border-white/10 transition-colors group-hover:border-blue-500/50" />
    </motion.div>
  );
};