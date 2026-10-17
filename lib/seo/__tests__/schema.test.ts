import { describe, it, expect } from 'vitest';
import {
  ORGANIZATION_ID,
  buildArticleSchema,
  buildBreadcrumbList,
  buildCaseStudySchema,
  buildFaqPage,
  buildPersonSchema,
  buildServiceSchema,
} from '../schema';

describe('buildBreadcrumbList', () => {
  it('builds ordered ListItems with absolute English URLs', () => {
    const schema = buildBreadcrumbList([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Web', path: '/services/web' },
    ]);

    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema.itemListElement).toEqual([
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://elsakr.company/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://elsakr.company/services' },
      { '@type': 'ListItem', position: 3, name: 'Web', item: 'https://elsakr.company/services/web' },
    ]);
  });

  it('localizes item URLs for Arabic', () => {
    const schema = buildBreadcrumbList(
      [
        { name: 'الرئيسية', path: '/' },
        { name: 'خدماتنا', path: '/services' },
      ],
      'ar'
    );
    const items = schema.itemListElement as { item: string }[];
    expect(items.map((entry) => entry.item)).toEqual([
      'https://elsakr.company/ar',
      'https://elsakr.company/ar/services',
    ]);
  });
});

describe('buildServiceSchema', () => {
  it('describes the service with provider and localized URL', () => {
    const schema = buildServiceSchema({
      id: 'design',
      name: 'UI/UX Design',
      description: 'Design systems and product design.',
    });

    expect(schema['@type']).toBe('Service');
    expect(schema.url).toBe('https://elsakr.company/services/design');
    expect(schema.name).toBe('UI/UX Design');
    expect(schema.serviceType).toBe('UI/UX Design');
    expect(schema.provider).toEqual({ '@id': ORGANIZATION_ID });
    expect(schema.inLanguage).toBe('en');
  });

  it('uses the Arabic URL and custom serviceType', () => {
    const schema = buildServiceSchema({
      id: 'web',
      name: 'هندسة الويب',
      description: 'وصف',
      language: 'ar',
      serviceType: 'Web Development',
    });
    expect(schema.url).toBe('https://elsakr.company/ar/services/web');
    expect(schema.serviceType).toBe('Web Development');
    expect(schema.inLanguage).toBe('ar');
  });
});

describe('buildFaqPage', () => {
  it('maps questions and answers', () => {
    const schema = buildFaqPage([{ q: 'Where?', a: 'Egypt.' }], 'en');
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity).toEqual([
      {
        '@type': 'Question',
        name: 'Where?',
        acceptedAnswer: { '@type': 'Answer', text: 'Egypt.' },
      },
    ]);
  });
});

describe('buildArticleSchema', () => {
  it('attributes the article to the organization and defaults dateModified', () => {
    const schema = buildArticleSchema({
      path: '/insights/demo',
      headline: 'Demo',
      description: 'Desc',
      datePublished: '2026-10-17',
      language: 'ar',
    });
    expect(schema['@type']).toBe('Article');
    expect(schema.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': 'https://elsakr.company/ar/insights/demo',
    });
    expect(schema.dateModified).toBe('2026-10-17');
    expect(schema.author).toMatchObject({ '@type': 'Organization', '@id': ORGANIZATION_ID });
    expect(schema.publisher).toEqual({ '@id': ORGANIZATION_ID });
  });
});

describe('buildPersonSchema', () => {
  it('links the person to the organization', () => {
    const schema = buildPersonSchema({
      name: 'Khalid Elsakr',
      jobTitle: 'Founder & Lead Architect',
      description: 'Founder.',
      path: '/author/khalid-elsakr',
      sameAs: ['https://github.com/khalidsakrjoker'],
    });
    expect(schema['@type']).toBe('Person');
    expect(schema.url).toBe('https://elsakr.company/author/khalid-elsakr');
    expect(schema.sameAs).toEqual(['https://github.com/khalidsakrjoker']);
    expect(schema.worksFor).toEqual({ '@id': ORGANIZATION_ID });
  });
});

describe('buildCaseStudySchema', () => {
  it('points at the live product URL and localized page', () => {
    const schema = buildCaseStudySchema({
      id: 'kashx',
      name: 'Kashx Company',
      description: 'FinTech ecosystem',
      image: '/assets/projects/kashx-company.png',
      url: 'https://kashx.company/',
      language: 'ar',
    });
    expect(schema['@type']).toEqual(['CreativeWork', 'Article']);
    expect(schema.url).toBe('https://elsakr.company/ar/case-studies/kashx');
    expect(schema.isBasedOn).toBe('https://kashx.company/');
    expect(schema.image).toBe('https://elsakr.company/assets/projects/kashx-company.png');
  });
});

