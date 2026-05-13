import { CommunitySection } from '@/components/CommunitySection';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceDetails } from '@/components/ServiceDetails';
import { ServiceOfferings } from '@/components/ServiceOfferings';

export const metadata = {
  title: 'SME Financing | Swiftbanq Credit Solutions',
  description: 'SME Financing solutions by Swiftbanq Credit Solutions.',
};

export default function SMEFinancingPage() {
  const offeringsData = [
    {
      shortTitle: "LPO Support",
      fullTitle: "Local Purchase Orders (LPO)",
      description: "Financing to help you execute supply contracts and government orders without depleting your working capital. Take advantage of business opportunities when they arise.",
      colorClass: "bg-brand-dark",
      textClass: "text-white",
      seed: "lpo-sme"
    },
    {
      shortTitle: "Invoice Discount",
      fullTitle: "Invoice Discounting Facility (IDF)",
      description: "Unlock cash tied up in unpaid invoices to maintain steady cash flow and keep operations running smoothly. Get paid today for the work you've already delivered.",
      colorClass: "bg-[#FF5A50]",
      textClass: "text-white",
      seed: "idf-sme"
    },
    {
      shortTitle: "Bridge Finance",
      fullTitle: "Bridge & Contract Finance",
      description: "Short-term funding to bridge the gap between project execution and final payment. Ensure your projects don't stall due to temporary funding constraints.",
      colorClass: "bg-[#b4fc08]",
      textClass: "text-brand-dark",
      seed: "bridge-sme"
    },
    {
      shortTitle: "Project Finance",
      fullTitle: "Project Finance & Syndication",
      description: "Structured long-term financing for larger scale business expansion and capital intensive projects. Built for ambitious enterprises planning significant steps.",
      colorClass: "bg-blue-600",
      textClass: "text-white",
      seed: "project-sme"
    }
  ];

  return (
    <div className="w-full bg-transparent">
      {/* Hero */}
      <ServiceHero 
        title="SME Financing"
        description="Fuel your business growth with our tailored small and medium enterprise solutions. We understand the unique challenges faced by SMEs in Nigeria and provide flexible capital to help you bridge the gap."
        buttonText="Talk to an expert"
        buttonLink="/contact"
        seed="sme-hero"
      />

      <ServiceDetails 
        headingPart1="Say"
        headingHighlight="goodbye"
        headingPart2="to cash flow constraints and hello to sustainable business growth."
        description1="Working directly with you allows us to connect your borrowing capacity to your business potential, meaning we can usually offer you a better structure than you would get elsewhere."
        subDescription1="Take control of your business expansion, execute contracts, and positively impact your bottom line with a tailored corporate loan."
        seed="sme-details"
      />

      {/* Offerings */}
      <ServiceOfferings title="Our SME Loan Products" offerings={offeringsData} />

      <CommunitySection />
    </div>
  );
}
