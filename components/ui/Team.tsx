
import React from 'react';
import { useContent } from '../../lib/useContent';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Team: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="grid md:grid-cols-4 gap-8">
      {content.about.team.map((member, i) => (
        <div key={i} className="group relative">
          <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-slate-800">
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity" />
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
            {/* Social Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-slate-950/80 backdrop-blur-sm z-20 flex justify-center gap-4">
               <a href="#" className="text-white hover:text-blue-400"><Linkedin className="w-4 h-4" /></a>
               <a href="#" className="text-white hover:text-blue-400"><Twitter className="w-4 h-4" /></a>
               <a href="#" className="text-white hover:text-blue-400"><Github className="w-4 h-4" /></a>
            </div>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-widest">{member.role}</p>
        </div>
      ))}
    </div>
  );
};
