import React from 'react';
import Image from 'next/image';
import { BlueGridBackground } from '@/components/shared/BlueGridBackground';
import { Title } from '@/components/shared/Title';
import { Subtitle } from '@/components/shared/Subtitle';
import { Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <BlueGridBackground className="h-screen flex flex-col justify-between shrink-0 overflow-hidden relative">
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

      <div className="absolute top-[44%] sm:top-[46%] left-14 sm:left-28 lg:left-44 w-[105px] sm:w-[130px] lg:w-[155px] z-10 pointer-events-none select-none">
        <Image
          src="/Hero asset 6.png"
          alt="White Squiggly 3D"
          width={200}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="absolute top-[40%] sm:top-[42%] right-12 sm:right-24 lg:right-36 w-[105px] sm:w-[130px] lg:w-[155px] z-10 pointer-events-none select-none">
        <Image
          src="/Hero asset 2.png"
          alt="White Pyramid Cone 3D"
          width={200}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="absolute bottom-[2%] sm:bottom-[3%] lg:bottom-[4%] left-14 sm:left-28 lg:left-44 w-[190px] sm:w-[260px] lg:w-[320px] z-25 pointer-events-none select-none">
        <Image
          src="/Hero asset 5.png"
          alt="White Donut Ring 3D"
          width={340}
          height={340}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="absolute bottom-[4%] sm:bottom-[7%] lg:bottom-[8%] right-16 sm:right-32 lg:right-48 w-[160px] sm:w-[210px] lg:w-[260px] z-20 pointer-events-none select-none">
        <Image
          src="/Hero asset 3.png"
          alt="White Spring Coil 3D"
          width={320}
          height={370}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center pt-28 sm:pt-32 text-center max-w-4xl mx-auto px-4 shrink-0">
        <Title as="h1" className="text-white text-[38px] sm:text-[50px] lg:text-[62px] xl:text-[66px] font-bold leading-[1.08] tracking-tight">
          Get Access to Hundreds<br />Courses Available
        </Title>
        <Subtitle className="text-white/80 mt-4 sm:mt-5 text-[15px] sm:text-[17px] font-normal leading-relaxed md:whitespace-nowrap">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </Subtitle>

        {/* Search Bar */}
        <div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-4 w-full max-w-[560px] sm:max-w-[620px]">
          <div className="flex flex-1 items-center bg-white rounded-full px-5 sm:px-6 h-[52px] sm:h-[58px]">
            <Search className="w-5 h-5 text-gray-400 shrink-0 mr-3" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-[14px] sm:text-[15px]"
            />
          </div>
          <button className="bg-[#D4FB20] text-black font-semibold rounded-full px-7 sm:px-9 h-[52px] sm:h-[58px] text-[14px] sm:text-[15px] hover:bg-[#c2e61c] cursor-pointer">
            Search
          </button>
        </div>
      </div>

      <div className="relative z-20 w-full flex justify-center items-end mt-auto pointer-events-none select-none">
        <div className="relative w-[340px] sm:w-[480px] md:w-[600px] lg:w-[680px] xl:w-[740px] flex justify-center items-end">
          <div className="absolute top-[15%] sm:top-[13%] md:top-[11%] w-[165%] sm:w-[175%] md:w-[185%] max-w-none left-1/2 -translate-x-1/2 z-0 pointer-events-none">
            <Image
              src="/Hero asset 7.png"
              alt="Lime Arch Ring"
              width={1400}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

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

          <div className="absolute top-[22%] left-8 sm:left-4 lg:left-0 bg-white rounded-[16px] p-3 sm:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-[#CED0D3]/40 z-20 pointer-events-auto">
            <h4
              className="text-[13px] sm:text-[15px] font-[600] text-[#242528] leading-tight"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              UI/UX Design
            </h4>
            <p
              className="text-[11px] sm:text-[12px] text-[#64748B] mt-0.5"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          <div className="absolute top-[22%] -right-8 sm:-right-16 lg:-right-22 bg-white rounded-[16px] p-4 sm:p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-[#CED0D3]/40 z-20 pointer-events-auto w-[195px] sm:w-[235px]">
            <p
              className="text-[14px] font-[500] text-[#64748B] mb-1"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Learning Progress
            </p>
            <p
              className="text-[48px] font-[600] text-[#242528] leading-[100%] mb-3"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              55%
            </p>
            <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
              <div className="h-full bg-[#D4FB20] rounded-full" style={{ width: '55%' }} />
            </div>
          </div>

          <div className="absolute bottom-[16%] sm:bottom-[18%] -left-4 sm:-left-12 lg:-left-14 bg-white rounded-[16px] p-[16px] shadow-[0_14px_35px_rgba(0,0,0,0.15)] border border-[#CED0D3]/40 z-20 pointer-events-auto min-w-[210px] sm:min-w-[240px]">
            <h5
              className="text-[16px] font-[500] text-[#242528] leading-tight"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Happy Students
            </h5>
            <div
              className="flex items-center gap-1.5 text-[12px] font-[400] text-[#64748B] mt-1 mb-3"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              <span className="font-[600] text-[#242528]">4.5</span>
              <span>(240)</span>
              <span className="text-[#003BE2] text-[13px] leading-none">&#9733;</span>
            </div>
            <div className="flex items-center -space-x-2">
              <Image src="https://i.pravatar.cc/100?img=33" alt="student" width={32} height={32} className="rounded-full ring-2 ring-white object-cover" />
              <Image src="https://i.pravatar.cc/100?img=12" alt="student" width={32} height={32} className="rounded-full ring-2 ring-white object-cover" />
              <Image src="https://i.pravatar.cc/100?img=60" alt="student" width={32} height={32} className="rounded-full ring-2 ring-white object-cover" />
              <Image src="https://i.pravatar.cc/100?img=47" alt="student" width={32} height={32} className="rounded-full ring-2 ring-white object-cover" />
              <Image src="https://i.pravatar.cc/100?img=11" alt="student" width={32} height={32} className="rounded-full ring-2 ring-white object-cover" />
              <div className="w-8 h-8 rounded-full bg-[#D4FB20] ring-2 ring-white flex items-center justify-center text-[11px] font-bold text-black">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlueGridBackground>
  );
}