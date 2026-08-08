import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ActivitiesSection } from "@/components/sections/activities";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";
import { SkillsSection } from "@/components/sections/skills";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ActivitiesSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <CTASection />
    </>
  );
}
