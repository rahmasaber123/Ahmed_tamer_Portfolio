import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ResponsiveGlassHeader from "./components/ResponsiveGlassHeader";

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
  title: "Ahmed Tamer - Cybersecurity & IT Professional",
  description:
    "Cybersecurity and IT professional with expertise in digital forensics, penetration testing, and system administration.",
  keywords: ["Cybersecurity", "IT Support", "Digital Forensics", "Penetration Testing", "System Administration"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white`} >
        {/* Header */}
        <ResponsiveGlassHeader /> 
        {/* Page content */}
        {children}
        {/* Footer */}
        <footer className="mt-12 sm:mt-16 border-t border-black/10 dark:border-white/10">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-400">
              <span className="text-center sm:text-left">
                © {year} Ahmed Tamer
              </span>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                <a
                  href="https://github.com/Atamer77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  GitHub
                </a>
                
                <a
                  href="https://www.linkedin.com/in/ahmed-tamer-at/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
      
    </html>
  );
}






// Headers test:
        {/* <header className="sticky top-2 sm:top-3 md:top-4 z-50 flex justify-center px-2 sm:px-4"> */}
          {/* <div className="scale-75 sm:scale-90 md:scale-100 origin-top">
            <GooeyNav
              items={[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Certifications", href: "#certifications" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ]}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={120}
              colors={[3, 0, 5]}
            />
          </div> */}
