"use client";

const skills = [
  { name: "C#", level: 90 },
  { name: ".NET Core", level: 85 },
  { name: "MS SQL", level: 80 },
  { name: "React", level: 75 },
  { name: "Next.js", level: 70 },
  { name: "MongoDB", level: 65 },
  { name: "HTML/CSS", level: 85 },
  { name: "JavaScript", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-16 bg-secondary">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium">{skill.name}</span>
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-primary h-2.5 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
