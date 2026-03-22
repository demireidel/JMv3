"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Prose from "@/components/ui/Prose";
import { pobrezaData } from "@/data/logros";

export default function PobrezaHero() {
  const d = pobrezaData;
  return (
    <div className="fade-reveal mb-16">
      {/* Top bar */}
      <div className="flex items-center gap-4 mb-6">
        <span className="bg-accent text-surface px-3 py-1 rounded-md font-bebas text-xs tracking-[var(--tracking-normal)]">{d.badge}</span>
        <div className="flex-1 h-px bg-border" />
        <span className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase">{d.topbarNum}</span>
      </div>

      <p className="text-t2 text-base leading-relaxed text-lg mb-2">{d.kicker}</p>
      <h3 className="font-playfair text-3xl text-t1 leading-tight mb-8">
        {d.headline}<span className="gold-shimmer">{d.headlineEm}</span>
      </h3>

      {/* Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {d.counters.map((c, i) => (
          <div key={i} className="bg-surface-1 border border-border rounded-lg p-6">
            <AnimatedCounter target={c.target} suffix={c.suffix} decimals={c.decimals ?? 0} label={c.label} sub={c.sub} />
          </div>
        ))}
      </div>

      {/* Narrative */}
      <div className="max-w-[800px] flex flex-col gap-5 mb-10">
        {d.narrative.map((p, i) => (
          <p key={i} className="text-t2 text-base leading-relaxed"><Prose text={p} /></p>
        ))}
      </div>

      {/* Flow cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-danger/10 border border-danger/20 rounded-lg p-4">
          <div className="text-xs text-danger font-semibold uppercase tracking-wide">{d.flowBefore.tag}</div>
          <div className="font-bebas text-3xl text-danger leading-none my-2">{d.flowBefore.big}</div>
          <p className="text-sm text-t3">{d.flowBefore.desc}</p>
        </div>
        <div className="bg-success/10 border border-success/20 rounded-lg p-4">
          <div className="text-xs text-success font-semibold uppercase tracking-wide">{d.flowAfter.tag}</div>
          <div className="font-bebas text-3xl text-success leading-none my-2">{d.flowAfter.big}</div>
          <p className="text-sm text-t3">{d.flowAfter.desc}</p>
        </div>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-3 mb-8">
        {d.pills.map((pill, i) => (
          <div key={i} className="bg-surface-1 border border-border rounded-full px-5 py-2 flex items-center gap-2">
            <span className="font-bebas text-base text-accent">{pill.val}</span>
            <span className="text-xs text-t3">{pill.lbl}</span>
          </div>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="border-l-[var(--border-lg)] border-accent pl-6 my-8 max-w-[700px]">
        <p className="font-playfair italic text-lg text-t1 leading-relaxed">{d.quote}</p>
        <footer className="text-sm text-t3 mt-2">— {d.quoteAttr}</footer>
      </blockquote>
    </div>
  );
}
