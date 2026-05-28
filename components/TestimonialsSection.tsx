'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote:
      "Swiftbanq's SME Financing helped us secure the capital we needed to fulfill a major government contract without wiping out our cash flow.",
    name: 'Chinedu K.',
    role: 'Contractor',
  },
  {
    quote:
      'Acquiring our new delivery fleet was a breeze. Their asset financing structured our payments perfectly to match our monthly revenue.',
    name: 'Nkechi A.',
    role: 'Logistics Manager',
  },
  {
    quote:
      'The digital lending process is incredibly seamless. I got a loan disbursed directly to my account within minutes for a personal emergency.',
    name: 'Adebayo O.',
    role: 'Salary Earner',
  },
  {
    quote:
      "With their structured treasury services, my company's idle funds are now yielding highly competitive returns safely and securely.",
    name: 'Fatima K.',
    role: 'Financial Director',
  },
];

const INTERVAL = 4000;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-dark mb-10 tracking-tight text-center leading-tight">
          Hear what our clients are saying
        </h2>

        {/* Slider image container — no dots inside */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ minHeight: '500px' }}>

          {/* Background image */}
          <Image
            src="/swiftbanq-office.webp"
            alt="Swiftbanq office"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/50" />

          {/* Testimonial card — centered, clear of bottom edge */}
          <div className="absolute inset-0 flex items-center justify-center px-6 pb-4">
            <div
              className="rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-lg bg-brand-cream"
              style={{
                marginLeft: 'clamp(0px, 20%, 200px)',
              }}
            >
              {/* Quote mark + stars */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="font-serif leading-none select-none text-black"
                  style={{ fontSize: '5rem', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div className="flex gap-1.5 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-7 h-7"
                      style={{ fill: '#FEF418' }}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-brand-dark text-xl md:text-2xl leading-relaxed mb-10 font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="font-bold italic text-brand-dark text-lg">{t.name}</div>
                <div className="text-brand-dark/60 text-base">{t.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot navigation — OUTSIDE the image, below it */}
        <div
          className="flex justify-center gap-2 mt-5"
          role="tablist"
          aria-label="Testimonials"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-8 h-3 bg-brand-dark'
                  : 'w-3 h-3 bg-brand-dark/25 hover:bg-brand-dark/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
