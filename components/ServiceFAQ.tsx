"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/3 lg:sticky top-32">
            <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-dark tracking-tight leading-[1.05] mb-8">
              <span className="italic font-serif">Questions?</span><br />
              Answers.
            </h2>
            <Link 
              href="#apply" 
              className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block"
            >
              Get Started
            </Link>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full lg:w-2/3">
            <div className="border-t border-brand-dark/10">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-brand-dark/10 py-6 transition-colors hover:bg-gray-50 px-4"
                >
                  <button
                    className="w-full flex justify-between items-center text-left focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className={`text-lg md:text-xl font-bold pr-8 transition-colors ${openIndex === index ? 'text-brand-dark' : 'text-gray-800'}`}>
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center flex-shrink-0 transition-transform duration-300">
                      {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
