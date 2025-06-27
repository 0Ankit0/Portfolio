"use client";

import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone } from "lucide-react";
import { useRef } from "react";

interface ServicesPageProps {
  theme: string | undefined;
}

export default function ServicesPage({ theme }: ServicesPageProps) {
  const isDarkMode = theme === "dark";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: ".NET Development",
      description: "Robust, scalable applications using .NET Core and C#",
    },
    {
      icon: Smartphone,
      title: "Web Applications",
      description: "Modern web applications with Blazor and .NET backends",
    },
    {
      icon: Palette,
      title: "API Development",
      description: "RESTful APIs and microservices architecture",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Services
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            I offer a comprehensive range of services to bring your digital
            vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: inView ? index * 0.2 : 0 }}
              whileHover={{ y: -10 }}
            >
              <Card
                className={`backdrop-blur-md border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800/80 border-gray-600 hover:bg-gray-700/80"
                    : "bg-white/80 border-gray-300 hover:bg-gray-50/80"
                }`}
              >
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-block p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full mb-6"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
