import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ApplyNowButton } from '@/components/ApplyNowButton';

export const metadata: Metadata = {
  title: 'Asset Financing',
  description:
    'Asset Financing in Nigeria — vehicle loans, office equipment financing, household assets, and industrial machinery. Acquire what you need today and repay in flexible instalments with Swiftbanq.',
  alternates: {
    canonical: 'https://swiftbanq.com/services/asset-financing',
  },
  openGraph: {
    title: 'Asset Financing | Swiftbanq Credit Solutions',
    description:
      'Finance vehicles, office equipment, household assets, and industrial machinery in Nigeria. Flexible repayment, low rates, fast approval.',
    url: 'https://swiftbanq.com/services/asset-financing',
  },
};

export default function AssetFinancingPage() {
  const offeringsData = [
    {
      shortTitle: 'Vehicle Financing',
      fullTitle: 'Fleet & Vehicle Financing',
      description:
        'Get funding to purchase commercial fleets or individual vehicles for personal or business use with flexible repayment terms.',
      colorClass: 'bg-brand-dark',
      textClass: 'text-white',
      seed: 'vehicles',
    },
    {
      shortTitle: 'Office Equipment',
      fullTitle: 'Office Equipment Loans',
      description:
        'Equip your workspace with the latest technology, servers, and furniture to boost productivity without upfront capital drain.',
      colorClass: 'bg-[#FF5A50]',
      textClass: 'text-white',
      seed: 'office',
    },
    {
      shortTitle: 'Household Assets',
      fullTitle: 'Household Equipment',
      description:
        'Financing for major household appliances, solar installations, and assets with manageable monthly repayment plans.',
      colorClass: 'bg-brand-yellow',
      textClass: 'text-brand-dark',
      seed: 'household',
    },
    {
      shortTitle: 'Heavy Machinery',
      fullTitle: 'Specialized Machinery',
      description:
        'Specialized financing for acquiring industrial equipment, geared towards manufacturing, agriculture, and construction.',
      colorClass: 'bg-teal-600',
      textClass: 'text-white',
      seed: 'machinery',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Asset Financing' },
        ]}
      />
      <div className="w-full bg-transparent">
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

        <ServiceOfferings title="Financing Capabilities" offerings={offeringsData} />
      </div>
    </>
  );
}
