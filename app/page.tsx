import { HeroSection } from "@/components/home/hero-section";
import { ExploreSection } from "@/components/home/explore-section";
import { ServicesSection } from "@/components/home/services-section";
import { QuoteSection } from "@/components/home/quote-section";
import { WhoWeAreSection } from "@/components/home/who-we-are-section";
import { ValuePillarsSection } from "@/components/home/value-pillars-section";
import { TechStackSection } from "@/components/home/tech-stack-section";
import { CaseStudiesSection } from "@/components/home/case-studies-section";
import { BlogSection } from "@/components/home/blog-section";
import { ProcessSection } from "@/components/home/process-section";
import { FinalCTASection } from "@/components/home/final-cta-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ExploreSection />
      <ServicesSection />
      <QuoteSection />
      <WhoWeAreSection />
      <ValuePillarsSection />
      <TechStackSection />
      <CaseStudiesSection />
      <BlogSection />
      <ProcessSection />
      <FinalCTASection />
    </div>
  );
}
