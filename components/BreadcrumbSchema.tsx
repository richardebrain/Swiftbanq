/**
 * BreadcrumbSchema — injects a BreadcrumbList JSON-LD script server-side.
 * Usage: <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'SME Financing' }]} />
 * The last item should have no url (it's the current page).
 */

type BreadcrumbItem = {
  name: string;
  url?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export function BreadcrumbSchema({ items }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url
        ? { item: item.url.startsWith('http') ? item.url : `https://swiftbanq.com${item.url}` }
        : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
