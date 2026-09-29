import React from "react";
import { Title } from "@/components/shared/Title";
import { Subtitle } from "@/components/shared/Subtitle";

export function CategorySection() {
  const categories = [
    { name: "Design", icon: "/Vector (3).jpg" },
    { name: "Development", icon: "/Vector (4).jpg" },
    { name: "IT & Software", icon: "/Vector (5).jpg" },
    { name: "Business", icon: "/Vector (1).png" },
    { name: "Marketing", icon: "/Vector (2).png" },
    { name: "Photography", icon: "/Vector (6).jpg" },
  ];

  return (
    <section className="py-20 px-12 container mx-auto w-full font-sans">
      <div className="text-center max-w-[1100px] mx-auto mb-14">
        <Title as="h2" className="text-[44px] font-semibold leading-tight mb-4 text-[#0F172A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Explore Diverse Learning Paths at Bytespace
        </Title>
        <Subtitle className="text-center font-normal text-[18px] mx-auto leading-relaxed text-[#82868E]">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various<br />fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </Subtitle>
      </div>

      <div className="flex flex-wrap justify-center gap-[40px]">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center border border-gray-200 rounded-[24px] w-[180px] h-[180px] hover:shadow-lg transition-shadow cursor-pointer bg-white"
          >
            <div className="bg-[#D4FB20] rounded-full w-[64px] h-[64px] flex items-center justify-center mb-4 overflow-hidden">
              <img src={cat.icon} alt={cat.name} className="w-[36px] h-[36px] object-contain mix-blend-multiply" />
            </div>
            <span className="text-[#0F172A] font-medium text-[16px]">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
