'use client';

import Image from "next/image";
<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Selected Work
        </h2>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          Real deployed projects built with modern web technology.
        </p>
      </Reveal>

      <div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
<<<<<<< HEAD
=======
        // eslint-disable-next-line react/no-unstable-nested-components
>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59
      >
        {projects.map((p) => (
          <Reveal
            key={p.id}
            stagger
            className="group relative rounded-2xl border border-border bg-surface p-1 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="rounded-2xl overflow-hidden border border-border"
            >
              {/* Project image */}
              <div className="relative h-44 overflow-hidden bg-white">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority={p.id === 1}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(30,58,138,0.35)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent-border bg-accent-light px-2.5 py-1 text-[10px] font-semibold text-accent uppercase tracking-tighter"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm text-text-muted leading-6 line-clamp-2">
                  {p.description}
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-text-secondary text-center hover:border-accent hover:text-accent hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-text-secondary text-center hover:border-accent hover:text-accent hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
