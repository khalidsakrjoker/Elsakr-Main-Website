import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      // Gate core modules under test; expand the include list as more specs land.
      include: [
        'lib/toolsFilter.ts',
        'lib/useContent.ts',
        'lib/ThemeContext.tsx',
        'lib/types.ts',
        'components/ui/MultiStepForm.tsx',
        'pages/Home.tsx',
        'pages/ToolDetail.tsx',
      ],
      exclude: ['**/*.test.{ts,tsx}', '**/__tests__/**'],
      thresholds: {
        lines: 40,
        statements: 40,
        functions: 40,
        branches: 30,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
