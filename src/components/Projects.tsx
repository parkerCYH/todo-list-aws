"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollRegistry } from "@/hooks/useScrollRegistry";

export const projects = [
  {
    title: "Todo List",
    description: "A simple todo list app.",
    skills: ["Remix", "Typescript", "TailwindCSS"],
    image: "/assets/images/server-side-todolist.png",
    demoUrl: "https://remix-todo-list-eustacechengs-projects.vercel.app/",
    githubUrl: "https://github.com/parkerCYH/remix-todo-list",
  },
  {
    title: "Animation Gallery",
    description: "An animation gallery showcasing various animations.",
    skills: ["gsap", "Typescript", "TailwindCSS"],
    image: "/assets/images/gsap.png",
    demoUrl: "https://gsap-title-demo-eustacechengs-projects.vercel.app/",
    githubUrl: "https://github.com/parkerCYH/gsap-title-demo",
  },
  {
    title: "News Website",
    description: "News, blog, and article website.",
    skills: ["SanityCMS", "NextJS", "Typescript"],
    image: "/assets/images/parker-daily-news.png",
    demoUrl: "https://sanity-next-blog-eustacechengs-projects.vercel.app/",
    githubUrl: "https://github.com/parkerCYH/sanity-next-blog",
  },
];

export default function Projects() {
  const { registerRef } = useScrollRegistry();

  return (
    <section ref={registerRef("projects")} className="bg-white py-20">
      <h1 className="text-3xl font-bold text-center mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-1">{project.description}</p>
            <div className="my-4">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <Button asChild variant="default">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Demo
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💻 GitHub
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
