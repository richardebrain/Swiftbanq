import { CommunitySection } from '@/components/CommunitySection';

export const metadata = {
  title: 'Terms & Conditions | Swiftbanq Credit Solutions',
  description: 'Terms and Conditions for Swiftbanq Credit Solutions.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            Welcome to Swiftbanq Credit Solutions. These Terms and Conditions govern your access to and use of our financial services, website, and related offerings.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing our website or utilizing our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must abstain from using our services.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. Loan Applications and Approval</h2>
          <p>
            All loan applications and financing options are subject to review and approval by Swiftbanq Credit Solutions. Final terms, including interest rates and repayment schedules, will be determined based on creditworthiness, market conditions, and regulatory compliance.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. User Obligations</h2>
          <p>
            You agree to provide accurate, current, and complete information during the application process and to update such information as necessary. Misrepresentation of any financial information may result in the immediate cancellation of your application or loan facility.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Limitation of Liability</h2>
          <p>
            Swiftbanq Credit Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">5. Modifications</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. We will notify users of any significant changes by updating the effective date of this document.
          </p>
        </div>
      </div>
      <CommunitySection />
    </div>
  );
}
