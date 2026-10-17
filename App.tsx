import React from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider } from './lib/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LocaleSync } from './components/LocaleSync';
import { AppRoutes } from './components/AppRoutes';
import type { AppPages } from './components/AppRoutes';
import { lazyPages } from './components/lazyPages';
import { getLocaleFromPathname } from './lib/seo/localePath';

export interface AppProps {
  /** Render with a StaticRouter for this URL (SSG / prerender). Omit in the browser. */
  url?: string;
  /** Page components; defaults to code-split lazy pages. */
  pages?: AppPages;
}

const Fallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-app" role="status" aria-label="Loading">
    <div className="w-8 h-8 border-4 border-[var(--color-accent)] rounded-full animate-spin border-t-transparent" />
  </div>
);

const AppContent: React.FC<{ pages: AppPages }> = ({ pages }) => (
  <>
    <LocaleSync />
    <React.Suspense fallback={<Fallback />}>
      <AppRoutes pages={pages} />
    </React.Suspense>
  </>
);

const App: React.FC<AppProps> = ({ url, pages = lazyPages }) => {
  const isBlob = typeof window !== 'undefined' && window.location.protocol === 'blob:';

  if (url !== undefined) {
    return (
      <ErrorBoundary>
        <ThemeProvider initialLanguage={getLocaleFromPathname(url)}>
          <StaticRouter location={url}>
            <AppContent pages={pages} />
          </StaticRouter>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

  const Router = isBlob ? HashRouter : BrowserRouter;

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <AppContent pages={pages} />
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
