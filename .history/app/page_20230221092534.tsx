import About from "./components/About";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
   
        {' '}
        <Landing />
    
      <section id="projects">
        <Projects />
    
      <section id="timeline">
        <About />
    
    </>
  );
}
