import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
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
import { buildBreadcrumbList, buildCaseStudySchema } from '../lib/seo/schema';
import { toMetaDescription } from '../lib/seo/text';

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const { content } = useContent();
  const { editorial, language } = useEditorial();
  const localize = useLocalizedPath();
  const { labels } = editorial;

  const study = editorial.caseStudies.items.find((item) => item.id === id);
  if (!study) {
    return <Navigate to={localize('/case-studies')} replace />;
  }

  const crumbs = [
    { name: labels.home, path: '/' },
    { name: labels.caseStudies, path: '/case-studies' },
    { name: study.name, path: `/case-studies/${study.id}` },
  ];
  const services = content.services.items.filter((item) => study.serviceIds.includes(item.id));
  const industries = editorial.industries.items.filter((item) => study.industryIds.includes(item.id));

  return (
    <Layout>
      <SEO
        title={`${study.name} | ${labels.caseStudies} | ${content.brand.name}`}
        description={toMetaDescription(study.summary)}
        image={study.image}
        jsonLdExtra={[
          buildCaseStudySchema({
            id: study.id,
            name: study.name,
            description: study.summary,
            image: study.image,
            url: study.externalUrl,
            language,
          }),
          buildBreadcrumbList(crumbs, language),
        ]}
      />
      <article className="py-20 px-6 bg-app">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} label={language === 'ar' ? 'مسار التنقل' : 'Breadcrumb'} />
          <PageHeader eyebrow={study.category} title={study.name} summary={study.summary} />
          <a
            href={study.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-12 text-accent font-semibold"
          >
            {labels.viewProduct}
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          <EditorialSections sections={study.sections} />
          <aside className="mb-12 p-6 bg-surface border border-app rounded-lg">
            <h2 className="font-display text-xl font-bold text-ink mb-3">
              {language === 'ar' ? 'مصادر يمكن التحقق منها' : 'Verifiable sources'}
            </h2>
            <ul className="space-y-2 text-ink-muted">
              <li>
                <a
                  href={study.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold"
                >
                  {study.externalUrl}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/khalidsakrjoker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold"
                >
                  https://github.com/khalidsakrjoker
                </a>
              </li>
            </ul>
          </aside>
          <RelatedLinks
            title={labels.relatedIndustries}
            links={industries.map((item) => ({ name: item.name, path: `/industries/${item.id}` }))}
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
