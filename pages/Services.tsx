import React from 'react';
import { Layout } from '../components/ui/Layout';
import { useContent } from '../lib/useContent';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Services() {
  const { content, language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <Layout>
      <section className="py-20 px-6 bg-app">
        <div className="max-w-4xl mx-auto text-center mb-20 pt-8">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-ink">
            {content.services.title}
          </h1>
          <p className="text-lg text-ink-muted">{content.services.subtitle}</p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-6">
          {content.services.items.map((service) => (
            <div
              key={service.id}
              className="grid md:grid-cols-12 border border-app rounded-lg overflow-hidden bg-surface hover-lift"
            >
              <div className="md:col-span-4 bg-surface-muted p-8 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-app">
                <service.icon className="w-14 h-14 text-accent mb-6" />
                <h2 className="font-display text-2xl font-bold text-ink">{service.title}</h2>
              </div>
              <div className="md:col-span-8 p-8 flex flex-col justify-center">
                <p className="text-ink-muted text-lg mb-8 leading-relaxed">{service.description}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-ink-muted">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-medium"
                >
                  {language === 'ar' ? 'استكشف التفاصيل' : 'Explore Details'}
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-surface-muted border-y border-app">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-16 text-center text-ink">
            {language === 'ar' ? 'نماذج التعاون' : 'Engagement Models'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.services.models.map((model) => (
              <div
                key={model.title}
                className="flex flex-col text-center p-8 bg-surface border border-app rounded-lg"
              >
                <div className="mx-auto w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mb-6">
                  <model.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-2">{model.title}</h3>
                <p className="text-ink-muted text-sm mb-6 flex-grow">{model.desc}</p>
                <div className="py-3 bg-app border border-app rounded-md text-ink text-sm font-semibold">
                  {model.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-app">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-16 text-center text-ink">
            {content.process.title}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {content.process.steps.map((step, idx) => (
              <div key={step.title}>
                <div className="w-8 h-8 bg-accent text-white flex items-center justify-center text-sm font-bold mb-4 rounded-full">
                  {idx + 1}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-ink">{step.title}</h3>
                <p className="text-sm text-ink-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-surface border-t border-app">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8 text-ink">
            {language === 'ar' ? 'جاهز للتحول؟' : 'Ready to transform?'}
          </h2>
          <Link to="/contact">
            <Button variant="primary" className="!text-lg !px-10 !py-4">
              {language === 'ar' ? 'ابدأ الآن' : 'Get Started Now'}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
