import type { SiteContent } from '../../lib/types';
import { brand } from './brand';
import { nav } from './nav';
import { hero } from './hero';
import { stats } from './stats';
import { techStack } from './techStack';
import { clients } from './clients';
import { partnersTitle } from './partnersTitle';
import { services } from './services';
import { projects } from './projects';
import { testimonials } from './testimonials';
import { about } from './about';
import { process } from './process';
import { contact } from './contact';
import { legalPages } from './legalPages';
import { footer } from './footer';
import { freeToolsDesktop } from './tools/freeToolsDesktop';
import { freeToolsWeb } from './tools/freeToolsWeb';

export const content = {
  brand,
  nav,
  hero,
  stats,
  techStack,
  clients,
  partnersTitle,
  services,
  projects,
  testimonials,
  about,
  process,
  contact,
  legalPages,
  footer,
  freeToolsDesktop,
  freeToolsWeb,
} satisfies SiteContent;
