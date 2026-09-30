'use client';

import React from 'react';
import Link from 'next/link';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <BlueGridBackground className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden select-none">
      {/* Container holding overlapping 500 and content */}
      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center">
        
        {/* Giant 500 Number Layer with vertical fade */}
        <div
          className="text-center font-semibold pointer-events-none select-none text-[180px] sm:text-[280px] md:text-[380px] lg:text-[480px] leading-[100%] tracking-[-4.8px]"
          style={{
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            background:
              'linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0.00) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          500
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center mt-[15px] sm:-mt-[20px] md:-mt-[65px] lg:-mt-[105px]">
          {/* Main Heading: Pure White */}
          <h1
            className="text-[#FFFFFF] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-semibold leading-[1.1] tracking-tight text-center max-w-4xl mb-[32px]"
            style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
          >
            Something went wrong!
          </h1>

          {/* Subtitle: Satoshi font */}
          <p
            className="text-white/85 text-[15px] sm:text-[17px] md:text-[18px] font-normal mb-[32px] text-center max-w-2xl"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            An unexpected error occurred. Please try again or return to the homepage.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => reset()}
              className="bg-white text-[#0F172A] font-semibold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-xl inline-flex items-center justify-center cursor-pointer"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Try Again
            </button>
            <Link
              href="/"
              className="bg-[#D4FB20] text-[#0F172A] font-semibold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-full hover:bg-[#c2e61c] hover:scale-105 active:scale-95 transition-all shadow-xl inline-flex items-center justify-center cursor-pointer"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </BlueGridBackground>
  );
}
