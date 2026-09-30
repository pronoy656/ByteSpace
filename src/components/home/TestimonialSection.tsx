'use client';
import React, { useState, useEffect } from 'react';
import { Title } from '@/components/shared/Title';
import { Subtitle } from '@/components/shared/Subtitle';

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
    <section className="relative w-full pt-[74px] pb-[57px] overflow-hidden bg-white font-sans border-b border-[#E2E8F0]">

      {/* Right lime gradient — blended downward and toward center */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '55%',
          height: '90%',
          background: 'radial-gradient(ellipse at top right, #CBFC01 0%, #CBFC01 10%, rgba(203,252,1,0.4) 35%, transparent 70%)',
          opacity: 0.45,
          filter: 'blur(70px)',
          transform: 'translate(10%, -5%)',
        }}
      />

      {/* Middle lime blend — between title and subtitle columns */}
      <div
        className="absolute top-[0%] left-[25%] pointer-events-none"
        style={{
          width: '55%',
          height: '65%',
          background: 'radial-gradient(ellipse at top center, #CBFC01 0%, rgba(203,252,1,0.6) 25%, rgba(203,252,1,0.2) 55%, transparent 70%)',
          opacity: 0.65,
          filter: 'blur(70px)',
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

      <div className="container mx-auto px-12 w-full relative z-10">

        {/* Top Row: Title + Description */}
        <div className="flex flex-col md:flex-row gap-12 mb-14 items-start">
          <div className="flex-1">
            <Title as="h2" className="text-[42px] font-bold leading-[1.2] text-[#0F172A]">
              Discover What Our<br />Community Is Saying
            </Title>
          </div>
          <div className="flex-1 pt-2">
            <Subtitle className="text-[#64748B] text-[16px] leading-[1.8] font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </Subtitle>
          </div>
        </div>

        {/* Testimonial Cards — gap 41px */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '41px' }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white shadow-sm hover:shadow-md transition-shadow"
              style={{
                borderRadius: '24px',
                padding: '24px',
              }}
            >
              {/* Avatar */}
              <img
                src={t.avatar}
                alt={t.name}
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '24px' }}
              />

              {/* Name */}
              <p className="font-bold text-[16px] text-[#0F172A] mb-0.5">{t.name}</p>

              {/* Role */}
              <p className="text-[#003BE2] text-[14px] font-medium" style={{ marginBottom: '24px' }}>{t.role}</p>

              {/* Quote */}
              <p className="text-[#475569] text-[13px] leading-[1.8]">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
