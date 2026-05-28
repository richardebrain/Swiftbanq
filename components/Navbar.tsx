"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ApplyModal } from '@/components/ApplyModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <header aria-label="Main navigation" className="bg-brand-cream w-full border-b border-transparent relative z-50">
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-9999px',
          left: '1rem',
          zIndex: 100,
          background: 'white',
          color: '#1a1a1a',
          fontWeight: 700,
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          textDecoration: 'none',
        }}
        onFocus={e => { e.currentTarget.style.top = '1rem'; }}
        onBlur={e => { e.currentTarget.style.top = '-9999px'; }}
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16" aria-label="Primary">
          <div className="flex items-center">
            <Link href="/" aria-label="Swiftbanq Credit Solutions — home">
              <Image
                src="/SBQ_Logo.svg"
                alt="Swiftbanq Credit Solutions"
                width={244}
                height={54}
                priority
                className="h-7 w-auto md:h-8"
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-10">

            {/* Services Link */}
            <Link
              href="/#services"
              className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>

            <Link href="/about" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">About Us</Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-base font-medium text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded py-2"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                onClick={() => setIsResourcesOpen((v) => !v)}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
                aria-controls="resources-menu"
              >
                Legal <ChevronDown className="ml-1 w-4 h-4" aria-hidden="true" />
              </button>

              <div
                id="resources-menu"
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl shadow-lg bg-brand-cream ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <ul className="py-2" role="menu" aria-orientation="vertical">
                  <li role="none"><Link href="/privacy-policy" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-brand-dark/5 hover:text-brand-dark" role="menuitem">Privacy Policy</Link></li>
                  <li role="none"><Link href="/cookie-policy" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-brand-dark/5 hover:text-brand-dark" role="menuitem">Cookie Policy</Link></li>
                  <li role="none"><Link href="/data-protection" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-brand-dark/5 hover:text-brand-dark" role="menuitem">Data Protection</Link></li>
                  <li role="none"><Link href="/complaints-policy" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-brand-dark/5 hover:text-brand-dark" role="menuitem">Complaints Policy</Link></li>
                </ul>
              </div>
            </div>

            <Link href="/contact" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Contact Us</Link>
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="px-6 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full hover:bg-brand-yellow/90 transition-colors text-sm flex items-center gap-2"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded p-1"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-brand-cream px-4 pb-6 py-2 overflow-y-auto w-full absolute top-full left-0 shadow-lg border-t border-brand-dark/5">
          <nav aria-label="Mobile navigation">
            <div className="space-y-1 pt-2">
              <Link onClick={() => setIsOpen(false)} href="/#services" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Services</Link>
              <Link onClick={() => setIsOpen(false)} href="/about" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">About Us</Link>
              <Link onClick={() => setIsOpen(false)} href="/privacy-policy" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Privacy Policy</Link>
              <Link onClick={() => setIsOpen(false)} href="/cookie-policy" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Cookie Policy</Link>
              <Link onClick={() => setIsOpen(false)} href="/data-protection" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Data Protection</Link>
              <Link onClick={() => setIsOpen(false)} href="/complaints-policy" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Complaints Policy</Link>
              <Link onClick={() => setIsOpen(false)} href="/contact" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Contact Us</Link>
              <button
                onClick={() => { setIsOpen(false); setIsApplyModalOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 py-4 text-base font-bold text-brand-dark bg-brand-yellow rounded-xl mt-6 w-full"
              >
                Apply Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </nav>
        </div>
      )}

      <ApplyModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
    </header>
  );
}
