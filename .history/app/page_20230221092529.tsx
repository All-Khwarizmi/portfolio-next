import About from "./components/About";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
   
        {' '}
        <Landing />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="timeline">
        <About />
      </section>
    </>
  );
}
