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
  modifiedTime,
}) => {
  const { language, content } = useContent();
  const location = useLocation();

  const siteTitle = content.brand.name;
  const defaultDescription = content.brand.description;
  const baseUrl = 'https://elsakr.company';
  const currentUrl = url || `${baseUrl}${location.pathname}`;
  const canonicalUrl = currentUrl.split('?')[0];
  const fullTitle = title
    ? title
    : language === 'ar'
      ? `${siteTitle} | ${content.brand.tagline}`
      : `${siteTitle} | ${content.brand.tagline}`;
  const finalDescription = description || defaultDescription;
  const finalImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  const defaultKeywords =
    language === 'ar'
      ? [
          'شركة الصقر للبرمجيات',
          'الصقر برمجيات',
          'الصقر برمجة',
          'شركة برمجيات مصر',
          'تطوير تطبيقات',
          'برمجيات مفتوحة المصدر',
          'حلول برمجية',
        ]
      : [
          'Elsakr',
          'elsakr software studio',
          'software house egypt',
          'software company',
          'web development',
          'mobile apps',
          'open source tools',
        ];
  const finalKeywords = keywords || defaultKeywords;

  const organizationName = language === 'ar' ? content.brand.name : 'Elsakr';
  const organizationDescription =
    language === 'ar'
      ? 'شركة برمجيات مصرية رائدة في تطوير الحلول والأنظمة البرمجية المتقدمة والتطبيقات السحابية وتوفير أدوات تطوير مفتوحة المصدر.'
      : 'Full-service software engineering studio. Enterprise systems, FinTech platforms, mobile apps (Flutter/React Native), AI solutions, cloud infrastructure, and 17+ free open source developer tools.';
  const knowsAbout =
    language === 'ar'
      ? [
          'تطوير البرمجيات',
          'أنظمة المؤسسات Enterprise',
          'تطبيقات الموبايل Flutter و React Native',
          'حلول الذكاء الاصطناعي AI & RAG',
          'أدوات المطورين مفتوحة المصدر Open Source Tools',
        ]
      : [
          'Enterprise Web Development',
          'High-Frequency Trading Systems',
          'FinTech Platforms',
          'Mobile App Development (Flutter, React Native)',
          'AI & Machine Learning Integration',
          'RAG Systems & LLM Implementation',
          'Cloud Infrastructure (AWS, Kubernetes, Docker)',
          'Cybersecurity & Penetration Testing',
          'UI/UX Design',
          'Open Source Software Development',
          'Python',
          'React',
          'Next.js',
          'Node.js',
          'Flutter',
          'TypeScript',
        ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0f172a" />
      <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      <meta name="geo.region" content="EG" />
      <meta name="geo.placename" content="Egypt" />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={content.brand.shortName} />

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
      {language === 'ar' ? (
        <meta property="og:locale:alternate" content="en_US" />
      ) : (
        <meta property="og:locale:alternate" content="ar_EG" />
      )}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@elsakr" />
      <meta name="twitter:creator" content="@elsakr" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['Organization', 'ProfessionalService'],
          '@id': 'https://elsakr.company/#organization',
          name: organizationName,
          alternateName: [
            'الصقر',
            'الصقر برمجيات',
            'شركة الصقر للبرمجيات',
            'Elsakr',
            'Elsakr Software Studio',
          ],
          url: 'https://elsakr.company',
          logo: {
            '@type': 'ImageObject',
            url: 'https://elsakr.company/Sakr-logo.webp',
            width: 512,
            height: 512,
          },
          image: 'https://elsakr.company/seo.jpg',
          description: organizationDescription,
          foundingDate: '2019',
          founder: {
            '@type': 'Person',
            name: 'Khalid Elsakr',
          },
          areaServed: ['Worldwide', 'EMEA', 'Europe', 'Middle East', 'Egypt'],
          serviceType: [
            'Enterprise Software Development',
            'FinTech Development',
            'Mobile App Development',
            'AI Integration & RAG Systems',
            'Cloud Infrastructure (AWS/Kubernetes)',
            'Cybersecurity & Penetration Testing',
            'UI/UX Design',
          ],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'EG',
            addressLocality: 'Egypt',
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+201016495229',
              contactType: 'sales',
              availableLanguage: ['Arabic', 'English'],
            },
            {
              '@type': 'ContactPoint',
              email: 'khalid@elsakr.company',
              contactType: 'customer service',
            },
          ],
          sameAs: [
            'https://github.com/khalidsakrjoker',
            'https://wa.me/201016495229',
            'https://www.facebook.com/people/Elsakr/61584979738922/',
          ],
          knowsAbout,
          slogan: language === 'ar' ? 'كود بيشيل بيزنس' : 'Engineering Excellence',
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://elsakr.company/#website',
          url: 'https://elsakr.company',
          name: organizationName,
          alternateName: ['الصقر', 'Elsakr', 'شركة الصقر للبرمجيات'],
          description: finalDescription,
          publisher: {
            '@id': 'https://elsakr.company/#organization',
          },
          inLanguage: [
            {
              '@type': 'Language',
              name: 'English',
              alternateName: 'en',
            },
            {
              '@type': 'Language',
              name: 'Arabic',
              alternateName: 'ar',
            },
          ],
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://elsakr.company/tools?search={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        })}
      </script>
    </Helmet>
  );
};
