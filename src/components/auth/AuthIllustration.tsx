'use client';

import React from 'react';
import Image from 'next/image';

export function AuthIllustration() {
  return (
    <div className="relative w-full max-w-[560px] h-[525px] select-none scale-[1.08] sm:scale-[1.12] origin-top-left">
      {/* 3D Torus / Donut (Auth asset 4) - Top Left: slightly bigger, no shadow */}
      <div className="absolute top-[12px] left-[52px] sm:left-[8px] w-[134px] h-[134px] z-30 pointer-events-none">
        <Image
          src="/Auth asset 4.png"
          alt="Decorative Ring"
          width={134}
          height={134}
          className="object-contain"
          priority
        />
      </div>

      {/* Course Card 2 (Auth asset 2: Build Digital Asset) - Back / Left Card: shifted more left, no shadow */}
      <div className="absolute top-[80px] -left-[16px] sm:-left-[24px] w-[290px] sm:w-[310px] rounded-[24px] overflow-hidden z-10 ">
        <Image
          src="/Auth asset 2.png"
          alt="Build Digital Asset Course"
          width={310}
          height={330}
          className="w-full h-auto object-contain rounded-[24px]"
          priority
        />
      </div>

      <div className="absolute -top-[20px] left-[78px] w-[310px] sm:w-[335px] rounded-[24px] overflow-hidden z-20 ">
        <Image
          src="/Auth asset 1.png"
          alt="the Power of Big Data Course"
          width={335}
          height={355}
          className="w-full h-auto object-contain rounded-[24px]"
          priority
        />
      </div>

      <div className="absolute bottom-[28px] -left-[35px] sm:-left-[48px] w-[148px] h-[148px] z-30 pointer-events-none">
        <Image
          src="/Auth asset 5.png"
          alt="Decorative Tetrahedron"
          width={148}
          height={148}
          className="object-contain"
          priority
        />
      </div>

      {/* Happy Students Badge (Auth asset 3) - Bottom Center/Right: higher up */}
      <div className="absolute bottom-[60px] left-[175px] sm:left-[190px] w-[220px] sm:w-[235px] rounded-[22px] overflow-hidden z-25">
        <Image
          src="/Auth asset 3.png"
          alt="Happy Students Rating"
          width={235}
          height={115}
          className="w-full h-auto object-contain rounded-[22px]"
          priority
        />
      </div>

      {/* White Spring / Coil (Auth asset 6) - Bottom Right: higher and more to the left */}
      <div className="absolute bottom-[120px] right-[75px] sm:right-[110px] w-[142px] h-[142px] z-30 pointer-events-none">
        <Image
          src="/Auth asset 6.png"
          alt="Decorative Spring"
          width={142}
          height={142}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
