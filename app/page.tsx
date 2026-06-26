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
      <section className="relative min-h-[90vh] lg:min-h-[95vh] flex flex-col items-center justify-center pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32 lg:pb-40 overflow-hidden bg-brand-dark text-white px-4 lg:px-8">
        
        {/* Floating Cards Background */}
        
        {/* Card 1: Left */}
        <div className="hidden md:block absolute left-[2%] lg:left-[3%] xl:left-[5%] top-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 border-2 border-white/80 z-10 hover:scale-105 transition-transform duration-500 shadow-xl">
           <div className="relative w-full h-full">
             <Image src="/images/hero-card-1.jpg" alt="Freelancer" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex justify-center z-20">
               <span className="bg-white text-brand-dark px-3 py-1 rounded-full font-bold text-xs flex items-center justify-center gap-1 shadow-md whitespace-nowrap">
                 <Briefcase className="w-3 h-3 flex-shrink-0" /> Freelancer
               </span>
             </div>
           </div>
        </div>

        {/* Card 2: Right */}
        <div className="hidden md:block absolute right-[2%] lg:right-[3%] xl:right-[5%] top-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 border-2 border-white/80 z-10 hover:scale-105 transition-transform duration-500 shadow-xl">
           <div className="relative w-full h-full">
             <Image src="/images/ceo.jpg" alt="Engineer" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex justify-center z-20">
               <span className="bg-white text-brand-dark px-3 py-1 rounded-full font-bold text-xs flex items-center justify-center gap-1 shadow-md whitespace-nowrap">
                 <Settings className="w-3 h-3 flex-shrink-0" /> Engineer
               </span>
             </div>
           </div>
        </div>

        {/* Card 3: Bottom Left */}
        <div className="hidden lg:block absolute left-[8%] xl:left-[12%] bottom-4 xl:bottom-8 w-36 h-36 xl:w-44 xl:h-44 border-2 border-white/80 z-10 hover:-translate-y-4 transition-transform duration-500 shadow-xl">
           <div className="relative w-full h-full">
             <Image src="/invoice discounting.jpg" alt="Contractor" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex justify-center z-20">
               <span className="bg-white text-brand-dark px-3 py-1 rounded-full font-bold text-xs flex items-center justify-center gap-1 shadow-md whitespace-nowrap">
                 <Building className="w-3 h-3 flex-shrink-0" /> Contractor
               </span>
             </div>
           </div>
        </div>

        {/* Card 4: Bottom Right */}
        <div className="hidden lg:block absolute right-[8%] xl:right-[12%] bottom-4 xl:bottom-8 w-36 h-36 xl:w-44 xl:h-44 border-2 border-white/80 z-10 hover:-translate-y-4 transition-transform duration-500 shadow-xl">
           <div className="relative w-full h-full">
             <Image src="/images/hero-card-4.jpg" alt="Employee" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex justify-center z-20">
               <span className="bg-white text-brand-dark px-3 py-1 rounded-full font-bold text-xs flex items-center justify-center gap-1 shadow-md whitespace-nowrap">
                 <User className="w-3 h-3 flex-shrink-0" /> Employee
               </span>
             </div>
           </div>
        </div>

        {/* Main Center Content */}
        <div className="w-full max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] mx-auto px-4 relative z-20 text-center flex flex-col items-center mt-[-40px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-black text-white tracking-tighter leading-[1.1] sm:leading-[1] mb-8">
            Borrow and Invest <br className="hidden md:block" /> Wisely with Us.
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 w-full sm:w-auto relative z-30">
            <ApplyNowButton className="px-10 py-4 rounded-full bg-brand-yellow text-brand-dark font-black hover:bg-brand-yellow/90 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg group">
              Apply Now
              <span className="bg-brand-dark text-brand-yellow w-6 h-6 flex items-center justify-center rounded-full transition-transform group-hover:translate-x-1 text-xs">→</span>
            </ApplyNowButton>
            <Link href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20speak%20with%20your%20sales%20team%20about%20your%20financial%20services.%20Could%20you%20please%20assist%20me%3F" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg bg-white/5 backdrop-blur-sm group">
              <MessageCircle className="w-5 h-5" /> Talk To Support
            </Link>
          </div>

          {/* Mobile Image Grid (visible only on small screens) */}
          <div className="md:hidden grid grid-cols-2 gap-3 sm:gap-4 mt-12 w-full max-w-sm mx-auto relative z-20">
            {/* Card 1 */}
            <div className="relative aspect-square w-full border-2 border-white/80 shadow-lg">
              <Image src="/images/hero-card-1.jpg" alt="Freelancer" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex justify-center w-full z-20">
                <span className="bg-white text-brand-dark px-2 py-0.5 rounded-full font-bold text-[10px] flex items-center justify-center gap-1 shadow-md whitespace-nowrap">
                  <Briefcase className="w-2.5 h-2.5 flex-shrink-0" /> Freelancer
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative aspect-square w-full border-2 border-white/80 shadow-lg">
              <Image src="/images/ceo.jpg" alt="Engineer" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex justify-center w-full z-20">
                <span className="bg-white text-brand-dark px-2 py-0.5 rounded-full font-bold text-[10px] flex items-center justify-center gap-1 shadow-md whitespace-nowrap">
                  <Settings className="w-2.5 h-2.5 flex-shrink-0" /> Engineer
                </span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative aspect-square w-full border-2 border-white/80 shadow-lg mt-2">
              <Image src="/invoice discounting.jpg" alt="Contractor" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex justify-center w-full z-20">
                <span className="bg-white text-brand-dark px-2 py-0.5 rounded-full font-bold text-[10px] flex items-center justify-center gap-1 shadow-md whitespace-nowrap">
                  <Building className="w-2.5 h-2.5 flex-shrink-0" /> Contractor
                </span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="relative aspect-square w-full border-2 border-white/80 shadow-lg mt-2">
              <Image src="/images/hero-card-4.jpg" alt="Employee" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex justify-center w-full z-20">
                <span className="bg-white text-brand-dark px-2 py-0.5 rounded-full font-bold text-[10px] flex items-center justify-center gap-1 shadow-md whitespace-nowrap">
                  <User className="w-2.5 h-2.5 flex-shrink-0" /> Employee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="bg-brand-yellow text-brand-dark py-3 sm:py-4 overflow-hidden border-b-2 border-black relative z-10">
        <div className="flex w-max animate-marquee">
          {/* Duplicate content to create seamless infinite scroll */}
          {[1, 2].map((groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5 whitespace-nowrap">
              <span className="font-heading font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">SME Financing</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark flex-shrink-0">
                <path d="M6 0.5L6.3648 3.9311L7.88111 0.831691L7.05041 4.18064L9.53533 1.78676L7.60932 4.64962L10.7631 3.25L7.97412 5.28148L11.4164 5.04494L8.10081 6L11.4164 6.95506L7.97412 6.71852L10.7631 8.75L7.60932 7.35038L9.53533 10.2132L7.05041 7.81936L7.88111 11.1683L6.3648 8.0689L6 11.5L5.6352 8.0689L4.11889 11.1683L4.94959 7.81936L2.46467 10.2132L4.39068 7.35038L1.23686 8.75L4.02588 6.71852L0.583557 6.95506L3.89919 6L0.583557 5.04494L4.02588 5.28148L1.23686 3.25L4.39068 4.64962L2.46467 1.78676L4.94959 4.18064L4.11889 0.831691L5.6352 3.9311L6 0.5Z" fill="currentColor"></path>
              </svg>
              <span className="font-heading font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">Invoice Discounting</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark flex-shrink-0">
                <path d="M6 0.5L6.3648 3.9311L7.88111 0.831691L7.05041 4.18064L9.53533 1.78676L7.60932 4.64962L10.7631 3.25L7.97412 5.28148L11.4164 5.04494L8.10081 6L11.4164 6.95506L7.97412 6.71852L10.7631 8.75L7.60932 7.35038L9.53533 10.2132L7.05041 7.81936L7.88111 11.1683L6.3648 8.0689L6 11.5L5.6352 8.0689L4.11889 11.1683L4.94959 7.81936L2.46467 10.2132L4.39068 7.35038L1.23686 8.75L4.02588 6.71852L0.583557 6.95506L3.89919 6L0.583557 5.04494L4.02588 5.28148L1.23686 3.25L4.39068 4.64962L2.46467 1.78676L4.94959 4.18064L4.11889 0.831691L5.6352 3.9311L6 0.5Z" fill="currentColor"></path>
              </svg>
              <span className="font-heading font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">Working Capital</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark flex-shrink-0">
                <path d="M6 0.5L6.3648 3.9311L7.88111 0.831691L7.05041 4.18064L9.53533 1.78676L7.60932 4.64962L10.7631 3.25L7.97412 5.28148L11.4164 5.04494L8.10081 6L11.4164 6.95506L7.97412 6.71852L10.7631 8.75L7.60932 7.35038L9.53533 10.2132L7.05041 7.81936L7.88111 11.1683L6.3648 8.0689L6 11.5L5.6352 8.0689L4.11889 11.1683L4.94959 7.81936L2.46467 10.2132L4.39068 7.35038L1.23686 8.75L4.02588 6.71852L0.583557 6.95506L3.89919 6L0.583557 5.04494L4.02588 5.28148L1.23686 3.25L4.39068 4.64962L2.46467 1.78676L4.94959 4.18064L4.11889 0.831691L5.6352 3.9311L6 0.5Z" fill="currentColor"></path>
              </svg>
              <span className="font-heading font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">LPO Financing</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark flex-shrink-0">
                <path d="M6 0.5L6.3648 3.9311L7.88111 0.831691L7.05041 4.18064L9.53533 1.78676L7.60932 4.64962L10.7631 3.25L7.97412 5.28148L11.4164 5.04494L8.10081 6L11.4164 6.95506L7.97412 6.71852L10.7631 8.75L7.60932 7.35038L9.53533 10.2132L7.05041 7.81936L7.88111 11.1683L6.3648 8.0689L6 11.5L5.6352 8.0689L4.11889 11.1683L4.94959 7.81936L2.46467 10.2132L4.39068 7.35038L1.23686 8.75L4.02588 6.71852L0.583557 6.95506L3.89919 6L0.583557 5.04494L4.02588 5.28148L1.23686 3.25L4.39068 4.64962L2.46467 1.78676L4.94959 4.18064L4.11889 0.831691L5.6352 3.9311L6 0.5Z" fill="currentColor"></path>
              </svg>
              <span className="font-heading font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">Inventory Financing</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark flex-shrink-0">
                <path d="M6 0.5L6.3648 3.9311L7.88111 0.831691L7.05041 4.18064L9.53533 1.78676L7.60932 4.64962L10.7631 3.25L7.97412 5.28148L11.4164 5.04494L8.10081 6L11.4164 6.95506L7.97412 6.71852L10.7631 8.75L7.60932 7.35038L9.53533 10.2132L7.05041 7.81936L7.88111 11.1683L6.3648 8.0689L6 11.5L5.6352 8.0689L4.11889 11.1683L4.94959 7.81936L2.46467 10.2132L4.39068 7.35038L1.23686 8.75L4.02588 6.71852L0.583557 6.95506L3.89919 6L0.583557 5.04494L4.02588 5.28148L1.23686 3.25L4.39068 4.64962L2.46467 1.78676L4.94959 4.18064L4.11889 0.831691L5.6352 3.9311L6 0.5Z" fill="currentColor"></path>
              </svg>
            </div>
          ))}
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
                Not everyone gets the financial support they need in Nigeria. But <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">with us you will.</span>
              </p>
              
              <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-12">
              We understand the unique challenges Nigerian SMEs and entrepreneurs face. <span className="font-normal">That&apos;s why we created Swiftbanq – to provide tailored, fast, and accessible financing that empowers local businesses to grow, scale, and thrive in the Nigerian economy.</span>
            </p>
            </div>
          </div>

          {/* Fixed background image */}
          <div className="w-full mt-12 md:mt-16 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden" style={{ backgroundImage: 'url(/swiftbanq-office-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
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
