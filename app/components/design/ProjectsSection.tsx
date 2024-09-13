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
      "Mise à jour du site web pour Gîtes Mon Trésor, avec des fonctionnalités avancées telles que l'intégration de cartes, la réservation en ligne et le paiement, ainsi que l'amélioration des performances globales du site.",
    challenges:
      "Intégration des cartes Google sur un site statique, implémentation de la réservation en ligne et du paiement sécurisé avec Stripe, et gestion des requêtes côté serveur avec des optimisations de performance.",
    learned:
      "Perfectionnement dans l'utilisation de React Hook Form et EmailJS pour les formulaires, gestion de Google Maps API dans un environnement React, et intégration des paiements en ligne avec Stripe. J'ai aussi amélioré la gestion des réservations via un système en ligne.",
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
      "Développement d'une plateforme SaaS pour les professeurs permettant de gérer le parcours éducatif des élèves, de la création des cours à l'évaluation. La plateforme intègre un système de gestion des résultats et une IA pour personnaliser les recommandations pédagogiques.",
    challenges:
      "Intégration d'une architecture flexible pour s'adapter aux différents systèmes éducatifs, gestion des évaluations critériées en fonction des pays et optimisation du contenu dynamique avec TypeScript.",
    learned:
      "Amélioration de la gestion des types dynamiques avec TypeScript, et approfondissement dans la création de systèmes éducatifs adaptatifs avec une architecture robuste. Développement d'une solution IA pour fournir des recommandations personnalisées.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "PostgreSQL",
      "AI Integration",
    ],
    image: "/laclasse.png",
  },
  {
    name: "Application Mobile Fitness",
    description:
      "Création d'une application mobile multiplateforme pour des plans d'entraînement personnalisés et le suivi des progrès.",
    challenges:
      "Conception d'une interface UI/UX intuitive pour la personnalisation complexe des entraînements et mise en place d'une fonctionnalité hors-ligne.",
    learned:
      "Amélioration des compétences en développement mobile, gestion d'état avec React Native et architecture orientée hors-ligne.",
    techStack: ["React Native", "Redux", "Firebase", "Expo"],
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
          <h3 className="text-2xl font-bold text-white text-center lg:text-left">{project.name}</h3>
          <p className="text-gray-300 text-center lg:text-left">{project.description}</p>
          <div>
            <h4 className="text-lg font-semibold text-blue-400 text-center lg:text-left">
              Défis
            </h4>
            <p className="text-gray-400 text-center lg:text-left">{project.challenges}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-400 text-center lg:text-left">
              Enseignements
            </h4>
            <p className="text-gray-400 text-center lg:text-left">{project.learned}</p>
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
    <motion.section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-950"
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur-xl -z-10" />
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
            className="bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Construisons quelque chose de remarquable
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-400 rounded-full opacity-0 group-hover:opacity-25 blur-md transition duration-300 ease-in-out" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
