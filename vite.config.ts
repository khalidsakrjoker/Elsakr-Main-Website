import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Contact config: VITE_WHATSAPP_NUMBER is client-exposed via Vite's VITE_ prefix.
    // Touch it here so loadEnv + .env.example stay the documented source of truth.
    void env.VITE_WHATSAPP_NUMBER;

    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'copy-service-worker',
          closeBundle() {
            // Copy service-worker.js to dist folder after build
            copyFileSync(
              path.resolve(__dirname, 'service-worker.js'),
              path.resolve(__dirname, 'dist/service-worker.js')
            );
          }
        }
      ],
      // GEMINI keys use define (non-VITE_ prefix). WhatsApp uses import.meta.env.VITE_WHATSAPP_NUMBER.
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      },
      resolve: {
        // Keep a single React instance in the browser (server router must not ship in App).
        dedupe: ['react', 'react-dom'],
        alias: {
          '@': path.resolve(__dirname, '.'),
        },
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
      },
    };
});
