import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ApplyNowButton } from '@/components/ApplyNowButton';

export const metadata: Metadata = {
  title: 'Asset Financing',
  description: 'Asset Financing in Nigeria — vehicle loans, office equipment financing, household assets, and industrial machinery. Acquire what you need today and repay in flexible instalments with Swiftbanq.',
  alternates: { canonical: 'https://swiftbanq.com/services/asset-financing' },
  openGraph: {
    title: 'Asset Financing | Swiftbanq Credit Solutions',
    description: 'Finance vehicles, office equipment, household assets, and industrial machinery in Nigeria. Flexible repayment, low rates, fast approval.',
    url: 'https://swiftbanq.com/services/asset-financing',
  },
};

export default function AssetFinancingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Asset Financing' },
        ]}
      />

      {/* ─── 1. HERO ─── */}
      <section className="bg-[#F3F4F1] relative overflow-hidden pt-10 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 pb-0">

            {/* Left */}
            <div className="w-full lg:w-[52%] flex flex-col justify-center pt-8 pb-16 lg:pb-28">
              <span className="inline-flex self-start text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Asset Financing Service
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-heading font-medium text-brand-dark leading-[1.1] mb-6 tracking-tight">
                Own more assets,<br />pay less upfront
              </h1>
              <p className="text-base text-gray-600 font-medium mb-10 max-w-sm leading-relaxed">
                Acquire vehicles, equipment, and machinery your business needs today — and spread the cost over manageable monthly instalments.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <ApplyNowButton />
                <Link
                  href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20speak%20with%20your%20sales%20team%20about%20Asset%20Financing.%20Could%20you%20please%20assist%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-3 rounded-full border border-gray-300 text-brand-dark font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg bg-white/50 backdrop-blur-sm"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Right — image + floating badges */}
            <div className="w-full lg:w-[48%] relative h-[380px] sm:h-[460px] lg:h-[520px] mt-auto">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image src="/images/asset-card.jpg" alt="Asset financing" fill className="object-cover object-center" />
              </div>
              <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-500">Flexible Repayment</span>
              </div>
              <div className="absolute top-16 left-4 bg-brand-yellow rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-xs font-semibold text-brand-dark mb-0.5">Approval Rate</p>
                <p className="text-3xl font-bold text-brand-dark">95%</p>
                <p className="text-xs text-brand-dark/70 font-medium">of applications approved</p>
              </div>
              <div className="absolute top-44 left-4 bg-white rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-semibold text-brand-dark">Low Interest Rates</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. MISSION STATEMENT ─── */}
      <section className="bg-[#F3F4F1] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-4xl lg:text-[2.6rem] font-heading font-medium text-brand-dark leading-[1.35] tracking-tight">
            Our mission is to help every Nigerian business and individual acquire{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-dark">productive assets</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow/60 -z-0 rounded"></span>
            </span>
            {' '}without draining their capital — through flexible financing built for the{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-dark">real economy</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow/60 -z-0 rounded"></span>
            </span>.
          </p>
          <p className="mt-8 text-base font-semibold text-gray-500 tracking-wide">— Swiftbanq Credit Solutions</p>
        </div>
      </section>

      {/* ─── 3. SERVICES CARDS ─── */}
      <section className="bg-[#F3F4F1] pt-6 pb-16 md:pt-8 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="border border-brand-dark/10 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-brand-dark text-2xl">Vehicle Financing</h3>
                <Link href="/apply" className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-dark/80 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                Purchase cars, commercial vehicles, or fleet assets for your business or personal use with easy monthly repayments.
              </p>
              <div className="rounded-xl overflow-hidden h-64 relative">
                <Image src="/images/asset-card.jpg" alt="Vehicle Financing" fill className="object-cover" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {['Cars', 'Fleet', 'Commercial'].map((tag) => (
                    <span key={tag} className="bg-white/90 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-brand-dark/10 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-brand-dark text-2xl">Office Equipment</h3>
                <Link href="/apply" className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-dark/80 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                Equip your workspace with the latest technology, servers, and furniture to boost productivity without upfront capital drain.
              </p>
              <div className="rounded-xl overflow-hidden h-64 relative">
                <Image src="/images/sme-team.jpg" alt="Office Equipment" fill className="object-cover" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {['Laptops', 'Servers', 'Furniture'].map((tag) => (
                    <span key={tag} className="bg-white/90 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-brand-dark/10 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-brand-dark text-2xl">Household Assets</h3>
                <Link href="/apply" className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-dark/80 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                Finance major appliances, solar installations, and household assets with manageable monthly repayment plans tailored to your income.
              </p>
              <div className="rounded-xl overflow-hidden h-64 relative">
                <Image src="/images/why-section.jpg" alt="Household Assets" fill className="object-cover" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {['Solar', 'Appliances', 'Home'].map((tag) => (
                    <span key={tag} className="bg-white/90 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-brand-dark/10 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-brand-dark text-2xl">Industrial Machinery</h3>
                <Link href="/apply" className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-dark/80 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                Specialized financing for acquiring industrial equipment — geared towards manufacturing, agriculture, and construction sectors.
              </p>
              <div className="rounded-xl overflow-hidden h-64 relative">
                <Image src="/images/about-collab.jpg" alt="Industrial Machinery" fill className="object-cover" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {['Manufacturing', 'Agriculture', 'Construction'].map((tag) => (
                    <span key={tag} className="bg-white/90 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. WHY CHOOSE US — black bg ─── */}
      <section className="bg-[#1a1a1a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-500 mb-12 uppercase tracking-widest text-center">Why clients choose our asset financing</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
              <div className="w-14 h-14 rounded-full border border-brand-yellow/50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-white text-base mb-2">Low interest rates</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Market-competitive rates that make asset acquisition affordable without straining your monthly cash flow.</p>
            </div>
            <div className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
              <div className="w-14 h-14 rounded-full border border-brand-yellow/50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="font-bold text-white text-base mb-2">Flexible repayment terms</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Choose from 12 to 36-month plans designed to align with your income cycle and business revenue.</p>
            </div>
            <div className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
              <div className="w-14 h-14 rounded-full border border-brand-yellow/50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-white text-base mb-2">Fast approval process</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Get a decision within 48 hours and receive your asset or disbursement shortly after — no long waits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. HOW TO APPLY ─── */}
      <section className="bg-[#1a1a1a] pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-widest text-white uppercase mb-6">
              How to apply
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-white leading-tight tracking-tight">
              Get your asset financed in four simple steps
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10" style={{ left: '3rem', right: '3rem' }} />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
              {[
                { step: '01', title: 'Choose your asset', desc: 'Tell us what asset you need — a vehicle, equipment, or machinery — and the approximate cost.', icon: <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
                { step: '02', title: 'Submit your application', desc: 'Fill out our short form with your personal or business details and proof of income.', icon: <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
                { step: '03', title: 'Get your offer', desc: 'Receive a financing offer with clear terms, repayment schedule, and rates within 24 hours.', icon: <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { step: '04', title: 'Asset delivered', desc: 'Accept the offer and take ownership of your asset — or receive funds directly to your account.', icon: <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> },
              ].map(({ step, title, desc, icon }, i, arr) => (
                <div key={step} className="relative flex lg:flex-col items-start gap-6 lg:gap-0 pb-10 lg:pb-0 lg:pr-10">
                  {i < arr.length - 1 && <div className="lg:hidden absolute left-6 top-14 bottom-0 w-px bg-white/10" />}
                  <div className="relative z-10 shrink-0 flex flex-col lg:flex-row items-center lg:mb-8">
                    <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg">{icon}</div>
                    {i < arr.length - 1 && <div className="hidden lg:block flex-1 h-px bg-white/10 w-full ml-0 absolute left-12 top-6 right-0" style={{ width: 'calc(100% - 3rem)' }} />}
                  </div>
                  <div className="lg:mt-8 pt-1 lg:pt-0">
                    <span className="text-xs font-bold text-gray-600 tracking-widest block mb-2">{step}</span>
                    <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 md:mt-24 relative w-full h-[280px] sm:h-[380px] md:h-[480px] rounded-2xl overflow-hidden">
            <Image src="/images/asset-card.jpg" alt="Asset financing team" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── 6. FAQ ─── */}
      <section className="bg-[#F3F4F1] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-heading font-medium text-brand-dark text-center leading-tight tracking-tight mb-12">
            Common questions about Asset Financing
          </h2>
          <div className="divide-y divide-gray-200">
            {[
              { q: 'What types of assets can I finance?', a: 'We finance vehicles (personal and commercial), office equipment, laptops and servers, household appliances, solar systems, and industrial machinery across manufacturing, agriculture, and construction.' },
              { q: 'What is the minimum and maximum loan amount?', a: 'Asset financing starts from ₦200,000 for smaller items and can go significantly higher for vehicles and industrial equipment, based on your financial profile and the asset value.' },
              { q: 'How long are the repayment terms?', a: 'We offer flexible repayment periods from 12 to 36 months — you choose the term that best matches your income cycle and cash flow.' },
              { q: 'Do I need to make a down payment?', a: 'In most cases, a deposit or down payment improves your terms and approval chances. However, some products allow 100% financing subject to credit assessment.' },
              { q: 'Can I use asset financing for a second-hand item?', a: 'Yes. We evaluate both new and fairly-used assets on a case-by-case basis. Our team will guide you through the documentation required.' },
            ].map(({ q, a }, i) => (
              <details key={i} className="group py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-4 font-semibold text-brand-dark text-[15px] select-none">
                  {q}
                  <span className="shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-open:border-brand-dark group-open:text-brand-dark transition-colors">
                    <svg className="w-3 h-3 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" /></svg>
                  </span>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. STATS ─── */}
      <section className="bg-[#F3F4F1] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-[45%] relative h-[340px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shrink-0">
              <Image src="/images/sme-team.jpg" alt="Asset financing clients" fill className="object-cover" />
            </div>
            <div className="w-full lg:w-[55%]">
              <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-heading font-medium text-brand-dark leading-[1.15] mb-8 tracking-tight">
                Helping Nigerians<br />own what they need
              </h2>
              <div className="flex items-start gap-4 mb-10">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image src="/images/ceo.jpg" alt="Asset Specialist" width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-sm">Dedicated asset financing support</p>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">Our specialists guide you through every step — from choosing the right structure to getting your asset faster.</p>
                </div>
              </div>
              <div className="flex items-start gap-12">
                <div>
                  <p className="text-5xl md:text-6xl font-bold text-brand-dark mb-1">500+</p>
                  <p className="text-sm text-gray-500 font-medium">assets financed to date</p>
                </div>
                <div>
                  <p className="text-5xl md:text-6xl font-bold text-brand-dark mb-1">95%</p>
                  <p className="text-sm text-gray-500 font-medium">client satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
