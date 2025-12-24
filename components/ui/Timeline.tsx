import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12 group"
        >
          {/* Node */}
          <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-slate-950 border border-blue-500 rotate-45 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300" />
          
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
            <span className="text-blue-400 font-mono text-lg font-bold">{item.year}</span>
            <span className="text-white text-xl font-bold">{item.title}</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};