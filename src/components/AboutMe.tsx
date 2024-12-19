"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/photo.jpg"
            alt="John Doe"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <div>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            With over a year of experience in fullstack development, I
            specialize in creating robust and scalable applications using .NET
            technologies and modern JavaScript frameworks. My passion lies in
            solving complex problems and delivering high-quality software
            solutions that make a real impact.
          </motion.p>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            My expertise spans from backend development with C# and .NET Core to
            frontend development with React and Next.js. I'm proficient in both
            SQL and NoSQL databases, ensuring that I can choose the right tool
            for each unique project.
          </motion.p>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I'm always eager to learn new technologies and methodologies,
            keeping myself at the forefront of web development. My goal is to
            create efficient, user-friendly applications that not only meet but
            exceed client expectations.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
