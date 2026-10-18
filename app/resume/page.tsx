import type { Metadata } from 'next';
import PrintButton from '@/components/PrintButton';
import { education, profile, projects, skills } from '@/data/portfolio';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume — Md. Ariful Islam',
  description: 'ATS-friendly resume of Md. Ariful Islam, Full-Stack Web Developer.',
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-24 pb-16 sm:px-6">
      <Link href="/" className="text-sm text-emerald-400 hover:underline print:hidden">
        ← Back to portfolio
      </Link>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 sm:p-10 print:border-0 print:p-0">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="mt-1 font-medium">{profile.title}</p>
            <p className="mt-2 text-sm text-slate-600">
              {profile.location} | {profile.phone} | {profile.email}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              GitHub: {profile.github} | LinkedIn: {profile.linkedin}
            </p>
          </div>
          <PrintButton />
        </div>

        <section className="mt-6">
          <h2 className="border-b pb-1 text-sm font-bold uppercase tracking-wider">
            Professional Summary
          </h2>
          <p className="mt-2 text-sm leading-6">
            Full-Stack Web Developer skilled in JavaScript, TypeScript, React and
            Next.js with hands-on experience building responsive web apps.
            Proficient in Tailwind CSS, Better Auth and MongoDB Atlas. Focused on
            clean code and intuitive UX.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="border-b pb-1 text-sm font-bold uppercase tracking-wider">
            Technical Skills
          </h2>
          <div className="mt-2 space-y-1 text-sm">
            <p><strong>Frontend:</strong> {skills.frontend.join(', ')}</p>
            <p><strong>Backend & Database:</strong> {skills.backend.join(', ')}</p>
            <p><strong>Tools:</strong> {skills.tools.join(', ')}</p>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="border-b pb-1 text-sm font-bold uppercase tracking-wider">
            Projects
          </h2>
          <div className="mt-3 space-y-4">
            {projects.map((p) => (
              <div key={p.id}>
                <h3 className="text-sm font-bold">
                  {p.title} — {p.technologies.join(", ")}
                </h3>
                <p className="text-xs text-slate-600">Live: {p.liveUrl}</p>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="border-b pb-1 text-sm font-bold uppercase tracking-wider">
            Education
          </h2>
          <div className="mt-2 space-y-2 text-sm">
            <p>
              <strong>{education.degree}</strong>{" "}
              — {education.institution}
            </p>
            <p className="text-xs text-slate-600">{education.status}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
