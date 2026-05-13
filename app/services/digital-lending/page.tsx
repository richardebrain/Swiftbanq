import { CommunitySection } from '@/components/CommunitySection';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceDetails } from '@/components/ServiceDetails';
import { ServiceOfferings } from '@/components/ServiceOfferings';

export const metadata = {
  title: 'Digital Lending | Swiftbanq Credit Solutions',
  description: 'Digital Lending options for salary earners by Swiftbanq.',
};

export default function DigitalLendingPage() {
  const offeringsData = [
    {
      shortTitle: "Instant Funds",
      fullTitle: "Instant Disbursement",
      description: "Funds are disbursed directly to your account immediately after approval. No long waits or unnecessary friction.",
      colorClass: "bg-brand-dark",
      textClass: "text-white",
      seed: "instant"
    },
    {
      shortTitle: "Flexible Terms",
      fullTitle: "Flexible Repayment",
      description: "Choose repayment terms that align perfectly with your salary cycle and cash flow needs.",
      colorClass: "bg-[#FF5A50]",
      textClass: "text-white",
      seed: "flexible"
    },
    {
      shortTitle: "Transparent",
      fullTitle: "No Hidden Charges",
      description: "Complete transparency in our pricing structure. What you see is exactly what you pay—no surprises.",
      colorClass: "bg-[#b4fc08]",
      textClass: "text-brand-dark",
      seed: "transparent"
    },
    {
      shortTitle: "100% Digital",
      fullTitle: "Paperless Application",
      description: "Enjoy a fully digital process. Apply anytime, anywhere from your device without visiting a branch.",
      colorClass: "bg-blue-600",
      textClass: "text-white",
      seed: "paperless"
    }
  ];

  return (
    <div className="w-full bg-transparent">
      {/* Hero */}
      <ServiceHero 
        title="Digital Lending"
        description="Instant liquidity at your fingertips, perfectly tailored for salary earners and professionals. Our digital lending platform ensures you can access funds when you need them most, without the traditional bureaucracy."
        buttonText="Apply for a loan"
        buttonLink="/contact"
        seed="digital-hero"
      />

      <ServiceDetails 
        headingPart1="Say"
        headingHighlight="goodbye"
        headingPart2="to long waiting times and hello to instant funds."
        description1="Our digital lending platform uses advanced algorithms to process your application securely and disburse funds directly to your account in minutes."
        subDescription1="Whether for personal emergencies or quick business needs, get access to credit when you need it most with ease and confidence."
        seed="digital-details"
      />

      {/* Offerings */}
      <ServiceOfferings title="Why Choose Our Digital Loans" offerings={offeringsData} />

      <CommunitySection />
    </div>
  );
}
