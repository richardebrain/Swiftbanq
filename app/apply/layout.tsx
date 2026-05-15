import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply Now',
  description: 'Apply for SME financing, asset financing, personal loans, or treasury investment with Swiftbanq Credit Solutions. Fast approvals, competitive rates. Apply online in minutes.',
  alternates: {
    canonical: 'https://swiftbanq.com/apply',
  },
  openGraph: {
    title: 'Apply Now | Swiftbanq Credit Solutions',
    description: 'Start your loan or investment application with Swiftbanq. SME financing, asset loans, personal loans, and treasury services. Get a response within 24 hours.',
    url: 'https://swiftbanq.com/apply',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Apply for financing with Swiftbanq Credit Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
