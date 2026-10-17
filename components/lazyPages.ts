import React from 'react';
import type { AppPages } from './AppRoutes';

/** Browser bundle: every page is code-split. */
export const lazyPages: AppPages = {
  Home: React.lazy(() => import('../pages/Home')),
  About: React.lazy(() => import('../pages/About')),
  Services: React.lazy(() => import('../pages/Services')),
  ServiceDetail: React.lazy(() => import('../pages/ServiceDetail')),
  ToolsBrowse: React.lazy(() => import('../pages/ToolsBrowse')),
  ToolDetail: React.lazy(() => import('../pages/ToolDetail')),
  Contact: React.lazy(() => import('../pages/Contact')),
  Legal: React.lazy(() => import('../pages/Legal')),
  Privacy: React.lazy(() => import('../pages/Privacy')),
  Terms: React.lazy(() => import('../pages/Terms')),
  CaseStudies: React.lazy(() => import('../pages/CaseStudies')),
  CaseStudyDetail: React.lazy(() => import('../pages/CaseStudyDetail')),
  Industries: React.lazy(() => import('../pages/Industries')),
  IndustryDetail: React.lazy(() => import('../pages/IndustryDetail')),
  Insights: React.lazy(() => import('../pages/Insights')),
  InsightDetail: React.lazy(() => import('../pages/InsightDetail')),
  Faq: React.lazy(() => import('../pages/Faq')),
  Author: React.lazy(() => import('../pages/Author')),
};
