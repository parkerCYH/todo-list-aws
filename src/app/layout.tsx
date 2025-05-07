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
        <header>
          <div className="flex items-center p-9 md:gap-16">
            <span className="text-xl font-bold sm:text-3xl">Parker Map</span>
            <NavigationMenuDemo />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
