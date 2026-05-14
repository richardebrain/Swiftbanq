import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Swiftbanq Credit Solutions Terms & Conditions — loan eligibility, interest rates, repayment obligations, default remedies, and governing law for all financial services in Nigeria.',
  alternates: {
    canonical: 'https://swiftbanq.com/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | Swiftbanq Credit Solutions',
    description: 'The full terms governing Swiftbanq financial products — eligibility, rates, repayment, default, and dispute resolution.',
    url: 'https://swiftbanq.com/terms-and-conditions',
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Terms & Conditions</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            Welcome to Swiftbanq Credit Solutions. These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our financial products, services, and related offerings. They form a legally binding agreement between you and Swiftbanq Credit Solutions.
          </p>
          <p>
            By applying for, accepting, or using any of our services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. About Swiftbanq Credit Solutions</h2>
          <p>
            Swiftbanq Credit Solutions is a financial services company incorporated under the laws of Nigeria, specialising in digital lending, asset financing, SME financing, and treasury services. We are committed to providing innovative financial solutions to individuals and businesses across Nigeria.
          </p>
          <p>
            Our services are regulated by the Central Bank of Nigeria (CBN) and other applicable regulatory authorities. We operate in compliance with all relevant Nigerian financial services laws and regulations.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. Acceptance of Terms</h2>
          <p>
            By accessing our website, submitting an application, or utilising any of our services, you agree to be bound by these Terms and Conditions, as well as our Privacy Policy, Data Protection Policy, and any other policies referenced herein.
          </p>
          <p>
            If you are applying on behalf of a business entity, you represent and warrant that you have the authority to bind that entity to these Terms.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. Eligibility Criteria</h2>
          <p>
            To be eligible for our services, you must:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be at least 18 years of age (for individual applicants).</li>
            <li>Be a Nigerian citizen or legal resident with valid identification.</li>
            <li>Provide accurate and complete information during the application process.</li>
            <li>Have a verifiable source of income or business revenue.</li>
            <li>Meet our creditworthiness and risk assessment criteria.</li>
            <li>Not be subject to any bankruptcy proceedings or insolvency arrangements.</li>
            <li>Not be listed on any regulatory exclusion or sanctions lists.</li>
          </ul>
          <p>
            For business applicants, additional requirements include valid business registration with the Corporate Affairs Commission (CAC) and compliance with applicable business licensing requirements.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Loan Applications and Approval Process</h2>
          <p>
            All loan applications and financing requests are subject to our internal review and approval process. This process includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identity verification and Know Your Customer (KYC) checks.</li>
            <li>Credit assessment and risk evaluation.</li>
            <li>Income and affordability verification.</li>
            <li>Review of supporting documentation.</li>
            <li>Compliance with regulatory requirements.</li>
          </ul>
          <p>
            We reserve the right to approve, decline, or modify any application at our sole discretion. Approval is not guaranteed, and we are not obligated to provide reasons for declining an application.
          </p>
          <p>
            Final loan terms, including principal amount, interest rates, fees, and repayment schedules, will be determined based on your creditworthiness, the type of facility requested, prevailing market conditions, and regulatory requirements.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">5. Interest Rates and Fees</h2>
          <p>
            Interest rates and fees applicable to your loan or credit facility will be clearly disclosed in your loan agreement or facility letter. These may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Annual Percentage Rate (APR) or monthly interest rate.</li>
            <li>Processing or arrangement fees.</li>
            <li>Late payment charges and penalties.</li>
            <li>Early repayment fees (where applicable).</li>
            <li>Administrative and maintenance fees.</li>
          </ul>
          <p>
            Interest rates may be fixed or variable, as specified in your agreement. Variable rates may change in accordance with market conditions, regulatory requirements, or changes in our cost of funds.
          </p>
          <p>
            All fees and charges comply with the Central Bank of Nigeria&apos;s guidelines on interest rates and fees for financial institutions.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">6. Repayment Obligations</h2>
          <p>
            You are obligated to repay your loan or credit facility in accordance with the agreed repayment schedule. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Making payments on or before the due dates specified in your agreement.</li>
            <li>Ensuring sufficient funds are available in your designated repayment account.</li>
            <li>Notifying us immediately if you anticipate difficulty in meeting your repayment obligations.</li>
            <li>Maintaining accurate and up-to-date contact and banking information.</li>
          </ul>
          <p>
            Payments may be collected via direct debit, bank transfer, or other agreed methods. You authorise us to debit your account for scheduled repayments and any applicable fees or charges.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">7. Default and Remedies</h2>
          <p>
            You will be in default if you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fail to make any payment when due.</li>
            <li>Breach any other term or condition of your loan agreement.</li>
            <li>Provide false or misleading information.</li>
            <li>Become insolvent or subject to bankruptcy proceedings.</li>
            <li>Fail to maintain required insurance (for asset-backed facilities).</li>
          </ul>
          <p>
            In the event of default, we may:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Demand immediate repayment of the outstanding balance.</li>
            <li>Apply late payment charges and penalty interest.</li>
            <li>Report the default to credit bureaus.</li>
            <li>Engage debt collection agencies or legal representatives.</li>
            <li>Exercise any security rights over collateral.</li>
            <li>Pursue legal action for recovery of the debt.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">8. User Obligations and Representations</h2>
          <p>
            You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, current, and complete information during the application process and throughout the term of any facility.</li>
            <li>Update us promptly of any changes to your personal, financial, or business circumstances.</li>
            <li>Use loan proceeds only for the stated purpose disclosed in your application.</li>
            <li>Maintain adequate insurance coverage for any assets used as collateral.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Cooperate with our monitoring and review processes.</li>
            <li>Not transfer or assign your obligations without our prior written consent.</li>
          </ul>
          <p>
            You represent and warrant that all information provided is true and accurate, and that you have the legal capacity to enter into this agreement.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">9. Security and Collateral</h2>
          <p>
            Depending on the type and amount of financing, we may require security or collateral to secure your obligations. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal or corporate guarantees.</li>
            <li>Charges over real estate or other assets.</li>
            <li>Assignment of receivables or cash flows.</li>
            <li>Deposit of cash or securities as collateral.</li>
          </ul>
          <p>
            You agree to execute all necessary documentation to perfect our security interests and to maintain the value and condition of any collateral throughout the term of the facility.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">10. Data Protection and Privacy</h2>
          <p>
            We collect, process, and store your personal and financial information in accordance with our Privacy Policy and Data Protection Policy. By using our services, you consent to such collection and processing for the purposes of:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Assessing and processing your applications.</li>
            <li>Managing your account and facilities.</li>
            <li>Complying with regulatory requirements.</li>
            <li>Conducting credit checks and reporting to credit bureaus.</li>
            <li>Fraud prevention and risk management.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">11. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Swiftbanq Credit Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Loss of profits, revenue, or business opportunities.</li>
            <li>Delays in processing applications or disbursements.</li>
            <li>Technical failures or system downtime.</li>
            <li>Actions of third-party service providers.</li>
          </ul>
          <p>
            Our total liability to you shall not exceed the amount of fees paid by you to us in the 12 months preceding the event giving rise to the claim.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">12. Force Majeure</h2>
          <p>
            We shall not be liable for any failure or delay in performance under these Terms that is due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, government actions, pandemics, or technical failures.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">13. Assignment and Transfer</h2>
          <p>
            We may assign, transfer, or novate our rights and obligations under these Terms or any loan agreement to any third party without your consent. You may not assign or transfer your obligations without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">14. Modifications</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Material changes will be communicated to you via email, SMS, or through our website. Your continued use of our services after such notification constitutes acceptance of the modified terms.
          </p>
          <p>
            Changes to specific loan agreements require mutual consent and will be documented in writing.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">15. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from or relating to these Terms shall be resolved through the following process:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Initial resolution through our internal complaints procedure.</li>
            <li>Mediation through a mutually agreed mediator.</li>
            <li>Arbitration under the rules of the Lagos Court of Arbitration.</li>
            <li>As a last resort, litigation in the courts of Lagos State, Nigeria.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">16. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that most closely reflects the original intent.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">17. Contact Information</h2>
          <p>
            For questions about these Terms and Conditions or our services, please contact us:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>Email:</strong> info@swiftbanq.com</li>
            <li><strong>Customer Support:</strong> support@swiftbanq.com</li>
            <li><strong>Address:</strong> Swiftbanq Credit Solutions, Lagos, Nigeria</li>
            <li><strong>Business Hours:</strong> Monday – Friday, 8:00am – 5:00pm WAT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}