"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="container mx-auto px-4 relative z-20 text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Crafting Digital Excellence
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Fullstack .NET Developer turning ideas into robust, scalable solutions
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild>
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4 text-black" /> Download CV
            </a>
          </Button>
        </motion.div>
      </div>
    </header>
  );
}
