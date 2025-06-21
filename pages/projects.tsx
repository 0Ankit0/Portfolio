"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectsPageProps {
  theme: string | undefined;
}

export default function ProjectsPage({ theme }: ProjectsPageProps) {
  const isDarkMode = theme === "dark";

  const projects = [
    {
      title: "Notify App",
      description:
        "A common website for managing different notification providers along with the message status.",
      tags: ["C#", ".NET Core", "React", "MS SQL"],
      link: "https://github.com/0Ankit0/Notify",
    },
    {
      title: "Service Pro",
      description:
        "A service management platform for scheduling and tracking services.",
      tags: ["Nodejs", "Flutter", "MongoDB"],
      link: "https://github.com/0Ankit0/Service_pro",
    },
  ];

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
            Featured Projects
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Here are some of my recent projects that showcase my skills and
            creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="block"
            >
              <Card
                className={`backdrop-blur-md border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isDarkMode
                    ? "bg-gray-800/80 border-gray-600 hover:bg-gray-700/80"
                    : "bg-white/80 border-gray-300 hover:bg-gray-50/80"
                }`}
              >
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={`$${
                          isDarkMode
                            ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
