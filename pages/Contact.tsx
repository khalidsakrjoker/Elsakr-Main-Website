import React from 'react';
import { Layout } from '../components/ui/Layout';
import { SEO } from '../components/seo/SEO';
import { toMetaDescription } from '../lib/seo/text';
import { MultiStepForm } from '../components/ui/MultiStepForm';
import { useContent } from '../lib/useContent';
import { getWhatsAppTelephone } from '../lib/contactConfig';
import { ORGANIZATION_ID, SITE_ORIGIN } from '../lib/seo/schema';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Accordion } from '../components/ui/Accordion';
import { LocaleLink } from '../components/ui/LocaleLink';

export default function Contact() {
  const { content, language } = useContent();
  const telephone = getWhatsAppTelephone() || '+201016495229';
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_ORIGIN}/contact#local`,
    name: content.brand.name,
    url: `${SITE_ORIGIN}/contact`,
    email: content.brand.email,
    telephone,
    areaServed: ['Egypt', 'EMEA', 'Worldwide'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: language === 'ar' ? 'القاهرة' : 'Cairo',
      addressCountry: 'EG',
    },
    parentOrganization: { '@id': ORGANIZATION_ID },
  };

  return (
    <Layout>
      <SEO
        title={`${content.contact.title} | ${content.brand.name}`}
        description={toMetaDescription(
          language === 'ar'
            ? 'تواصل مع شركة الصقر للبرمجيات في مصر لخدمات الهندسة البرمجية عن بُعد وعبر منطقة EMEA.'
            : 'Contact Elsakr in Egypt for software engineering across Egypt, EMEA, and remote worldwide delivery.'
        )}
        jsonLdExtra={localBusiness}
      />
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
                      {language === 'ar'
                        ? 'مصر — خدمة عن بُعد لمنطقة EMEA والعالم. لا ننشر عنوان شارع على هذا الموقع.'
                        : 'Egypt — remote delivery across EMEA and worldwide. No street address is published on this site.'}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h2 className="font-display text-xl font-bold mb-6 text-ink">
                {language === 'ar' ? 'أسئلة شائعة' : 'FAQ'}
              </h2>
              <div data-testid="contact-faq"><Accordion items={content.contact.faq.slice(0, 4)} /></div>
              <p className="mt-4 text-sm text-ink-muted">
                <LocaleLink to="/faq" className="text-accent font-semibold">
                  {language === 'ar' ? 'كل الأسئلة الشائعة' : 'Full FAQ hub'}
                </LocaleLink>
              </p>
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
