"use client";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

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
    href: "mailto:your.email@example.com",
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
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Let&apos;s Connect
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur-xl -z-10" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl text-white font-semibold">
              Ready to work together?
            </h3>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss your project over a virtual coffee! I&apos;m
              always excited to hear about new ideas and challenges.
            </p>
            <div className="flex gap-6">
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
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl text-white font-semibold">
              Get in Touch
            </h3>
            <p className="text-lg text-gray-300">
              Whether you have a project in mind or just want to say hello,
              I&apos;d love to hear from you. Drop me a message and I&apos;ll
              get back to you as soon as possible.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg relative group">
                Send Me a Message
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-400 rounded-full opacity-0 group-hover:opacity-25 blur-md transition duration-300 ease-in-out" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
