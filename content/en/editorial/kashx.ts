import type { CaseStudyEntry } from '../../shared/editorialTypes';

export const kashxCaseStudy: CaseStudyEntry = {
  id: 'kashx',
  name: 'Kashx Company',
  category: 'FinTech platform',
  summary:
    'A money-transfer and digital-wallet ecosystem: one core system plus three integrated apps, all reachable from the same link.',
  image: '/assets/projects/kashx-company.png',
  externalUrl: 'https://kashx.company/',
  tags: ['FinTech', 'System', 'Mobile'],
  industryIds: ['fintech'],
  serviceIds: ['web', 'mobile', 'security', 'cloud'],
  sections: [
    {
      heading: 'What Kashx is',
      paragraphs: [
        'Kashx is the full Kashx ecosystem in one place. At its centre is the core money-transfer and digital-wallet system. Around it sit three integrated apps that cover the rest of the workflow.',
      ],
      bullets: [
        'Core money-transfer and digital-wallet system',
        'WebView access app',
        'SMS receiver app',
        'Transfer execution app',
      ],
    },
    {
      heading: 'How the pieces fit together',
      paragraphs: [
        'The core system and the three apps are designed to work as one ecosystem rather than four disconnected tools. Everything is reachable from the same link, so people do not have to track separate entry points.',
        'A multi-component platform like this needs clear boundaries between the core system and the apps at its edges, so each part can change without breaking the others.',
      ],
    },
    {
      heading: 'What we focus on in FinTech builds',
      paragraphs: [
        'We do not publish transaction volumes or customer numbers for Kashx on this website. What we can describe is the engineering discipline we bring to money-moving software:',
      ],
      bullets: [
        'Correctness first: balances and transfers must be consistent and traceable.',
        'Safe retries: a repeated request must never move money twice.',
        'Security by default: least-privilege access, protected secrets, and audited actions.',
        'Mobile and web surfaces that stay in step with the same core rules.',
      ],
    },
  ],
};
