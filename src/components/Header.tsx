"use client";
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Crafting Digital Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Fullstack .NET Developer turning ideas into robust, scalable solutions
        </p>
        <div className="flex space-x-4">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild>
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4 text-white" /> Download CV
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
