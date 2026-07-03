import PageLayout from "@/components/layout/page-layout";
import FeaturedProjectsSection from "@/components/sections/featured-projects-section";
import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      {/* <FeaturedProjectsSection /> */}
      <SkillsSection />
    </PageLayout>
  );
}
