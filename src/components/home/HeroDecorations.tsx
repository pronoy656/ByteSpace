import React from 'react';
import Image from 'next/image';

export function HeroDecorations() {
  return (
    <>
      {/* Lime Spiral 3D (Spin Ring) */}
      <div 
        className="absolute top-[18%] -left-3 w-12 opacity-35 sm:opacity-100 sm:top-[17%] lg:top-[18%] sm:-left-2 lg:left-0 sm:w-[220px] lg:w-[260px] z-10 pointer-events-none select-none hero-fade-in-up"
        style={{ animationDelay: '150ms' }}
      >
        <Image
          src="/Hero asset 4.png"
          alt="Lime Spiral 3D"
          width={300}
          height={450}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Lime Cylinder 3D - Hidden on mobile, 100% exact on desktop */}
      <div 
        className="hidden sm:block absolute sm:top-[16%] lg:top-[17%] sm:-right-2 lg:right-0 sm:w-[155px] lg:w-[190px] z-10 pointer-events-none select-none hero-fade-in-up"
        style={{ animationDelay: '200ms' }}
      >
        <Image
          src="/Hero asset 1.png"
          alt="Lime Cylinder 3D"
          width={240}
          height={420}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* White Squiggly 3D - Hidden on mobile, 100% exact on desktop */}
      <div 
        className="hidden sm:block absolute sm:top-[46%] lg:top-[44%] sm:left-28 lg:left-44 sm:w-[130px] lg:w-[155px] z-10 pointer-events-none select-none hero-fade-in-up"
        style={{ animationDelay: '300ms' }}
      >
        <Image
          src="/Hero asset 6.png"
          alt="White Squiggly 3D"
          width={200}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* White Pyramid Cone 3D - Hidden on mobile per user request, 100% exact on desktop */}
      <div 
        className="hidden sm:block absolute sm:top-[42%] lg:top-[40%] sm:right-24 lg:right-36 sm:w-[130px] lg:w-[155px] z-10 pointer-events-none select-none hero-fade-in-up"
        style={{ animationDelay: '350ms' }}
      >
        <Image
          src="/Hero asset 2.png"
          alt="White Pyramid Cone 3D"
          width={200}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* White Donut Ring 3D - Hidden on mobile, 100% exact on desktop */}
      <div 
        className="hidden sm:block absolute sm:bottom-[3%] lg:bottom-[4%] sm:left-28 lg:left-44 sm:w-[260px] lg:w-[320px] z-25 pointer-events-none select-none hero-fade-in-up"
        style={{ animationDelay: '450ms' }}
      >
        <Image
          src="/Hero asset 5.png"
          alt="White Donut Ring 3D"
          width={340}
          height={340}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* White Spring Coil 3D - Hidden on mobile, 100% exact on desktop */}
      <div 
        className="hidden sm:block absolute sm:bottom-[7%] lg:bottom-[8%] sm:right-32 lg:right-48 sm:w-[210px] lg:w-[260px] z-20 pointer-events-none select-none hero-fade-in-up"
        style={{ animationDelay: '400ms' }}
      >
        <Image
          src="/Hero asset 3.png"
          alt="White Spring Coil 3D"
          width={320}
          height={370}
          className="w-full h-auto object-contain"
        />
      </div>
    </>
  );
}
