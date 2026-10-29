'use client';

<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
<<<<<<< HEAD
    const timer = setTimeout(() => {
      setYear(new Date().getFullYear());
    }, 0);
    return () => clearTimeout(timer);
=======
    setYear(new Date().getFullYear());
>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59
  }, []);

  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
<<<<<<< HEAD
          <Image
=======
          <img
>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59
            src={profile.avatar}
            alt={profile.name}
            width={24}
            height={24}
            className="rounded-full border border-border bg-white p-0.5 object-cover shadow-sm"
<<<<<<< HEAD
=======
            loading="lazy"
>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59
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
