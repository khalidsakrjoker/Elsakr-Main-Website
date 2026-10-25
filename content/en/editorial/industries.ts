import type { IndustryEntry } from '../../shared/editorialTypes';

export const industries: {
  title: string;
  intro: string;
  items: IndustryEntry[];
} = {
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
};
