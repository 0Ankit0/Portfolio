"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/photo.jpg"
            alt="John Doe"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            With over a year of experience in fullstack development, I
            specialize in creating robust and scalable applications using .NET
            technologies and modern JavaScript frameworks. My passion lies in
            solving complex problems and delivering high-quality software
            solutions that make a real impact.
          </p>
          <p className="text-lg mb-4">
            <span>
              My expertise spans from backend development with C# and .NET Core
              to frontend development with React and Next.js. I'm proficient in
              both SQL and NoSQL databases, ensuring that I can choose the right
              tool for each unique project.
            </span>
          </p>
          <p className="text-lg">
            I'm always eager to learn new technologies and methodologies,
            keeping myself at the forefront of web development. My goal is to
            create efficient, user-friendly applications that not only meet but
            exceed client expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
