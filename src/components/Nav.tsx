"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useScrollRegistry } from "@/hooks/useScrollRegistry";
import { useEffect } from "react";

export const NavigationMenuDemo = () => {
  const { scrollTo } = useScrollRegistry();
  useEffect(() => {
    // 頁面加載後，檢查 URL 的 hash 並滾動到對應的元素
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      scrollTo(hash);
    }
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem
          className="cursor-pointer"
          onClick={() => {
            scrollTo("projects");
          }}
        >
          Projects
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
