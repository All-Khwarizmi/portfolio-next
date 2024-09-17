"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { Open_Sans } from "@next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });
const PaperPlaneAnimation = () => {
  const planeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      //   gsap.to(planeRef.current, {
      //     x: 400, // Ajustez selon la taille de votre écran / section
      //     y: -300, // Ajustez pour le mouvement vertical
      //     rotation: 45, // Un tour complet
      //     duration: 10, // Durée en secondes
      //     ease: "power1.inOut", // Type d'animation, voir documentation GSAP pour plus d'options
      //     repeat: -1, // Nombre de répétitions (-1 pour infini)
      //     yoyo: true, // Retour à la position initiale avant de répéter
      //   });
      const tl = gsap.timeline({
        repeat: 0,
        repeatDelay: 1,
        defaults: { ease: "power1.outIn" },
      });
      // Position de départ en bas de l'écran  sur la gauche avec une légère rotation
      gsap.set(planeRef.current, { y: "68vh", x: "20vw", rotate: 5 });

      // Ajoute un mouvement ondulé en descente avec des keyframes
      tl.to(planeRef.current, {
        keyframes: [
          {
            y: "0vh", // Décollage depuis la vague en position initiale pour s'écraser sur le rebord haut de l'écran
            x: "+=35vw", // Mouvement latéral initial
            rotation: 40, // Légère rotation pour simuler le début de la chute
            duration: 1.5,
          },

          {
            y: "38vh", // rebond sur le titre
            x: "+=-18vw",
            rotation: -100,
            duration: 2,
          },

          {
            y: "37vh",
            x: "+=5vw",
            rotation: 115,
            duration: 1,
          },

          {
            y: "37vh",
            x: "+=0",
            rotation: 145,
            duration: 0.5,
          },
          {
            y: "40vh", // Presque au bas de l'écran
            x: "+=0vw", // Un autre mouvement latéral
            rotation: 180, // Rotation accrue pour accentuer l'effet de chute
            duration: 1,
          },

          // {
          //   y: "80vh", // Atterrissage en bas de l'écran
          //   x: "-=5vw", // Ajustement final latéral
          //   rotation: 60, // Remise à zéro de la rotation pour un atterrissage doux
          //   duration: 1,
          // },
        ],
      });
    });
    return () => ctx.revert(); // <-- CLEANUP!
  }, []);

  return (
    <svg
      ref={planeRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={clsx(
        openSans.className,
        `w-12 h-12 ${
          planeRef == null ? "text-red" : "z-0"
        }   absolute top-0 left-0 `
      )}
    >
      <path
        d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PaperPlaneAnimation;
