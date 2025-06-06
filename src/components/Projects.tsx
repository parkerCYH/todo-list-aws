'use client';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollRegistry } from '@/hooks/useScrollRegistry';

export const projects = [
    {
        title: 'Todo List',
        description: 'A simple todo list app.',
        skills: ['Remix', 'Typescript', 'TailwindCSS'],
        image: '/assets/images/server-side-todolist.png',
        demoUrl: 'https://remix-todo-list-eustacechengs-projects.vercel.app/',
        githubUrl: 'https://github.com/parkerCYH/remix-todo-list',
    },
    {
        title: 'Animation Gallery',
        description: 'An animation gallery showcasing various animations.',
        skills: ['gsap', 'Typescript', 'TailwindCSS'],
        image: '/assets/images/gsap.png',
        demoUrl: 'https://gsap-title-demo-eustacechengs-projects.vercel.app/',
        githubUrl: 'https://github.com/parkerCYH/gsap-title-demo',
    },
    {
        title: 'News Website',
        description: 'News, blog, and article website.',
        skills: ['SanityCMS', 'NextJS', 'Typescript'],
        image: '/assets/images/parker-daily-news.png',
        demoUrl: 'https://sanity-next-blog-eustacechengs-projects.vercel.app/',
        githubUrl: 'https://github.com/parkerCYH/sanity-next-blog',
    },
];

export default function Projects() {
    const { registerRef } = useScrollRegistry();

    return (
        <section ref={registerRef('projects')} className="bg-white py-10">
            <h1 className="mb-8 text-center text-3xl font-bold">Projects</h1>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl border p-4 shadow-sm transition hover:shadow-md"
                    >
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p className="mt-1 text-gray-600">{project.description}</p>
                        <div className="my-4">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={400}
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="my-2 flex flex-wrap gap-2">
                            {project.skills.map(skill => (
                                <Badge key={skill} variant="outline">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <Button asChild variant="default">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
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
