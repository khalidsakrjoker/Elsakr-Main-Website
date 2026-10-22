/**
 * Scans the codebase for environment variable references (process.env.*, import.meta.env.*, env.*)
 * and verifies that every referenced variable is documented in .env.example.
 *
 * Exits with status 1 if any referenced variable is missing from .env.example.
 *
 *   node scripts/check-env-example.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Standard runtime / Vite / Node built-in environment variables that are not custom app config. */
export const BUILTIN_IGNORED_VARS = new Set([
  'NODE_ENV',
  'MODE',
  'BASE_URL',
  'PROD',
  'DEV',
  'SSR',
]);

const IGNORED_DIRS = new Set([
  '.git',
  '.github',
  'node_modules',
  'dist',
  'coverage',
  'plans',
  'elsakr-UPLOAD-THIS',
  '.cache',
  'build',
]);

/**
 * Extract variable names declared in .env.example.
 * Lines like `VAR_NAME=` or `VAR_NAME=value` are matched; comments (#) and blanks are ignored.
 */
export function parseEnvExample(content) {
  const vars = new Set();
  const lines = content.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^([A-Za-z0-9_]+)=/);
    if (match) {
      vars.add(match[1]);
    }
  }
  return vars;
}

/**
 * Recursively find all source and script files to inspect.
 */
export function getSourceFiles(dir, ignoreDirs = IGNORED_DIRS) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!ignoreDirs.has(entry.name)) {
        files.push(...getSourceFiles(path.join(dir, entry.name), ignoreDirs));
      }
    } else if (/\.(ts|tsx|js|mjs|jsx)$/.test(entry.name)) {
      files.push(path.join(dir, entry.name));
    }
  }

  return files;
}

/**
 * Scan source files and return a map of referenced env variables to their occurrences (relative file paths).
 */
export function findReferencedEnvVars(rootDir = ROOT) {
  const allFiles = getSourceFiles(rootDir);
  const selfPath = fileURLToPath(import.meta.url);
  const occurrences = new Map();

  // Strip comments to avoid matching words in documentation comments (e.g. .env.example)
  const stripComments = (str) =>
    str.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

  const pEnvRegex = /process\.env\.([A-Z][A-Z0-9_]+)/g;
  const mEnvRegex = /import\.meta\.env\.([A-Z][A-Z0-9_]+)/g;
  const loadEnvRegex = /\benv\.([A-Z][A-Z0-9_]+)/g;

  for (const file of allFiles) {
    // Skip self and unit test files to avoid false positives on mock patterns
    if (path.resolve(file) === selfPath || file.includes('__tests__') || file.includes('.test.')) {
      continue;
    }

    const rawContent = fs.readFileSync(file, 'utf8');
    const content = stripComments(rawContent);
    const relative = path.relative(rootDir, file).replace(/\\/g, '/');

    const record = (varName) => {
      if (BUILTIN_IGNORED_VARS.has(varName)) return;
      if (!occurrences.has(varName)) {
        occurrences.set(varName, new Set());
      }
      occurrences.get(varName).add(relative);
    };

    let match;
    while ((match = pEnvRegex.exec(content)) !== null) record(match[1]);
    while ((match = mEnvRegex.exec(content)) !== null) record(match[1]);
    if (file.endsWith('vite.config.ts')) {
      while ((match = loadEnvRegex.exec(content)) !== null) record(match[1]);
    }
  }

  return occurrences;
}

/**
 * Compare declared variables in .env.example against referenced variables in the codebase.
 */
export function verifyEnvExample(rootDir = ROOT) {
  const envExamplePath = path.join(rootDir, '.env.example');
  if (!fs.existsSync(envExamplePath)) {
    throw new Error(`.env.example file not found at ${envExamplePath}`);
  }

  const envContent = fs.readFileSync(envExamplePath, 'utf8');
  const declared = parseEnvExample(envContent);
  const referencedOccurrences = findReferencedEnvVars(rootDir);

  const missing = [];
  for (const [varName, files] of referencedOccurrences.entries()) {
    if (!declared.has(varName)) {
      missing.push({ varName, files: Array.from(files) });
    }
  }

  return {
    declared: Array.from(declared),
    referenced: Array.from(referencedOccurrences.keys()),
    missing,
  };
}

export function runCli() {
  try {
    const { declared, referenced, missing } = verifyEnvExample(ROOT);

    if (missing.length > 0) {
      console.error('\n❌ Error: The following environment variables are read in code but missing from .env.example:\n');
      for (const item of missing) {
        console.error(`  - ${item.varName}`);
        console.error(`    Used in: ${item.files.join(', ')}`);
      }
      console.error('\nPlease document all environment variables in .env.example with descriptive comments.\n');
      process.exit(1);
    }

    console.log(
      `✔ Environment documentation check passed: all ${referenced.length} referenced variables are documented in .env.example (${declared.length} declared).`
    );
  } catch (error) {
    console.error('❌ Failed to verify .env.example:', error);
    process.exit(1);
  }
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(currentFile)) {
  runCli();
}
