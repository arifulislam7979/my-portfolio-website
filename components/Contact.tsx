"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { contactLinks } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
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

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.34V10.67H6.12V17.34H8.34ZM7.23 9.75C8 9.75 8.48 9.24 8.48 8.61C8.47 7.96 8 7.47 7.25 7.47C6.5 7.47 6 7.96 6 8.61C6 9.24 6.48 9.75 7.22 9.75H7.23ZM18 17.34V13.56C18 11.53 16.92 10.59 15.48 10.59C14.32 10.59 13.8 11.23 13.51 11.68V10.67H11.3C11.33 11.15 11.3 17.34 11.3 17.34H13.51V13.62C13.51 13.42 13.53 13.22 13.59 13.08C13.75 12.68 14.11 12.27 14.72 12.27C15.51 12.27 15.83 12.87 15.83 13.75V17.34H18Z" />
    </svg>
  );
}

function getContactIcon(label: string) {
  switch (label) {
    case "Email":
      return <Mail className="h-4 w-4 text-accent" />;
    case "Phone":
      return <Phone className="h-4 w-4 text-accent" />;
    case "Location":
      return <MapPin className="h-4 w-4 text-accent" />;
    case "GitHub":
      return <GithubIcon className="h-4 w-4 text-accent" />;
    case "LinkedIn":
      return <LinkedinIcon className="h-4 w-4 text-accent" />;
    default:
      return <MessageSquare className="h-4 w-4 text-accent" />;
  }
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
    >
      {/* Section Header */}
      <Reveal className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-border/60 bg-accent-light/50 px-3.5 py-1.5 text-xs font-medium text-accent mb-4">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Contact</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
          Open to junior developer roles, freelance projects, and technical
          collaborations. Send a message or connect directly below.
        </p>
      </Reveal>

      {/* Content Grid */}
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
        {/* Direct Contact Cards */}
        <div className="lg:col-span-5 space-y-3.5">
          {contactLinks.map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer" : undefined}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border/80 bg-surface/85 backdrop-blur-sm p-4 shadow-sm transition-all duration-200 hover:border-accent-border hover:shadow-md"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-border/60 bg-accent-light/70 transition-transform duration-200 group-hover:scale-105">
                  {getContactIcon(c.label)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {c.label}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary truncate">
                    {c.value}
                  </p>
                </div>
              </div>

              {c.external && (
                <ArrowUpRight className="h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              )}
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <Reveal className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}