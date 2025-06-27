"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

interface TestimonialsPageProps {
  theme: string | undefined;
}

export default function TestimonialsPage({ theme }: TestimonialsPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isDarkMode = theme === "dark";

  const testimonials = [
    {
      name: "Sagar Adhikari",
      role: "DotNet Developer",
      company: "Insoft Research and Development",
      content:
        "If you’re looking for someone who combines expertise, dedication, and a genuine team spirit, Ankit is the ideal candidate. I’m confident he will continue to excel in his future endeavors.",
      rating: 5,
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            Testimonials
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            What clients and colleagues say about working with me.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Slider Container */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Slider */}
            <div className="overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Card
                    className={`backdrop-blur-md border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/80 border-gray-600"
                        : "bg-white/80 border-gray-300"
                    }`}
                  >
                    <CardContent className="p-8 md:p-12 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-6 h-6 text-yellow-400 fill-current"
                            />
                          )
                        )}
                      </div>
                      <blockquote
                        className={`text-lg md:text-xl mb-8 italic leading-relaxed ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        &quot;{testimonials[currentIndex].content}&quot;
                      </blockquote>
                      <div>
                        <h4
                          className={`text-xl font-semibold mb-2 ${
                            isDarkMode ? "text-white" : "text-black"
                          }`}
                        >
                          {testimonials[currentIndex].name}
                        </h4>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {testimonials[currentIndex].role} at{" "}
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full ${
                isDarkMode
                  ? "bg-gray-800/80 border-gray-600 text-gray-200 hover:bg-gray-700/80"
                  : "bg-white/80 border-gray-300 text-gray-800 hover:bg-gray-100/80"
              }`}
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full ${
                isDarkMode
                  ? "bg-gray-800/80 border-gray-600 text-gray-200 hover:bg-gray-700/80"
                  : "bg-white/80 border-gray-300 text-gray-800 hover:bg-gray-100/80"
              }`}
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gray-800 scale-125"
                    : isDarkMode
                    ? "bg-gray-600 hover:bg-gray-500"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {currentIndex + 1} of {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
