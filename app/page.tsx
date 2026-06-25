import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Briefcase, Car, Smartphone, TrendingUp, Settings, Building, User, MessageCircle } from 'lucide-react';
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
        text: 'Swiftbanq is a duly Licensed money lending institution operating under the regulatory framework of the Lagos State Money Lenders Law. We provide comprehensive financial solutions including SME Financing, Asset Financing, Digital Lending, and Investment.',
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
      <section className="relative pt-24 md:pt-32 lg:pt-40 pb-0 overflow-hidden bg-transparent">
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
               <div className="bg-brand-yellow rounded-lg md:rounded-2xl shadow-sm border border-brand-yellow/30 p-1.5 sm:p-2 md:p-3 transform rotate-6 flex items-center justify-center">
                 <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 text-brand-dark" />
               </div>
            </span> with Us.
          </h1>

          <div className="flex justify-center mt-6 md:mt-10">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <ApplyNowButton />
              <Link href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20speak%20with%20your%20sales%20team%20about%20your%20financial%20services.%20Could%20you%20please%20assist%20me%3F" target="_blank" rel="noopener noreferrer" className="px-10 py-3 rounded-full border-2 border-black text-brand-dark font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg bg-white/50 backdrop-blur-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                <MessageCircle className="w-5 h-5" /> Talk To Support
              </Link>
            </div>
          </div>
        </div>

        {/* Image Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[200px] md:h-[300px] border-t-2 border-b-2 border-black mt-16 max-w-7xl mx-auto z-10 relative">
             <div className="relative w-full h-full border-r-2 border-b-2 md:border-b-0 border-black group">
               <Image src="/images/hero-card-1.jpg" alt="Freelancer" fill className="object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
               <div className="absolute bottom-4 left-4">
                 <span className="bg-white text-brand-dark px-3 py-1.5 rounded-full font-bold text-xs md:text-sm flex items-center gap-1.5 shadow-sm">
                   <Briefcase className="w-3 h-3 md:w-4 md:h-4" /> Freelancer
                 </span>
               </div>
             </div>
             <div className="relative w-full h-full border-b-2 md:border-b-0 md:border-r-2 border-black group">
               <Image src="/images/ceo.jpg" alt="Engineer" fill className="object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
               <div className="absolute bottom-4 left-4">
                 <span className="bg-white text-brand-dark px-3 py-1.5 rounded-full font-bold text-xs md:text-sm flex items-center gap-1.5 shadow-sm">
                   <Settings className="w-3 h-3 md:w-4 md:h-4" /> Engineer
                 </span>
               </div>
             </div>
             <div className="relative w-full h-full border-r-2 border-black group">
               <Image src="/invoice discounting.jpg" alt="Contractor" fill className="object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
               <div className="absolute bottom-4 left-4">
                 <span className="bg-white text-brand-dark px-3 py-1.5 rounded-full font-bold text-xs md:text-sm flex items-center gap-1.5 shadow-sm">
                   <Building className="w-3 h-3 md:w-4 md:h-4" /> Contractor
                 </span>
               </div>
             </div>
             <div className="relative w-full h-full border-black group">
               <Image src="/images/hero-card-4.jpg" alt="Employee" fill className="object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
               <div className="absolute bottom-4 left-4">
                 <span className="bg-white text-brand-dark px-3 py-1.5 rounded-full font-bold text-xs md:text-sm flex items-center gap-1.5 shadow-sm">
                   <User className="w-3 h-3 md:w-4 md:h-4" /> Employee
                 </span>
               </div>
             </div>
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
                Not everyone gets the financial support they need. But <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">with us you will.</span>
              </p>
              
              <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-12">
              You're building a future that requires immediate, flexible capital. <span className="font-normal">That's why we created Swiftbanq – because ambitious visionaries require smart, fast, and accessible borrowing and investment solutions.</span>
            </p>
            </div>
          </div>

          {/* Full-width images row */}
          <div className="w-full mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 rounded-2xl overflow-hidden h-[300px] md:h-[380px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/swiftbanq-office-2.jpg"
                alt="Business meeting discussing Swiftbanq SME Financing solutions"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden h-[300px] md:h-[380px]">
              <Image
                src="/swiftbanq-office-3.jpg"
                alt="Businesswoman managing Investment at Swiftbanq Credit Solutions"
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
              <Image src="/swiftbanq-office-4.jpg" alt="Swiftbanq SME Financing solutions for Nigerian businesses" fill className="object-cover object-center" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-3 pb-5 flex flex-col bg-brand-yellow">



                  {/* Loan term */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-brand-dark">Repayment</span>
                    <div className="flex items-center gap-1">
                      {[3, 6, 12].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${m === 6 ? "bg-brand-dark text-brand-cream" : "text-gray-400"}`}>{m}mo</span>
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
                      <span key={tag.label} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${tag.active ? "bg-brand-cream border-gray-800 text-brand-dark" : "bg-brand-cream border-gray-200 text-gray-500"}`}>
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
                <Link href="/contact" className="hidden text-brand-dark font-bold hover:text-brand-yellow transition-colors text-base underline underline-offset-4">Learn More</Link>
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
              <Image src="/images/asset-finance-car.jpg" alt="Swiftbanq Vehicle and Asset Financing options in Nigeria" fill className="object-cover object-center" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-3 pb-5 flex flex-col bg-brand-yellow">



                  {/* Loan term */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-brand-dark">Repayment</span>
                    <div className="flex items-center gap-1">
                      {[12, 24, 36].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${m === 24 ? "bg-brand-dark text-brand-cream" : "text-gray-400"}`}>{m}mo</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Vehicle Financing", active: true },
                      { label: "Office Equipment", icon: "🖥️" },
                      { label: "Business Building", icon: "🏠" },
                      { label: "Laptop", icon: "💻" },
                    ].map((tag) => (
                      <span key={tag.label} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${tag.active ? "bg-brand-cream border-gray-800 text-brand-dark" : "bg-brand-cream border-gray-200 text-gray-500"}`}>
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
                <Link href="/contact" className="hidden text-brand-dark font-bold hover:text-brand-yellow transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 3: Equipment Financing */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row items-stretch gap-12 lg:gap-20">

            {/* Left: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              <Image src="/image-3.jpg" alt="Industrial Equipment financing by Swiftbanq Credit Solutions" fill className="object-cover object-center" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-3 pb-5 flex flex-col bg-brand-yellow">

                  {/* Loan term */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-brand-dark">Business Term</span>
                    <div className="flex items-center gap-1">
                      {[12, 24, 36].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${m === 24 ? "bg-brand-dark text-brand-cream" : "text-gray-400"}`}>{m}mo</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Industrial Machinery", active: true },
                      { label: "Power Generators", icon: "⚡" },
                      { label: "IT Infrastructure", icon: "💻" },
                      { label: "Medical Devices", icon: "🩺" },
                    ].map((tag) => (
                      <span key={tag.label} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${tag.active ? "bg-brand-cream border-gray-800 text-brand-dark" : "bg-brand-cream border-gray-200 text-gray-500"}`}>
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
                Equipment financing <span className="text-brand-dark font-light">to scale your business</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-tight font-medium">
                Get the machinery, tools, and technology your business needs to grow, without draining your working capital.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  No heavy collateral
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Custom payment schedules
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ApplyNowButton variant="dark" />
                <Link href="/contact" className="hidden text-brand-dark font-bold hover:text-brand-yellow transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 4: Personal Loan */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-stretch gap-12 lg:gap-20">

            {/* Right: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/home-family.jpg" alt="Family home secured with Swiftbanq Digital Lending" className="object-cover object-center absolute inset-0 w-full h-full" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-3 pb-5 flex flex-col bg-brand-yellow">

                  {/* Loan term selector */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-brand-dark">Short term</span>
                    <div className="flex items-center gap-1">
                      {[3, 6, 9].map((m) => (
                        <span
                          key={m}
                          className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                            m === 6 ? "bg-brand-dark text-brand-cream" : "text-gray-400"
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
                          tag.active ? "bg-brand-cream border-gray-800 text-brand-dark" : "bg-brand-cream border-gray-200 text-gray-500"
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

            {/* Left: Text content */}
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
                <Link href="/contact" className="hidden text-brand-dark font-bold hover:text-brand-yellow transition-colors text-base underline underline-offset-4">
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 5: Investment */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row items-stretch gap-12 lg:gap-20">

            {/* Left: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/home-business-men.jpg" alt="Business professionals evaluating Swiftbanq Investment" className="object-cover object-center absolute inset-0 w-full h-full" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-3 pb-5 flex flex-col bg-brand-yellow">

                  {/* Profile card */}
                  <div className="bg-white/80 rounded-2xl px-5 py-4 flex items-center gap-4 mb-5 -mt-12">

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-brand-dark text-base">Victor D.</span>
                        <span className="text-gray-400 font-medium text-base">·</span>
                        <span className="font-bold text-brand-dark text-base">₦10,000,000</span>
                        <span className="ml-auto w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </span>
                      </div>
                      <div className="text-gray-400 text-sm font-medium">Treasury investment</div>
                    </div>
                  </div>

                  {/* Auto Invest toggle is hidden */}

                  {/* Growth chart */}
                  <div className="flex items-center gap-3">
                    {/* Time period tabs */}
                    <div className="flex flex-col gap-1 shrink-0">
                      {['3mo', '6mo', '12mo'].map((t) => (
                        <span key={t} className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors cursor-pointer ${t === '3mo' ? 'bg-brand-cream text-brand-dark border-brand-dark' : 'bg-brand-cream border-gray-200 text-gray-500'}`}>{t}</span>
                      ))}
                    </div>
                    <div className="relative h-20 flex-1">
                      <svg viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <defs>
                          <linearGradient id="treasuryChartFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FEF418" stopOpacity="0.4"/>
                            <stop offset="100%" stopColor="#FEF418" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        
                        {/* Grid Lines */}
                        <line x1="0" y1="20" x2="320" y2="20" stroke="#1a1a1a" strokeOpacity="0.08" strokeDasharray="3 3" />
                        <line x1="0" y1="50" x2="320" y2="50" stroke="#1a1a1a" strokeOpacity="0.08" strokeDasharray="3 3" />
                        <line x1="0" y1="80" x2="320" y2="80" stroke="#1a1a1a" strokeOpacity="0.08" strokeDasharray="3 3" />
                        
                        {/* Grid Labels Removed */ }

                        {/* Chart Path Area Fill */}
                        <path d="M0 90 Q 60 70, 110 75 T 220 40 T 300 20 L300 100 L0 100 Z" fill="url(#treasuryChartFill)"/>
                        
                        {/* Chart Path Stroke */}
                        <path d="M0 90 Q 60 70, 110 75 T 220 40 T 300 20" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none"/>
                        
                        {/* Peak Indicator Dot */}
                        <circle cx="300" cy="20" r="5" fill="#1a1a1a"/>
                        <circle cx="300" cy="20" r="3.5" fill="#FEF418"/>
                        
                        {/* Tooltip Badge at Peak */}
                        <g transform="translate(240, 5)">
                          <rect width="48" height="16" rx="8" fill="#1a1a1a"/>
                          <text x="24" y="11" fill="#FEF418" fontSize="8" fontWeight="bold" textAnchor="middle">+20%</text>
                        </g>
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-6">
                Investment <span className="text-brand-dark font-light">with high returns</span>
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
                <Link href="/contact" className="hidden text-brand-dark font-bold hover:text-brand-yellow transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-12 md:py-16 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top: headline */}
          <div className="mb-16 lg:mb-20 text-center flex justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-dark tracking-tight leading-tight">
              A message from <span className="font-light italic">our CEO</span>
            </h2>
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
                  src="/images/ceo.jpeg"
                  alt="Olawale Osundele — Founder & CEO, Swiftbanq"
                  fill
                  unoptimized
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Name + title + quote */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-[3.5rem] font-heading font-bold text-white leading-[1.05] mb-1">
                  Olawale Osundele
                </h3>
                <p className="text-white/60 font-semibold text-base mb-6">CEO of Swiftbanq</p>
                <p className="text-white font-medium text-lg leading-relaxed">
                  &ldquo;At SWIFTBANQ, we are accelerating access to capital with bold solutions that empower businesses and individuals to thrive. Our commitment is clear - fast, transparent and responsible lending that fuels opportunity. The market is evolving and so we are. Together, we will unlock new horizons in finance and growth.&rdquo;
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
