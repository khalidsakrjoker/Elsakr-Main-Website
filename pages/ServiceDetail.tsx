
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Layout } from '../components/ui/Layout';
import { useContent } from '../lib/useContent';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { ArrowRight, ArrowLeft, CheckCircle2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { content, language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
  
  // Find the specific service data based on the URL parameter
  const service = content.services.items.find(item => item.id === id);

  // Redirect to services index if ID is invalid
  if (!service || !service.details) {
    return <Navigate to="/services" replace />;
  }

  const { details } = service;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-2/3 h-full bg-gradient-to-l rtl:bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-full">
              <service.icon className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                {service.title}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              {details.tagline}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {details.longDescription}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="primary">
                  {language === 'ar' ? "ابدأ الاستشارة" : "Start Consultation"} 
                  <ArrowIcon className={`w-4 h-4 inline ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link to="/services">
                 <Button variant="secondary">
                   {language === 'ar' ? "كل الحلول" : "All Solutions"}
                 </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
          >
             {/* Tech Stack Visual */}
             <GlassCard className="p-8 border-t-4 border-t-blue-500">
                <div className="flex items-center gap-3 mb-6">
                    <Terminal className="w-6 h-6 text-slate-400" />
                    <span className="font-mono text-sm text-slate-500">Tech_Stack.json</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {details.tech.map((tech, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded border border-slate-100 dark:border-white/5">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="font-mono text-sm text-slate-700 dark:text-slate-300">{tech}</span>
                        </div>
                    ))}
                </div>
             </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900/30 border-y border-slate-200 dark:border-white/5 px-6">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center text-slate-900 dark:text-white">
                {language === 'ar' ? `لماذا تختار ${content.brand.name}` : `Why Choose ${content.brand.name}`}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {details.benefits.map((benefit, i) => (
                    <div key={i} className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors">
                        <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{benefit.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {benefit.desc}
                        </p>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* Capabilities List */}
      <section className="py-24 px-6">
         <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                      {language === 'ar' ? "القدرات" : "Capabilities"}
                   </h2>
                   <p className="text-slate-600 dark:text-slate-400 mb-8">
                     {language === 'ar' 
                        ? `تمتد قدراتنا إلى ما هو أبعد من التطبيقات القياسية. نحن نتجاوز حدود الممكن مع ${service.title}.`
                        : `Our capabilities extend far beyond standard implementations. We push the boundaries of what's possible with ${service.title}.`
                     }
                   </p>
                   <ul className="space-y-4">
                       {details.capabilities.map((cap, i) => (
                           <li key={i} className="flex items-center gap-3">
                               <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                               <span className="text-slate-800 dark:text-slate-200 font-medium">{cap}</span>
                           </li>
                       ))}
                   </ul>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 blur-[80px] opacity-20" />
                    <GlassCard className="relative z-10 text-center py-12">
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                           {language === 'ar' ? "جاهز؟" : "Ready?"}
                        </h3>
                        <p className="text-slate-500 mb-8">
                           {language === 'ar' ? "دعنا نبني شيئًا استثنائيًا." : "Let's build something extraordinary."}
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" fullWidth>
                                {language === 'ar' ? "جدولة تعمق في التفاصيل" : "Schedule Deep Dive"}
                            </Button>
                        </Link>
                    </GlassCard>
                </div>
            </div>
         </div>
      </section>
    </Layout>
  );
}
