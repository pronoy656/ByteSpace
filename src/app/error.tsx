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
    <BlueGridBackground className="fixed inset-0 z-40 w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Big 500 / Error Indicator with Gradient */}
      <h1
        className="font-extrabold text-[160px] sm:text-[220px] md:text-[280px] lg:text-[340px] leading-none select-none tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#C9F822] to-[#88C63E] mb-2 drop-shadow-sm"
      >
        500
      </h1>

      {/* Main Heading */}
      <h2 className="text-white text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-bold leading-[1.15] max-w-3xl tracking-tight mb-4 sm:mb-5">
        Something went wrong!
      </h2>

      {/* Subtitle */}
      <p className="text-white/80 text-[14px] sm:text-[15px] md:text-[16px] max-w-xl font-normal mb-8 sm:mb-9">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="bg-white text-black font-semibold text-[14px] sm:text-[15px] px-7 py-3 rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-[#D4FB20] text-black font-semibold text-[14px] sm:text-[15px] px-7 py-3 rounded-full hover:bg-[#c2e61c] hover:scale-105 active:scale-95 transition-all shadow-md inline-flex items-center justify-center cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
    </BlueGridBackground>
  );
}
