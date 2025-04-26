import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next GSAP Quote",
  description: "Next.js GSAP",
};

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
