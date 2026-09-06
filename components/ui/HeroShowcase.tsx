import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Shield, Sparkles } from 'lucide-react';
import { prefersReducedMotion } from '../../lib/motion';

interface HeroShowcaseProps {
  language: string;
  brandName: string;
}

export function HeroShowcase({ language, brandName }: HeroShowcaseProps) {
  const reduce = prefersReducedMotion();

  return (
    <div
      data-testid="hero-showcase"
      className="relative hidden lg:block h-[520px] w-full"
      aria-hidden={false}
      aria-label={language === 'ar' ? 'عرض بصري للعلامة' : 'Brand visual showcase'}
    >
      {/* Ambient falcon glow */}
      <div
        className="absolute inset-8 rounded-full bg-[radial-gradient(circle_at_center,var(--color-accent-soft),transparent_65%)] blur-2xl pointer-events-none"
        aria-hidden
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0 : 0.8 }}
      >
        <div className="relative w-full max-w-md aspect-square">
          {/* Back plate */}
          <div className="absolute inset-6 rounded-2xl border border-app bg-surface/80 backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.25)] rotate-[-4deg]" />

          {/* Falcon mark stage */}
          <div className="absolute inset-10 rounded-2xl bg-black border border-app flex items-center justify-center overflow-hidden hero-falcon-stage">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at 30% 20%, var(--color-accent-soft), transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(180,83,9,0.2), transparent 45%)',
              }}
              aria-hidden
            />
            <img
              src="/Sakr-logo.webp"
              alt=""
              className="relative z-10 w-[58%] h-[58%] object-contain drop-shadow-[0_12px_40px_rgba(232,160,74,0.35)]"
            />
            <p className="absolute bottom-5 left-0 right-0 text-center font-display text-sm tracking-[0.25em] uppercase text-white/70">
              {brandName}
            </p>
          </div>

          {/* Floating accent cards */}
          <motion.div
            className="absolute -left-2 top-16 w-44 p-4 rounded-lg bg-surface border border-app shadow-lg"
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Shield className="w-5 h-5 text-accent mb-2" />
            <p className="text-xs font-semibold text-ink">
              {language === 'ar' ? 'أنظمة إنتاج' : 'Production systems'}
            </p>
            <p className="text-[11px] text-ink-muted mt-1">
              {language === 'ar' ? 'FinTech وبنية سحابية' : 'FinTech & cloud cores'}
            </p>
          </motion.div>

          <motion.div
            className="absolute -right-4 top-28 w-44 p-4 rounded-lg bg-surface border border-app shadow-lg"
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            <Layers className="w-5 h-5 text-accent mb-2" />
            <p className="text-xs font-semibold text-ink">
              {language === 'ar' ? 'منصات مملوكة' : 'Owned platforms'}
            </p>
            <p className="text-[11px] text-ink-muted mt-1">Kashx · StoreX</p>
          </motion.div>

          <motion.div
            className="absolute left-10 -bottom-2 w-52 p-4 rounded-lg bg-surface border border-app shadow-lg"
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-accent mb-2" />
            <p className="text-xs font-semibold text-ink">
              {language === 'ar' ? 'أدوات مفتوحة المصدر' : 'Open tools ecosystem'}
            </p>
            <div className="mt-2 h-1.5 rounded-full bg-app overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: '28%' }}
                animate={reduce ? { width: '72%' } : { width: ['28%', '86%', '72%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
