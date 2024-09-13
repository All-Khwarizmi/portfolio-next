import Image from "next/image";
import Balls from "@/public/balls.svg";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Image 
        priority 
        src={Balls} 
        alt="Background"
        fill
        className="object-cover object-center opacity-30 mix-blend-screen"
      />
    </div>
  );
}
