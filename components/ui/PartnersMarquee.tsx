import React from "react";
import { useLightMarquee } from "../../lib/useLightMarquee";
import { useContent } from "../../lib/useContent";
import { useTheme } from "../../lib/ThemeContext";

const PartnerCard = ({ client }: { client: any }) => {
  const { theme } = useTheme();
  
  const logoSrc = (theme === 'dark' && client.logoDark) 
    ? client.logoDark 
    : (theme === 'light' && client.logoLight)
      ? client.logoLight
      : client.logo;

  return (
    <a 
      href={client.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group relative bg-white dark:bg-slate-800/50 px-8 py-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 block cursor-pointer flex-shrink-0"
      draggable={false}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-0" />
      <img 
        src={logoSrc} 
        alt={client.name} 
        loading="lazy"
        draggable={false}
        className="h-10 md:h-14 w-auto object-contain relative z-10 filter dark:invert-0 select-none pointer-events-none"
      />
    </a>
  );
};

export const PartnersMarquee: React.FC = () => {
  const { content, language } = useContent();
  const { containerRef, trackRef, isDragging } = useLightMarquee({
    speed: 40,
    direction: -1,
    draggable: true,
    pauseOnHover: true
  });

  return (
    <section className="py-10 border-y border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          {language === 'ar' ? "شركاء التقنية" : "Technical Alliances"}
        </h3>
      </div>
      <div 
        ref={containerRef}
        className={`overflow-hidden whitespace-nowrap ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
        dir="ltr"
      >
        <div 
          ref={trackRef}
          className="flex whitespace-nowrap gap-8 flex-nowrap will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          {/* 4 copies for seamless loop */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 flex-shrink-0">
              {content.clients.map((client: any, j: number) => (
                <PartnerCard key={`${i}-${j}`} client={client} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
