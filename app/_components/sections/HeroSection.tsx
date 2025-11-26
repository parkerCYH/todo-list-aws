"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/25942074"
              alt="鄭雲修"
            />
            <AvatarFallback className="text-2xl">鄭雲修</AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            嗨，我是 鄭雲修
          </h1>
          <p className="text-xl text-gray-600">
            全端開發者 | UI/UX 設計師 | 創意工作者
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            熱愛創造優雅的數位體驗，專注於打造直觀且美觀的網頁應用程式
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="font-medium"
            onClick={() => scrollToSection("contact")}
          >
            聯絡我
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-medium"
            onClick={() => scrollToSection("projects")}
          >
            查看作品
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <GitHubLogoIcon className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInLogoIcon className="w-6 h-6" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
