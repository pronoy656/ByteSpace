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

    // Fast-path: If already in viewport on initial load, show immediately
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.05,
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
