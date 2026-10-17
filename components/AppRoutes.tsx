import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { withLocale } from '../lib/seo/localePath';
import { ROUTE_TABLE } from './routeTable';

export interface AppPages {
  Home: React.ComponentType;
  About: React.ComponentType;
  Services: React.ComponentType;
  ServiceDetail: React.ComponentType;
  ToolsBrowse: React.ComponentType;
  ToolDetail: React.ComponentType;
  Contact: React.ComponentType;
  Legal: React.ComponentType;
  Privacy: React.ComponentType;
  Terms: React.ComponentType;
  CaseStudies: React.ComponentType;
  CaseStudyDetail: React.ComponentType;
  Industries: React.ComponentType;
  IndustryDetail: React.ComponentType;
  Insights: React.ComponentType;
  InsightDetail: React.ComponentType;
  Faq: React.ComponentType;
  Author: React.ComponentType;
}

/** All route definitions for the site, in English (`/path`) and Arabic (`/ar/path`, `/ar` for home). */
export const AppRoutes: React.FC<{ pages: AppPages }> = ({ pages }) => (
  <Routes>
    {ROUTE_TABLE.flatMap(({ path, page }) => {
      const Page = pages[page];
      return [path, withLocale(path, 'ar')].map((routePath) => (
        <Route key={routePath} path={routePath} element={<Page />} />
      ));
    })}
  </Routes>
);
