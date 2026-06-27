import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Zap, Clock } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export function ServiceHero({ title, subtitle, image }: ServiceHeroProps) {
  return (
    <>
    <section 
      className="w-full text-brand-dark pt-32 md:pt-40 lg:pt-48 pb-0"
      style={{
        backgroundImage: 'url(https://www.piggyvest.com/_next/static/images/headerBGhome-9c6bf21c25fa09992d4dffc8395557b0.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Text Content */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-[1.05] mb-6 text-white">
            {title}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
            <Link 
              href="#apply" 
              className="bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Get Started Now
            </Link>
          </div>

          </div>
        </div>
    </section>

    {/* Trust Badges - Moved Below Hero */}
    <section className="w-full bg-brand-cream py-12 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-2">
            <Zap className="w-6 h-6 text-brand-dark" />
            <div className="text-sm font-bold uppercase tracking-wider text-brand-dark">Fast Approval</div>
            <div className="text-xs text-gray-500">Decisions in minutes</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-brand-dark" />
            <div className="text-sm font-bold uppercase tracking-wider text-brand-dark">Secure Process</div>
            <div className="text-xs text-gray-500">Bank-level encryption</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="w-6 h-6 text-brand-dark" />
            <div className="text-sm font-bold uppercase tracking-wider text-brand-dark">Flexible Terms</div>
            <div className="text-xs text-gray-500">Tailored to your needs</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
