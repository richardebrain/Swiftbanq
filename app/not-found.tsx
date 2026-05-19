import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[72vh] bg-brand-cream flex items-center justify-center px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[9rem] md:text-[12rem] font-bold text-brand-dark/8 leading-none select-none tracking-tighter">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark -mt-6 mb-5 tracking-tight">
          Page not found
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            href="/"
            className="px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full hover:bg-brand-yellow/80 transition-colors text-base"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-brand-dark/20 text-brand-dark font-medium rounded-full hover:bg-brand-dark/5 transition-colors text-base"
          >
            Contact Us
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: '/services/sme-financing', label: 'SME Financing' },
            { href: '/asset-financing', label: 'Asset Financing' },
            { href: '/services/digital-lending', label: 'Digital Lending' },
            { href: '/treasury-services', label: 'Treasury Services' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="p-4 rounded-2xl border border-brand-dark/10 hover:border-brand-yellow hover:bg-brand-yellow/10 transition-colors font-semibold text-brand-dark text-sm text-center"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
