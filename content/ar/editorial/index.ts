import type { EditorialContent } from '../../shared/editorialTypes';
import { kashxCaseStudy } from './kashx';
import { sajdaCaseStudy } from './sajda';
import { industries } from './industries';
import { insights } from './insights';

export { kashxCaseStudy } from './kashx';
export { sajdaCaseStudy } from './sajda';
export { industries } from './industries';
export { insights } from './insights';

/**
 * Editorial / trust-page copy (case studies, industries, insights, FAQ, author).
 * Product facts come from content/ar/projects.ts; no client names, revenue, awards,
 * or street addresses are stated anywhere in this file.
 */
export const editorial: EditorialContent = {
  labels: {
    home: 'الرئيسية',
    caseStudies: 'دراسات الحالة',
    industries: 'القطاعات',
    insights: 'المقالات والأفكار',
    faq: 'الأسئلة الشائعة',
    author: 'الكاتب والمهندس',
    readMore: 'قراءة المزيد',
    viewProduct: 'زيارة موقع المنتج',
    relatedServices: 'خدمات ذات صلة',
    relatedCaseStudies: 'دراسات حالة ذات صلة',
    relatedIndustries: 'قطاعات ذات صلة',
    published: 'تاريخ النشر',
    contactCta: 'تحدث مع الفريق',
    contactCtaText: 'هل تفكر في بناء نظام مشابه؟ أخبرنا باحتياجك وسنرد بالخطوات المناسبة.',
    github: 'حساب GitHub',
    email: 'البريد الإلكتروني',
  },
  caseStudies: {
    title: 'دراسات الحالة',
    intro:
      'منتجان من أعمال شركة الصقر للبرمجيات، نعرضهما بالحقائق التي ننشرها اليوم: ما هو كل منتج، وكيف يتكوّن، وما الذي نركّز عليه عند بناء أنظمة مشابهة.',
    items: [kashxCaseStudy, sajdaCaseStudy],
  },
  industries,
  insights,
  faq: {
    title: 'الأسئلة الشائعة',
    intro: 'إجابات مباشرة ومحددة حول طريقة عمل شركة الصقر، وما نبنيه، وكيفية التواصل معنا.',
    items: [
      {
        q: 'أين يقع مقر شركة الصقر؟',
        a: 'الصقر استوديو هندسة وتطوير برمجيات مقره مصر، ويقدّم خدماته للعملاء في مصر ومختلف دول العالم.',
      },
      {
        q: 'ما نوع البرمجيات التي تطوّرها الصقر؟',
        a: 'أنظمة ويب مؤسسية، منصات تقنية مالية (FinTech)، تطبيقات موبايل، حلول ذكاء اصطناعي، بنية تحتية سحابية، استشارات أمان، وتصميم تجربة المستخدم (UI/UX)، إلى جانب أدوات برمجية مفتوحة المصدر للمطورين.',
      },
      {
        q: 'هل لديكم منتجات خاصة بالشركة؟',
        a: 'نعم. منصة Kashx للتحويلات والمحافظ الرقمية، وبرنامج سجدة POS لإدارة المحلات ونقاط البيع السحابية. يمكنك الاطلاع على تفاصيلهما في قسم دراسات الحالة.',
      },
      {
        q: 'هل الأدوات المجانية في الموقع مفتوحة المصدر بالفعل؟',
        a: 'نعم، الأدوات المنشورة في قسم "الأدوات" مجانية وتهتم بخصوصية البيانات، مع توفير روابط الكود المصدري على GitHub للأدوات التي تتيح ذلك في صفحاتها.',
      },
      {
        q: 'هل الموقع متاح بالكامل باللغتين العربية والإنجليزية؟',
        a: 'نعم. كل صفحة في الموقع لها نسخة عربية متطابقة تحت المسار /ar، ويمكنك التبديل بين اللغتين من أعلى الصفحة.',
      },
      {
        q: 'كيف يمكنني التواصل مع فريق العمل؟',
        a: 'عبر نموذج التواصل في صفحة الاتصال، أو عبر مراسلتنا مباشرة على واتساب من الموقع، أو عبر البريد الإلكتروني khalid@elsakr.company.',
      },
    ],
  },
  author: {
    id: 'khalid-elsakr',
    name: 'خالد الصقر',
    role: 'المؤسس ورئيس المعماريين التقنيين',
    summary: 'خالد الصقر هو مؤسس ورئيس المعماريين التقنيين في شركة الصقر لهندسة وتطوير البرمجيات في مصر.',
    github: 'https://github.com/khalidsakrjoker',
    email: 'khalid@elsakr.company',
    sections: [
      {
        heading: 'الدور والمسؤوليات',
        paragraphs: [
          'أسس خالد شركة الصقر ويقود المعمارية التقنية للمشاريع. يبني الاستوديو أنظمة مؤسسية، منصات تقنية مالية، تطبيقات موبايل، حلول ذكاء اصطناعي، وبنية سحابية للعملاء، كما يطوّر ويدير منتجات الشركة مثل Kashx وسجدة POS.',
        ],
      },
      {
        heading: 'المصادر المفتوحة',
        paragraphs: [
          'تنشر شركة الصقر أدوات برمجية مجانية والكود المصدري لهذا الموقع على GitHub تحت حساب khalidsakrjoker، ليتمكن المطورون والعملاء من فحص جودة الكود بأنفسهم.',
        ],
      },
      {
        heading: 'التواصل',
        paragraphs: ['لاستفسارات المشاريع الجديدة، يمكنك استخدام صفحة التواصل أو المراسلة على khalid@elsakr.company.'],
      },
    ],
  },
};
