'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/motion";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-32 sm:pt-32 sm:pb-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<<<<<<< HEAD
=======
        {/* Content column */}
>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59
        <motion.div
          className="space-y-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-light px-4 py-1.5 text-[11px] font-semibold text-accent uppercase tracking-wider">
            Available for work · {profile.location}
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl leading-[1.05]">
            Hi, I&apos;m <span className="text-accent">MD. ARIFUL ISLAM</span>
          </h1>

          <p className="text-xl font-semibold text-text-secondary sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-4 text-lg text-text-muted leading-relaxed max-w-xl sm:max-w-none">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-xl border border-accent border-accent bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover hover:shadow-accent transition-all duration-300"
            >
              View Projects
            </Link>
            <a
              href={'/Aruful-Islam-CV.pdf'}
              className="rounded-xl border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text-primary hover:bg-white hover:shadow-md hover:border-accent transition-all duration-300"
              download
            >
              Download Resume
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 text-xs text-text-muted">
            {[
              "Next.js 14",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface px-3 py-1.5 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Profile image column */}
        <motion.div
          className="flex justify-center lg:justify-end"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative inline-block">
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent to-accent/60 blur-[60px] opacity-40 animate-pulse"
              aria-hidden
            />
            <div className="relative rounded-full overflow-hidden border-2 border-border bg-white shadow-lg ring-1 ring-text-primary/5">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={400}
                height={400}
                className="w-48 h-48 object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
