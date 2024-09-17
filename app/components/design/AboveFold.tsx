"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Balancer } from "react-wrap-balancer";

export default function AboveFold() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
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
                  Donnez vie à vos idées avec des sites web qui captivent
                </span>
              </Balancer>
            </h1>
          </motion.div>

          {/* Right Column - Subheadline and Supporting Copy */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white hidden lg:block">
              <Balancer>
                Expert React, TypeScript et Next.js pour vos projets web
                ambitieux
              </Balancer>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              <Balancer>
                Imaginez un site web qui s&apos;adapte à tous les écrans, se
                charge en un clin d&apos;œil, et guide intuitivement vos
                visiteurs. Des boutons réactifs, des animations fluides, et un
                back-office aussi simple que votre smartphone. C&apos;est ce
                que je crée pour vous.
              </Balancer>
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center lg:justify-start pt-4"
            >
              <a href="mailto:suarezjason@icloud.com">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-5 px-12 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-xl relative group overflow-hidden">
                  Prêt à franchir le cap ?
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-0 group-hover:opacity-30 blur-md transition duration-300 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-20 blur-lg" />
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
