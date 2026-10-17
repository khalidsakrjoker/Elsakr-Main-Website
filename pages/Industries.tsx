import React from 'react';
import { Layout } from '../components/ui/Layout';
import { SEO } from '../components/seo/SEO';
import { Breadcrumbs, CardGrid, CtaBand, PageHeader } from '../components/ui/EditorialBlocks';
import { useContent } from '../lib/useContent';
import { useEditorial } from '../lib/useEditorial';
import { buildBreadcrumbList } from '../lib/seo/schema';
import { toMetaDescription } from '../lib/seo/text';

export default function Industries() {
  const { content } = useContent();
  const { editorial, language } = useEditorial();
  const { labels, industries } = editorial;
  const crumbs = [
    { name: labels.home, path: '/' },
    { name: labels.industries, path: '/industries' },
  ];

  return (
    <Layout>
      <SEO
        title={`${industries.title} | ${content.brand.name}`}
        description={toMetaDescription(industries.intro)}
        jsonLdExtra={buildBreadcrumbList(crumbs, language)}
      />
      <section className="py-20 px-6 bg-app">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} label={language === 'ar' ? 'مسار التنقل' : 'Breadcrumb'} />
          <PageHeader eyebrow={content.brand.name} title={industries.title} summary={industries.intro} />
          <CardGrid
            actionLabel={labels.readMore}
            items={industries.items.map((item) => ({
              id: item.id,
              title: item.name,
              summary: item.summary,
              path: `/industries/${item.id}`,
            }))}
          />
          <CtaBand label={labels.contactCta} text={labels.contactCtaText} />
        </div>
      </section>
    </Layout>
  );
}
