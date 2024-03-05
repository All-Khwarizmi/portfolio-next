import clsx from "clsx";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="min-h-[100%]  projects text-center">
      <h1
        className={clsx(
          "text-5xl grid text-[#52616B] content-center py-16 font-bold"
        )}
      >
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
      <div className="p-10 lg:p-5"></div>
      <div className="lg:py-10">
        <Link href="/projects" className="shadow-black shadow-xl">
          <button
            type="button"
            className="uppercase text-gray-700 hover:text-white  rounded-sm py-2 px-3 bg-[#C9D6DF] hover:bg-[#52616B]"
          >
            Show All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
