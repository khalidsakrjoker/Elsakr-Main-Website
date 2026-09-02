import { Globe, Zap, Search, Wifi, Smartphone, Layout, Cpu, Award, Clock, BarChart3, Users, Shield, Fingerprint, CheckCircle, Eye, Cloud, BarChart, Database, PenTool, Box, Briefcase } from 'lucide-react';

export const services = {
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
  };
