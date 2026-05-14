import Link from 'next/link';
import Image from 'next/image';

export function CommunitySection() {
  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Floating Images - Left */}
      <div className="absolute top-[10%] -left-10 md:left-10 w-32 md:w-48 h-32 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl opacity-60 md:opacity-100 hidden sm:block">
        <Image src="https://picsum.photos/seed/comm1/400/400" alt="Community Member" fill className="object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute bottom-[20%] left-[-20px] md:left-24 w-28 md:w-40 h-28 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl opacity-60 md:opacity-100 hidden sm:block">
        <Image src="https://picsum.photos/seed/comm2/400/400" alt="Community Member" fill className="object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute top-[40%] left-[10%] md:left-[15%] w-24 md:w-32 h-24 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl opacity-60 md:opacity-100 hidden lg:block">
        <Image src="https://picsum.photos/seed/comm3/400/400" alt="Community Member" fill className="object-cover" referrerPolicy="no-referrer" />
      </div>

      {/* Floating Images - Right */}
      <div className="absolute top-[5%] -right-10 md:right-10 w-36 md:w-56 h-36 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl opacity-60 md:opacity-100 hidden sm:block">
        <Image src="https://picsum.photos/seed/comm4/400/400" alt="Community Member" fill className="object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute bottom-[10%] -right-5 md:right-20 w-32 md:w-48 h-32 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl opacity-60 md:opacity-100 hidden sm:block">
        <Image src="https://picsum.photos/seed/comm5/400/400" alt="Community Member" fill className="object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute top-[45%] right-[5%] md:right-[15%] w-20 md:w-28 h-20 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl opacity-60 md:opacity-100 hidden lg:block">
        <Image src="https://picsum.photos/seed/comm6/400/400" alt="Community Member" fill className="object-cover" referrerPolicy="no-referrer" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="inline-flex items-center px-5 py-1.5 rounded-full border border-black text-sm font-medium tracking-wide text-black uppercase mb-8 md:mb-12">
          Community
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium text-black leading-[1.1] mb-8 tracking-tight">
          Beyond Banking. Beyond Borders. Beyond Limits.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-800 font-medium mb-12 max-w-xl mx-auto">
          Join a community of people who live, earn, and dream globally.
        </p>
        
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-10 py-4 md:py-5 rounded-full bg-brand-yellow hover:bg-brand-yellow-hover text-black font-bold text-lg transition-colors shadow-sm w-full sm:w-auto"
        >
          Get the app
        </Link>
      </div>
    </section>
  );
}
