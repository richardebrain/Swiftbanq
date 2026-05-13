import { CommunitySection } from '@/components/CommunitySection';

export const metadata = {
  title: 'Data Protection | Swiftbanq Credit Solutions',
  description: 'Data Protection policy for Swiftbanq Credit Solutions.',
};

export default function DataProtectionPage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Data Protection</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            At Swiftbanq Credit Solutions, protecting your personal and financial data is our highest priority. This Data Protection page outlines our commitments and practices for securing your information.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. Our Commitment</h2>
          <p>
            We are fully committed to complying with the Nigeria Data Protection Regulation (NDPR) and other applicable data privacy laws to ensure your information is handled with the utmost security and confidentiality.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. Data Security Measures</h2>
          <p>
            We deploy state-of-the-art security measures including end-to-end encryption, multi-factor authentication, and regular security audits to safeguard your data against unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. Your Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you, request corrections to any inaccuracies, and request the deletion of your data under certain circumstances as provided by law.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Contact our Data Protection Officer</h2>
          <p>
            If you have any questions, concerns, or requests regarding the protection of your data, please contact our Data Protection Officer at: dpo@swiftbanq.com.
          </p>
        </div>
      </div>
      <CommunitySection />
    </div>
  );
}
