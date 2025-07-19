import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as gtag from "../lib/gtag"; // Make sure lib/gtag.js exists

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
  description:
    "Official personal portfolio of Sai Mahisrith – showcasing passion in aerospace, programming, and futuristic innovation.",
  authors: [{ name: "Sai Mahisrith Vemula", url: "https://saimahisrith-portfolio.vercel.app/" }],
  keywords: ["Sai Mahisrith", "Aerospace", "Portfolio", "Developer", "Tech", "Pygame"],
  icons: {
    icon: "/favicon.ico",
  },
};

// Add a client wrapper to use hooks like usePathname
function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gtag.pageview(pathname);
    }
  }, [pathname]);

  return <>{children}</>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnalyticsWrapper>
          {children}
        </AnalyticsWrapper>
      </body>
    </html>
  );
}
