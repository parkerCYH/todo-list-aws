"use client";

import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useLocoScroll } from "@/hooks/useLocoScroll";

// Extend the Window interface to include scrollInstance
declare global {
  interface Window {
    scrollInstance?: LocomotiveScroll;
  }
}

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLocoScroll(containerRef);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
