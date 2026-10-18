'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 print:hidden"
    >
      Print / Save PDF
    </button>
  );
}
