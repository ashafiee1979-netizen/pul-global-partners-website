'use client';

import { useEffect, useState } from 'react';

export function Counter({ end, start = 1, suffix = '', fixed = false, label }: { end: number; start?: number; suffix?: string; fixed?: boolean; label: string }) {
  const [value, setValue] = useState(end);
  useEffect(() => {
    if (fixed || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const duration = 4200;
    const began = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - began) / duration, 1);
      setValue(Math.round(start + (end - start) * progress));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, fixed, start]);

  const formatted = fixed ? String(value) : value.toLocaleString('en-US');
  return <strong aria-label={label} aria-live="off">{formatted}{suffix}</strong>;
}
