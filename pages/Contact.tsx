
import React from 'react';
import { Layout } from '../components/ui/Layout';
import { MultiStepForm } from '../components/ui/MultiStepForm';
import { useContent } from '../lib/useContent';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Accordion } from '../components/ui/Accordion';

export default function Contact() {
  const { content, language } = useContent();

  return (
    <Layout>
      <section className="py-20 px-6 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">{content.contact.title}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                {content.contact.subtitle}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                     {language === 'ar' ? "البريد الإلكتروني" : "Email"}
                  </h3>
                  <p className="text-slate-900 dark:text-white text-lg font-medium">{content.brand.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                    {language === 'ar' ? "خط آمن" : "Secure Line"}
                  </h3>
                  <p className="text-slate-900 dark:text-white text-lg font-medium" dir="ltr">+20 101 649 5229</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                     {language === 'ar' ? "المقر الرئيسي" : "Headquarters"}
                  </h3>
                  <p className="text-slate-900 dark:text-white text-lg font-medium">
                     {language === 'ar' ? "القاهرة" : "Cairo"}
                     <br />
                     <span className="text-slate-500 text-sm">
                        {language === 'ar' ? "مصر" : "Egypt"}
                     </span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ Mini */}
            <div className="pt-10">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                   {language === 'ar' ? "بروتوكول التعامل" : "Engagement Protocol"}
                </h3>
                <Accordion items={content.contact.faq.slice(0,3)} />
            </div>
          </div>

          {/* Multi-Step Form */}
          <div className="lg:col-span-8">
            <MultiStepForm />
          </div>

        </div>
      </section>
    </Layout>
  );
}
