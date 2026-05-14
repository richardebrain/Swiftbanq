import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <>
      {/* Pre-footer CTA */}
      <section className="relative bg-brand-dark py-32 md:py-40 border-b border-white/5 overflow-hidden">
        {/* Pattern - Left */}
        <div className="absolute top-0 h-[800px] w-[550px] pointer-events-none select-none z-0 opacity-40" style={{ left: '-20%' }}>
          <Image src="/pattern 4.svg" alt="" fill className="object-cover object-left-top" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
        </div>
        {/* Pattern - Right (mirrored) */}
        <div className="absolute top-0 h-[800px] w-[550px] pointer-events-none select-none z-0 opacity-40 scale-x-[-1]" style={{ right: '-20%' }}>
          <Image src="/pattern 4.svg" alt="" fill className="object-cover object-left-top" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-white tracking-tight mb-12 leading-[1.1]">
            Unlock the <span className="italic text-brand-yellow font-light">financial growth</span><br /> you&apos;ve been needing.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" className="px-10 py-3 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow-hover transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg">
              Apply Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/contact" className="px-10 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between mb-24 gap-16">
            {/* Brand */}
            <div className="w-full lg:w-1/3">
              <Link href="/" className="flex items-center mb-4">
                <Image src="/SBQ_Logo.svg" alt="Swiftbanq" width={160} height={40} className="brightness-0 invert" />
              </Link>
              <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">
                Empowering financial growth through smart, accessible credit solutions.
              </p>

            </div>

            {/* Links Grid */}
            <div className="w-full lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
              <div>
                <h4 className="text-gray-400 font-medium mb-8">Product</h4>
                <ul className="space-y-5">
                  <li>
                    <Link href="/services/sme-financing" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">SME Financing</Link>
                  </li>
                  <li>
                    <Link href="/services/asset-financing" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Asset Financing</Link>
                  </li>
                  <li>
                    <Link href="/services/digital-lending" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Digital Lending</Link>
                  </li>
                  <li>
                    <Link href="/services/treasury-services" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Treasury Services</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-400 font-medium mb-8">Resources</h4>
                <ul className="space-y-5">
                  <li>
                    <Link href="/about" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">About</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-use" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Terms of Use</Link>
                  </li>
                  <li>
                    <Link href="/data-protection" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Data Protection</Link>
                  </li>
                  <li>
                    <Link href="/complaints-policy" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Complaints Policy</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-400 font-medium mb-8">Get in Touch</h4>
                <ul className="space-y-5">
                  <li>
                    <a href="tel:07086429380" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">07086429380</a>
                  </li>
                  <li>
                    <a href="mailto:enquiries@swiftbanq.com.ng" className="font-medium hover:text-brand-yellow transition-colors text-[15px] break-all">enquiries@swiftbanq.com.ng</a>
                  </li>
                  <li>
                    <p className="font-medium text-[15px] text-white leading-relaxed">
                      6, Babatunde Jose Street,<br />
                      Off Ademola Adetokunbo V.I,<br />
                      Lagos.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 gap-6">
            <p className="text-gray-400 text-sm font-medium">
              Copyright &copy; {new Date().getFullYear()} Swiftbanq Credit Solutions. All rights reserved.
            </p>
          </div>

          <div className="pt-10 text-xs text-gray-500 space-y-4 leading-[1.8] font-medium max-w-6xl">
            <p>
              * Loans and financing options are subject to approval, terms, and conditions. Interest rates and repayment structures may vary based on creditworthiness, market conditions, and regulatory guidelines.
            </p>
            <p>
              Swiftbanq Credit Solutions is a duly licensed money lending institution operating under the regulatory framework of the Lagos State Money Lenders Law. We are not a deposit-taking commercial bank, but a financial partner empowering growth through accessible credit and structured treasury services.
            </p>
            <p>
              &dagger; Treasury investments and structured borrowing solutions are subject to risk. Past performance does not guarantee future results. Please carefully review all agreements and documentation prior to making financial decisions. If you have any questions regarding Swiftbanq&apos;s offerings, please contact us directly.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
