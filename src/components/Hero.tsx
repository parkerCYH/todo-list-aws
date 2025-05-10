"use client";

import { useScrollRegistry } from "@/hooks/useScrollRegistry";
import { Button } from "./ui/button";

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
