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
    title: "Développement Frontend",
    icon: Code,
    description:
      "Créer des applications web dynamiques et réactives avec les technologies modernes.",
    skills: [
      {
        name: "React",
        icon: Braces,
        description:
          "Développer des applications à page unique avec des composants réutilisables.",
      },
      {
        name: "TypeScript",
        icon: FileType,
        description:
          "Écrire du code robuste et typé pour des applications à grande échelle.",
      },
      {
        name: "Next.js",
        icon: LayoutGrid,
        description:
          "Optimisation pour le SEO et les performances avec un rendu côté serveur.",
      },
    ],
  },
  {
    title: "Design UI/UX",
    icon: Palette,
    description:
      "Concevoir des interfaces intuitives et esthétiques qui améliorent l'expérience utilisateur.",
    skills: [
      {
        name: "Figma",
        icon: Figma,
        description:
          "Créer des interfaces fluides avec une précision au pixel près.",
      },
      {
        name: "Storybook",
        icon: Blocks,
        description:
          "Développer des composants UI en isolation pour garantir leur réutilisabilité et évolutivité.",
      },
      {
        name: "Material UI",
        icon: Palette,
        description:
          "Mettre en place des systèmes de design pour des interfaces cohérentes et évolutives.",
      },
    ],
  },
  {
    title: "Performance & Optimisation",
    icon: Zap,
    description: "Garantir des applications rapides, efficaces et évolutives.",
    skills: [
      {
        name: "Lighthouse Audits",
        icon: Gauge,
        description: "Optimisation des vitesses de chargement et du SEO.",
      },
      {
        name: "Webpack",
        icon: Blocks,
        description:
          "Bundling efficace des ressources pour des chargements plus rapides.",
      },
      {
        name: "Git",
        icon: GitBranch,
        description:
          "Gestion fluide du contrôle de version et des collaborations pour une exécution de projet sans accroc.",
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
          <li key={skill.name} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
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
            Compétences qui font la différence
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
          <motion.button
            className="bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voyons grand !
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-400 rounded-full opacity-0 group-hover:opacity-25 blur-md transition duration-300 ease-in-out" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
