'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img
            src={profile.avatar}
            alt={profile.name}
            width={24}
            height={24}
            className="rounded-full border border-border bg-white p-0.5 object-cover shadow-sm"
            loading="lazy"
          />
          <span className="text-sm font-semibold text-text-primary">
            {profile.name}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-text-muted">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <span className="w-px h-3 bg-border" />
          <p>Built with Next.js + Tailwind CSS</p>
          <span className="w-px h-3 bg-border" />
          <Link
            href={profile.resume}
            className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors"
            download
          >
            Resume / CV
          </Link>
        </div>

        <div className="flex gap-5">
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </Link>
          <Link
            href="#home"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="Back to top"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
