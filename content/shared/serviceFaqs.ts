import type { FaqItem } from '../../lib/seo/schema';
import type { Locale } from '../../lib/seo/localePath';

/** Answer-first FAQs shown on each service landing page (EN + AR). */
export const SERVICE_FAQS: Record<string, Record<Locale, FaqItem[]>> = {
  web: {
    en: [
      {
        q: 'What kind of web systems does Elsakr build?',
        a: 'React and Next.js web apps and dashboards with TypeScript, SEO-ready structure, and integrations for SaaS, internal tools, and customer portals.',
      },
      {
        q: 'Do you handle SEO for marketing sites and product apps?',
        a: 'Yes. We plan routing, metadata, structured data, and performance so pages are crawlable—not only styled.',
      },
    ],
    ar: [
      {
        q: 'ما نوع أنظمة الويب التي تبنيها الصقر؟',
        a: 'تطبيقات وواجهات React و Next.js بـ TypeScript، مع هيكل جاهز للـ SEO وتكاملات لـ SaaS والأدوات الداخلية وبوابات العملاء.',
      },
      {
        q: 'هل تهتمون بتحسين محركات البحث؟',
        a: 'نعم. نخطط للمسارات والميتا والبيانات المنظمة والأداء حتى تكون الصفحات قابلة للفهرسة وليس للشكل فقط.',
      },
    ],
  },
  mobile: {
    en: [
      {
        q: 'Which mobile stacks do you use?',
        a: 'Flutter and React Native for cross-platform apps, with native modules when hardware access or store requirements demand it.',
      },
      {
        q: 'Can one codebase cover iOS and Android?',
        a: 'Yes for most product scopes. We still validate store policies, push notifications, and offline sync on each platform before release.',
      },
    ],
    ar: [
      {
        q: 'أي تقنيات موبايل تستخدمونها؟',
        a: 'Flutter و React Native للتطبيقات متعددة المنصات، مع وحدات native عند الحاجة للعتاد أو متطلبات المتاجر.',
      },
      {
        q: 'هل يكفي كود واحد لـ iOS و Android؟',
        a: 'نعم في أغلب المشاريع. ومع ذلك نتحقق من سياسات المتاجر والإشعارات والمزامنة دون اتصال على كل منصة قبل الإطلاق.',
      },
    ],
  },
  ai: {
    en: [
      {
        q: 'What AI work do you take on?',
        a: 'Practical RAG assistants, document search, and workflow automation wired into existing products—not demos that never leave a notebook.',
      },
      {
        q: 'How do you keep company data safer in AI features?',
        a: 'We scope retrieval to approved sources, keep secrets out of prompts, and log model usage so teams can review what left the system.',
      },
    ],
    ar: [
      {
        q: 'ما نوع أعمال الذكاء الاصطناعي التي تنفذونها؟',
        a: 'مساعدات RAG عملية وبحث في المستندات وأتمتة سير العمل داخل المنتجات الحالية—وليس تجارب تبقى في دفتر Jupyter.',
      },
      {
        q: 'كيف تحمون بيانات الشركة في ميزات الذكاء الاصطناعي؟',
        a: 'نحدد مصادر الاسترجاع المعتمدة، ونبقي الأسرار خارج الـ prompts، ونسجل استخدام النماذج لمراجعة ما يخرج من النظام.',
      },
    ],
  },
  security: {
    en: [
      {
        q: 'Is security a separate engagement or part of delivery?',
        a: 'Both. We can harden systems during build (auth, secrets, least privilege) and run focused reviews when you need an independent pass.',
      },
      {
        q: 'Do you invent compliance certifications on the site?',
        a: 'No. We describe engineering practices we actually apply; we do not list awards or certifications we have not earned.',
      },
    ],
    ar: [
      {
        q: 'هل الأمن مشروع منفصل أم جزء من التسليم؟',
        a: 'الاثنان. يمكننا تحصين الأنظمة أثناء البناء (مصادقة، أسرار، أقل صلاحيات) وإجراء مراجعات مركّزة عند الحاجة لمرور مستقل.',
      },
      {
        q: 'هل تنشرون شهادات امتثال غير حقيقية؟',
        a: 'لا. نصف ممارسات هندسية نطبّقها فعلياً، ولا نذكر جوائز أو شهادات لم نحصل عليها.',
      },
    ],
  },
  cloud: {
    en: [
      {
        q: 'What cloud work is in scope?',
        a: 'AWS-oriented infrastructure, containers, CI/CD, and observability so releases are repeatable and failures are visible.',
      },
      {
        q: 'Do you migrate and operate, or only advise?',
        a: 'We implement pipelines and environments, then hand over documentation and access so your team owns the running system.',
      },
    ],
    ar: [
      {
        q: 'ما نطاق أعمال السحابة؟',
        a: 'بنية تحتية موجّهة لـ AWS، وحاويات، وCI/CD، ومراقبة حتى تكون الإصدارات قابلة للتكرار والأعطال مرئية.',
      },
      {
        q: 'هل تنفذون الهجرة والتشغيل أم تقدمون استشارة فقط؟',
        a: 'ننفّذ خطوط النشر والبيئات ثم نسلّم التوثيق والصلاحيات حتى يملك فريقكم النظام التشغيلي.',
      },
    ],
  },
  design: {
    en: [
      {
        q: 'What does UI/UX cover in an Elsakr engagement?',
        a: 'Product flows, interface design, and design systems that developers can implement without guessing spacing or states.',
      },
      {
        q: 'Do you design without engineering?',
        a: 'We can, but we prefer design that ships with the build so prototypes match production constraints early.',
      },
    ],
    ar: [
      {
        q: 'ماذا يغطي تصميم الواجهات في مشاريع الصقر؟',
        a: 'تدفقات المنتج وتصميم الواجهة ونظام تصميم يستطيع المطوّرون تنفيذه دون تخمين المسافات أو الحالات.',
      },
      {
        q: 'هل تقدّمون تصميماً بلا هندسة؟',
        a: 'يمكن ذلك، لكننا نفضّل تصميماً يخرج مع البناء حتى تطابق النماذج قيود الإنتاج مبكراً.',
      },
    ],
  },
};

export function getServiceFaqs(serviceId: string, language: Locale): FaqItem[] {
  return SERVICE_FAQS[serviceId]?.[language] ?? [];
}
