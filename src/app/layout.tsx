import type { Metadata } from "next";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Parker Map",
  description: "All about Parker's Map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between sm:justify-normal p-4 sm:p-9 sm:gap-16">
          <span className="text-xl font-bold sm:text-3xl">Parker Map</span>
          <NavigationMenuDemo />
        </header>
        {children}
      </body>
    </html>
  );
}
