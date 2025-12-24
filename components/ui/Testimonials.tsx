
import React from 'react';
import { useContent } from '../../lib/useContent';
import { Quote } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const Testimonials: React.FC = () => {
  const { content } = useContent();
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {content.testimonials.map((t, i) => (
        <GlassCard key={i} className="flex flex-col justify-between" delay={i * 0.1}>
          <div className="mb-6">
            <Quote className="w-8 h-8 text-blue-500/50 mb-4" />
            <p className="text-slate-600 dark:text-slate-300 italic text-lg leading-relaxed">
              "{t.quote}"
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
            <img 
              src={t.image} 
              alt={t.author} 
              className="w-12 h-12 rounded-full object-cover border border-slate-200 dark:border-white/10"
            />
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.author}</h4>
              <p className="text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider">{t.role}</p>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
};
