"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

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
  {
    title: "Game Hub",
    description:
      "A central hub for managing and playing various games made using VB.NET.",
    tags: ["VB.NET"],
    link: "https://github.com/0Ankit0/game-hub",
  },
  {
    title: "Hook Game",
    description: "A casual game made using C++",
    tags: ["C++"],
    link: "https://github.com/0Ankit0/hook-Game",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={project.title}>
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
          </div>
        ))}
      </div>
    </section>
  );
}
