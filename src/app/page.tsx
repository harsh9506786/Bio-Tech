import HeroSection from "@/components/HeroSection";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import { ImpactNumbers } from "@/components/home/ImpactNumbers";
import { ProductCategories } from "@/components/home/ProductCategory";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSnapshot />
      <ImpactNumbers />
      <WhyChooseUs/>
      <ProductCategories/>
    </main>
  );
}
