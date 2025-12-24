import React from 'react';
import { Layout } from '../components/ui/Layout';
import { Shield, Lock, Eye, Database, Mail, Globe, Clock, FileText } from 'lucide-react';
import { useContent } from '../lib/useContent';
import { Link } from 'react-router-dom';

export default function Legal() {
  const { language } = useContent();

  const sections = language === 'ar' ? [
    {
      icon: Shield,
      title: 'سياسة الخصوصية',
      description: 'إزاي بنحمي بياناتك ونحافظ على خصوصيتك',
      path: '/legal/privacy'
    },
    {
      icon: FileText,
      title: 'الشروط والأحكام',
      description: 'القواعد والاتفاقيات اللي بتحكم استخدام خدماتنا',
      path: '/legal/terms'
    }
  ] : [
    {
      icon: Shield,
      title: 'Privacy Policy',
      description: 'How we protect your data and maintain your privacy',
      path: '/legal/privacy'
    },
    {
      icon: FileText,
      title: 'Terms of Service',
      description: 'Rules and agreements governing the use of our services',
      path: '/legal/terms'
    }
  ];

  return (
    <Layout>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            {language === 'ar' ? 'المستندات القانونية' : 'Legal Documents'}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'كل المعلومات القانونية اللي محتاج تعرفها عن خدماتنا وإزاي بنتعامل مع بياناتك.'
              : 'All the legal information you need to know about our services and how we handle your data.'}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <Link 
                key={section.path}
                to={section.path}
                className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <section.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {section.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
