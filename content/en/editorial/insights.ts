import type { InsightEntry } from '../../shared/editorialTypes';

export const insights: {
  title: string;
  intro: string;
  items: InsightEntry[];
} = {
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
};
