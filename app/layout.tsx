import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import NavBar from "./NavBar";
import Footer from "@components/Footer";
import { badges } from "@data/badges";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sajjad Ali",
  description: "Sajjad Ali's Portfolio",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NavBar />
          <main className="app-shell">
            <div className="app-content">{children}</div>
          </main>
          <Footer badges={badges} />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
