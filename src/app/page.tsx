import Hero from "@/components/Hero";

import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <Hero />
      <Projects />
    </main>
  );
}
