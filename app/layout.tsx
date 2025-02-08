import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Container } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

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
        <NavBar />
        <main className="p-5">
          <Providers>
            <Container>{children}</Container>
          </Providers>
        </main>
        <Footer badges={badges} />
      </body>
    </html>
  );
}
