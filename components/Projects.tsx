'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
    >
      {/* Section Header */}
      <Reveal className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-border/60 bg-accent-light/50 px-3.5 py-1.5 text-xs font-medium text-accent mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Portfolio Showcase</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Selected Work
        </h2>
        <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
          Real-world web applications built, shipped, and deployed using modern
          frontend and full-stack technologies.
        </p>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, index) => (
          <Reveal
            key={p.id}
            stagger
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-surface/85 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-accent-border hover:shadow-lg"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
              className="flex h-full flex-col justify-between"
            >
              <div>
                {/* Project Preview Image */}
                <div className="relative h-48 w-full overflow-hidden border-b border-border/70 bg-background/60">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority={index === 0}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-text-secondary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold text-text-primary tracking-tight transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-accent-hover"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-border/90 bg-background/70 px-4 py-2.5 text-xs font-semibold text-text-primary transition-all duration-200 hover:border-accent-border hover:bg-accent-light/60 hover:text-accent"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}