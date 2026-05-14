import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Target, Users, Landmark, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Swiftbanq Credit Solutions is a licensed NBFI in Lagos, Nigeria. Learn about our mission to close the financial gap for SMEs and individuals through fast, fair, and structured credit products.',
  alternates: {
    canonical: 'https://swiftbanq.com/about',
  },
  openGraph: {
    title: 'About Us | Swiftbanq Credit Solutions',
    description: 'Learn about Swiftbanq — a licensed Non-Bank Financial Institution in Lagos, Nigeria committed to delivering swift, secure, and structured credit solutions.',
    url: 'https://swiftbanq.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow mb-4">Who We Are</p>
          <h1 className="text-5xl md:text-6xl font-heading font-medium text-brand-dark tracking-tight mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A licensed, forward-thinking financial institution committed to delivering swift, secure, and structured credit solutions across Nigeria.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl mb-24">
          <Image
            src="/swiftbanq-office.png"
            alt="Swiftbanq office"
            fill
            className="object-cover"
          />
        </div>
        {/* Mission Statement + Values */}
        <div className="mb-24 space-y-20">

          {/* Big statement + body copy */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark leading-tight tracking-tight">
              We exist to <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">close</span> the financial gap for businesses and individuals across Nigeria.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded with a clear mandate, Swiftbanq Credit Solutions was built to serve the underserved — SMEs chasing growth, salary earners navigating life&apos;s surprises, and businesses that need a financial partner who moves at their pace.
              </p>
              <p>
                We combine regulatory discipline with modern thinking to deliver credit products that are fast, fair, and structured for the real economy. Every loan we issue is a commitment to someone&apos;s ambition.
              </p>
            </div>
          </div>

          {/* Image + CTA section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://img.magnific.com/free-photo/business-people-shaking-hands-finishing-up-meeting_1303-18609.jpg"
                alt="Swiftbanq team"
                fill
                unoptimized
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark leading-tight tracking-tight mb-6">
                Built on <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">trust.</span> Driven by results.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our team brings together seasoned finance professionals, compliance experts, and technology-driven thinkers — all united by one purpose: helping you access the capital you need, when you need it.
              </p>
              <a href="/contact" className="inline-flex items-center px-8 py-4 bg-brand-yellow text-brand-dark rounded-md font-bold hover:bg-brand-yellow-hover transition-colors text-base">
                Talk to us today
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-3xl font-heading font-medium text-brand-dark text-center mb-12 tracking-tight">We live by our values.</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: "⚡", title: "Speed & Precision", desc: "Fast decisions, no unnecessary delays." },
                { icon: "🔒", title: "Trust & Compliance", desc: "Fully licensed, fully accountable." },
                { icon: "🤝", title: "Client First", desc: "Every product is built around your needs." },
                { icon: "📈", title: "Growth Minded", desc: "We grow when our clients grow." },
              ].map((v, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand-yellow flex items-center justify-center text-2xl shadow-md">
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-brand-dark text-base">{v.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mb-24">
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex p-6 rounded-xl">
                <div className="shrink-0 mr-4">
                  <Landmark className="w-8 h-8 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Legal Status</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Duly Licensed money lending institution in Lagos, Nigeria, operating strictly under the regulatory framework of the Lagos State Money Lenders Law and allied prudential guidelines.
                  </p>
                </div>
              </div>

              <div className="flex p-6 rounded-xl">
                <div className="shrink-0 mr-4">
                  <BriefcaseIcon className="w-8 h-8 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Business Model</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We are a Non-Bank Financial Institution focused on offering flexible short to medium term lendings crafted for the modern economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Goal Section */}
        <div className="bg-brand-dark rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-brand-dark to-brand-dark opacity-50"></div>
          <div className="relative z-10">
            {/* Section header */}
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow mb-3">What drives us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission &amp; Goal</h2>
            </div>

            {/* Two-column cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Mission */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-start">
                <div className="w-14 h-14 rounded-xl bg-brand-yellow flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-brand-dark" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower individuals and businesses across Nigeria with fast, fair, and accessible credit solutions — bridging the financial gap through innovation, integrity, and a deep commitment to our clients&apos; growth.
                </p>
              </div>

              {/* Goal */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-start">
                <div className="w-14 h-14 rounded-xl bg-brand-yellow flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-brand-dark" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Goal</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To provide reliable lending solutions that foster financial empowerment, leveraging technology, skilled human capital, and unwavering regulatory compliance.
                </p>
              </div>
            </div>


          </div>
        </div>

        {/* Join the journey section */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://img.magnific.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg"
              alt="Swiftbanq team collaborating"
              fill
              unoptimized
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark leading-tight tracking-tight mb-6">
              We&apos;re building something <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">meaningful.</span> Come be part of it.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Swiftbanq, we believe great work happens when talented people care about the same things — speed, integrity, and real impact. If that sounds like you, we&apos;d love to connect.
            </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-brand-yellow text-brand-dark rounded-md font-bold hover:bg-brand-yellow-hover transition-colors text-base">
              Get in touch <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
