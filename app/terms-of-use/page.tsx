import { CommunitySection } from '@/components/CommunitySection';

export const metadata = {
  title: 'Terms of Use | Swiftbanq Credit Solutions',
  description: 'Terms of Use for Swiftbanq Credit Solutions website.',
};

export default function TermsOfUsePage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            Please read these Terms of Use carefully before using the Swiftbanq Credit Solutions website.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. Use of Website</h2>
          <p>
            This website is intended to provide information about the financial products and services offered by Swiftbanq. You may not use this website for any unlawful or prohibited purpose.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of Swiftbanq Credit Solutions and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any content without explicit written permission.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. Swiftbanq Credit Solutions has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Disclaimers</h2>
          <p>
            The information provided on this website is for general informational purposes only and does not constitute financial, legal, or professional advice. We do not warrant the accuracy, completeness, or usefulness of this information.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">5. Governing Law</h2>
          <p>
            These Terms of Use and your use of the website shall be governed by the laws of Lagos State, Nigeria, without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
      <CommunitySection />
    </div>
  );
}
