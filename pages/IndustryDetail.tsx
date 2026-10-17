import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Layout } from '../components/ui/Layout';
import { SEO } from '../components/seo/SEO';
import {
  Breadcrumbs,
  CtaBand,
  EditorialSections,
  PageHeader,
  RelatedLinks,
} from '../components/ui/EditorialBlocks';
import { useContent } from '../lib/useContent';
import { useEditorial } from '../lib/useEditorial';
import { useLocalizedPath } from '../lib/useLocalizedPath';
import { buildBreadcrumbList } from '../lib/seo/schema';
import { toMetaDescription } from '../lib/seo/text';

export default function IndustryDetail() {
  const { id } = useParams<{ id: string }>();
  const { content } = useContent();
  const { editorial, language } = useEditorial();
  const localize = useLocalizedPath();
  const { labels } = editorial;

  const industry = editorial.industries.items.find((item) => item.id === id);
  if (!industry) {
    return <Navigate to={localize('/industries')} replace />;
  }

  const crumbs = [
    { name: labels.home, path: '/' },
    { name: labels.industries, path: '/industries' },
    { name: industry.name, path: `/industries/${industry.id}` },
  ];
  const services = content.services.items.filter((item) => industry.serviceIds.includes(item.id));
  const studies = editorial.caseStudies.items.filter((item) => industry.caseStudyIds.includes(item.id));

  return (
    <Layout>
      <SEO
        title={`${industry.name} | ${labels.industries} | ${content.brand.name}`}
        description={toMetaDescription(industry.summary)}
        jsonLdExtra={buildBreadcrumbList(crumbs, language)}
      />
      <article className="py-20 px-6 bg-app">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} label={language === 'ar' ? 'مسار التنقل' : 'Breadcrumb'} />
          <PageHeader eyebrow={labels.industries} title={industry.name} summary={industry.summary} />
          <EditorialSections sections={industry.sections} />
          <RelatedLinks
            title={labels.relatedCaseStudies}
            links={studies.map((item) => ({ name: item.name, path: `/case-studies/${item.id}` }))}
          />
          <RelatedLinks
            title={labels.relatedServices}
            links={services.map((item) => ({ name: item.title, path: `/services/${item.id}` }))}
          />
          <CtaBand label={labels.contactCta} text={labels.contactCtaText} />
        </div>
      </article>
    </Layout>
  );
}
