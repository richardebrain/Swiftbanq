import { MetadataRoute } from 'next'
import { guidesData } from '@/lib/guidesData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://swiftbanq.com';

  // Static dates — dynamic new Date() causes the sitemap to change on every
  // build, signalling false freshness to crawlers and wasting crawl budget.
  const coreLastMod    = new Date('2026-05-28');
  const serviceLastMod = new Date('2026-05-28');
  const legalLastMod   = new Date('2026-05-28');

  // ── Guide posts (dynamic) ──────────────────────────────────────────────
  const guideEntries: MetadataRoute.Sitemap = guidesData.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

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

    // ── Guides listing page ─────────────────────────────────────────────────
    {
      url: `${baseUrl}/guides`,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ── Individual guide posts ──────────────────────────────────────────────
    ...guideEntries,

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
