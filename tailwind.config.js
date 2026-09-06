/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        falcon: {
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          muted: 'var(--color-surface-muted)',
          ink: 'var(--color-ink)',
          'ink-muted': 'var(--color-ink-muted)',
          border: 'var(--color-border)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        ar: ['var(--font-ar)'],
      },
    },
  },
  plugins: [],
};
