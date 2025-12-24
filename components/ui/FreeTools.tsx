import React from "react";
import { Link } from "react-router-dom";
import { useLightMarquee } from "../../lib/useLightMarquee";
import { useContent } from "../../lib/useContent";
import { Download, Github, Code2, ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "./Button";

const ToolCard = ({ tool }: { tool: any }) => {
  const hasLiveLink = !!tool.links.live;
  
  return (
    <div 
      className="w-[400px] bg-white dark:bg-luxury-black border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-xl shadow-slate-200/50 dark:shadow-black/50 transition-all hover:border-blue-500/50 hover:shadow-blue-500/10 whitespace-normal group flex-shrink-0"
      draggable={false}
    >
      {/* Clickable Image Area - links to detail page */}
      <Link 
        to={`/tools/${tool.id}`}
        className="relative aspect-video rounded-lg overflow-hidden border border-slate-100 dark:border-white/5 bg-slate-100 dark:bg-black/50 block"
      >
        <img 
          src={tool.image || "/placeholder.png"} 
          alt={tool.title}
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
        <div className="absolute bottom-3 left-3 flex gap-2">
            {tool.tags?.map((tag: string) => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-blue-600 text-white rounded-full">
                    {tag}
                </span>
            ))}
        </div>
      </Link>

      {/* Clickable Title - links to detail page */}
      <Link to={`/tools/${tool.id}`} className="block">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
            {tool.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
            {tool.description}
        </p>
      </Link>

      {/* Action Buttons - external links */}
      <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-white/5">
        {/* Source & GitHub row */}
        <div className="grid grid-cols-2 gap-2">
          <Button 
              variant="outline" 
              className="flex-1 text-xs py-2 px-3 !text-slate-600 dark:!text-slate-300 !border-slate-300 dark:!border-white/20 hover:!border-blue-500 hover:!text-blue-600"
              onClick={(e) => { e.stopPropagation(); window.open(tool.links.source, '_blank'); }}
          >
              <Code2 className="w-4 h-4" />
              Source Code
          </Button>
          <Button 
              variant="outline" 
              className="flex-1 text-xs py-2 px-3 !text-slate-600 dark:!text-slate-300 !border-slate-300 dark:!border-white/20 hover:!border-blue-500 hover:!text-blue-600"
              onClick={(e) => { e.stopPropagation(); window.open(tool.links.github, '_blank'); }}
          >
              <Github className="w-4 h-4" />
              View GitHub
          </Button>
        </div>
        
        {/* Main action button - full width */}
        <Button 
            variant="primary" 
            className="text-xs py-2.5 px-3 w-full !bg-blue-600 !text-white hover:!bg-blue-700"
            onClick={(e) => { e.stopPropagation(); window.open(hasLiveLink ? tool.links.live : tool.links.exe, '_blank'); }}
        >
            {hasLiveLink ? (
              <>
                <ExternalLink className="w-4 h-4" />
                Try Online
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download .EXE
              </>
            )}
        </Button>
      </div>
    </div>
  )
}

// Marquee component for reusability
const ToolsMarquee = ({ tools, direction = -1 }: { tools: any[], direction?: 1 | -1 }) => {
  const { containerRef, trackRef, isDragging } = useLightMarquee({
    speed: 30,
    direction,
    draggable: true,
    pauseOnHover: true
  });

  if (tools.length === 0) return null;

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap py-6 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
      dir="ltr"
    >
      <div 
        ref={trackRef}
        className="flex whitespace-nowrap gap-8 flex-nowrap will-change-transform"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        {/* 4 copies for seamless loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-8 flex-shrink-0">
            {tools.map((tool: any) => (
              <ToolCard key={`${i}-${tool.id}`} tool={tool} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const FreeTools: React.FC = () => {
    const { content, language } = useContent();
    const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
    // @ts-ignore
    const desktopTools = content.freeToolsDesktop || [];
    // @ts-ignore
    const webTools = content.freeToolsWeb || [];

    if (desktopTools.length === 0 && webTools.length === 0) return null;

    return (
        <section id="free-tools" className="py-24 bg-slate-50 dark:bg-luxury-black relative z-10 overflow-hidden border-y border-slate-200 dark:border-white/5">
          {/* Main Section Header */}
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-mono tracking-widest uppercase rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Open Source
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white mb-6 py-8">
                {language === 'ar' ? "أدوات مفتوحة المصدر" : "Open Source Tools"}
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg mb-6">
                {language === 'ar' 
                    ? "بنحب الـ Open Source! حمّل أدواتنا ببلاش واستخدمها براحتك." 
                    : "We love Open Source! Download our free tools and use them however you want."}
            </p>
            {/* View All Button */}
            <Link 
              to="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all"
            >
              {language === 'ar' ? 'عرض كل الأدوات' : 'View All Tools'}
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Desktop Subsection */}
          {desktopTools.length > 0 && (
            <div className="mb-16">
              <div className="max-w-7xl mx-auto px-6 mb-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg">
                      🖥️ {language === 'ar' ? "تطبيقات سطح المكتب" : "Desktop Apps"}
                    </span>
                    <div className="flex-1 h-px bg-slate-200 dark:bg-white/10"></div>
                  </div>
                  <Link 
                    to="/tools?type=desktop"
                    className="text-sm text-blue-500 hover:underline flex items-center gap-1"
                  >
                    {language === 'ar' ? 'عرض الكل' : 'View All'}
                    <ArrowIcon className="w-3 h-3" />
                  </Link>
                </div>
              </div>
              <ToolsMarquee tools={desktopTools} direction={-1} />
            </div>
          )}

          {/* Web Subsection */}
          {webTools.length > 0 && (
            <div>
              <div className="max-w-7xl mx-auto px-6 mb-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm font-semibold rounded-lg">
                      🌐 {language === 'ar' ? "تطبيقات الويب" : "Web Apps"}
                    </span>
                    <div className="flex-1 h-px bg-slate-200 dark:bg-white/10"></div>
                  </div>
                  <Link 
                    to="/tools?type=web"
                    className="text-sm text-emerald-500 hover:underline flex items-center gap-1"
                  >
                    {language === 'ar' ? 'عرض الكل' : 'View All'}
                    <ArrowIcon className="w-3 h-3" />
                  </Link>
                </div>
              </div>
              <ToolsMarquee tools={webTools} direction={-1} />
            </div>
          )}
        </section>
    );
};

