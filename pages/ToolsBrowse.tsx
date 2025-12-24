import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useContent } from '../lib/useContent';
import { Layout } from '../components/ui/Layout';
import { SEO } from '../components/seo/SEO';
import { Search, Filter, Download, ExternalLink, Github, ArrowLeft, ArrowRight, X } from 'lucide-react';

export default function ToolsBrowse() {
  const { content, language } = useContent();
  const [searchParams] = useSearchParams();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
  
  // @ts-ignore
  const desktopTools = content.freeToolsDesktop || [];
  // @ts-ignore
  const webTools = content.freeToolsWeb || [];
  
  const typeParam = searchParams.get('type');
  const initialCategory = typeParam === 'desktop' ? 'desktop' : typeParam === 'web' ? 'web' : 'all';
  
  const [category, setCategory] = useState<'all' | 'desktop' | 'web'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Combine tools with category marker
  const allTools = useMemo(() => {
    const desktop = desktopTools.map((t: any) => ({ ...t, category: 'desktop' }));
    const web = webTools.map((t: any) => ({ ...t, category: 'web' }));
    return [...desktop, ...web];
  }, [desktopTools, webTools]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allTools.forEach((tool: any) => {
      tool.tags?.forEach((tag: string) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [allTools]);

  // Filter tools
  const filteredTools = useMemo(() => {
    return allTools.filter((tool: any) => {
      // Category filter
      if (category !== 'all' && tool.category !== category) return false;
      
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchTitle = tool.title.toLowerCase().includes(query);
        const matchDesc = tool.description.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc) return false;
      }
      
      // Tag filter
      if (selectedTag && !tool.tags?.includes(selectedTag)) return false;
      
      return true;
    });
  }, [allTools, category, searchQuery, selectedTag]);

  return (
    <Layout>
      <SEO 
        title={language === 'ar' ? 'أدوات مجانية مفتوحة المصدر' : 'Free Open Source Tools'}
        description={language === 'ar' 
          ? 'استكشف مجموعة أدواتنا المجانية مفتوحة المصدر للمطورين والمصممين'
          : 'Explore our collection of free open source tools for developers and designers'}
      />

      <section className="py-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <Link 
              to="/#free-tools"
              className="inline-flex items-center gap-2 text-blue-500 hover:underline mb-4"
            >
              <ArrowIcon className={`w-4 h-4 ${language === 'ar' ? '' : 'rotate-180'}`} />
              {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {language === 'ar' ? 'أدوات مفتوحة المصدر' : 'Open Source Tools'}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'كل الأدوات مجانية ومفتوحة المصدر. حمّل الكود أو استخدمها أونلاين.'
                : 'All tools are free and open source. Download the code or use them online.'}
            </p>
          </div>

          {/* Filters Bar */}
          <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/10 p-4 mb-8 space-y-4">
            
            {/* Search & Category */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 rtl:right-3 rtl:left-auto top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'ابحث عن أداة...' : 'Search tools...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 rtl:pr-10 rtl:pl-4 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-blue-500 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>
              
              {/* Category Tabs */}
              <div className="flex bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
                {(['all', 'desktop', 'web'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      category === cat
                        ? 'bg-blue-500 text-white'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {cat === 'all' ? (language === 'ar' ? 'الكل' : 'All') :
                     cat === 'desktop' ? (language === 'ar' ? 'سطح المكتب' : 'Desktop') :
                     (language === 'ar' ? 'الويب' : 'Web')}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Tags:
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {tag}
                  {selectedTag === tag && <X className="w-3 h-3 inline ml-1" />}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-slate-500 mb-6">
            {language === 'ar' 
              ? `عرض ${filteredTools.length} أداة`
              : `Showing ${filteredTools.length} tools`}
          </p>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool: any) => (
              <Link
                key={tool.id}
                to={`/tools/${tool.id}`}
                className="group bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tool.image} 
                    alt={tool.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className={`absolute top-3 left-3 px-2 py-1 rounded-lg text-[10px] uppercase font-bold ${
                    tool.category === 'desktop' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-emerald-500 text-white'
                  }`}>
                    {tool.category === 'desktop' ? '🖥️ Desktop' : '🌐 Web'}
                  </span>
                  
                  {/* Tags */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {tool.tags?.slice(0, 2).map((tag: string) => (
                      <span key={tag} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors flex items-center gap-2">
                    {tool.title}
                    <ArrowIcon className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${language === 'ar' ? '' : ''}`} />
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredTools.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">
                {language === 'ar' ? 'لم يتم العثور على أدوات' : 'No tools found'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag(null);
                  setCategory('all');
                }}
                className="mt-4 text-blue-500 hover:underline"
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
