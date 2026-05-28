import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://swiftbanq.com';

  return {
    rules: [
      // Main crawl rules for all bots
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
        ],
      },
      // Give Googlebot a crawl-delay hint and explicit permission
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Block known scrapers that add no SEO value
      {
        userAgent: ['SemrushBot', 'DotBot', 'AhrefsBot', 'MJ12bot'],
        disallow: '/',
      },
      // Block AI Crawlers from scraping data for model training
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Anthropic-ai', 'Google-Extended', 'PerplexityBot', 'Omgilibot', 'FacebookBot'],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
