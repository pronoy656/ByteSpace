import HeroSection from "@/components/home/HeroSection";
import BrandSection from "@/components/home/BrandSection";
import { CategorySection } from "@/components/home/CategorySection";
import { CourseSection } from "@/components/home/CourseSection";

export default function Home() {
  return (
    <div className="font-sans flex flex-col bg-white">
      <HeroSection />
      <BrandSection />
      <CourseSection />
      <CategorySection />
    </div>
  );
}
