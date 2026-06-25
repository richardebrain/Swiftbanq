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

  const defaultClass = 'px-10 py-4 rounded-full bg-black text-white font-bold hover:bg-black/90 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg group';

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className ?? defaultClass}>
        {children ?? (
          <>
            Apply Now
            <span className="bg-white text-black w-6 h-6 flex items-center justify-center rounded-full transition-colors text-xs border border-transparent group-hover:bg-white/80">→</span>
          </>
        )}
      </button>
      <ApplyModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
