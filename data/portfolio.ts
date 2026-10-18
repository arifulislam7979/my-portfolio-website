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
    "TypeScript & JavaScript (ES6+)",
    "React.js",
    "Next.js 14 (App Router)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "DaisyUI",
    "HeroUI",
    "Component Design",
    "Responsive Web & Mobile UI Design",
  ],
  backend: [
    "Node.js",
    "Express.js (TypeScript)",
    "MongoDB Atlas & Mongoose ORM",
    "RESTful API Architecture & Integration",
    "Better Auth",
    "JWT & Cookie Auth",
    "Database CRUD & Data Pipelines",
  ],
  tools: [
    "Git",
    "GitHub & Version Control",
    "Vercel & Cloud Deployment",
    "Postman API Testing & Debugging",
    "NPM",
    "Environment Variables",
    "VS Code",
  ],
  languages: ["Bangla (Native)", "English (Intermediate / Conversational)"],
};

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
    id: 2,
    title: "BOOKS VIBE WEBSITE",
    description:
      "A responsive admin dashboard and UI system featuring data tables, analytics cards, navigation drawers, and accessible components.",
    image: "/images/book-management.png",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "HeroUI",
    ],
    liveUrl: "https://book-magement-project--one.vercel.app/",
    githubUrl: "https://github.com/arifulislam7979/first-next-project",
  },
  {
    id: 3,
    title: "FIT LOG - TRACKING SITE",
    description:
      "A workout tracker application that lets users log exercises, calculate calorie burn, and persist history via Local Storage.",
    image: "/images/fitlog-tracking.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://fit-log-pearl.vercel.app/",
    githubUrl: "https://github.com/arifulislam7979/Fit-log-project",
  },
  {
    id: 4,
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
  degree: "B.S.S. Honours in Political Science",
  status: "2nd Year — Running",
  institution: "Majida Adarsha Degree College, Kurigram",
  affiliation: "Affiliated with National University, Bangladesh",
  hsc: "H.S.C (2024) — Ulipur M.S. School & College",
  hscBoard: "Dinajpur Board — GPA 3.75",
  description:
    "Alongside full-stack web development, I am currently pursuing a B.S.S. Honours in Political Science (2nd Year) at Majida Adarsha Degree College, Kurigram, affiliated with the National University, Bangladesh. I completed my H.S.C in 2024 from Ulipur M.S. School & College (Dinajpur Board) with a GPA of 3.75. Balancing a social science perspective with software engineering fundamentals strengthens my analytical problem-solving, research, and structured thinking — directly shaping how I design and build products.",
};

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
