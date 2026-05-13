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
    default: 'Swiftbanq Credit Solutions | Digital Lending & Financing',
    template: '%s | Swiftbanq Credit Solutions',
  },
  description: 'Swiftbanq provides reliable lending solutions tailored to your needs, including SME financing, asset loans, digital lending, and structured treasury services in Nigeria.',
  keywords: ['Swiftbanq', 'credit solutions', 'SME financing', 'asset financing', 'digital lending', 'treasury services', 'Nigeria loans'],
  authors: [{ name: 'Swiftbanq Credit Solutions' }],
  creator: 'Swiftbanq',
  publisher: 'Swiftbanq',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://swiftbanq.com',
    siteName: 'Swiftbanq Credit Solutions',
    title: 'Swiftbanq Credit Solutions | Digital Lending & Financing',
    description: 'Swiftbanq provides reliable lending solutions tailored to your needs, fostering financial empowerment through technology and regulatory compliance.',
    images: [
      {
        url: 'https://swiftbanq.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Swiftbanq Credit Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swiftbanq Credit Solutions',
    description: 'Digital Lending, SME Financing, Asset Loans, and Treasury Services.',
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

const schemaProfile = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Swiftbanq Credit Solutions",
  "url": "https://swiftbanq.com",
  "logo": "https://swiftbanq.com/logo.png",
  "description": "Digital lending and structured financing for businesses and individuals in Nigeria.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lagos",
    "addressCountry": "NG"
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProfile) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-[#FDF8E7]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
