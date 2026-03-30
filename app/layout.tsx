import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./CustomCursor";

export const metadata: Metadata = {
  title: "Hydra - Sustainable Solutions for a Better Future",
  description:
    "Empowering businesses and communities to thrive in a low-carbon world through tailored clean energy solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
