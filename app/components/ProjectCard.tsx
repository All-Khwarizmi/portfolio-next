"use client";

import clsx from "clsx";
import Iframe from "react-iframe";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

const montserrat = Montserrat({
  weight: ["100", "300", "400"],
  subsets: ["latin"],
});

type AppProps = {
  url: string;
  name: string;
  docs: string;
};
const ProjectCard = ({ url, name, docs }: AppProps) => {
  return (
    <div className="shadow-xl shadow-black rounded-lg">
      <Iframe
        className="rounded-t-lg"
        url={url}
        name={name}
        height="500px"
        width={
          typeof window !== "undefined"
            ? window.innerWidth < 600
              ? "375px"
              : "500px"
            : "375px"
        }
      ></Iframe>

      <div className="flex flex-col project-caption rounded-b-lg">
        <Link
          target={"_blank"}
          className={clsx(
            montserrat.className,
            " justify-center items-center w-full flex pt-5 pb-3 h-full hover:bg-[#52616B]"
          )}
          href={url}
        >
          <p>{name}</p>
        </Link>
        <Link
          href={docs}
          target={"_blank"}
          className="hover:bg-[#52616B] pb-5 pt-3"
        >
          <p
            className={clsx(
              montserrat.className,
              "flex justify-center h-full  "
            )}
          >
            <AiOutlineGithub className="text-2xl " />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
