import React from 'react';
import { Layout } from '../components/ui/Layout';
import { Timeline } from '../components/ui/Timeline';
import { useContent } from '../lib/useContent';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const { content, language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <Layout>
      <section className="relative py-20 px-6 bg-app overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              {content.brand.name}
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight text-ink">
              {content.about.title}
            </h1>
            <p
              className={`text-xl text-ink-muted leading-relaxed mb-8 ${
                language === 'ar' ? 'border-r-2 pr-6' : 'border-l-2 pl-6'
              } border-[var(--color-accent)]`}
            >
              {content.about.mission}
            </p>
            <p className="text-ink-muted leading-relaxed mb-8">{content.about.story}</p>
            <Link to="/contact">
              <Button variant="primary">
                {language === 'ar' ? 'انضم للمهمة' : 'Join the Mission'}{' '}
                <ArrowIcon className={`w-4 h-4 inline ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
          </motion.div>

          <div className="p-8 bg-surface border border-app rounded-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent-soft rounded-md">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold text-ink">
                  {language === 'ar' ? 'خارطة الطريق' : 'Strategic Roadmap'}
                </h2>
                <p className="text-ink-muted text-xs uppercase tracking-wider">
                  {language === 'ar' ? 'تطور وإنجازات' : 'Evolution & Milestones'}
                </p>
              </div>
            </div>
            <Timeline items={content.about.timeline} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-muted border-y border-app">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4 text-ink">
              {language === 'ar' ? 'مبادئ التشغيل' : 'Our Operating Principles'}
            </h2>
            <p className="max-w-2xl mx-auto text-ink-muted">
              {language === 'ar'
                ? 'نسترشد بمعايير غير قابلة للتفاوض تحدد كودنا وسلوكنا.'
                : 'We are guided by non-negotiable standards that define our code and our conduct.'}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {content.about.values.map((val) => (
              <div key={val.title} className="text-center p-6 bg-surface border border-app rounded-lg hover-lift">
                <div className="mx-auto w-12 h-12 bg-accent-soft flex items-center justify-center mb-4 rounded-full">
                  <val.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">{val.title}</h3>
                <p className="text-ink-muted text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
