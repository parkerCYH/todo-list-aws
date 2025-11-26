"use client";

const navItems = [
  { id: "home", label: "首頁" },
  { id: "about", label: "關於" },
  { id: "skills", label: "技能" },
  { id: "projects", label: "作品" },
  { id: "contact", label: "聯絡" },
];

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-semibold hover:text-gray-600 transition-colors cursor-pointer"
          >
            我的作品集
          </button>

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
