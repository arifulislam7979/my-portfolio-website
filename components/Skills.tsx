'use client';

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

type SkillCategory = {
  title: string;
  items: string[];
  color: string;
  icon: string;
};

const categories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    items: skills.frontend,
    color: "blue",
    icon: "<",
  },
  {
    title: "Backend Development",
    items: skills.backend,
    color: "indigo",
    icon: "/",
  },
  {
    title: "Tools & Workflow",
    items: skills.tools,
    color: "violet",
    icon: "⌘",
  },
  {
    title: "Languages",
    items: skills.languages,
    color: "emerald",
    icon: "A",
  },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-3xl text-center mb-20 sm:mb-24">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Skillset
        </h2>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          Technologies and tools I use to build modern, production-ready web
          applications.
        </p>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <Reveal
            key={cat.title}
            stagger
            className="group relative rounded-2xl border border-border bg-surface p-7 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 text-text-primary bg-accent-light border border-accent-border/50"
            >
              <span className="text-lg">{cat.icon}</span>
            </motion.div>
            <h3 className="text-base font-semibold text-text-primary mb-3">
              {cat.title}
            </h3>
            <ul className="space-y-2.5">
              {cat.items.map((skill) => (
                <motion.li
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between rounded-lg border border-transparent bg-white/60 px-3 py-2 text-sm text-text-secondary transition-all duration-200 group-hover:border-accent-border group-hover:bg-accent-light group-hover:text-text-primary"
                >
                  <span>{skill}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
