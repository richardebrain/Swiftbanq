import Link from 'next/link';

export function Footer() {
  return (
    <>
      {/* Pre-footer CTA */}
      <section className="bg-brand-dark py-32 md:py-40 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-medium text-white tracking-tight mb-12 leading-[1.1]">
            Unlock the <span className="italic text-brand-yellow font-light">financial growth</span><br className="hidden md:block" /> you&apos;ve been needing.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-dark font-medium rounded-2xl hover:bg-gray-100 transition-colors text-lg">
            Book a demo
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between mb-24 gap-16">
            {/* Brand */}
            <div className="w-full lg:w-1/3">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                   <div className="w-6 h-6 bg-brand-yellow transform rotate-45 -skew-x-12"></div>
                   <div className="w-6 h-6 bg-white transform rotate-45 -skew-x-12 opacity-80"></div>
                </div>
                <span className="font-heading font-bold text-2xl tracking-tighter">
                  SWIFT<span className="font-light">BANQ</span>
                </span>
              </Link>
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
                <h4 className="text-gray-400 font-medium mb-8">Company</h4>
                <ul className="space-y-5">
                  <li>
                    <Link href="/about" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">About</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Clients</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-400 font-medium mb-8">Legal</h4>
                <ul className="space-y-5">
                  <li>
                    <Link href="/privacy-policy" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-use" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 gap-6">
            <p className="text-gray-400 text-sm font-medium">
              Copyright &copy; {new Date().getFullYear()} Swiftbanq Credit Solutions. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link href="/data-protection" className="text-white font-medium hover:text-brand-yellow transition-colors text-[15px]">Data Protection</Link>
              <Link href="/complaints-policy" className="text-white font-medium hover:text-brand-yellow transition-colors text-[15px]">Complaints Policy</Link>
            </div>
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
