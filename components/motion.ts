import { type Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 100 },
  },
};

<<<<<<< HEAD
=======
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 16, stiffness: 150 },
  },
};

>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};
<<<<<<< HEAD
=======

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 14, stiffness: 120 },
  },
};

export const hoverCard: Variants = {
  rest: { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    y: -6,
    boxShadow: "var(--color-shadow)",
    transition: { type: "spring", damping: 16, stiffness: 200 },
  },
};

export const hoverLift: Variants = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.2, ease: "easeOut" } },
};

export const pulseRing: Variants = {
  rest: { opacity: 0.6, scale: 1 },
  hover: { opacity: 1, scale: 1.05 },
};

export function reducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
>>>>>>> c3d93923d6f27d5d5e352920336ad1594d1d7b59
