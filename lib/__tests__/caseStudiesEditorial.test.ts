import { describe, it, expect } from 'vitest';
import { editorial as enEditorial } from '../../content/en/editorial';
import { editorial as arEditorial } from '../../content/ar/editorial';
import { kashxCaseStudy as kashxEn } from '../../content/en/editorial/kashx';
import { sajdaCaseStudy as sajdaEn } from '../../content/en/editorial/sajda';
import { kashxCaseStudy as kashxAr } from '../../content/ar/editorial/kashx';
import { sajdaCaseStudy as sajdaAr } from '../../content/ar/editorial/sajda';
import { industries as industriesEn } from '../../content/en/editorial/industries';
import { industries as industriesAr } from '../../content/ar/editorial/industries';
import { insights as insightsEn } from '../../content/en/editorial/insights';
import { insights as insightsAr } from '../../content/ar/editorial/insights';

describe('editorial modularity (case studies, industries, insights)', () => {
  it('exports distinct per-id case study modules for English and Arabic', () => {
    expect(kashxEn.id).toBe('kashx');
    expect(kashxEn.name).toBe('Kashx Company');
    expect(kashxEn.externalUrl).toBe('https://kashx.company/');
    expect(kashxEn.industryIds).toContain('fintech');

    expect(sajdaEn.id).toBe('sajda');
    expect(sajdaEn.name).toBe('Sajda POS');
    expect(sajdaEn.externalUrl).toBe('https://sajdapos.com/');
    expect(sajdaEn.industryIds).toContain('retail-pos');

    expect(kashxAr.id).toBe('kashx');
    expect(kashxAr.name).toBe('Kashx Company');
    expect(kashxAr.category).toContain('FinTech');

    expect(sajdaAr.id).toBe('sajda');
    expect(sajdaAr.name).toBe('سجدة POS');
    expect(sajdaAr.category).toContain('كاشير');
  });

  it('correctly reassembles case study items in both English and Arabic editorial', () => {
    expect(enEditorial.caseStudies.items).toHaveLength(2);
    expect(enEditorial.caseStudies.items[0]).toEqual(kashxEn);
    expect(enEditorial.caseStudies.items[1]).toEqual(sajdaEn);

    expect(arEditorial.caseStudies.items).toHaveLength(2);
    expect(arEditorial.caseStudies.items[0]).toEqual(kashxAr);
    expect(arEditorial.caseStudies.items[1]).toEqual(sajdaAr);
  });

  it('exports modular industries for English and Arabic', () => {
    expect(industriesEn.items.map((i) => i.id)).toEqual(['retail-pos', 'fintech', 'enterprise']);
    expect(industriesAr.items.map((i) => i.id)).toEqual(['retail-pos', 'fintech', 'enterprise']);
    expect(enEditorial.industries).toEqual(industriesEn);
    expect(arEditorial.industries).toEqual(industriesAr);
  });

  it('exports modular insights for English and Arabic', () => {
    expect(insightsEn.items.map((i) => i.id)).toEqual([
      'choosing-software-company-egypt',
      'cloud-pos-offline-continuity',
      'fintech-platform-architecture',
    ]);
    expect(insightsAr.items.map((i) => i.id)).toEqual([
      'choosing-software-company-egypt',
      'cloud-pos-offline-continuity',
      'fintech-platform-architecture',
    ]);
    expect(enEditorial.insights).toEqual(insightsEn);
    expect(arEditorial.insights).toEqual(insightsAr);
  });

  it('ensures each case study has required structural sections and bullets', () => {
    for (const item of [kashxEn, sajdaEn, kashxAr, sajdaAr]) {
      expect(item.sections.length).toBeGreaterThan(0);
      for (const section of item.sections) {
        expect(section.heading).toBeTruthy();
        expect(section.paragraphs.length).toBeGreaterThan(0);
      }
    }
  });
});
