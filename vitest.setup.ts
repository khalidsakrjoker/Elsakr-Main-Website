import '@testing-library/jest-dom/vitest';

// Node 25+ may expose an incomplete experimental localStorage that shadows jsdom's.
const storage = globalThis.localStorage;
if (!storage || typeof storage.clear !== 'function') {
  const store = new Map<string, string>();
  const localStorageMock: Storage = {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    key(index: number) {
      return [...store.keys()][index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(key, String(value));
    },
  };

  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    enumerable: true,
    value: localStorageMock,
  });

  if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      enumerable: true,
      value: localStorageMock,
    });
  }
}
