import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../../lib/useContent';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import type { Tool } from '../../lib/types';

function ToolMark({ tool }: { tool: Tool }) {
  return (
    <img
      src={tool.logo}
      alt=""
      className="w-12 h-12 object-contain"
      loading="lazy"
    />
  );
}

export const FreeTools: React.FC = () => {
  const { content, language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;
  const tools = [...(content.freeToolsDesktop ?? []), ...(content.freeToolsWeb ?? [])];

  return (
    <section id="free-tools" className="py-24 px-6 bg-surface border-t border-app">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
              {language === 'ar' ? 'أدوات مجانية مفتوحة المصدر' : 'Free Open Source Tools'}
            </h2>
            <p className="text-ink-muted">
              {language === 'ar'
                ? 'كل أداة بهويتها البصرية الخاصة.'
                : 'Each tool carries its own visual identity.'}
            </p>
          </div>
          <Link to="/tools">
            <Button variant="outline">
              {language === 'ar' ? 'تصفح الكل' : 'Browse all'}
              <ArrowIcon className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              to={`/tools/${tool.id}`}
              className="group p-5 bg-app border border-app rounded-lg hover-lift hover:border-[var(--color-accent)] transition-colors"
            >
              <ToolMark tool={tool} />
              <h3 className="font-semibold text-ink mt-4 mb-1 group-hover:text-accent transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-ink-muted line-clamp-2">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
