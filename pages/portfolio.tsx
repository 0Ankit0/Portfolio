"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import HomePage from "./home";
import AboutPage from "./about";
import SkillsPage from "./skills";
import ServicesPage from "./services";
import ProjectsPage from "./projects";
import TestimonialsPage from "./testimonials";
import ContactPage from "./contact";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  // Ensure component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  // Intersection Observer for section highlighting on scroll
  useEffect(() => {
    if (!mounted) return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is near viewport center
      threshold: 0.1, // Section must be at least 10% visible
    };

    let currentActiveSection = "home";

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let maxRatio = 0;
      let mostVisibleSection: string | null = null;
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      }
      if (mostVisibleSection && mostVisibleSection !== currentActiveSection) {
        currentActiveSection = mostVisibleSection;
        setActiveSection(mostVisibleSection);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const sections = [
      "home",
      "about",
      "skills",
      "services",
      "projects",
      "testimonials",
      "contact",
    ];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [mounted]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Section refs for scroll only
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref && ref.current) {
      // Close mobile menu first
      setIsMenuOpen(false);
      // Small delay to ensure menu closes before scrolling
      setTimeout(() => {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
      setActiveSection(section);
    } else {
      // Fallback: try to find element by ID
      const element = document.getElementById(section);
      if (element) {
        setIsMenuOpen(false);
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
        setActiveSection(section);
      }
    }
  };

  const pages = [
    "home",
    "about",
    "skills",
    "services",
    "projects",
    "testimonials",
    "contact",
  ];

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const isDarkMode = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
          isDarkMode
            ? "bg-black/20 border-white/10"
            : "bg-white/20 border-black/10"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.button
            onClick={() => scrollToSection("home")}
            className={`text-2xl font-bold transition-colors ${
              isDarkMode
                ? "text-white hover:text-gray-200"
                : "text-black hover:text-gray-800"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Ankit Poudyal
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {pages.map((page) => (
              <motion.button
                key={page}
                onClick={() => scrollToSection(page)}
                className={`relative px-4 py-2 capitalize transition-all duration-200 ${
                  activeSection === page
                    ? isDarkMode
                      ? "text-white font-semibold"
                      : "text-black font-semibold"
                    : isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {page}
              </motion.button>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`hidden md:block p-2 rounded-full transition-colors ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className={`p-2 transition-colors ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`md:hidden backdrop-blur-md ${
                isDarkMode ? "bg-black/90" : "bg-white/90"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {pages.map((page) => (
                  <button
                    key={page}
                    onClick={() => scrollToSection(page)}
                    className={`block w-full text-left px-4 py-3 rounded-lg capitalize transition-all duration-200 ${
                      activeSection === page
                        ? isDarkMode
                          ? "text-white bg-gray-800 font-semibold"
                          : "text-black bg-gray-200 font-semibold"
                        : isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        : "text-gray-600 hover:text-black hover:bg-gray-200/50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* All Sections */}
      {pages.map((page) => (
        <section
          key={page}
          id={page}
          ref={sectionRefs[page as keyof typeof sectionRefs]}
        >
          {page === "home" && (
            <HomePage theme={theme} scrollToSection={scrollToSection} />
          )}
          {page === "about" && <AboutPage theme={theme} />}
          {page === "skills" && <SkillsPage theme={theme} />}
          {page === "services" && <ServicesPage theme={theme} />}
          {page === "projects" && <ProjectsPage theme={theme} />}
          {page === "testimonials" && <TestimonialsPage theme={theme} />}
          {page === "contact" && <ContactPage theme={theme} />}
        </section>
      ))}

      {/* Footer */}
      <footer
        className={`py-8 border-t transition-colors ${
          isDarkMode
            ? "bg-black/40 border-white/10"
            : "bg-white/40 border-black/10"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <p className={`${isDarkMode ? "text-white/60" : "text-black/60"}`}>
            © {new Date().getFullYear()} Ankit Poudyal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
