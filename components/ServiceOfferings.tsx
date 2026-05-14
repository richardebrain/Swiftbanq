import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface SubService {
    shortTitle: string;
    fullTitle: string;
    description: string;
    colorClass: string;
    textClass: string;
    seed: string;
}

interface ServiceOfferingsProps {
    title: string;
    offerings: SubService[];
}

export function ServiceOfferings({ title, offerings }: ServiceOfferingsProps) {
    return (
        <section className="py-24 md:py-32 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-heading font-medium text-brand-dark mb-16 text-center tracking-tight">
                    {title}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {offerings.map((offering, index) => (
                        <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-brand-dark/5 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                            {/* Top Colored Section */}
                            <div className={`${offering.colorClass} h-[220px] relative p-8 flex flex-col justify-end overflow-hidden`}>
                                {/* Illustration / Image */}
                                <div className="absolute right-4 -bottom-4 w-48 h-48 sm:w-56 sm:h-56">
                                    <div className="relative w-full h-full rounded-full border-4 border-white/20 shadow-xl overflow-hidden transform rotate-2">
                                        <Image
                                            src={`https://picsum.photos/seed/${offering.seed}/400/400`}
                                            alt={offering.shortTitle}
                                            fill
                                            className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                </div>
                                <h3 className={`text-3xl md:text-4xl font-bold relative z-10 ${offering.textClass}`}>
                                    {offering.shortTitle}
                                </h3>
                            </div>
                            
                            {/* Bottom Content Section */}
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <h4 className="text-2xl font-bold text-brand-dark mb-4">
                                    {offering.fullTitle}
                                </h4>
                                <p className="text-gray-600 text-lg leading-relaxed font-medium mb-10 flex-grow">
                                    {offering.description}
                                </p>
                                
                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4 mt-auto">
                                    <Link 
                                        href="/contact" 
                                        className="bg-brand-dark text-white px-6 py-3.5 rounded-xl font-bold flex items-center hover:bg-brand-yellow hover:text-brand-dark transition-colors group"
                                    >
                                        Check Eligibility 
                                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link 
                                        href="/contact" 
                                        className="bg-gray-100 text-brand-dark px-6 py-3.5 rounded-xl font-bold flex items-center hover:bg-gray-200 transition-colors group"
                                    >
                                        Learn More 
                                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform text-[#FF5A50]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
