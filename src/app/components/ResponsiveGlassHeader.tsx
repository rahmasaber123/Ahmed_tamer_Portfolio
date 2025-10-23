"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function BlueHeaderHero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const setFromHash = () => setActive(window.location.hash || "#home");
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 sm:h-24 backdrop-blur">
      {/* --- Header --- */}
      <div className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-between items-center px-6">
        
        {/* --- Mobile Menu Button (on the left) --- */}
        <button
          className="pointer-events-auto md:hidden inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <Menu className="mr-2 h-5 w-5" /> Menu
        </button>

        {/* --- Desktop Nav (centered) --- */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-8 rounded-full px-6 py-3 mx-auto">
          {navLinks.map((l) => {
            const isActive = active === l.href || (active === "#home" && l.href === "#home");
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.href)}
                className={[
                  "text-base transition font-medium",
                  isActive
                    ? "backdrop-brightness-70 text-white rounded-full px-4 py-2 shadow-lg shadow-black/20"
                    : "text-white/50 hover:text-white",
                ].join(" ")}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* --- Mobile Panel --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="absolute left-1/2 top-8 w-[90%] -translate-x-1/2 rounded-2xl border border-white/15 bg-blue-900 p-4 backdrop-blur-2xl shadow-2xl"
            >
              <div className="mb-3 flex items-center justify-between">
                <button
                  className="text-white"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation"
                >
                  {/* <X className="h-6 w-6" /> */}
                </button>
              </div>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => {
                        setActive(l.href);
                        setMobileOpen(false);
                      }}
                      className={[
                        "block rounded-xl px-3 py-2 text-white/90 transition",
                        active === l.href
                          ? "backdrop-brightness-90 text-slate-900"
                          : "hover:bg-white/60 hover:text-white",
                      ].join(" ")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
