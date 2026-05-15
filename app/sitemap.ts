import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://swiftbanq.com';

  // Use static dates — dynamic new Date() causes the sitemap to change on
  // every build, which signals false "freshness" to crawlers and wastes crawl budget.
  const coreLastMod = new Date('2025-05-01');
  const serviceLastMod = new Date('2025-05-01');
  const legalLastMod = new Date('2025-01-01');

  return [
    // ── Core pages ──────────────────────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: coreLastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-us`,
      lastModified: coreLastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: coreLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── Services ─────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/services`,
      lastModified: serviceLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/sme-financing`,
      lastModified: serviceLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/asset-financing`,
      lastModified: serviceLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/digital-lending`,
      lastModified: serviceLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/treasury-services`,
      lastModified: serviceLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── Legal & compliance ───────────────────────────────────────────────────
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/data-protection`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/complaints-policy`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}
