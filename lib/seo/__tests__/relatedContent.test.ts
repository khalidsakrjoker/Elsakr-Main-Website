import { describe, it, expect } from 'vitest';
import { buildRelatedContentGraph } from '../relatedContent';

describe('buildRelatedContentGraph', () => {
  const graph = buildRelatedContentGraph();

  it('links Kashx to FinTech and back', () => {
    expect(graph['/case-studies/kashx']?.some((l) => l.path === '/industries/fintech')).toBe(true);
    expect(graph['/industries/fintech']?.some((l) => l.path === '/case-studies/kashx')).toBe(true);
  });

  it('links Sajda to Retail/POS and web service', () => {
    expect(graph['/case-studies/sajda']?.some((l) => l.path === '/industries/retail-pos')).toBe(true);
    expect(graph['/services/web']?.some((l) => l.kind === 'case-study')).toBe(true);
  });

  it('connects insights to services', () => {
    expect(
      graph['/insights/cloud-pos-offline-continuity']?.some((l) => l.path.startsWith('/services/'))
    ).toBe(true);
  });
});
