import Link from 'next/link';
import Image from 'next/image';

interface ServiceHeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  seed: string;
}

export function ServiceHero({ title, description, buttonText, buttonLink, seed }: ServiceHeroProps) {
  return (
    <section className="bg-[#FDF8E7] relative overflow-hidden border-b border-brand-dark/10 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row pb-0 min-h-[500px]">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center pb-20 lg:pb-32 pr-0 lg:pr-12 relative z-20 mt-8 lg:mt-16">
            <div className="inline-flex self-start items-center px-4 py-1.5 rounded-full border border-black text-sm font-medium tracking-wide text-black uppercase mb-6">
              Our Services
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-medium text-brand-dark leading-[1.1] mb-6 tracking-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 font-medium mb-10 max-w-xl leading-relaxed">
              {description}
            </p>
            
            <div>
              <Link 
                href={buttonLink} 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold text-lg transition-colors shadow-sm w-full sm:w-auto"
              >
                {buttonText}
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-[45%] relative h-[350px] sm:h-[450px] lg:h-auto mt-auto flex items-end z-10">
             <div className="absolute bottom-0 right-[-10%] lg:right-[-20%] w-[120%] lg:w-[140%] h-[120%] min-h-[400px] pointer-events-none">
                <Image 
                  src={`https://picsum.photos/seed/${seed}-illustration/1200/1200`} 
                  alt={title} 
                  fill 
                  className="object-contain object-bottom lg:object-right-bottom" 
                  referrerPolicy="no-referrer" 
                />
             </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative scribbles */}
      <svg className="absolute bottom-16 left-10 text-brand-dark w-24 h-8 hidden lg:block z-0 opacity-50" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20 Q 5 10, 10 15 T 20 15 T 30 5 T 40 10 T 50 15 T 70 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      <svg className="absolute bottom-8 left-40 text-brand-dark w-20 h-10 hidden lg:block z-0 opacity-50" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 30 Q 10 20, 20 30 T 40 10 T 60 20 T 90 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      <svg className="absolute top-24 right-1/3 text-brand-dark w-32 h-16 hidden lg:block z-0 opacity-50" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 35 Q 10 20, 20 30 T 30 20 T 40 25 T 60 10 T 80 15 T 100 10 T 120 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </section>
  );
}
