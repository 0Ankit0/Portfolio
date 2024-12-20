"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Layout, Database } from "lucide-react";

const services = [
  {
    title: "Backend Development",
    description: "Robust server-side solutions using .NET Core and C#",
    icon: <Server className="h-8 w-8 mb-2" />,
  },
  {
    title: "Frontend Development",
    description:
      "Responsive and interactive UIs with  Next.js along with Html,CSS, and Javascript",
    icon: <Layout className="h-8 w-8 mb-2" />,
  },
  {
    title: "Database Design",
    description: "Efficient data structures using SQL Server and MongoDB",
    icon: <Database className="h-8 w-8 mb-2" />,
  },
  {
    title: "API Development",
    description: "RESTful  APIs for seamless integration",
    icon: <Code className="h-8 w-8 mb-2" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{service.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
