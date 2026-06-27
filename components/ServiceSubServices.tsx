import Link from 'next/link';
import Image from 'next/image';

interface SubService {
  title: string;
  description: string;
}

interface ServiceSubServicesProps {
  subServices: SubService[];
}

const imageMapping: Record<string, string> = {
  'LPO Financing': '/images/sme-card.jpg',
  'Invoice Discounting': '/images/hero-card-1.jpg',
  'Bridge & Contract Finance': '/images/hero-card-3.jpg',
  'Project Finance & Syndication': '/images/hero-card-4.jpg',
  'Fleet & Vehicle Financing': '/images/asset-finance-car.jpg',
  'Office & Household Equipment': '/images/asset-card.jpg',
  'Industrial Machinery': '/images/asset-industrial.jpg',
  'Laptops & IT Infrastructure': '/images/asset-card.jpg',
  'Corporate Invoices': '/images/sme-card.jpg',
  'Government Parastatals': '/images/ceo.jpg',
  'Supplier Payment': '/images/hero-card-1.jpg',
  'Contract Execution': '/images/hero-card-3.jpg',
  'Fixed Deposits': '/images/treasury-card.jpg',
  'Target Savings': '/images/home-family.jpg',
  'Corporate Treasury': '/images/home-business-men.jpg'
};

export function ServiceSubServices({ subServices }: ServiceSubServicesProps) {
  if (!subServices || subServices.length === 0) return null;

  return (
    <section className="bg-brand-cream py-24 border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
          OUR SERVICES
        </div>
        <h2 className="text-5xl md:text-6xl font-heading font-black text-brand-dark tracking-tight leading-[1.05] mb-16">
          Explore what we <span className="italic font-serif">offer</span><br />
          under this product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
          {subServices.map((service, idx) => (
            <div 
              key={idx} 
              className={`${idx % 2 === 0 ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'} rounded-3xl p-8 md:p-12 flex flex-col items-start transition-transform hover:-translate-y-1 border ${idx % 2 === 0 ? 'border-brand-dark' : 'border-gray-100'}`}
            >
              <h3 className={`text-3xl md:text-4xl font-black mb-4 leading-tight ${idx % 2 === 0 ? 'text-white' : 'text-brand-dark'}`}>
                {service.title}
              </h3>
              <p className={`${idx % 2 === 0 ? 'text-gray-400' : 'text-gray-500'} font-medium mb-10 text-lg md:text-xl`}>
                {service.description}
              </p>
              
              <div className="mt-auto w-full h-48 md:h-64 relative rounded-2xl overflow-hidden mt-4 bg-gray-100">
                <Image 
                  src={imageMapping[service.title] || '/images/hero-card-1.jpg'} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
