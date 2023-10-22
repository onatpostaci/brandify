import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { NextAuthProvider } from "./providers";

export const metadata: Metadata = {
  title: "Brandify",
  description: "Generate the best Brand Snippets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
