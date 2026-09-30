import React from 'react';
import { Title } from '@/components/shared/Title';
import { Subtitle } from '@/components/shared/Subtitle';
import { Star, BarChart } from 'lucide-react';

export function FeatureSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
      {/* Background Gradients */}
      {/* Top Left Green */}
      <div 
        className="absolute -top-[5%] -left-[10%] w-[40%] h-[40%] bg-[#CBFC01] opacity-20 rounded-full blur-[120px] pointer-events-none" 
      />
      {/* Middle Blue Gradient (Between Greens) */}
      <div 
        className="absolute top-[30%] -left-[5%] w-[25%] h-[25%] bg-[#003BE2] opacity-15 rounded-full blur-[140px] pointer-events-none" 
      />
      {/* Bottom Left Green */}
      <div 
        className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] bg-[#CBFC01] opacity-15 rounded-full blur-[140px] pointer-events-none" 
      />
      
      {/* Top Right Blue */}
      <div 
        className="absolute top-[5%] -right-[5%] w-[20%] h-[20%] bg-[#003BE2] opacity-10 rounded-full blur-[100px] pointer-events-none" 
      />
      {/* Bottom Right Blue */}
      <div 
        className="absolute bottom-[5%] -right-[10%] w-[24%] h-[24%] bg-[#003BE2] opacity-15 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto px-12 w-full relative z-10">
        
        {/* Block 1 (Boy) */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-40">
          <div className="flex-1 md:pr-10">
            <Title as="h2" className="text-[44px] font-bold leading-[1.2] mb-6 text-[#0F172A]">
              Your Path to Professional<br />Growth Starts Here!
            </Title>
            <Subtitle className="text-[#64748B] text-[16px] leading-relaxed mb-10 max-w-[480px] font-normal">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </Subtitle>
            <div className="flex gap-12">
              <div>
                <h3 className="text-[#003BE2] text-[42px] font-bold mb-1 tracking-tight">12K</h3>
                <p className="text-[#64748B] text-[15px] font-medium">Students</p>
              </div>
              <div>
                <h3 className="text-[#003BE2] text-[42px] font-bold mb-1 tracking-tight">70+</h3>
                <p className="text-[#64748B] text-[15px] font-medium">Courses</p>
              </div>
              <div>
                <h3 className="text-[#003BE2] text-[42px] font-bold mb-1 tracking-tight">16</h3>
                <p className="text-[#64748B] text-[15px] font-medium">Creators</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative flex justify-center items-center">
            {/* Main Image */}
            <img src="/29a52a24e51266edcd7d57d73392ee5fc4833220.png" alt="Professional Growth" className="w-full max-w-[450px] object-contain relative z-20" />
            
            {/* Squiggly Asset */}
            <img src="/Mask Group.png" alt="" className="absolute top-[5%] -right-[5%] w-[120px] z-10 object-contain" />
            
            {/* Card 1: Course Info */}
            <div className="absolute top-[10%] -left-[10%] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-3 w-[260px] z-30">
              <div className="relative rounded-xl overflow-hidden mb-3 bg-gray-100">
                <img src="/Image (1).jpg" alt="thumbnail" className="w-full h-[120px] object-cover" />
                <div className="absolute bottom-2 left-2 flex gap-1 text-[9px] font-medium">
                   <span className="bg-white/90 px-2 py-1 rounded-full">17 Lessons</span>
                   <span className="bg-white/90 px-2 py-1 rounded-full">2 hours 16 min</span>
                </div>
              </div>
              <h4 className="font-bold text-[#0F172A] text-[14px]">Learn Figma from A to Z</h4>
              <p className="text-[10px] text-gray-500 mb-2">by <span className="text-[#003BE2]">purepearl studio</span></p>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#F5F5F6] px-2 py-1 rounded-full text-[10px] font-medium flex items-center gap-1 text-[#4B4C53]"><BarChart className="w-3 h-3" /> Beginner</span>
                <span className="bg-pink-100 px-2 py-1 rounded-full text-[10px] text-pink-600 font-medium">Design</span>
              </div>
              <div className="flex items-end justify-between mt-2 border-t border-gray-100 pt-2">
                <span className="font-bold text-[#003BE2] text-[16px]">$25<span className="text-[10px] text-gray-400 font-normal">/lifetime</span></span>
              </div>
            </div>

            {/* Card 2: Learning Progress */}
            <div className="absolute top-[35%] -right-[15%] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-5 w-[170px] z-30">
              <p className="text-[12px] text-[#475569] font-medium mb-1">Learning Progress</p>
              <h3 className="text-[36px] font-bold text-[#0F172A] mb-2 leading-none tracking-tight">55%</h3>
              <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden mt-3">
                <div className="h-full bg-[#CBFC01] w-[55%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2 (Girl) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 md:pl-10">
            <Title as="h2" className="text-[44px] font-bold leading-[1.2] mb-6 text-[#0F172A]">
              Create & Manage<br />Courses Easily.
            </Title>
            <Subtitle className="text-[#64748B] text-[16px] leading-relaxed mb-8 max-w-[480px] font-normal">
              <strong className="text-[#0F172A] font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </Subtitle>
            <ul className="space-y-5">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-[22px] h-[22px] rounded-full bg-[#003BE2] flex items-center justify-center shadow-md">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#0F172A] text-[16px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative flex justify-center items-center">
            {/* Main Image */}
            <img src="/0d6596fb1df66aaf843ee85722f439fada233946.png" alt="Manage Courses" className="w-full max-w-[450px] object-contain relative z-20" />
            
            {/* Squiggly Asset */}
            <img src="/Mask Group (1).png" alt="" className="absolute top-[35%] -right-[5%] w-[120px] z-10 object-contain" />
            
            {/* Card 1: Total Revenue */}
            <div className="absolute top-[15%] -left-[15%] bg-[#003BE2] rounded-2xl shadow-2xl p-4 w-[190px] z-30 text-white">
              <p className="text-[12px] opacity-90 mb-0.5 font-medium">Total Revenue</p>
              <p className="text-[10px] opacity-70 mb-2">July 1-28</p>
              <h3 className="text-[26px] font-bold mb-3 tracking-tight">$120.29</h3>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-[#CBFC01] w-[60%]"></div>
              </div>
            </div>

            {/* Card 2: Year to Date */}
            <div className="absolute top-[45%] -left-[15%] bg-[#003BE2] rounded-2xl shadow-2xl p-4 w-[150px] z-30 text-white">
              <p className="text-[12px] opacity-90 mb-0.5 font-medium">Year to Date</p>
              <p className="text-[10px] opacity-70 mb-2">2023</p>
              <h3 className="text-[22px] font-bold mb-2 tracking-tight">$1,200.38</h3>
              <div className="bg-[#CBFC01] text-black text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">
                +12%
              </div>
            </div>

            {/* Card 3: Happy Students */}
            <div className="absolute bottom-[5%] -right-[5%] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-4 w-[240px] z-30">
              <p className="text-[13px] text-[#475569] font-medium mb-1">Happy Students</p>
              <div className="flex items-center gap-1 mb-2">
                <span className="font-bold text-[15px] text-[#0F172A]">4.5</span>
                <span className="text-[11px] text-[#94A3B8]">(240)</span>
                <Star className="w-3.5 h-3.5 fill-[#CBFC01] text-[#CBFC01] ml-0.5" />
              </div>
              <div className="flex -space-x-2 mt-1">
                <img src="https://i.pravatar.cc/100?img=1" alt="student" className="w-8 h-8 rounded-full border-2 border-white object-cover bg-gray-200" />
                <img src="https://i.pravatar.cc/100?img=2" alt="student" className="w-8 h-8 rounded-full border-2 border-white object-cover bg-gray-200" />
                <img src="https://i.pravatar.cc/100?img=3" alt="student" className="w-8 h-8 rounded-full border-2 border-white object-cover bg-gray-200" />
                <img src="https://i.pravatar.cc/100?img=4" alt="student" className="w-8 h-8 rounded-full border-2 border-white object-cover bg-gray-200" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#CBFC01] flex items-center justify-center text-[10px] font-bold z-10 text-black">
                  2K+
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
