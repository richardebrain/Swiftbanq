import Link from 'next/link';
import { ArrowRight, CheckCircle2, Briefcase, Car, Smartphone, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { FAQSection } from '@/components/FAQSection';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-0 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-12 max-w-6xl mx-auto">
            Borrow <span className="inline-flex items-center align-middle mx-1 md:mx-3 -mt-2 md:-mt-4 relative">
              <div className="flex -space-x-3 md:-space-x-4">
                <Image src="https://picsum.photos/seed/face1/100/100" alt="Face 1" width={80} height={80} className="rounded-full border-[3px] border-[#FDF8E7] w-14 h-14 md:w-20 md:h-20 object-cover" />
                <Image src="https://picsum.photos/seed/face2/100/100" alt="Face 2" width={80} height={80} className="rounded-full border-[3px] border-[#FDF8E7] w-14 h-14 md:w-20 md:h-20 object-cover relative z-10" />
                <Image src="https://picsum.photos/seed/face3/100/100" alt="Face 3" width={80} height={80} className="rounded-full border-[3px] border-[#FDF8E7] w-14 h-14 md:w-20 md:h-20 object-cover relative z-20" />
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
              <Link href="/contact" className="px-10 py-4 md:py-5 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow-hover transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg">
                Apply Now
              </Link>
              <Link href="/contact" className="px-10 py-4 md:py-5 rounded-full border border-gray-300 text-brand-dark font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg bg-white/50 backdrop-blur-sm">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Graphic Area */}
        <div className="relative mt-16 max-w-full mx-auto h-[500px] md:h-[600px] flex justify-center z-10 w-full overflow-hidden">
          
          {/* Card 1: Extreme Left */}
          <div className="absolute right-[calc(50%+18rem)] lg:right-[calc(50%+22rem)] top-10 lg:top-16 w-[300px] lg:w-[400px] h-[350px] lg:h-[450px] transform -rotate-[6deg] overflow-hidden z-0 border-none hidden md:block">
            <Image src="https://picsum.photos/seed/debt1b/800/1000" alt="Family" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Card 2: Inner Left */}
          <div className="absolute right-[calc(50%+4rem)] lg:right-[calc(50%+2rem)] top-32 lg:top-40 w-[240px] lg:w-[280px] h-[280px] lg:h-[350px] transform rotate-[8deg] overflow-hidden z-10 hidden md:block border-none">
            <Image src="https://picsum.photos/seed/debt2c/600/800" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Card 3: Inner Right */}
          <div className="absolute left-[calc(50%+2rem)] lg:left-[calc(50%+8rem)] top-16 lg:top-20 w-[280px] lg:w-[320px] h-[320px] lg:h-[400px] transform -rotate-[4deg] overflow-hidden z-0 hidden md:block border-none">
            <Image src="https://picsum.photos/seed/debt3b/600/800" alt="Professional" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Card 4: Extreme Right */}
          <div className="absolute left-[calc(50%+20rem)] lg:left-[calc(50%+26rem)] top-40 lg:top-48 w-[350px] lg:w-[450px] h-[300px] lg:h-[400px] transform rotate-[6deg] overflow-hidden z-10 hidden md:block border-none">
            <Image src="https://picsum.photos/seed/debt4b/800/800" alt="Woman on phone" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          {/* Center Mockup App Card */}
          <div className="relative z-20 w-full max-w-sm lg:max-w-md bg-white rounded-t-[2.5rem] shadow-[0_0_40px_rgba(0,0,0,0.15)] overflow-hidden h-full transform translate-y-0 mx-4 border-none">
             {/* iOS Header */}
             <div className="flex justify-between items-center px-6 pt-4 pb-2">
               <div className="w-16 h-5 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold tracking-wider">SWIFTBANQ</div>
               <div className="flex space-x-1.5">
                 <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                 <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                 <div className="w-4 h-3 bg-gray-900 rounded-sm"></div>
               </div>
             </div>
             {/* Mockup Content */}
             <div className="px-8 pt-6 pb-8 bg-gradient-to-b from-gray-50 to-white h-full relative">
               <h3 className="text-2xl font-bold text-gray-900 leading-tight">Hi James,</h3>
               <p className="text-gray-500 mb-8">Welcome to Swiftbanq!</p>

               <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Total Approved</p>
               <div className="text-5xl font-light text-gray-900 tracking-tight mb-2 flex items-start">
                 <span className="text-3xl text-gray-400 font-sans mt-1 mr-1">₦</span>2,375<span className="text-3xl text-gray-400 mt-auto mb-1">.00</span>
               </div>
               <div className="flex items-center text-xs text-gray-500 mb-8 font-medium">
                 <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 UPDATED ON 3/04/2026
               </div>

               <div className="flex justify-between items-end mb-2">
                 <div className="text-sm font-bold text-gray-800">
                   ₦124.00 <span className="text-gray-400 font-normal">out of ₦2,375.00 fixed</span>
                 </div>
                 <div className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded">10%</div>
               </div>
               {/* Progress bars */}
               <div className="flex gap-0.5 mb-8">
                 {[...Array(20)].map((_, i) => (
                   <div key={i} className={`h-4 flex-1 rounded-sm ${i < 3 ? 'bg-[#00d084]' : 'bg-gray-100'}`}></div>
                 ))}
               </div>

               <div className="flex gap-2 relative z-10">
                 <button className="flex-1 bg-gray-900 text-white rounded-full py-2.5 text-sm font-semibold">View Facility</button>
                 <button className="flex-1 bg-white border border-gray-200 text-gray-900 rounded-full py-2.5 text-sm font-semibold shadow-sm">Activities</button>
               </div>
               
               {/* Info card */}
               <div className="mt-8 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative z-10 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-brand-dark" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 mb-1">Active Loan - <span className="text-brand-dark">₦375.00</span></div>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                      Next repayment is due in 5 days.
                    </p>
                  </div>
               </div>

               {/* Absolute bottom fade to blend with next section */}
               <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Why Swiftbanq Section */}
      <section className="py-24 md:py-32 bg-transparent">
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
              <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-heading font-medium leading-[1.2] text-black mb-16 tracking-tight">
                Not everyone gets the financial support they need. But you will.
              </h2>
              
              <p className="text-2xl md:text-4xl lg:text-[3rem] font-heading font-medium leading-[1.2] text-black mb-12 tracking-tight">
                You&apos;re building a future that requires immediate, flexible capital. <span className="font-normal">Traditional lenders make you jump through hoops, delaying your growth with endless paperwork. That&apos;s why we created Swiftbanq – because ambitious visionaries require smart, fast, and accessible borrowing and investment solutions.</span>
              </p>
              
              <p className="text-2xl md:text-4xl lg:text-[3rem] font-heading font-normal leading-[1.2] text-black tracking-tight">
                Smarter loans. Better investments. True financial growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Header */}
      <section className="py-16 md:py-24 bg-transparent border-b border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">Our Products & Services</h2>
            <p className="text-gray-600 text-xl font-medium tracking-wide">Comprehensive financial solutions tailored for small businesses, corporates, and individuals in Nigeria.</p>
          </div>
        </div>
      </section>

      {/* Service 1: SME Financing */}
      <section className="py-20 md:py-32 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-[#FDF8E7] rounded-2xl flex items-center justify-center mb-8">
                <Briefcase className="w-8 h-8 text-brand-dark" />
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark mb-6 tracking-tight">SME Financing</h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                Fuel your business growth with our tailored small and medium enterprise solutions.
              </p>
              <ul className="space-y-4 mb-10">
                {["Local Purchase Orders (LPO)", "Invoice Discounting Facility (IDF)", "Bridge & Contract Finance", "Project Finance & Syndication"].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-yellow mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-lg">
                Explore SME options <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-yellow/10 rounded-[3rem] transform rotate-3"></div>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-[3rem] shadow-2xl">
                <Image src="https://picsum.photos/seed/sme/1000/1000" alt="SME Financing" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Asset Financing */}
      <section className="py-20 md:py-32 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
             <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-[#FDF8E7] rounded-2xl flex items-center justify-center mb-8">
                <Car className="w-8 h-8 text-brand-dark" />
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark mb-6 tracking-tight">Asset Financing</h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                Acquire the productive assets you need today while managing your cash flow efficiently.
              </p>
              <ul className="space-y-4 mb-10">
                {["Vehicle Financing", "Office Equipment Loans", "Household Equipment", "Service Contract Backing"].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-yellow mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-lg">
                Get Asset Financing <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-yellow/10 rounded-[3rem] transform -rotate-3"></div>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-[3rem] shadow-2xl">
                <Image src="https://picsum.photos/seed/asset/1000/1000" alt="Asset Financing" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Digital Lending */}
      <section className="py-20 md:py-32 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-[#FDF8E7] rounded-2xl flex items-center justify-center mb-8">
                <Smartphone className="w-8 h-8 text-brand-dark" />
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark mb-6 tracking-tight">Digital Lending</h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                Instant liquidity at your fingertips, perfectly tailored for salary earners and professionals.
              </p>
              <ul className="space-y-4 mb-10">
                {["Web-based applications", "Instant disbursement", "Flexible repayment plans", "No hidden charges"].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-yellow mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-lg">
                Apply for a Loan <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-yellow/10 rounded-[3rem] transform rotate-3"></div>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-[3rem] shadow-2xl">
                <Image src="https://picsum.photos/seed/digital/1000/1000" alt="Digital Lending" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Treasury Services */}
      <section className="py-20 md:py-32 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
             <div className="w-full lg:w-1/2">
              <div className="w-16 h-16 bg-[#FDF8E7] rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp className="w-8 h-8 text-brand-dark" />
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark mb-6 tracking-tight">Treasury Services</h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                Maximize the potential of your idle funds with structured, high-yield investment options.
              </p>
              <ul className="space-y-4 mb-10">
                {["Secure structured borrowings", "Competitive interest rates", "Flexible tenures", "Dedicated portfolio management"].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-yellow mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow-hover transition-colors text-lg">
                Start Investing <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-yellow/10 rounded-[3rem] transform -rotate-3"></div>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-[3rem] shadow-2xl">
                <Image src="https://picsum.photos/seed/treasury/1000/1000" alt="Treasury Services" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-medium text-brand-dark mb-24 tracking-tight text-center max-w-4xl mx-auto leading-tight">
            Hear what the community members are saying
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch relative px-0 lg:px-10">
            {/* Card 1 */}
            <div className="bg-[#b4fc08] rounded-[2rem] p-8 pb-10 w-full md:w-1/4 transform -rotate-[4deg] hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col justify-between z-20">
              <p className="text-[#103623] font-medium text-lg leading-snug mb-12">
                "Swiftbanq's SME Financing helped us secure the capital we needed to fulfill a major government contract without wiping out our cash flow."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Image src="https://picsum.photos/seed/test1/100/100" alt="Chinedu" width={50} height={50} className="rounded-full object-cover" />
                <div>
                  <div className="font-bold text-[#103623] text-lg">Chinedu</div>
                  <div className="text-[#103623]/70 text-sm">CEO, TechPro Solutions</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#a200ff] rounded-[2rem] p-8 pb-10 w-full md:w-1/4 transform rotate-[2deg] hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col justify-between z-10 -ml-0 md:-ml-8 mt-8 md:mt-12">
              <p className="text-white font-medium text-lg leading-snug mb-12">
                "Acquiring our new delivery fleet was a breeze. Their asset financing structured our payments perfectly to match our monthly revenue."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Image src="https://picsum.photos/seed/test2/100/100" alt="Nkechi" width={50} height={50} className="rounded-full object-cover" />
                <div>
                  <div className="font-bold text-white text-lg">Nkechi</div>
                  <div className="text-white/70 text-sm">Logistics Manager</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fdfcf2] rounded-[2rem] p-8 pb-10 w-full md:w-1/4 transform -rotate-[2deg] hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col justify-between z-10 -ml-0 md:-ml-8 mt-4 md:mt-24">
              <p className="text-brand-dark font-medium text-lg leading-snug mb-12">
                "The digital lending process is incredibly seamless. I got a loan disbursed directly to my account within minutes for a personal emergency."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Image src="https://picsum.photos/seed/test3/100/100" alt="Adebayo" width={50} height={50} className="rounded-full object-cover" />
                <div>
                  <div className="font-bold text-brand-dark text-lg">Adebayo</div>
                  <div className="text-brand-dark/70 text-sm">Salary Earner</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#ff8c00] rounded-[2rem] p-8 pb-10 w-full md:w-1/4 transform rotate-[4deg] hover:rotate-0 transition-transform duration-300 shadow-xl flex flex-col justify-between z-20 -ml-0 md:-ml-8 mt-12 md:mt-6">
              <p className="text-brand-dark font-medium text-lg leading-snug mb-12">
                "With their structured treasury services, my company's idle funds are now yielding highly competitive returns safely and securely."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Image src="https://picsum.photos/seed/test4/100/100" alt="Fatima" width={50} height={50} className="rounded-full object-cover" />
                <div>
                  <div className="font-bold text-brand-dark text-lg">Fatima</div>
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
            <div className="text-xs font-bold tracking-widest text-brand-dark mb-6 flex items-center">
              <span className="text-brand-yellow-hover mr-4 text-sm">06</span>
              THE GOLD STANDARD IN SECURITY
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight text-brand-dark">
              Secure by design,<br />
              <span className="text-gray-400">regulated in Nigeria</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-brand-dark/10">
            {/* Col 1 */}
            <div className="border-b md:border-b-0 md:border-r border-brand-dark/10 p-8 lg:p-12 pl-0 flex flex-col">
              <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12 max-w-sm">
                Swiftbanq applies privacy-first, NDPR-compliant standards to protect your data and safeguards your funds under strict regulatory supervision.
              </p>
              <Link href="/contact" className="inline-flex items-center text-sm font-bold border border-brand-dark/20 rounded-lg py-3 px-6 hover:bg-[#b4fc08] hover:border-[#b4fc08] hover:text-black transition-colors w-max uppercase tracking-wider text-brand-dark mt-auto">
                Talk to an Expert <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
            </div>

            {/* Col 2 */}
            <div className="border-b md:border-b-0 md:border-r border-brand-dark/10 p-8 lg:p-12 relative overflow-hidden group">
               <div className="text-xs font-bold tracking-wider text-brand-dark uppercase mb-16">CBN & LSLB Regulated</div>
               <div className="flex justify-center items-center h-48 relative">
                 {/* Decorative Icon */}
                 <div className="w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center relative z-10 bg-[#FDF8E7] group-hover:scale-105 transition-transform duration-500">
                   <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm">
                     <CheckCircle2 className="w-10 h-10 text-brand-dark" strokeWidth={1.5} />
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
  );
}
