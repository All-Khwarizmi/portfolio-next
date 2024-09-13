"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Project {
  name: string;
  description: string;
  challenges: string;
  learned: string;
  techStack: string[];
  image: string;
}

const projects: Project[] = [
  {
    name: "Dico",
    description:
      "Création d'un dictionnaire web français-espagnol permettant la recherche de mots dans les deux sens grâce à l'API PONS. Le projet vise à aider les étudiants à utiliser efficacement les outils linguistiques.",
    challenges:
      "Surmonter les limitations d'usage de l'API PONS et optimiser les performances de recherche afin de réduire les appels API et améliorer la rapidité des réponses.",
    learned:
      "Amélioration de mes compétences en gestion des performances des algorithmes, optimisation des requêtes API et gestion de base de données avec Prisma. J'ai également exploré des solutions de coût algorithmique et de partage de ressources.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"],
    image: "/dico.png",
  },
  {
    name: "Gîtes Mon Trésor Web Site Update",
    description:
      "Mise à jour du site web pour Gîtes Mon Trésor, avec des fonctionnalités avancées telles que l'intégration de cartes ainsi que l'amélioration des performances globales du site.",
    challenges:
      "Intégration des cartes Google sur un site statique et gestion des requêtes côté serveur avec des optimisations de performance.",
    learned:
      "Perfectionnement dans l'utilisation de React Hook Form et EmailJS pour les formulaires et gestion de Google Maps API dans un environnement React.",
    techStack: [
      "T3 Stack",
      "Next.js",
      "React",
      "React Google Maps API",
      "Stripe",
      "Prisma",
      "Tailwind CSS",
      "tRPC",
    ],
    image: "/montresor.png",
  },
  {
    name: "La Classe",
    description:
      "Plateforme SaaS pour enseignants, permettant de créer des cours, gérer les élèves, et utiliser un tableau numérique interactif. La plateforme inclut aussi un réseau de partage entre professeurs.",
    challenges:
      "Intégration d'une IA pour recommandations pédagogiques personnalisées et gestion des systèmes éducatifs variés, tout en maintenant une architecture flexible et performante.",
    learned:
      "Optimisation de la gestion des types dynamiques avec TypeScript et intégration d'une IA pour personnaliser l'enseignement.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "AI Integration",
    ],
    image: "/laclasse.png",
  },
  {
    name: "JustGains",
    description:
      "Application SaaS permettant de créer, partager et gérer des entraînements sportifs avec une approche réseau social. L'interface permet une création intuitive de workouts en plusieurs étapes.",
    challenges:
      "Développement d'une interface UX/UI intuitive pour gérer des workflows complexes de création de workouts, intégration d'un système de publication et de partage de contenu pour les créateurs.",
    learned:
      "Amélioration des compétences en design d'interface et gestion d'état avancée avec React, ainsi que la gestion de flux multi-étapes complexes.",
    techStack: ["React", "Vite", "TanStack Router", "shadcn/ui"],
    image: "/wip.jpg",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
    amount: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-300"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div
        className={`flex flex-col ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <div className="w-full lg:w-1/2 relative">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20" />
        </div>
        <div className="w-full lg:w-1/2 p-6 lg:p-8 space-y-4">
          <h3 className="text-2xl font-bold text-white text-center lg:text-left">
            {project.name}
          </h3>
          <p className="text-gray-300 text-center lg:text-left">
            {project.description}
          </p>
          <div>
            <h4 className="text-lg font-semibold text-blue-400 text-center lg:text-left">
              Défis
            </h4>
            <p className="text-gray-400 text-center lg:text-left">
              {project.challenges}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-400 text-center lg:text-left">
              Enseignements
            </h4>
            <p className="text-gray-400 text-center lg:text-left">
              {project.learned}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-400 text-center lg:text-left">
              Stack Technique
            </h4>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-2 mt-2">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <div className="min-h-screen  flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden relative pb-12 md:pb-24 lg:pb-32">
      <motion.section
        className="w-full pt-0 md:pt-0 lg:pt-0 pb-12 md:pb-24 lg:pb-32 bg-gray-950 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 md:px-6 mx-auto text-center lg:text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Projets qui parlent d&apos;eux-mêmes
            </span>
          </motion.h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-xl relative group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Construisons quelque chose de remarquable
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-0 group-hover:opacity-30 blur-md transition duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-20 blur-lg" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
