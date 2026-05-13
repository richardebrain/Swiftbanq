import { CommunitySection } from '@/components/CommunitySection';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceDetails } from '@/components/ServiceDetails';
import { ServiceOfferings } from '@/components/ServiceOfferings';

export const metadata = {
  title: 'Treasury Services | Swiftbanq Credit Solutions',
  description: 'Structured Treasury Services by Swiftbanq.',
};

export default function TreasuryServicesPage() {
  const offeringsData = [
    {
      shortTitle: "Fixed Deposits",
      fullTitle: "Term Deposits",
      description: "Secure your capital while earning highly competitive interest rates over specified and flexible tenures ranging from 30 to 365 days.",
      colorClass: "bg-brand-dark",
      textClass: "text-white",
      seed: "deposits"
    },
    {
      shortTitle: "Structured Borrowings",
      fullTitle: "Institutional Borrowing",
      description: "Customized institutional borrowing solutions designed for long-term liquidity management and optimal capital structure.",
      colorClass: "bg-[#FF5A50]",
      textClass: "text-white",
      seed: "borrowings"
    },
    {
      shortTitle: "Yield Max",
      fullTitle: "Yield Maximization",
      description: "Tailored investment portfolios built to ensure you get the absolute best returns on your otherwise idle cash balances.",
      colorClass: "bg-[#b4fc08]",
      textClass: "text-brand-dark",
      seed: "yield"
    },
    {
      shortTitle: "Risk-Managed",
      fullTitle: "Safe Vehicles",
      description: "Our treasury options prioritize capital preservation alongside steady growth, ensuring your core equity is always protected.",
      colorClass: "bg-blue-600",
      textClass: "text-white",
      seed: "risk"
    }
  ];

  return (
    <div className="w-full bg-transparent">
      {/* Hero */}
      <ServiceHero 
        title="Treasury Services"
        description="Maximize the potential of your idle funds with structured, high-yield investment options. We provide secure and lucrative avenues to grow your wealth with confidence."
        buttonText="Speak to our treasury team"
        buttonLink="/contact"
        seed="treasury-hero"
      />

      <ServiceDetails 
        headingPart1="Say"
        headingHighlight="goodbye"
        headingPart2="to idle funds and hello to optimal returns."
        description1="We provide structured investment solutions for high-net-worth individuals and corporate clients, offering highly competitive yields on surplus liquidity."
        subDescription1="Maximize your returns while ensuring your capital is managed safely within regulatory guidelines."
        seed="treasury-details"
      />

      {/* Offerings */}
      <ServiceOfferings title="Structured Treasury Solutions" offerings={offeringsData} />

      <CommunitySection />
    </div>
  );
}
