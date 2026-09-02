import { Globe, Zap, Search, Wifi, Smartphone, Layout, Cpu, Award, Clock, BarChart3, Users, Shield, Fingerprint, CheckCircle, Eye, Cloud, BarChart, Database, PenTool, Box, Briefcase } from 'lucide-react';

export const services = {
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
  };
