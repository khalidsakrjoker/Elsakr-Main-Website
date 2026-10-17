/**
 * Initial JS budget for company/service routes (excludes separately chunked tool catalog pages).
 * Values are in kilobytes (raw file size on disk after Vite build).
 */
export const INITIAL_JS_BUDGET_KB = 450;

export interface BundleAsset {
  name: string;
  sizeKb: number;
}

/** Sum sizes of entry + shared chunks that ship on non-tool marketing routes. */
export function measureInitialJsKb(assets: BundleAsset[]): number {
  return assets
    .filter((asset) => /\.(m?js)$/.test(asset.name))
    .filter((asset) => !/Tool|ToolsBrowse|toolsFilter/i.test(asset.name))
    .reduce((sum, asset) => sum + asset.sizeKb, 0);
}

export function isWithinBundleBudget(totalKb: number, budgetKb = INITIAL_JS_BUDGET_KB): boolean {
  return totalKb <= budgetKb;
}
