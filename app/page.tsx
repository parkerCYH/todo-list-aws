import AboutSection from '@/app/_components/sections/AboutSection';
import HeroSection from '@/app/_components/sections/HeroSection';
import ProjectsSection from '@/app/_components/sections/ProjectsSection';
import SkillsSection from '@/app/_components/sections/SkillsSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </>
    );
}
