import React from 'react';
import { Layout } from '../components/ui/Layout';
import { Shield, Lock, Eye, Database, Mail, Globe, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { useContent } from '../lib/useContent';
import { Link } from 'react-router-dom';

export default function Privacy() {
  const { language } = useContent();
  const ArrowIcon = language === 'ar' ? ArrowRight : ArrowLeft;

  const lastUpdated = '2024-12-17';

  const sectionsAr = [
    {
      icon: Database,
      title: 'البيانات اللي بنجمعها',
      content: `بنجمع بيانات أساسية لتقديم خدماتنا بشكل أفضل:
• معلومات التواصل: الاسم، الإيميل، رقم التليفون
• بيانات المشروع: تفاصيل اللي محتاجه في مشروعك
• بيانات تقنية: نوع المتصفح (Browser)، الـ IP، نوع الجهاز
• ملفات الـ Cookies: لتحسين تجربتك على الموقع`
    },
    {
      icon: Eye,
      title: 'إزاي بنستخدم بياناتك',
      content: `بنستخدم بياناتك عشان:
• نتواصل معاك بخصوص مشروعك أو استفساراتك
• نحسن خدماتنا ونطورها
• نبعتلك تحديثات مهمة (لو وافقت)
• نحلل أداء الموقع ونحسن تجربة المستخدم (UX)`
    },
    {
      icon: Lock,
      title: 'حماية بياناتك',
      content: `بياناتك في أمان معانا:
• بنستخدم تشفير SSL/TLS لحماية كل الاتصالات
• بنخزن البيانات على سيرفرات آمنة
• الوصول للبيانات محدود للفريق المختص بس
• بنعمل مراجعات أمنية دورية`
    },
    {
      icon: Globe,
      title: 'مشاركة البيانات',
      content: `مش بنبيع أو نأجر بياناتك لأي حد. ممكن نشارك بيانات مع:
• مزودي خدمات موثوقين (زي الـ Hosting و Analytics)
• لما يكون مطلوب قانونياً
• بموافقتك الصريحة`
    },
    {
      icon: Clock,
      title: 'حقوقك',
      content: `عندك حقوق كاملة على بياناتك:
• الوصول: تقدر تطلب نسخة من بياناتك
• التصحيح: تقدر تطلب تعديل أي بيانات غلط
• الحذف: تقدر تطلب مسح بياناتك
• الاعتراض: تقدر ترفض استخدام بياناتك للتسويق`
    }
  ];

  const sectionsEn = [
    {
      icon: Database,
      title: 'Data We Collect',
      content: `We collect essential data to provide better services:
• Contact information: Name, email, phone number
• Project data: Details about your project requirements
• Technical data: Browser type, IP address, device type
• Cookies: To improve your experience on our website`
    },
    {
      icon: Eye,
      title: 'How We Use Your Data',
      content: `We use your data to:
• Communicate with you about your project or inquiries
• Improve and develop our services
• Send you important updates (with your consent)
• Analyze website performance and improve user experience`
    },
    {
      icon: Lock,
      title: 'Data Protection',
      content: `Your data is safe with us:
• We use SSL/TLS encryption for all communications
• Data is stored on secure servers
• Access is limited to authorized team members only
• We conduct regular security audits`
    },
    {
      icon: Globe,
      title: 'Data Sharing',
      content: `We don't sell or rent your data to anyone. We may share data with:
• Trusted service providers (hosting, analytics)
• When legally required
• With your explicit consent`
    },
    {
      icon: Clock,
      title: 'Your Rights',
      content: `You have full rights over your data:
• Access: You can request a copy of your data
• Correction: You can request to correct any inaccurate data
• Deletion: You can request to delete your data
• Objection: You can opt-out of marketing communications`
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
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {language === 'ar' ? `آخر تحديث: ${lastUpdated}` : `Last updated: ${lastUpdated}`}
              </p>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/20 rounded-xl p-6 mb-10">
            <p className="text-slate-700 dark:text-slate-300">
              {language === 'ar' 
                ? 'في الصقر (Elsakr)، خصوصيتك مهمة جداً لينا. السياسة دي بتوضح إزاي بنجمع ونستخدم ونحمي بياناتك الشخصية.'
                : 'At Elsakr, your privacy is extremely important to us. This policy explains how we collect, use, and protect your personal data.'}
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
                ? 'لو عندك أي استفسار عن سياسة الخصوصية، تواصل معانا.'
                : 'If you have any questions about our privacy policy, feel free to contact us.'}
            </p>
            <a 
              href="mailto:privacy@elsakr.com"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              privacy@elsakr.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
