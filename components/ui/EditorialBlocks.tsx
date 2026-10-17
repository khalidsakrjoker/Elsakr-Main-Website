import React from 'react';
import { LocaleLink } from './LocaleLink';
import { Button } from './Button';
import type { EditorialSection } from '../../content/shared/editorialTypes';

export interface CrumbLink {
  name: string;
  /** English path; LocaleLink adds the /ar prefix for Arabic visitors. */
  path: string;
}

export const Breadcrumbs: React.FC<{ items: CrumbLink[]; label?: string }> = ({
  items,
  label = 'Breadcrumb',
}) => (
  <nav aria-label={label} className="mb-8 text-sm text-ink-muted">
    <ol className="flex flex-wrap items-center gap-2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={item.path} className="flex items-center gap-2">
            {isLast ? (
              <span aria-current="page" className="text-ink">
                {item.name}
              </span>
            ) : (
              <>
                <LocaleLink to={item.path} className="hover:text-accent">
                  {item.name}
                </LocaleLink>
                <span aria-hidden="true">/</span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export const PageHeader: React.FC<{
  eyebrow?: string;
  title: string;
  summary?: string;
}> = ({ eyebrow, title, summary }) => (
  <header className="mb-12 max-w-3xl">
    {eyebrow && (
      <p className="font-display text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
        {eyebrow}
      </p>
    )}
    <h1 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
      {title}
    </h1>
    {summary && <p className="text-xl text-ink-muted leading-relaxed">{summary}</p>}
  </header>
);

export const EditorialSections: React.FC<{ sections: EditorialSection[] }> = ({ sections }) => (
  <div className="space-y-12 max-w-3xl">
    {sections.map((section) => (
      <section key={section.heading}>
        <h2 className="font-display text-2xl font-bold text-ink mb-4">{section.heading}</h2>
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-ink-muted leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
        {section.bullets && (
          <ul className="list-disc ps-6 space-y-2 text-ink">
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </section>
    ))}
  </div>
);

export const RelatedLinks: React.FC<{ title: string; links: CrumbLink[] }> = ({ title, links }) =>
  links.length === 0 ? null : (
    <section className="mt-16 max-w-3xl">
      <h2 className="font-display text-xl font-bold text-ink mb-4">{title}</h2>
      <ul className="flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.path}>
            <LocaleLink
              to={link.path}
              className="inline-block px-4 py-2 bg-surface border border-app rounded-md text-sm text-ink hover:text-accent"
            >
              {link.name}
            </LocaleLink>
          </li>
        ))}
      </ul>
    </section>
  );

export const CtaBand: React.FC<{ label: string; text: string }> = ({ label, text }) => (
  <section className="mt-16 max-w-3xl p-8 bg-surface border border-app rounded-lg">
    <p className="text-ink-muted mb-6">{text}</p>
    <LocaleLink to="/contact">
      <Button variant="primary">{label}</Button>
    </LocaleLink>
  </section>
);

export const CardGrid: React.FC<{
  items: { id: string; title: string; summary: string; path: string; meta?: string }[];
  actionLabel: string;
}> = ({ items, actionLabel }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {items.map((item) => (
      <article key={item.id} className="p-6 bg-surface border border-app rounded-lg hover-lift">
        {item.meta && (
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            {item.meta}
          </p>
        )}
        <h2 className="font-display text-2xl font-bold text-ink mb-3">
          <LocaleLink to={item.path} className="hover:text-accent">
            {item.title}
          </LocaleLink>
        </h2>
        <p className="text-ink-muted leading-relaxed mb-4">{item.summary}</p>
        <LocaleLink to={item.path} className="text-sm font-semibold text-accent">
          {actionLabel}
        </LocaleLink>
      </article>
    ))}
  </div>
);
