export const profile = {
  name: "MD. ARIFUL ISLAM",
  title: "FULL-STACK WEB DEVELOPER",
  tagline:
    "Specializing in TypeScript, Next.js 14, React, Node.js, and MongoDB",
  email: "arifislam01760083176@gmail.com",
  phone: "+880 1760083176",
  location: "Ulipur, Kurigram, Bangladesh",
  github: "https://github.com/arifulislam7979",
  linkedin: "https://linkedin.com/in/arifulislam",
  avatar: "/images/my-imagee.jpeg",
  resume: "/Curriculum Vitae (5).pdf",
};
export const skills = {
  frontend: [
    "Next.js (App Router)",
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "shadcn/ui",
    "HeroUI",
    "DaisyUI",
    "Framer Motion",
    "React Hook Form & Zod",
    "HTML5 & CSS3",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "RESTful API Design",
    "MongoDB & MongoDB Atlas",
    "Mongoose ORM",
    "Better Auth",
    "JWT & Cookie Auth",
  ],
  tools: [
    "Git & GitHub",
    "Vercel & Cloud Deployment",
    "Postman",
    "GitHub Copilot & Claude Code",
    "VS Code",
  ],
} as const;

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "FIXMATE WEBSITE",
    description:
      "A full-stack service marketplace and booking platform featuring role-based access, extended user profiles, MongoDB persistence, and URL-synchronized search, category, and sorting filters.",
    image: "/images/fixmate.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Stripe",
      "MongoDB",
      "Better Auth",
    ],
    liveUrl: "https://fix-mate-client-alpha.vercel.app/",
    githubUrl: "https://github.com/arifulislam7979/Fix-Mate-client",
  },
  {
    id: 2,
    title: "STUDIO SPACE WEBSITE",
    description:
      "A peer-to-peer creative workspace and studio booking web application featuring interactive listing sliders, MongoDB data integration, and JWT authentication.",
    image: "/images/studio-space.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://studio-space-project.vercel.app/",
    githubUrl: "https://github.com/arifulislam7979/Studio-Space",
  },

  {
    id: 3,
    title: "BAZAR DOR WEBSITE",
    description:
      "A production-grade full-stack e-commerce platform with authentication, product catalog, cart, and order management built on the Next.js ecosystem.",
    image: "/images/bazar-dor.png",
    technologies: [
      "TypeScript",
      "Next.js 14",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Better Auth",
    ],
    liveUrl: "https://bazar-dor-website-eight.vercel.app/",
    githubUrl: "https://github.com/arifulislam7979/Bazar-dor-website",
  },
  {
    id: 4,
    title: "BOOKS VIBE WEBSITE",
    description:
      "A responsive admin dashboard and UI system featuring data tables, analytics cards, navigation drawers, and accessible components.",
    image: "/images/book-management.png",
    technologies: ["TypeScript", "React", "Tailwind CSS", "DaisyUI", "HeroUI"],
    liveUrl: "https://book-magement-project--one.vercel.app/",
    githubUrl: "https://github.com/arifulislam7979/first-next-project",
  },
  {
    id: 5,
    title: "FIT LOG - TRACKING SITE",
    description:
      "A workout tracker application that lets users log exercises, calculate calorie burn, and persist history via Local Storage.",
    image: "/images/fitlog-tracking.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://fit-log-pearl.vercel.app/",
    githubUrl: "https://github.com/arifulislam7979/Fit-log-project",
  },
  {
    id: 6,
    title: "BANGLA NEWS 24",
    description:
      "A Bangla news portal with dynamic article listing, category browsing, server-side data fetching, and authenticated protected routes.",
    image: "/images/bangla-bazar-24.png",
    technologies: ["Next.js", "Better Auth", "Server-Side Data Fetching"],
    liveUrl: "https://bangla-news-website.vercel.app/",
    githubUrl: "https://github.com/arifulislam7979/bangla-news-website",
  },
];

export const education = {
  degree: "B.S.S. (Honours) in Political Science",
  status: "2nd Year (In Progress)",
  institution: "Majida Adarsha Degree College, Kurigram",
  affiliation: "Affiliated with the National University, Bangladesh",
  hsc: "H.S.C (Humanities) — 2024",
  hscInstitution: "Ulipur M.S. School & College",
  hscBoard: "Board of Intermediate and Secondary Education, Dinajpur",
  hscGpa: "3.75 out of 5.00",
  description:
    "Alongside full-stack web development, I am pursuing a B.S.S. (Honours) in Political Science (2nd Year) at Majida Adarsha Degree College, Kurigram, affiliated with the National University, Bangladesh, after completing my H.S.C in 2024 from Ulipur M.S. School & College under the Dinajpur Board with a GPA of 3.75. Combining social science studies with software engineering strengthens my analytical reasoning, research habits, and structured problem-solving — directly informing how I architect and build web applications.",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const contactLinks = [
  {
    label: "Email",
    value: "arifislam01760083176@gmail.com",
    href: "mailto:arifislam01760083176@gmail.com",
    external: false,
  },
  {
    label: "Phone",
    value: "+880 1760083176",
    href: "tel:+8801760083176",
    external: false,
  },
  {
    label: "Location",
    value: "Ulipur, Kurigram, Bangladesh",
    href: "https://www.google.com/maps/search/?api=1&query=Ulipur%2C%20Kurigram%2C%20Bangladesh",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/arifulislam",
    href: "https://github.com/arifulislam7979",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arifulislam",
    href: "https://linkedin.com/in/arifulislam",
    external: true,
  },
];
