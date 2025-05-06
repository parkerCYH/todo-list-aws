// hooks/useLocoScroll.ts
"use client";

import { RefObject, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocoScroll = (
  containerRef: RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
    // 暴露到全域

    window.scrollInstance = scroll;

    // Hash change 處理
    const handleHashChange = () => {
      const target = document.querySelector(location.hash) as HTMLElement;
      if (target) {
        scroll.scrollTo(target);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      scroll.destroy();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [containerRef]);
};
