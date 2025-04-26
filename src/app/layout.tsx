import type { Metadata } from "next";
import gsap from "gsap";
import "./globals.css";
import { useGSAP } from "@gsap/react";

export const metadata: Metadata = {
  title: "Next GSAP Quote",
  description: "Next.js GSAP",
};
gsap.registerPlugin(useGSAP);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
