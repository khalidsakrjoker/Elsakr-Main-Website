import { withLocale } from './localePath';
import type { Locale } from './localePath';
import { SITE_ORIGIN, getAbsoluteUrl } from './routeManifest';

export { SITE_ORIGIN };

export type JsonLd = Record<string, unknown>;

export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

export interface BreadcrumbItem {
  name: string;
  /** English path (no /ar prefix); it is localized for the requested language. */
  path: string;
}

/** schema.org BreadcrumbList with absolute, locale-correct item URLs. */
export function buildBreadcrumbList(items: BreadcrumbItem[], language: Locale = 'en'): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(withLocale(item.path, language)),
    })),
  };
}

export interface ServiceSchemaInput {
  id: string;
  name: string;
  description: string;
  language?: Locale;
  serviceType?: string;
}

/** schema.org Service provided by the Elsakr organization. */
export function buildServiceSchema({
  id,
  name,
  description,
  language = 'en',
  serviceType,
}: ServiceSchemaInput): JsonLd {
  const url = getAbsoluteUrl(withLocale(`/services/${id}`, language));
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    serviceType: serviceType ?? name,
    inLanguage: language,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: ['Worldwide', 'EMEA', 'Europe', 'Middle East', 'Egypt'],
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

/** schema.org FAQPage; only pass questions that are visibly rendered on the page. */
export function buildFaqPage(items: FaqItem[], language: Locale = 'en'): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: language,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export interface ArticleSchemaInput {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  language?: Locale;
}

/** schema.org Article authored and published by the Elsakr organization. */
export function buildArticleSchema({
  path,
  headline,
  description,
  datePublished,
  dateModified,
  language = 'en',
}: ArticleSchemaInput): JsonLd {
  const url = getAbsoluteUrl(withLocale(path, language));
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline,
    description,
    inLanguage: language,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { '@type': 'Organization', '@id': ORGANIZATION_ID, name: 'Elsakr' },
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export interface CaseStudySchemaInput {
  id: string;
  name: string;
  description: string;
  image?: string;
  url: string;
  language?: Locale;
}

/** CreativeWork / CaseStudy-shaped JSON-LD for portfolio case studies. */
export function buildCaseStudySchema({
  id,
  name,
  description,
  image,
  url,
  language = 'en',
}: CaseStudySchemaInput): JsonLd {
  const pageUrl = getAbsoluteUrl(withLocale(`/case-studies/${id}`, language));
  return {
    '@context': 'https://schema.org',
    '@type': ['CreativeWork', 'Article'],
    '@id': `${pageUrl}#case-study`,
    name,
    headline: name,
    description,
    url: pageUrl,
    inLanguage: language,
    about: { '@type': 'Thing', name },
    isBasedOn: url,
    image: image
      ? image.startsWith('http')
        ? image
        : `${SITE_ORIGIN}${image}`
      : undefined,
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export interface PersonSchemaInput {
  name: string;
  jobTitle: string;
  description: string;
  path: string;
  sameAs: string[];
  language?: Locale;
}

/** schema.org Person for the founder / author page. */
export function buildPersonSchema({
  name,
  jobTitle,
  description,
  path,
  sameAs,
  language = 'en',
}: PersonSchemaInput): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    url: getAbsoluteUrl(withLocale(path, language)),
    sameAs,
    worksFor: { '@id': ORGANIZATION_ID },
  };
}
