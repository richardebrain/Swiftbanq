import { CommunitySection } from '@/components/CommunitySection';

export const metadata = {
  title: 'Privacy Policy | Swiftbanq Credit Solutions',
  description: 'Privacy Policy for Swiftbanq Credit Solutions.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            At Swiftbanq Credit Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal information that you provide directly to us, such as your name, email address, phone number, financial information, and any other details you choose to submit when applying for a loan, utilizing our treasury services, or contacting customer support.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. How We Use Your Information</h2>
          <p>
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process your loan applications and financial transactions.</li>
            <li>Provide, operate, and maintain our services.</li>
            <li>Improve, personalize, and expand our services.</li>
            <li>Communicate with you regarding updates, customer support, and marketing.</li>
            <li>Comply with regulatory and legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Sharing Your Information</h2>
          <p>
            We do not sell your personal data. We may share your information with trusted third-party service providers who assist us in operating our business and providing services to you, subject to strict confidentiality agreements.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: info@swiftbanq.com.
          </p>
        </div>
      </div>
      <CommunitySection />
    </div>
  );
}
