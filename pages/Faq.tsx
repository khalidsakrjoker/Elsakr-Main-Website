import React from 'react';
import { Layout } from '../components/ui/Layout';
import { SEO } from '../components/seo/SEO';
import { Breadcrumbs, CtaBand, PageHeader } from '../components/ui/EditorialBlocks';
import { useContent } from '../lib/useContent';
import { useEditorial } from '../lib/useEditorial';
import { buildBreadcrumbList, buildFaqPage } from '../lib/seo/schema';
import { toMetaDescription } from '../lib/seo/text';

export default function Faq() {
  const { content } = useContent();
  const { editorial, language } = useEditorial();
  const { labels, faq } = editorial;
  const items = [...content.contact.faq, ...faq.items];
  const crumbs = [
    { name: labels.home, path: '/' },
    { name: labels.faq, path: '/faq' },
  ];

  return (
    <Layout>
      <SEO
        title={`${faq.title} | ${content.brand.name}`}
        description={toMetaDescription(faq.intro)}
        jsonLdExtra={[buildFaqPage(items, language), buildBreadcrumbList(crumbs, language)]}
      />
      <section className="py-20 px-6 bg-app">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} label={language === 'ar' ? 'مسار التنقل' : 'Breadcrumb'} />
          <PageHeader eyebrow={content.brand.name} title={faq.title} summary={faq.intro} />
          {/* Every answer is rendered in the HTML so it matches the FAQPage structured data. */}
          <dl className="max-w-3xl space-y-8">
            {items.map((item) => (
              <div key={item.q} className="p-6 bg-surface border border-app rounded-lg">
                <dt className="font-display text-xl font-bold text-ink mb-3">{item.q}</dt>
                <dd className="text-ink-muted leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
          <CtaBand label={labels.contactCta} text={labels.contactCtaText} />
        </div>
      </section>
    </Layout>
  );
}
