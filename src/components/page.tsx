"use client";

import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Suspense, lazy, useEffect } from "react";

const AboutMe = lazy(() => import("@/components/AboutMe"));
const Skills = lazy(() => import("@/components/Skills"));
const Services = lazy(() => import("@/components/Services"));
const Projects = lazy(() => import("@/components/Projects"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
import { Loader2 } from "lucide-react";

import {
  ContactSkeleton,
  TestimonialsSkeleton,
  ProjectsSkeleton,
  ServicesSkeleton,
  SkillsSkeleton,
  AboutMeSkeleton,
} from "@/components/Skeletons";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <Navbar />
      <Header />
      <main className="space-y-16 py-16">
        <Suspense fallback={<AboutMeSkeleton />}>
          <AboutMe />
        </Suspense>
        <Suspense fallback={<SkillsSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<ServicesSkeleton />}>
          <Services />
        </Suspense>
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<TestimonialsSkeleton />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <footer className="container mx-auto px-4 py-8 text-center">
        <p>
          &copy;{new Date().getFullYear()} Ankit Poudyal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
