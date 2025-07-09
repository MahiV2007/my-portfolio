import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Mahisrith | Aerospace & Tech Explorer",
  description: "Official personal portfolio of Sai Mahisrith – showcasing passion in aerospace, programming, and futuristic innovation.",
  authors: [{ name: "Sai Mahisrith Vemula", url: "https://your-portfolio-url.com" }],
  keywords: ["Sai Mahisrith", "Aerospace", "Portfolio", "Developer", "Tech", "Pygame"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
