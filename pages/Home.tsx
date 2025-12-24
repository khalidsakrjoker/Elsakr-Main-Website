
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Terminal, Activity, ArrowDown, ArrowLeft } from 'lucide-react';
import { useContent } from '../lib/useContent';
import { Layout } from '../components/ui/Layout';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Button } from '../components/ui/Button';
import { TechTicker } from '../components/ui/TechTicker';
import { CyberGrid } from '../components/ui/CyberGrid';
import { VelocityText } from '../components/ui/VelocityText';
import { FreeTools } from '../components/ui/FreeTools';
import { ProjectDeck } from '../components/ui/ProjectDeck';
import { Testimonials } from '../components/ui/Testimonials';
import { Accordion } from '../components/ui/Accordion';
import { PartnersMarquee } from '../components/ui/PartnersMarquee';
import { PlatformsMarquee } from '../components/ui/PlatformsMarquee';
import { Link } from 'react-router-dom';

import { SEO } from '../components/seo/SEO';

import { useTheme } from '../lib/ThemeContext';

export default function Home() {
  const { content, language } = useContent();
  const { theme } = useTheme();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <Layout>
      <SEO />
      {/* Interactive Background */}
      <CyberGrid />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden pt-20 pb-0">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 pointer-events-none">
          {/* Text Content */}
          <motion.div 
            className="pointer-events-auto"
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-pulse" />
              System Operational v4.5
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-slate-900 dark:text-white">
              {language === 'ar' ? "هندسة" : "ENGINEER"}<br />
              <span className="text-slate-600 dark:text-slate-500">
                {language === 'ar' ? "المستقبل" : "THE FUTURE"}
              </span>
            </h1>
            <p className={`text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed ${language === 'ar' ? 'border-r-2 pr-6' : 'border-l-2 pl-6'} border-slate-200 dark:border-slate-800`}>
              {content.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact">
                <Button variant="primary">
                  {content.hero.cta} <ArrowIcon className={`w-4 h-4 inline ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline">
                  {content.hero.learnMore}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Abstract Visual / Interactive Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block pointer-events-auto"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4 rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <SpotlightCard className="translate-y-12" delay={0.2}>
                <Code2 className="w-8 h-8 text-slate-900 dark:text-white mb-4" />
                <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 mb-2 rounded-full" />
                <div className="h-2 w-16 bg-slate-300 dark:bg-slate-800 rounded-full" />
                <div className="mt-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600" />
                </div>
              </SpotlightCard>
              <SpotlightCard className="-translate-y-8" delay={0.4}>
                <Cpu className="w-8 h-8 text-slate-900 dark:text-white mb-4" />
                <div className="h-2 w-24 bg-slate-200 dark:bg-slate-800 mb-2 rounded-full" />
                <div className="h-2 w-32 bg-slate-300 dark:bg-slate-700 rounded-full" />
                <div className="mt-6 font-mono text-xs text-slate-500 dark:text-slate-400">
                    &gt; PROCESSING_DATA...
                </div>
              </SpotlightCard>
              <SpotlightCard className="col-span-2" delay={0.6}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                       <Terminal className="w-5 h-5 text-slate-900 dark:text-white" />
                       <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">Terminal</span>
                    </div>
                    <span className="text-xs font-mono text-slate-900 dark:text-white flex items-center gap-1">
                      <Activity className="w-3 h-3" /> OPTIMAL
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 mb-4 overflow-hidden">
                    <motion.div 
                      className="h-full bg-slate-900 dark:bg-white"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="space-y-2 font-mono text-xs text-slate-500">
                      <p>&gt; Initiating neural link...</p>
                      <p>&gt; Establishing secure connection...</p>
                      <p className="text-slate-900 dark:text-white">&gt; Access granted.</p>
                  </div>
              </SpotlightCard>
            </div>
            
            {/* Glow behind visual - REMOVED */}
            {/* <div className="absolute inset-0 bg-luxury-gold/10 blur-[100px] z-0 mix-blend-multiply dark:mix-blend-normal" /> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* Dynamic Text Section */}
      <VelocityText />

      {/* Combined Services Section: Cooperation → Services → How We Work → CTA */}
      <section className="py-16 px-6 relative z-10 bg-slate-50/50 dark:bg-[#010208]/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Cooperation Models - Compact */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {language === 'ar' ? "نماذج التعاون" : "Engagement Models"}
            </h3>
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
              {content.services.models.map((model: any, i: number) => (
                <div key={i} className="text-center p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                  <model.icon className="w-6 h-6 mx-auto mb-2 text-slate-700 dark:text-slate-300" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{model.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{model.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Title */}
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {content.services.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-2">
              {content.services.subtitle}
            </p>
          </div>

          {/* Services Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.items.slice(0,6).map((service, idx) => (
              <SpotlightCard key={service.id} delay={idx * 0.1} className="min-h-[280px] flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center mb-6 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <Link to={`/services/${service.id}`} className="mt-4 pt-4 border-t border-slate-200 dark:border-white/5 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-mono text-slate-900 dark:text-white">
                     {language === 'ar' ? "استكشف" : "EXPLORE"}
                  </span>
                  <ArrowIcon className={`w-4 h-4 text-slate-900 dark:text-white ${language === 'ar' ? 'translate-x-2' : '-translate-x-2'} group-hover:translate-x-0 transition-transform`} />
                </Link>
              </SpotlightCard>
            ))}
          </div>

          {/* How We Work - Compact */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {language === 'ar' ? "طريقة الشغل" : "How We Work"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {content.process.steps.map((step: any, idx: number) => (
                <div key={idx} className="text-center p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{step.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link to="/contact">
              <Button variant="primary">
                {language === 'ar' ? "ابدأ الآن" : "Get Started Now"} <ArrowIcon className={`w-4 h-4 inline ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Technical Alliances Marquee */}
      <PartnersMarquee />

      {/* Our Platforms Marquee */}
      <PlatformsMarquee />

      {/* Free Open Source Tools Section */}
      <FreeTools />

      {/* Tech Ticker */}
      <TechTicker />

      {/* Stats Bar */}
      <section className="bg-slate-100/50 dark:bg-[#010208] z-10 relative border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200 dark:divide-white/5 text-center rtl:divide-x-reverse">
          {content.stats.map((stat, i) => (
            <div key={i} className="px-4">
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 font-mono">{stat.value}</h3>
              <p className="text-slate-500 dark:text-slate-500 text-xs md:text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 relative z-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
             <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
                {language === 'ar' ? "آراء العملاء" : "Client Testimonials"}
             </h2>
             <Testimonials />
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">
           {language === 'ar' ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
        </h2>
        <Accordion items={content.contact.faq} />
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative z-10">
        <SpotlightCard className="max-w-5xl mx-auto text-center py-20 px-6 border-slate-200 dark:border-white/10">
             <div className="absolute inset-0 bg-slate-50 dark:bg-white/5 opacity-50" />
             <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                   {language === 'ar' ? "جاهز للابتكار؟" : "Ready to Disrupt?"}
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
                    {language === 'ar' 
                      ? "ابدأ شراكة مع الصقر. نحن نقبل حاليًا مشاريع مؤسسية جديدة."
                      : "Initiate a partnership with Elsakr. We are currently accepting new enterprise commissions for Q4."
                    }
                </p>
                <Link to="/contact">
                    <Button variant="primary" className="!px-10 !py-4 text-lg">
                         {language === 'ar' ? "ابدأ التكوين" : "Start Configuration"}
                    </Button>
                </Link>
             </div>
        </SpotlightCard>
      </section>
    </Layout>
  );
}
