import About from "./components/About";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <section id="landing">
        {' '}
        <Landing />
      </section>
      <section id>
        <Projects />
      </section>
      <section>
        <About />
      </section>
    </>
  );
}
