
import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const Legal = React.lazy(() => import('./pages/Legal'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const ToolsBrowse = React.lazy(() => import('./pages/ToolsBrowse'));
const ToolDetail = React.lazy(() => import('./pages/ToolDetail'));
import { ThemeProvider } from './lib/ThemeContext';

const App: React.FC = () => {
  // Check if running in a blob context (often used in live previews)
  // If the URL starts with 'blob:', use HashRouter to prevent routing errors.
  // Otherwise (http/https), use BrowserRouter for clean URLs.
  const isBlob = window.location.protocol === 'blob:';
  const Router = isBlob ? HashRouter : BrowserRouter;

  return (
    <ThemeProvider>
      <Router>
        <React.Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
             <div className="w-8 h-8 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/tools" element={<ToolsBrowse />} />
            <Route path="/tools/:id" element={<ToolDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/terms" element={<Terms />} />
          </Routes>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;

