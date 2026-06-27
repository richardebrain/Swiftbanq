"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { guidesData } from '@/lib/guidesData';

export function GuidesList() {
  const [visibleCount, setVisibleCount] = useState(12);

  const visibleGuides = guidesData.slice(0, visibleCount);
  const hasMore = visibleCount < guidesData.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleGuides.map((guide) => (
          <Link key={guide.slug} href={`/blog/${guide.slug}`} className="group block h-full">
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={guide.coverImage} 
                  alt={guide.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark">
                  {guide.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 font-semibold mb-4">
                  <span>{new Date(guide.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{guide.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4 leading-tight group-hover:text-brand-yellow transition-colors">
                  {guide.title}
                </h2>
                <p className="text-gray-600 line-clamp-3 flex-1">
                  {guide.excerpt}
                </p>
                <div className="mt-6 flex items-center font-bold text-brand-dark group-hover:text-brand-yellow transition-colors text-sm">
                  Read guide
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-16 flex justify-center">
          <button 
            onClick={handleLoadMore}
            className="px-8 py-3 bg-white border-2 border-brand-dark text-brand-dark font-bold rounded-full hover:bg-brand-dark hover:text-brand-yellow transition-colors text-base"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
