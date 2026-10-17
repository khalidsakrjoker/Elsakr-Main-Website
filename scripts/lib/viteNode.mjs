import { createServer } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

/**
 * Run `task` with a Vite SSR server so build scripts can import the project's
 * TypeScript modules (route manifest, entry-server, ...) with the same aliases
 * and transforms as the app. The server is always closed afterwards.
 */
export async function withViteServer(task) {
  const server = await createServer({
    root: ROOT,
    appType: 'custom',
    logLevel: 'error',
    server: { middlewareMode: true, hmr: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
    // CommonJS-only packages whose named exports Node cannot detect must go through Vite.
    ssr: { noExternal: ['react-helmet-async'] },
  });

  try {
    return await task(server);
  } finally {
    await server.close();
  }
}
