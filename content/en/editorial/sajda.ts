import type { CaseStudyEntry } from '../../shared/editorialTypes';

export const sajdaCaseStudy: CaseStudyEntry = {
  id: 'sajda',
  name: 'Sajda POS',
  category: 'Cloud POS and retail software',
  summary:
    'Cloud POS and retail software for Egyptian shops, with Windows builds that keep selling when the internet drops.',
  image: '/assets/projects/sajda-pos.jpg',
  externalUrl: 'https://sajdapos.com/',
  tags: ['POS', 'Retail', 'Desktop', 'Cloud'],
  industryIds: ['retail-pos'],
  serviceIds: ['web', 'cloud', 'design'],
  sections: [
    {
      heading: 'What Sajda POS is',
      paragraphs: [
        'Sajda POS is cloud POS and retail software built for shops in Egypt. It covers the daily work of a retail counter and the back office behind it.',
      ],
      bullets: [
        'Barcode sales',
        'Shift cash counts',
        'Returns',
        'Installments',
        'Purchases and expenses',
        'Customer and supplier balances',
      ],
    },
    {
      heading: 'Selling through an outage',
      paragraphs: [
        'The Windows builds keep selling when the internet drops. For a shop, a dead connection must not mean a closed till, so the checkout flow is designed to continue and catch up once the connection returns.',
      ],
    },
    {
      heading: 'What we focus on in retail systems',
      paragraphs: [
        'We do not publish store counts or sales figures for Sajda POS on this website. The engineering priorities behind it are the ones we apply to any retail system:',
      ],
      bullets: [
        'A checkout that stays fast and available at the counter.',
        'Cash that reconciles at the end of every shift.',
        'Returns, installments, and balances that stay accurate over time.',
        'Cloud features that complement, rather than gate, the till.',
      ],
    },
  ],
};
