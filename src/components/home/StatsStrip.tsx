"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 57, suffix: "% → 27%", label: "Pobreza", sub: "10M+ salieron de la pobreza en menos de 2 años" },
  { target: 25.5, suffix: "% → 2,4%", decimals: 1, label: "Inflación mensual", sub: "De 17.000% anualizada a ~26%" },
  { target: 123, suffix: " años", label: "Primer superávit", sub: "Primer presupuesto equilibrado en 123 años" },
  { target: 652, suffix: " pts", label: "Riesgo país", sub: "De 2.000+ a 652 — USD 55.000M en inversiones" },
];

export default function StatsStrip() {
  return (
    <section className="bg-surface py-16">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-surface-1 border border-border rounded-lg p-6 fade-reveal">
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
                label={stat.label}
                sub={stat.sub}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
