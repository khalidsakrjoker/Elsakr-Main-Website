import { describe, it, expect } from 'vitest';
import { editorial as enEditorial } from '../../content/en/editorial';
import { editorial as arEditorial } from '../../content/ar/editorial';
import { kashxCaseStudy as kashxEn } from '../../content/en/editorial/kashx';
import { sajdaCaseStudy as sajdaEn } from '../../content/en/editorial/sajda';
import { kashxCaseStudy as kashxAr } from '../../content/ar/editorial/kashx';
import { sajdaCaseStudy as sajdaAr } from '../../content/ar/editorial/sajda';

describe('editorial case studies modularity', () => {
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
