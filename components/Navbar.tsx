"use client";

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-[#FDF8E7] w-full border-b border-transparent relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex -space-x-2">
                 <div className="w-5 h-5 bg-brand-yellow transform rotate-45 -skew-x-12"></div>
                 <div className="w-5 h-5 bg-brand-dark transform rotate-45 -skew-x-12 opacity-80"></div>
              </div>
              <span className="font-heading font-bold text-xl tracking-tighter ml-2 text-[#103623]">
                SWIFT<span className="font-light">BANQ</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-base font-medium text-gray-700 hover:text-gray-900 transition-colors focus:outline-none py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/services/sme-financing" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-dark" role="menuitem">SME Financing</Link>
                  <Link href="/services/asset-financing" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-dark" role="menuitem">Asset Financing</Link>
                  <Link href="/services/digital-lending" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-dark" role="menuitem">Digital Lending</Link>
                  <Link href="/services/treasury-services" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-dark" role="menuitem">Treasury Services</Link>
                </div>
              </div>
            </div>
            
            <Link href="/about" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">About Us</Link>
            <Link href="/why-us" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Why Us</Link>
            <Link href="/contact" className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors">Contact Us</Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/contact" className="px-6 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full hover:bg-brand-yellow-hover transition-colors text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FDF8E7] px-4 pb-6 py-2 overflow-y-auto w-full absolute top-full left-0 shadow-lg border-t border-brand-dark/5">
          <div className="space-y-2 pt-2">
            <div className="mb-2">
              <div className="px-4 py-2 text-sm font-bold text-gray-400 uppercase tracking-wider">Services</div>
              <Link onClick={() => setIsOpen(false)} href="/services/sme-financing" className="block px-6 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">SME Financing</Link>
              <Link onClick={() => setIsOpen(false)} href="/services/asset-financing" className="block px-6 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Asset Financing</Link>
              <Link onClick={() => setIsOpen(false)} href="/services/digital-lending" className="block px-6 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Digital Lending</Link>
              <Link onClick={() => setIsOpen(false)} href="/services/treasury-services" className="block px-6 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Treasury Services</Link>
            </div>
            
            <div className="px-4 py-2 text-sm font-bold text-gray-400 uppercase tracking-wider mt-4">Company</div>
            <Link onClick={() => setIsOpen(false)} href="/about" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">About Us</Link>
            <Link onClick={() => setIsOpen(false)} href="/why-us" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Why Us</Link>
            <Link onClick={() => setIsOpen(false)} href="/contact" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Contact Us</Link>
            <Link onClick={() => setIsOpen(false)} href="/contact" className="block px-4 py-4 text-base font-bold text-brand-dark bg-brand-yellow rounded-xl mt-6 text-center">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
