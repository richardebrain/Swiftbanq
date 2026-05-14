import type { Metadata } from 'next';
import { Briefcase, Car, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products & Services',
  description: 'Explore Swiftbanq\'s financial products: SME Financing, Asset Financing, Digital Lending, and Treasury Services. Tailored credit solutions for businesses and individuals in Nigeria.',
  alternates: {
    canonical: 'https://swiftbanq.com/services',
  },
  openGraph: {
    title: 'Products & Services | Swiftbanq Credit Solutions',
    description: 'SME Financing, Asset Financing, Digital Lending, and Treasury Services for businesses and individuals across Nigeria.',
    url: 'https://swiftbanq.com/services',
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: Briefcase,
      id: "sme-financing",
      title: "SME Financing",
      description: "Comprehensive financial backing for small and medium enterprises positioned for growth.",
      details: [
        "Local Purchase Orders (LPO) Financing",
        "Invoice Discounting Facility (IDF)",
        "Bridge Finance",
        "Contract Finance",
        "Project Finance & Syndication"
      ]
    },
    {
      icon: Car,
      id: "asset-financing",
      title: "Asset Financing",
      description: "Acquire the assets you need to scale up your operations or improve your lifestyle without tying up capital.",
      details: [
        "Loans for Vehicles",
        "Household & Office Equipment Financing",
        "Productive Assets Backing",
        "Service Contract Backed Assets"
      ]
    },
    {
      icon: Smartphone,
      id: "digital-lending",
      title: "Digital Lending",
      description: "Seamless, paperless, and fast personal loans accessible from anywhere.",
      details: [
        "Mobile & Web-based applications",
        "Instant disbursement",
        "Tailored for salary earners",
        "Flexible repayment terms"
      ]
    },
    {
      icon: TrendingUp,
      id: "treasury-services",
      title: "Treasury Services",
      description: "Grow your wealth with structured investment and borrowing solutions.",
      details: [
        "Secure Borrowings",
        "Relatively Higher Returns",
        "Fixed Deposit Options",
        "Portfolio Diversification"
      ]
    }
  ];

  return (
    <div className="w-full bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-brand-dark text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Products & Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tailored financial solutions designed to empower your personal and business goals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {services.map((service, idx) => (
            <div key={service.id} id={service.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100`}>
              <div className="lg:w-1/2 w-full flex justify-center">
                 <div className="relative w-full max-w-md aspect-square bg-brand-gray rounded-full flex items-center justify-center">
                    <div className="absolute inset-4 bg-brand-yellow/10 rounded-full"></div>
                    <service.icon className="w-32 h-32 text-brand-dark" />
                 </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/20 text-brand-dark rounded-full text-sm font-semibold mb-6">
                   Service {idx + 1}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-brand-yellow/20 text-brand-dark flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow transition-colors group">
                  Apply for {service.title} 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Ready Action */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
         <div className="bg-brand-yellow rounded-3xl p-12">
            <h2 className="text-3xl font-black text-brand-dark mb-4">Unsure which product fits your needs?</h2>
            <p className="text-brand-dark/80 mb-8 text-lg">Our financial advisors are ready to help you structure the perfect loan or investment.</p>
            <Link href="/contact" className="px-8 py-4 bg-brand-yellow text-brand-dark font-bold rounded-md hover:bg-brand-yellow-hover transition-colors inline-block">
               Speak to an Advisor
            </Link>
         </div>
      </div>
    </div>
  );
}
