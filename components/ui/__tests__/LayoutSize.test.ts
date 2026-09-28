import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('Layout size budget', () => {
  it('keeps Layout.tsx under 200 lines after nav extractions', () => {
    const source = readFileSync(resolve(process.cwd(), 'components/ui/Layout.tsx'), 'utf8');
    const lineCount = source.split('\n').length;
    expect(lineCount).toBeLessThan(200);
  });
});
