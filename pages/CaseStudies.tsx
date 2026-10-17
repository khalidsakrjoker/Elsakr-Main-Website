import React from 'react';
import { Layout } from '../components/ui/Layout';
import { SEO } from '../components/seo/SEO';
import { Breadcrumbs, CardGrid, CtaBand, PageHeader } from '../components/ui/EditorialBlocks';
import { useContent } from '../lib/useContent';
import { useEditorial } from '../lib/useEditorial';
import { buildBreadcrumbList } from '../lib/seo/schema';
import { toMetaDescription } from '../lib/seo/text';

export default function CaseStudies() {
  const { content } = useContent();
  const { editorial, language } = useEditorial();
  const { labels, caseStudies } = editorial;
  const crumbs = [
    { name: labels.home, path: '/' },
    { name: labels.caseStudies, path: '/case-studies' },
  ];

  return (
    <Layout>
      <SEO
        title={`${caseStudies.title} | ${content.brand.name}`}
        description={toMetaDescription(caseStudies.intro)}
        jsonLdExtra={buildBreadcrumbList(crumbs, language)}
      />
      <section className="py-20 px-6 bg-app">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} label={language === 'ar' ? 'مسار التنقل' : 'Breadcrumb'} />
          <PageHeader eyebrow={content.brand.name} title={caseStudies.title} summary={caseStudies.intro} />
          <CardGrid
            actionLabel={labels.readMore}
            items={caseStudies.items.map((item) => ({
              id: item.id,
              title: item.name,
              summary: item.summary,
              meta: item.category,
              path: `/case-studies/${item.id}`,
            }))}
          />
          <CtaBand label={labels.contactCta} text={labels.contactCtaText} />
        </div>
      </section>
    </Layout>
  );
}
