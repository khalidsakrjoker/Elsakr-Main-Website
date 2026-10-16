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
- Free-tools catalogs validate against `content/shared/toolsSchema.ts` where wired (Part1 desktop today).

## Maintenance & review

This repository is currently maintained solo. Bus-factor mitigation:

1. **Verify gate:** every change must pass `npm run verify` (lint, typecheck, coverage thresholds, production build) before merge.
2. **CODEOWNERS:** module ownership for `lib/`, `content/`, `pages/`, and `components/` is declared in [`CODEOWNERS`](CODEOWNERS). Request review from listed owners on PRs that touch those paths.
3. **Second maintainer onboarding:** a future collaborator should (a) fork or get write access, (b) run `npm ci && npm run verify` on a clean clone, (c) land one small PR with its tests under their own Git identity, (d) follow conventional commits and this file.
4. **PR expectation:** describe why, link issues when relevant, and wait for green CI before merging.

## Pull requests

- Describe the why, not only the what.
- Link related issues if any.
- Confirm CI is green.
