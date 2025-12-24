
import React from 'react';
import { Layout } from '../components/ui/Layout';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { useContent } from '../lib/useContent';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Services() {
  const { content, language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <Layout>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 pt-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
             {content.services.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {content.services.subtitle}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8">
          {content.services.items.map((service, idx) => (
            <SpotlightCard key={service.id} className="p-0 overflow-hidden" delay={idx * 0.1}>
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-4 bg-slate-100 dark:bg-slate-900/50 p-8 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-slate-200 dark:border-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <service.icon className="w-16 h-16 text-blue-500 mb-6 relative z-10" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white relative z-10">{service.title}</h2>
                </div>
                <div className="md:col-span-8 p-8 flex flex-col justify-center">
                  <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div>
                    <Link to={`/services/${service.id}`}>
                      <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors font-mono text-sm uppercase tracking-wider group">
                        {language === 'ar' ? "استكشف التفاصيل" : "Explore Details"}
                        <ArrowIcon className={`w-4 h-4 ${language === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-slate-900/30 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center text-slate-900 dark:text-white">
               {language === 'ar' ? "نماذج التعاون" : "Engagement Models"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {content.services.models.map((model, i) => (
                    <SpotlightCard key={i} className="flex flex-col text-center" delay={i * 0.2}>
                        <div className="mx-auto w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                            <model.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{model.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-grow">{model.desc}</p>
                        <div className="py-3 bg-slate-100 dark:bg-slate-800 rounded text-slate-900 dark:text-white font-mono text-sm font-bold">
                            {model.price}
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-slate-900 dark:text-white">{content.process.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {content.process.steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-3 rtl:-right-3 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-slate-800 md:hidden" />
                <div className="hidden md:block absolute left-0 right-0 top-4 h-[1px] bg-slate-200 dark:bg-slate-800" />
                
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-white dark:bg-slate-950 border border-blue-500/50 flex items-center justify-center text-blue-500 font-mono text-sm mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
             {language === 'ar' ? "جاهز للتحول؟" : "Ready to transform?"}
          </h2>
          <Link to="/contact">
            <Button variant="primary" className="!text-lg !px-10 !py-4">
              {language === 'ar' ? "ابدأ الآن" : "Get Started Now"}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
