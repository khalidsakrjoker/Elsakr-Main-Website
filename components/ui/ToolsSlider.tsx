import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Tool } from '../../lib/types';
import { prefersReducedMotion } from '../../lib/motion';

interface ToolsSliderProps {
  tools: Tool[];
  language: string;
}

export function ToolsSlider({ tools, language }: ToolsSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isRtl = language === 'ar';

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(index, tools.length - 1));
      const slide = track.children[clamped] as HTMLElement | undefined;
      if (!slide) return;
      slide.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        inline: 'center',
        block: 'nearest',
      });
      setActiveIndex(clamped);
    },
    [tools.length]
  );

  const step = useCallback(
    (direction: 1 | -1) => {
      const delta = isRtl ? -direction : direction;
      scrollToIndex(activeIndex + delta);
    },
    [activeIndex, isRtl, scrollToIndex]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      if (slides.length === 0) return;
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let closestDist = Number.POSITIVE_INFINITY;
      slides.forEach((slide, i) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(slideCenter - trackCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [tools.length]);

  if (tools.length === 0) return null;

  const maxDots = Math.min(tools.length, 12);
  const dotStep = tools.length > maxDots ? Math.ceil(tools.length / maxDots) : 1;

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={language === 'ar' ? 'سلايدر الأدوات' : 'Tools slider'}
    >
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            step(1);
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            step(-1);
          }
        }}
      >
        {tools.map((tool) => (
          <Link
            key={tool.id}
            to={`/tools/${tool.id}`}
            className="group snap-center shrink-0 w-[min(85vw,320px)] p-5 bg-app border border-app rounded-lg hover-lift hover:border-[var(--color-accent)] transition-colors"
          >
            {tool.logo ? (
              <img src={tool.logo} alt="" className="w-14 h-14 mb-4 object-contain" />
            ) : (
              <div className="w-14 h-14 mb-4 rounded-md bg-accent-soft flex items-center justify-center text-accent font-display font-bold text-lg">
                {tool.title.charAt(0)}
              </div>
            )}
            <h3 className="font-semibold text-ink group-hover:text-accent transition-colors mb-1">
              {tool.title}
            </h3>
            <p className="text-sm text-ink-muted line-clamp-2">{tool.description}</p>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 mt-4">
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={language === 'ar' ? 'السابق' : 'Previous tools'}
            onClick={() => step(-1)}
            className="w-10 h-10 rounded-md border border-app bg-surface text-ink hover:border-[var(--color-accent)] hover:text-accent transition-colors inline-flex items-center justify-center"
          >
            {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
          <button
            type="button"
            aria-label={language === 'ar' ? 'التالي' : 'Next tools'}
            onClick={() => step(1)}
            className="w-10 h-10 rounded-md border border-app bg-surface text-ink hover:border-[var(--color-accent)] hover:text-accent transition-colors inline-flex items-center justify-center"
          >
            {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex flex-wrap justify-end gap-1.5" role="tablist" aria-label="Slides">
          {Array.from({ length: Math.ceil(tools.length / dotStep) }, (_, i) => {
            const target = Math.min(i * dotStep, tools.length - 1);
            const isActive = activeIndex >= target && activeIndex < target + dotStep;
            return (
              <button
                key={target}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to tool ${target + 1}`}
                onClick={() => scrollToIndex(target)}
                className={`h-2 rounded-full transition-all ${
                  isActive ? 'w-6 bg-accent' : 'w-2 bg-[var(--color-border)] hover:bg-accent/50'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
