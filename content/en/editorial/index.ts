import type { EditorialContent } from '../../shared/editorialTypes';
import { kashxCaseStudy } from './kashx';
import { sajdaCaseStudy } from './sajda';
import { industries } from './industries';
import { insights } from './insights';

export { kashxCaseStudy } from './kashx';
export { sajdaCaseStudy } from './sajda';
export { industries } from './industries';
export { insights } from './insights';

/**
 * Editorial / trust-page copy (case studies, industries, insights, FAQ, author).
 * Product facts come from content/en/projects.ts; no client names, revenue, awards,
 * or street addresses are stated anywhere in this file.
 */
export const editorial: EditorialContent = {
  labels: {
    home: 'Home',
    caseStudies: 'Case studies',
    industries: 'Industries',
    insights: 'Insights',
    faq: 'FAQ',
    author: 'Author',
    readMore: 'Read more',
    viewProduct: 'Visit the product website',
    relatedServices: 'Related services',
    relatedCaseStudies: 'Related case studies',
    relatedIndustries: 'Related industries',
    published: 'Published',
    contactCta: 'Talk to the team',
    contactCtaText: 'Have a similar system in mind? Tell us what you need and we will reply with next steps.',
    github: 'GitHub profile',
    email: 'Email',
  },
  caseStudies: {
    title: 'Case Studies',
    intro:
      'Two products from the Elsakr portfolio, described with the facts we publish today: what each one is, how it is put together, and what we focus on when building similar systems.',
    items: [kashxCaseStudy, sajdaCaseStudy],
  },
  industries,
  insights,
  faq: {
    title: 'Frequently Asked Questions',
    intro: 'Straight answers about how Elsakr works, what we build, and how to get in touch.',
    items: [
      {
        q: 'Where is Elsakr based?',
        a: 'Elsakr is an Egypt-based software engineering studio serving clients globally.',
      },
      {
        q: 'What does Elsakr build?',
        a: 'Enterprise web systems, FinTech platforms, mobile apps, AI integrations, cloud infrastructure, security work, and UI/UX design, plus free open-source developer tools.',
      },
      {
        q: 'Do you have your own products?',
        a: 'Yes. Kashx is a money-transfer and digital-wallet ecosystem, and Sajda POS is cloud POS and retail software for Egyptian shops. See the case studies for details.',
      },
      {
        q: 'Are the free tools really open source?',
        a: 'The tools in the Tools section are free, privacy-first utilities published by Elsakr, with source code available on GitHub where a source link is shown on the tool page.',
      },
      {
        q: 'Is the website available in Arabic?',
        a: 'Yes. Every page has an Arabic version under /ar, and you can switch language from the header.',
      },
      {
        q: 'How can I contact the team?',
        a: 'Use the contact form, message us on WhatsApp from the website, or email khalid@elsakr.company.',
      },
    ],
  },
  author: {
    id: 'khalid-elsakr',
    name: 'Khalid Elsakr',
    role: 'Founder & Lead Architect',
    summary:
      'Khalid Elsakr is the founder and lead architect of Elsakr, an Egypt-based software engineering studio.',
    github: 'https://github.com/khalidsakrjoker',
    email: 'khalid@elsakr.company',
    sections: [
      {
        heading: 'Role',
        paragraphs: [
          'Khalid founded Elsakr and leads its architecture. The studio builds enterprise systems, FinTech platforms, mobile apps, AI solutions, and cloud infrastructure for clients, and maintains its own products such as Kashx and Sajda POS.',
        ],
      },
      {
        heading: 'Open source',
        paragraphs: [
          'Elsakr publishes free developer tools and this website\'s source code on GitHub under the khalidsakrjoker account, so the work can be inspected rather than taken on trust.',
        ],
      },
      {
        heading: 'Get in touch',
        paragraphs: ['For project enquiries, use the contact page or write to khalid@elsakr.company.'],
      },
    ],
  },
};
