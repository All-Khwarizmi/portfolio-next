import Contact from "./components/Contact";
import AboveFold from "./components/design/AboveFold";
import IdeasSection from "./components/design/IdeasSection";
import ProjectsSection from "./components/design/ProjectsSection";
import SkillsSection from "./components/design/SkillsSection";

export default function Home() {
  return (
    <>
      {" "}
      <AboveFold />
      <ProjectsSection />
      <IdeasSection />
      <SkillsSection />
      <Contact />
    </>
  );
}
