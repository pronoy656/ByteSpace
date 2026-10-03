import React from "react";
import { Title } from "@/components/shared/Title";
import { Subtitle } from "@/components/shared/Subtitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

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
    <section className="py-12 sm:py-20 px-4 sm:px-8 lg:px-12 w-full max-w-7xl mx-auto font-sans">
      <ScrollReveal variant="fade-up" delayMs={0}>
        <div className="text-center max-w-[1100px] mx-auto mb-8 sm:mb-14">
          <Title as="h2" className="text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] font-semibold leading-tight mb-3 sm:mb-4 text-[#0F172A]">
            Explore Diverse Learning Paths at Bytespace
          </Title>
          <Subtitle className="text-center font-normal text-sm sm:text-base lg:text-[18px] mx-auto leading-relaxed text-[#82868E] max-w-2xl px-2">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </Subtitle>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delayMs={120}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-6 justify-items-center">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center border border-gray-200 rounded-[20px] sm:rounded-[24px] w-full max-w-[160px] sm:max-w-[180px] aspect-square p-3 sm:p-4 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white animate-fade-in-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="bg-[#D4FB20] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2.5 sm:mb-4 overflow-hidden">
                <img src={cat.icon} alt={cat.name} className="w-7 h-7 sm:w-9 sm:h-9 object-contain mix-blend-multiply" />
              </div>
              <span className="text-[#0F172A] font-medium text-xs sm:text-[16px] text-center">{cat.name}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
