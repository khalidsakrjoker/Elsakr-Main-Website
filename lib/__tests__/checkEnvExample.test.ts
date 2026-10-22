import { describe, it, expect } from 'vitest';
import {
  parseEnvExample,
  verifyEnvExample,
  BUILTIN_IGNORED_VARS,
} from '../../scripts/check-env-example.mjs';

describe('check-env-example', () => {
  it('parses valid environment variable keys while ignoring comments and blank lines', () => {
    const sample = `
# This is a comment
FOO=
BAR=123

# Another comment
BAZ_QUX=hello world
`;
    const parsed = parseEnvExample(sample);
    expect(parsed.has('FOO')).toBe(true);
    expect(parsed.has('BAR')).toBe(true);
    expect(parsed.has('BAZ_QUX')).toBe(true);
    expect(parsed.has('This')).toBe(false);
    expect(parsed.size).toBe(3);
  });

  it('includes standard built-in runtime variables in BUILTIN_IGNORED_VARS', () => {
    expect(BUILTIN_IGNORED_VARS.has('NODE_ENV')).toBe(true);
    expect(BUILTIN_IGNORED_VARS.has('MODE')).toBe(true);
    expect(BUILTIN_IGNORED_VARS.has('BASE_URL')).toBe(true);
  });

  it('verifies that the current repository has no missing variables in .env.example', () => {
    const result = verifyEnvExample();
    expect(result.missing).toEqual([]);
    expect(result.declared).toContain('SITEMAP_LASTMOD');
    expect(result.declared).toContain('VITE_WHATSAPP_NUMBER');
    expect(result.declared).toContain('GEMINI_API_KEY');
    expect(result.declared).toContain('API_KEY');
    expect(result.referenced).toContain('SITEMAP_LASTMOD');
  });
});
