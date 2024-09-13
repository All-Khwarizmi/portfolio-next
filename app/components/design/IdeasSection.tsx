"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Users } from "lucide-react";
import Balancer from "react-wrap-balancer";

export default function IdeasSection() {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Découverte & Stratégie",
      description:
        "Comprendre votre vision et aligner le projet avec vos objectifs.",
    },
    {
      icon: Code,
      title: "Exécution & Design",
      description:
        "Créer des solutions digitales propres, évolutives et engageantes.",
    },
    {
      icon: Users,
      title: "Collaboration & Feedback",
      description: "Itérer et s'améliorer avec une communication transparente.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl flex flex-col items-center font-bold text-center mb-12 relative "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-blue-400  text-center to-purple-400 text-transparent bg-clip-text">
            Comment je concrétise vos idées
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur-xl -z-10" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {pillar.title}
              </h3>
              <p className="text-gray-400">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-lg text-gray-300 text-center mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Balancer>
            Chaque projet repose sur des bases solides. Je m&apos;assure que vos
            idées sont non seulement comprises, mais exécutées avec précision.
            Du brainstorming initial aux dernières touches, mon processus est
            collaboratif, transparent et orienté vers les résultats.
          </Balancer>
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-xl relative group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Allons-y !
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-0 group-hover:opacity-30 blur-md transition duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-20 blur-lg" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
