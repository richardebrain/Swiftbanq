import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ApplyNowButton } from '@/components/ApplyNowButton';

export const metadata: Metadata = {
  title: 'Treasury Services',
  description: 'Treasury Services in Nigeria — fixed deposits, structured investments, and yield maximisation for individuals and corporates. Earn 12%–20% per annum with Swiftbanq Credit Solutions.',
  alternates: { canonical: 'https://swiftbanq.com/treasury-services' },
  openGraph: {
    title: 'Treasury Services | Swiftbanq Credit Solutions',
    description: 'Earn competitive returns on your idle funds with fixed deposits, structured borrowings, and yield maximisation solutions in Nigeria.',
    url: 'https://swiftbanq.com/treasury-services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Treasury Services — Swiftbanq Credit Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function TreasuryServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Treasury Services' },
        ]}
      />

      {/* ─── 1. HERO ─── */}
      <section className="bg-[#F3F4F1] relative overflow-hidden pt-10 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 pb-0">

            {/* Left */}
            <div className="w-full lg:w-[52%] flex flex-col justify-center pt-8 pb-16 lg:pb-28">
              <span className="inline-flex self-start text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Treasury Services
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-heading font-medium text-brand-dark leading-[1.1] mb-6 tracking-tight">
                Invest your money, earn up to 20% p.a.
              </h1>
              <p className="text-base text-gray-600 font-medium mb-10 max-w-sm leading-relaxed">
                Stop letting your idle funds lose value. Invest with Swiftbanq and earn highly competitive returns — safely, securely, and with dedicated support.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <ApplyNowButton />
                <Link
                  href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20speak%20with%20your%20treasury%20team%20about%20investing%20my%20funds.%20Could%20you%20please%20assist%20me%3F"
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
                <Image src="/images/treasury-hero.jpg" alt="Treasury investment dashboard" fill className="object-cover object-center" />
              </div>
              <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-500">Capital Protected</span>
              </div>
              <div className="absolute top-16 left-4 bg-brand-yellow rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-xs font-semibold text-brand-dark mb-0.5">Annual Returns</p>
                <p className="text-3xl font-bold text-brand-dark">20%</p>
                <p className="text-xs text-brand-dark/70 font-medium">up to 20% per annum</p>
              </div>
              <div className="absolute top-44 left-4 bg-white rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-semibold text-brand-dark">Dedicated Manager</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. MISSION STATEMENT ─── */}
      <section className="bg-[#F3F4F1] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-4xl lg:text-[2.6rem] font-heading font-medium text-brand-dark leading-[1.35] tracking-tight">
            Our mission is to ensure every naira you set aside works as hard as you do — through{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-dark">structured investment</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow/60 -z-0 rounded"></span>
            </span>
            {' '}solutions that deliver{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-dark">superior returns</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow/60 -z-0 rounded"></span>
            </span>{' '}
            without compromising your capital.
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
                <h3 className="font-bold text-brand-dark text-2xl">Fixed Deposits</h3>
                <Link href="/apply" className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-dark/80 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                Lock in your capital for 30 to 365 days and earn highly competitive, guaranteed returns on every naira invested.
              </p>
              <div className="rounded-xl overflow-hidden h-64 relative">
                <Image src="/images/treasury-fixed-deposits.jpg" alt="Fixed Deposits" fill className="object-cover" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {['30–365 days', 'Guaranteed', 'High Yield'].map((tag) => (
                    <span key={tag} className="bg-white/90 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-brand-dark/10 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-brand-dark text-2xl">Short-term Investments</h3>
                <Link href="/apply" className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-dark/80 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                Flexible short-term placements from 30 days. Ideal for individuals and businesses with liquidity requirements.
              </p>
              <div className="rounded-xl overflow-hidden h-64 relative">
                <Image src="/images/treasury-short-term.jpg" alt="Short-term Investments" fill className="object-cover" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {['Flexible', 'Liquid', 'Short-term'].map((tag) => (
                    <span key={tag} className="bg-white/90 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-brand-dark/10 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-brand-dark text-2xl">Corporate Treasury</h3>
                <Link href="/apply" className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-dark/80 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                Customized treasury solutions for businesses seeking to optimise idle corporate funds with minimal risk and maximum yield.
              </p>
              <div className="rounded-xl overflow-hidden h-64 relative">
                <Image src="/images/treasury-corporate.jpg" alt="Corporate Treasury" fill className="object-cover" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {['Corporate', 'Structured', 'Optimised'].map((tag) => (
                    <span key={tag} className="bg-white/90 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-brand-dark/10 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-brand-dark text-2xl">Yield Maximisation</h3>
                <Link href="/apply" className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-dark/80 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
                Tailored investment portfolios built to extract the best possible return from your capital — active management, transparent reporting.
              </p>
              <div className="rounded-xl overflow-hidden h-64 relative">
                <Image src="/images/treasury-yield.jpg" alt="Yield Maximisation" fill className="object-cover" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {['Portfolio', 'Max Returns', 'Managed'].map((tag) => (
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
          <p className="text-xs font-semibold text-gray-500 mb-12 uppercase tracking-widest text-center">Why investors choose Swiftbanq treasury</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
              <div className="w-14 h-14 rounded-full border border-brand-yellow/50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h4 className="font-bold text-white text-base mb-2">12%–20% returns per annum</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Earn significantly more than traditional savings accounts with structured, high-yield investment options.</p>
            </div>
            <div className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
              <div className="w-14 h-14 rounded-full border border-brand-yellow/50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="font-bold text-white text-base mb-2">Capital-protected products</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Our treasury options prioritise capital preservation alongside growth — your principal is always protected.</p>
            </div>
            <div className="flex flex-col items-center text-center px-8 py-8 sm:py-4">
              <div className="w-14 h-14 rounded-full border border-brand-yellow/50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h4 className="font-bold text-white text-base mb-2">Dedicated account manager</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Every investor gets a personal account officer — one point of contact for updates, renewals, and advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. HOW TO INVEST ─── */}
      <section className="bg-[#1a1a1a] pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-widest text-white uppercase mb-6">
              How to invest
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-white leading-tight tracking-tight">
              Start earning in four simple steps
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10" style={{ left: '3rem', right: '3rem' }} />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
              {[
                { step: '01', title: 'Choose your product', desc: 'Select from fixed deposits, short-term placements, or corporate treasury solutions based on your goals.', icon: <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
                { step: '02', title: 'Submit your details', desc: 'Provide your investment amount, preferred tenure, and account information via our form or WhatsApp.', icon: <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
                { step: '03', title: 'Receive your offer', desc: 'Our treasury team will send you a personalised investment offer with confirmed interest rate and payout date.', icon: <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { step: '04', title: 'Earn your returns', desc: 'Fund your investment and watch your returns grow. Receive payout directly to your bank account at maturity.', icon: <svg className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> },
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
            <Image src="/images/treasury-team.jpg" alt="Treasury investment team" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── 6. FAQ ─── */}
      <section className="bg-[#F3F4F1] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-heading font-medium text-brand-dark text-center leading-tight tracking-tight mb-12">
            Common questions about Treasury Services
          </h2>
          <div className="divide-y divide-gray-200">
            {[
              { q: 'What is the minimum investment amount?', a: 'Our treasury products start from ₦500,000. For corporate placements and structured portfolios, minimums may vary — speak with our treasury team for a tailored offer.' },
              { q: 'How are interest rates determined?', a: 'Rates range from 12% to 20% per annum, depending on the investment amount, tenure, and product type. Longer tenures and larger amounts typically attract better rates.' },
              { q: 'Is my capital safe?', a: 'Swiftbanq is a duly licensed NBFI operating under the Lagos State Money Lenders Law. Our products are structured to prioritise capital preservation alongside yield growth.' },
              { q: 'When do I receive my returns?', a: 'Returns are paid out at maturity directly to your bank account. For longer tenures, we can also arrange periodic (monthly or quarterly) interest payments by agreement.' },
              { q: 'Can I roll over my investment at maturity?', a: 'Yes. You can choose to roll over the principal (and/or accrued interest) into a new investment term at the prevailing rate — your account manager will guide you through the process.' },
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
              <Image src="/images/treasury-stats.jpg" alt="Treasury investors" fill className="object-cover" />
            </div>
            <div className="w-full lg:w-[55%]">
              <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-heading font-medium text-brand-dark leading-[1.15] mb-8 tracking-tight">
                Putting your money to work for you
              </h2>
              <div className="flex items-start gap-4 mb-10">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image src="/images/ceo.jpg" alt="Treasury Specialist" width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-sm">Dedicated treasury management</p>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">Every investor is assigned a personal account officer who monitors your portfolio and keeps you informed at every step.</p>
                </div>
              </div>
              <div className="flex items-start gap-12">
                <div>
                  <p className="text-5xl md:text-6xl font-bold text-brand-dark mb-1">₦500M+</p>
                  <p className="text-sm text-gray-500 font-medium">funds under management</p>
                </div>
                <div>
                  <p className="text-5xl md:text-6xl font-bold text-brand-dark mb-1">18%</p>
                  <p className="text-sm text-gray-500 font-medium">average annual return paid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
