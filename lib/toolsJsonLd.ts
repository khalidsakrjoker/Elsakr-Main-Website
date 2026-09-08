import type { Tool } from './types';

const BASE_URL = 'https://elsakr.company';

export function buildToolsSoftwareApplicationList(tools: Tool[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Elsakr Free Open Source Tools',
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: tool.title,
        description: tool.description,
        url: `${BASE_URL}/tools/${tool.id}`,
        image: tool.image?.startsWith('http')
          ? tool.image
          : tool.image
            ? `${BASE_URL}${tool.image}`
            : undefined,
        applicationCategory:
          tool.category === 'desktop' ? 'DesktopApplication' : 'BrowserApplication',
        operatingSystem: tool.category === 'desktop' ? 'Windows' : 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    })),
  };
}
