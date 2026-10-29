import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import { Toaster } from "@/components/ui/sonner";
=======
>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD ARIFUL ISLAM — Full-Stack Web Developer",
  description:
    "Portfolio of MD ARIFUL ISLAM, Full-Stack Web Developer from Kurigram, Bangladesh. Next.js, TypeScript, Tailwind CSS, MongoDB.",
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
<<<<<<< HEAD
        <Toaster />
=======
>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59
      </body>
    </html>
  );
}
