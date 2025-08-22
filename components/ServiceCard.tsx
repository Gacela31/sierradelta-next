import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  bullets: string[];
};

export default function ServiceCard({ icon, title, bullets }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 text-slate-600">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-slate-600 text-sm leading-relaxed">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
