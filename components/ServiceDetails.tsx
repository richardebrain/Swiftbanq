import { CheckCircle2, FileText, Clock, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceDetailsProps {
    headingPart1: string;
    headingHighlight: string;
    headingPart2: string;
    description1: string;
    subDescription1: string;
    seed: string;
}

export function ServiceDetails({ headingPart1, headingHighlight, headingPart2, description1, subDescription1, seed }: ServiceDetailsProps) {
    return (
        <div className="bg-transparent">
            {/* Intro Section */}
            <section className="py-24 border-b border-brand-dark/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <h2 className="text-4xl md:text-[3.5rem] font-heading font-medium text-brand-dark leading-[1.1] tracking-tight">
                                {headingPart1}{' '}
                                <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">
                                    {headingHighlight}
                                </span>{' '}
                                {headingPart2}
                            </h2>
                        </div>
                        <div className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed space-y-6">
                            <p>{description1}</p>
                            <p>{subDescription1}</p>
                            <Link href="/contact" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-yellow-hover mt-4 text-lg transition-colors group">
                                Check Eligibility <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-24 border-b border-brand-dark/10 bg-[#FDF8E7]/50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-heading font-medium text-center text-brand-dark mb-20 tracking-tight">
                        How it <span className="font-bold text-brand-dark bg-brand-yellow px-3 py-1 rounded-xl inline-block transform -rotate-2 my-2 shadow-sm">works</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center">
                        <div className="md:col-span-7">
                             <div className="relative border-l-[3px] border-gray-200 ml-6 pl-10 pb-16">
                                <div className="absolute w-12 h-12 bg-white border-2 border-gray-200 text-gray-400 rounded-full flex items-center justify-center -left-[27px] top-0 font-bold text-xl">1</div>
                                <h3 className="text-2xl md:text-3xl font-medium text-gray-400 mb-4 pt-1">Check your eligibility</h3>
                             </div>

                             <div className="relative border-l-[3px] border-brand-yellow ml-6 pl-10 pb-16">
                                <div className="absolute w-12 h-12 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center -left-[27px] top-0 font-bold text-xl shadow-md">2</div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#FF5A50] mb-6 pt-1">Complete an online application</h3>
                                <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-lg">
                                    If you&apos;re eligible to apply, you&apos;ll need to complete a simple online application. Applications will be assessed to ensure that requests are appropriate and affordable.
                                </p>
                             </div>
                             
                             <div className="relative ml-6 pl-10">
                                <div className="absolute w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center -left-[27px] top-0 font-bold text-xl shadow-md">3</div>
                                <h3 className="text-2xl md:text-3xl font-medium text-brand-dark mb-4 pt-1">Get your funds</h3>
                             </div>
                        </div>

                        <div className="md:col-span-5 relative">
                             {/* Illustration */}
                            <div className="relative h-[400px] w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-black/5">
                               <Image src={`https://picsum.photos/seed/${seed}-steps/800/800`} alt="How it works" fill className="object-cover" referrerPolicy="no-referrer" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Improve your financial situation */}
            <section className="py-24 border-b border-brand-dark/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark leading-[1.1] tracking-tight mb-8">
                                <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">Improve</span> your financial situation
                            </h2>
                            <p className="text-xl text-gray-700 font-medium leading-relaxed">
                                Working directly with you allows us to connect your borrowing capacity to your income and cash flow, meaning we can usually offer you a better structure than you would get elsewhere. This ensures you can easily achieve your goals and improve your financial situation.
                            </p>
                        </div>
                        <div className="space-y-12">
                             <div className="bg-[#FDF8E7]/50 p-8 rounded-[2rem] border border-brand-dark/5 shadow-sm">
                                <h3 className="text-2xl font-bold text-brand-dark mb-4">Higher acceptance rate</h3>
                                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                                    Our robust assessment means things are more secure both for you and for us, so we have a higher acceptance rate than most traditional lenders. See our criteria for details.
                                </p>
                             </div>
                             <div className="bg-brand-dark text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">More affordable and reliable</h3>
                                <p className="text-lg text-gray-300 font-medium leading-relaxed relative z-10">
                                    We offer credit of up to ₦100,000,000 at lower repayments than those of traditional unstructured lenders.
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Why business choose us */}
            <section className="bg-white py-24 mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-heading font-medium text-brand-dark mb-16 tracking-tight text-center">Why businesses choose us:</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-[#FDF8E7]/30 p-8 rounded-[2.5rem] border border-brand-dark/5 hover:-translate-y-2 transition-transform duration-300">
                             <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-sm mb-6 border border-brand-dark/5">
                                <ThumbsUp className="w-8 h-8 text-[#FF5A50]" strokeWidth={1.5} />
                             </div>
                             <h3 className="text-xl font-bold text-brand-dark mb-4">Competitive rates</h3>
                             <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                 Enjoy market-leading rates that are fair, transparent, and designed to support sustainable growth and repayment.
                             </p>
                        </div>
                        <div className="bg-[#FDF8E7]/30 p-8 rounded-[2.5rem] border border-brand-dark/5 hover:-translate-y-2 transition-transform duration-300">
                             <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-sm mb-6 border border-brand-dark/5">
                                <FileText className="w-8 h-8 text-[#FF5A50]" strokeWidth={1.5} />
                             </div>
                             <h3 className="text-xl font-bold text-brand-dark mb-4">Minimal paperwork required</h3>
                             <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                 We keep it simple. Apply and get approved with minimal documentation — no red tape, no hassle.
                             </p>
                        </div>
                        <div className="bg-[#FDF8E7]/30 p-8 rounded-[2.5rem] border border-brand-dark/5 hover:-translate-y-2 transition-transform duration-300 text-brand-dark">
                             <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center mb-6 border border-brand-dark/5">
                                <Clock className="w-8 h-8 text-[#FF5A50]" strokeWidth={1.5} />
                             </div>
                             <h3 className="text-xl font-bold mb-4">48-hour turnaround time</h3>
                             <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                 Get your money disbursed within 48 hours. Fast, efficient service backed by licensed financial institutions.
                             </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
