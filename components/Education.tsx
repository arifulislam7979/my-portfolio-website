import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Education
        </h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          My academic journey in political science alongside web development.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {education.degree}
        </h3>
        <p className="text-sm text-slate-600 mb-1">
          {education.institution}
        </p>
        <p className="text-xs text-slate-500 mb-4">
          {education.status}
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          {education.description}
        </p>
      </div>
    </section>
  );
}
