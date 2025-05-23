import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Home() {
  // Set up intersection observer to animate elements when they come into view
  useEffect(() => {
    useIntersectionObserver();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <OpenSourceSection />
        <TestimonialsSection />
        <StatsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
