"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Balancer } from "react-wrap-balancer";
import Balls from "@/public/balls.svg";
import Image from "next/image";

export default function AboveFold() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background effects */}

      {/* Fade-out effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-12 lg:gap-8">
          {/* Left Column - Main Headline and CTA Button */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative">
              <Balancer>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Créons des expériences digitales qui propulsent votre
                  entreprise.
                </span>
              </Balancer>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur-xl -z-10" /> */}
            </h1>
          </motion.div>

          {/* Right Column - Subheadline and Supporting Copy */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              <Balancer>
                Besoin d&apos;un site web qui se démarque et transforme les
                visiteurs en clients fidèles ?
              </Balancer>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              <Balancer>
                En tant que développeur, designer et créateur de solutions,
                j&apos;apporte créativité et passion à chaque projet.
                Construisons ensemble quelque chose de remarquable.
              </Balancer>
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center lg:justify-start pt-4"
            >
              <button className="bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg relative group">
                Prêt à franchir le cap ?
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-400 rounded-full opacity-0 group-hover:opacity-25 blur-md transition duration-300 ease-in-out" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
