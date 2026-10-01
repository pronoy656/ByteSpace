'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade-up' | 'scale';
  delayMs?: number;
}

export function ScrollReveal({
  children,
  className = '',
  variant = 'fade-up',
  delayMs = 0,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const hiddenClass = variant === 'scale' ? 'reveal-hidden-scale' : 'reveal-hidden';
  const visibleClass = variant === 'scale' ? 'reveal-visible-scale' : 'reveal-visible';

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
      className={`${hiddenClass} ${isVisible ? visibleClass : ''} ${className}`}
    >
      {children}
    </div>
  );
}
