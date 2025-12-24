import React from "react";
import { useLightMarquee } from "../../lib/useLightMarquee";
import { useContent } from "../../lib/useContent";
import { ExternalLink } from "lucide-react";

const PlatformCard = ({ project }: { project: any }) => {
  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group relative w-[350px] bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex-shrink-0 block"
      draggable={false}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 right-3 flex gap-2">
          {project.tags?.slice(0,2).map((tag: string) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-blue-600 text-white rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5 whitespace-normal">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 group-hover:text-blue-500 transition-colors">
          {project.title}
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {project.description}
        </p>
      </div>
    </a>
  );
};

export const PlatformsMarquee: React.FC = () => {
  const { content, language } = useContent();
  // @ts-ignore
  const projects = content.projects || [];
  
  const { containerRef, trackRef, isDragging } = useLightMarquee({
    speed: 35,
    direction: -1,
    draggable: true,
    pauseOnHover: true
  });

  if (projects.length === 0) return null;

  return (
    <section className="py-16 relative z-10 bg-slate-50/50 dark:bg-luxury-black border-y border-slate-200 dark:border-white/5">
      <div className="px-6 mb-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {language === 'ar' ? "منصاتنا" : "Our Platforms"}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          {language === 'ar' ? "أنظمة مملوكة ومشغلة بالكامل بواسطة الصقر." : "Proprietary systems built and operated by Elsakr."}
        </p>
      </div>
      <div 
        ref={containerRef}
        className={`overflow-hidden whitespace-nowrap ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
        dir="ltr"
      >
        <div 
          ref={trackRef}
          className="flex whitespace-nowrap gap-6 flex-nowrap will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          {/* 4 copies for seamless loop */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-6 flex-shrink-0">
              {projects.map((project: any) => (
                <PlatformCard key={`${i}-${project.id}`} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
