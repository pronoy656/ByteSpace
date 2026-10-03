import React from 'react';
import Image from 'next/image';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { Title } from '@/components/shared/Title';
import { Subtitle } from '@/components/shared/Subtitle';
import { Button } from '@/components/shared/Button';
import { StudentAvatars } from '@/components/shared/StudentAvatars';
import { Search } from 'lucide-react';
import { HeroDecorations } from '@/components/home/HeroDecorations';

export default function HeroSection() {
  return (
    <BlueGridBackground className="min-h-svh sm:min-h-0 sm:h-screen w-full max-w-full flex flex-col justify-between shrink-0 overflow-hidden relative">
      {/* 3D Decorative Assets - 100% exact desktop positions and dimensions */}
      <HeroDecorations />

      {/* Hero Header & Search Bar - 100% exact desktop values */}
      <div 
        className="relative z-20 flex flex-col items-center justify-center sm:justify-start flex-1 sm:flex-none pt-24 pb-6 sm:pt-32 sm:pb-0 text-center max-w-4xl mx-auto px-4 w-full shrink-0 hero-fade-in-up"
        style={{ animationDelay: '80ms' }}
      >
        <Title as="h1" className="text-white text-[26px] sm:text-[50px] lg:text-[62px] xl:text-[66px] font-bold leading-[1.14] sm:leading-[1.08] tracking-tight">
          Get Access to Hundreds<br />Courses Available
        </Title>
        <Subtitle className="text-white/80 mt-4 sm:mt-5 text-sm sm:text-[17px] font-normal leading-relaxed md:whitespace-nowrap max-w-[320px] sm:max-w-none">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </Subtitle>

        {/* Search Bar - Identical radius to Courses page (rounded-xl) and wide alignment with Navbar */}
        <div className="mt-8 sm:mt-12 flex items-center gap-2 sm:gap-4 w-full sm:max-w-[620px]">
          <div className="flex flex-1 items-center bg-white rounded-xl sm:rounded-full px-3.5 sm:px-6 h-11 sm:h-[58px] shadow-lg focus-within:ring-2 focus-within:ring-[#D4FB20] transition-all min-w-0">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0 mr-2 sm:mr-3" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-xs sm:text-[15px]"
            />
          </div>
          <Button
            variant="lime"
            size="md"
            className="!rounded-xl sm:!rounded-full px-4 sm:px-9 h-11 sm:h-[58px] text-xs sm:text-base font-semibold shrink-0 cursor-pointer"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Main Student Illustration & Floating Cards - 100% exact desktop values */}
      <div 
        className="relative z-20 w-full flex justify-center items-end sm:mt-auto pointer-events-none select-none hero-fade-in-up"
        style={{ animationDelay: '220ms' }}
      >
        <div className="relative w-full max-w-[360px] sm:max-w-none sm:w-[480px] md:w-[600px] lg:w-[680px] xl:w-[740px] flex justify-center items-end">
          {/* Lime Arch Ring (Hero asset 7) - Anchored to bottom touching the next section */}
          <div className="absolute bottom-0 sm:bottom-auto sm:top-[13%] md:top-[11%] w-[160%] sm:w-[175%] md:w-[185%] max-w-none left-1/2 -translate-x-1/2 z-0 pointer-events-none">
            <Image
              src="/Hero asset 7.png"
              alt="Lime Arch Ring"
              width={1400}
              height={700}
              className="w-full h-auto object-contain block"
              priority
            />
          </div>

          {/* Student with laptop */}
          <div className="relative z-10 w-full flex justify-center items-end">
            <Image
              src="/boy-student.png"
              alt="Student with laptop"
              width={720}
              height={760}
              className="w-full h-auto object-contain block max-h-[48svh] sm:max-h-[52vh] lg:max-h-[58vh]"
              priority
            />
          </div>

          {/* Floating Card: UI/UX Design - Lowered on mobile, hover zoom removed */}
          <div 
            className="absolute top-[18%] sm:top-[22%] left-1 sm:left-4 lg:left-0 z-20 scale-[0.68] sm:scale-100 origin-top-left hero-fade-in-up"
            style={{ animationDelay: '380ms' }}
          >
            <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-[#CED0D3]/40 pointer-events-auto">
              <h4 className="text-sm sm:text-base font-semibold text-[#242528] leading-tight font-poppins whitespace-nowrap">
                UI/UX Design
              </h4>
              <p className="text-xs text-[#64748B] mt-0.5 whitespace-nowrap">
                200 Courses &bull; 1000+ Students
              </p>
            </div>
          </div>

          {/* Floating Card: Learning Progress - Hidden on mobile per user request, hover zoom removed */}
          <div 
            className="hidden sm:block absolute sm:top-[22%] sm:-right-16 lg:-right-22 z-20 hero-fade-in-up"
            style={{ animationDelay: '460ms' }}
          >
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-[#CED0D3]/40 pointer-events-auto w-[195px] sm:w-[235px]">
              <p className="text-xs sm:text-sm font-medium text-[#64748B] mb-1">
                Learning Progress
              </p>
              <p className="text-3xl sm:text-5xl font-semibold text-[#242528] leading-none mb-2.5 sm:mb-3 font-poppins">
                55%
              </p>
              <div className="w-full h-1.5 sm:h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
              </div>
            </div>
          </div>

          {/* Floating Card: Happy Students - Clean mobile placement, hover zoom removed */}
          <div 
            className="absolute bottom-[2%] sm:bottom-[18%] -left-1 sm:-left-12 lg:-left-14 z-20 scale-[0.62] sm:scale-100 origin-bottom-left hero-fade-in-up"
            style={{ animationDelay: '540ms' }}
          >
            <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-[0_14px_35px_rgba(0,0,0,0.15)] border border-[#CED0D3]/40 pointer-events-auto min-w-[200px] sm:min-w-[240px]">
              <h5 className="text-sm sm:text-base font-medium text-[#242528] leading-tight">
                Happy Students
              </h5>
              <div className="flex items-center gap-1.5 text-xs text-[#64748B] mt-1 mb-2.5 sm:mb-3">
                <span className="font-semibold text-[#242528]">4.5</span>
                <span>(240)</span>
                <span className="text-[#003BE2] text-xs sm:text-sm leading-none">&#9733;</span>
              </div>
              <div className="flex items-center">
                <StudentAvatars count={4} size={32} />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D4FB20] ring-2 ring-white flex items-center justify-center text-[10px] sm:text-xs font-bold text-black -ml-2 z-10">
                  2K+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlueGridBackground>
  );
}