#!/usr/bin/env node
/**
 * Splits content/en.ts and content/ar.ts into modular files under content/en/ and content/ar/.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SECTIONS = [
  { key: 'brand', start: 5, end: 10 },
  { key: 'nav', start: 11, end: 16 },
  { key: 'hero', start: 17, end: 22 },
  { key: 'stats', start: 23, end: 28 },
  { key: 'techStack', start: 29, end: 42 },
  { key: 'clients', start: 43, end: 65 },
  { key: 'partnersTitle', start: 66, end: 66, scalar: true },
  { key: 'services', start: 67, end: 235 },
  { key: 'projects', start: 236, end: 261 },
  { key: 'testimonials', start: 262, end: 281 },
  { key: 'about', start: 282, end: 304 },
  { key: 'process', start: 305, end: 313 },
  { key: 'contact', start: 314, end: 338 },
  { key: 'legalPages', start: 339, end: 360 },
  { key: 'footer', start: 361, end: 392 },
  { key: 'freeToolsDesktop', start: 393, end: 927, tools: true },
  { key: 'freeToolsWeb', start: 928, end: 1153, tools: true },
];

const LUCIDE_ICONS = [
  'Code', 'Cpu', 'Globe', 'Shield', 'Zap', 'CheckCircle', 'Smartphone', 'Server',
  'Database', 'Layers', 'Eye', 'Users', 'Briefcase', 'Clock', 'Award', 'PenTool',
  'BarChart', 'Cloud', 'Target', 'Search', 'Wifi', 'Layout', 'Box', 'Fingerprint',
  'BarChart3', 'Facebook',
];

function extractIconsFromText(text) {
  const icons = new Set();
  for (const match of text.matchAll(/icon:\s*(\w+)/g)) {
    if (LUCIDE_ICONS.includes(match[1])) {
      icons.add(match[1]);
    }
  }
  return [...icons];
}

function splitLang(lang) {
  const srcPath = path.join(root, 'content', `${lang}.ts`);
  const lines = fs.readFileSync(srcPath, 'utf8').split('\n');
  const outDir = path.join(root, 'content', lang);
  fs.mkdirSync(path.join(outDir, 'tools'), { recursive: true });

  for (const section of SECTIONS) {
    const sectionLines = lines.slice(section.start - 1, section.end);
    let body;

    if (section.scalar) {
      body = sectionLines[0].replace(/^  \w+:\s*/, '');
    } else if (section.tools) {
      body = sectionLines.join('\n').replace(/^  \w+:\s*/, '');
    } else {
      body = sectionLines.join('\n').replace(/^  \w+:\s*/, '');
      body = body.trim().replace(/,\s*$/, '');
    }

    const icons = extractIconsFromText(body);
    const importBlock =
      icons.length > 0
        ? `import { ${icons.join(', ')} } from 'lucide-react';\n\n`
        : '';

    const exportName = section.key;
    const fileContent =
      section.scalar
        ? `${importBlock}export const ${exportName} = ${body};\n`
        : section.tools
          ? `${importBlock}export const ${exportName} = ${body};\n`
          : `${importBlock}export const ${exportName} = ${body};\n`;

    const fileName = section.tools
      ? path.join('tools', `${exportName}.ts`)
      : `${exportName}.ts`;

    fs.writeFileSync(path.join(outDir, fileName), fileContent);
  }

  const indexContent = `import type { SiteContent } from '../../lib/types';
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
`;

  fs.writeFileSync(path.join(outDir, 'index.ts'), indexContent);
  console.log(`Split ${lang} into ${outDir}`);
}

splitLang('en');
splitLang('ar');
