import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://swiftbanq.com'),
  title: {
    default: 'Swiftbanq | Fast SME Financing & Digital Lending in Nigeria',
    template: '%s | Swiftbanq Credit Solutions',
  },
  description: 'Get fast, reliable SME financing, asset loans, and digital lending in Nigeria. Swiftbanq is a licensed NBFI offering quick credit and high-yield treasury services. Apply today.',
  keywords: [
    'Swiftbanq',
    'credit solutions Nigeria',
    'SME financing Lagos',
    'business loans Nigeria',
    'asset financing Nigeria',
    'digital lending Nigeria',
    'treasury services Nigeria',
    'personal loans Lagos',
    'NBFI Nigeria',
    'LPO financing Nigeria',
    'invoice discounting Lagos',
    'quick loans Nigeria',
    'equipment financing'
  ],
  authors: [{ name: 'Swiftbanq Credit Solutions' }],
  creator: 'Swiftbanq Credit Solutions',
  publisher: 'Swiftbanq Credit Solutions',
  alternates: {
    canonical: 'https://swiftbanq.com',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: 'any' },
    ],
    shortcut: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://swiftbanq.com',
    siteName: 'Swiftbanq Credit Solutions',
    title: 'Swiftbanq Credit Solutions | Digital Lending & Financing in Nigeria',
    description: 'A licensed Non-Bank Financial Institution in Lagos, Nigeria. Fast SME financing, asset loans, digital lending, and treasury services. Apply online today.',
    images: [
      {
        url: 'https://swiftbanq.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Swiftbanq Credit Solutions — Digital Lending & Financing in Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@swiftbanq',
    creator: '@swiftbanq',
    title: 'Swiftbanq Credit Solutions | Digital Lending & Financing in Nigeria',
    description: 'Licensed NBFI in Lagos. SME Financing, Asset Loans, Digital Lending & Treasury Services. Apply online.',
    images: ['https://swiftbanq.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://swiftbanq.com/#website",
  "name": "Swiftbanq Credit Solutions",
  "url": "https://swiftbanq.com",
  "description": "Digital lending, SME financing, asset financing, and treasury services for businesses and individuals in Nigeria.",
  "publisher": {
    "@id": "https://swiftbanq.com/#organization"
  }
};

const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "FinancialService"],
  "@id": "https://swiftbanq.com/#organization",
  "name": "Swiftbanq Credit Solutions",
  "legalName": "Swiftbanq Credit Solutions",
  "url": "https://swiftbanq.com",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://swiftbanq.com/#logo",
    "url": "https://swiftbanq.com/SBQ_Logo.svg",
    "contentUrl": "https://swiftbanq.com/SBQ_Logo.svg",
    "caption": "Swiftbanq Credit Solutions"
  },
  "image": {
    "@id": "https://swiftbanq.com/#logo"
  },
  "description": "A licensed Non-Bank Financial Institution (NBFI) in Lagos, Nigeria offering SME Financing, Asset Financing, Digital Lending, and Treasury Services.",
  "foundingLocation": {
    "@type": "Place",
    "name": "Lagos, Nigeria"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6, Babatunde Jose Street, Off Ademola Adetokunbo V.I",
    "addressLocality": "Lagos",
    "addressRegion": "Lagos State",
    "addressCountry": "NG"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Nigeria"
  },
  "telephone": "+2347086429380",
  "email": "enquiries@swiftbanq.com",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "telephone": "+2347086429380",
      "email": "enquiries@swiftbanq.com",
      "availableLanguage": "English",
      "areaServed": "NG",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    },
    {
      "@type": "ContactPoint",
      "contactType": "complaints",
      "email": "complaints@swiftbanq.com",
      "availableLanguage": "English",
      "areaServed": "NG"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Financial Products & Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialProduct",
          "name": "SME Financing",
          "description": "LPO Financing, Invoice Discounting, Bridge & Contract Finance, Project Finance & Syndication for small and medium enterprises in Nigeria.",
          "url": "https://swiftbanq.com/#services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialProduct",
          "name": "Asset Financing",
          "description": "Fleet & Vehicle Financing, Office Equipment Loans, Household Equipment, Specialized Machinery for businesses and individuals.",
          "url": "https://swiftbanq.com/#services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialProduct",
          "name": "Digital Lending",
          "description": "Instant disbursement personal loans for salary earners with flexible repayment and no hidden charges.",
          "url": "https://swiftbanq.com/#services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialProduct",
          "name": "Treasury Services",
          "description": "Structured borrowings, competitive interest rates, flexible tenures, and portfolio management for investors.",
          "url": "https://swiftbanq.com/#services"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.linkedin.com/company/swiftbanq",
    "https://twitter.com/swiftbanq"
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-brand-cream">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
