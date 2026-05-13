import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Target, Users, Landmark, ArrowRight } from 'lucide-react';
import { CommunitySection } from '@/components/CommunitySection';

export const metadata = {
  title: 'About Us | Swiftbanq Credit Solutions',
  description: 'Learn about Swiftbanq Credit Solutions, our business model, and our mission to foster financial empowerment.',
};

export default function AboutPage() {
  return (
    <div className="w-full bg-transparent">
      {/* Hero Section */}
      <CommunitySection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
             <Image 
                src="https://picsum.photos/seed/officeco/800/600" 
                alt="Corporate Office" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At Swiftbanq Credit Solutions, we specialize in bridging financial gaps for individuals and businesses. As a forward-thinking institution, we are committed to delivering swift, secure, and structured financial products.
            </p>
            <div className="space-y-6">
              <div className="flex bg-gray-50 p-6 rounded-xl border border-gray-100">
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

              <div className="flex bg-gray-50 p-6 rounded-xl border border-gray-100">
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
        <div className="bg-brand-dark rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-brand-dark to-brand-dark opacity-50"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Target className="w-16 h-16 text-brand-yellow mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Goal</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              To provide reliable lending solutions that foster financial empowerment, leveraging technology, skilled human capital, and unwavering regulatory compliance.
            </p>
            <Link href="/services" className="inline-flex justify-center items-center px-8 py-4 bg-brand-yellow text-brand-dark rounded-md font-bold hover:bg-brand-yellow-hover transition-colors">
              Explore Our Services <ArrowRight className="w-5 h-5 ml-2" />
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
