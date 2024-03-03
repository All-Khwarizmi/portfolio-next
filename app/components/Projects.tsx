
import clsx from 'clsx';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="min-h-[100%]  projects text-center">
      <h1 className={clsx("text-5xl grid content-center py-20 font-bold")}>
        Projects
      </h1>
      <div className="flex min-h-[100%] flex-col items-center gap-5 justify-between lg:flex-row lg:justify-center flex-wrap  px-2">
        <ProjectCard
          url={"https://gites-mon-tresor-guadeloupe.com/"}
          name={"Gîtes Mon Trésor"}
          docs={"https://github.com/All-Khwarizmi/gites-v2"}
        />
        <ProjectCard
          url={"https://chut.me/"}
          name={"Chut"}
          docs={"https://github.com/All-Khwarizmi/chut-next"}
        />
        <ProjectCard
          url={"https://dico-uno.vercel.app/"}
          name={"Dico"}
          docs={"https://github.com/All-Khwarizmi/Dico"}
        />
      </div>
      <div className="p-3"></div>
      <div className="lg:py-10">
        <Link href="/projects" className="">
          <button
            type="button"
            className="uppercase  py-2 px-3 bg-gray-800 hover:bg-red-800"
          >
            Show All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
