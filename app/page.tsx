import Header from "@/app/_components/Header";
import HeroSection from "@/app/_components/sections/HeroSection";
import AboutSection from "@/app/_components/sections/AboutSection";
import SkillsSection from "@/app/_components/sections/SkillsSection";
import ProjectsSection from "@/app/_components/sections/ProjectsSection";
import ContactSection from "@/app/_components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2025 鄭雲修. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
