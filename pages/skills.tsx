"use client"

import { motion } from "framer-motion"

interface SkillsPageProps {
  theme: string | undefined
}

export default function SkillsPage({ theme }: SkillsPageProps) {
  const isDarkMode = theme === "dark"

  const skills = [
    { name: ".NET Core", level: 95 },
    { name: "C#", level: 95 },
    { name: "Blazor", level: 90 },
    { name: "SQL Server", level: 88 },
    { name: "Azure", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>
            Skills & Expertise
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className={`flex justify-between ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-lg">{skill.level}%</span>
                </div>
                <div className={`w-full rounded-full h-3 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}>
                  <motion.div
                    className={`h-3 rounded-full ${
                      isDarkMode ? "bg-gradient-to-r from-gray-300 to-white" : "bg-gradient-to-r from-gray-600 to-black"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
