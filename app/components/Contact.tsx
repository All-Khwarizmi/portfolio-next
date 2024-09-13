"use client";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

interface ContactLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

const contactLinks: ContactLink[] = [
  {
    href: "https://github.com/All-Khwarizmi",
    icon: BsGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/jason-suarez/",
    icon: ImLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:suarezjason@icloud.com",
    icon: MdEmail,
    label: "Email",
  },
  {
    href: "https://twitter.com/swarecito",
    icon: FaTwitterSquare,
    label: "Twitter",
  },
];

const Contact = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto text-center lg:text-left">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center lg:text-left mb-12 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Restons en contact
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur-xl -z-10" />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl text-white font-semibold">
              Prêt à collaborer ?
            </h3>
            <p className="text-lg text-gray-300">
              <Balancer>
                Discutons de votre projet autour d&apos;un café virtuel !
                J&apos;adore découvrir de nouvelles idées et relever des défis.
              </Balancer>
            </p>
            <div className="flex justify-center lg:justify-start gap-6">
              {contactLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="w-8 h-8 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl text-white font-semibold">
              Faisons connaissance
            </h3>
            <p className="text-lg text-gray-300">
              Que vous ayez un projet en tête ou que vous vouliez simplement
              dire bonjour, j&apos;aimerais échanger avec vous. Envoyez-moi un
              message, je vous répondrai dès que possible.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="flex justify-center lg:justify-start"
            >
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-xl relative group overflow-hidden">
                Qu&apos;attendez-vous ?
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-0 group-hover:opacity-50 blur-md transition duration-300 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-20 blur-lg" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
