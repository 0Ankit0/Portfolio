"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AboutPageProps {
  theme: string | undefined;
}

export default function AboutPage({ theme }: AboutPageProps) {
  const isDarkMode = theme === "dark";

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            About Me
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            I am a passionate fullstack .NET developer with expertise in
            creating robust, scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/photo.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-2xl mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I specialize in creating exceptional digital experiences that
              combine beautiful design with robust functionality. My expertise
              spans across modern web technologies, API development, and user
              experience design.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              With years of experience in .NET development, I have worked on
              various projects ranging from enterprise applications to
              innovative web solutions. I am passionate about clean code,
              scalable architecture, and delivering high-quality software that
              meets business objectives.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              When I am not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing knowledge with
              the developer community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
