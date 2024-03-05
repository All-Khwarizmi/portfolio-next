import { clsx } from "clsx";
import { Montserrat, Open_Sans } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const Landing = () => {
  return (
    <div
      id="landing"
      className="h-screen landing flex items-center justify-center "
    >
      <div>
        <h1 className={clsx(openSans.className, "text-6xl font-bold pb-3")}>
          Hi, I'm Jason
        </h1>
        <h3
          className={clsx(
            montserrat.className,
            "text-center italic text-red-700  text-3xl "
          )}
        >
          A web developer
        </h3>
      </div>
    </div>
  );
};

export default Landing;
