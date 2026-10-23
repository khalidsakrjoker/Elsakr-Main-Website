import type { EditorialContent } from '../../shared/editorialTypes';
import { kashxCaseStudy } from './kashx';
import { sajdaCaseStudy } from './sajda';

export { kashxCaseStudy } from './kashx';
export { sajdaCaseStudy } from './sajda';

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
  industries: {
    title: 'Industries',
    intro:
      'The sectors where our engineering work is concentrated, and the problems we are usually brought in to solve.',
    items: [
      {
        id: 'retail-pos',
        name: 'Retail & POS',
        summary:
          'Point-of-sale and retail operations software that keeps the counter moving, even when connectivity does not.',
        caseStudyIds: ['sajda'],
        serviceIds: ['web', 'cloud', 'design'],
        sections: [
          {
            heading: 'Typical challenges',
            paragraphs: [
              'Retail systems fail in the most visible place: at the counter. The usual pressure points are:',
            ],
            bullets: [
              'Fast barcode checkout that cannot depend on a perfect connection',
              'Shift cash counts that reconcile with recorded sales',
              'Returns, installments, purchases, and expenses tracked consistently',
              'Customer and supplier balances that stay correct',
            ],
          },
          {
            heading: 'How we help',
            paragraphs: [
              'We build cloud and desktop retail software with offline continuity in mind, and we design interfaces that cashiers can learn quickly. Sajda POS is our own example of this approach for Egyptian shops.',
            ],
          },
        ],
      },
      {
        id: 'fintech',
        name: 'FinTech',
        summary:
          'Money-transfer, wallet, and payment-adjacent platforms where correctness, security, and traceability come first.',
        caseStudyIds: ['kashx'],
        serviceIds: ['security', 'cloud', 'mobile', 'web'],
        sections: [
          {
            heading: 'Typical challenges',
            paragraphs: ['FinTech software has very little room for error. Teams usually need help with:'],
            bullets: [
              'Consistent wallet balances and transfer states',
              'Idempotent, safely retryable money-moving requests',
              'Audit trails and monitoring that support reconciliation',
              'Secure mobile and web access to the same core system',
            ],
          },
          {
            heading: 'How we help',
            paragraphs: [
              'We design the core system and the apps around it together. Kashx, a money-transfer and digital-wallet ecosystem with three integrated apps, is the FinTech example in our portfolio.',
            ],
          },
        ],
      },
      {
        id: 'enterprise',
        name: 'Enterprise systems',
        summary:
          'Internal platforms, dashboards, and integrations for organisations that need high availability and clear security boundaries.',
        caseStudyIds: [],
        serviceIds: ['web', 'cloud', 'security', 'ai'],
        sections: [
          {
            heading: 'Typical challenges',
            paragraphs: ['Enterprise systems commonly run into the same problems once they outgrow their first version:'],
            bullets: [
              'Complex architectures that need to scale without a rewrite',
              'Role-based access and security that survive audits',
              'Cloud infrastructure that is reproducible and observable',
              'Integrating AI features without exposing sensitive data',
            ],
          },
          {
            heading: 'How we help',
            paragraphs: [
              'We offer full-cycle engineering, from architecture design to CI/CD and long-term maintenance. Engagements are time-and-materials for agile work or fixed-price for well-defined scopes, and the client owns the source code and IP after final payment.',
            ],
          },
        ],
      },
    ],
  },
  insights: {
    title: 'Insights',
    intro:
      'Practical engineering guidance from the Elsakr studio: how to evaluate a software partner, how to design systems that survive outages, and how to structure money-moving platforms.',
    items: [
      {
        id: 'choosing-software-company-egypt',
        title: 'How to Choose a Software Company in Egypt: A Practical Checklist',
        description:
          'A practical checklist for evaluating a software company in Egypt: outcomes, shipped products, ownership terms, engagement models, and security.',
        datePublished: '2026-10-17',
        serviceIds: ['web', 'mobile', 'security'],
        sections: [
          {
            heading: 'Start with the outcome, not the tech stack',
            paragraphs: [
              'Write down what must be true when the project succeeds: which process gets faster, which customers can do something new, which risk disappears. A good partner will challenge that outcome before proposing technology.',
              'If the first conversation is only about frameworks, you are being sold a tool rather than a solution.',
            ],
          },
          {
            heading: 'Ask to see products that are live',
            paragraphs: [
              'Screenshots and slide decks are cheap. Ask for live products you can open, click through, and judge for yourself, and ask which parts the team built.',
            ],
            bullets: [
              'Can you use the product without a guided demo?',
              'Does the team explain trade-offs, not just features?',
              'Are there public repositories or tools that show how they write code?',
            ],
          },
          {
            heading: 'Settle ownership and handover early',
            paragraphs: [
              'Agree in writing who owns the source code and intellectual property, how repository access is transferred, and what documentation you receive. Delaying this conversation is the most common source of later disputes.',
            ],
          },
          {
            heading: 'Understand the engagement model',
            paragraphs: [
              'Time-and-materials suits work that will change as you learn. Fixed price suits scopes that are already well defined. A trustworthy team tells you which one fits your project instead of defaulting to whichever is easier to sell.',
            ],
          },
          {
            heading: 'Check security and data handling',
            paragraphs: [
              'Ask how access to your data is controlled, whether the team signs NDAs and data-processing agreements, and how secrets and credentials are stored. These answers should be specific, not reassurance.',
            ],
          },
          {
            heading: 'Plan communication in your language',
            paragraphs: [
              'Make sure the people who will actually work on the project can discuss requirements with you in Arabic or English, whichever your team uses, and agree how often you will see working software.',
            ],
          },
        ],
      },
      {
        id: 'cloud-pos-offline-continuity',
        title: 'Cloud POS That Keeps Selling Offline: Design Principles',
        description:
          'Design principles for a cloud POS that keeps selling during internet outages: local-first writes, safe sync, and honest limits.',
        datePublished: '2026-10-17',
        serviceIds: ['web', 'cloud', 'design'],
        sections: [
          {
            heading: 'Connectivity should not be a checkout dependency',
            paragraphs: [
              'A shop cannot close its till because the internet dropped. Treat the network as an optimisation for sync and reporting, not as a requirement for completing a sale. This is the principle behind the Windows builds of Sajda POS, which keep selling when the connection is lost.',
            ],
          },
          {
            heading: 'Write locally first, sync afterwards',
            paragraphs: [
              'Every sale, return, and cash movement is saved on the device before anything is sent anywhere. A queue then delivers those records to the cloud when a connection is available.',
            ],
            bullets: [
              'Give every record a unique identifier created on the device.',
              'Keep an ordered queue of unsynced changes.',
              'Retry with back-off and never block the cashier on a sync error.',
            ],
          },
          {
            heading: 'Make sync idempotent',
            paragraphs: [
              'Connections drop halfway through requests. If the same sale arrives twice, the server must recognise it and apply it once. Identifiers created on the device make this straightforward.',
            ],
          },
          {
            heading: 'Decide what can and cannot work offline',
            paragraphs: [
              'Selling, returns against local history, and shift cash counts can work offline. Anything that requires a shared global truth, such as stock transfers between branches, may have to wait. Be explicit about these limits in the interface so cashiers are never surprised.',
            ],
          },
          {
            heading: 'Test by cutting the network mid-sale',
            paragraphs: [
              'The only honest test of offline continuity is to disconnect during a sale, keep working for a while, reconnect, and check that every record and balance matches. Make that test part of every release.',
            ],
          },
        ],
      },
      {
        id: 'fintech-platform-architecture',
        title: 'FinTech Platform Architecture: Ledgers, Idempotency, and Auditability',
        description:
          'Architecture principles for money-moving platforms: an append-only ledger, idempotent requests, explicit transfer states, reconciliation, and security boundaries.',
        datePublished: '2026-10-17',
        serviceIds: ['security', 'cloud', 'mobile'],
        sections: [
          {
            heading: 'Derive balances from an append-only ledger',
            paragraphs: [
              'Instead of overwriting a balance, record each movement as an immutable entry and derive balances from those entries. History then explains every number, and corrections are new entries rather than silent edits.',
            ],
          },
          {
            heading: 'Make every money-moving request idempotent',
            paragraphs: [
              'Clients retry. Networks duplicate. Give each request an idempotency key and store the outcome, so a repeated request returns the original result instead of moving money again.',
            ],
          },
          {
            heading: 'Model transfers as explicit states',
            paragraphs: [
              'A transfer is not just done or not done. Define the states it can be in, which transitions are legal, and who or what may trigger them.',
            ],
            bullets: [
              'Pending, processing, completed, failed, and reversed are typical states.',
              'Reject illegal transitions in code, not just in documentation.',
              'Record who or what caused each transition.',
            ],
          },
          {
            heading: 'Reconcile and monitor continuously',
            paragraphs: [
              'Compare your records with external confirmations on a schedule, alert on mismatches, and keep runbooks for the cases that need a human. Reconciliation is part of the product, not an afterthought.',
            ],
          },
          {
            heading: 'Draw clear security boundaries',
            paragraphs: [
              'Keep secrets out of client apps, apply least-privilege access to operators, rate-limit sensitive endpoints, and log security-relevant actions. Ecosystems with several apps around one core, such as Kashx, benefit from a single set of rules enforced at the core.',
            ],
          },
        ],
      },
    ],
  },
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
