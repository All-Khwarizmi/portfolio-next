import About from "./components/About";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <section >
        {' '}
        <Landing />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <About />
      </section>
    </>
  );
}
