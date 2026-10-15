# Changelog

All notable changes to this project are documented in this file.

## [1.2.0] - 2026-10

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
