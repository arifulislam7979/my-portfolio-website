'use client';

import {
  GraduationCap,
  MapPin,
  Sparkles,
  Calendar,
  Layers,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { education, profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

const highlights = [
  {
    icon: <Layers className="h-4 w-4 text-accent" />,
    label: "Full-Stack Next.js & TypeScript",
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-accent" />,
    label: "Auth & MongoDB Atlas APIs",
  },
  {
    icon: <Compass className="h-4 w-4 text-accent" />,
    label: "Structured & Analytical Mindset",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
    >
      {/* Section Header */}
      <Reveal className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-border/70 bg-accent-light/60 px-3.5 py-1.5 text-xs font-medium text-accent mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Analytical Thinking Meets Modern Web Engineering
        </h2>
        <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
          Blending a social science perspective with full-stack development to
          build clean, reliable, and user-focused applications.
        </p>
      </Reveal>

      {/* Main Content Grid */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
        {/* Story / Bio Column */}
        <Reveal className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-3.5 py-1.5 text-xs font-medium text-text-secondary shadow-2xs">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            <span>{profile.location}</span>
          </div>

          <div className="space-y-4">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              I&apos;m{" "}
              <span className="font-semibold text-text-primary">
                {profile.name}
              </span>
              , a Full-Stack Web Developer focused on crafting practical,
              responsive, and maintainable web products. I work across Next.js,
              TypeScript, React, and Tailwind CSS — pairing clean interfaces with
              structured backend APIs, Better Auth, and MongoDB Atlas.
            </p>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Studying Political Science alongside software engineering shapes how
              I reason through problems: I prioritize clarity, user context, and
              thoughtful engineering trade-offs before shipping features to
              production on Vercel.
            </p>
          </div>

          {/* Key Strengths Strip */}
          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-surface/80 px-3.5 py-3 shadow-2xs transition-colors hover:border-accent-border/70"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-light/70">
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-text-primary leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Academic Background Card */}
        <Reveal className="lg:col-span-5 rounded-2xl border border-border/85 bg-surface/90 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-accent-border hover:shadow-md">
          <div className="flex items-center gap-3.5 pb-5 mb-6 border-b border-border/70">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-border/60 bg-accent-light/70 text-accent">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary tracking-tight">
                Academic Background
              </h3>
              <p className="text-xs text-text-muted">
                Higher education &amp; qualifications
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Degree Item */}
            <div className="relative pl-4 border-l-2 border-accent">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h4 className="text-sm font-semibold text-text-primary">
                  B.S.S. Honours in Political Science
                </h4>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-light px-2.5 py-0.5 text-[11px] font-medium text-accent shrink-0">
                  <Calendar className="h-3 w-3" />
                  2nd Year
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary">
                Majida Adarsha Degree College, Kurigram
              </p>
              <p className="text-xs text-text-muted mt-0.5">
                National University, Bangladesh
              </p>
            </div>

            {/* HSC Item */}
            <div className="relative pl-4 border-l-2 border-border">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="text-sm font-semibold text-text-primary">
                  H.S.C (Humanities)
                </h4>
                <span className="rounded-md bg-background/80 px-2 py-0.5 text-xs font-medium text-text-muted shrink-0">
                  2024
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary">
                Ulipur M.S. School &amp; College
              </p>
              <p className="text-xs text-text-muted mt-0.5">
                Dinajpur Board · GPA 3.75
              </p>
            </div>
          </div>

          {education?.description && (
            <div className="mt-6 pt-5 border-t border-border/70">
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
                {education.description}
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}