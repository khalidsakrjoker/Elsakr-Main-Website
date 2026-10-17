import type { AppPages } from './AppRoutes';

/** English route table; every entry is also mounted under the `/ar` prefix. */
export const ROUTE_TABLE: ReadonlyArray<{ path: string; page: keyof AppPages }> = [
  { path: '/', page: 'Home' },
  { path: '/about', page: 'About' },
  { path: '/services', page: 'Services' },
  { path: '/services/:id', page: 'ServiceDetail' },
  { path: '/tools', page: 'ToolsBrowse' },
  { path: '/tools/:id', page: 'ToolDetail' },
  { path: '/contact', page: 'Contact' },
  { path: '/legal', page: 'Legal' },
  { path: '/legal/privacy', page: 'Privacy' },
  { path: '/legal/terms', page: 'Terms' },
  { path: '/case-studies', page: 'CaseStudies' },
  { path: '/case-studies/:id', page: 'CaseStudyDetail' },
  { path: '/industries', page: 'Industries' },
  { path: '/industries/:id', page: 'IndustryDetail' },
  { path: '/insights', page: 'Insights' },
  { path: '/insights/:id', page: 'InsightDetail' },
  { path: '/faq', page: 'Faq' },
  { path: '/author/:id', page: 'Author' },
];
