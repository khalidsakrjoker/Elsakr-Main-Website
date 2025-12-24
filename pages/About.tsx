
import React from 'react';
import { Layout } from '../components/ui/Layout';
import { GlassCard } from '../components/ui/GlassCard';
import { Timeline } from '../components/ui/Timeline';
import { Team } from '../components/ui/Team';
import { useContent } from '../lib/useContent';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Hexagon, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const { content, language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <Layout>
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute right-0 rtl:left-0 rtl:right-auto top-0 w-1/3 h-full bg-gradient-to-l rtl:bg-gradient-to-r from-blue-900/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-widest">
              <Hexagon className="w-4 h-4" />
              <span>{language === 'ar' ? "ملف الاستوديو" : "Studio Profile"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">
              {content.about.title}
            </h1>
            <p className={`text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 ${language === 'ar' ? 'border-r-2 pr-6' : 'border-l-2 pl-6'} border-blue-500`}>
              {content.about.mission}
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              {content.about.story}
            </p>
            <Link to="/contact">
              <Button variant="primary">
                {language === 'ar' ? "انضم للمهمة" : "Join the Mission"} <ArrowIcon className={`w-4 h-4 inline ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
          </motion.div>

          <div className="relative">
             <GlassCard className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-none border border-blue-500/20">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                       {language === 'ar' ? "خارطة الطريق الاستراتيجية" : "Strategic Roadmap"}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-500 text-xs uppercase tracking-wider">
                       {language === 'ar' ? "تطور وإنجازات" : "Evolution & Milestones"}
                    </p>
                  </div>
                </div>
                <Timeline items={content.about.timeline} />
             </GlassCard>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900/30 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
               <div className="inline-block p-4 rounded-full bg-slate-200 dark:bg-slate-800/50 mb-6">
                 <Zap className="w-8 h-8 text-slate-500" />
               </div>
               <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                  {language === 'ar' ? "مبادئ التشغيل" : "Our Operating Principles"}
               </h2>
               <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
                 {language === 'ar' 
                    ? "نسترشد بمجموعة من المعايير غير القابلة للتفاوض التي تحدد الكود الخاص بنا وسلوكنا."
                    : "We are guided by a set of non-negotiable standards that define our code and our conduct."
                 }
               </p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-6">
             {content.about.values.map((val, i) => (
               <GlassCard key={i} hoverEffect delay={i * 0.1} className="text-center">
                 <div className="mx-auto w-12 h-12 bg-blue-500/10 flex items-center justify-center mb-4 rounded-full">
                    <val.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{val.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-sm">{val.desc}</p>
               </GlassCard>
             ))}
           </div>
        </div>
      </section>


    </Layout>
  );
}
