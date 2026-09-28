# Contributing

Thanks for helping improve Elsakr's public site. Keep changes small, testable, and solo-author clean (no Cursor co-author trailers).

## Setup

```bash
npm ci
npm run verify
```

## Workflow

1. Create a focused branch or work on `main` with one logical change per commit.
2. Prefer `feat|fix|test|docs|refactor:` commit prefixes.
3. Pair behavior changes with tests under `__tests__` when practical.
4. Run `npm run verify` before pushing (lint, typecheck, coverage, build).
5. Do not squash a sprint of work into a single mega-commit.

## Content & i18n

- Keep English and Arabic content modules in sync (`content/en`, `content/ar`).
- Prefer `brand.shortName` for chrome; full `brand.name` for SEO.

## Pull requests

- Describe the why, not only the what.
- Link related issues if any.
- Confirm CI is green.
