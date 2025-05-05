import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "remix project",
    description: "remix todo list 的實作範例，包含了多種功能。",
    image: "/assets/images/server-side-todolist.png",
    demoUrl: "https://remix-todo-list-eustacechengs-projects.vercel.app/",
    githubUrl: "https://github.com/parkerCYH/remix-todo-list",
  },
  {
    title: "gsap animation project",
    description: "gsap 動畫的實作範例，包含了多種動畫效果。",
    image: "/assets/images/gsap.png",
    demoUrl: "https://gsap-title-demo-eustacechengs-projects.vercel.app/",
    githubUrl: "https://github.com/parkerCYH/gsap-title-demo",
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
