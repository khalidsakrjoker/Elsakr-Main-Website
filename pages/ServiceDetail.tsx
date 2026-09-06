import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Layout } from '../components/ui/Layout';
import { useContent } from '../lib/useContent';
import { Button } from '../components/ui/Button';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { content, language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const service = content.services.items.find((item) => item.id === id);

  if (!service || !service.details) {
    return <Navigate to="/services" replace />;
  }

  const { details } = service;

  return (
    <Layout>
      <section className="relative py-20 px-6 bg-app overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-surface border border-app rounded-md">
              <service.icon className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {service.title}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-ink leading-tight">
              {details.tagline}
            </h1>
            <p className="text-xl text-ink-muted mb-8 leading-relaxed">{details.longDescription}</p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="primary">
                  {language === 'ar' ? 'ابدأ الاستشارة' : 'Start Consultation'}
                  <ArrowIcon className={`w-4 h-4 inline ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline">
                  {language === 'ar' ? 'كل الحلول' : 'All Solutions'}
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="p-8 bg-surface border border-app rounded-lg">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-muted mb-6">
              Tech stack
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {details.tech.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-3 p-3 bg-app border border-app rounded-md"
                >
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm text-ink">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-muted border-y border-app px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-16 text-center text-ink">
            {language === 'ar' ? `لماذا تختار ${content.brand.name}` : `Why Choose ${content.brand.name}`}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {details.benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-surface border border-app rounded-lg hover-lift">
                <div className="w-12 h-12 bg-accent-soft flex items-center justify-center mb-6 rounded-md">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-ink">{benefit.title}</h3>
                <p className="text-ink-muted leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-app">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-ink">
                {language === 'ar' ? 'القدرات' : 'Capabilities'}
              </h2>
              <p className="text-ink-muted mb-8">
                {language === 'ar'
                  ? `تمتد قدراتنا إلى ما هو أبعد من التطبيقات القياسية مع ${service.title}.`
                  : `Our capabilities extend beyond standard implementations with ${service.title}.`}
              </p>
              <ul className="space-y-4">
                {details.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-ink font-medium">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center p-10 bg-surface border border-app rounded-lg">
              <h3 className="font-display text-3xl font-bold text-ink mb-2">
                {language === 'ar' ? 'جاهز؟' : 'Ready?'}
              </h3>
              <p className="text-ink-muted mb-8">
                {language === 'ar' ? 'دعنا نبني شيئًا استثنائيًا.' : "Let's build something extraordinary."}
              </p>
              <Link to="/contact">
                <Button variant="primary" fullWidth>
                  {language === 'ar' ? 'جدولة مكالمة' : 'Schedule a Call'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
