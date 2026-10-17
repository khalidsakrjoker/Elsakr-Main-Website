# Changelog

All notable changes to this project are documented in this file.

## [1.4.0] - 2026-10

GEO authority, discovery, and performance close-out (roadmap Nov 16–30 work landed with the indexability stack).

### Added
- Insights RSS (`public/insights.xml`), related-content graph, Web Vitals observers, and initial JS bundle budget helpers.
- Crawl-audit / SEO-audit / discovery-file tests; Search Console checklist in `docs/SEARCH_INDEXING.md`.
- Verifiable source blocks on case studies; service FAQs with FAQPage JSON-LD; Contact LocalBusiness schema (Egypt / EMEA, no fabricated street address).

### Changed
- Navigation exposes Case Studies, Insights, Industries, and FAQ hubs (desktop, mobile, footer).

## [1.3.1] - 2026-10

Content people actually search for (roadmap Nov 1–15).

### Added
- Bilingual case studies (Kashx, Sajda), industries hub, and Insights articles with Article / FAQ / Person schemas.
- Service landing FAQs and cross-links into case studies and industries.

## [1.3.0] - 2026-10

Indexability foundation (roadmap Oct 18–31).

### Added
- English-root + Arabic `/ar` URL architecture, typed route manifest, locale-aware links and language switcher.
- Build-time React SSG/prerender (`entry-server.tsx`, `scripts/prerender.mjs`) emitting Helmet title/meta/schema into route HTML.
- Manifest-driven sitemap with EN/AR/`x-default` alternates; `llms.txt`; refreshed robots rules for search and AI crawlers.
- BreadcrumbList, Service, Article, FAQPage, Person, and CaseStudy JSON-LD builders.

### Fixed
- ThemeProvider is SSR-safe (no window/localStorage access during prerender).
- Legal sitemap paths use `/legal/privacy` and `/legal/terms`.

## [1.2.2] - 2026-10

### Added
- Zod `toolsSchema` / `toolsCatalogSchema` for free-tools catalog entries.
- Dedicated `MultiStepForm.submit.test.tsx` for WhatsApp popup-blocked errors.
- `CODEOWNERS` and CONTRIBUTING maintenance / bus-factor guidance.
- contentParity assertion that EN/AR tools share the same keys per id.

### Changed
- CI verify steps are named (Lint, Typecheck, Test with coverage, Build, Security audit).
- EN/AR `freeToolsDesktopPart1` validate through `toolsCatalogSchema` at module load.
- `@types/react` and `@types/react-dom` aligned to React 18.x.

## [1.2.1] - 2026-10

### Added
- `VITE_WHATSAPP_NUMBER` contact config (`lib/contactConfig.ts`) for forms, footer, and Organization schema.
- README Observability section for the structured logger.
- Stronger MultiStepForm and ToolDetail specs (wa.me from env, validation guards, related tools, JSON-LD).

### Changed
- Coverage gate raised from 60% to 70% (branches 55%).
- Owned platforms: StoreX replaced by Sajda POS.

### Fixed
- Service worker no longer pins a stale `index.html` across deploys.

## [1.2.0] - 2026-10

September 2026 contribution cadence (C01–C30) closed out with this release.

### Added
- ErrorBoundary around App with error logging.
- Skip-to-content link in Layout for keyboard users.
- LanguageSwitcher announces the next language for screen readers.
- Dedicated LanguageSwitcher coverage and expanded Home / parity / filter tests.

### Changed
- Nav refactors: DesktopNav, MobileNav, ServicesMegaMenu, ToolsMegaMenu; Layout under 200 LOC.
- Coverage gates raised through 60%.
- Polish across HeroShowcase/FalconField, ClientVoices, About/Timeline, Services, Contact FAQ, Home platforms.
- README documents verify-before-Docker compose workflow.

### Fixed
- Vitest localStorage polyfill for Node 25+ workers.

## [1.1.0] - 2026-09

### Added
- Falcon redesign with equal light/dark tokens, HeroShowcase, FalconField, ClientVoices, ToolsSlider.
- Vitest suite, coverage gates, Docker/nginx, GitHub Actions CI, Dependabot.
- Bilingual Arabic crawl metadata and Organization / SoftwareApplication JSON-LD.
- Nav extractions: DesktopNav, MobileNav, ServicesMegaMenu, ToolsMegaMenu.

### Changed
- Partners framing and curated client list; enterprise stats copy.
- Brand Arabic SEO naming with `shortName` for chrome.

## [1.0.0] - 2026

### Added
- Initial Elsakr marketing site: bilingual EN/AR, services, tools catalog, contact form.
