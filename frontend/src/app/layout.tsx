import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";
import localFont from "next/font/local"
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const agrandir = localFont({
  src: [
    {
      path: "../../public/fonts/Agrandir-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-agrandir",
});


export const metadata: Metadata = {
  title: "TheChat",
  description: "TheChat is an AI-powered podcast generation platform that transforms stories, articles, and scripts into engaging podcast conversations between two AI personalities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${agrandir.variable} antialiased relative`}
      >
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
        <CustomCursor />
      </body>
    </html>
  );
}
