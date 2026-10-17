import React from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './lib/ThemeContext';
import type { Language } from './lib/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LocaleSync } from './components/LocaleSync';
import { AppRoutes } from './components/AppRoutes';
import type { AppPages } from './components/AppRoutes';
import { lazyPages } from './components/lazyPages';

export interface AppProps {
  /** Page components; defaults to code-split lazy pages. */
  pages?: AppPages;
}

export interface AppShellProps {
  pages?: AppPages;
  /** Language for the first paint (SSR / prerender). */
  initialLanguage?: Language;
}

const Fallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-app" role="status" aria-label="Loading">
    <div className="w-8 h-8 border-4 border-[var(--color-accent)] rounded-full animate-spin border-t-transparent" />
  </div>
);

/** Shared shell used by the browser app and by entry-server (inside StaticRouter). */
export const AppShell: React.FC<AppShellProps> = ({ pages = lazyPages, initialLanguage }) => (
  <ErrorBoundary>
    <ThemeProvider initialLanguage={initialLanguage}>
      <LocaleSync />
      <React.Suspense fallback={<Fallback />}>
        <AppRoutes pages={pages} />
      </React.Suspense>
    </ThemeProvider>
  </ErrorBoundary>
);

const App: React.FC<AppProps> = ({ pages = lazyPages }) => {
  const isBlob = typeof window !== 'undefined' && window.location.protocol === 'blob:';
  const Router = isBlob ? HashRouter : BrowserRouter;

  return (
    <Router>
      <AppShell pages={pages} />
    </Router>
  );
};

export default App;
