import { Awards } from "@/components/about/Awards";
import { Certifications } from "@/components/about/Certifications";
import { CompanyIntro } from "@/components/about/CompanyIntro";
import { CTAStrip } from "@/components/about/CTAStrip";
import { GlobalPresence } from "@/components/about/GlobalPresence";
import HeroSection from "@/components/about/HeroSection";
import { Infrastructure } from "@/components/about/Infrastructure";
import { ResearchInnovation } from "@/components/about/ResearchInnovation";
import { Sustainability } from "@/components/about/Sustainability";
import { VisionMission } from "@/components/about/VisionMission";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <CompanyIntro />
        <VisionMission />
        <Infrastructure />
        <ResearchInnovation />
        <Certifications />
        <Sustainability />
        <GlobalPresence />
        <Awards />
        <CTAStrip />
      </main>
    </div>
  );
}
