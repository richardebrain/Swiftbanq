import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://swiftbanq.com';

  // Static dates — dynamic new Date() causes the sitemap to change on every
  // build, signalling false freshness to crawlers and wasting crawl budget.
  const coreLastMod    = new Date('2026-05-15');
  const serviceLastMod = new Date('2026-05-15');
  const legalLastMod   = new Date('2026-01-01');

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
      url: `${baseUrl}/contact`,
      lastModified: coreLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: coreLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── Services ─────────────────────────────────────────────────────────────
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
      url: `${baseUrl}/treasury-services`,
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
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
