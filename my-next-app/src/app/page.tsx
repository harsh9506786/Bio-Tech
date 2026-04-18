import HeroSection from "@/components/HeroSection";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { ImpactNumbers } from "@/components/home/ImpactNumbers";
import { ProductCategories } from "@/components/home/ProductCategory";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PerformanceShowcase } from "@/components/home/PerformanceShowcase";
import { ResearchHighlight } from "@/components/home/ResearchHighlight";
import PartnerCTA from "@/components/home/PartnerCTA";
import Testimonials from "@/components/home/Testimonials";
import PartnerLogos from "@/components/home/PartnerLogos";
import SustainabilityCommitment from "@/components/home/SustainabilityCommitment";

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden w-full">
      <main>
        <HeroSection />
        <AboutSnapshot />
        <ImpactNumbers />
        <WhyChooseUs />
        <ProductCategories />
        <PerformanceShowcase />
        <ResearchHighlight />
        <SustainabilityCommitment />
        <PartnerLogos />
        {/* <Testimonials /> */}
        <PartnerCTA />
      </main>
    </div>
  );
}
