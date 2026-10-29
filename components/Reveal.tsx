'use client';

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

/**
 * Reveals its children with a fade-in + slide-up when they enter the viewport.
 * Animates only once (`viewport: { once: true }`). Fully respects
 * prefers-reduced-motion by rendering children immediately without animation.
 */
export default function Reveal({
  children,
  className = "",
  stagger = false,
}: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true }}
      variants={stagger ? staggerContainer : fadeInUp}
    >
      {children}
    </motion.div>
  );
}
