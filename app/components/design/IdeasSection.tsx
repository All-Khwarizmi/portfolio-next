"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Users } from "lucide-react";

export default function IdeasSection() {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Discovery & Strategy",
      description:
        "Understanding the project vision and aligning it with your goals.",
    },
    {
      icon: Code,
      title: "Execution & Design",
      description: "Building clean, scalable, and engaging digital solutions.",
    },
    {
      icon: Users,
      title: "Collaboration & Feedback",
      description: "Iterating and improving with transparent communication.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            How I Bring Ideas to Life
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
          Every project starts with a strong foundation. I ensure that your
          ideas are not only understood but executed with precision. From
          initial brainstorming to final touches, my process is collaborative,
          transparent, and driven by results.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full text-sm transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg relative group">
            See My Work in Action
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-25 blur-md transition duration-300 ease-in-out" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
