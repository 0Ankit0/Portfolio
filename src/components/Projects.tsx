"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution using .NET Core and React",
    tags: ["C#", ".NET Core", "React", "MS SQL"],
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "A Next.js application with .NET Core backend for task management",
    tags: ["Next.js", ".NET Core", "MS SQL"],
    link: "https://github.com/yourusername/task-management-app",
  },
  {
    title: "Blog CMS",
    description:
      "A content management system for blogs using .NET Core and MongoDB",
    tags: ["C#", ".NET Core", "MongoDB"],
    link: "https://github.com/yourusername/blog-cms",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio website built with Next.js and Tailwind CSS",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://github.com/yourusername/portfolio",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filterProjects = (tag) => {
    setActiveTab(tag);
  };

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTab));

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all" onClick={() => filterProjects("all")}>
            All
          </TabsTrigger>
          <TabsTrigger value="C#" onClick={() => filterProjects("C#")}>
            C#
          </TabsTrigger>
          <TabsTrigger value="React" onClick={() => filterProjects("React")}>
            React
          </TabsTrigger>
          <TabsTrigger
            value="Next.js"
            onClick={() => filterProjects("Next.js")}
          >
            Next.js
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
