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
    name: "Project XYZ",
    description:
      "Developed a web app for managing team projects, focusing on simplicity and real-time collaboration.",
    challenges:
      "Overcame issues with integrating real-time collaboration features and handling complex user permissions.",
    learned:
      "Improved my skills in managing state with Redux and implementing WebSocket connections for real-time data.",
    techStack: ["React", "TypeScript", "WebSocket", "Redux"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "E-commerce Platform",
    description:
      "Built a scalable e-commerce platform with advanced product filtering and real-time inventory management.",
    challenges:
      "Implemented a complex product search algorithm and optimized database queries for large product catalogs.",
    learned:
      "Gained expertise in database optimization, caching strategies, and building performant search functionalities.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Elasticsearch"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "AI-Powered Chatbot",
    description:
      "Developed an AI-powered chatbot for customer support, integrating natural language processing capabilities.",
    challenges:
      "Fine-tuned the NLP model to understand industry-specific terminology and handle complex user queries accurately.",
    learned:
      "Deepened my understanding of machine learning models and gained experience in deploying AI solutions in production.",
    techStack: ["Python", "TensorFlow", "Flask", "Docker"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Mobile Fitness App",
    description:
      "Created a cross-platform mobile app for personalized workout plans and progress tracking.",
    challenges:
      "Designed an intuitive UI/UX for complex workout customization and implemented offline functionality.",
    learned:
      "Improved my skills in mobile app development, state management in React Native, and offline-first architecture.",
    techStack: ["React Native", "Redux", "Firebase", "Expo"],
    image: "/placeholder.svg?height=400&width=600",
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
    amount: 0.1
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
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-1/2 relative">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20" />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8 space-y-4">
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
          <p className="text-gray-300">{project.description}</p>
          <div>
            <h4 className="text-lg font-semibold text-blue-400">Challenges</h4>
            <p className="text-gray-400">{project.challenges}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-400">
              What I Learned
            </h4>
            <p className="text-gray-400">{project.learned}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-400">Tech Stack</h4>
            <ul className="flex flex-wrap gap-2 mt-2">
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
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Projects That Speak for Themselves
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
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg relative group">
            Let&apos;s Build Something Together
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-25 blur-md transition duration-300 ease-in-out" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
