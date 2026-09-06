import React from 'react';
import { Quote } from 'lucide-react';
import { useContent } from '../../lib/useContent';

/** Calm client voices — Falcon alternative to the old glass testimonial stack. */
export function ClientVoices() {
  const { content, language } = useContent();
  const voices = content.testimonials.slice(0, 3);

  if (voices.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-app border-t border-app" data-testid="client-voices">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
            {language === 'ar' ? 'من آراء العملاء' : 'From client conversations'}
          </h2>
          <p className="text-ink-muted">
            {language === 'ar'
              ? 'عيّنة من الحوارات — مش كل التعليقات.'
              : 'A sample of conversations — not every review we have.'}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {voices.map((t) => (
            <figure
              key={`${t.author}-${t.role}`}
              className="flex flex-col justify-between p-6 bg-surface border border-app rounded-lg hover-lift"
            >
              <blockquote className="mb-6">
                <Quote className="w-7 h-7 text-accent mb-4 opacity-70" aria-hidden />
                <p className="text-ink leading-relaxed">“{t.quote}”</p>
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-app">
                <img
                  src={t.image}
                  alt=""
                  className="w-11 h-11 rounded-full object-cover border border-app"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-ink text-sm">{t.author}</p>
                  <p className="text-accent text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
