import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../lib/useContent';
import { Layout } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/seo/SEO';
import { useTheme } from '../lib/ThemeContext';
import { getPageEnterProps } from '../lib/motion';
import { ToolsSlider } from '../components/ui/ToolsSlider';

export default function Home() {
  const { content, language } = useContent();
  const { theme } = useTheme();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
  const allTools = [...(content.freeToolsDesktop ?? []), ...(content.freeToolsWeb ?? [])];

  return (
    <Layout>
      <SEO />

      {/* 1. Hero — brand first, full-bleed atmosphere */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              theme === 'dark'
                ? 'linear-gradient(160deg, #1c1916 0%, #12100e 45%, #2a2118 100%)'
                : 'linear-gradient(160deg, #efeae2 0%, #f7f4ef 40%, #e8dcc8 100%)',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent-soft),transparent_55%)]" aria-hidden />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-32">
          <motion.div {...getPageEnterProps()} className="max-w-3xl">
            <p className="font-display text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              {content.brand.name}
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-ink leading-[1.05] mb-6">
              {content.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-ink-muted max-w-xl mb-10 leading-relaxed">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="primary">
                  {content.hero.cta}
                  <ArrowIcon className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline">{content.hero.learnMore}</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Capabilities */}
      <section className="py-24 px-6 bg-app border-t border-app">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
              {content.services.title}
            </h2>
            <p className="text-ink-muted">{content.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.items.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group block p-6 bg-surface border border-app rounded-lg hover-lift hover:border-[var(--color-accent)] transition-colors"
              >
                <service.icon className="w-7 h-7 text-accent mb-4" />
                <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Selected platforms — 3D logos with depth */}
      <section className="py-24 px-6 bg-surface-muted border-t border-app">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
              {language === 'ar' ? 'منصاتنا' : 'Selected Platforms'}
            </h2>
            <p className="text-ink-muted">
              {language === 'ar'
                ? 'عيّنة من الأنظمة اللي بنبنيها ونشغّلها — مش كل المحفظة.'
                : 'A selection of systems we build and operate — not the full portfolio.'}
            </p>
          </div>
          <div className="platform-stage grid sm:grid-cols-2 gap-8 max-w-5xl">
            {content.projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card-3d group block bg-surface border border-app rounded-lg overflow-hidden"
              >
                <div className="aspect-[16/11] overflow-hidden bg-black flex items-center justify-center p-4 md:p-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-ink flex items-center gap-2 mb-2">
                    {project.title}
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </h3>
                  <p className="text-sm text-ink-muted line-clamp-3">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Partners — curated subset */}
      <section className="py-16 px-6 bg-app border-t border-app">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-xl mx-auto">
            <h2 className="font-display text-xl font-semibold text-ink mb-2">
              {content.partnersTitle}
            </h2>
            <p className="text-sm text-ink-muted">
              {language === 'ar'
                ? 'عيّنة من الشبكات والشركاء اللي اشتغلنا معاهم — مش القائمة كاملة.'
                : 'A sample of networks and partners we have worked with — not the full list.'}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {content.clients.slice(0, 3).map((client) => {
              const logoSrc =
                theme === 'dark' && client.logoDark
                  ? client.logoDark
                  : theme === 'light' && client.logoLight
                    ? client.logoLight
                    : client.logo;
              return (
                <a
                  key={client.name}
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img src={logoSrc} alt={client.name} className="h-10 md:h-12 w-auto object-contain" loading="lazy" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Free tools — in-place slider */}
      <section className="py-24 px-6 bg-surface border-t border-app">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
                {language === 'ar' ? 'من أدواتنا المجانية' : 'From our free tools'}
              </h2>
              <p className="text-ink-muted">
                {language === 'ar'
                  ? 'مرّ على الأدوات من هنا — كل واحدة بهويتها. كتالوج الفلترة متاح لو حابب تتعمق.'
                  : 'Browse the set right here — each tool keeps its own mark. Use the catalog when you want filters.'}
              </p>
            </div>
            <Link to="/tools">
              <Button variant="outline">
                {language === 'ar' ? 'كتالوج الأدوات' : 'Tools catalog'}
                <ArrowIcon className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <ToolsSlider tools={allTools} language={language} />
        </div>
      </section>

      {/* 6. Proof — stats */}
      <section className="py-20 px-6 bg-surface-muted border-t border-app">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {content.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-start">
              <p className="font-display text-3xl md:text-4xl font-bold text-ink mb-1">{stat.value}</p>
              <p className="text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="py-24 px-6 bg-app border-t border-app">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-4">
            {language === 'ar' ? 'جاهز تبني مع الصقر؟' : 'Ready to build with Elsakr?'}
          </h2>
          <p className="text-ink-muted text-lg mb-8">
            {language === 'ar'
              ? 'شاركنا متطلباتك — نبدأ بهندسة واضحة بدون ضوضاء.'
              : 'Share your requirements — we start with clear engineering, no noise.'}
          </p>
          <Link to="/contact">
            <Button variant="primary" className="!px-10 !py-4">
              {content.hero.cta}
              <ArrowIcon className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
