import Contact from "./components/Contact";
import AboveFold from "./components/design/AboveFold";
import ProjectsSection from "./components/design/ProjectsSection";
import SkillsSection from "./components/design/SkillsSection";

export default function Home() {
  return (
    <div className="bg-gray-950">
      <AboveFold />
      <ProjectsSection />
      <SkillsSection />
      
      <Contact />
    </div>
  );
}
