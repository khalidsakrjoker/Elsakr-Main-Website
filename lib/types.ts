import type { LucideIcon } from 'lucide-react';

export interface ToolLinks {
  exe?: string;
  source?: string;
  github?: string;
  live?: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  useCases?: string[];
  howToUse?: string[];
  benefits?: string[];
  keywords?: string[];
  category?: string;
  version?: string;
  releaseDate?: string;
  image?: string;
  links: ToolLinks;
  tags?: string[];
}

export interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  category?: string;
}

export interface Client {
  name: string;
  logo: string;
  logoDark?: string;
  logoLight?: string;
  link: string;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  details: {
    tagline: string;
    longDescription: string;
    benefits: ServiceBenefit[];
    capabilities: string[];
    tech: string[];
  };
}

export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
    description: string;
    email: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    learnMore: string;
  };
  stats: { label: string; value: string }[];
  techStack: { name: string; icon: LucideIcon }[];
  clients: Client[];
  partnersTitle: string;
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
    models: { icon: LucideIcon; title: string; price: string; desc: string }[];
  };
  projects: Project[];
  testimonials: { quote: string; author: string; role: string; image: string }[];
  about: {
    title: string;
    mission: string;
    story: string;
    timeline: { year: string; title: string; desc: string }[];
    values: { title: string; desc: string; icon: LucideIcon }[];
    team: { name: string; role: string; image: string }[];
  };
  process: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      steps: string[];
      fields: Record<string, string>;
      types: string[];
      currencies: string[];
    };
    faq: { q: string; a: string }[];
  };
  legalPages: Record<string, { title: string; lastUpdated: string; content: string }>;
  footer: {
    tagline: string;
    subscribe: { title: string; placeholder: string; button: string };
    columns: {
      solutions: { title: string; items: string[] };
      company: { title: string; items: string[] };
      legal: { title: string; items: { label: string; path: string }[] };
    };
    rights: string;
    social: { name: string; icon: LucideIcon; link: string }[];
  };
  freeToolsDesktop: Tool[];
  freeToolsWeb: Tool[];
}

export interface ContentWithTools {
  freeToolsDesktop?: Tool[];
  freeToolsWeb?: Tool[];
  projects?: Project[];
}
