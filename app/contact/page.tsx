import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Swiftbanq Credit Solutions. Apply for SME financing, asset loans, digital lending, or treasury services. Our team in Lagos, Nigeria is ready to help.',
  alternates: {
    canonical: 'https://swiftbanq.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Swiftbanq Credit Solutions',
    description: 'Reach out to our team in Lagos, Nigeria. Apply for business loans, asset financing, or personal loans. We respond within 24 hours.',
    url: 'https://swiftbanq.com/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
