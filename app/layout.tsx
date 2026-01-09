import type { Metadata } from "next";
import { Inter_Tight, } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-intertight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safedep",
  description: "A secure and reliable package dependency manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
