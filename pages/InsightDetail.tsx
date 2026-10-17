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
import { buildArticleSchema, buildBreadcrumbList } from '../lib/seo/schema';

export default function InsightDetail() {
  const { id } = useParams<{ id: string }>();
  const { content } = useContent();
  const { editorial, language } = useEditorial();
  const localize = useLocalizedPath();
  const { labels } = editorial;

  const article = editorial.insights.items.find((item) => item.id === id);
  if (!article) {
    return <Navigate to={localize('/insights')} replace />;
  }

  const path = `/insights/${article.id}`;
  const crumbs = [
    { name: labels.home, path: '/' },
    { name: labels.insights, path: '/insights' },
    { name: article.title, path },
  ];
  const services = content.services.items.filter((item) => article.serviceIds.includes(item.id));

  return (
    <Layout>
      <SEO
        type="article"
        title={`${article.title} | ${content.brand.name}`}
        description={article.description}
        publishedTime={article.datePublished}
        modifiedTime={article.datePublished}
        jsonLdExtra={[
          buildArticleSchema({
            path,
            headline: article.title,
            description: article.description,
            datePublished: article.datePublished,
            language,
          }),
          buildBreadcrumbList(crumbs, language),
        ]}
      />
      <article className="py-20 px-6 bg-app">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} label={language === 'ar' ? 'مسار التنقل' : 'Breadcrumb'} />
          <PageHeader eyebrow={labels.insights} title={article.title} summary={article.description} />
          <p className="mb-10 text-sm text-ink-muted">
            {labels.published}: <time dateTime={article.datePublished}>{article.datePublished}</time>
          </p>
          <EditorialSections sections={article.sections} />
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
