
import { Code, Cpu, Globe, Rocket, Shield, Zap, CheckCircle, Smartphone, Server, Database, Layers, Eye, Lock, Users, Briefcase, Clock, Award, PenTool, BarChart, Cloud, Target, Search, Wifi, Layout, Box, Fingerprint, BarChart3, Terminal, Facebook } from 'lucide-react';

export const content = {
  brand: {
    name: "Elsakr",
    tagline: "Code That Scales.",
    description: "We don't just write code; we engineer infrastructure that carries businesses. Specializing in High-Availability systems, complex architectures, and bulletproof security.",
    email: "khalid@elsakr.company"
  },
  nav: {
    home: "Dashboard",
    about: "Who We Are",
    services: "Capabilities",
    contact: "Get Started"
  },
  hero: {
    title: "Software Engineering. Zero Fluff.",
    subtitle: "We architect high-availability systems. Specializing in Cloud-Native solutions, FinTech core systems, and scalable mobile apps. You focus on business; we handle the stack.",
    cta: "Estimate Project",
    learnMore: "View Tech Stack"
  },
  stats: [
    { label: "Production Deployments", value: "+150" },
    { label: "Uptime Guarantee", value: "99.99%" },
    { label: "Security Rating", value: "A+" },
    { label: "Enterprise Clients", value: "+40" }
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
  partnersTitle: "Technical Alliances",
  services: {
    title: "Our Stack (Services)",
    subtitle: "Full-cycle engineering. From Architecture design to CI/CD pipelines and long-term maintenance.",
    items: [
      {
        id: 'web',
        title: "Web Architecture",
        description: "Blazing fast SPAs & PWAs. We focus on SEO, Performance metrics, and instantaneous interactions.",
        icon: Globe,
        features: ["Micro-frontends", "SSR & ISR (Next.js)", "SEO Domination", "Real-time Sockets"],
        details: {
          tagline: "World-Class Web Apps",
          longDescription: "We build Web Apps using Next.js and React that handle massive concurrency. SEO optimized out of the box to rank you first. Strictly typed with TypeScript because runtime errors are for amateurs.",
          benefits: [
            { title: "Speed", desc: "Sub-second load times.", icon: Zap },
            { title: "SEO", desc: "Structured for #1 ranking.", icon: Search },
            { title: "PWA", desc: "Offline-first capability.", icon: Wifi }
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
        description: "Native performance with Flutter & React Native. One codebase, flawless execution on iOS & Android.",
        icon: Smartphone,
        features: ["Cross-Platform", "Native Modules", "Store Deployment", "Offline Sync"],
        details: {
          tagline: "Mobile Apps That Fly",
          longDescription: "We engineer mobile apps that feel native. Using Flutter and React Native, we ship to both stores from a single codebase without compromising on performance or hardware access.",
          benefits: [
            { title: "Efficiency", desc: "Single codebase for iOS/Android.", icon: Layout },
            { title: "Hardware", desc: "Full access to sensors & chips.", icon: Cpu },
            { title: "Publishing", desc: "Automated Store deployment.", icon: Award }
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
        description: "Real AI solutions. Smart Chatbots, Predictive Models, and RAG systems.",
        icon: Cpu,
        features: ["RAG Systems", "Computer Vision", "Predictive Analytics", "NLP Automation"],
        details: {
          tagline: "Beyond ChatGPT Wrappers",
          longDescription: "We implement actual AI solutions using RAG to securely connect LLMs to your proprietary data. We build models for sales prediction, image analysis, and process automation.",
          benefits: [
            { title: "Automation", desc: "Cut manual work by 70%.", icon: Clock },
            { title: "Insights", desc: "Data-driven decision making.", icon: BarChart3 },
            { title: "Personalization", desc: "Tailored user experiences.", icon: Users }
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
        description: "Fort Knox level security. Pen-testing, End-to-End Encryption, and automated compliance.",
        icon: Shield,
        features: ["Penetration Testing", "SOC2 Readiness", "Identity Mgmt", "End-to-End Encryption"],
        details: {
          tagline: "Security Is Not Optional",
          longDescription: "We bake security into the CI/CD pipeline. Vulnerability scanning, robust Authentication/Authorization, and encryption at rest and in transit are standard.",
          benefits: [
            { title: "Control", desc: "Strict RBAC implementation.", icon: Fingerprint },
            { title: "Logs", desc: "Immutable audit trails.", icon: CheckCircle },
            { title: "Protection", desc: "WAF & DDoS mitigation.", icon: Eye }
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
        description: "Serverless & Containerized infrastructure. We ensure your app scales automatically.",
        icon: Cloud,
        features: ["Kubernetes", "Serverless", "Terraform", "Auto-scaling"],
        details: {
          tagline: "Zero Downtime",
          longDescription: "Infrastructure as Code using Terraform. Your system auto-scales with traffic spikes and scales down to save costs. We aim for 99.99% uptime.",
          benefits: [
            { title: "Cost", desc: "Pay only for what you use.", icon: BarChart },
            { title: "Uptime", desc: "Resilient architecture.", icon: Database },
            { title: "Speed", desc: "Rapid environment provisioning.", icon: Globe }
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
        description: "Data-driven interfaces. We map user journeys to ensure high conversion and usability.",
        icon: PenTool,
        features: ["Figma", "User Testing", "Design Systems", "Accessibility"],
        details: {
          tagline: "Design That Converts",
          longDescription: "We don't just make pretty screens. We build comprehensive Design Systems ensuring Brand consistency. Every interaction is tested for usability and accessibility.",
          benefits: [
            { title: "UX", desc: "Intuitive user flows.", icon: Users },
            { title: "Speed", desc: "Component-driven development.", icon: Box },
            { title: "Access", desc: "WCAG 2.1 Compliant.", icon: Layout }
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
        title: "Staff Augmentation",
        desc: "Inject our Senior Engineers into your existing agile team.",
        icon: Users,
        price: "Time & Material"
      },
      {
        title: "Managed Delivery",
        desc: "Hand over the specs, we deliver the working product.",
        icon: Briefcase,
        price: "Fixed Price"
      },
      {
        title: "SLA Support",
        desc: "24/7 maintenance and incident response.",
        icon: CheckCircle,
        price: "Retainer"
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Kashx System",
      description: "Comprehensive management system for money transfer shops and digital wallets in Egypt.",
      image: "/assets/projects/kashx_system.webp",
      tags: ["Python", "Flask", "MySQL"],
      link: "https://showcase.kashx.company/"
    },
    {
      id: 2,
      title: "Kashx Company",
      description: "Marketing landing page showcasing system features and collecting new subscriptions.",
      image: "/assets/projects/Kashx.webp",
      tags: ["Python", "Flask", "TailwindCSS"],
      link: "https://kashx.company/"
    },
    {
      id: 3,
      title: "Kashx Apps",
      description: "3 integrated Flutter apps: WebView for system access, SMS message receiver, and transfer execution.",
      image: "/assets/projects/Kashx_apps.webp",
      tags: ["Flutter", "Dart", "SQLite"],
      link: "https://kashx.company/#apps"
    }
  ],
  testimonials: [
    {
      quote: "Working with Elsakr was an absolute pleasure. Professional delivery and the outcome exceeded our expectations.",
      author: "Sara",
      role: "Turkey",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Totally disruptive tech. We saw massive ROI from day one. The execution was killer and the scalable architecture is exactly what we needed.",
      author: "Michael",
      role: "USA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "The design is very beautiful and user-friendly. I am very happy with the result. Thank you!",
      author: "Elena",
      role: "Spain",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    }
  ],
  about: {
    title: "The Falcon's Vision",
    mission: "Engineering Excellence: Enterprise Systems. FinTech. AI. Scalable Mobile.",
    story: "Elsakr is a Full-Service Software Engineering Studio. We started in 2019 building high-frequency trading systems—where every millisecond mattered. That same engineering discipline now powers our enterprise web apps, FinTech platforms, and scalable mobile solutions. We don't just prototype; we ship production-ready systems to clients across EMEA, Europe, and the Middle East. Beyond client work, we believe in giving back. That's why we maintain an Open Source Tools Ecosystem: free, privacy-first utilities built with the same rigor we apply to million-dollar projects.",
    timeline: [
      { year: "2019", title: "The Foundation", desc: "Architecting high-frequency financial backends. Zero latency." },
      { year: "2021", title: "Global Expansion", desc: "Enterprise solutions for clients in EMEA, Europe & MENA." },
      { year: "2023", title: "The AI Shift", desc: "Applied LLMs, RAG systems, and AI-powered automation." },
      { year: "2024", title: "Giving Back", desc: "Launching 13+ Open Source tools for the global developer community." }
    ],
    values: [
      { title: "Engineering First", desc: "We are engineers, not just coders. Architecture, performance, and security are built-in.", icon: Cpu },
      { title: "Client Success", desc: "Your business goals drive our technical decisions. We ship what matters.", icon: Target },
      { title: "Open Source Contribution", desc: "We give back to the community with free, privacy-first tools.", icon: Eye },
      { title: "Falcon Vision", desc: "Precision in every pixel. We see what others miss.", icon: Zap }
    ],
    team: [
      { name: "Khalid", role: "Founder & Lead Architect", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
      { name: "Ahmed", role: "Senior Backend Eng", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300" },
      { name: "Ali", role: "Frontend Ninja", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
      { name: "Karim", role: "DevOps Master", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" }
    ]
  },
  process: {
    title: "The Lifecycle",
    steps: [
      { title: "Discovery", desc: "Technical feasibility & Specs." },
      { title: "Architecture", desc: "DB Schema & API Contracts." },
      { title: "Execution", desc: "Agile Sprints & Coding." },
      { title: "Deployment", desc: "Automated Testing & Release." }
    ]
  },
  contact: {
    title: "Project Inquiry",
    subtitle: "Submit your technical requirements.",
    form: {
      steps: ["Contact Info", "Project Scope", "Tech Needs", "Review"],
      fields: {
        name: "Full Name",
        email: "Work Email",
        company: "Organization",
        projectType: "Category",
        budget: "Budget Range",
        currency: "Currency",
        details: "Technical Specs",
        timeline: "Target Delivery"
      },
      types: ["Web App", "Mobile App", "AI Solution", "Cloud Migration", "Consultation"],
      currencies: ["USD", "EUR", "EGP", "AED"]
    },
    faq: [
      { q: "What's your engagement model?", a: "T&M for Agile projects, Fixed Price for well-defined scopes." },
      { q: "Do you provide source code ownership?", a: "Yes, upon final payment, you own 100% of the IP and source code." },
      { q: "What's your tech stack?", a: "We are tech-agnostic but prefer React/Node.js/Python/AWS ecosystems." },
      { q: "How do you handle data privacy?", a: "We sign NDAs and DPAs to ensure full compliance." }
    ]
  },
  legalPages: {
    "privacy-policy": {
      title: "Privacy Policy",
      lastUpdated: "January 14, 2024",
      content: "## 1. Introduction\n\nElsakr respects your privacy. This document outlines how we handle your data.\n\n## 2. Data Collection\n\nWe collect basic contact info to facilitate communication.\n\n## 3. Usage\n\nWe use your data solely for project execution and relevant updates.\n\n## 4. Security\n\nYour data is secured with industry-standard encryption."
    },
    "terms-of-service": {
      title: "Terms of Service",
      lastUpdated: "February 1, 2024",
      content: "## 1. Agreement\n\nBy using our site, you agree to these terms.\n\n## 2. IP Rights\n\nAll content on this site is owned by Elsakr."
    },
    "cookie-policy": {
      title: "Cookie Policy",
      lastUpdated: "January 14, 2024",
      content: "## 1. What are cookies\n\nSmall text files stored on your device.\n\n## 2. Usage\n\nWe use cookies to remember your preferences and language settings."
    },
    "sla": {
      title: "Service Level Agreement",
      lastUpdated: "March 10, 2024",
      content: "## 1. Commitment\n\nWe commit to 99.99% monthly uptime for our cloud services.\n\n## 2. Service Credits\n\nIf we fail to meet this SLA, you are eligible for service credits."
    }
  },
  footer: {
    tagline: "Building the Digital Future.",
    subscribe: {
      title: "Tech Newsletter",
      placeholder: "Enter email",
      button: "Subscribe"
    },
    columns: {
      solutions: {
        title: "Solutions",
        items: ["Web Architecture", "Mobile Dev", "AI & ML", "Cloud Ops", "App Security"]
      },
      company: {
        title: "Company",
        items: ["About Us", "Careers", "Partners", "Contact"]
      },
      legal: {
        title: "Legal",
        items: [
          { label: "Privacy", path: "/legal/privacy-policy" },
          { label: "Terms", path: "/legal/terms-of-service" },
          { label: "Cookies", path: "/legal/cookie-policy" },
          { label: "SLA", path: "/legal/sla" }
        ]
      }
    },
    rights: "© 2024 Elsakr. All rights reserved.",
    social: [
      { name: "Facebook", icon: Facebook, link: "https://www.facebook.com/people/Elsakr/61584979738922/" },
      { name: "WhatsApp", icon: Smartphone, link: "https://wa.me/201016495229" } 
    ]
  },
  freeToolsDesktop: [
    {
      id: "sqlite-browser",
      title: "Elsakr SQLite Browser",
      description: "A professional desktop tool to explore, query, and manage SQLite databases with a premium dark UI.",
      longDescription: "Manage your local databases with the elegance and power they deserve. Elsakr SQLite Browser redefines the database management experience with a stunning Premium Dark UI, designed to reduce eye strain during long coding sessions. It offers a lightweight yet robust environment to browse tables, execute complex SQL queries, and inspect database structures without the overhead of heavy IDEs. Whether you are a developer, data analyst, or student, this tool gives you complete control over your SQLite files with features like one-click export to Excel/CSV, safe row deletion, and instant schema viewing. Open source, privacy-focused, and built for performance.",
      features: [
        "Premium Dark Theme UI",
        "Browse & Edit Data (1000 row pagination)",
        "Execute Custom SQL Queries",
        "Safe Row Deletion (ROWID Based)",
        "View Table Structure & Schema",
        "Export to CSV & Excel",
        "Create & Open Database Files"
      ],
      useCases: [
        "Debugging mobile app databases",
        "Analyzing local datasets",
        "Quick SQL query testing",
        "Converting SQLite data to Excel"
      ],
      howToUse: [
        "Open an existing .db file or create a new one",
        "Select a table from the sidebar to browse data",
        "Use the 'Execute SQL' tab to run custom queries",
        "Export your results to CSV or Excel instantly"
      ],
      benefits: [
        "Lightweight & Fast",
        "No Setup Required (Portable)",
        "Visual Complexity Reduction",
        "100% Free & Open Source"
      ],
      keywords: ["sqlite browser", "sqlite editor", "database manager", "sql viewer", "dark mode sqlite"],
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
      description: "Split large CSVs into smaller files or merge multiple CSVs into one. Premium dark UI with progress tracking.",
      longDescription: "Working with massive CSV files or scattered datasets? Elsakr CSV Splitter & Merger is your data manipulation companion. Split a 100,000-row CSV into manageable chunks of 1,000 rows each, or combine dozens of CSVs into a single unified file. The tool features a premium dark UI, real-time progress tracking, and instant output summaries. Built for developers, data analysts, and anyone dealing with CSV data. 100% offline—your data never leaves your machine.",
      features: [
        "Split CSV by Row Count",
        "Merge Multiple CSVs",
        "Real-time Progress Bar",
        "Output Summary Display",
        "Premium Dark Theme",
        "100% Offline Processing"
      ],
      useCases: [
        "Breaking large datasets for processing",
        "Combining monthly reports",
        "Preparing data for uploads",
        "Splitting exports for email"
      ],
      howToUse: [
        "Select Split or Merge tab",
        "Choose input file(s)",
        "Set rows per file (Split) or output path (Merge)",
        "Click action button and monitor progress"
      ],
      benefits: [
        "Fast Processing",
        "No Row Limits",
        "Preserves Headers",
        "Zero Data Upload"
      ],
      keywords: ["csv splitter", "csv merger", "split csv", "combine csv", "data tools"],
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
      description: "Generate high-quality QR codes offline. Custom colors, logos, and batch processing.",
      longDescription: "The definitive desktop QR code solution. Generate codes for URLs, WiFi, Email, and SMS with total privacy. Features bulk processing from CSV/TXT, custom branding with logo overlays, and dark mode UI. Works 100% offline.",
      features: [
        "5 QR Types (URL, WiFi, ...)",
        "Batch Processing (CSV/TXT)",
        "Custom Colors & Logos",
        "Offline Privacy",
        "Dark Mode UI",
        "High Resolution Output"
      ],
      useCases: [
        "Business Cards",
        "Product Labels",
        "WiFi Sharing",
        "Bulk Generation"
      ],
      howToUse: [
        "Select QR Type",
        "Enter Data",
        "Customize Colors & Logo",
        "Generate & Save"
      ],
      benefits: [
        "No Internet Required",
        "Bulk Creation",
        "High Resolution Output",
        "Privacy First"
      ],
      keywords: ["qr generator", "offline qr", "desktop qr tool", "batch qr code"],
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
      description: "Generate all favicon sizes (ICO, PNG, Apple Touch Icon) from a single image. Premium dark UI with live preview.",
      longDescription: "Creating the perfect favicon for your website shouldn't be a tedious manual process. Our Favicon Generator takes a single high-resolution image and automatically generates all the sizes you need - from the classic 16x16 ICO file to Apple Touch Icons and Android icons. Built with Python and featuring a premium dark UI, this tool shows you real-time previews of how your favicon will look across different contexts. As part of our commitment to open source, this professional tool is completely free.",
      features: [
        "Generate ICO files with multiple sizes embedded",
        "Create Apple Touch Icons (180x180)",
        "Generate Android Chrome icons",
        "Live preview across all sizes",
        "Support for PNG, JPG, WebP input",
        "Professional dark-themed interface",
        "One-click batch export"
      ],
      useCases: [
        "Setting up favicons for new websites",
        "Updating branding across web properties",
        "Creating app icons for PWAs",
        "Generating icons for browser bookmarks"
      ],
      howToUse: [
        "Launch the application",
        "Click 'Select Image' and choose your source image",
        "Preview generated favicons in real-time",
        "Click 'Export All' to save all sizes"
      ],
      benefits: [
        "All sizes in one click",
        "No need for Photoshop or online tools",
        "Works offline - complete privacy",
        "Open source and free forever"
      ],
      keywords: ["favicon generator", "ico generator", "apple touch icon", "website favicon", "browser icon"],
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
      description: "Batch convert images between PNG, JPEG, WebP, BMP, TIFF, GIF, ICO. Quality control & statistics tracking.",
      longDescription: "Working with images often means dealing with format compatibility. Our Image Converter solves this by letting you batch convert between all major image formats with full control over quality settings. Track conversion statistics, maintain folder structure, and process hundreds of images in seconds. Whether you're preparing assets for web, print, or archival, this tool handles it all. Built with Python and released under open source - because format conversion should be free.",
      features: [
        "Convert between PNG, JPEG, WebP, BMP, TIFF, GIF, ICO",
        "Batch processing - convert entire folders",
        "Quality slider for lossy formats",
        "Maintain folder structure option",
        "Conversion statistics and logging",
        "Drag-and-drop interface",
        "Progress tracking for large batches"
      ],
      useCases: [
        "Converting product images for e-commerce",
        "Preparing images for web optimization",
        "Converting legacy formats to modern WebP",
        "Batch converting screenshots"
      ],
      howToUse: [
        "Open the application",
        "Drag and drop files or select a folder",
        "Choose output format and quality",
        "Click Convert and watch the progress"
      ],
      benefits: [
        "Process hundreds of images at once",
        "Full control over output quality",
        "Preserves original files",
        "No subscription or account needed"
      ],
      keywords: ["image converter", "batch image converter", "png to webp", "format converter", "bulk image conversion"],
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
      description: "Secure password manager: generate, analyze & store passwords with AES-256 encryption. Premium dark UI.",
      longDescription: "Your passwords deserve military-grade protection. Our Password Vault uses AES-256 encryption to securely store all your credentials locally on your device. Generate cryptographically secure passwords, analyze their strength in real-time, and organize them with categories and tags. Unlike cloud-based managers, your data never leaves your computer. Built with security as the #1 priority and released as open source so security experts can verify our implementation.",
      features: [
        "AES-256 encryption for all stored data",
        "Secure password generator",
        "Password strength analyzer",
        "Category and tag organization",
        "Search and filter capabilities",
        "Master password protection",
        "Auto-lock on inactivity",
        "Export/import encrypted backups"
      ],
      useCases: [
        "Storing website login credentials",
        "Managing API keys and tokens",
        "Generating secure passwords for new accounts",
        "Keeping sensitive notes encrypted"
      ],
      howToUse: [
        "Launch and create a master password",
        "Add entries with username, password, and notes",
        "Use the generator for new secure passwords",
        "Search or browse to find saved credentials"
      ],
      benefits: [
        "Military-grade AES-256 encryption",
        "100% offline - no cloud sync worries",
        "Open source for transparency",
        "Free forever"
      ],
      keywords: ["password manager", "password vault", "aes encryption", "secure password generator", "offline password manager"],
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
      description: "Scan ports and kill processes using them. Multi-threaded scanner, quick kill buttons, view all listening ports.",
      longDescription: "Every developer has experienced the frustration of 'port already in use' errors. Our Port Scanner & Killer gives you instant visibility into what's using your system's ports and the power to free them with a single click. Multi-threaded scanning means you get results fast, and the clean interface makes it easy to find and terminate rogue processes. Essential for developers running multiple services locally. Open source and free.",
      features: [
        "Multi-threaded port scanning",
        "View all listening ports instantly",
        "One-click process termination",
        "Filter by port range",
        "Show process name and PID",
        "Export results to file",
        "Real-time port monitoring"
      ],
      useCases: [
        "Freeing ports blocked by crashed processes",
        "Debugging port conflicts in development",
        "Security auditing of open ports",
        "Monitoring services by port"
      ],
      howToUse: [
        "Launch the application",
        "Click 'Scan All Ports' or specify a range",
        "View results showing port, PID, and process name",
        "Click 'Kill' next to any process to terminate it"
      ],
      benefits: [
        "Instant solution to port conflicts",
        "Faster than command-line alternatives",
        "No admin knowledge required",
        "Works on all Windows versions"
      ],
      keywords: ["port scanner", "kill process", "port conflict", "netstat gui", "developer tools", "port monitor"],
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
      description: "TinyPNG-style compression for PNG, JPEG, WebP. Lossy PNG quantization, batch processing, quality control.",
      longDescription: "Large images slow down websites and eat storage. Our desktop Image Compressor uses the same lossy PNG quantization technique as TinyPNG to dramatically reduce file sizes while maintaining visual quality. Batch process entire folders, control quality levels precisely, and keep your files private since everything runs locally on your machine. Perfect for web developers and designers who work with images daily.",
      features: [
        "TinyPNG-style lossy compression",
        "Support for PNG, JPEG, WebP",
        "Batch processing for folders",
        "Quality slider (1-100%)",
        "Before/after comparison",
        "Size reduction statistics",
        "Preserve metadata option"
      ],
      useCases: [
        "Optimizing website assets",
        "Reducing storage usage for photo archives",
        "Preparing images for email attachments",
        "Compressing screenshots for documentation"
      ],
      howToUse: [
        "Open the application",
        "Drag and drop images or folders",
        "Adjust quality slider as needed",
        "Click Compress and review results"
      ],
      benefits: [
        "Reduce file sizes by 60-80%",
        "Complete privacy - offline processing",
        "Batch process entire projects",
        "Professional results for free"
      ],
      keywords: ["image compressor", "png compressor", "tinypng alternative", "batch compression", "lossy png"],
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
      title: "WhatsApp API GUI Checker",
      description: "High-speed API-based WhatsApp number filter with a user-friendly graphical interface.",
      longDescription: "Filter WhatsApp numbers at lightning speed with our API-based checker. This GUI version offers a user-friendly interface for validating large lists of phone numbers, identifying which ones are registered on WhatsApp. Using direct API calls, it achieves much higher speed than browser-based alternatives. Essential for businesses managing contact lists, marketing campaigns, or customer databases. Requires an API key but delivers unmatched performance.",
      features: [
        "High-speed API-based checking",
        "User-friendly graphical interface",
        "Batch import from TXT/CSV files",
        "Export valid/invalid numbers separately",
        "Progress tracking and statistics",
        "Pause/resume functionality",
        "Multiple workers for faster processing",
        "Error handling and retry logic"
      ],
      useCases: [
        "Validating customer phone databases",
        "Cleaning marketing contact lists",
        "Verifying leads before outreach",
        "Building verified contact lists"
      ],
      howToUse: [
        "Enter your API key in settings",
        "Import your phone numbers list",
        "Click Start to begin checking",
        "Export results when complete"
      ],
      benefits: [
        "Fastest checking method available",
        "Clean graphical interface",
        "Handle millions of numbers",
        "Detailed statistics and reporting"
      ],
      keywords: ["whatsapp checker", "phone number validator", "whatsapp api", "number filter", "bulk whatsapp check"],
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
      title: "WhatsApp API Terminal Checker",
      description: "Lightweight, command-line based API filter for maximum performance and low resource usage.",
      longDescription: "For power users who prefer the command line, our Terminal API Checker delivers maximum performance with minimal resource usage. Run it on servers, integrate into scripts, or process massive lists overnight. The same powerful API-based checking as the GUI version, but optimized for automation and headless environments. Output to files, pipe to other tools, or watch results stream in real-time.",
      features: [
        "Lightning-fast API checking",
        "Minimal resource footprint",
        "Scriptable and pipeable",
        "Run on servers/headless systems",
        "Output to file or stdout",
        "Configurable concurrency",
        "Resume interrupted sessions",
        "Colorized terminal output"
      ],
      useCases: [
        "Automated number validation pipelines",
        "Server-side batch processing",
        "Integration with other tools",
        "Processing massive datasets overnight"
      ],
      howToUse: [
        "Set your API key as environment variable or in config",
        "Run with: checker --input numbers.txt --output valid.txt",
        "Monitor progress in terminal",
        "Results saved to output file"
      ],
      benefits: [
        "Maximum speed and efficiency",
        "Perfect for automation",
        "Runs on any system with Python",
        "Minimal dependencies"
      ],
      keywords: ["whatsapp cli", "terminal checker", "command line whatsapp", "batch number check", "headless checker"],
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
      title: "WhatsApp Free (Playwright) GUI",
      description: "Browser-automation based checker with GUI. No API keys required, simulates real user behavior.",
      longDescription: "No API key? No problem. Our Playwright-based checker uses browser automation to validate WhatsApp numbers by simulating real user interactions. The graphical interface makes it easy to use while the underlying Playwright engine handles the complexity. Slower than API checking but completely free with no external dependencies. Perfect for smaller lists or when API access isn't available.",
      features: [
        "No API key required",
        "Graphical user interface",
        "Browser automation with Playwright",
        "Simulates real user behavior",
        "Import/export number lists",
        "Visual progress tracking",
        "Screenshot on errors for debugging",
        "Configurable check interval"
      ],
      useCases: [
        "Small to medium number validation",
        "When API access isn't available",
        "Testing and development",
        "One-time contact list cleaning"
      ],
      howToUse: [
        "Launch the application",
        "Log into WhatsApp Web when prompted",
        "Import your phone numbers list",
        "Start checking and monitor progress"
      ],
      benefits: [
        "Completely free - no API costs",
        "Human-like behavior avoids detection",
        "Visual feedback and progress",
        "Easy to use interface"
      ],
      keywords: ["free whatsapp checker", "playwright automation", "whatsapp web checker", "no api checker", "browser automation"],
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
      title: "WhatsApp Free (Playwright) Terminal",
      description: "Headless browser automation for filtering numbers via terminal. Effective and stealthy.",
      longDescription: "The terminal version of our free Playwright checker runs headless for efficiency and stealth. Perfect for running on servers or in the background while you work. Uses the same browser automation techniques as the GUI version but optimized for command-line workflows. Integrate into scripts, schedule overnight runs, or process numbers while away from your desk. No API needed, completely free.",
      features: [
        "Headless browser automation",
        "Command-line interface",
        "No API key required",
        "Runs on servers/headless systems",
        "Stealth mode to avoid detection",
        "Session persistence",
        "Configurable delays",
        "Output to file or stdout"
      ],
      useCases: [
        "Automated checking pipelines",
        "Running on remote servers",
        "Overnight batch processing",
        "Integration with other tools"
      ],
      howToUse: [
        "Run the initial setup to login to WhatsApp Web",
        "Session is saved for future runs",
        "Run checker with your number list",
        "Results output to file"
      ],
      benefits: [
        "Works without API costs",
        "Runs in background/headless",
        "Stealth mode for reliability",
        "Perfect for automation"
      ],
      keywords: ["headless whatsapp checker", "terminal automation", "playwright cli", "stealth checker", "server whatsapp check"],
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
      title: "QR Code Generator",
      description: "Create custom QR codes instantly in your browser. No uploads, no tracking. 5 types supported.",
      longDescription: "Generate stunning QR codes directly in your browser without ever sending data to a server. This privacy-first tool supports URL, Text, WiFi, Email, and SMS formats. Customize foreground and background colors, embed your brand logo, and download as high-quality PNG or SVG files. It's the secure, fast, and free way to create professional QR codes on the fly.",
      features: [
        "Client-side Generation (Zero Data Upload)",
        "5 QR Types: URL, Text, WiFi, Email, SMS",
        "Custom Foreground & Background Colors",
        "Logo Integration Support",
        "SVG & PNG Export",
        "No Tracking / No Cookies"
      ],
      useCases: [
        "Quick Website Link Sharing",
        "Instant WiFi Access Codes",
        "Contact Information Sharing",
        "Marketing Materials"
      ],
      howToUse: [
        "Choose QR Type from tabs",
        "Input Content (URL, Text, etc.)",
        "Customize Colors & Add Logo",
        "Download as PNG or SVG"
      ],
      benefits: [
        "Zero Latency",
        "100% Privacy",
        "Free Forever",
        "Works Offline"
      ],
      keywords: ["web qr generator", "online qr code", "free qr tool", "privacy qr", "no data collection"],
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
      description: "TinyPNG alternative - compress images 100% in your browser. No uploads, complete privacy. Supports PNG, JPEG, WebP.",
      longDescription: "At Elsakr, we believe in the power of open source. That's why we built this browser-based image compressor that processes everything locally on your device. Unlike cloud services like TinyPNG, your images never leave your computer - ensuring complete privacy and security. Using advanced Canvas API compression algorithms, you can reduce file sizes by up to 80% while maintaining excellent visual quality. Perfect for web developers, designers, and anyone who needs to optimize images for the web without compromising on privacy.",
      features: [
        "100% client-side processing - images never leave your browser",
        "Support for PNG, JPEG, and WebP formats",
        "Adjustable quality settings (1-100%)",
        "Batch processing - compress multiple images at once",
        "Download all as ZIP file",
        "Real-time compression statistics",
        "Dark-themed premium UI"
      ],
      useCases: [
        "Optimizing website images for faster load times",
        "Reducing email attachment sizes",
        "Preparing images for social media",
        "Compressing screenshots and documentation images"
      ],
      howToUse: [
        "Drag and drop images or click to select files",
        "Adjust quality slider to your preference",
        "Preview compressed results instantly",
        "Download individual files or all as ZIP"
      ],
      benefits: [
        "Complete privacy - no server uploads",
        "Fast processing on modern browsers",
        "Free and open source forever",
        "No account or signup required"
      ],
      keywords: ["image compressor", "png compressor", "jpeg optimizer", "tinypng alternative", "free image compression", "privacy-first"],
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
      description: "Create beautiful CSS gradients with live preview. Linear, radial, conic. Copy CSS, Tailwind, or SCSS code instantly.",
      longDescription: "Beautiful gradients are at the heart of modern web design, and we believe every developer should have free access to professional-grade design tools. Our CSS Gradient Generator lets you create stunning linear, radial, and conic gradients with real-time preview. Export your creations in pure CSS, Tailwind classes, or SCSS variables. With our intuitive color stop editor, you can craft the perfect gradient in seconds. This is open source at its finest - no restrictions, no watermarks, just pure creative freedom.",
      features: [
        "Linear, radial, and conic gradient support",
        "Unlimited color stops with drag positioning",
        "Real-time live preview",
        "Export as CSS, Tailwind, or SCSS",
        "Angle control for linear gradients",
        "Position control for radial gradients",
        "Beautiful preset gradients library",
        "One-click copy to clipboard"
      ],
      useCases: [
        "Creating hero section backgrounds",
        "Designing button hover effects",
        "Building gradient text effects",
        "Crafting overlay effects for images"
      ],
      howToUse: [
        "Choose gradient type (linear, radial, conic)",
        "Add and position color stops",
        "Adjust angle or position as needed",
        "Copy generated code in your preferred format"
      ],
      benefits: [
        "Save hours of manual CSS tweaking",
        "Consistent output across all browsers",
        "No design skills required",
        "Works entirely offline"
      ],
      keywords: ["css gradient generator", "gradient maker", "tailwind gradient", "css background generator", "web design tool"],
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
      description: "5 tools in one: Color Palette, Box Shadow, Border Radius, Glassmorphism, and Animation generators.",
      longDescription: "Why install five different tools when you can have them all in one powerful toolkit? The Elsakr CSS Design Toolkit combines the most essential CSS design generators into a single, beautifully crafted application. From harmonious color palettes using color theory to trendy glassmorphism effects, from complex border radius combinations to smooth CSS animations - everything you need is just a tab away. As part of our commitment to the open source community, this toolkit is completely free and runs entirely in your browser.",
      features: [
        "Color Palette Generator with 6 harmony types",
        "Box Shadow Generator with layered shadows",
        "Border Radius Generator with individual corners",
        "Glassmorphism Generator with blur effects",
        "CSS Animation Generator with 6 presets",
        "Live preview for all tools",
        "One-click code copying",
        "Responsive dark-themed UI"
      ],
      useCases: [
        "Designing consistent color schemes for projects",
        "Creating depth with box shadows",
        "Building modern glassmorphic interfaces",
        "Adding micro-animations to UI elements"
      ],
      howToUse: [
        "Select the tool you need from the tabs",
        "Adjust controls and see live preview",
        "Copy the generated CSS code",
        "Paste into your project"
      ],
      benefits: [
        "5 essential tools in one place",
        "Saves time switching between tools",
        "Consistent design language",
        "Learn CSS while using visual controls"
      ],
      keywords: ["css toolkit", "color palette generator", "box shadow generator", "glassmorphism", "css animation generator", "border radius"],
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
      description: "7 tools in one: Meta Tags, Open Graph, Schema.org, Robots.txt, Sitemap, URL Slug, Social Preview.",
      longDescription: "Search engine optimization shouldn't require expensive tools or technical expertise. Our SEO Toolkit puts seven essential SEO tools at your fingertips, completely free. Generate perfect meta tags, create Open Graph and Twitter Card markup, build Schema.org structured data for rich snippets, configure your robots.txt, generate XML sitemaps, create SEO-friendly URL slugs, and preview how your links will appear on social media. This is our gift to the web development community - professional SEO tools that anyone can use.",
      features: [
        "Meta Tags Generator with character counters",
        "Open Graph + Twitter Cards generator",
        "Schema.org JSON-LD for 6 types",
        "Robots.txt builder with common rules",
        "XML Sitemap generator",
        "SEO-friendly URL Slug generator",
        "Facebook & Twitter social preview",
        "All code is copy-ready"
      ],
      useCases: [
        "Setting up SEO for new websites",
        "Improving existing site search rankings",
        "Ensuring consistent social media sharing",
        "Building rich snippets for search results"
      ],
      howToUse: [
        "Select the SEO tool you need",
        "Fill in the required fields",
        "Preview generated code in real-time",
        "Copy and paste into your website"
      ],
      benefits: [
        "7 tools replace multiple paid services",
        "Follows latest SEO best practices",
        "Works with any website or CMS",
        "No technical knowledge required"
      ],
      keywords: ["seo tools", "meta tags generator", "open graph generator", "schema.org generator", "sitemap generator", "free seo tools"],
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
