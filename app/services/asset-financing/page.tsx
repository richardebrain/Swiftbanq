import { CommunitySection } from '@/components/CommunitySection';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceDetails } from '@/components/ServiceDetails';
import { ServiceOfferings } from '@/components/ServiceOfferings';

export const metadata = {
  title: 'Asset Financing | Swiftbanq Credit Solutions',
  description: 'Asset Financing solutions by Swiftbanq Credit Solutions.',
};

export default function AssetFinancingPage() {
  const offeringsData = [
    {
      shortTitle: "Vehicle Financing",
      fullTitle: "Fleet & Vehicle Financing",
      description: "Get funding to purchase commercial fleets or individual vehicles for personal or business use with flexible repayment terms.",
      colorClass: "bg-brand-dark",
      textClass: "text-white",
      seed: "vehicles"
    },
    {
      shortTitle: "Office Equipment",
      fullTitle: "Office Equipment Loans",
      description: "Equip your workspace with the latest technology, servers, and furniture to boost productivity without upfront capital drain.",
      colorClass: "bg-[#FF5A50]",
      textClass: "text-white",
      seed: "office"
    },
    {
      shortTitle: "Household Assets",
      fullTitle: "Household Equipment",
      description: "Financing for major household appliances, solar installations, and assets with manageable monthly repayment plans.",
      colorClass: "bg-[#b4fc08]",
      textClass: "text-brand-dark",
      seed: "household"
    },
    {
      shortTitle: "Heavy Machinery",
      fullTitle: "Specialized Machinery",
      description: "Specialized financing for acquiring industrial equipment, geared towards manufacturing, agriculture, and construction.",
      colorClass: "bg-teal-600",
      textClass: "text-white",
      seed: "machinery"
    }
  ];

  return (
    <div className="w-full bg-transparent">
      {/* Hero */}
      <ServiceHero 
        title="Asset Financing"
        description="Acquire the productive assets you need today while managing your cash flow efficiently. Our asset financing solutions are designed to support your operational capacity without severe upfront capital outlay."
        buttonText="Talk to an expert"
        buttonLink="/contact"
        seed="asset-hero"
      />

      <ServiceDetails 
        headingPart1="Say"
        headingHighlight="goodbye"
        headingPart2="to upfront capital burden and hello to operational efficiency."
        description1="Our asset financing allows you to acquire the necessary equipment or vehicles immediately while spreading the cost over a manageable period."
        subDescription1="Improve your productivity without depleting your working capital reserves."
        seed="asset-details"
      />

      {/* Offerings */}
      <ServiceOfferings title="Financing Capabilities" offerings={offeringsData} />

      <CommunitySection />
    </div>
  );
}
