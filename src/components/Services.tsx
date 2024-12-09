"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Layout, Database } from "lucide-react";

const services = [
  {
    title: "Backend Development",
    description: "Robust server-side solutions using .NET Core and C#",
    icon: <Server className="h-8 w-8 mb-2" />,
  },
  {
    title: "Frontend Development",
    description: "Responsive and interactive UIs with React and Next.js",
    icon: <Layout className="h-8 w-8 mb-2" />,
  },
  {
    title: "Database Design",
    description: "Efficient data structures using SQL Server and MongoDB",
    icon: <Database className="h-8 w-8 mb-2" />,
  },
  {
    title: "API Development",
    description: "RESTful and GraphQL APIs for seamless integration",
    icon: <Code className="h-8 w-8 mb-2" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
