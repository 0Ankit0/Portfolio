"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface HomePageProps {
  theme: string | undefined;
  scrollToSection: (sectionId: string) => void;
}

export default function HomePage({ theme, scrollToSection }: HomePageProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const isDarkMode = theme === "dark";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-500 via-black to-gray-600"
              : "bg-gradient-to-br from-gray-100 via-white to-gray-200"
          }`}
        />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ankit Poudyal
          </motion.h1>

          <motion.p
            className={`text-xl md:text-2xl mb-8 font-medium ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fullstack .NET Developer turning ideas into robust, scalable
            solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className={`bg-gradient-to-r from-gray-100 to-gray-300 hover:from-gray-200 hover:to-gray-400 text-gray-800 border-0 shadow-lg backdrop-blur-sm dark:from-gray-600 dark:to-gray-800 dark:hover:from-gray-700 dark:hover:to-gray-900 dark:text-white`}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`bg-gradient-to-r from-gray-100 to-gray-300 hover:from-gray-200 hover:to-gray-400 text-gray-800 border-0 shadow-lg backdrop-blur-sm dark:from-gray-600 dark:to-gray-800 dark:hover:from-gray-700 dark:hover:to-gray-900 dark:text-white`}
            >
              <a href="/cv.pdf" className="flex" download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
