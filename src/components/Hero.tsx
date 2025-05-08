"use client";

import { useScrollRegistry } from "@/hooks/useScrollRegistry";

export default function Hero() {
  const { scrollTo } = useScrollRegistry();
  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I&apos;m Parker</h1>
        <p className="text-xl text-gray-700 mb-6">
          I create intuitive, user-centered digital experiences that solve real
          problems.
        </p>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("projects");
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Explore My Projects
        </a>
      </div>
    </section>
  );
}
