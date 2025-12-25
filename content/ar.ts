
import { Code, Cpu, Globe, Rocket, Shield, Zap, CheckCircle, Smartphone, Server, Database, Layers, Eye, Lock, Users, Briefcase, Clock, Award, PenTool, BarChart, Cloud, Target, Search, Wifi, Layout, Box, Fingerprint, BarChart3, Terminal, Facebook } from 'lucide-react';

export const content = {
  brand: {
    name: "الصقر",
    tagline: "كود بيشيل بيزنس",
    description: "إحنا مش بس بنكتب كود، إحنا بنبني بنية تحتية بتشيل شركات. تخصصنا نطلع بـ Systems معقدة، سريعة، وما بتقعش.",
    email: "khalid@elsakr.company"
  },
  nav: {
    home: "الداشبورد",
    about: "مين إحنا؟",
    services: "بنعمل إيه؟",
    contact: "يلا نبدأ"
  },
  hero: {
    title: "هندسة برمجيات، مش مجرد موقع.",
    subtitle: "إحنا بنلعب في حتة الـ High Availability و الـ Scalability. شغلتنا نكتب كود Clean، Efficient، و Secure يشيل البيزنس بتاعك مهما كبر. من الآخر، سيب الـ Tech لينا وركز أنت في البيزنس.",
    cta: "اعمل Cost Estimation",
    learnMore: "شوف الـ Stack بتاعنا"
  },
  stats: [
    { label: "Production Deployments", value: "+150" },
    { label: "Uptime (مفيش وقت للوقوع)", value: "99.99%" },
    { label: "Security score", value: "A+" },
    { label: "بيزنس بيعتمد علينا", value: "+40" }
  ],
  techStack: [
    { name: "React", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Code },
    { name: "AWS", icon:  Cloud},
    { name: "TensorFlow", icon: Cpu },
    { name: "Flutter", icon: Smartphone },
    { name: "PostgreSQL", icon: Database },
    { name: "Docker", icon: Shield },
    { name: "Rust", icon: Zap },
    { name: "GraphQL", icon: Globe },
    { name: "Kubernetes", icon: Layers },
    { name: "Figma", icon: PenTool },
  ],
  clients: [
    { 
      name: "Stimyouli", 
      logo: "/assets/parteners/stimyouli_light.webp", 
      logoDark: "/assets/parteners/stimyouli_dark.webp",
      logoLight: "/assets/parteners/stimyouli_light.webp",
      link: "https://stimyouli.com" 
    },
    { name: "Vexel Point", logo: "/assets/parteners/vexel-point.png", link: "https://www.vexel-point.com/" },
    { name: "1100 Website", logo: "/assets/parteners/1100.webp", link: "https://1100.website" },
    { 
      name: "iChem", 
      logo: "/assets/parteners/ichem-light.webp",
      logoDark: "/assets/parteners/ichem-dark.webp",
      logoLight: "/assets/parteners/ichem-light.webp",
      link: "https://ichemeg.com/" 
    },
    { 
      name: "STC Egypt", 
      logo: "/assets/parteners/stc-egypt.webp",
      link: "https://stcegypt.net/" 
    },
  ],
  partnersTitle: "شركاء التقنية",
  services: {
    title: "لعبتنا (الخدمات)",
    subtitle: "بنعمل كل حاجة ليها علاقة بالكود، من أول الـ Architecture لحد الـ Deployment والـ Maintenance.",
    items: [
      {
        id: 'web',
        title: "Web Architecture",
        description: "مواقع SPA و PWA سريعة، بتفتح في لحظة. بنهتم بالـ SEO والـ Performance عشان جوجل يحبك واليوزر ما يزهقش.",
        icon: Globe,
        features: ["Micro-frontends", "SSR & ISR (Next.js)", "SEO Friendly", "Real-time Sockets"],
        details: {
          tagline: "Web Apps بمواصفات عالمية",
          longDescription: "شغلنا مش مجرد HTML و CSS. إحنا بنبني Web Apps كاملة بـ Next.js و React، بتهندل ترافيك عالي، وبتكون SEO Optimized عشان تظهر في الأول. الكود بتاعنا Typed بـ TypeScript عشان مفيش Bug تعدي.",
          benefits: [
            { title: "سرعة", desc: "الموقع بيحمل في أقل من ثانية.", icon: Zap },
            { title: "SEO", desc: "بنيتك التحتية جاهزة تتصدر نتايج البحث.", icon: Search },
            { title: "PWA", desc: "الموقع بيشتغل Offline زي الـ App بالظبط.", icon: Wifi }
          ],
          capabilities: [
            "SaaS Platforms",
            "High-Performance Dashboards",
            "Headless CMS",
            "Offline-First Apps",
            "Real-time Data Feeds"
          ],
          tech: ["React", "Next.js", "TypeScript", "Redux", "Node.js", "Redis"]
        }
      },
      {
        id: 'mobile',
        title: "Mobile Apps",
        description: "تطبيقات Native Performance بـ Flutter و React Native. كود واحد شغال iOS و Android بامتياز.",
        icon: Smartphone,
        features: ["Cross-Platform", "Native Modules", "Store Deployment", "Offline Sync"],
        details: {
          tagline: "تطبيقات موبايل بتطير",
          longDescription: "بنعمل تطبيقات موبايل بـ Flutter و React Native بتديك أداء الـ Native بالظبط، بس بتوفر وقت وفلوس لاننا بنكتب الكود مرة واحدة. بنربط مع الكاميرا، الـ GPS، وأي Hardware في الموبايل.",
          benefits: [
            { title: "توفير", desc: "كود واحد للآيفون والأندرويد.", icon: Layout },
            { title: "Hardware", desc: "تحكم كامل في إمكانيات الموبايل.", icon: Cpu },
            { title: "Publishing", desc: "بنرفعلك الابلكيشن على الستورز.", icon: Award }
          ],
          capabilities: [
            "Business Apps",
            "Biometric Auth",
            "Offline Data",
            "Location Tracking"
          ],
          tech: ["React Native", "Flutter", "Swift", "Kotlin", "Fastlane"]
        }
      },
      {
        id: 'ai',
        title: "AI Integration",
        description: "بندخل الذكاء الاصطناعي في البيزنس بتاعك. Chatbots ذكية، تحليل بيانات، وتوقعات للمستقبل.",
        icon: Cpu,
        features: ["RAG Systems", "Computer Vision", "Predictive Analytics", "NLP Automation"],
        details: {
          tagline: "مش مجرد ChatGPT Wrapper",
          longDescription: "بنعمل Solutions بجد. بنستخدم RAG عشان نربط الـ AI بالداتا بتاعتك، وبنعمل Models تتوقع المبيعات او تحلل الصور. بنحول الـ AI من تريند لأداة بتجيب فلوس.",
          benefits: [
            { title: "أتمتة", desc: "وفر وقت ومجهود الموظفين.", icon: Clock },
            { title: "تحليل", desc: "افهم بياناتك وخد قرارات صح.", icon: BarChart3 },
            { title: "تخصيص", desc: "تجربة مستخدم مفصلة عليه بالظبط.", icon: Users }
          ],
          capabilities: [
            "Custom Chatbots",
            "Document Parsing (OCR)",
            "Sentiment Analysis",
            "Fraud Detection",
            "Voice-to-Text"
          ],
          tech: ["Python", "TensorFlow", "LangChain", "OpenAI", "Pinecone"]
        }
      },
      {
        id: 'security',
        title: "Cyber Security",
        description: "تأمين شامل للسيستم بتاعك. اختبار اختراق، تشفير داتا، وحماية من الهجمات.",
        icon: Shield,
        features: ["Penetration Testing", "SOC2 Readiness", "Identity Mgmt", "End-to-End Encryption"],
        details: {
          tagline: "أمان مبيتهزرش فيه",
          longDescription: "الأمان عندنا مش رفاهية. بنعمل Testing للثغرات قبل ما نطلع Live. بنستخدم أحدث طرق التشفير والـ Authentication عشان الداتا بتاعتك وبتاعة عملاءك تكون في أمان تام.",
          benefits: [
            { title: "تحكم", desc: "أنت بس اللي عارف مين بيدخل على إيه.", icon: Fingerprint },
            { title: "Logs", desc: "كل حركة في السيستم متسجلة.", icon: CheckCircle },
            { title: "حماية", desc: "صد أي هجمات على الموقع.", icon: Eye }
          ],
          capabilities: [
            "Vulnerability Assessment",
            "GDPR Compliance",
            "OAuth2/OIDC",
            "DDoS Protection",
            "Secure Key Management"
          ],
          tech: ["OWASP ZAP", "Burp Suite", "Auth0", "SonarQube", "WAF"]
        }
      },
      {
        id: 'cloud',
        title: "Cloud Ops",
        description: "تظبيط سيرفرات و Infrastructure. بنشيل هم السيرفرات عنك ونخليها Scaling لوحدها.",
        icon: Cloud,
        features: ["Kubernetes", "Serverless", "Terraform", "Auto-scaling"],
        details: {
          tagline: "سيرفرات مابتقعش",
          longDescription: "بنستخدم Terraform و Docker عشان نبني Infrastructure قوية. السيستم بتاعك هيعمل Scale لوحده لما الترافيك يزيد، ولما يقل السيرفرات تقل عشان توفر فلوس.",
          benefits: [
            { title: "توفير", desc: "ادفع بس على قد استخدامك.", icon: BarChart },
            { title: "Uptime", desc: "الموقع شغال 24/7 مهما حصل.", icon: Database },
            { title: "سرعة", desc: "بيئة العمل جاهزة في دقايق.", icon: Globe }
          ],
          capabilities: [
            "Cloud Migration",
            "Container Orchestration",
            "Serverless APIs",
            "Database Sharding",
            "CDN Setup"
          ],
          tech: ["AWS", "Terraform", "Docker", "K8s", "Prometheus"]
        }
      },
      {
        id: 'design',
        title: "UI/UX Design",
        description: "تصميمات شيك وعملية. بنرسم اليوزر هيمشي ازاي جوه الموقع عشان يوصل للي هو عايزه.",
        icon: PenTool,
        features: ["Figma", "User Testing", "Design Systems", "Accessibility"],
        details: {
          tagline: "تصميم بيبيع",
          longDescription: "مش بنعمل ألوان وخلاص. بنعمل دراسة لليوزر بتاعك عشان نطلع تصميم يريحه ويخليه يستخدم الموقع أكتر. بنسلمك Design System كامل عشان تحافظ على شكل البراند بتاعك.",
          benefits: [
            { title: "تجربة", desc: "اليوزر مش هيتوه جوه الموقع.", icon: Users },
            { title: "سرعة", desc: "مكونات جاهزة بتسرع التطوير.", icon: Box },
            { title: "وصول", desc: "تصميم مناسب لكل الناس.", icon: Layout }
          ],
          capabilities: [
            "Information Architecture",
            "Wireframing",
            "Design Systems",
            "User Journey",
            "Micro-interactions"
          ],
          tech: ["Figma", "Storybook", "Adobe CC", "Maze"]
        }
      }
    ],
    models: [
      {
        title: "معاك في التيم",
        desc: "مهندس من عندنا يدخل معاك في التيم بتاعك يظبط الدنيا.",
        icon: Users,
        price: "Time & Material"
      },
      {
        title: "خد مفتاحك",
        desc: "سلمنا الفكرة واستلم المشروع كامل شغال.",
        icon: Briefcase,
        price: "Fixed Price"
      },
      {
        title: "دايما جنبك",
        desc: "صيانة ودعم فني عشان لو حصل أي حاجة نلحقها.",
        icon: CheckCircle,
        price: "Retainer"
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Kashx System",
      description: "نظام متكامل لإدارة محلات التحويلات المالية والمحافظ الرقمية في مصر.",
      image: "/assets/projects/kashx_system.webp",
      tags: ["Python", "Flask", "MySQL"],
      link: "https://showcase.kashx.company/"
    },
    {
      id: 2,
      title: "Kashx موقع",
      description: "صفحة هبوط تسويقية لعرض مميزات النظام وجمع الاشتراكات الجديدة.",
      image: "/assets/projects/Kashx.webp",
      tags: ["Python", "Flask", "TailwindCSS"],
      link: "https://kashx.company/"
    },
    {
      id: 3,
      title: "تطبيقات Kashx",
      description: "٣ تطبيقات Flutter متكاملة: WebView للنظام، استقبال رسائل SMS، وتنفيذ التحويلات.",
      image: "/assets/projects/Kashx_apps.webp",
      tags: ["Flutter", "Dart", "SQLite"],
      link: "https://kashx.company/#apps"
    }
  ],
  testimonials: [
    {
      quote: "بصراحة السيستم ده وهم! نقلنا في حتة تانية خالص. السرعة خرافية والدعم بتاعكم ملوش حل، تسلم ايديكم بجد.",
      author: "أحمد علي",
      role: "Egypt",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "عاشت ايدكم على هذا الشغل، صدق سيستم راقي وكلش قوي. ما توقعت يخلص بهالسرعة وبهاي الجودة العالية.",
      author: "محمد حسن",
      role: "Iraq",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "ما شاء الله شغل مرتب وايد. الفريق محترف والتعامل معاهم مريح جداً. وفروا علينا وقت وفلوس، مشكورين.",
      author: "محمود سامي",
      role: "UAE",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    }
  ],
  about: {
    title: "رؤية الصقر",
    mission: "هندسة التميز: أنظمة Enterprise. FinTech. ذكاء اصطناعي. تطبيقات Scalable.",
    story: "الصقر (Elsakr) شركة برمجيات كاملة الخدمات، مش مجرد شركة أدوات Open Source. الحكاية بدأت في 2019 كـ فريق متخصص في أنظمة التداول عالية السرعة (HFT) – مجال الغلطة فيه بمليون. نفس الانضباط الهندسي ده دلوقتي بيشغّل تطبيقات الويب Enterprise، منصات FinTech، وتطبيقات الموبايل اللي بنعملها. إحنا بنسلم أنظمة Production-Ready لعملاء في أوروبا والشرق الأوسط وأفريقيا. وفوق ده كله، بنؤمن بالعطاء للمجتمع. عشان كده بنحافظ على منظومة أدوات مفتوحة المصدر: مجانية، وخاصة، ومبنية بنفس الجودة اللي بنطبقها على المشاريع الكبيرة.",
    timeline: [
      { year: "2019", title: "الأساس", desc: "بناء أنظمة مالية معقدة. سرعة واستقرار ملهوش مثيل." },
      { year: "2021", title: "التوسع العالمي", desc: "حلول Enterprise لعملاء في أوروبا والشرق الأوسط وأفريقيا." },
      { year: "2023", title: "ثورة الـ AI", desc: "تطبيق الـ LLMs وأنظمة RAG والأتمتة الذكية." },
      { year: "2024", title: "العطاء للمجتمع", desc: "إطلاق 13+ أداة مفتوحة المصدر لمجتمع المطورين العالمي." }
    ],
    values: [
      { title: "هندسة أولاً", desc: "إحنا مهندسين، مش مجرد كاتبين كود. الـ Architecture والأداء والأمان مبنيين من الأول.", icon: Cpu },
      { title: "نجاح العميل", desc: "أهداف البيزنس بتاعك هي اللي بتحرك قراراتنا التقنية. بنسلم اللي بيفرق.", icon: Target },
      { title: "مساهمة Open Source", desc: "بنرد الجميل للمجتمع بأدوات مجانية وآمنة.", icon: Eye },
      { title: "رؤية الصقر", desc: "دقة في كل بكسل. بنشوف اللي غيرنا مبيشوفوش.", icon: Zap }
    ],
    team: [
      { name: "خالد", role: "Founder & Lead Architect", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
      { name: "أحمد", role: "Senior Backend Eng", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300" },
      { name: "علي", role: "Frontend Ninja", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
      { name: "كريم", role: "DevOps Master", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" }
    ]
  },
  process: {
    title: "طريقة الشغل",
    steps: [
      { title: "نفهم", desc: "نقعد معاك نفهم الدماغ ماشية ازاي." },
      { title: "نخطط", desc: "نحط الـ Architecture والـ Database Schema." },
      { title: "ننفذ", desc: "نكتب كود ونقسم الشغل Sprints." },
      { title: "نسلم", desc: "نعمل Deploy ونتأكد إن كله تمام." }
    ]
  },
  contact: {
    title: "ابعتلنا",
    subtitle: "قولنا بتفكر في إيه وخلي الباقي علينا.",
    form: {
      steps: ["بياناتك", "المشروع", "تفاصيل تقنية", "مراجعة"],
      fields: {
        name: "اسمك الكريم",
        email: "إيميلك",
        company: "شركتك",
        projectType: "نوع المشروع",
        budget: "الميزانية المتوقعة",
        currency: "العملة",
        details: "احكيلنا شوية تفاصيل",
        timeline: "مستعجل قد إيه؟"
      },
      types: ["Web App", "Mobile App", "AI Solution", "Consultation", "Other"],
      currencies: ["EGP", "USD", "SAR", "AED"]
    },
    faq: [
      { q: "بتحاسبوا ازاي؟", a: "يا إما Time & Material لو المشروع مرن، يا إما Fixed Price لو كل حاجة واضحة من الأول." },
      { q: "الكود بيبقى بتاعي؟", a: "طبعاً! بمجرد ما المشروع يخلص وتدفع التكلفة، الكود والملكية الفكرية كلها بتاعتك." },
      { q: "بتشتغلوا بـ إيه؟", a: "إحنا Stack-Agnostic بس بنميل لـ React, Node.js, Python, AWS عشان دي التكنولوجيز اللي أثبتت كفاءة." },
      { q: "الداتا بتاعتي في أمان؟", a: "أكيد. بنوقع معاك NDA و DPA عشان تضمن حقك وسرية بياناتك." }
    ]
  },
  legalPages: {
    "privacy-policy": {
      title: "سياسة الخصوصية",
      lastUpdated: "١٤ يناير ٢٠٢٤",
      content: "## ١. مقدمة\n\nإحنا في الصقر بنحترم خصوصيتك جداً. الكلام ده عشان تعرف إحنا بنعمل إيه بالبيانات بتاعتك.\n\n## ٢. البيانات اللي بنجمعها\n\nممكن نجمع بيانات زي اسمك، إيميلك، ورقم تليفونك عشان نعرف نتواصل معاك.\n\n## ٣. بنعمل بيها إيه\n\nببساطة، بنستخدمها عشان نخلص الشغل اللي بينا وبينك، أو عشان نبعتلك حاجات ممكن تهمك.\n\n## ٤. الأمان\n\nبياناتك عندنا في الحفظ والصون. بنستخدم سيستمز مؤمنة عشان مفيش نملة تدخل عليها."
    },
    "terms-of-service": {
      title: "شروط الخدمة",
      lastUpdated: "١ فبراير ٢٠٢٤",
      content: "## ١. اتفاق\n\nلما بتستخدم موقعنا، أنت موافق على الشروط دي.\n\n## ٢. الملكية\n\nالمحتوى اللي على الموقع ده بتاعنا، اللوجو والكلام وكل حاجة."
    },
    "cookie-policy": {
      title: "سياسة الكوكيز",
      lastUpdated: "١٤ يناير ٢٠٢٤",
      content: "## ١. يعني إيه كوكيز\n\nحاجات صغيرة بتتحط في المتصفح عشان تفتكر إعداداتك.\n\n## ٢. بنستخدمها ليه\n\nعشان الموقع يشتغل معاك بشكل أحسن ويفتكر لغتك وتفضيلاتك."
    },
    "sla": {
      title: "اتفاقية مستوى الخدمة",
      lastUpdated: "١٠ مارس ٢٠٢٤",
      content: "## ١. التزامنا\n\nبنلتزم إن خدماتنا تفضل شغالة بنسبة 99.99%.\n\n## ٢. لو قصرنا\n\nلو حصل والخدمة وقعت (وده قليل جداً)، ليك عندنا تعويض في الفاتورة الجاية."
    }
  },
  footer: {
    tagline: "بنبني ديجيتال صح.",
    subscribe: {
      title: "النشرة البرمجية",
      placeholder: "اكتب إيميلك",
      button: "اشترك"
    },
    columns: {
      solutions: {
        title: "حلولنا",
        items: ["Web Architecture", "Mobile Dev", "AI & ML", "Cloud Ops", "App Security"]
      },
      company: {
        title: "الشركة",
        items: ["من نحن", "شغل معانا", "شركاءنا", "تواصل معنا"]
      },
      legal: {
        title: "روتين",
        items: [
          { label: "الخصوصية", path: "/legal/privacy-policy" },
          { label: "الشروط", path: "/legal/terms-of-service" },
          { label: "الكوكيز", path: "/legal/cookie-policy" },
          { label: "SLA", path: "/legal/sla" }
        ]
      }
    },
    rights: "© 2024 الصقر للبرمجيات. كل الحقوق محفوظة.",
    social: [
      { name: "Facebook", icon: Facebook, link: "https://www.facebook.com/people/Elsakr/61584979738922/" },
      { name: "WhatsApp", icon: Smartphone, link: "https://wa.me/201016495229" } // Icon will be swapped in component if needed
    ]
  },
  freeToolsDesktop: [
    {
      id: "sqlite-browser",
      title: "Elsakr SQLite Browser",
      description: "أداة ديسك توب احترافية لاستعراض، استعلام، وإدارة قواعد بيانات SQLite بواجهة داكنة فاخرة.",
      longDescription: "تحكم في قواعد بياناتك المحلية بالأناقة والقوة اللي يستحقوها. Elsakr SQLite Browser بيعيد تعريف تجربة إدارة قواعد البيانات بواجهة Premium Dark UI مذهلة، مصممة لتقليل إجهاد العين أثناء جلسات البرمجة الطويلة. الأداة بتقدم بيئة خفيفة وقوية لاستعراض الجداول، تنفيذ استعلامات SQL معقدة، وفحص هيكل قاعدة البيانات من غير تعقيد الـ IDEs التقيلة. سواء كنت مبرمج، محلل بيانات، أو طالب، الأداة دي بتديك تحكم كامل في ملفات SQLite بمميزات زي التصدير لـ Excel/CSV بضغطة واحدة، حذف الصفوف بأمان، وعرض فوري للـ Schema. مفتوحة المصدر، بتحترم الخصوصية، ومبنية للأداء العالي.",
      features: [
        "واجهة داكنة احترافية (Premium UI)",
        "تصفح وتعديل البيانات (1000 صف)",
        "تنفيذ استعلامات SQL مخصصة",
        "حذف صفوف آمن (بواسطة ROWID)",
        "عرض هيكل الجدول والـ Schema",
        "تصدير لملفات CSV و Excel",
        "إنشاء وفتح ملفات قواعد البيانات"
      ],
      useCases: [
        "Debug قواعد بيانات تطبيقات الموبايل",
        "تحليل البيانات المحلية",
        "تجارب استعلامات SQL السريعة",
        "تحويل بيانات SQLite لـ Excel"
      ],
      howToUse: [
        "افتح ملف .db موجود أو أنشئ جديد",
        "اختر جدول من القائمة الجانبية للتصفح",
        "استخدم تاب 'Execute SQL' للاستعلامات",
        "صدر النتائج لـ CSV أو Excel فوراً"
      ],
      benefits: [
        "خفيف وسريع جداً",
        "مش محتاج تسطيب (Portable)",
        "بيقلل التعقيد البصري",
        "100% مجاني ومفتوح المصدر"
      ],
      keywords: ["تصفح sqlite", "محرر sql", "إدارة قواعد البيانات", "عرض sql", "sqlite دارك مود"],
      category: "development",
      version: "1.0.0",
      releaseDate: "2024-12-25",
      image: "/assets/Free_Tools/Elsakr_SQLite_Browser/Elsakr_SQLite_Browser.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/Elsakr-SQLite-Browser/releases/download/v1.0.0/Elsakr_SQLite_Browser_EXE.zip",
        source: "https://github.com/khalidsakrjoker/Elsakr-SQLite-Browser/releases/download/v1.0.0/Elsakr_SQLite_Browser_Source.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-SQLite-Browser"
      },
      tags: ["Python", "SQLite", "Database"]
    },
    {
      id: "csv-splitter",
      title: "Elsakr CSV Splitter & Merger",
      description: "قَسِّم ملفات CSV الكبيرة أو ادمج عدة ملفات في واحد. واجهة داكنة احترافية مع شريط تقدم.",
      longDescription: "بتتعامل مع ملفات CSV ضخمة أو بيانات متفرقة؟ أداة تقسيم ودمج CSV من الصقر هي رفيقك في معالجة البيانات. قَسِّم ملف 100,000 صف لأجزاء 1,000 صف، أو ادمج عشرات الملفات في ملف واحد موحد. الأداة بتقدم واجهة داكنة احترافية، شريط تقدم لحظي، وملخص فوري للملفات الناتجة. مبنية للمطورين، محللي البيانات، وأي حد بيتعامل مع CSV. 100% أوفلاين — بياناتك متسيبش جهازك أبداً.",
      features: [
        "تقسيم CSV بعدد الصفوف",
        "دمج ملفات CSV متعددة",
        "شريط تقدم لحظي",
        "عرض ملخص الملفات الناتجة",
        "واجهة داكنة احترافية",
        "معالجة أوفلاين 100%"
      ],
      useCases: [
        "تقسيم بيانات ضخمة للمعالجة",
        "دمج تقارير شهرية",
        "تحضير بيانات للرفع",
        "تقسيم ملفات للإيميل"
      ],
      howToUse: [
        "اختر تاب Split أو Merge",
        "اختر الملف/الملفات",
        "حدد عدد الصفوف أو مسار الحفظ",
        "اضغط الزر وتابع التقدم"
      ],
      benefits: [
        "معالجة سريعة",
        "بدون حد للصفوف",
        "بيحافظ على الـ Headers",
        "صفر رفع بيانات"
      ],
      keywords: ["تقسيم csv", "دمج csv", "أدوات بيانات", "split csv"],
      category: "data",
      version: "1.0.0",
      releaseDate: "2024-12-25",
      image: "/assets/Free_Tools/Elsakr_CSV_Splitter/Elsakr_CSV_Splitter.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/Elsakr-CSV-Splitter/releases/download/v1.0.0/Elsakr_CSV_Splitter_EXE.zip",
        source: "https://github.com/khalidsakrjoker/Elsakr-CSV-Splitter/releases/download/v1.0.0/Elsakr_CSV_Splitter_Source.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-CSV-Splitter"
      },
      tags: ["Python", "CSV", "Data Tools"]
    },
    {
      id: "qr-code-generator-desktop",
      title: "Elsakr QR Code Generator",
      description: "أنشئ رموز QR عالية الجودة أوفلاين. صمم ألوانك، ضيف لوجو، وولّد كميات كبيرة بضغطة واحدة.",
      longDescription: "الحل النهائي لرموز QR على الديسك توب. أنشئ أكواد للروابط، الواي فاي، الإيميل، والرسائل القصيرة بخصوصية تامة. بيتميز بالمعالجة الجماعية من ملفات CSV/TXT، وتخصيص العلامة التجارية بإضافة اللوجو، وواجهة داكنة مريحة للعين. بيشتغل 100% أوفلاين من غير إنترنت.",
      features: [
        "5 أنواع QR (رابط، واي فاي، ...)",
        "معالجة جماعية (CSV/TXT)",
        "ألوان ولوجو مخصص",
        "خصوصية تامة (أوفلاين)",
        "واجهة دارك مود",
        "تحميل بجودة عالية"
      ],
      useCases: [
        "كروت شخصية",
        "ملصقات منتجات",
        "مشاركة الواي فاي",
        "توليد بالجملة"
      ],
      howToUse: [
        "اختر نوع الـ QR",
        "دخل البيانات",
        "خصص الألوان واللوجو",
        "اضغط توليد واحفظ"
      ],
      benefits: [
        "مش محتاج إنترنت",
        "توليد كميات ضخمة",
        "جودة طباعة عالية",
        "خصوصية بياناتك"
      ],
      keywords: ["توليد qr", "qr أوفلاين", "برنامج qr ديسك توب", "qr codes بالجملة"],
      category: "productivity",
      version: "1.0.0",
      releaseDate: "2024-12-24",
      image: "/assets/Free_Tools/Elsakr_QR_Code_Generator/Elsakr_QR_Code_Generator.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/Elsakr-QR-Code-Generator-Desktop/releases/download/v1.0.0/Elsakr_QR_Code_Generator_EXE.zip",
        source: "https://github.com/khalidsakrjoker/Elsakr-QR-Code-Generator-Desktop/releases/download/v1.0.0/Elsakr_QR_Code_Generator_Source.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-QR-Code-Generator-Desktop"
      },
      tags: ["Python", "Tkinter", "Offline"]
    },
    {
      id: "favicon-generator",
      title: "Favicon Generator",
      description: "اعمل كل أحجام الـ Icons (ICO, PNG, Apple Touch) من صورة واحدة. واجهة شيك ومعاينة لايف.",
      longDescription: "عمل favicon لموقعك مش لازم يكون عملية معقدة. الأداة بتاعتنا بتاخد صورة واحدة عالية الجودة وبتعملك منها كل الأحجام اللي تحتاجها - من ICO 16x16 الكلاسيكي لـ Apple Touch Icons و Android icons. مبنية بـ Python وفيها واجهة دارك شيك، بتوريك معاينة لحظية لشكل الـ favicon في كل الحالات. كجزء من التزامنا بالـ Open Source، الأداة دي مجانية تماماً.",
      features: [
        "توليد ICO بأحجام متعددة في ملف واحد",
        "عمل Apple Touch Icons (180x180)",
        "توليد Android Chrome icons",
        "معاينة حية لكل الأحجام",
        "دعم PNG, JPG, WebP كمدخلات",
        "واجهة دارك احترافية",
        "تصدير كل الأحجام بضغطة"
      ],
      useCases: [
        "تجهيز favicons للمواقع الجديدة",
        "تحديث البراندينج للمواقع",
        "عمل icons للـ PWAs",
        "توليد icons للـ bookmarks"
      ],
      howToUse: [
        "شغّل التطبيق",
        "اضغط 'Select Image' واختار صورتك",
        "شوف المعاينة لكل الأحجام",
        "اضغط 'Export All' لحفظ الكل"
      ],
      benefits: [
        "كل الأحجام بضغطة واحدة",
        "مش محتاج Photoshop أو مواقع",
        "يشتغل أوفلاين - خصوصية كاملة",
        "مفتوح المصدر ومجاني للأبد"
      ],
      keywords: ["favicon generator", "ico generator", "أيقونة موقع", "apple touch icon"],
      category: "design",
      version: "1.0.0",
      releaseDate: "2024-12-15",
      image: "/assets/Free_Tools/Elsakr_Fav_Icon_Generator/Fav_Icons_Generator.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/Elsakr-Favicon-Generator/releases/download/v1.0.0/Elsakr_Favicon_Generator_EXE.zip",
        source: "https://github.com/khalidsakrjoker/Elsakr-Favicon-Generator/releases/download/v1.0.0/Elsakr_Favicon_Generator_Source.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-Favicon-Generator"
      },
      tags: ["Python", "GUI", "Design"]
    },
    {
      id: "image-converter",
      title: "Image Converter",
      description: "حوّل الصور بالجملة بين PNG, JPEG, WebP وغيرها. تتحكم في الجودة وتشوف إحصائيات التحويل.",
      longDescription: "التعامل مع الصور كتير بيحتاج تحويل بين الصيغ المختلفة. الـ Image Converter بيخليك تحول بين كل صيغ الصور الرئيسية مع تحكم كامل في الجودة. تابع إحصائيات التحويل، وحافظ على شكل الفولدرات، وحوّل مئات الصور في ثواني. سواء بتجهز assets للويب أو الطباعة أو الأرشيف، الأداة دي بتعمل كل ده. مبنية بـ Python ومفتوحة المصدر.",
      features: [
        "تحويل بين PNG, JPEG, WebP, BMP, TIFF, GIF, ICO",
        "معالجة بالجملة - فولدرات كاملة",
        "سلايدر جودة للصيغ اللوسي",
        "الحفاظ على شكل الفولدرات",
        "إحصائيات وسجل التحويل",
        "واجهة drag-and-drop",
        "تتبع التقدم للدفعات الكبيرة"
      ],
      useCases: [
        "تحويل صور المنتجات للـ e-commerce",
        "تجهيز صور للتحسين على الويب",
        "تحويل صيغ قديمة لـ WebP الحديثة",
        "تحويل سكرينشوتات بالجملة"
      ],
      howToUse: [
        "افتح التطبيق",
        "اسحب وافلت الملفات أو اختار فولدر",
        "اختار صيغة الخرج والجودة",
        "اضغط Convert وتابع التقدم"
      ],
      benefits: [
        "حوّل مئات الصور مرة واحدة",
        "تحكم كامل في جودة الخرج",
        "بيحافظ على الملفات الأصلية",
        "مفيش اشتراك أو حساب"
      ],
      keywords: ["تحويل صور", "batch image converter", "png to webp", "format converter"],
      category: "productivity",
      version: "1.0.0",
      releaseDate: "2024-12-15",
      image: "/assets/Free_Tools/Elsakr_Image_Converter/elsakr-image-converter.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/Elsakr-Image-Converter/releases/download/v1.0.0/Elsakr._mage_Converter_EXE.zip",
        source: "https://github.com/khalidsakrjoker/Elsakr-Image-Converter/releases/download/v1.0.0/Elsakr._mage_Converter_Source.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-Image-Converter"
      },
      tags: ["Python", "GUI", "Batch"]
    },
    {
      id: "password-vault",
      title: "Password Vault",
      description: "خزّن الباسووردات بأمان! بيعمل Generate و Analyze ويحفظهم بتشفير AES-256.",
      longDescription: "كلمات السر بتاعتك تستاهل حماية عسكرية. الـ Password Vault بيستخدم تشفير AES-256 لتخزين كل بياناتك بأمان على جهازك. وّلد كلمات سر قوية، حلل قوتها لحظياً، ونظمها بالفئات والتاجات. مش زي المديرين السحابيين، بياناتك مش بتسيب جهازك أبداً. مبني بالأمان كأولوية أولى ومفتوح المصدر عشان خبراء الأمان يقدروا يتأكدوا.",
      features: [
        "تشفير AES-256 لكل البيانات المخزنة",
        "مولّد كلمات سر قوية",
        "محلل قوة كلمة السر",
        "تنظيم بالفئات والتاجات",
        "بحث وفلترة",
        "حماية بـ Master Password",
        "قفل تلقائي عند عدم النشاط",
        "تصدير/استيراد نسخ احتياطية مشفرة"
      ],
      useCases: [
        "تخزين بيانات دخول المواقع",
        "إدارة API keys و tokens",
        "توليد كلمات سر آمنة للحسابات الجديدة",
        "حفظ ملاحظات حساسة مشفرة"
      ],
      howToUse: [
        "شغّل واعمل Master password",
        "أضف إدخالات باليوزر والباسورد والملاحظات",
        "استخدم المولّد لكلمات السر الجديدة",
        "ابحث أو تصفح لإيجاد البيانات المحفوظة"
      ],
      benefits: [
        "تشفير AES-256 عسكري",
        "100% أوفلاين - مفيش قلق من السحابة",
        "مفتوح المصدر للشفافية",
        "مجاني للأبد"
      ],
      keywords: ["password manager", "مدير كلمات السر", "تشفير aes", "حفظ باسورد"],
      category: "security",
      version: "1.0.0",
      releaseDate: "2024-12-15",
      image: "/assets/Free_Tools/Elsakr_Password_Vault/Elsakr_Password_Vault.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/Elsakr-Password-Vault/releases/download/v1.0.0/Elsakr_Password_Vault_EXE.zip",
        source: "https://github.com/khalidsakrjoker/Elsakr-Password-Vault/releases/download/v1.0.0/Elsakr_Password_Vault_Source.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-Password-Vault"
      },
      tags: ["Python", "Security", "Encryption"]
    },
    {
      id: "port-scanner",
      title: "Port Scanner & Killer",
      description: "اعمل Scan للـ Ports واقتل أي Process شغال عليها. Multi-threaded وسريع جداً.",
      longDescription: "كل مطور مر بمشكلة 'port already in use'. الـ Port Scanner & Killer بيديك رؤية فورية لإيه اللي شغال على ports جهازك وقوة تحريرها بضغطة واحدة. الـ Multi-threaded scanning بيجيبلك النتائج بسرعة، والواجهة النظيفة بتسهّل إيجاد وقتل العمليات المتمردة. أساسي للمطورين اللي بيشغلوا services متعددة محلياً. مفتوح المصدر ومجاني.",
      features: [
        "مسح متعدد الخيوط",
        "شوف كل الـ listening ports فوراً",
        "قتل العملية بضغطة",
        "فلترة بنطاق الـ ports",
        "عرض اسم العملية والـ PID",
        "تصدير النتائج لملف",
        "مراقبة لحظية للـ ports"
      ],
      useCases: [
        "تحرير ports محجوزة من عمليات كراشت",
        "تتبع تعارضات الـ ports في التطوير",
        "تدقيق أمني للـ ports المفتوحة",
        "مراقبة الخدمات بالـ port"
      ],
      howToUse: [
        "شغّل التطبيق",
        "اضغط 'Scan All Ports' أو حدد نطاق",
        "شوف النتائج فيها port و PID واسم العملية",
        "اضغط 'Kill' جنب أي عملية لقتلها"
      ],
      benefits: [
        "حل فوري لتعارضات الـ ports",
        "أسرع من الـ command-line",
        "مش محتاج معرفة إدارية",
        "يشتغل على كل إصدارات Windows"
      ],
      keywords: ["port scanner", "قتل عملية", "تعارض ports", "أدوات مطورين"],
      category: "devtools",
      version: "1.0.0",
      releaseDate: "2024-12-15",
      image: "/assets/Free_Tools/Elsakr_Port_Scanner/Elsakr_Port_Scanner.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/Elsakr-Port-Scanner/releases/download/v1.0.0/Elsakr_Port_Scanner_EXE.zip",
        source: "https://github.com/khalidsakrjoker/Elsakr-Port-Scanner/releases/download/v1.0.0/Elsakr_Port_Scanner_Source.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-Port-Scanner"
      },
      tags: ["Python", "Network", "DevTools"]
    },
    {
      id: "image-compressor",
      title: "Image Compressor",
      description: "ضغط الصور زي TinyPNG! بيقلل ألوان الـ PNG وبيضغط JPEG و WebP. Batch processing وتحكم في الجودة.",
      longDescription: "الصور الكبيرة بتبطئ المواقع وبتاكل مساحة التخزين. الـ Image Compressor للـ Desktop بيستخدم نفس تقنية lossy PNG quantization زي TinyPNG لتقليل حجم الملفات بشكل كبير مع الحفاظ على الجودة المرئية. معالجة فولدرات كاملة بالجملة، تحكم دقيق في مستويات الجودة، والحفاظ على خصوصية ملفاتك لأن كل حاجة بتشتغل محلياً على جهازك.",
      features: [
        "ضغط lossy زي TinyPNG",
        "دعم PNG, JPEG, WebP",
        "معالجة بالجملة للفولدرات",
        "سلايدر جودة (1-100%)",
        "مقارنة قبل/بعد",
        "إحصائيات تقليل الحجم",
        "خيار الحفاظ على الـ metadata"
      ],
      useCases: [
        "تحسين assets المواقع",
        "تقليل مساحة أرشيفات الصور",
        "تجهيز صور لمرفقات الإيميل",
        "ضغط سكرينشوتات للدوكيومنتيشن"
      ],
      howToUse: [
        "افتح التطبيق",
        "اسحب وافلت صور أو فولدرات",
        "اظبط سلايدر الجودة",
        "اضغط Compress وراجع النتائج"
      ],
      benefits: [
        "قلل حجم الملفات 60-80%",
        "خصوصية كاملة - معالجة أوفلاين",
        "معالجة مشاريع كاملة بالجملة",
        "نتائج احترافية ببلاش"
      ],
      keywords: ["ضغط صور", "png compressor", "بديل tinypng", "تقليل حجم صور"],
      category: "productivity",
      version: "1.0.0",
      releaseDate: "2024-12-15",
      image: "/assets/Free_Tools/Elsakr_Image_Compressor/Elsakr_Image_Compressor_desktop.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/Elsakr-Image-Compressor/releases/download/v1.0.0/Elsakr_Image._ompressor_EXE.zip",
        source: "https://github.com/khalidsakrjoker/Elsakr-Image-Compressor/releases/download/v1.0.0/Elsakr_Image._ompressor_Source.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-Image-Compressor"
      },
      tags: ["Python", "Compression", "Batch"]
    },
    {
      id: "whatsapp-api-gui",
      title: "WhatsApp Checker (API GUI)",
      description: "فلتر أرقام الواتساب بسرعة صاروخ باستخدام API. واجهة سهلة وبسيطة.",
      longDescription: "فلتر أرقام الواتساب بسرعة خيالية مع الـ API-based checker بتاعنا. النسخة GUI دي بتقدم واجهة سهلة للتحقق من قوائم أرقام كبيرة وتحديد المسجلين على الواتساب. باستخدام API مباشر، بتحقق سرعة أعلى بكتير من البدائل اللي بتستخدم البراوزر. أساسي للبيزنس اللي بيديروا قواعد بيانات جهات اتصال أو حملات تسويق. محتاج API key بس بيقدم أداء لا مثيل له.",
      features: [
        "فحص عالي السرعة بالـ API",
        "واجهة رسومية سهلة",
        "استيراد بالجملة من TXT/CSV",
        "تصدير الأرقام الصحيحة/الخطأ منفصلين",
        "تتبع التقدم والإحصائيات",
        "إيقاف/استئناف",
        "workers متعددة لسرعة أكبر",
        "معالجة الأخطاء وإعادة المحاولة"
      ],
      useCases: [
        "التحقق من قواعد بيانات العملاء",
        "تنظيف قوائم التسويق",
        "التأكد من الـ leads قبل التواصل",
        "بناء قوائم جهات اتصال موثقة"
      ],
      howToUse: [
        "أدخل الـ API key في الإعدادات",
        "استورد قائمة أرقامك",
        "اضغط Start للبدء",
        "صدّر النتائج لما تخلص"
      ],
      benefits: [
        "أسرع طريقة فحص متاحة",
        "واجهة رسومية نظيفة",
        "معالجة ملايين الأرقام",
        "إحصائيات وتقارير مفصلة"
      ],
      keywords: ["whatsapp checker", "فحص أرقام واتساب", "فلتر واتساب", "التحقق من أرقام"],
      category: "marketing",
      version: "1.0.0",
      releaseDate: "2024-12-15",
      image: "/assets/Free_Tools/Whatsapp_Checker/api_gui-min.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker/releases/download/v1.0.0/WA_API_GUI.zip",
        source: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker/releases/download/v1.0.0/WA_API_GUI_Source.zip",
        github: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker"
      },
      tags: ["API", "GUI", "Fast"]
    },
    {
      id: "whatsapp-api-terminal",
      title: "WhatsApp Checker (API Terminal)",
      description: "نسخة الـ Terminal الخفيفة. سريعة جداً ومثالية لو جهازك ضعيف.",
      longDescription: "للـ Power users اللي بيفضلوا الـ Command line، الـ Terminal API Checker بيقدم أقصى أداء مع أقل استهلاك موارد. شغّله على سيرفرات، ادمجه في سكريبتات، أو عالج قوائم ضخمة بالليل. نفس قوة الفحص بالـ API زي نسخة الـ GUI، بس محسّن للأتمتة والبيئات الـ headless. اطبع لملفات، pipe لأدوات تانية، أو تابع النتائج لحظياً.",
      features: [
        "فحص API سريع جداً",
        "استهلاك موارد قليل",
        "قابل للسكريبتات والـ pipes",
        "يشتغل على سيرفرات/headless",
        "طباعة لملف أو stdout",
        "تزامن قابل للتخصيص",
        "استئناف الجلسات المتوقفة",
        "خرج ملون في الـ terminal"
      ],
      useCases: [
        "خطوط أنابيب التحقق الآلية",
        "معالجة بالجملة على الـ server",
        "التكامل مع أدوات تانية",
        "معالجة datasets ضخمة بالليل"
      ],
      howToUse: [
        "اضبط الـ API key كـ environment variable أو في الـ config",
        "شغّل: checker --input numbers.txt --output valid.txt",
        "تابع التقدم في الـ terminal",
        "النتائج محفوظة في ملف الخرج"
      ],
      benefits: [
        "أقصى سرعة وكفاءة",
        "مثالي للأتمتة",
        "يشتغل على أي نظام فيه Python",
        "الحد الأدنى من الاعتماديات"
      ],
      keywords: ["whatsapp cli", "terminal checker", "فحص واتساب سطر الأوامر"],
      category: "marketing",
      version: "1.0.0",
      releaseDate: "2024-12-15",
      image: "/assets/Free_Tools/Whatsapp_Checker/api_terminal-min.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker/releases/download/v1.0.0/WA_API_Terminal.zip",
        source: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker/releases/download/v1.0.0/WA_API_Terminal_Source.zip",
        github: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker"
      },
      tags: ["API", "CLI", "Performance"]
    },
    {
      id: "whatsapp-free-gui",
      title: "WhatsApp Checker (Free GUI)",
      description: "بيشتغل بالـ Playwright (Browser Automation). مش محتاج API Key ومجاني!",
      longDescription: "مفيش API key؟ مفيش مشكلة. الـ Playwright-based checker بتاعنا بيستخدم أتمتة البراوزر للتحقق من أرقام الواتساب عن طريق محاكاة تفاعلات مستخدم حقيقي. الواجهة الرسومية بتخلي الاستخدام سهل بينما محرك Playwright بيتعامل مع التعقيد. أبطأ من الفحص بالـ API لكن مجاني تماماً بدون اعتماديات خارجية. مثالي للقوائم الصغيرة أو لما الـ API مش متاح.",
      features: [
        "مش محتاج API key",
        "واجهة رسومية",
        "أتمتة براوزر باستخدام Playwright",
        "محاكاة سلوك مستخدم حقيقي",
        "استيراد/تصدير قوائم أرقام",
        "تتبع تقدم مرئي",
        "سكرينشوت للأخطاء للتتبع",
        "فترة فحص قابلة للتخصيص"
      ],
      useCases: [
        "التحقق من أرقام صغيرة لمتوسطة",
        "لما الـ API مش متاح",
        "التجربة والتطوير",
        "تنظيف قوائم جهات اتصال لمرة واحدة"
      ],
      howToUse: [
        "شغّل التطبيق",
        "سجّل دخول في WhatsApp Web لما يطلب",
        "استورد قائمة أرقامك",
        "ابدأ الفحص وتابع التقدم"
      ],
      benefits: [
        "مجاني تماماً - مفيش تكاليف API",
        "سلوك إنساني بيتجنب الحظر",
        "تغذية راجعة مرئية وتقدم",
        "واجهة سهلة الاستخدام"
      ],
      keywords: ["فحص واتساب مجاني", "playwright automation", "whatsapp web checker"],
      category: "marketing",
      version: "1.0.0",
      releaseDate: "2024-12-15",
      image: "/assets/Free_Tools/Whatsapp_Checker/free_gui-min.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker/releases/download/v1.0.0/WA_FREE_GUI.zip",
        source: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker/releases/download/v1.0.0/WA_FREE_GUI_Source.zip",
        github: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker"
      },
      tags: ["PlayWright", "GUI", "Free"]
    },
    {
      id: "whatsapp-free-terminal",
      title: "WhatsApp Checker (Free Terminal)",
      description: "نفس فكرة الـ Playwright بس من الـ Terminal. خفيف ودقيق.",
      longDescription: "النسخة Terminal من Playwright checker المجاني بتشتغل headless للكفاءة والتخفي. مثالية للتشغيل على سيرفرات أو في الخلفية وأنت شغال. بتستخدم نفس تقنيات أتمتة البراوزر زي نسخة GUI بس محسّنة لـ workflows سطر الأوامر. ادمج في سكريبتات، جدول تشغيل ليلي، أو عالج أرقام وأنت بعيد عن مكتبك. مش محتاج API، مجاني تماماً.",
      features: [
        "أتمتة براوزر headless",
        "واجهة سطر أوامر",
        "مش محتاج API key",
        "يشتغل على سيرفرات/headless",
        "وضع تخفي لتجنب الحظر",
        "حفظ الجلسة",
        "تأخيرات قابلة للتخصيص",
        "طباعة لملف أو stdout"
      ],
      useCases: [
        "خطوط أنابيب فحص آلية",
        "التشغيل على سيرفرات بعيدة",
        "معالجة بالجملة بالليل",
        "التكامل مع أدوات تانية"
      ],
      howToUse: [
        "شغّل الإعداد الأولي لتسجيل الدخول في WhatsApp Web",
        "الجلسة محفوظة للتشغيلات المستقبلية",
        "شغّل الـ checker مع قائمة أرقامك",
        "النتائج طلعت في ملف"
      ],
      benefits: [
        "يشتغل بدون تكاليف API",
        "يشتغل في الخلفية/headless",
        "وضع تخفي للموثوقية",
        "مثالي للأتمتة"
      ],
      keywords: ["headless whatsapp checker", "terminal automation", "stealth checker"],
      category: "marketing",
      version: "1.0.0",
      releaseDate: "2024-12-15",
      image: "/assets/Free_Tools/Whatsapp_Checker/free_terminal-min.webp",
      links: {
        exe: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker/releases/download/v1.0.0/WA_FREE_Terminal.zip",
        source: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker/releases/download/v1.0.0/WA_FREE_Terminal_Source.zip",
        github: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker"
      },
      tags: ["PlayWright", "CLI", "Stealth"]
    }
  ],
  freeToolsWeb: [
    {
      id: "qr-code-generator-web",
      title: "QR Code Generator (Web)",
      description: "أنشئ رموز QR مخصصة فوراً من المتصفح. بدون رفع ملفات، بدون تتبع. يدعم 5 أنواع.",
      longDescription: "ولّد رموز QR رائعة مباشرة من متصفحك من غير ما ترفع أي بيانات للسيرفر. الأداة دي بتحافظ على خصوصيتك وبتدعم الروابط، النصوص، الواي فاي، الإيميل، وكمان الرسائل. خصص ألوان الـ QR وضيف اللوجو بتاعك ونزل النتيجة بجودة عالية جدًا (SVG و PNG). أسرع وأأمن طريقة لعمل QR Code احترافي ومجاني.",
      features: [
        "توليد فوري على المتصفح (بدون رفع داتا)",
        "5 أنواع: رابط، نص، واي فاي، إيميل، رسائل",
        "تخصيص ألوان الخلفية والمقدمة",
        "إدراج اللوجو في المنتصف",
        "تصدير بصيغتي PNG و SVG",
        "بدون تتبع أو كوكيز"
      ],
      useCases: [
        "مشاركة روابط المواقع بسرعة",
        "أكواد الوصول السريع للواي فاي",
        "مشاركة معلومات الاتصال",
        "المواد الدعائية والتسويقية"
      ],
      howToUse: [
        "اختر نوع الـ QR من التبويبات",
        "أدخل المحتوى (رابط، نص، إلخ)",
        "خصص الألوان وأضف اللوجو",
        "حمّل الـ QR بصيغة PNG أو SVG"
      ],
      benefits: [
        "بدون أي تأخير (Zero Latency)",
        "خصوصية 100%",
        "مجاني مدى الحياة",
        "يعمل أوفلاين"
      ],
      keywords: ["توليد qr أونلاين", "qr code مجاني", "عمل باركود", "qr واي فاي", "qr بدون تتبع"],
      category: "productivity",
      version: "1.0.0",
      releaseDate: "2024-12-24",
      image: "/assets/Free_Tools/Elsakr_QR_Code_Generator/Elsakr_QR_Code_Generator_Web.webp",
      links: {
        live: "https://khalidsakrjoker.github.io/Elsakr-QR-Code-Generator-Web/",
        source: "https://github.com/khalidsakrjoker/Elsakr-QR-Code-Generator-Web/releases/download/v1.0.0/Elsakr_QR_Code_Generator_Web.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-QR-Code-Generator-Web"
      },
      tags: ["JavaScript", "Canvas", "Privacy"]
    },
    {
      id: "image-compressor-web",
      title: "Image Compressor",
      description: "اضغط صورك أونلاين مباشرة من البراوزر! مفيش رفع على سيرفر، خصوصية كاملة. PNG, JPEG, WebP.",
      longDescription: "في الصقر، إحنا مؤمنين بقوة الـ Open Source. عشان كده بنينا الأداة دي اللي بتشتغل 100% على جهازك من غير ما صورك تطلع برا. بديل مجاني لـ TinyPNG بيحافظ على خصوصيتك الكاملة. باستخدام تقنيات Canvas API المتقدمة، تقدر تقلل حجم الصور لحد 80% مع الحفاظ على الجودة. مثالي للمطورين والمصممين واي حد عايز يحسن صوره للويب.",
      features: [
        "المعالجة كلها في البراوزر - صورك مش بتطلع من جهازك",
        "دعم PNG, JPEG, WebP",
        "تحكم في الجودة من 1% لـ 100%",
        "ضغط صور متعددة مرة واحدة",
        "تحميل الكل كـ ZIP",
        "إحصائيات الضغط لحظية",
        "واجهة دارك مودرن"
      ],
      useCases: [
        "تحسين صور الموقع لسرعة التحميل",
        "تقليل حجم المرفقات في الإيميل",
        "تجهيز صور السوشيال ميديا",
        "ضغط سكرينشوتات والدوكيومنتيشن"
      ],
      howToUse: [
        "اسحب وافلت الصور أو اضغط لاختيارها",
        "اظبط سلايدر الجودة",
        "شوف النتيجة فوراً",
        "نزّل الملفات فردي أو كـ ZIP"
      ],
      benefits: [
        "خصوصية كاملة - مفيش رفع على سيرفرات",
        "سرعة عالية على البراوزرات الحديثة",
        "مجاني ومفتوح المصدر للأبد",
        "مفيش حساب أو تسجيل"
      ],
      keywords: ["ضغط صور", "تصغير صور", "بديل TinyPNG", "ضغط صور مجاني", "خصوصية"],
      category: "productivity",
      version: "1.0.0",
      releaseDate: "2024-12-18",
      image: "/assets/Free_Tools/Elsakr_Image_Compressor_Web/Elsakr_Image_Compressor_Web.webp",
      links: {
        live: "https://khalidsakrjoker.github.io/Elsakr-Image-Compressor-Web/",
        source: "https://github.com/khalidsakrjoker/Elsakr-Image-Compressor-Web/releases/download/v1.0.0/Elsakr_Image_Compressor_Web.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-Image-Compressor-Web"
      },
      tags: ["JavaScript", "Canvas", "Privacy"]
    },
    {
      id: "css-gradient-generator",
      title: "CSS Gradient Generator",
      description: "اعمل ألوان متدرجة جميلة للـ CSS! Linear, Radial, Conic. انسخ الكود CSS أو Tailwind أو SCSS.",
      longDescription: "الألوان المتدرجة هي قلب التصميم الحديث، وإحنا مؤمنين إن كل مطور لازم يوصل لأدوات تصميم احترافية ببلاش. أداة CSS Gradient Generator بتاعتنا بتخليك تعمل تدرجات خطية ودائرية ومخروطية مع معاينة لحظية. صدّر إبداعاتك كـ CSS نقي أو Tailwind classes أو SCSS. ده Open Source في أحسن حالاته - بدون قيود، بدون watermarks، حرية إبداعية كاملة.",
      features: [
        "دعم Linear, Radial, Conic gradients",
        "نقاط ألوان غير محدودة مع السحب",
        "معاينة حية لحظية",
        "تصدير كـ CSS أو Tailwind أو SCSS",
        "تحكم في زاوية التدرج الخطي",
        "تحكم في موقع التدرج الدائري",
        "مكتبة تدرجات جاهزة",
        "نسخ بضغطة واحدة"
      ],
      useCases: [
        "تصميم خلفيات الـ Hero sections",
        "تصميم hover effects للأزرار",
        "عمل gradient text effects",
        "تصميم overlay effects للصور"
      ],
      howToUse: [
        "اختار نوع التدرج (linear, radial, conic)",
        "أضف وحرك نقاط الألوان",
        "اظبط الزاوية أو الموقع",
        "انسخ الكود بالصيغة اللي تريدها"
      ],
      benefits: [
        "وفّر ساعات من الـ CSS اليدوي",
        "نتائج متسقة على كل البراوزرات",
        "مش محتاج مهارات تصميم",
        "يشتغل أوفلاين"
      ],
      keywords: ["css gradient generator", "مولد تدرج", "tailwind gradient", "تصميم ويب"],
      category: "design",
      version: "1.0.0",
      releaseDate: "2024-12-18",
      image: "/assets/Free_Tools/Elsakr_CSS_Gradient_Generator/Elsakr_CSS_Gradient_Generator.webp",
      links: {
        live: "https://khalidsakrjoker.github.io/Elsakr-CSS-Gradient-Generator/",
        source: "https://github.com/khalidsakrjoker/Elsakr-CSS-Gradient-Generator/releases/download/v1.0.0/Elsakr.CSS.Gradient.Generator.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-CSS-Gradient-Generator"
      },
      tags: ["CSS", "Tailwind", "Design"]
    },
    {
      id: "css-design-toolkit",
      title: "CSS Design Toolkit",
      description: "5 أدوات في واحدة! Color Palette, Box Shadow, Border Radius, Glassmorphism, Animation.",
      longDescription: "ليه تنزّل 5 أدوات مختلفة لما تقدر تاخدهم كلهم في toolkit واحدة قوية؟ الصقر CSS Design Toolkit بتجمع أهم مولدات CSS في تطبيق واحد جميل. من باليتات الألوان المتناسقة لـ glassmorphism العصري، ومن تركيبات border radius المعقدة للأنيميشن السلسة - كل اللي تحتاجه في تاب واحد. كجزء من التزامنا بمجتمع الـ Open Source، الأداة دي مجانية تماماً وبتشتغل كلها في البراوزر.",
      features: [
        "Color Palette Generator مع 6 أنواع تناسق",
        "Box Shadow Generator مع طبقات ظل",
        "Border Radius Generator لكل corner",
        "Glassmorphism Generator مع blur effects",
        "CSS Animation Generator مع 6 presets",
        "معاينة حية لكل الأدوات",
        "نسخ الكود بضغطة",
        "واجهة دارك responsive"
      ],
      useCases: [
        "تصميم color schemes متسقة",
        "إضافة عمق باستخدام الظلال",
        "بناء interfaces زجاجية حديثة",
        "إضافة micro-animations للـ UI"
      ],
      howToUse: [
        "اختار الأداة من التابات",
        "اظبط الإعدادات وشوف المعاينة",
        "انسخ كود CSS المولّد",
        "الصقه في مشروعك"
      ],
      benefits: [
        "5 أدوات أساسية في مكان واحد",
        "وفّر وقت التنقل بين الأدوات",
        "تصميم متسق",
        "اتعلم CSS وانت بتستخدم"
      ],
      keywords: ["css toolkit", "color palette", "box shadow", "glassmorphism", "css animation"],
      category: "design",
      version: "1.0.0",
      releaseDate: "2024-12-18",
      image: "/assets/Free_Tools/Elsakr_CSS_Design_Toolkit/Elsakr_CSS_Design_Toolkit.webp",
      links: {
        live: "https://khalidsakrjoker.github.io/Elsakr-CSS-Design-Toolkit/",
        source: "https://github.com/khalidsakrjoker/Elsakr-CSS-Design-Toolkit/releases/download/v1.0.0/Elsakr_CSS_Design_Toolkit.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-CSS-Design-Toolkit"
      },
      tags: ["Design", "CSS", "Animation"]
    },
    {
      id: "seo-toolkit",
      title: "SEO Toolkit",
      description: "7 أدوات في واحدة! Meta Tags, Open Graph, Schema.org, Robots.txt, Sitemap, URL Slug, Social Preview.",
      longDescription: "تحسين محركات البحث مش لازم يكون معقد أو غالي. الـ SEO Toolkit بتاعتنا بتحط 7 أدوات SEO أساسية تحت إيدك، مجاناً تماماً. اعمل meta tags مثالية، أنشئ Open Graph و Twitter Cards، ابني Schema.org لـ rich snippets، اظبط robots.txt، وّلد XML sitemaps، اعمل URL slugs صديقة للـ SEO، وشوف preview لروابطك على السوشيال. دي هديتنا لمجتمع المطورين - أدوات SEO احترافية أي حد يقدر يستخدمها.",
      features: [
        "Meta Tags Generator مع عد الحروف",
        "Open Graph + Twitter Cards generator",
        "Schema.org JSON-LD لـ 6 أنواع",
        "Robots.txt builder",
        "XML Sitemap generator",
        "URL Slug generator صديق للـ SEO",
        "Facebook & Twitter social preview",
        "كل الكود جاهز للنسخ"
      ],
      useCases: [
        "تجهيز SEO للمواقع الجديدة",
        "تحسين ترتيب المواقع الحالية",
        "ضمان مشاركة سوشيال متسقة",
        "بناء rich snippets لنتائج البحث"
      ],
      howToUse: [
        "اختار الأداة اللي تحتاجها",
        "املأ الخانات المطلوبة",
        "شوف الكود المولّد لحظياً",
        "انسخ والصقه في موقعك"
      ],
      benefits: [
        "7 أدوات تغنيك عن خدمات مدفوعة",
        "يتبع أحدث معايير SEO",
        "يشتغل مع أي موقع أو CMS",
        "مش محتاج معرفة تقنية"
      ],
      keywords: ["seo tools", "meta tags", "open graph", "schema.org", "sitemap", "أدوات سيو"],
      category: "seo",
      version: "1.0.0",
      releaseDate: "2024-12-18",
      image: "/assets/Free_Tools/Elsakr_SEO_Toolkit/Elsakr_SEO_Toolkit.webp",
      links: {
        live: "https://khalidsakrjoker.github.io/Elsakr-SEO-Toolkit/",
        source: "https://github.com/khalidsakrjoker/Elsakr-SEO-Toolkit/releases/download/v1.0.0/Elsakr-SEO-Toolkit.zip",
        github: "https://github.com/khalidsakrjoker/Elsakr-SEO-Toolkit"
      },
      tags: ["SEO", "Marketing", "Tools"]
    }
  ]
};
