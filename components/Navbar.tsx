"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const scrollPosition = window.scrollY + 140;
      let current = "#home";

      for (const link of navLinks) {
        const sectionId = link.href.replace(/^#/, "");
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            current = `#${sectionId}`;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40
      ) {
        const lastLink = navLinks[navLinks.length - 1];
        if (lastLink) current = lastLink.href;
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => activeSection === href;
  const resumeHref = profile.resume || "/Aruful-Islam-CV.pdf";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-surface/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Brand */}
        <Link
          href="#home"
          className="group flex items-center gap-2.5 rounded-lg py-1 focus:outline-none"
          onClick={() => {
            setOpen(false);
            setActiveSection("#home");
          }}
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-accent-border/70 bg-surface shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="32px"
              className="object-cover object-center"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-text-primary transition-colors group-hover:text-accent">
            Ariful
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1.5 md:flex lg:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                  setActiveSection(link.href);
                }}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-accent-light/70 font-semibold text-accent"
                    : "text-text-secondary hover:bg-surface/80 hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="/Ariful-Islam-CV.pdf"
            download
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-accent-hover hover:shadow-md"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-surface/90 px-3 py-2 text-xs font-semibold text-text-primary shadow-sm transition-colors hover:border-accent-border hover:bg-accent-light/50 md:hidden"
        >
          {open ? (
            <>
              <X className="h-4 w-4 text-accent" />
              <span>Close</span>
            </>
          ) : (
            <>
              <Menu className="h-4 w-4 text-accent" />
              <span>Menu</span>
            </>
          )}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="border-t border-border/80 bg-surface/95 backdrop-blur-md shadow-lg md:hidden">
          <div className="mx-auto max-w-7xl space-y-1.5 px-4 py-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setOpen(false);
                    setActiveSection(link.href);
                  }}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "bg-accent text-white font-semibold shadow-sm"
                      : "text-text-secondary hover:bg-accent-light/50 hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-2">
              <a
                href="/Ariful-Islam-CV.pdf"
                download
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
