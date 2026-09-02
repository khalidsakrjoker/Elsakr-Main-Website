#!/usr/bin/env node
/**
 * Splits large freeToolsDesktop arrays into chunks under 300 LOC.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function splitDesktopTools(lang) {
  const filePath = path.join(root, 'content', lang, 'tools', 'freeToolsDesktop.ts');
  let text = fs.readFileSync(filePath, 'utf8');
  text = text.replace(/^import[\s\S]*?from 'lucide-react';\n\n/, '');
  const arrayBody = text.replace(/^export const freeToolsDesktop = \[/, '').replace(/\];\s*$/, '');

  const tools = [];
  let depth = 0;
  let current = '';
  for (const char of arrayBody) {
    current += char;
    if (char === '{') depth++;
    if (char === '}') {
      depth--;
      if (depth === 0 && current.trim()) {
        const tool = current.trim().replace(/^,\s*/, '').replace(/,\s*$/, '');
        if (tool) tools.push(tool);
        current = '';
      }
    }
  }

  const midpoint = Math.ceil(tools.length / 2);
  const chunks = [tools.slice(0, midpoint), tools.slice(midpoint)];

  chunks.forEach((chunk, i) => {
    const chunkPath = path.join(root, 'content', lang, 'tools', `freeToolsDesktopPart${i + 1}.ts`);
    fs.writeFileSync(
      chunkPath,
      `export const freeToolsDesktopPart${i + 1} = [\n${chunk.join(',\n')}\n];\n`
    );
  });

  fs.writeFileSync(
    filePath,
    `import { freeToolsDesktopPart1 } from './freeToolsDesktopPart1';
import { freeToolsDesktopPart2 } from './freeToolsDesktopPart2';

export const freeToolsDesktop = [...freeToolsDesktopPart1, ...freeToolsDesktopPart2];
`
  );

  console.log(`Split ${lang} freeToolsDesktop into ${chunks.length} parts (${tools.length} tools)`);
}

splitDesktopTools('en');
splitDesktopTools('ar');
