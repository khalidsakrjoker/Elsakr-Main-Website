export const freeToolsDesktopPart2 = [
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
      logo: "/assets/tools/logos/port-scanner.svg",
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
      logo: "/assets/tools/logos/image-compressor.svg",
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
      logo: "/assets/tools/logos/whatsapp-api-gui.svg",
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
      logo: "/assets/tools/logos/whatsapp-api-terminal.svg",
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
      logo: "/assets/tools/logos/whatsapp-free-gui.svg",
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
      logo: "/assets/tools/logos/whatsapp-free-terminal.svg",
      links: {
        exe: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker/releases/download/v1.0.0/WA_FREE_Terminal.zip",
        source: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker/releases/download/v1.0.0/WA_FREE_Terminal_Source.zip",
        github: "https://github.com/khalidsakrjoker/whatsapp-numbers-checker"
      },
      tags: ["PlayWright", "CLI", "Stealth"]
    }
];
