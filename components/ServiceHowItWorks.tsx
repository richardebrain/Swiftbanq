import Link from 'next/link';

interface Step {
  title: string;
  description: string;
}

interface ServiceHowItWorksProps {
  image?: string;
  steps: Step[];
  title?: string;
}

export function ServiceHowItWorks({ steps, title }: ServiceHowItWorksProps) {
  return (
    <section className="bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Sticky Heading */}
          <div className="w-full lg:w-1/3 lg:sticky top-32 flex flex-col items-start">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-brand-dark tracking-tight leading-[1.05] mb-8">
              {title || "Cash you can access fast"}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              No hidden charges, no complex deductions. Everything is clearly communicated upfront.
            </p>
            <Link 
              href="#apply" 
              className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between gap-6 transition-transform hover:-translate-y-1">
                <div className="flex-1">
                  <div className="bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
                    Step {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Decorative Icon Box */}
                <div className="hidden md:flex w-24 h-24 bg-brand-cream rounded-2xl items-center justify-center flex-shrink-0">
                  <span className="text-4xl text-brand-dark opacity-50">✨</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
