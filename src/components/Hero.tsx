"use client";

import { useScrollRegistry } from "@/hooks/useScrollRegistry";

import { Button } from "./ui/button";

export default function Hero() {
  const { scrollTo } = useScrollRegistry();

  return (
    <section className="bg-white h-[70vh] sm:h-[100vh] flex items-center justify-center px-4 sm:px-6">
      {/* <section className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6"> */}
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hello, I&apos;m Parker
        </h1>
        <p className="text-base sm:text-xl text-gray-700 mb-6">
          I create intuitive, user-centered digital experiences that solve real
          problems.
        </p>
        <Button asChild variant="default">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("projects");
            }}
          >
            Explore My Projects
          </a>
        </Button>
      </div>
    </section>
  );
}
