"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content:
      "John's expertise in .NET and React helped us deliver a complex project on time and within budget. His problem-solving skills are outstanding.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Bob Smith",
    role: "CTO, StartupX",
    content:
      "Working with John was a pleasure. His full-stack skills and attention to detail resulted in a robust and user-friendly application.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Carol Williams",
    role: "Project Manager, InnovateNow",
    content:
      "John's ability to understand complex requirements and translate them into efficient code is remarkable. He's a valuable asset to any development team.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-gray-100 flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="group">
                  <Card className="transition-transform duration-300 group-hover:scale-[1.02]">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <Avatar className="h-16 w-16 mr-6">
                          <AvatarImage
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                          />
                          <AvatarFallback>
                            {testimonials[currentIndex].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {testimonials[currentIndex].name}
                          </h3>
                          <p className="text-md text-muted-foreground">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground italic">
                        "{testimonials[currentIndex].content}"
                      </p>
                    </CardContent>
                  </Card>
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className={`w-3 h-3 rounded-full p-0 ${
                index === currentIndex ? "bg-primary" : "bg-secondary"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
