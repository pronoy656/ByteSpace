'use client';
import React, { useState, useEffect } from 'react';
import { Title } from '@/components/shared/Title';
import { Subtitle } from '@/components/shared/Subtitle';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error('Failed to load testimonials', err));
  }, []);

  return (
    <section className="relative w-full pt-12 pb-12 sm:pt-[74px] sm:pb-[57px] overflow-hidden bg-white font-sans">

      {/* Right lime gradient — richer visibility, extending gently down behind the 3rd card */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '40%',
          height: '100%',
          background: 'radial-gradient(ellipse at top right, #CBFC01 0%, rgba(203,252,1,0.58) 28%, rgba(203,252,1,0.24) 58%, transparent 78%)',
          opacity: 0.54,
          filter: 'blur(70px)',
        }}
      />

      {/* Top lime blend — positioned near subtitle start, spreading its soft canopy leftwards towards the title */}
      <div
        className="absolute -top-[8%] left-[34%] pointer-events-none"
        style={{
          width: '500px',
          height: '350px',
          background: 'radial-gradient(ellipse at 55% 45%, #CBFC01 0%, rgba(203,252,1,0.72) 30%, rgba(203,252,1,0.25) 60%, transparent 80%)',
          opacity: 0.68,
          filter: 'blur(60px)',
        }}
      />

      {/* Bottom left blue gradient — blended toward center */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: '60%',
          height: '75%',
          background: 'radial-gradient(ellipse at bottom left, #003BE2 0%, rgba(0,59,226,0.7) 24%, rgba(0,59,226,0.3) 50%, transparent 70%)',
          opacity: 0.55,
          filter: 'blur(70px)',
          transform: 'translate(-5%, 15%)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-8 md:px-12 w-full relative z-10">

        {/* Top Row: Title + Description */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-12 mb-8 sm:mb-14 items-start">
          <div className="flex-1">
            <ScrollReveal variant="fade-up" delayMs={0}>
              <Title as="h2" className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.2] text-[#0F172A]">
                Discover What Our<br className="hidden sm:inline" /> Community Is Saying
              </Title>
            </ScrollReveal>
          </div>
          <div className="flex-1 pt-1 md:pt-2">
            <ScrollReveal variant="fade-up" delayMs={120}>
              <Subtitle className="text-[#64748B] text-sm sm:text-base leading-relaxed sm:leading-[1.8] font-normal">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </Subtitle>
            </ScrollReveal>
          </div>
        </div>

        {/* Testimonial Cards — responsive gap with Staggered Reveal */}
        <ScrollReveal variant="fade-up" delayMs={180}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[41px]">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className="bg-white rounded-[24px] p-6 pb-8 sm:p-[24px] sm:pb-[44px] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-start animate-fade-in-up"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                {/* Avatar */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full object-cover mb-4 sm:mb-[24px]"
                />

                {/* Name */}
                <p
                  className="font-bold text-base sm:text-[18px] text-[#0F172A] mb-0.5 leading-snug"
                  style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                >
                  {t.name}
                </p>

                {/* Role / Designation */}
                <p
                  className="text-[#003BE2] text-xs sm:text-[14px] font-medium mb-3 sm:mb-[24px] leading-tight"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  {t.role}
                </p>

                {/* Quote / Description */}
                <p
                  className="text-[#4F4F4F] text-xs sm:text-sm md:text-[18px] font-normal leading-relaxed sm:leading-[160%]"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
