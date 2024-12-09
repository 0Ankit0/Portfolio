"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "C#", level: 90 },
  { name: ".NET Core", level: 85 },
  { name: "MS SQL", level: 80 },
  { name: "React", level: 75 },
  { name: "Next.js", level: 70 },
  { name: "MongoDB", level: 65 },
  { name: "HTML/CSS", level: 85 },
  { name: "JavaScript", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-16 bg-secondary">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium">{skill.name}</span>
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <motion.div
                className="bg-primary h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
