import HeroSection from "@/components/home/HeroSection";
import BrandSection from "@/components/home/BrandSection";
import { CategorySection } from "@/components/home/CategorySection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { CourseSection } from "@/components/home/CourseSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="font-sans flex flex-col bg-white">
      <HeroSection />
      <BrandSection />
      <CourseSection />
      <CategorySection />
      <FeatureSection />
      <CtaSection />
    </div>
  );
}
