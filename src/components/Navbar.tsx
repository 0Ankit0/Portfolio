"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sections.find((section) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          return (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          );
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50 transition-colors">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold font-custom">Ankit Poudyal</div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                activeSection === item.href.substring(1)
                  ? "border-b-2 border-gray-900 dark:border-white pb-1 "
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "border-b-4 border-gray-900 dark:border-white pb-1"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
