"use client";

import { useEffect } from 'react';
import { ensureGuidesInDB } from '@/lib/db';

export function DbSeeder() {
  useEffect(() => {
    // Seed the database on first load
    ensureGuidesInDB().catch(console.error);
  }, []);

  return null;
}
