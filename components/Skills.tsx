'use client';

import { motion } from "framer-motion";
import { Code2, Server, Wrench, Sparkles } from "lucide-react";
import { skills } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

type SkillCategory = {
  title: string;
  subtitle: string;
  items: readonly string[];
  icon: React.ReactNode;
};

const categories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    subtitle: "Responsive, accessible, and interactive user interfaces",
    items: skills.frontend,
    icon: <Code2 className="w-5 h-5 text-accent" />,
  },
  {
    title: "Backend & Architecture",
    subtitle: "Scalable APIs, databases, and server-side logic",
    items: skills.backend,
    icon: <Server className="w-5 h-5 text-accent" />,
  },
  {
    title: "Tools, Cloud & Workflow",
    subtitle: "Version control, deployments, and dev environments",
    items: skills.tools,
    icon: <Wrench className="w-5 h-5 text-accent" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
    >
      {/* Section Header */}
      <Reveal className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-border/60 bg-accent-light/50 px-3.5 py-1.5 text-xs font-medium text-accent mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Skills &amp; Technologies
        </h2>
        <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
          A focused set of modern tools, frameworks, and libraries I use to
          build and ship full-stack web applications.
        </p>
      </Reveal>

      {/* Bento Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Reveal
            key={cat.title}
            stagger
            className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-surface/80 backdrop-blur-sm p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-accent-border hover:shadow-md"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-border/60 bg-accent-light/70 transition-transform duration-300 group-hover:scale-105">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-0.5 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background/60 px-3 py-1.5 text-xs sm:text-sm font-medium text-text-secondary transition-colors duration-200 hover:border-accent-border hover:bg-accent-light/60 hover:text-text-primary cursor-default"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}