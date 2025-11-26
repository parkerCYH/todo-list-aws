export default function SkillsSection() {
  const programmingSkills = [
    "React",
    "JavaScript ES6",
    "TypeScript",
    "Next.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
  ];

  const designTools = [
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
    "Git",
    "Docker",
    "AWS",
    "CI/CD",
    "Agile",
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">技能專長</h2>
          <p className="text-gray-600">
            從企畫初期到軟體開發上線，都能與團隊合作完成
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">程式語言</h3>
            <div className="flex flex-wrap gap-2">
              {programmingSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">設計工具</h3>
            <div className="flex flex-wrap gap-2">
              {designTools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
