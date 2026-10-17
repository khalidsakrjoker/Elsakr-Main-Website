import { editorial as enEditorial } from '../../content/en/editorial';
import type { EditorialContent } from '../../content/shared/editorialTypes';

export interface RelatedLink {
  name: string;
  path: string;
  kind: 'service' | 'case-study' | 'industry' | 'insight';
}

/**
 * Build a related-content graph from editorial cross-links (services ↔ case studies
 * ↔ industries ↔ insights). Used by pages and the crawl-audit tests.
 */
export function buildRelatedContentGraph(
  editorial: EditorialContent = enEditorial
): Record<string, RelatedLink[]> {
  const graph: Record<string, RelatedLink[]> = {};

  const push = (fromPath: string, link: RelatedLink) => {
    const bucket = graph[fromPath] ?? (graph[fromPath] = []);
    if (!bucket.some((item) => item.path === link.path)) {
      bucket.push(link);
    }
  };

  for (const study of editorial.caseStudies.items) {
    const studyPath = `/case-studies/${study.id}`;
    for (const serviceId of study.serviceIds) {
      push(studyPath, {
        name: serviceId,
        path: `/services/${serviceId}`,
        kind: 'service',
      });
      push(`/services/${serviceId}`, {
        name: study.name,
        path: studyPath,
        kind: 'case-study',
      });
    }
    for (const industryId of study.industryIds) {
      const industry = editorial.industries.items.find((item) => item.id === industryId);
      if (!industry) continue;
      push(studyPath, {
        name: industry.name,
        path: `/industries/${industry.id}`,
        kind: 'industry',
      });
      push(`/industries/${industry.id}`, {
        name: study.name,
        path: studyPath,
        kind: 'case-study',
      });
    }
  }

  for (const industry of editorial.industries.items) {
    for (const serviceId of industry.serviceIds) {
      push(`/industries/${industry.id}`, {
        name: serviceId,
        path: `/services/${serviceId}`,
        kind: 'service',
      });
      push(`/services/${serviceId}`, {
        name: industry.name,
        path: `/industries/${industry.id}`,
        kind: 'industry',
      });
    }
  }

  for (const article of editorial.insights.items) {
    const insightPath = `/insights/${article.id}`;
    for (const serviceId of article.serviceIds) {
      push(insightPath, {
        name: serviceId,
        path: `/services/${serviceId}`,
        kind: 'service',
      });
      push(`/services/${serviceId}`, {
        name: article.title,
        path: insightPath,
        kind: 'insight',
      });
    }
  }

  return graph;
}
