'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { fadeInUp } from "@/components/motion";
import { profile } from "@/data/portfolio";

const coreStack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
];

const displayName = "MD. ARIFUL ISLAM";
const nameChars = Array.from(displayName);

const nameContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.15,
    },
  },
};

const charVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24 sm:pt-32 sm:pb-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Content Column */}
        <motion.div
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-border/70 bg-accent-light/60 px-4 py-1.5 text-xs font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>Available for Junior Developer Roles · {profile.location}</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-[3.4rem] leading-[1.12]">
              <span className="block sm:inline">Hi, I&apos;m </span>

              {prefersReducedMotion ? (
                <span className="relative inline-block text-accent">
                  {displayName}
                </span>
              ) : (
                <motion.span
                  aria-label={displayName}
                  variants={nameContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: "some" }}
                  className="relative inline-block text-accent"
                >
                  <span className="inline-flex flex-wrap justify-center lg:justify-start">
                    {nameChars.map((char, index) => (
                      <motion.span
                        key={`${char}-${index}`}
                        variants={charVariants}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </span>

                  {/* Subtle Underline Accent */}
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, amount: "some" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block h-1 w-full origin-left rounded-full bg-gradient-to-r from-accent via-accent/70 to-transparent mt-1.5"
                  />
                </motion.span>
              )}
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-text-secondary">
              {profile.title}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {profile.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-accent-hover hover:shadow-md"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="/Ariful-Islam-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border/90 bg-surface/90 px-6 py-3.5 text-sm font-semibold text-text-primary shadow-sm transition-all duration-300 hover:border-accent-border hover:bg-accent-light/50"
            >
              <Download className="w-4 h-4 text-accent" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-6 border-t border-border/60">
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-medium text-text-muted mb-3">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Core Stack</span>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface/80 px-3 py-1.5 text-xs font-medium text-text-secondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Profile Image Column */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          transition={{ delay: 0.15 }}
        >
          <div className="relative">
            {/* Soft Ambient Glow */}
            <div
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent/25 via-accent/10 to-transparent blur-2xl"
              aria-hidden="true"
            />

            {/* Avatar Frame */}
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 overflow-hidden rounded-full border-2 border-accent-border/70 bg-surface shadow-lg ring-4 ring-surface/60">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}