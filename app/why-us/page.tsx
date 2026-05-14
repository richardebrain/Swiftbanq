import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Zap, Users, TrendingUp, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Choose Swiftbanq',
  description: 'Why Swiftbanq Credit Solutions? Fast approvals, CBN-compliant processes, transparent pricing, and dedicated support for SMEs and individuals across Nigeria. See what sets us apart.',
  alternates: {
    canonical: 'https://swiftbanq.com/why-us',
  },
  openGraph: {
    title: 'Why Choose Swiftbanq | Swiftbanq Credit Solutions',
    description: 'Fast approvals, transparent pricing, regulatory compliance, and dedicated support. Discover why Nigerian businesses and individuals choose Swiftbanq.',
    url: 'https://swiftbanq.com/why-us',
  },
};

const reasons = [
  {
    icon: Zap,
    title: 'Fast Approvals',
    description:
      'Our streamlined digital process means loan decisions are made quickly — no unnecessary delays, no endless paperwork. Once approved, funds are disbursed promptly.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulated & Trustworthy',
    description:
      'Swiftbanq operates under the Lagos State Money Lenders Law and in compliance with CBN guidelines. Your funds and data are handled with the highest standards of integrity.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Rates',
    description:
      'We offer market-leading interest rates tailored to your risk profile and loan type. No hidden fees — what you see in your agreement is exactly what you pay.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description:
      'From application to final repayment, our team is available to guide you. We treat every client as a partner, not just a transaction.',
  },
];

export default function WhyUsPage() {
  return (
    <div className="w-full bg-transparent">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow mb-4">
            Our Difference
          </p>
          <h1 className="text-5xl md:text-6xl font-heading font-medium text-brand-dark tracking-tight mb-6">
            Why Choose Swiftbanq?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Not everyone gets the financial support they need. We built Swiftbanq to change that —
            with speed, transparency, and genuine care for every client.
          </p>
        </div>
      </section>

      {/* Reasons grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm"
              >
                <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-brand-dark" />
                </div>
                <h2 className="text-2xl font-bold text-brand-dark mb-3">{reason.title}</h2>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-dark/80 transition-colors text-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
