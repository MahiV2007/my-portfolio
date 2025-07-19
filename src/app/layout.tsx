import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // ✅ Don't forget this!

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
  authors: [{ name: "Sai Mahisrith Vemula", url: "https://saimahisrith-portfolio.vercel.app/" }],
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
      <head>
        {/* ✅ Analytics Script Start */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-YHPYXPCRS4`} // <-- Replace with your Measurement ID
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YHPYXPCRS4'); // <-- Replace with your Measurement ID again
          `}
        </Script>
        {/* ✅ Analytics Script End */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
