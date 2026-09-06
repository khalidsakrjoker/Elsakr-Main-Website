import React from 'react';
import { Layout } from '../components/ui/Layout';
import { Shield, FileText } from 'lucide-react';
import { useContent } from '../lib/useContent';
import { Link } from 'react-router-dom';

export default function Legal() {
  const { language } = useContent();

  const sections =
    language === 'ar'
      ? [
          {
            icon: Shield,
            title: 'سياسة الخصوصية',
            description: 'إزاي بنحمي بياناتك ونحافظ على خصوصيتك',
            path: '/legal/privacy',
          },
          {
            icon: FileText,
            title: 'الشروط والأحكام',
            description: 'القواعد والاتفاقيات اللي بتحكم استخدام خدماتنا',
            path: '/legal/terms',
          },
        ]
      : [
          {
            icon: Shield,
            title: 'Privacy Policy',
            description: 'How we protect your data and maintain your privacy',
            path: '/legal/privacy',
          },
          {
            icon: FileText,
            title: 'Terms of Service',
            description: 'Rules and agreements governing the use of our services',
            path: '/legal/terms',
          },
        ];

  return (
    <Layout>
      <section className="py-20 px-6 bg-app">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 text-center">
            {language === 'ar' ? 'المستندات القانونية' : 'Legal Documents'}
          </h1>
          <p className="text-ink-muted text-center mb-12 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'كل المعلومات القانونية اللي محتاج تعرفها عن خدماتنا وإزاي بنتعامل مع بياناتك.'
              : 'All the legal information you need to know about our services and how we handle your data.'}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                className="group bg-surface border border-app rounded-lg p-8 hover-lift hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="w-14 h-14 bg-accent-soft rounded-md flex items-center justify-center mb-6">
                  <section.icon className="w-7 h-7 text-accent" />
                </div>
                <h2 className="font-display text-xl font-bold text-ink mb-3 group-hover:text-accent transition-colors">
                  {section.title}
                </h2>
                <p className="text-ink-muted">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
