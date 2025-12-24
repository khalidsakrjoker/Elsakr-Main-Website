import React from "react";
import { useLightMarquee } from "../../lib/useLightMarquee";
import { useContent } from "../../lib/useContent";

interface ParallaxProps {
  children: React.ReactNode;
  direction: -1 | 1;
  speed: number;
}

function ParallaxText({ children, direction, speed }: ParallaxProps) {
  const { containerRef, trackRef } = useLightMarquee({
    speed,
    direction,
    draggable: false, // Text marquees are NOT draggable
    pauseOnHover: false
  });

  return (
    <div 
      ref={containerRef}
      className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap py-2" 
      dir="ltr" 
      aria-hidden="true"
    >
      <div 
        ref={trackRef}
        className="font-mono font-bold uppercase text-6xl md:text-9xl flex whitespace-nowrap flex-nowrap text-slate-900/20 dark:text-white/20 select-none will-change-transform"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        {/* 4 copies for seamless loop */}
        <span className="block mr-12 py-6 flex-shrink-0">{children}</span>
        <span className="block mr-12 py-6 flex-shrink-0">{children}</span>
        <span className="block mr-12 py-6 flex-shrink-0">{children}</span>
        <span className="block mr-12 py-6 flex-shrink-0">{children}</span>
      </div>
    </div>
  );
}

export const VelocityText: React.FC = () => {
  const { language } = useContent();
  
  const line1 = language === 'ar' ? 'استراتيجية - تصميم - تنفيذ - ' : 'Strategy - Design - Execute - ';
  const line2 = language === 'ar' ? 'ابتكار - توسع - سيطرة - ' : 'Innovate - Scale - Dominate - ';
  
  return (
    <section className="py-12 bg-slate-50/50 dark:bg-[#010208] border-y border-slate-200 dark:border-white/5 relative z-10 overflow-hidden" aria-label="Keywords Marquee">
      <ParallaxText direction={-1} speed={60}>{line1}</ParallaxText>
      <ParallaxText direction={1} speed={60}>{line2}</ParallaxText>
    </section>
  );
};
