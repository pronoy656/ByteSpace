import Image from "next/image";
import Link from "next/link";
import { BlueGridBackground } from "@/components/shared/BlueGridBackground";

export default function HeroSection() {
  return (
    <BlueGridBackground className="h-screen flex flex-col shrink-0">

      {/* Floating 3D Elements */}
      {/* Top Left Lime Squiggly */}
      <img src="/Frame.png" alt="" className="absolute top-[5%] -left-16 w-[280px] z-10" />
      
      {/* Mid Left White Squiggly */}
      <img src="/Frame (1).png" alt="" className="absolute top-[55%] left-10 w-[100px] z-10" />
      
      {/* Bottom Left Donut */}
      <img src="/Ellipse 7.png" alt="" className="absolute bottom-[5%] left-24 w-[220px] z-10" />
      
      {/* Top Right Lime Cylinder */}
      <img src="/Cone (2).png" alt="" className="absolute top-[10%] -right-16 w-[280px] z-10" />
      
      {/* Mid Right White Cone */}
      <img src="/Cone (1).png" alt="" className="absolute top-[55%] right-10 w-[100px] z-10" />
      
      {/* Bottom Right White Squiggly */}
      <img src="/Mask Group.png" alt="" className="absolute bottom-[20%] right-16 w-[180px] z-10" />

      {/* Hero Content */}
      <main className="relative z-20 flex flex-col items-center mt-40 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-white text-[64px] font-bold leading-[1.1] tracking-tight">
          Get Access to Hundreds<br/>Courses Available
        </h1>
        <p className="text-white/80 mt-6 text-[18px] max-w-2xl font-light">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        
        {/* Search Bar */}
        <div className="mt-12 flex items-center gap-4 w-full max-w-[640px]">
          <div className="flex flex-1 items-center bg-white rounded-full p-2 shadow-2xl h-[60px]">
            <div className="pl-6 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Course, topic, creator" 
              className="flex-1 bg-transparent border-none outline-none px-4 text-gray-800 placeholder-gray-400 text-[16px]" 
            />
          </div>
          <button className="bg-[#D4FB20] text-black font-semibold rounded-full px-10 h-[60px] text-[16px] hover:bg-[#c2e61c] transition-colors shadow-2xl shrink-0">
            Search
          </button>
        </div>
      </main>

      {/* Main Guy Image */}
      <div className="relative z-20 flex justify-center mt-auto px-4 pointer-events-none">
        <img src="/Image (1).png" alt="Student" className="w-[1000px] max-w-full object-cover object-top" />
      </div>
    </BlueGridBackground>
  );
}
