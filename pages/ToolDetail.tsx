import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useContent } from '../lib/useContent';
import { Layout } from '../components/ui/Layout';
import { SEO } from '../components/seo/SEO';
import {
  Download,
  ExternalLink,
  Github,
  Tag,
  Monitor,
  Globe,
  CheckCircle,
  Lightbulb,
  BookOpen,
  Heart,
  Code2,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { combineTools } from '../lib/toolsFilter';

export default function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const { content, language } = useContent();

  const allTools = combineTools(content.freeToolsDesktop ?? [], content.freeToolsWeb ?? []);
  const tool = allTools.find((t) => t.id === id);

  if (!tool) {
    return <Navigate to="/tools" replace />;
  }

  const relatedTools = allTools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.title,
    description: tool.description,
    image: `https://elsakr.company${tool.image}`,
    url: `https://elsakr.company/tools/${tool.id}`,
    applicationCategory: tool.category === 'web' ? 'WebApplication' : 'DesktopApplication',
    operatingSystem: tool.category === 'web' ? 'Any' : 'Windows',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Elsakr',
      url: 'https://elsakr.company',
    },
    ...(tool.version && { softwareVersion: tool.version }),
    ...(tool.releaseDate && { datePublished: tool.releaseDate }),
    ...(tool.keywords && { keywords: tool.keywords.join(', ') }),
  };

  return (
    <Layout>
      <SEO
        title={`${tool.title} - ${language === 'ar' ? 'أداة مجانية مفتوحة المصدر' : 'Free Open Source Tool'} | Elsakr`}
        description={tool.longDescription || tool.description}
        image={tool.image}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="py-20 px-6 bg-app">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-ink-muted mb-8">
            <Link to="/" className="hover:text-accent">
              {language === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <Link to="/tools" className="hover:text-accent">
              {language === 'ar' ? 'الأدوات' : 'Tools'}
            </Link>
            <span>/</span>
            <span className="text-ink">{tool.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative rounded-lg overflow-hidden border border-app bg-surface">
              {tool.image ? (
                <img src={tool.image} alt={tool.title} className="w-full h-auto" loading="eager" />
              ) : (
                <div className="aspect-video flex items-center justify-center bg-surface-muted">
                  <img src={tool.logo} alt="" className="w-24 h-24 object-contain" />
                </div>
              )}
              <span
                className={`absolute top-4 ${language === 'ar' ? 'right-4' : 'left-4'} px-3 py-1.5 rounded-md text-xs uppercase font-semibold bg-surface/90 text-ink border border-app`}
              >
                {tool.category === 'desktop' ? (
                  <>
                    <Monitor className="w-3 h-3 inline mr-1" /> Desktop
                  </>
                ) : (
                  <>
                    <Globe className="w-3 h-3 inline mr-1" /> Web
                  </>
                )}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={tool.logo}
                  alt=""
                  data-testid="tool-logo"
                  className="w-16 h-16 object-contain"
                />
                <span className="text-xs uppercase tracking-wide text-ink-muted">
                  {tool.category === 'desktop' ? 'Desktop' : 'Web'}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
                {tool.title}
              </h1>

              <p className="text-lg text-ink-muted mb-6 leading-relaxed">{tool.description}</p>

              {(tool.version || tool.releaseDate) && (
                <div className="flex items-center gap-4 mb-6 text-sm text-ink-muted">
                  {tool.version && (
                    <span className="flex items-center gap-1">
                      <Code2 className="w-4 h-4" /> v{tool.version}
                    </span>
                  )}
                  {tool.releaseDate && <span>{tool.releaseDate}</span>}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {tool.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-surface border border-app text-ink text-sm rounded-md flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                {tool.links.live ? (
                  <a href={tool.links.live} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="primary" fullWidth>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {language === 'ar' ? 'جرّب أونلاين مجاناً' : 'Try Online Free'}
                    </Button>
                  </a>
                ) : tool.links.exe ? (
                  <a href={tool.links.exe} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="primary" fullWidth>
                      <Download className="w-4 h-4 mr-2" />
                      {language === 'ar' ? 'تحميل .EXE مجاناً' : 'Download .EXE Free'}
                    </Button>
                  </a>
                ) : null}

                <div className="grid grid-cols-2 gap-3">
                  {tool.links.source && (
                    <a href={tool.links.source} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" fullWidth>
                        <Download className="w-4 h-4 mr-2" />
                        {language === 'ar' ? 'السورس' : 'Source'}
                      </Button>
                    </a>
                  )}
                  {tool.links.github && (
                    <a href={tool.links.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" fullWidth>
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 p-8 bg-surface border border-app rounded-lg">
            <div className="flex items-start gap-4">
              <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-ink mb-2">
                  {language === 'ar'
                    ? 'إيمانًا منّا بقوة الـ Open Source'
                    : 'We Believe in the Power of Open Source'}
                </h2>
                <p className="text-ink-muted leading-relaxed">
                  {language === 'ar'
                    ? 'في الصقر، نؤمن أن البرمجيات الجيدة يجب أن تكون متاحة للجميع. لذلك نقدم أدواتنا مجانًا ومفتوحة المصدر.'
                    : 'At Elsakr, we believe great software should be accessible to everyone. That is why our tools are free and open source.'}
                </p>
              </div>
            </div>
          </div>

          {tool.longDescription && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-accent" />
                {language === 'ar' ? 'عن هذه الأداة' : 'About This Tool'}
              </h2>
              <p className="text-ink-muted leading-relaxed text-lg">{tool.longDescription}</p>
            </div>
          )}

          {tool.features && tool.features.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                {language === 'ar' ? 'المميزات' : 'Key Features'}
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {tool.features.map((feature: string) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-4 bg-surface border border-app rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-ink">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tool.howToUse && tool.howToUse.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                {language === 'ar' ? 'كيفية الاستخدام' : 'How to Use'}
              </h2>
              <ol className="space-y-3">
                {tool.howToUse.map((step: string, i: number) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 p-4 bg-surface border border-app rounded-lg"
                  >
                    <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-ink pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {tool.useCases && tool.useCases.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-accent" />
                {language === 'ar' ? 'حالات الاستخدام' : 'Use Cases'}
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {tool.useCases.map((useCase: string) => (
                  <div
                    key={useCase}
                    className="flex items-center gap-3 p-4 bg-surface border border-app rounded-lg"
                  >
                    <span className="text-ink">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tool.benefits && tool.benefits.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                {language === 'ar' ? 'لماذا هذه الأداة؟' : 'Why This Tool?'}
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {tool.benefits.map((benefit: string) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 p-4 bg-surface border border-app rounded-lg"
                  >
                    <span className="text-ink">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-16 p-8 bg-surface-muted border border-app rounded-lg text-center">
            <h2 className="font-display text-2xl font-bold text-ink mb-4">
              {language === 'ar' ? 'جرّب الأداة الآن مجانًا!' : "Try This Tool Now — It's Free"}
            </h2>
            <p className="text-ink-muted mb-6 max-w-lg mx-auto">
              {language === 'ar'
                ? 'لا تحتاج لتسجيل أو بطاقة ائتمان. مفتوح المصدر وسيظل مجانيًا.'
                : 'No signup required. Open source and free forever.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {tool.links.live ? (
                <a href={tool.links.live} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'جرّب أونلاين' : 'Try Online'}
                  </Button>
                </a>
              ) : tool.links.exe ? (
                <a href={tool.links.exe} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">
                    <Download className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'تحميل مجاني' : 'Free Download'}
                  </Button>
                </a>
              ) : null}
              {tool.links.github && (
                <a href={tool.links.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'شوف الكود' : 'View Source'}
                  </Button>
                </a>
              )}
            </div>
          </div>

          {relatedTools.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                {language === 'ar' ? 'أدوات مشابهة قد تعجبك' : 'Related Tools'}
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {relatedTools.map((relTool) => (
                  <Link
                    key={relTool.id}
                    to={`/tools/${relTool.id}`}
                    className="group p-5 bg-surface border border-app rounded-lg hover-lift hover:border-[var(--color-accent)] transition-colors"
                  >
                    <img
                      src={relTool.logo}
                      alt=""
                      className="w-12 h-12 object-contain mb-3"
                      loading="lazy"
                    />
                    <h3 className="font-semibold text-ink group-hover:text-accent transition-colors">
                      {relTool.title}
                    </h3>
                    <p className="text-sm text-ink-muted mt-1 line-clamp-2">{relTool.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
