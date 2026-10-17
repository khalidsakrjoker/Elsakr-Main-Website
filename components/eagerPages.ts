import type { AppPages } from './AppRoutes';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import ToolsBrowse from '../pages/ToolsBrowse';
import ToolDetail from '../pages/ToolDetail';
import Contact from '../pages/Contact';
import Legal from '../pages/Legal';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import CaseStudies from '../pages/CaseStudies';
import CaseStudyDetail from '../pages/CaseStudyDetail';
import Industries from '../pages/Industries';
import IndustryDetail from '../pages/IndustryDetail';
import Insights from '../pages/Insights';
import InsightDetail from '../pages/InsightDetail';
import Faq from '../pages/Faq';
import Author from '../pages/Author';

/** Server / prerender bundle: pages are imported eagerly because `renderToString` cannot await lazy chunks. */
export const eagerPages: AppPages = {
  Home,
  About,
  Services,
  ServiceDetail,
  ToolsBrowse,
  ToolDetail,
  Contact,
  Legal,
  Privacy,
  Terms,
  CaseStudies,
  CaseStudyDetail,
  Industries,
  IndustryDetail,
  Insights,
  InsightDetail,
  Faq,
  Author,
};
