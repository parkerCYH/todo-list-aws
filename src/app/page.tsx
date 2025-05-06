import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Todo List",
    description: "一個簡單的待辦事項列表應用程式。",
    skills: ["remix", "typescript", "tailwindcss"],
    image: "/assets/images/server-side-todolist.png",
    demoUrl: "https://remix-todo-list-eustacechengs-projects.vercel.app/",
    githubUrl: "https://github.com/parkerCYH/remix-todo-list",
  },
  {
    title: "Animation Gallery",
    description: "一個展示各種動畫效果的畫廊。",
    skills: ["gsap", "typescript", "tailwindcss"],
    image: "/assets/images/gsap.png",
    demoUrl: "https://gsap-title-demo-eustacechengs-projects.vercel.app/",
    githubUrl: "https://github.com/parkerCYH/gsap-title-demo",
  },
  {
    title: "Blog",
    description: "部落格網站",
    skills: ["SanityCMS", "nextjs", "typescript"],
    image: "/assets/images/gsap.png",
    demoUrl: "https://sanity-next-blog-eustacecheng.vercel.app/",
    githubUrl: "https://github.com/parkerCYH/sanity-next-blog",
  },
];

export default function Home() {
  return (
    <div className="">
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold">🧩 我的作品集</h1>
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
      </main>
    </div>
  );
}
