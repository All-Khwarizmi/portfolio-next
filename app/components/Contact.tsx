"use client";

import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

interface ContactLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

const contactLinks: ContactLink[] = [
  { href: "https://github.com/All-Khwarizmi", icon: BsGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/jason-suarez/",
    icon: BsLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:suarezjason@icloud.com", icon: MdEmail, label: "Email" },
  { href: "https://twitter.com/swarecito", icon: BsTwitter, label: "Twitter" },
];

export default function PortfolioLanding() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-[75vh] flex items-center justify-center bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Jason Suarez
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Développeur Front-End passionné par la création d&apos;expériences
              digitales innovantes
            </p>
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6 text-gray-300" />
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="mailto:suarezjason@icloud.com">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Collaborons ensemble
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* <div
              className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/json-last.png"
                alt="Jason Suarez"
                layout="fill"
                objectFit="contain"
                className="transition-transform bg-transparent duration-500 ease-in-out transform hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-2">
                  Créativité & Innovation
                </h3>
                <p className="text-sm">
                  Transformons vos idées en réalités digitales captivantes
                </p>
              </motion.div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
