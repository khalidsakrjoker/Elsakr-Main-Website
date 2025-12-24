import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useContent } from '../../lib/useContent';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = '/seo.jpg', 
  url,
  type = 'website',
  keywords,
  author = 'Elsakr',
  publishedTime,
  modifiedTime
}) => {
  const { language, content } = useContent();
  const location = useLocation();
  
  // Default values
  const siteTitle = content.brand.name;
  const defaultDescription = content.brand.description;
  const baseUrl = 'https://elsakr.company';
  const currentUrl = url || `${baseUrl}${location.pathname}`;
  const canonicalUrl = currentUrl.split('?')[0];
  const fullTitle = title ? `${title}` : `${siteTitle} | ${content.brand.tagline}`;
  const finalDescription = description || defaultDescription;
  const finalImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  // Default keywords based on language
  const defaultKeywords = language === 'ar' 
    ? ['شركة برمجة', 'تطوير ويب', 'تطبيقات موبايل', 'حلول برمجية', 'الصقر']
    : ['software company', 'web development', 'mobile apps', 'software solutions', 'Elsakr'];
  const finalKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0f172a" />
      <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Search Engines */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geo Targeting */}
      <meta name="geo.region" content="EG" />
      <meta name="geo.placename" content="Egypt" />
      
      {/* Mobile App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />

      {/* Open Graph / Facebook / WhatsApp / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={language === 'ar' ? 'ar_EG' : 'en_US'} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@elsakr" />
      <meta name="twitter:creator" content="@elsakr" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* JSON-LD Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "ProfessionalService"],
          "@id": "https://elsakr.company/#organization",
          "name": "Elsakr",
          "alternateName": "الصقر",
          "url": "https://elsakr.company",
          "logo": {
            "@type": "ImageObject",
            "url": "https://elsakr.company/Sakr-logo.webp",
            "width": 512,
            "height": 512
          },
          "image": "https://elsakr.company/seo.jpg",
          "description": language === 'ar' 
            ? "شركة برمجيات كاملة الخدمات. نبني أنظمة Enterprise، منصات FinTech، تطبيقات موبايل، حلول AI، و13+ أداة مفتوحة المصدر مجانية."
            : "Full-service software engineering studio. Enterprise systems, FinTech platforms, mobile apps (Flutter/React Native), AI solutions, cloud infrastructure, and 13+ free open source developer tools.",
          "foundingDate": "2019",
          "founder": {
            "@type": "Person",
            "name": "Khalid Elsakr"
          },
          "areaServed": ["Worldwide", "EMEA", "Europe", "Middle East", "Egypt"],
          "serviceType": [
            "Enterprise Software Development",
            "FinTech Development",
            "Mobile App Development",
            "AI Integration & RAG Systems",
            "Cloud Infrastructure (AWS/Kubernetes)",
            "Cybersecurity & Penetration Testing",
            "UI/UX Design"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "EG",
            "addressLocality": "Egypt"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+201016495229",
              "contactType": "sales",
              "availableLanguage": ["Arabic", "English"]
            },
            {
              "@type": "ContactPoint",
              "email": "khalid@elsakr.company",
              "contactType": "customer service"
            }
          ],
          "sameAs": [
            "https://github.com/khalidsakrjoker",
            "https://wa.me/201016495229",
            "https://www.facebook.com/people/Elsakr/61584979738922/"
          ],
          "knowsAbout": [
            "Enterprise Web Development",
            "High-Frequency Trading Systems",
            "FinTech Platforms",
            "Mobile App Development (Flutter, React Native)",
            "AI & Machine Learning Integration",
            "RAG Systems & LLM Implementation",
            "Cloud Infrastructure (AWS, Kubernetes, Docker)",
            "Cybersecurity & Penetration Testing",
            "UI/UX Design",
            "Open Source Software Development",
            "Python", "React", "Next.js", "Node.js", "Flutter", "TypeScript"
          ],
          "slogan": language === 'ar' ? "هندسة التميز" : "Engineering Excellence"
        })}
      </script>

      {/* JSON-LD WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://elsakr.company/#website",
          "url": "https://elsakr.company",
          "name": "Elsakr",
          "alternateName": "الصقر",
          "description": finalDescription,
          "publisher": {
            "@id": "https://elsakr.company/#organization"
          },
          "inLanguage": [
            {
              "@type": "Language",
              "name": "English",
              "alternateName": "en"
            },
            {
              "@type": "Language", 
              "name": "Arabic",
              "alternateName": "ar"
            }
          ],
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://elsakr.company/tools?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};
