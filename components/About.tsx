'use client';

import { education, profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-3xl text-center mb-20 sm:mb-24">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          About Me
        </h2>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          Blending a social science perspective with software engineering
          fundamentals to build clean, analytical, and scalable web
          experiences.
        </p>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text column */}
        <Reveal className="space-y-6">
          <p className="text-lg text-text-secondary leading-relaxed">
            I&apos;m <span className="font-semibold text-text-primary">{profile.name}</span>,
            a Full-Stack Web Developer based in {profile.location}. I
            specialize in the Next.js ecosystem, TypeScript, React, and Tailwind
            CSS — building products from clean UI to secure backend, with
            experience in Better Auth, MongoDB Atlas, and server components.
          </p>

          <p className="text-lg text-text-secondary leading-relaxed">
            I completed my H.S.C in 2024 from <span className="font-semibold">
              Ulipur M.S. School &amp; College
            </span>{" "}
            (Dinajpur Board) with a GPA of 3.75, and I am currently pursuing a{" "}
            <span className="font-semibold">
              B.S.S. Honours in Political Science (2nd Year — Running)
            </span>{" "}
            at <span className="font-semibold">Majida Adarsha Degree College,
            Kurigram</span>, affiliated with the National University,
            Bangladesh.
          </p>

          <p className="text-lg text-text-secondary leading-relaxed">
            Balancing social science perspectives with software engineering
            fundamentals strengthens my analytical problem-solving, research,
            and structured thinking — directly shaping how I design and build
            products. I am currently focused on shipping production-ready
            applications on Vercel.
          </p>
        </Reveal>

        {/* Academic card */}
        <Reveal
          className="rounded-2xl border border-border bg-surface p-8 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full border border-accent-border bg-accent-light text-accent text-xs font-bold flex items-center justify-center">
              🎓
            </span>
            Academic Background
          </h3>
          <div className="space-y-5">
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-1">
                B.S.S. Honours in Political Science
              </h4>
              <p className="text-xs text-text-muted">
                Majida Adarsha Degree College, Kurigram
              </p>
              <p className="text-xs text-text-muted">
                Affiliated with National University, Bangladesh
              </p>
              <p className="text-xs text-text-muted mt-1">
                2nd Year — Running
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <h4 className="text-sm font-semibold text-text-primary mb-1">
                H.S.C (2024)
              </h4>
              <p className="text-xs text-text-muted">
                Ulipur M.S. School &amp; College
              </p>
              <p className="text-xs text-text-muted">
                Dinajpur Board — GPA 3.75
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-text-secondary leading-relaxed italic">
              {education.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
