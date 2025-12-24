import React from 'react';
import { Layout } from '../components/ui/Layout';
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import { useContent } from '../lib/useContent';
import { Link } from 'react-router-dom';

export default function Terms() {
  const { language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowRight : ArrowLeft;

  const lastUpdated = '2024-12-17';

  const sectionsAr = [
    {
      icon: CheckCircle,
      title: 'قبول الشروط',
      content: `باستخدامك لموقعنا أو خدماتنا، إنت بتوافق على الشروط دي:
• الشروط دي عقد قانوني بينك وبين الصقر (Elsakr)
• لو مش موافق على أي شرط، متستخدمش خدماتنا
• ممكن نحدث الشروط دي، وهنبلغك بأي تغييرات مهمة`
    },
    {
      icon: FileText,
      title: 'خدماتنا',
      content: `الصقر (Elsakr) بتقدم خدمات تطوير برمجيات شاملة:
• تطوير مواقع وتطبيقات (Web & Mobile Apps)
• أنظمة متكاملة (Enterprise Solutions)
• استشارات تقنية (Technical Consulting)
• صيانة ودعم فني (Maintenance & Support)

كل مشروع بيتم الاتفاق على تفاصيله في عقد منفصل.`
    },
    {
      icon: Scale,
      title: 'حقوق الملكية',
      content: `بخصوص الملكية الفكرية:
• الكود والتصميمات: ملكيتها بتنتقل ليك بعد السداد الكامل
• أدواتنا الداخلية: بتفضل ملك الصقر (Elsakr)
• محتوى الموقع: محمي بحقوق الطبع والنشر
• اللوجوهات والعلامات التجارية: ملك أصحابها`
    },
    {
      icon: AlertTriangle,
      title: 'المسؤولية',
      content: `بنبذل قصارى جهدنا لتقديم أفضل خدمة، لكن:
• الخدمات بتتقدم "كما هي" (as is)
• مش مسؤولين عن أي خسائر غير مباشرة
• مسؤوليتنا محدودة بقيمة المبالغ المدفوعة
• العميل مسؤول عن صحة البيانات اللي بيقدمها`
    },
    {
      icon: XCircle,
      title: 'إنهاء الخدمة',
      content: `ممكن نوقف الخدمة في الحالات دي:
• عدم الالتزام بالشروط
• عدم السداد في المواعيد المتفق عليها
• استخدام خدماتنا في أنشطة غير قانونية
• بناءً على طلب العميل مع مراعاة شروط العقد`
    }
  ];

  const sectionsEn = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: `By using our website or services, you agree to these terms:
• These terms constitute a legal agreement between you and Elsakr
• If you don't agree with any term, please don't use our services
• We may update these terms and will notify you of significant changes`
    },
    {
      icon: FileText,
      title: 'Our Services',
      content: `Elsakr provides comprehensive software development services:
• Web & Mobile App Development
• Enterprise Solutions
• Technical Consulting
• Maintenance & Support

Each project is governed by a separate detailed agreement.`
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: `Regarding intellectual property rights:
• Code and designs: Ownership transfers to you after full payment
• Our internal tools: Remain the property of Elsakr
• Website content: Protected by copyright
• Logos and trademarks: Belong to their respective owners`
    },
    {
      icon: AlertTriangle,
      title: 'Liability',
      content: `We strive to provide the best service, however:
• Services are provided "as is"
• We are not liable for indirect losses
• Our liability is limited to amounts paid
• Clients are responsible for the accuracy of data they provide`
    },
    {
      icon: XCircle,
      title: 'Termination',
      content: `We may terminate services in the following cases:
• Non-compliance with terms
• Failure to pay on agreed dates
• Using our services for illegal activities
• Upon client request, subject to contract terms`
    }
  ];

  const sections = language === 'ar' ? sectionsAr : sectionsEn;

  return (
    <Layout>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link 
            to="/legal" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowIcon className="w-4 h-4" />
            {language === 'ar' ? 'رجوع للمستندات القانونية' : 'Back to Legal Documents'}
          </Link>

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                {language === 'ar' ? 'الشروط والأحكام' : 'Terms of Service'}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {language === 'ar' ? `آخر تحديث: ${lastUpdated}` : `Last updated: ${lastUpdated}`}
              </p>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-500/20 rounded-xl p-6 mb-10">
            <p className="text-slate-700 dark:text-slate-300">
              {language === 'ar' 
                ? 'الشروط دي بتحكم العلاقة بينك وبين الصقر (Elsakr). اقراها كويس قبل ما تستخدم خدماتنا.'
                : 'These terms govern your relationship with Elsakr. Please read them carefully before using our services.'}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-10 bg-slate-100 dark:bg-slate-900 rounded-xl p-6 text-center">
            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {language === 'ar' ? 'عندك سؤال؟' : 'Have a question?'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {language === 'ar' 
                ? 'لو عندك أي استفسار عن الشروط والأحكام، تواصل معانا.'
                : 'If you have any questions about our terms of service, feel free to contact us.'}
            </p>
            <a 
              href="mailto:legal@elsakr.com"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              legal@elsakr.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
