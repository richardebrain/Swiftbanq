import { CommunitySection } from '@/components/CommunitySection';

export const metadata = {
  title: 'Complaints Policy | Swiftbanq Credit Solutions',
  description: 'Complaints Policy for Swiftbanq Credit Solutions.',
};

export default function ComplaintsPolicyPage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Complaints Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            Swiftbanq Credit Solutions is dedicated to providing exceptional service to all our clients. If you are dissatisfied with any aspect of our service, we want to hear from you so we can make things right.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. How to Make a Complaint</h2>
          <p>
            You can submit a complaint by contacting our customer support team via email at complaints@swiftbanq.com, calling our dedicated support line, or submitting a written complaint to our head office.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. Information to Include</h2>
          <p>
            To help us resolve your complaint as quickly as possible, please provide your full name, account or loan reference number, a clear description of the issue, and any relevant supporting documentation.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. Our Resolution Process</h2>
          <p>
            We will acknowledge receipt of your complaint within 24 hours. Our dedicated team will thoroughly investigate the matter and aim to provide a full response and resolution within 5 working days. If more time is needed, we will keep you informed of our progress.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Escalation</h2>
          <p>
            If you are not satisfied with the initial resolution, your complaint can be escalated to our senior management team for a final review and determination.
          </p>
        </div>
      </div>
      <CommunitySection />
    </div>
  );
}
