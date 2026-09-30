import React from 'react';
import Image from 'next/image';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { Title } from '@/components/shared/Title';
import { Subtitle } from '@/components/shared/Subtitle';
import { Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <BlueGridBackground className="h-screen flex flex-col justify-between shrink-0 overflow-hidden relative">
      {/* ================= 3D Floating Assets ================= */}

      {/* Top Level Assets: Hero asset 4 (Left) & Hero asset 1 (Right) */}
      {/* Hero asset 4: Left edge attached flush with section boundary */}
      <div className="absolute top-[16%] sm:top-[17%] lg:top-[18%] -left-3 sm:-left-2 lg:left-0 w-[170px] sm:w-[220px] lg:w-[260px] z-10 pointer-events-none select-none">
        <Image
          src="/Hero asset 4.png"
          alt="Lime Spiral 3D"
          width={300}
          height={450}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Hero asset 1: Right edge attached, vertically aligned with title's 2nd line, size smaller */}
      <div className="absolute top-[15%] sm:top-[16%] lg:top-[17%] -right-4 sm:-right-2 lg:right-0 w-[120px] sm:w-[155px] lg:w-[190px] z-10 pointer-events-none select-none">
        <Image
          src="/Hero asset 1.png"
          alt="Lime Cylinder 3D"
          width={240}
          height={420}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Middle Level Assets: Hero asset 2 (Right) & Hero asset 6 (Left) */}
      {/* Hero asset 6: Left side, slightly inward, vertically aligned with asset 2 */}
      <div className="absolute top-[48%] sm:top-[50%] left-6 sm:left-12 lg:left-24 w-[75px] sm:w-[95px] lg:w-[115px] z-10 pointer-events-none select-none">
        <Image
          src="/Hero asset 6.png"
          alt="White Squiggly 3D"
          width={150}
          height={150}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Hero asset 2: Right side pyramid cone, vertically aligned with asset 6 */}
      <div className="absolute top-[46%] sm:top-[48%] right-8 sm:right-16 lg:right-24 w-[85px] sm:w-[105px] lg:w-[125px] z-10 pointer-events-none select-none">
        <Image
          src="/Hero asset 2.png"
          alt="White Pyramid Cone 3D"
          width={160}
          height={160}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom Level Assets: Hero asset 5 (Donut Left) & Hero asset 3 (Spring Right) */}
      {/* Hero asset 5: Bottom Left donut, positioned on top of Hero asset 7 arch (z-25) */}
      <div className="absolute bottom-[2%] sm:bottom-[3%] lg:bottom-[4%] left-10 sm:left-20 lg:left-32 w-[190px] sm:w-[260px] lg:w-[320px] z-25 pointer-events-none select-none">
        <Image
          src="/Hero asset 5.png"
          alt="White Donut Ring 3D"
          width={340}
          height={340}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Hero asset 3: Bottom Right white spring, lifted slightly up from bottom */}
      <div className="absolute bottom-[6%] sm:bottom-[10%] right-6 sm:right-14 lg:right-24 w-[120px] sm:w-[170px] lg:w-[210px] z-10 pointer-events-none select-none">
        <Image
          src="/Hero asset 3.png"
          alt="White Spring Coil 3D"
          width={240}
          height={280}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ================= Hero Content Header ================= */}
      <div className="relative z-20 flex flex-col items-center pt-28 sm:pt-32 text-center max-w-4xl mx-auto px-4 shrink-0">
        <Title as="h1" className="text-white text-[38px] sm:text-[50px] lg:text-[62px] xl:text-[66px] font-bold leading-[1.08] tracking-tight">
          Get Access to Hundreds<br />Courses Available
        </Title>
        <Subtitle className="text-white/80 mt-4 sm:mt-5 text-[15px] sm:text-[17px] font-normal leading-relaxed md:whitespace-nowrap">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </Subtitle>

        {/* Search Bar */}
        <div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-4 w-full max-w-[560px] sm:max-w-[620px]">
          <div className="flex flex-1 items-center bg-white rounded-full px-5 sm:px-6 shadow-2xl h-[52px] sm:h-[58px]">
            <Search className="w-5 h-5 text-gray-400 shrink-0 mr-3" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-[14px] sm:text-[15px]"
            />
          </div>
          <button className="bg-[#D4FB20] text-black font-semibold rounded-full px-7 sm:px-9 h-[52px] sm:h-[58px] text-[14px] sm:text-[15px] hover:bg-[#c2e61c] hover:scale-105 active:scale-95 transition-all shadow-xl shrink-0 cursor-pointer">
            Search
          </button>
        </div>
      </div>

      {/* ================= Center Hero Visual (Boy + Hero Asset 7 Arc + Badges) ================= */}
      <div className="relative z-20 w-full flex justify-center items-end mt-auto pointer-events-none select-none">
        <div className="relative w-[340px] sm:w-[480px] md:w-[600px] lg:w-[680px] xl:w-[740px] flex justify-center items-end">

          {/* Hero Asset 7: Huge Neon Lime Half-Ring behind the boy (lifted up to boy's hair level with increased width) */}
          <div className="absolute top-[8%] sm:top-[6%] md:top-[4%] w-[165%] sm:w-[175%] md:w-[185%] max-w-none left-1/2 -translate-x-1/2 z-0 pointer-events-none">
            <Image
              src="/Hero asset 7.png"
              alt="Lime Arch Ring"
              width={1400}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Boy with Laptop & Headphones: 29a52a24e51266edcd7d57d73392ee5fc4833220.png */}
          <div className="relative z-10 w-full flex justify-center items-end">
            <Image
              src="/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
              alt="Student with laptop"
              width={720}
              height={760}
              className="w-full h-auto object-contain max-h-[46vh] sm:max-h-[52vh] lg:max-h-[58vh]"
              priority
            />
          </div>

          {/* Floating Card 1 (Top Left): UI/UX Design */}
          <div className="absolute top-[18%] -left-8 sm:-left-16 lg:-left-20 bg-white/95 backdrop-blur-md rounded-[18px] sm:rounded-[20px] p-3 sm:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-white/60 z-20 pointer-events-auto">
            <h4 className="text-[13px] sm:text-[15px] font-bold text-[#0F172A] leading-tight">UI/UX Design</h4>
            <p className="text-[11px] sm:text-[12px] text-[#64748B] mt-0.5">200 Courses &bull; 1000+ Students</p>
          </div>

          {/* Floating Card 2 (Top Right): Learning Progress 55% */}
          <div className="absolute top-[22%] -right-8 sm:-right-16 lg:-right-20 bg-white/95 backdrop-blur-md rounded-[18px] sm:rounded-[20px] p-3.5 sm:p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-white/60 z-20 pointer-events-auto w-[150px] sm:w-[190px]">
            <p className="text-[11px] sm:text-[12px] font-medium text-[#64748B] mb-1">Learning Progress</p>
            <p className="text-[24px] sm:text-[28px] font-extrabold text-[#0F172A] leading-none mb-2">55%</p>
            <div className="w-full h-1.5 sm:h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
              <div className="h-full bg-[#D4FB20] rounded-full" style={{ width: '55%' }} />
            </div>
          </div>

          {/* Floating Card 3 (Bottom Left): Happy Students with Avatars */}
          <div className="absolute bottom-[8%] -left-12 sm:-left-24 lg:-left-28 bg-white/95 backdrop-blur-md rounded-[18px] sm:rounded-[20px] p-3 sm:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-white/60 z-20 pointer-events-auto">
            <h5 className="text-[12px] sm:text-[14px] font-bold text-[#0F172A]">Happy Students</h5>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-[#64748B] mt-0.5 mb-2.5">
              <span className="font-semibold text-[#0F172A]">4.5</span>
              <span>(240)</span>
              <span className="text-[#EAB308] text-[13px] leading-none">&#9733;</span>
            </div>
            <div className="flex items-center -space-x-2">
              <Image src="https://i.pravatar.cc/100?img=33" alt="student" width={28} height={28} className="rounded-full ring-2 ring-white object-cover" />
              <Image src="https://i.pravatar.cc/100?img=12" alt="student" width={28} height={28} className="rounded-full ring-2 ring-white object-cover" />
              <Image src="https://i.pravatar.cc/100?img=60" alt="student" width={28} height={28} className="rounded-full ring-2 ring-white object-cover" />
              <Image src="https://i.pravatar.cc/100?img=47" alt="student" width={28} height={28} className="rounded-full ring-2 ring-white object-cover" />
              <Image src="https://i.pravatar.cc/100?img=11" alt="student" width={28} height={28} className="rounded-full ring-2 ring-white object-cover" />
              <div className="w-7 h-7 rounded-full bg-[#D4FB20] ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-black">
                2K+
              </div>
            </div>
          </div>

        </div>
      </div>
    </BlueGridBackground>
  );
}
