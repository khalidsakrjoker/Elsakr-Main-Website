
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useContent } from '../../lib/useContent';

export const ProjectDeck: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const { content, language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, [content]); // Recalculate if content changes (e.g. language switch)

  return (
    <div className="relative overflow-hidden py-12">
      {/* Background track line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10" />

      <motion.div 
        ref={ref} 
        className="cursor-grab active:cursor-grabbing overflow-hidden px-6"
      >
        <motion.div 
          drag="x" 
          // Drag constraints need to be inverted for RTL but Framer Motion handles standard x-axis
          // For RTL, we might want to initial position differently or just rely on standard LTR drag physics which works fine for scrolling lists
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8"
        >
          {content.projects.map((project) => (
            <motion.div 
              key={project.id}
              className="relative min-w-[300px] md:min-w-[400px] h-[500px] group select-none"
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
                onClick={(e) => {
                  // Prevent click if user was dragging (simple heuristic: if moved more than 5px)
                  // In a real draggable carousel, we usually check separate drag state. 
                  // For now, rely on standard click since drag="x" might consume click events differently.
                }}
              >
              {/* Image Container */}
                <div className="relative h-[80%] w-full overflow-hidden border border-white/10 bg-slate-950">
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 p-6 z-20 bg-gradient-to-t from-slate-950 to-transparent w-full text-left rtl:text-right">
                  <span className="text-blue-400 font-mono text-xs uppercase tracking-widest block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Details */}
              <div className="h-[20%] flex items-center justify-between border-b border-l border-r border-white/10 p-6 bg-slate-900/50 backdrop-blur-sm">
                <p className="text-slate-400 text-sm line-clamp-2 w-3/4">
                  {project.description}
                </p>
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                  <ArrowIcon className={`w-4 h-4 text-white ${language === 'ar' ? 'rotate-45' : '-rotate-45'} group-hover:rotate-0 transition-transform duration-300`} />
                </div>
              </div>
              </a>
            </motion.div>
          ))}
          
          {/* View All Card */}
          <motion.div className="relative min-w-[200px] h-[500px] flex items-center justify-center border border-white/5 border-dashed bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="text-center">
               <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                 <ArrowIcon className="w-6 h-6 text-white" />
               </div>
               <span className="font-mono text-sm text-slate-400 uppercase tracking-widest">
                  {language === 'ar' ? "عرض الكل" : "View All"}
                  <br/>
                  {language === 'ar' ? "المنصات" : "Platforms"}
               </span>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
};
