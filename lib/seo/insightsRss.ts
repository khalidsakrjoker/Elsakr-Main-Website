import { editorial as enEditorial } from '../../content/en/editorial';
import { SITE_ORIGIN, getAbsoluteUrl } from './routeManifest';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Minimal RSS 2.0 feed for English insights (Arabic mirrors live under /ar/insights/...). */
export function generateInsightsRssXml(
  insights = enEditorial.insights.items,
  lastBuildDate = new Date().toUTCString()
): string {
  const items = insights
    .map((article) => {
      const link = getAbsoluteUrl(`/insights/${article.id}`);
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${escapeXml(new Date(article.datePublished).toUTCString())}</pubDate>
      <description>${escapeXml(article.description)}</description>
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Elsakr Insights</title>
    <link>${SITE_ORIGIN}/insights</link>
    <description>Engineering guidance from Elsakr</description>
    <language>en</language>
    <lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>
${items}
  </channel>
</rss>
`;
}
