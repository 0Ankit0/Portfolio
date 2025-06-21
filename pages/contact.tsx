"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

interface ContactPageProps {
  theme: string | undefined;
}

export default function ContactPage({ theme }: ContactPageProps) {
  const isDarkMode = theme === "dark";

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Get In Touch
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Ready to start your next project? Let's work together to create
            something amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.a
            href="mailto:ankitpaudel.1373@gmail.com"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className={`backdrop-blur-md border transition-all duration-300 h-full ${
                isDarkMode
                  ? "bg-gray-800/80 border-gray-600 hover:bg-gray-700/80"
                  : "bg-white/80 border-gray-300 hover:bg-gray-50/80"
              }`}
            >
              <CardContent className="flex flex-col items-center space-y-4 p-8 text-center">
                <div className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-2 text-xl ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Email
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Send an Email
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ankit-poudyal-b5a431288/"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className={`backdrop-blur-md border transition-all duration-300 h-full ${
                isDarkMode
                  ? "bg-gray-800/80 border-gray-600 hover:bg-gray-700/80"
                  : "bg-white/80 border-gray-300 hover:bg-gray-50/80"
              }`}
            >
              <CardContent className="flex flex-col items-center space-y-4 p-8 text-center">
                <div className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-2 text-xl ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    LinkedIn
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Connect with me
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.a>

          <motion.a
            href="https://github.com/0Ankit0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className={`backdrop-blur-md border transition-all duration-300 h-full ${
                isDarkMode
                  ? "bg-gray-800/80 border-gray-600 hover:bg-gray-700/80"
                  : "bg-white/80 border-gray-300 hover:bg-gray-50/80"
              }`}
            >
              <CardContent className="flex flex-col items-center space-y-4 p-8 text-center">
                <div className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-2 text-xl ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    GitHub
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    View my code
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
