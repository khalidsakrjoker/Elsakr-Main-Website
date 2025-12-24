import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useContent } from '../lib/useContent';
import { Layout } from '../components/ui/Layout';
import { SEO } from '../components/seo/SEO';
import { Download, ExternalLink, Github, ArrowLeft, ArrowRight, Tag, Monitor, Globe, CheckCircle, Lightbulb, BookOpen, Sparkles, Heart, Code2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const { content, language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
  
  // @ts-ignore
  const desktopTools = content.freeToolsDesktop || [];
  // @ts-ignore
  const webTools = content.freeToolsWeb || [];
  
  // Find tool in both arrays
  const allTools = [
    ...desktopTools.map((t: any) => ({ ...t, category: 'desktop' })),
    ...webTools.map((t: any) => ({ ...t, category: 'web' }))
  ];
  
  const tool = allTools.find((t: any) => t.id === id);
  
  // Redirect if not found
  if (!tool) {
    return <Navigate to="/tools" replace />;
  }

  // Related tools (same category, different tool)
  const relatedTools = allTools
    .filter((t: any) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  // Schema.org SoftwareApplication JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.title,
    "description": tool.description,
    "image": `https://elsakr.company${tool.image}`,
    "url": `https://elsakr.company/tools/${tool.id}`,
    "applicationCategory": tool.category === 'web' ? "WebApplication" : "DesktopApplication",
    "operatingSystem": tool.category === 'web' ? "Any" : "Windows",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Elsakr",
      "url": "https://elsakr.company"
    },
    ...(tool.version && { "softwareVersion": tool.version }),
    ...(tool.releaseDate && { "datePublished": tool.releaseDate }),
    ...(tool.keywords && { "keywords": tool.keywords.join(", ") })
  };

  return (
    <Layout>
      <SEO 
        title={`${tool.title} - ${language === 'ar' ? 'أداة مجانية مفتوحة المصدر' : 'Free Open Source Tool'} | Elsakr`}
        description={tool.longDescription || tool.description}
        image={tool.image}
      />

      {/* Schema.org JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link to="/" className="hover:text-blue-500">{language === 'ar' ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <Link to="/tools" className="hover:text-blue-500">{language === 'ar' ? 'الأدوات' : 'Tools'}</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">{tool.title}</span>
          </nav>

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl">
              <img 
                src={tool.image} 
                alt={tool.title}
                className="w-full h-auto"
                loading="eager"
              />
              {/* Category Badge */}
              <span className={`absolute top-4 ${language === 'ar' ? 'right-4' : 'left-4'} px-3 py-1.5 rounded-lg text-xs uppercase font-bold ${
                tool.category === 'desktop' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-emerald-500 text-white'
              }`}>
                {tool.category === 'desktop' ? (
                  <><Monitor className="w-3 h-3 inline mr-1" /> Desktop</>
                ) : (
                  <><Globe className="w-3 h-3 inline mr-1" /> Web</>
                )}
              </span>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {tool.title}
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {tool.description}
              </p>

              {/* Version & Date */}
              {(tool.version || tool.releaseDate) && (
                <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                  {tool.version && (
                    <span className="flex items-center gap-1">
                      <Code2 className="w-4 h-4" /> v{tool.version}
                    </span>
                  )}
                  {tool.releaseDate && (
                    <span className="flex items-center gap-1">
                      📅 {tool.releaseDate}
                    </span>
                  )}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tool.tags?.map((tag: string) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-lg flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Primary Button */}
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

                {/* Secondary Buttons */}
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

          {/* Open Source Philosophy Section */}
          <div className="mb-16 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                  {language === 'ar' ? 'إيمانًا منّا بقوة الـ Open Source' : 'We Believe in the Power of Open Source'}
                </h2>
                <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed">
                  {language === 'ar' 
                    ? 'في الصقر، نؤمن أن البرمجيات الجيدة يجب أن تكون متاحة للجميع. لذلك نقدم أدواتنا مجانًا ومفتوحة المصدر. يمكنك استخدامها، تعديلها، والمساهمة في تطويرها. معًا نبني مجتمع مطورين أقوى.'
                    : 'At Elsakr, we believe great software should be accessible to everyone. That\'s why our tools are free and open source. Use them, modify them, and contribute to their development. Together, we build a stronger developer community.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Long Description Article */}
          {tool.longDescription && (
            <div className="mb-16 prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-500" />
                {language === 'ar' ? 'عن هذه الأداة' : 'About This Tool'}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {tool.longDescription}
              </p>
            </div>
          )}

          {/* Features Section */}
          {tool.features && tool.features.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-500" />
                {language === 'ar' ? 'المميزات' : 'Key Features'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tool.features.map((feature: string, i: number) => (
                  <div 
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How to Use Section */}
          {tool.howToUse && tool.howToUse.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-500" />
                {language === 'ar' ? 'كيفية الاستخدام' : 'How to Use'}
              </h2>
              <div className="space-y-4">
                {tool.howToUse.map((step: string, i: number) => (
                  <div 
                    key={i}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent rounded-xl border-l-4 border-purple-500"
                  >
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {i + 1}
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Use Cases Section */}
          {tool.useCases && tool.useCases.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-amber-500" />
                {language === 'ar' ? 'حالات الاستخدام' : 'Use Cases'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tool.useCases.map((useCase: string, i: number) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30"
                  >
                    <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <span className="text-amber-900 dark:text-amber-100">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section */}
          {tool.benefits && tool.benefits.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-rose-500" />
                {language === 'ar' ? 'لماذا هذه الأداة؟' : 'Why This Tool?'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tool.benefits.map((benefit: string, i: number) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-800/30"
                  >
                    <Heart className="w-5 h-5 text-rose-500 flex-shrink-0" />
                    <span className="text-rose-900 dark:text-rose-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mb-16 p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'جرّب الأداة الآن مجانًا!' : 'Try This Tool Now - It\'s Free!'}
            </h2>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              {language === 'ar' 
                ? 'لا تحتاج لتسجيل أو بطاقة ائتمان. مفتوح المصدر وسيظل مجانيًا للأبد.'
                : 'No signup required, no credit card needed. Open source and free forever.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {tool.links.live ? (
                <a href={tool.links.live} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="!bg-white !text-blue-600 hover:!bg-blue-50">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'جرّب أونلاين' : 'Try Online'}
                  </Button>
                </a>
              ) : tool.links.exe ? (
                <a href={tool.links.exe} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="!bg-white !text-blue-600 hover:!bg-blue-50">
                    <Download className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'تحميل مجاني' : 'Free Download'}
                  </Button>
                </a>
              ) : null}
              <a href={tool.links.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="!border-white/30 !text-white hover:!bg-white/10">
                  <Github className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'شوف الكود' : 'View Source'}
                </Button>
              </a>
            </div>
          </div>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {language === 'ar' ? 'أدوات مشابهة قد تعجبك' : 'Related Tools You Might Like'}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedTools.map((relTool: any) => (
                  <Link
                    key={relTool.id}
                    to={`/tools/${relTool.id}`}
                    className="group bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden hover:border-blue-500/50 hover:shadow-lg transition-all"
                  >
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={relTool.image} 
                        alt={relTool.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {relTool.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 line-clamp-2">{relTool.description}</p>
                    </div>
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
