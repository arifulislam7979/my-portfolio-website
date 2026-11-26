'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    const timer = setTimeout(() => {
      setYear(new Date().getFullYear());
    }, 0);
    return () => clearTimeout(timer);
  }, []);


  return (
    <footer className="border-t border-border/80 bg-surface/90 backdrop-blur-sm">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand */}
          <div className="flex items-center justify-center lg:justify-start gap-2.5">
            <div className="relative h-7 w-7 overflow-hidden rounded-full border border-accent-border/70 bg-surface shadow-sm">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="28px"
                className="object-cover object-center"
              />
            </div>
            <span className="text-sm font-semibold tracking-tight text-text-primary">
              {profile.name}
            </span>
          </div>

          {/* Copyright & Stack */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-text-muted text-center">
            <p>© {year} {profile.name}. All rights reserved.</p>
            <span className="hidden sm:inline-block h-3 w-px bg-border" />
            <p>Built with Next.js &amp; Tailwind CSS</p>
          </div>

          {/* Action & Social Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4 text-xs font-medium">
            <a
              href="/Ariful-Islam-CV.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-lg border border-accent-border/60 bg-accent-light/60 px-3 py-1.5 text-accent transition-colors hover:bg-accent hover:text-white"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume / CV</span>
            </a>

            {profile.github && (
              <Link
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-2.5 py-1.5 text-text-secondary transition-colors hover:bg-accent-light/50 hover:text-accent"
                aria-label="GitHub"
              >
                GitHub
              </Link>
            )}

            {profile.linkedin && (
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-2.5 py-1.5 text-text-secondary transition-colors hover:bg-accent-light/50 hover:text-accent"
                aria-label="LinkedIn"
              >
                LinkedIn
              </Link>
            )}

            <Link
              href="#home"
              className="inline-flex items-center gap-1 rounded-lg border border-border/80 bg-background/60 px-2.5 py-1.5 text-text-secondary transition-colors hover:border-accent-border hover:text-accent"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}