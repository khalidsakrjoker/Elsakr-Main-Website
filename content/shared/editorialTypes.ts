export interface EditorialSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface CaseStudyEntry {
  /** Slug used in /case-studies/:id */
  id: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  /** Public product website (taken from the projects catalog). */
  externalUrl: string;
  tags: string[];
  sections: EditorialSection[];
  industryIds: string[];
  serviceIds: string[];
}

export interface IndustryEntry {
  id: string;
  name: string;
  summary: string;
  sections: EditorialSection[];
  caseStudyIds: string[];
  serviceIds: string[];
}

export interface InsightEntry {
  id: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). */
  datePublished: string;
  sections: EditorialSection[];
  serviceIds: string[];
}

export interface EditorialLabels {
  home: string;
  caseStudies: string;
  industries: string;
  insights: string;
  faq: string;
  author: string;
  readMore: string;
  viewProduct: string;
  relatedServices: string;
  relatedCaseStudies: string;
  relatedIndustries: string;
  published: string;
  contactCta: string;
  contactCtaText: string;
  github: string;
  email: string;
}

export interface EditorialContent {
  labels: EditorialLabels;
  caseStudies: { title: string; intro: string; items: CaseStudyEntry[] };
  industries: { title: string; intro: string; items: IndustryEntry[] };
  insights: { title: string; intro: string; items: InsightEntry[] };
  faq: {
    title: string;
    intro: string;
    /** Extra questions appended after the contact-page FAQ. */
    items: { q: string; a: string }[];
  };
  author: {
    id: string;
    name: string;
    role: string;
    summary: string;
    sections: EditorialSection[];
    github: string;
    email: string;
  };
}
