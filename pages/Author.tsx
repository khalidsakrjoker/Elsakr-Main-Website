import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';
import { Layout } from '../components/ui/Layout';
import { SEO } from '../components/seo/SEO';
import { Breadcrumbs, CtaBand, EditorialSections, PageHeader } from '../components/ui/EditorialBlocks';
import { useContent } from '../lib/useContent';
import { useEditorial } from '../lib/useEditorial';
import { useLocalizedPath } from '../lib/useLocalizedPath';
import { buildBreadcrumbList, buildPersonSchema } from '../lib/seo/schema';
import { toMetaDescription } from '../lib/seo/text';

export default function Author() {
  const { id } = useParams<{ id: string }>();
  const { content } = useContent();
  const { editorial, language } = useEditorial();
  const localize = useLocalizedPath();
  const { labels, author } = editorial;

  if (id !== author.id) {
    return <Navigate to={localize('/')} replace />;
  }

  const path = `/author/${author.id}`;
  const crumbs = [
    { name: labels.home, path: '/' },
    { name: author.name, path },
  ];

  return (
    <Layout>
      <SEO
        type="website"
        title={`${author.name} | ${author.role} | ${content.brand.name}`}
        description={toMetaDescription(author.summary)}
        jsonLdExtra={[
          buildPersonSchema({
            name: author.name,
            jobTitle: author.role,
            description: author.summary,
            path,
            sameAs: [author.github],
            language,
          }),
          buildBreadcrumbList(crumbs, language),
        ]}
      />
      <article className="py-20 px-6 bg-app">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={crumbs} label={language === 'ar' ? 'مسار التنقل' : 'Breadcrumb'} />
          <PageHeader eyebrow={author.role} title={author.name} summary={author.summary} />
          <ul className="flex flex-wrap gap-4 mb-12">
            <li>
              <a
                href={author.github}
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex items-center gap-2 text-accent font-semibold"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                {labels.github}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${author.email}`}
                className="inline-flex items-center gap-2 text-accent font-semibold"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {labels.email}: {author.email}
              </a>
            </li>
          </ul>
          <EditorialSections sections={author.sections} />
          <CtaBand label={labels.contactCta} text={labels.contactCtaText} />
        </div>
      </article>
    </Layout>
  );
}
