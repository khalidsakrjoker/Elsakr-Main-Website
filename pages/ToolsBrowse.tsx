import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useContent } from '../lib/useContent';
import { Layout } from '../components/ui/Layout';
import { SEO } from '../components/seo/SEO';
import { Search, Filter, ArrowLeft, ArrowRight, X, Monitor, Globe } from 'lucide-react';
import { combineTools, extractTags, filterTools } from '../lib/toolsFilter';

export default function ToolsBrowse() {
  const { content, language } = useContent();
  const [searchParams] = useSearchParams();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const typeParam = searchParams.get('type');
  const initialCategory = typeParam === 'desktop' ? 'desktop' : typeParam === 'web' ? 'web' : 'all';

  const [category, setCategory] = useState<'all' | 'desktop' | 'web'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTools = useMemo(
    () => combineTools(content.freeToolsDesktop ?? [], content.freeToolsWeb ?? []),
    [content.freeToolsDesktop, content.freeToolsWeb]
  );

  const allTags = useMemo(() => extractTags(allTools), [allTools]);

  const filteredTools = useMemo(
    () => filterTools(allTools, { category, searchQuery, selectedTag }),
    [allTools, category, searchQuery, selectedTag]
  );

  return (
    <Layout>
      <SEO
        title={language === 'ar' ? 'أدوات مجانية مفتوحة المصدر' : 'Free Open Source Tools'}
        description={
          language === 'ar'
            ? 'استكشف مجموعة أدواتنا المجانية مفتوحة المصدر للمطورين والمصممين'
            : 'Explore our collection of free open source tools for developers and designers'
        }
      />

      <section className="py-20 px-6 min-h-screen bg-app">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent hover:underline mb-4 text-sm"
            >
              <ArrowIcon className={`w-4 h-4 ${language === 'ar' ? '' : 'rotate-180'}`} />
              {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-3">
              {language === 'ar' ? 'أدوات مفتوحة المصدر' : 'Open Source Tools'}
            </h1>
            <p className="text-ink-muted max-w-2xl">
              {language === 'ar'
                ? 'كل الأدوات مجانية ومفتوحة المصدر. حمّل الكود أو استخدمها أونلاين.'
                : 'All tools are free and open source. Download the code or use them online.'}
            </p>
          </div>

          <div className="bg-surface border border-app rounded-lg p-4 mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 rtl:right-3 rtl:left-auto top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted" />
                <input
                  type="text"
                  aria-label={language === 'ar' ? 'ابحث عن أداة' : 'Search tools'}
                  placeholder={language === 'ar' ? 'ابحث عن أداة...' : 'Search tools...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 rtl:pr-10 rtl:pl-4 pr-4 py-3 bg-app border border-app focus:border-[var(--color-accent)] rounded-lg text-ink placeholder:text-ink-muted outline-none transition-colors"
                />
              </div>

              <div className="flex bg-app border border-app rounded-lg p-1" role="tablist" aria-label="Tool category">
                {(['all', 'desktop', 'web'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={category === cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      category === cat
                        ? 'bg-accent text-white'
                        : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {cat === 'all'
                      ? language === 'ar'
                        ? 'الكل'
                        : 'All'
                      : cat === 'desktop'
                        ? language === 'ar'
                          ? 'سطح المكتب'
                          : 'Desktop'
                        : language === 'ar'
                          ? 'الويب'
                          : 'Web'}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-ink-muted flex items-center gap-1">
                <Filter className="w-3 h-3" /> Tags:
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-accent text-white'
                      : 'bg-app border border-app text-ink-muted hover:text-ink'
                  }`}
                >
                  {tag}
                  {selectedTag === tag && <X className="w-3 h-3 inline ml-1" />}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-ink-muted mb-6">
            {language === 'ar'
              ? `عرض ${filteredTools.length} أداة`
              : `Showing ${filteredTools.length} tools`}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.map((tool) => (
              <Link
                key={tool.id}
                to={`/tools/${tool.id}`}
                className="group p-5 bg-surface border border-app rounded-lg hover-lift hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <img src={tool.logo} alt="" className="w-14 h-14 object-contain" loading="lazy" />
                  <span className="text-[10px] uppercase tracking-wide font-semibold text-ink-muted flex items-center gap-1">
                    {tool.category === 'desktop' ? (
                      <>
                        <Monitor className="w-3 h-3" /> Desktop
                      </>
                    ) : (
                      <>
                        <Globe className="w-3 h-3" /> Web
                      </>
                    )}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                  {tool.title}
                </h2>
                <p className="text-sm text-ink-muted line-clamp-2">{tool.description}</p>
                {tool.tags && tool.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {tool.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wide text-ink-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink-muted text-lg">
                {language === 'ar' ? 'لم يتم العثور على أدوات' : 'No tools found'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag(null);
                  setCategory('all');
                }}
                className="mt-4 text-accent hover:underline"
              >
                {language === 'ar' ? 'إعادة تعيين الفلاتر' : 'Reset filters'}
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
