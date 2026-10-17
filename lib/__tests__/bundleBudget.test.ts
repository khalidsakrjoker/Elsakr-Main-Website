import { describe, it, expect } from 'vitest';
import { INITIAL_JS_BUDGET_KB, isWithinBundleBudget, measureInitialJsKb } from '../bundleBudget';

describe('bundleBudget', () => {
  it('sums non-tool marketing JS and compares to the budget', () => {
    const total = measureInitialJsKb([
      { name: 'assets/index-abc.js', sizeKb: 120 },
      { name: 'assets/Home-xyz.js', sizeKb: 40 },
      { name: 'assets/ToolDetail-zzz.js', sizeKb: 200 },
      { name: 'assets/ToolsBrowse-qqq.js', sizeKb: 80 },
      { name: 'assets/index.css', sizeKb: 50 },
    ]);
    expect(total).toBe(160);
    expect(isWithinBundleBudget(total)).toBe(true);
    expect(isWithinBundleBudget(INITIAL_JS_BUDGET_KB + 1)).toBe(false);
  });
});
