import HeroSection from "@/components/home/HeroSection";
import BrandSection from "@/components/home/BrandSection";

export default function Home() {
  return (
    <div className="font-sans flex flex-col bg-white">
      <HeroSection />
      <BrandSection />
    </div>
  );
}
