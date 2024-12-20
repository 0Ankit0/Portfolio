import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Twitter, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <Card className="w-full max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center pb-8 pt-10">
            <CardTitle className="text-3xl font-bold tracking-tight text-gray-900">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mt-2">
              I'd love to hear from you. Here's how you can reach me...
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContactButton
                icon={<Mail className="mr-2 h-4 w-4" />}
                href="mailto:ankitpaudel.1373@gmail.com"
              >
                Email Me
              </ContactButton>
              <ContactButton
                icon={<Phone className="mr-2 h-4 w-4" />}
                href="tel:+977 9840214223"
              >
                Call Me
              </ContactButton>
              <ContactButton
                icon={<Github className="mr-2 h-4 w-4" />}
                href="https://github.com/0ankit0"
              >
                GitHub
              </ContactButton>
              <ContactButton
                icon={<Linkedin className="mr-2 h-4 w-4" />}
                href="https://www.linkedin.com/in/ankit-poudyal-b5a431288/"
              >
                LinkedIn
              </ContactButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ContactButton({
  children,
  icon,
  href,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Button
      asChild
      variant="outline"
      className="w-full bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors"
    >
      <Link
        href={href}
        target="_blank"
        className="flex items-center justify-center"
      >
        {icon}
        {children}
      </Link>
    </Button>
  );
}
