export default function Hero() {
  return (
    <section className="bg-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I&apos;m Parker</h1>
        <p className="text-xl text-gray-700 mb-6">
          A Software Engineer specializing in React and Python.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
