import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  hoverEffect = false,
  delay = 0 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={hoverEffect ? { y: -5 } : {}}
      className={`
        relative overflow-hidden
        bg-white/60 dark:bg-slate-900/40 
        backdrop-blur-xl 
        border border-slate-200 dark:border-white/10 
        shadow-lg dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
        rounded-none
        p-6
        text-slate-900 dark:text-slate-100
        transition-all duration-300
        ${hoverEffect ? 'hover:border-blue-400/50 dark:hover:border-blue-500/50' : ''}
        ${className}
      `}
    >
      {/* Glossy reflection effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-50" />
      
      {children}
    </motion.div>
  );
};