"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/utils/cn";

interface QuoteProps {
  text: string;
}
const START_QUOTE = "\u201C";
const END_QUOTE = "\u201D";

const Quote = ({ text }: QuoteProps) => {
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = quoteRef.current?.querySelectorAll(".letter");
    if (letters) {
      gsap.fromTo(
        letters,
        {
          x: 80,
          y: 50,
          z: -300,
          rotateX: -90,
          rotate: -35,
          scaleY: 0.01,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          z: 0,
          rotateX: 0,
          rotate: 0,
          scaleY: 1,
          stagger: {
            each: 0.03,
          },
        }
      );
    }
  }, [text]);
  const chars = [START_QUOTE, ...text.split(""), END_QUOTE];
  return (
    <div
      ref={quoteRef}
      className="text-left relative text-white text-[48px] max-w-[720px] "
    >
      {chars.map((char, index) => (
        <span
          key={index}
          className={cn(
            "letter inline-block transform-3d origin-[0%_100%] transition-all duration-[1200] ease-[cubic-bezier(0.245, 0.495, 0, 0.99)] ",
            "opacity-0",
            // index === 0 && "absolute left-[-25px]"
            "first:absolute first:left-[-25px]"
          )}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default Quote;
