import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Briefcase, Car, Smartphone, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { FAQSection } from '@/components/FAQSection';
import { HeroMockup } from '@/components/HeroMockup';
import { ApplyNowButton } from '@/components/ApplyNowButton';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://swiftbanq.com',
  },
};

// FAQ structured data — mirrors the questions in FAQSection component
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Swiftbanq?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Swiftbanq is a duly Licensed money lending institution operating under the regulatory framework of the Lagos State Money Lenders Law. We provide comprehensive financial solutions including SME Financing, Asset Financing, Digital Lending, and Treasury Services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of loans do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a diverse range of loan products including Local Purchase Orders (LPO), Invoice Discounting Facility (IDF), Bridge Finance, Contract Finance, Vehicle Financing, Office/Household Equipment Loans, and Digital Lending for salary earners.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is the loan disbursement process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our digital lending platform and streamlined processes allow for rapid assessment. Once your application is approved and all documentation is verified, disbursement is done instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Swiftbanq protect my data and assets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We employ industry-standard encryption, regulatory compliance measures, and strict data privacy protocols to ensure your information and financial transactions are always secure.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-0 overflow-hidden bg-transparent">
        {/* Pattern - Left */}
        <div className="absolute top-0 h-[800px] w-[550px] pointer-events-none select-none z-0 opacity-60" style={{ left: '-440px' }}>
          <Image src="/pattern 3.svg" alt="" fill className="object-cover object-left-top" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-[#FDF8E7]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FDF8E7] to-transparent" />
        </div>
        {/* Pattern - Right (mirrored) */}
        <div className="absolute top-0 h-[800px] w-[550px] pointer-events-none select-none z-0 opacity-60 scale-x-[-1]" style={{ right: '-440px' }}>
          <Image src="/pattern 3.svg" alt="" fill className="object-cover object-left-top" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-[#FDF8E7]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FDF8E7] to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-12 max-w-6xl mx-auto">
            Borrow <span className="inline-flex items-center align-middle mx-1 md:mx-3 -mt-2 md:-mt-4 relative">
              <div className="flex -space-x-3 md:-space-x-4">
                <Image src="https://img.magnific.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg" alt="Face 1" width={80} height={80} unoptimized className="rounded-full border-[3px] border-[#FDF8E7] w-14 h-14 md:w-20 md:h-20 object-cover" />
                <Image src="https://img.magnific.com/free-photo/portrait-cute-african-american-curly-young-woman-studio_23-2148183328.jpg" alt="Face 2" width={80} height={80} unoptimized className="rounded-full border-[3px] border-[#FDF8E7] w-14 h-14 md:w-20 md:h-20 object-cover relative z-10" />
                <Image src="https://img.magnific.com/free-photo/happy-african-man-looking_171337-9799.jpg" alt="Face 3" width={80} height={80} unoptimized className="rounded-full border-[3px] border-[#FDF8E7] w-14 h-14 md:w-20 md:h-20 object-cover relative z-20" />
              </div>
            </span> and Invest <br className="hidden lg:block" />
            Wisely <span className="inline-flex items-center align-middle mx-2 md:mx-4 -mt-2 md:-mt-4">
               <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-[#f0e7ca] p-2 md:p-3 transform rotate-6 flex items-center justify-center">
                 <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-brand-dark" />
               </div>
            </span> with Us.
          </h1>
          
          <div className="flex justify-center mt-6 md:mt-10">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <ApplyNowButton />
              <Link href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20speak%20with%20your%20sales%20team%20about%20your%20financial%20services.%20Could%20you%20please%20assist%20me%3F" target="_blank" rel="noopener noreferrer" className="px-10 py-3 rounded-full border border-gray-300 text-brand-dark font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg bg-white/50 backdrop-blur-sm">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Graphic Area */}
        <div className="relative mt-16 max-w-full mx-auto h-[500px] md:h-[600px] flex justify-center z-10 w-full overflow-hidden">
          
          {/* Card 1: Extreme Left */}
          <div className="absolute right-[calc(50%+18rem)] lg:right-[calc(50%+22rem)] top-10 lg:top-16 w-[300px] lg:w-[400px] h-[350px] lg:h-[450px] transform -rotate-[6deg] overflow-hidden z-0 border-none hidden md:block">
            <Image src="https://img.magnific.com/premium-photo/portrait-thumbs-up-black-woman-city-business-agreement-success-outdoor-face-like-hand-gesture-african-female-professional-with-emoji-winner-goals-thank-you-vote_590464-197965.jpg" alt="Family" fill unoptimized className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Card 2: Inner Left */}
          <div className="absolute right-[calc(50%+4rem)] lg:right-[calc(50%+2rem)] top-32 lg:top-40 w-[240px] lg:w-[280px] h-[280px] lg:h-[350px] transform rotate-[8deg] overflow-hidden z-10 hidden md:block border-none">
            <Image src="https://img.magnific.com/free-photo/african-american-logistics-managers-discussing-inventory-management-software-while-checking-goods-stock-laptop-distribution-department-employees-talking-about-supply-chain-storehouse_482257-71406.jpg?t=st=1778683970~exp=1778687570~hmac=075b8f21bf33f035eee77d607aa39c1e8633d4aaa782855eca0b6aa4a575b808&w=1480" alt="User" fill unoptimized className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Card 3: Inner Right */}
          <div className="absolute left-[calc(50%+2rem)] lg:left-[calc(50%+8rem)] top-16 lg:top-20 w-[280px] lg:w-[320px] h-[320px] lg:h-[400px] transform -rotate-[4deg] overflow-hidden z-0 hidden md:block border-none">
            <Image src="https://img.magnific.com/premium-photo/portrait-handsome-african-freelancer-man-traditional-costume-sitting-desk-home-office_116547-141333.jpg?w=1480" alt="Professional" fill unoptimized className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Card 4: Extreme Right */}
          <div className="absolute left-[calc(50%+20rem)] lg:left-[calc(50%+26rem)] top-40 lg:top-48 w-[350px] lg:w-[450px] h-[300px] lg:h-[400px] transform rotate-[6deg] overflow-hidden z-10 hidden md:block border-none">
            <Image src="https://img.magnific.com/free-photo/medium-shot-woman-showing-contract_23-2148938351.jpg?t=st=1778688282~exp=1778691882~hmac=10e2f4d6c44f1f61099f64602285a9283a78bd0c80248e0e1805863744217f0f&w=1480" alt="Woman on phone" fill unoptimized className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Center Mockup App Card — tabbed */}
          <HeroMockup />
        </div>
      </section>

      {/* Why Swiftbanq Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left side label */}
            <div className="w-full lg:w-1/4 flex-shrink-0">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-black text-sm font-medium tracking-wide text-black uppercase">
                Why Swiftbanq
              </div>
            </div>
            
            {/* Right side content */}
            <div className="w-full lg:w-3/4">
              <p className="text-3xl md:text-5xl lg:text-[3.5rem] font-heading font-medium leading-[1.2] text-black mb-12 tracking-tight">
                Not everyone gets the financial support they need. But <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">you will.</span>
              </p>
              
              <p className="text-2xl md:text-4xl lg:text-[3rem] font-heading font-medium leading-[1.2] text-black mb-12 tracking-tight">
                You&apos;re building a future that requires immediate, flexible capital. <span className="font-normal">That&apos;s why we created Swiftbanq – because ambitious visionaries require smart, fast, and accessible borrowing and investment solutions.</span>
              </p>

              <div className="w-full mt-8 rounded-2xl overflow-hidden">
                <Image
                  src="https://img.magnific.com/premium-photo/phone-call-documents-businesswoman-with-laptop-office-with-communication-finance-feedback-cellphone-computer-female-financial-manager-mobile-discussion-investment-deal_590464-563646.jpg"
                  alt="Businesswoman on phone call with documents"
                  width={1480}
                  height={800}
                  unoptimized
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Header */}
      <section className="pt-8 pb-4 md:pt-10 md:pb-6 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-black text-sm font-medium tracking-wide text-black uppercase">
                Our Services
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-medium text-brand-dark tracking-tight leading-[1.2] mb-0 max-w-3xl mx-auto">
              Services <span className="inline-flex items-center align-middle mx-1 md:mx-2 -mt-1 md:-mt-2">
                <div className="bg-white rounded-xl md:rounded-2xl border border-[#f0e7ca] p-2 md:p-3 transform -rotate-6 flex items-center justify-center">
                  <Image src="https://cdn-icons-png.flaticon.com/128/9198/9198208.png" alt="Services icon" width={40} height={40} unoptimized className="w-7 h-7 md:w-10 md:h-10" />
                </div>
              </span> that give you <span className="inline-flex items-center align-middle mx-1 md:mx-2 -mt-1 md:-mt-2">
                <div className="bg-white rounded-xl md:rounded-2xl border border-[#f0e7ca] p-2 md:p-3 transform rotate-6 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 md:w-10 md:h-10 text-brand-dark" />
                </div>
              </span> peace of mind.
            </h2>

          </div>
        </div>
      </section>

      {/* Service 1: SME Financing */}
      <section className="py-16 md:py-24 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-[420px]">
                <div className="bg-brand-yellow/20 rounded-[2.5rem] pt-10 px-8 pb-8 relative">

                  {/* Profile card */}
                  <div className="bg-[#fffdf5] rounded-2xl px-5 py-4 flex items-center gap-4 shadow-md mb-8">
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                      <Image src="https://img.magnific.com/free-photo/side-view-businesswoman-showing-analytical-charts-her-male-coworker_1098-20620.jpg?uid=R45719163&semt=ais_incoming&w=740&q=80" alt="SME" width={56} height={56} unoptimized className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-brand-dark text-base">TechPro Ltd</span>
                        <span className="text-gray-400 font-medium text-base">·</span>
                        <span className="font-bold text-brand-dark text-base">₦5,000,000</span>
                        <span className="ml-auto w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </span>
                      </div>
                      <div className="text-gray-400 text-sm font-medium">SME financing</div>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="mb-5 px-1">
                    <div className="relative h-3 bg-brand-yellow/30 rounded-full">
                      <div className="absolute left-0 top-0 h-3 w-[70%] bg-brand-yellow rounded-full"></div>
                      <div className="absolute top-1/2 left-[70%] -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border-[3px] border-brand-yellow/60 rounded-full shadow-lg"></div>
                    </div>
                  </div>

                  {/* Loan term */}
                  <div className="bg-[#fffdf5] rounded-2xl px-5 py-3 flex items-center justify-between shadow-sm mb-6">
                    <span className="text-sm font-semibold text-gray-500">Repayment</span>
                    <div className="flex items-center gap-1">
                      {[3, 6, 12].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${m === 6 ? "bg-brand-yellow text-brand-dark" : "text-gray-400"}`}>{m}mo</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "LPO Finance", icon: "📋" },
                      { label: "Invoice Discounting", icon: "🧾" },
                      { label: "Contract Finance", active: true },
                      { label: "Syndication", icon: "🤝" },
                    ].map((tag) => (
                      <span key={tag.label} className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors ${tag.active ? "bg-[#fffdf5] border-brand-yellow text-brand-dark shadow-sm" : "bg-brand-yellow/10 border-brand-yellow/20 text-gray-600"}`}>
                        {tag.active && <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        {!tag.active && tag.icon && <span>{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
                SME financing <span className="text-brand-dark font-light">with fast approvals</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-tight font-medium">
                Don&apos;t let cash flow hold your business back, get the funds you need to run your business transactions from us.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Quick disbursement
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Competitive rates
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-dark/80 transition-colors text-base">Apply Now <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg></Link>
                <Link href="/contact" className="text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 2: Asset Financing */}
      <section className="py-16 md:py-24 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

            {/* Right (visually): UI Card mockup */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-[420px]">
                <div className="bg-brand-yellow/20 rounded-[2.5rem] pt-10 px-8 pb-8 relative">

                  {/* Profile card */}
                  <div className="bg-[#fffdf5] rounded-2xl px-5 py-4 flex items-center gap-4 shadow-md mb-8">
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                      <Image src="https://img.magnific.com/free-photo/young-black-race-man-with-blueprint-stading-near-glass-building_1157-50906.jpg?t=st=1778690678~exp=1778694278~hmac=987402796dc1ef92822a01ff0420078023758160ca5a1317d232b85f4e2cc48a&w=1480" alt="Asset" width={56} height={56} unoptimized className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-brand-dark text-base">For Emeka</span>
                        <span className="text-gray-400 font-medium text-base">·</span>
                        <span className="font-bold text-brand-dark text-base">₦2,500,000</span>
                        <span className="ml-auto w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </span>
                      </div>
                      <div className="text-gray-400 text-sm font-medium">Asset financing</div>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="mb-5 px-1">
                    <div className="relative h-3 bg-brand-yellow/30 rounded-full">
                      <div className="absolute left-0 top-0 h-3 w-[45%] bg-brand-yellow rounded-full"></div>
                      <div className="absolute top-1/2 left-[45%] -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border-[3px] border-brand-yellow/60 rounded-full shadow-lg"></div>
                    </div>
                  </div>

                  {/* Loan term */}
                  <div className="bg-[#fffdf5] rounded-2xl px-5 py-3 flex items-center justify-between shadow-sm mb-6">
                    <span className="text-sm font-semibold text-gray-500">Repayment</span>
                    <div className="flex items-center gap-1">
                      {[12, 24, 36].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${m === 24 ? "bg-brand-yellow text-brand-dark" : "text-gray-400"}`}>{m}mo</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Vehicle Financing", active: true },
                      { label: "Office Equipment", icon: "🖥️" },
                      { label: "Business Building", icon: "🏠" },
                      { label: "Industrial Machinery", icon: "⚙️" },
                      { label: "Laptop", icon: "💻" },
                    ].map((tag) => (
                      <span key={tag.label} className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors ${tag.active ? "bg-[#fffdf5] border-brand-yellow text-brand-dark shadow-sm" : "bg-brand-yellow/10 border-brand-yellow/20 text-gray-600"}`}>
                        {tag.active && <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        {!tag.active && tag.icon && <span>{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Left: Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
                Asset financing<br />
                <span className="text-brand-dark font-light">own more &</span><br />
                pay less upfront
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-tight font-medium">
                Acquire the asset and equipment you need for your business, and repay installmentally.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Flexible repayment
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Low interest rates
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-dark/80 transition-colors text-base">Apply Now <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg></Link>
                <Link href="/contact" className="text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 3: Personal Loan */}
      <section className="py-16 md:py-24 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-[420px]">

                {/* Outer cream rounded container */}
                <div className="bg-brand-yellow/20 rounded-[2.5rem] pt-10 px-8 pb-8 relative">

                  {/* Floating profile card */}
                  <div className="bg-[#fffdf5] rounded-2xl px-5 py-4 flex items-center gap-4 shadow-md mb-8">
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="https://img.magnific.com/free-photo/portrait-cute-african-american-curly-young-woman-studio_23-2148183328.jpg"
                        alt="Borrower"
                        width={56}
                        height={56}
                        unoptimized
                        className="object-cover w-full h-full"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-brand-dark text-base">For Amaka</span>
                        <span className="text-gray-400 font-medium text-base">·</span>
                        <span className="font-bold text-brand-dark text-base">₦500,000</span>
                        <span className="ml-auto w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </span>
                      </div>
                      <div className="text-gray-400 text-sm font-medium">Personal loan</div>
                    </div>
                  </div>

                  {/* Standalone slider */}
                  <div className="mb-5 px-1">
                    <div className="relative h-3 bg-brand-yellow/30 rounded-full">
                      <div className="absolute left-0 top-0 h-3 w-[55%] bg-brand-yellow rounded-full"></div>
                      <div className="absolute top-1/2 left-[55%] -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border-[3px] border-brand-yellow/60 rounded-full shadow-lg"></div>
                    </div>
                  </div>

                  {/* Loan term selector — directly below slider */}
                  <div className="bg-[#fffdf5] rounded-2xl px-5 py-3 flex items-center justify-between shadow-sm mb-6">
                    <span className="text-sm font-semibold text-gray-500">Loan term</span>
                    <div className="flex items-center gap-1">
                      {[6, 12, 18].map((m) => (
                        <span
                          key={m}
                          className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                            m === 12
                              ? "bg-brand-yellow text-brand-dark"
                              : "text-gray-400"
                          }`}
                        >
                          {m}mo
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Purpose tags */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Home improvement", icon: "🏠" },
                      { label: "Medical/Dental", icon: "🏥" },
                      { label: "School fees", active: true },
                      { label: "Other", icon: "➕" },
                    ].map((tag) => (
                      <span
                        key={tag.label}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                          tag.active
                            ? "bg-[#fffdf5] border-brand-yellow text-brand-dark shadow-sm"
                            : "bg-brand-yellow/10 border-brand-yellow/20 text-gray-600"
                        }`}
                      >
                        {tag.active && (
                          <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        )}
                        {!tag.active && tag.icon && <span>{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Right: Text content */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
                Personal loans<br />
                <span className="text-brand-dark font-light">up to ₦5M &</span><br />
                low rates
              </h3>

              <p className="text-xl text-gray-600 mb-8 leading-tight font-medium">
                Instant cash for salary earners and professionals that needs money for different needs time to time.
              </p>

              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Same-day funding
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Instalment repayment
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-dark/80 transition-colors text-base">
                  Apply Now <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/contact" className="text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-base underline underline-offset-4">
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 4: Treasury Services */}
      <section className="py-16 md:py-24 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

            {/* Left: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-[420px]">
                <div className="bg-brand-yellow/20 rounded-[2.5rem] pt-10 px-8 pb-8 relative">

                  {/* Profile card */}
                  <div className="bg-[#fffdf5] rounded-2xl px-5 py-4 flex items-center gap-4 shadow-md mb-8">
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                      <Image src="https://img.magnific.com/free-photo/two-happy-dark-skinned-businessmen-reading-documents-with-magnifying-glass_273609-9168.jpg" alt="Treasury" width={56} height={56} unoptimized className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-brand-dark text-base">Fatima D.</span>
                        <span className="text-gray-400 font-medium text-base">·</span>
                        <span className="font-bold text-brand-dark text-base">₦10,000,000</span>
                        <span className="ml-auto w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </span>
                      </div>
                      <div className="text-gray-400 text-sm font-medium">Treasury investment</div>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="mb-5 px-1">
                    <div className="relative h-3 bg-brand-yellow/30 rounded-full">
                      <div className="absolute left-0 top-0 h-3 w-[80%] bg-brand-yellow rounded-full"></div>
                      <div className="absolute top-1/2 left-[80%] -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border-[3px] border-brand-yellow/60 rounded-full shadow-lg"></div>
                    </div>
                  </div>

                  {/* Tenure selector */}
                  <div className="bg-[#fffdf5] rounded-2xl px-5 py-3 flex items-center justify-between shadow-sm mb-6">
                    <span className="text-sm font-semibold text-gray-500">Tenure</span>
                    <div className="flex items-center gap-1">
                      {[3, 6, 12].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${m === 12 ? "bg-brand-yellow text-brand-dark" : "text-gray-400"}`}>{m}mo</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Structured Borrowing", active: true },
                      { label: "Fixed Returns", icon: "📈" },
                      { label: "Flexible Tenure", icon: "🗓️" },
                      { label: "Portfolio Mgmt", icon: "💼" },
                    ].map((tag) => (
                      <span key={tag.label} className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors ${tag.active ? "bg-[#fffdf5] border-brand-yellow text-brand-dark shadow-sm" : "bg-brand-yellow/10 border-brand-yellow/20 text-gray-600"}`}>
                        {tag.active && <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        {!tag.active && tag.icon && <span>{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
                Treasury services <span className="text-brand-dark font-light">with high yields & returns</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-tight font-medium">
                Earn 12%–20% interest per annum when you invest with us at Swiftbanq.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Competitive interest
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Dedicated manager
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-dark/80 transition-colors text-base">Apply Now <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg></Link>
                <Link href="/contact" className="text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-medium text-brand-dark mb-24 tracking-tight text-center max-w-4xl mx-auto leading-tight">
            Hear what our <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">clients</span> are saying
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch relative px-0 lg:px-10">
            {/* Card 1 */}
            <div className="bg-brand-yellow rounded-[2rem] p-8 pb-10 w-full md:w-1/4 transform -rotate-[4deg] hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col justify-between z-20">
              <p className="text-brand-dark font-medium text-lg leading-snug mb-12">
                &quot;Swiftbanq&apos;s SME Financing helped us secure the capital we needed to fulfill a major government contract without wiping out our cash flow.&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <div className="font-bold text-brand-dark text-lg">Chinedu K.</div>
                  <div className="text-brand-dark/70 text-sm">CEO, TechPro Solutions</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-brand-dark rounded-[2rem] p-8 pb-10 w-full md:w-1/4 transform rotate-[2deg] hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col justify-between z-10 -ml-0 md:-ml-8 mt-8 md:mt-12">
              <p className="text-white font-medium text-lg leading-snug mb-12">
                &quot;Acquiring our new delivery fleet was a breeze. Their asset financing structured our payments perfectly to match our monthly revenue.&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <div className="font-bold text-white text-lg">Nkechi</div>
                  <div className="text-white/70 text-sm">Logistics Manager</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fdfcf2] rounded-[2rem] p-8 pb-10 w-full md:w-1/4 transform -rotate-[2deg] hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col justify-between z-10 -ml-0 md:-ml-8 mt-4 md:mt-24">
              <p className="text-brand-dark font-medium text-lg leading-snug mb-12">
                &quot;The digital lending process is incredibly seamless. I got a loan disbursed directly to my account within minutes for a personal emergency.&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <div className="font-bold text-brand-dark text-lg">Adebayo O.</div>
                  <div className="text-brand-dark/60 text-xs">@adebayo_o</div>
                  <div className="text-brand-dark/70 text-sm">Salary Earner</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#ff8c00] rounded-[2rem] p-8 pb-10 w-full md:w-1/4 transform rotate-[4deg] hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col justify-between z-20 -ml-0 md:-ml-8 mt-12 md:mt-6">
              <p className="text-brand-dark font-medium text-lg leading-snug mb-12">
                &quot;With their structured treasury services, my company&apos;s idle funds are now yielding highly competitive returns safely and securely.&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div>
                  <div className="font-bold text-brand-dark text-lg">Fatima K.</div>
                  <div className="text-brand-dark/70 text-sm">Financial Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Security & Compliance Section */}
      <section className="py-24 bg-transparent border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex mb-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-black text-sm font-medium tracking-wide text-black uppercase">
                Security
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight text-black">
              Secure by <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">Security</span><br />
              <span className="text-black">regulated in Nigeria</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-brand-dark/10">
            {/* Col 1 */}
            <div className="border-b md:border-b-0 md:border-r border-brand-dark/10 p-8 lg:p-12 pl-0 flex flex-col">
              <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12 max-w-sm">
                Swiftbanq applies privacy-first, NDPR-compliant standards to protect your data and safeguards your funds under strict regulatory supervision.
              </p>

            </div>

            {/* Col 2 */}
            <div className="border-b md:border-b-0 md:border-r border-brand-dark/10 p-8 lg:p-12 relative overflow-hidden group">
               <div className="text-xs font-bold tracking-wider text-brand-dark uppercase mb-16">CBN & LSLB Regulated</div>
               <div className="flex justify-center items-center h-48 relative">
                 {/* Decorative Icon */}
                 <div className="w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center relative z-10 bg-[#FDF8E7] group-hover:scale-105 transition-transform duration-500">
                   <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
                     <Image src="https://fundit.com.ng/home/license.svg" alt="CBN & LSLB License" width={60} height={60} unoptimized />
                   </div>
                 </div>
                 {/* Orbit rings */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-gray-200 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gray-100 rounded-full"></div>
               </div>
            </div>

            {/* Col 3 */}
            <div className="p-8 lg:p-12 relative overflow-hidden group">
               <div className="text-xs font-bold tracking-wider text-brand-dark uppercase mb-16">NDPR Compliant</div>
               <div className="flex justify-center items-center h-48 relative">
                 <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-md transform group-hover:-translate-y-2 transition-transform duration-500">
                    <svg className="w-10 h-10 text-[#0080FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                 </div>
                 {/* Star circle */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                   {[...Array(8)].map((_, i) => (
                     <div key={i} className="absolute w-full h-full" style={{ transform: `rotate(${i * 45}deg)` }}>
                       <div className="w-2 h-2 rounded-full bg-gray-300 absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
