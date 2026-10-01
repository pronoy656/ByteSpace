import React from 'react';
import { Title } from '@/components/shared/Title';
import { Subtitle } from '@/components/shared/Subtitle';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Star, BarChart } from 'lucide-react';

const STATS = [
  { value: '12K', label: 'Students', delay: 100 },
  { value: '70+', label: 'Courses', delay: 180 },
  { value: '16', label: 'Creators', delay: 260 },
];

const CREATOR_POINTS = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

const STUDENT_AVATARS = [
  'https://i.pravatar.cc/100?img=1',
  'https://i.pravatar.cc/100?img=2',
  'https://i.pravatar.cc/100?img=3',
  'https://i.pravatar.cc/100?img=4',
];

export function FeatureSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute -top-[5%] left-[2%] sm:left-[4%] w-[36%] h-[34%] bg-[#CBFC01] opacity-25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[24%] -left-[7%] w-[32%] h-[38%] bg-[#003BE2] opacity-25 rounded-full blur-[115px] pointer-events-none" />
      <div className="absolute top-[58%] -left-[6%] w-[34%] h-[34%] bg-[#CBFC01] opacity-30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-[5%] -right-[6%] w-[32%] h-[32%] bg-[#003BE2] opacity-25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-[6%] right-[22%] sm:right-[26%] w-[25%] h-[25%] bg-[#003BE2] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[2%] -right-[6%] w-[32%] h-[38%] bg-[#003BE2] opacity-25 rounded-full blur-[115px] pointer-events-none" />

      <div className="container mx-auto px-12 w-full relative z-10">
        
        {/* Block 1 (Boy) */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-28 pt-5">
          <div className="flex-1 md:pr-10">
            <ScrollReveal variant="fade-up" delayMs={0}>
              <Title as="h2" className="text-[44px] font-[600] leading-[1.2] mb-6 text-[#0F172A]">
                Your Path to Professional<br />Growth Starts Here!
              </Title>
              <Subtitle 
                className="text-[#4B4C53] text-[18px] leading-relaxed mb-10 max-w-[480px] font-[400]"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </Subtitle>
              <div className="flex gap-12">
                {STATS.map((stat, i) => (
                  <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${stat.delay}ms` }}>
                    <h3 className="text-[#003BE2] text-[36px] font-[500] mb-1 tracking-tight">{stat.value}</h3>
                    <p className="text-[#64748B] text-[18px] font-[400]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 relative flex justify-center items-center -translate-y-4">
            <ScrollReveal variant="fade-up" delayMs={140} className="w-full relative flex justify-center items-center">
              {/* Card 1: Course Info */}
              <div className="absolute top-[1%] left-[6%] sm:left-[10%] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-3.5 w-[280px] z-10">
                <div className="relative rounded-xl overflow-hidden mb-3 bg-gray-100">
                  <img src="/course-figma-thumb.jpg" alt="thumbnail" className="w-full h-[130px] object-cover" />
                  <div className="absolute bottom-2 left-2 flex gap-1 text-[9.5px] font-medium">
                     <span className="bg-white/90 px-2 py-1 rounded-full">17 Lessons</span>
                     <span className="bg-white/90 px-2 py-1 rounded-full">2 hours 16 min</span>
                  </div>
                </div>
                <h4 className="font-bold text-[#0F172A] text-[15px]">Learn Figma from A to Z</h4>
                <p className="text-[11px] text-gray-500 mb-2">by <span className="text-[#003BE2]">purepearl studio</span></p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#F5F5F6] px-2.5 py-1 rounded-full text-[10.5px] font-medium flex items-center gap-1 text-[#4B4C53]">
                    <BarChart className="w-3 h-3" /> Beginner
                  </span>
                  <span className="bg-pink-100 px-2.5 py-1 rounded-full text-[10.5px] text-pink-600 font-medium">Design</span>
                </div>
                <div className="flex items-end justify-between mt-2 border-t border-gray-100 pt-2">
                  <span className="font-bold text-[#003BE2] text-[17px]">$25<span className="text-[11px] text-gray-400 font-normal">/lifetime</span></span>
                </div>
              </div>

              {/* Main Image (Boy) */}
              <img src="/boy-student.png" alt="Professional Growth" className="w-full max-w-[545px] object-contain relative z-20 pointer-events-none" />

              {/* Card 2: Learning Progress */}
              <div className="absolute top-[39%] right-[2%] sm:right-[5%] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-5 w-[195px] sm:w-[205px] z-25">
                <p className="text-[12px] text-[#475569] font-medium mb-1">Learning Progress</p>
                <h3 className="text-[36px] font-bold text-[#0F172A] mb-2 leading-none tracking-tight">55%</h3>
                <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden mt-3">
                  <div className="h-full bg-[#CBFC01] w-[55%]"></div>
                </div>
              </div>

              {/* Spin-Ring Asset */}
              <img 
                src="/Spin-Ring.png" 
                alt="" 
                className="absolute top-[13%] right-[1%] sm:right-[4%] translate-x-[35px] w-[165px] sm:w-[190px] z-35 object-contain pointer-events-none drop-shadow-md" 
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Block 2 (Girl) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 md:pl-16 lg:pl-20">
            <ScrollReveal variant="fade-up" delayMs={0}>
              <Title as="h2" className="text-[44px] font-[600] leading-[1.2] mb-6 text-[#0F172A]">
                Create & Manage<br />Courses Easily.
              </Title>
              <Subtitle 
                className="text-[#4B4C53] text-[18px] leading-relaxed mb-8 max-w-[480px] font-[400]"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                <strong className="text-[#0F172A] font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
              </Subtitle>
              <ul className="space-y-4">
                {CREATOR_POINTS.map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-center gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${100 + i * 80}ms` }}
                  >
                    <div className="w-[24px] h-[24px] rounded-full bg-[#003BE2] flex items-center justify-center shadow-md shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span 
                      className="text-[#0F172A] text-[18px] font-[500]"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div className="flex-1 relative flex justify-center items-center">
            <ScrollReveal variant="fade-up" delayMs={140} className="w-full relative flex justify-center items-center">
              {/* Card 1: Total Revenue */}
              <div className="absolute top-[8%] left-[8%] sm:left-[14%] bg-[#003BE2] rounded-2xl shadow-2xl p-4 w-[220px] sm:w-[240px] z-10 text-white">
                <p className="text-[13px] opacity-90 mb-0.5 font-medium">Total Revenue</p>
                <p className="text-[11px] opacity-75 mb-2">July 1-28</p>
                <h3 className="text-[28px] font-bold mb-3 tracking-tight">$120.29</h3>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-[#CBFC01] w-[60%]"></div>
                </div>
              </div>

              {/* Card 2: Year to Date */}
              <div className="absolute top-[40%] left-[8%] sm:left-[14%] bg-[#003BE2] rounded-2xl shadow-2xl p-4 w-[160px] z-10 text-white">
                <p className="text-[12px] opacity-90 mb-0.5 font-medium">Year to Date</p>
                <p className="text-[10px] opacity-70 mb-2">2023</p>
                <h3 className="text-[22px] font-bold mb-2 tracking-tight">$1,200.38</h3>
                <div className="bg-[#CBFC01] text-black text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">
                  +12%
                </div>
              </div>

              {/* Main Image (Girl) */}
              <img src="/girl-creator.png" alt="Manage Courses" className="w-full max-w-[545px] object-contain relative z-20 pointer-events-none" />

              {/* Spin-Ring2 Asset for Girl */}
              <img 
                src="/Spin-Ring2.png" 
                alt="" 
                className="absolute top-[20%] right-[4%] sm:right-[8%] w-[190px] sm:w-[220px] z-25 object-contain pointer-events-none drop-shadow-sm" 
              />

              {/* Card 3: Happy Students */}
              <div className="absolute bottom-[8%] right-[6%] sm:right-[10%] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-4 w-[230px] z-30">
                <p className="text-[13px] text-[#475569] font-medium mb-1">Happy Students</p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="font-bold text-[15px] text-[#0F172A]">4.5</span>
                  <span className="text-[11px] text-[#94A3B8]">(240)</span>
                  <Star className="w-3.5 h-3.5 fill-[#CBFC01] text-[#CBFC01] ml-0.5" />
                </div>
                <div className="flex -space-x-2 mt-1">
                  {STUDENT_AVATARS.map((avatar, idx) => (
                    <img key={idx} src={avatar} alt="student" className="w-8 h-8 rounded-full border-2 border-white object-cover bg-gray-200" />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#CBFC01] flex items-center justify-center text-[10px] font-bold z-10 text-black">
                    2K+
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}
