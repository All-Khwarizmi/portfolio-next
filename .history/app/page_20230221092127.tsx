import About from "./components/About";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <section>
        {' '}
        <Landing />
      </section>
      <section></section>
      <section></section>

      <Projects />
      <About />
    </>
  );
}
