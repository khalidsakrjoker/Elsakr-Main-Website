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
      <section className="py-20 px-6 min-h-[90vh] flex flex-col justify-center bg-app">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-ink">
                {content.contact.title}
              </h1>
              <p className="text-xl text-ink-muted">{content.contact.subtitle}</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-soft border border-app flex items-center justify-center shrink-0 rounded-md">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-wider text-ink-muted mb-1">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </h2>
                  <p className="text-ink text-lg font-medium">{content.brand.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-soft border border-app flex items-center justify-center shrink-0 rounded-md">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-wider text-ink-muted mb-1">
                    {language === 'ar' ? 'الهاتف' : 'Phone'}
                  </h2>
                  <p className="text-ink text-lg font-medium" dir="ltr">
                    +20 101 649 5229
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-soft border border-app flex items-center justify-center shrink-0 rounded-md">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-wider text-ink-muted mb-1">
                    {language === 'ar' ? 'المقر' : 'Location'}
                  </h2>
                  <p className="text-ink text-lg font-medium">
                    {language === 'ar' ? 'القاهرة' : 'Cairo'}
                    <br />
                    <span className="text-ink-muted text-sm">
                      {language === 'ar' ? 'مصر' : 'Egypt'}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h2 className="font-display text-xl font-bold mb-6 text-ink">
                {language === 'ar' ? 'أسئلة شائعة' : 'FAQ'}
              </h2>
              <Accordion items={content.contact.faq.slice(0, 3)} />
            </div>
          </div>

          <div className="lg:col-span-8">
            <MultiStepForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
