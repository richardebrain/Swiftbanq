import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { SmeServiceCards } from '@/components/SmeServiceCards';
import { ApplyNowButton } from '@/components/ApplyNowButton';

export const metadata: Metadata = {
  title: 'SME Financing',
  description: 'SME Financing in Nigeria — LPO financing, invoice discounting, bridge finance, contract finance, and project syndication. Fast approvals and competitive rates from Swiftbanq Credit Solutions.',
  alternates: {
    canonical: 'https://swiftbanq.com/services/sme-financing',
  },
  openGraph: {
    title: 'SME Financing | Swiftbanq Credit Solutions',
    description: 'Fuel your business growth with LPO financing, invoice discounting, bridge finance, and project syndication. Fast approvals for Nigerian SMEs.',
    url: 'https://swiftbanq.com/services/sme-financing',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SME Financing — Swiftbanq Credit Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function SMEFinancingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },

          { name: 'SME Financing' },
        ]}
      />

      {/* ─── 1. HERO — cream bg, left content + right image with floating badges ─── */}
      <section className="bg-[#F3F4F1] relative overflow-hidden pt-10 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 pb-0">

            {/* Left */}
            <div className="w-full lg:w-[52%] flex flex-col justify-center pt-8 pb-16 lg:pb-28">
              <span className="inline-flex self-start text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full border border-gray-300 bg-white/60 backdrop-blur-sm">
                SME Financing Service
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-heading font-medium text-brand-dark leading-[1.1] mb-6 tracking-tight">
                Lending Facility for Growing Business
              </h1>

              <p className="text-base text-gray-600 font-medium mb-10 max-w-sm leading-relaxed">
                We offer SME funding starting from N500k, and above, depending on your business needs even if its invoice financing, LPO financing etc.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <ApplyNowButton />
                <Link
                  href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20speak%20with%20your%20sales%20team%20about%20your%20financial%20services.%20Could%20you%20please%20assist%20me%3F"
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
                <Image
                  src="/images/sme-card.jpg"
                  alt="SME business owners"
                  fill
                  className="object-cover object-center"
                  unoptimized
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badge: top left */}
              <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-500">Fast Disbursement</span>
              </div>

              {/* Badge: below fast disbursement */}
              <div className="absolute top-16 left-4 bg-brand-yellow rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-xs font-semibold text-brand-dark mb-0.5">Better Cash Flow</p>
                <p className="text-3xl font-bold text-brand-dark">94%</p>
                <p className="text-xs text-brand-dark/70 font-medium">of clients report improvement</p>
              </div>

              {/* Badge: below better cash flow */}
              <div className="absolute top-44 left-4 bg-white rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-semibold text-brand-dark">Online Approvals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. MISSION STATEMENT — cream bg, centered large text ─── */}
      <section className="bg-[#F3F4F1] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-4xl lg:text-[2.6rem] font-heading font-medium text-brand-dark leading-[1.35] tracking-tight">
            Our mission is to provide smart capital for{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-dark">growing SMEs</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow/60 -z-0 rounded"></span>
            </span>
            , ensuring every business owner is met with the speed, flexibility, and{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-dark">structured expertise</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow/60 -z-0 rounded"></span>
            </span>{' '}
            they deserve.
          </p>
          <p className="mt-8 text-base font-semibold text-gray-500 tracking-wide">— Swiftbanq Credit Solutions</p>
        </div>
      </section>

      {/* ─── 3. SERVICES CARDS — cream bg, 2-column cards ─── */}
      <section className="bg-[#F3F4F1] pt-6 pb-16 md:pt-8 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmeServiceCards />
        </div>
      </section>

      {/* ─── 4. WHY CHOOSE US — black bg ─── */}
      <section className="bg-[#1a1a1a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-500 mb-12 uppercase tracking-widest text-center">Why businesses choose us</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">

            {/* Item 1 */}
            <div className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
              <div className="w-14 h-14 rounded-full border border-brand-yellow/50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-white text-base mb-2">Competitive interest rates</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Enjoy market-leading rates that are fair, transparent, and designed to support sustainable repayment.</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
              <div className="w-14 h-14 rounded-full border border-brand-yellow/50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h4 className="font-bold text-white text-base mb-2">Minimal paperwork required</h4>
              <p className="text-gray-500 text-sm leading-relaxed">We keep it simple. Apply and get approved with minimal documentation — no red tape, no hassle.</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
              <div className="w-14 h-14 rounded-full border border-brand-yellow/50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-white text-base mb-2">48-hour turnaround time</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Get your money disbursed within 48 hours. Fast, efficient service backed by a licensed financial institution.</p>
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
              Get funded in four simple steps
            </h2>
          </div>
          {/* Timeline */}
          <div className="relative">
            {/* Horizontal connector line (desktop) */}
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10" style={{ left: '3rem', right: '3rem' }} />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-0">
              {[
                {
                  step: "01",
                  title: "Submit your application",
                  desc: "Fill out our short online form with your business details and financing needs. It takes less than 5 minutes.",
                  icon: (
                    <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  ),
                },
                {
                  step: "02",
                  title: "Document review",
                  desc: "Our team reviews your bank statements, business registration, and ID. Minimal paperwork, maximum speed.",
                  icon: (
                    <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  ),
                },
                {
                  step: "03",
                  title: "Get your offer",
                  desc: "Receive a tailored financing offer within 24 hours — clear terms, competitive rates, no hidden charges.",
                  icon: (
                    <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  ),
                },
                {
                  step: "04",
                  title: "Funds disbursed",
                  desc: "Accept your offer and receive funds directly into your business account within 48 hours of approval.",
                  icon: (
                    <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  ),
                },
              ].map(({ step, title, desc, icon }, i, arr) => (
                <div key={step} className="relative flex lg:flex-col items-start lg:items-start gap-6 lg:gap-0 pb-10 lg:pb-0 lg:pr-10">

                  {/* Mobile: vertical line */}
                  {i < arr.length - 1 && (
                    <div className="lg:hidden absolute left-6 top-14 bottom-0 w-px bg-white/10" />
                  )}

                  {/* Node */}
                  <div className="relative z-10 shrink-0 flex flex-col lg:flex-row items-center lg:mb-8">
                    <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg">
                      {icon}
                    </div>
                    {/* Desktop: connector to next node */}
                    {i < arr.length - 1 && (
                      <div className="hidden lg:block flex-1 h-px bg-white/10 w-full ml-0 absolute left-12 top-6 right-0" style={{ width: 'calc(100% - 3rem)' }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="lg:mt-8 pt-1 lg:pt-0">
                    <span className="text-xs font-bold text-gray-600 tracking-widest block mb-2">{step}</span>
                    <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
          {/* Full-width image */}
          <div className="mt-16 md:mt-24 relative w-full h-[280px] sm:h-[380px] md:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="/images/sme-team.jpg"
              alt="SME business team"
              fill
              className="object-cover object-center"
              unoptimized
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── 6. FAQ SECTION ─── */}
      <section className="bg-[#F3F4F1] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-heading font-medium text-brand-dark text-center leading-tight tracking-tight mb-12">
            Common questions about SME Financing
          </h2>
          <div className="divide-y divide-gray-200">
            {[
              {
                q: "How much can I borrow under the SME Financing facility?",
                a: "We offer SME funding starting from ₦500,000 and above, depending on your business needs — including invoice financing, LPO financing, and more.",
              },
              {
                q: "What documents do I need to apply?",
                a: "We keep documentation minimal. Typically you'll need a valid ID, proof of business registration, bank statements (last 6 months), and a brief description of your financing need.",
              },
              {
                q: "How long does approval take?",
                a: "Our process is designed for speed. Most applications receive a decision within 24–48 hours, with disbursement following shortly after approval.",
              },
              {
                q: "Do I need collateral to access SME financing?",
                a: "Collateral requirements vary based on loan size and business profile. We offer both secured and unsecured options — our team will guide you through the best fit.",
              },
              {
                q: "Can I apply if my business is less than a year old?",
                a: "Yes. We evaluate each application on its merits, including cash flow, business activity, and repayment capacity — not just years in operation.",
              },
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

      {/* ─── 7. STATS SECTION — cream bg, image left + content+stats right ─── */}
      <section className="bg-[#F3F4F1] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left: Image */}
            <div className="w-full lg:w-[45%] relative h-[340px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shrink-0">
              <Image
                src="/images/sme-card.jpg"
                alt="Empowering SME businesses"
                fill
                className="object-cover"
                unoptimized
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right: Headline + specialist card + stats */}
            <div className="w-full lg:w-[55%]">
              <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-heading font-medium text-brand-dark leading-[1.15] mb-8 tracking-tight">
                Empowering businesses to scale to the fullest
              </h2>

              {/* Specialist card */}
              <div className="flex items-start gap-4 mb-10">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/images/ceo.jpg"
                    alt="SME Specialist"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    unoptimized
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-sm">Specialized support for SMEs</p>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">Our team delivers expert financing solutions designed to address growth-stage capital needs.</p>
                </div>
              </div>

              {/* Two stat numbers */}
              <div className="flex items-start gap-12">
                <div>
                  <p className="text-5xl md:text-6xl font-bold text-brand-dark mb-1">87%</p>
                  <p className="text-sm text-gray-500 font-medium">businesses grow faster</p>
                </div>
                <div>
                  <p className="text-5xl md:text-6xl font-bold text-brand-dark mb-1">90%</p>
                  <p className="text-sm text-gray-500 font-medium">of clients return within 6 months</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
