import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Swiftbanq Credit Solutions. Apply for SME financing, asset loans, digital lending, or investment. Our team in Lagos, Nigeria is ready to help.',
  alternates: {
    canonical: 'https://swiftbanq.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Swiftbanq Credit Solutions',
    description: 'Reach out to our team in Lagos, Nigeria. Apply for business loans, asset financing, or personal loans. We respond within 24 hours.',
    url: 'https://swiftbanq.com/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact Swiftbanq Credit Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
