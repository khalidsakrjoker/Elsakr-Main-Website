import React from 'react';
import { MagneticButton } from './MagneticButton';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = "",
  ...props 
}) => {
  const baseStyles = "relative group px-8 py-3 font-mono text-sm tracking-wider uppercase transition-all duration-300 outline-none disabled:opacity-50 overflow-hidden";
  
  const variants = {
    primary: "bg-slate-900 dark:bg-white text-white dark:text-black border border-transparent font-bold hover:bg-black dark:hover:bg-slate-200",
    secondary: "bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10",
    outline: "bg-transparent text-slate-900 dark:text-white border border-slate-900 dark:border-white hover:bg-slate-50 dark:hover:bg-white/5"
  };

  const btnContent = (
     <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Glitch/Hover Layers */}
      <span className="absolute inset-0 bg-white/20 translate-y-full skew-y-12 group-hover:translate-y-0 group-hover:skew-y-0 transition-transform duration-300 ease-out z-0" />
      
      {/* Sharp Tech Corners */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-900/30 dark:border-white/30 transition-all group-hover:w-full group-hover:h-full group-hover:border-slate-900 dark:group-hover:border-white" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-900/30 dark:border-white/30 transition-all group-hover:w-full group-hover:h-full group-hover:border-slate-900 dark:group-hover:border-white" />
    </button>
  );

  // Wrap in magnetic effect
  return (
    <MagneticButton className={fullWidth ? 'w-full' : 'inline-block'}>
      {btnContent}
    </MagneticButton>
  );
};