'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { profile, contactLinks } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

const cardMap: Record<string, { icon: string; color: string }> = {
  Email: { icon: "✉", color: "text-accent bg-accent-light border-accent-border" },
  Phone: { icon: "📞", color: "text-accent bg-accent-light border-accent-border" },
  Location: { icon: "📍", color: "text-accent bg-accent-light border-accent-border" },
  GitHub: { icon: "⬢", color: "text-text-primary bg-white border-border" },
  LinkedIn: { icon: "in", color: "text-accent bg-accent-light border-accent-border" },
};

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          Open to freelance projects, full-time roles, and collaborations. No
          form — reach me directly below.
        </p>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Direct contact cards */}
        <div className="space-y-4">
          {contactLinks.map((c) => {
            const style = cardMap[c.label];
            const isDirect = c.label === "Email" || c.label === "LinkedIn";
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left shadow-sm transition-all duration-300 ${
                  style.color
                } ${isDirect ? "bg-white hover:border-accent hover:text-accent hover:shadow-md" : "bg-surface hover:bg-white hover:border-accent hover:text-accent hover:shadow-md"}`}
              >
                <span
                  className={`shrink-0 rounded-lg flex items-center justify-center w-10 h-10 text-base font-medium ${style.color.split(" ").includes("bg-accent-light") ? "bg-accent-light text-accent" : "bg-white text-text-primary border border-border"}`}
                >
                  {style.icon}
                </span>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {c.label}
                  </p>
                  <p className="text-xs text-text-muted truncate">
                    {c.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Quick action cards */}
        <Reveal className="space-y-4">
          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full border border-accent-border bg-accent-light text-accent text-xs font-bold flex items-center justify-center">
                ⚡
              </span>
              Quick Actions
            </h3>
            <div className="grid gap-3">
              <Link
                href={'/Aruful-Islam-CV.pdf'}
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-text-primary hover:bg-white hover:border-accent hover:text-accent transition-all duration-300"
                download
              >
                Download CV / Resume (PDF)
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-text-primary hover:bg-white hover:border-accent hover:text-accent transition-all duration-300"
              >
                Send Email Directly
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-text-primary hover:bg-white hover:border-accent hover:text-accent transition-all duration-300"
              >
                View LinkedIn Profile
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-text-primary hover:bg-white hover:border-accent hover:text-accent transition-all duration-300"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
