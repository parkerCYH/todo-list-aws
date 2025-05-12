"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useScrollRegistry } from "@/hooks/useScrollRegistry";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const NavigationMenuDemo = () => {
  const { scrollTo } = useScrollRegistry();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      scrollTo(hash);
    }
  }, []);

  const handleClick = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <div className="flex">
      {/* Desktop Menu */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem
            className="cursor-pointer"
            onClick={() => handleClick("projects")}
          >
            Projects
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Hamburger */}
      <div className="block md:hidden relative">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md border"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md p-4 z-50">
            <div
              className="cursor-pointer py-2 px-2"
              onClick={() => handleClick("projects")}
            >
              Projects
            </div>
            {/* 更多項目也可以加 */}
          </div>
        )}
      </div>
    </div>
  );
};
