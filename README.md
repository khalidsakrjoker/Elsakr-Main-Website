# 🦅 Elsakr Official Website

[![Live Site](https://img.shields.io/badge/Live-elsakr.company-blue?style=for-the-badge&logo=google-chrome)](https://elsakr.company)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

The official source code for **[Elsakr.company](https://elsakr.company)** — Elsakr Software Engineering Studio. Falcon-heritage bilingual marketing site with free open-source tools, equal light/dark themes, Vitest coverage, Docker, and CI.

> **"Open Source with a Falcon's Vision."**

## Features

- **Falcon design system:** CSS token maps for equal light/dark, Syne/DM Sans/Cairo typography, restrained motion.
- **Bilingual EN/AR** with full RTL support.
- **Free tools catalog** with unique per-tool logos, browse/filter, and Home tools slider.
- **Owned platforms** (Kashx, StoreX) and curated alliances.
- **Quality gates:** ESLint, TypeScript, Vitest + coverage thresholds, `npm run verify`, Docker/nginx, GitHub Actions + Dependabot.

## Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + design tokens in `index.css`
- **Animations:** Framer Motion (reduced-motion aware)
- **Routing:** React Router DOM
- **Tests:** Vitest + Testing Library
- **Runtime:** Docker + nginx (port 3000)

## 🚀 Getting Started

Clone the repository to explore how we built our platform.

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/khalidsakrjoker/Elsakr-Main-Website.git

# 2. Navigate to directory
cd Elsakr-Main-Website

# 3. Install dependencies
npm install
```

### Development

```bash
# Start local dev server
npm run dev
```

### Build

```bash
# Build for production
npm run build
```

### Environment Variables

Copy `.env.example` to `.env` and fill in any values you need:

```bash
cp .env.example .env
```

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | No | Optional API key injected at build time via `vite.config.ts` for GEMINI integrations |
| `API_KEY` | No | Alias of `GEMINI_API_KEY` (also exposed as `process.env.API_KEY` in the Vite build) |

### Testing

```bash
# Run the test suite once
npm test

# Watch mode during development
npm run test:watch

# Coverage report + thresholds
npm run test:coverage
```

### Linting & Formatting

```bash
# Check code style and quality
npm run lint

# Auto-format with Prettier
npm run format
```

### Typecheck

```bash
npm run typecheck
```

### Docker (one-command sandbox)

Build and serve the production site in an isolated container:

```bash
docker compose up --build
```

Then open http://localhost:3000

### Verify (full pipeline)

From a fresh clone, the following should all succeed:

```bash
npm ci && npm run verify
```

Or step by step:

```bash
npm ci && npm run lint && npm run typecheck && npm run test:coverage && npm run build
```

## 📂 Project Structure

```
├── components/   # Reusable UI components (Buttons, Layouts, etc.)
├── content/      # Text content for EN/AR localization
├── lib/          # Utility functions and hooks
├── pages/        # Route page components
├── public/       # Static assets
└── index.css     # Global styles and Tailwind directives
```

## 🤝 Contributing

We welcome developers to learn from our codebase! While this is the source for our official company site, feel free to open issues or suggest optimizations.

**Commit style for maintainability:** keep each feature or fix in its own small commit (or PR) and include the tests that prove the new behavior in the same change. Avoid bulk commits that mix formatting, refactors, and features.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ by the <a href="https://elsakr.company">Elsakr Team</a></p>
</div>
