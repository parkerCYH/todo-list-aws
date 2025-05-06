import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ScrollProvider from "@/components/ScrollProvider";

export default function Home() {
  return (
    <div className="">
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        <ScrollProvider>
          <Hero />
          <Projects />
        </ScrollProvider>
      </main>
    </div>
  );
}
