'use client';

import { useState } from 'react';
import { ApplyModal } from '@/components/ApplyModal';

interface ApplyNowButtonProps {
  variant?: 'yellow' | 'dark';
  className?: string;
  children?: React.ReactNode;
}

export function ApplyNowButton({ variant = 'yellow', className, children }: ApplyNowButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultClass =
    variant === 'dark'
      ? 'inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-dark/80 transition-colors text-base'
      : 'px-10 py-3 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow-hover transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg';

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className ?? defaultClass}>
        {children ?? (
          <>
            Apply Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>
      <ApplyModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
