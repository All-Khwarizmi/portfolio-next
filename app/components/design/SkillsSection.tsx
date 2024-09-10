"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  FileType,
  LayoutGrid,
  Figma,
  Braces,   
  Blocks,
  Gauge,
  GitBranch,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code,
    description:
      "Building dynamic, responsive web applications with modern technologies.",
    skills: [
      {
        name: "React",
        icon: Braces,
        description:
          "Building dynamic, single-page applications with reusable components.",
      },
      {
        name: "TypeScript",
        icon: FileType,
        description:
          "Writing robust, type-safe code for large-scale applications.",
      },
      {
        name: "Next.js",
        icon: LayoutGrid,
        description:
          "Optimizing for SEO and performance using a server-side rendering framework.",
      },
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description:
      "Crafting intuitive and visually appealing user interfaces and experiences.",
    skills: [
      {
        name: "Figma",
        icon: Figma,
        description:
          "Crafting user-friendly interfaces with pixel-perfect precision.",
      },
      {
        name: "Storybook",
        icon: Blocks,
        description:
          "Developing UI components in isolation to ensure reusability and scalability.",
      },
      {
        name: "Material UI",
        icon: Palette,
        description:
          "Implementing design systems for consistent and scalable design patterns.",
      },
    ],
  },
  {
    title: "Performance & Optimization",
    icon: Zap,
    description: "Ensuring applications are fast, efficient, and scalable.",
    skills: [
      {
        name: "Lighthouse Audits",
        icon: Gauge,
        description: "Ensuring optimal page load speeds and SEO rankings.",
      },
      {
        name: "Webpack",
        icon: Blocks,
        description: "Efficient bundling of resources for faster load times.",
      },
      {
        name: "Git",
        icon: GitBranch,
        description:
          "Seamlessly managing version control and collaboration for smooth project execution.",
      },
    ],
  },
];

interface SkillCategoryProps {
  category: SkillCategory;
  index: number;
}

function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto">
        <category.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-center mb-4 text-white">
        {category.title}
      </h3>
      <p className="text-gray-400 text-center mb-6">{category.description}</p>
      <ul className="space-y-4">
        {category.skills.map((skill) => (
          <li key={skill.name} className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
              <skill.icon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">{skill.name}</h4>
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function SkillsSection() {
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
            Skills That Drive Results
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur-xl -z-10" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg relative group">
            Let&apos;s Build Something Together
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-25 blur-md transition duration-300 ease-in-out" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
