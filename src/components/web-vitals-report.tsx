'use client';

import { useEffect } from 'react';
import { webVitals } from '@/lib/web-vitals';

export default function WebVitalsReport() {
  useEffect(() => {
    webVitals();
  }, []);

  return null;
}