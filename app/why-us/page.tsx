import { CommunitySection } from '@/components/CommunitySection';
import { Target, ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Why Choose Us | Swiftbanq Credit Solutions',
  description: 'Why you should choose Swiftbanq Credit Solutions for your financial needs.',
};

export default function WhyUsPage() {
  return (
    <div className="w-full bg-transparent">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-transparent text-center border-b border-brand-dark/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-yellow mr-2"></span>
            <span className="text-sm font-bold text-brand-dark tracking-wide uppercase">Why Choose Swiftbanq</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-medium tracking-tight text-brand-dark mb-8">
            Built for those who value <span className="text-gray-400">speed and security</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
            We are redefining access to credit through seamless digital experiences, robust security standards, and customer-first solutions.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#b4fc08] hover:bg-[#a3e607] text-black font-bold text-lg transition-colors shadow-sm">
            Get started today <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#FDF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-white p-10 lg:p-12 rounded-[2rem] shadow-sm border border-brand-dark/5">
              <Zap className="w-12 h-12 text-brand-yellow mb-8" />
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 tracking-tight">Lightning Fast Approvals</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Our digital-first infrastructure utilizes advanced algorithms to process loan applications in record time. Say goodbye to weeks of waiting; get approved and funded exactly when you need it.
              </p>
            </div>

            <div className="bg-white p-10 lg:p-12 rounded-[2rem] shadow-sm border border-brand-dark/5">
              <ShieldCheck className="w-12 h-12 text-brand-yellow mb-8" />
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 tracking-tight">Impenetrable Security</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                We safeguard your financial and personal data using military-grade encryption architectures. Compliant with NDPR and backed by the industry's highest security certifications.
              </p>
            </div>

            <div className="bg-white p-10 lg:p-12 rounded-[2rem] shadow-sm border border-brand-dark/5">
              <Target className="w-12 h-12 text-brand-yellow mb-8" />
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 tracking-tight">Tailored Solutions</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                We know that no two businesses or individuals are identical. Our credit products are deeply customizable, offering flexible tenures and structured repayment plans that align with your cash flow.
              </p>
            </div>

            <div className="bg-white p-10 lg:p-12 rounded-[2rem] shadow-sm border border-brand-dark/5">
              <Users className="w-12 h-12 text-brand-yellow mb-8" />
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 tracking-tight">Dedicated Support</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Beyond an app and a website, you have access to a dedicated team of financial advisors. We are here to answer questions, guide your growth, and provide true human support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulated Banner */}
      <section className="py-24 bg-brand-dark text-center px-4">
         <div className="max-w-4xl mx-auto">
            <ShieldCheck className="w-16 h-16 text-[#b4fc08] mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-white tracking-tight mb-6">Fully Regulated & Trusted</h2>
            <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              We operate strictly within the regulatory frameworks set forth by the Central Bank of Nigeria and the Lagos State Money Lenders Law. Your trust is built on our compliance.
            </p>
         </div>
      </section>

      <CommunitySection />
    </div>
  );
}
