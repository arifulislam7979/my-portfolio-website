'use client';

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import { navLinks, profile } from "@/data/portfolio";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect active section by scroll position
  const handleScroll = useCallback(() => {
    for (const [key, ref] of Object.entries(sectionRefs.current)) {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          setActiveSection(key);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isActive = (href: string) => activeSection === href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "shadow-sm border-b border-border"
          : ""
      }`}
    >
      <nav
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 ${
          scrolled ? "bg-surface/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* Brand */}
        <Link
          href="#home"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={32}
            height={32}
            className="rounded-full border border-border bg-white p-0.5 object-cover shadow-sm"
            loading="lazy"
          />
          <span className="font-bold tracking-tight text-lg text-text-primary">
            Ariful
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors relative px-3 py-1.5 rounded-lg"
              onClick={() => setOpen(false)}
              onMouseEnter={() => {}}
            >
              <span
                className={`block text-sm font-medium transition-colors duration-200 ${
                  isActive(l.href)
                    ? "text-text-primary"
                    : "text-text-secondary"
                }`}
              >
                {l.label}
              </span>
              {isActive(l.href) && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full" />
              )}
            </Link>
          ))}
          <a
            href={'/Aruful-Islam-CV.pdf'}
            className="inline-flex items-center gap-2 rounded-xl border border-accent-border bg-accent px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-accent-hover hover:shadow-accent transition-all duration-300"
            download
          >
            <span className="text-[10px]">↓</span>
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-text-secondary hover:bg-white/60 md:hidden transition-colors"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-border bg-surface/95 backdrop-blur-md md:hidden">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-lg px-4 py-2.5 text-sm block transition-colors duration-200 ${
                  isActive(l.href)
                    ? "bg-accent text-white font-semibold"
                    : "text-text-secondary hover:bg-white/60 hover:text-text-primary"
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={profile.resume}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-center text-white border border-accent-border bg-accent hover:bg-accent-hover transition-colors"
              download
            >
              Download Resume / CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
