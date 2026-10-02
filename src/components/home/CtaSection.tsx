import React from 'react';
import { Title } from '@/components/shared/Title';
import { Subtitle } from '@/components/shared/Subtitle';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/shared/Button';

export function CtaSection() {
  return (
    <BlueGridBackground className="w-full pt-[85px] pb-[84px] text-center flex flex-col items-center justify-center font-sans relative overflow-hidden">
      
      {/* 3D Decorative Assets - Fade Up */}
      <ScrollReveal variant="fade-up" delayMs={100} className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* RIGHT SIDE ASSETS */}
        <img src="/Cta asset 1.png" alt="" className="absolute top-[25%] right-0 w-[200px] z-10 object-contain pointer-events-none" />
        <img src="/Cta asset 3.png" alt="" className="absolute top-[10%] right-[15%] w-[140px] z-10 object-contain pointer-events-none" />
        <img src="/Cta asset 2.png" alt="" className="absolute bottom-0 right-[5%] w-[320px] z-10 object-contain pointer-events-none" />

        {/* LEFT SIDE ASSETS */}
        <img src="/Cta asset 4.png" alt="" className="absolute top-0 left-0 w-[280px] z-10 object-contain pointer-events-none" />
        <img src="/Cta asset 7.png" alt="" className="absolute top-[15%] left-[8%] w-[180px] z-10 object-contain pointer-events-none" />
        <img src="/Cta asset 5.png" alt="" className="absolute top-[45%] left-0 w-[140px] z-10 object-contain pointer-events-none" />
        <img src="/Cta asset 6.png" alt="" className="absolute bottom-0 left-[2%] w-[360px] z-10 object-contain pointer-events-none" />
      </ScrollReveal>

      {/* Center Content - Staggered Fade Up */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-4 flex flex-col items-center">
        <ScrollReveal variant="fade-up" delayMs={0}>
          <Title as="h2" className="text-white text-[52px] font-bold leading-[1.2] mb-6">
            Unlock Your Potential as a<br />Creator with ByteSpace
          </Title>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delayMs={140}>
          <Subtitle className="text-white/80 text-[18px] font-normal leading-[1.8] mb-12 max-w-[1100px] mx-auto">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a<br />part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your<br />expertise by publishing your finest course on the ByteSpace Course Library.
          </Subtitle>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delayMs={240}>
          <Button
            variant="lime"
            size="lg"
            className="px-12 h-[60px] text-[18px] shadow-2xl"
          >
            Join as Creator
          </Button>
        </ScrollReveal>
      </div>
    </BlueGridBackground>
  );
}
