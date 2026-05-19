import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Briefcase, Car, Smartphone, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { FAQSection } from '@/components/FAQSection';
import { HeroMockup } from '@/components/HeroMockup';
import { ApplyNowButton } from '@/components/ApplyNowButton';
import { TestimonialsSection } from '@/components/TestimonialsSection';

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
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-brand-cream" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-cream to-transparent" />
        </div>
        {/* Pattern - Right (mirrored) */}
        <div className="absolute top-0 h-[800px] w-[550px] pointer-events-none select-none z-0 opacity-60 scale-x-[-1]" style={{ right: '-440px' }}>
          <Image src="/pattern 3.svg" alt="" fill className="object-cover object-left-top" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-brand-cream" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-cream to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <h1 className="text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-heading font-medium text-brand-dark tracking-tight leading-[1.4] sm:leading-[1.25] md:leading-[1.15] lg:leading-[1.1] mb-12 max-w-6xl mx-auto">
            Borrow <span className="inline-flex items-center align-middle mx-1 md:mx-3 -mt-1 md:-mt-4 relative">
              <div className="flex -space-x-2 md:-space-x-4">
                <Image src="/images/face-1.jpg" alt="Face 1" width={80} height={80} className="rounded-full border-[3px] border-brand-cream w-9 h-9 sm:w-14 sm:h-14 md:w-20 md:h-20 object-cover" />
                <Image src="/images/face-2.jpg" alt="Face 2" width={80} height={80} className="rounded-full border-[3px] border-brand-cream w-9 h-9 sm:w-14 sm:h-14 md:w-20 md:h-20 object-cover relative z-10" />
                <Image src="/images/face-3.jpg" alt="Face 3" width={80} height={80} className="rounded-full border-[3px] border-brand-cream w-9 h-9 sm:w-14 sm:h-14 md:w-20 md:h-20 object-cover relative z-20" />
              </div>
            </span> and Invest <br className="hidden lg:block" />
            Wisely <span className="inline-flex items-center align-middle mx-1 sm:mx-2 md:mx-4 -mt-1 md:-mt-4">
               <div className="bg-white rounded-lg md:rounded-2xl shadow-sm border border-[#f0e7ca] p-1.5 sm:p-2 md:p-3 transform rotate-6 flex items-center justify-center">
                 <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 text-brand-dark" />
               </div>
            </span> with Us.
          </h1>
          
          <div className="flex justify-center mt-6 md:mt-10">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <ApplyNowButton />
              <Link href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20speak%20with%20your%20sales%20team%20about%20your%20financial%20services.%20Could%20you%20please%20assist%20me%3F" target="_blank" rel="noopener noreferrer" className="px-10 py-3 rounded-full border border-gray-300 text-brand-dark font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg bg-white/50 backdrop-blur-sm">
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Graphic Area */}
        <div className="relative mt-16 max-w-full mx-auto h-[500px] md:h-[600px] flex justify-center z-10 w-full overflow-hidden">
          
          {/* Card 1: Extreme Left */}
          <div className="absolute right-[calc(50%+18rem)] lg:right-[calc(50%+22rem)] top-10 lg:top-16 w-[300px] lg:w-[400px] h-[350px] lg:h-[450px] transform -rotate-[6deg] overflow-hidden z-0 border-none hidden md:block">
            <Image src="/images/hero-card-1.jpg" alt="Family" fill className="object-cover" />
          </div>

          {/* Card 2: Inner Left */}
          <div className="absolute right-[calc(50%+4rem)] lg:right-[calc(50%+2rem)] top-32 lg:top-40 w-[240px] lg:w-[280px] h-[280px] lg:h-[350px] transform rotate-[8deg] overflow-hidden z-10 hidden md:block border-none">
            <Image src="/invoice discounting.jpg" alt="User" fill className="object-cover" />
          </div>

          {/* Card 3: Inner Right */}
          <div className="absolute left-[calc(50%+2rem)] lg:left-[calc(50%+8rem)] top-16 lg:top-20 w-[280px] lg:w-[320px] h-[320px] lg:h-[400px] transform -rotate-[4deg] overflow-hidden z-0 hidden md:block border-none">
            <Image src="/images/ceo.jpg" alt="Professional" fill className="object-cover" />
          </div>

          {/* Card 4: Extreme Right */}
          <div className="absolute left-[calc(50%+20rem)] lg:left-[calc(50%+26rem)] top-40 lg:top-48 w-[350px] lg:w-[450px] h-[300px] lg:h-[400px] transform rotate-[6deg] overflow-hidden z-10 hidden md:block border-none">
            <Image src="/images/hero-card-4.jpg" alt="Woman on phone" fill className="object-cover" />
          </div>

          {/* Center Mockup App Card — tabbed */}
          <HeroMockup />
        </div>
      </section>

      {/* Why Swiftbanq Section */}
      <section className="py-12 md:py-16 bg-transparent">
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
            </div>
          </div>

          {/* Full-width images row */}
          <div className="w-full mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 rounded-2xl overflow-hidden h-[300px] md:h-[380px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://plus.unsplash.com/premium_photo-1707155465527-c5a2935b21cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZW9wbGUlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Black people business meeting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden h-[300px] md:h-[380px]">
              <Image
                src="/images/why-section.jpg"
                alt="Businesswoman on phone call with documents"
                width={1480}
                height={800}
                unoptimized
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Header */}
      <section id="services" className="pt-12 pb-4 md:pt-16 md:pb-6 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-black text-sm font-medium tracking-wide text-black uppercase">
                Our Services
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-medium text-brand-dark tracking-tight leading-[1.2] mb-0 max-w-3xl mx-auto">
              Services that give you peace of mind.
            </h2>

          </div>
        </div>
      </section>

      {/* Service 1: SME Financing */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row items-stretch gap-12 lg:gap-20">

            {/* Left: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              <Image src="/invoice discounting.jpg" alt="" fill className="object-cover object-center" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-8 pb-8 flex flex-col bg-brand-yellow">



                  {/* Loan term */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-gray-500">Repayment</span>
                    <div className="flex items-center gap-1">
                      {[3, 6, 12].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${m === 6 ? "bg-brand-yellow text-brand-dark" : "text-gray-400"}`}>{m}mo</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "LPO Finance", icon: "📋" },
                      { label: "Invoice Discounting", icon: "🧾" },
                      { label: "Contract Finance", active: true },
                      { label: "Syndication", icon: "🤝" },
                    ].map((tag) => (
                      <span key={tag.label} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${tag.active ? "bg-white border-gray-800 text-brand-dark" : "bg-white border-gray-200 text-gray-500"}`}>
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
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
                <ApplyNowButton variant="dark" />
                <Link href="/contact" className="hidden text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 2: Asset Financing */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-stretch gap-12 lg:gap-20">

            {/* Right (visually): UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              <Image src="/image 4.jpg" alt="" fill unoptimized className="object-cover object-center" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-8 pb-8 flex flex-col bg-brand-yellow">



                  {/* Loan term */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
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
                      <span key={tag.label} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${tag.active ? "bg-white border-gray-800 text-brand-dark" : "bg-white border-gray-200 text-gray-500"}`}>
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
                Asset financing <span className="text-brand-dark font-light">own more &</span> pay less upfront
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
                <ApplyNowButton variant="dark" />
                <Link href="/contact" className="hidden text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 3: Personal Loan */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row items-stretch gap-12 lg:gap-20">

            {/* Left: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://img.magnific.com/premium-photo/happy-bonding-portrait-black-family-bed-playing-quality-time-comfort-smile-love-african-children-with-parents-bedroom-happiness-relaxation-stress-relief_590464-159127.jpg?uid=R45719163&semt=ais_incoming&w=740&q=80" alt="" className="object-cover object-center absolute inset-0 w-full h-full" referrerPolicy="no-referrer" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-8 pb-8 flex flex-col bg-brand-yellow">

                  {/* Loan term selector */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-gray-500">Short term</span>
                    <div className="flex items-center gap-1">
                      {[3, 6, 9].map((m) => (
                        <span
                          key={m}
                          className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                            m === 6 ? "bg-brand-yellow text-brand-dark" : "text-gray-400"
                          }`}
                        >
                          {m}mo
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Purpose tags */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Home improvement", icon: "🏠" },
                      { label: "Medical/Dental", icon: "🏥" },
                      { label: "School fees", active: true },
                      { label: "Other", icon: "➕" },
                    ].map((tag) => (
                      <span
                        key={tag.label}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${
                          tag.active ? "bg-white border-gray-800 text-brand-dark" : "bg-white border-gray-200 text-gray-500"
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
                Personal loans <span className="text-brand-dark font-light">up to ₦5M &</span> low rates
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
                <ApplyNowButton variant="dark" />
                <Link href="/contact" className="hidden text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-base underline underline-offset-4">
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 4: Treasury Services */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-stretch gap-12 lg:gap-20">

            {/* Left: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://img.magnific.com/free-photo/black-men-cafe-have-business_1157-33158.jpg?uid=R45719163&semt=ais_hybrid&w=740&q=80" alt="" className="object-cover object-center absolute inset-0 w-full h-full" referrerPolicy="no-referrer" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-8 pb-8 flex flex-col bg-brand-yellow">

                  {/* Profile card */}
                  <div className="bg-white/80 rounded-2xl px-5 py-4 flex items-center gap-4 mb-1 -mt-12">

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

                  {/* Auto Invest toggle */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-5">
                    <span className="text-sm font-semibold text-brand-dark">Auto Invest is on</span>
                    <div className="w-11 h-6 bg-green-500 rounded-full relative flex items-center px-0.5">
                      <div className="w-5 h-5 bg-white rounded-full shadow ml-auto"></div>
                    </div>
                  </div>

                  {/* Growth chart */}
                  <div className="flex items-center gap-3">
                    {/* Time period tabs */}
                    <div className="flex flex-col gap-1 shrink-0">
                      {['3mo', '6mo', '12mo'].map((t) => (
                        <span key={t} className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors cursor-pointer ${t === '3mo' ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white border-gray-200 text-gray-500'}`}>{t}</span>
                      ))}
                    </div>
                    <div className="relative h-16 flex-1 overflow-hidden">
                      <svg viewBox="0 0 320 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <defs>
                          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fff500" stopOpacity="0.35"/>
                            <stop offset="100%" stopColor="#fff500" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d="M0 112 C40 108, 60 90, 90 82 S140 65, 160 52 S220 28, 260 12 S300 4, 320 0" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                        <path d="M0 112 C40 108, 60 90, 90 82 S140 65, 160 52 S220 28, 260 12 S300 4, 320 0 L320 112 L0 112 Z" fill="url(#chartFill)"/>
                        {/* Dot at peak */}
                        <circle cx="320" cy="0" r="5" fill="#1a1a1a"/>
                        <circle cx="320" cy="0" r="3" fill="#fff500"/>
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
                Treasury services <span className="text-brand-dark font-light">with high returns</span>
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
                <ApplyNowButton variant="dark" />
                <Link href="/contact" className="hidden text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-12 md:py-16 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top: headline + description */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start mb-16 lg:mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-medium text-brand-dark tracking-tight leading-[1.1] w-full lg:w-1/2">
              A message from <span className="font-light italic">our CEO</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed font-medium w-full lg:w-1/2 lg:pt-4">
              We combine bold vision with disciplined execution to bring financial services that are fast, fair, and built for ambitious Nigerians.
            </p>
          </div>

          {/* Card stack */}
          {/* Mobile: simple column card. Desktop: stacked card effect */}
          <div className="relative h-auto lg:h-[460px]">
            {/* Decorative back cards — hidden on mobile */}
            <div className="hidden lg:block absolute inset-y-6 right-[-2%] w-[70%] bg-[#f5f3e8] rounded-[2.5rem] transform rotate-[1.5deg] z-0" />
            <div className="hidden lg:block absolute inset-y-3 right-[1%] w-[68%] bg-brand-yellow rounded-[2.5rem] transform -rotate-[0.5deg] z-[1]" />

            {/* Front card */}
            <div className="relative lg:absolute lg:inset-0 lg:right-[5%] bg-brand-dark rounded-[2.5rem] overflow-hidden flex flex-col sm:flex-row z-[2]">

              {/* Image */}
              <div className="w-full sm:w-[38%] relative shrink-0 h-64 sm:h-auto">
                <Image
                  src="/images/ceo.jpg"
                  alt="Adewale Okon — Founder & CEO, Swiftbanq"
                  fill
                  unoptimized
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Name + title + quote */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-[3.5rem] font-heading font-bold text-white leading-[1.05] mb-1">
                  Adewale Okon
                </h3>
                <p className="text-white/60 font-semibold text-base mb-6">CEO of Swiftbanq</p>
                <p className="text-white font-medium text-lg leading-relaxed">
                  &ldquo;We built Swiftbanq because we believe financial empowerment shouldn&apos;t be reserved for the privileged few. Every business owner, every professional deserves capital that works as fast as their ambitions.&rdquo;
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      <FAQSection />


    </div>
    </>
  );
}
