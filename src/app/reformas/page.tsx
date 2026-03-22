import type { Metadata } from "next";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeReveal from "@/components/ui/FadeReveal";
import { reformasHero, heroCounters, reformBlocks, reformas } from "@/data/reformas";
import type { Reforma } from "@/data/reformas";

export const metadata: Metadata = {
  title: "Reformas",
  description: "Las 12 reformas estructurales del gobierno Milei.",
};

function ReformCard({ reforma }: { reforma: Reforma }) {
  return (
    <FadeReveal className="mb-8">
      <div className="bg-surface-1 border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          {reforma.icon && <span className="text-2xl">{reforma.icon}</span>}
          <div>
            <span className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase">REFORMA {reforma.num}</span>
            <h3 className="font-playfair text-xl text-t1 leading-snug">{reforma.title}</h3>
            <p className="text-sm text-t2">{reforma.subtitle}</p>
          </div>
        </div>
        <div className="text-t2 text-base leading-relaxed mb-6">{reforma.desc}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-danger/10 border border-danger/20 rounded-lg p-4">
            <div className="font-bebas text-xs text-danger tracking-[var(--tracking-wide)] uppercase">ANTES</div>
            <div className="text-t2 text-sm mt-2 leading-relaxed">{reforma.antes}</div>
          </div>
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <div className="font-bebas text-xs text-success tracking-[var(--tracking-wide)] uppercase">AHORA</div>
            <div className="text-t2 text-sm mt-2 leading-relaxed">{reforma.ahora}</div>
          </div>
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase">IMPACTO</div>
            <div className="text-t2 text-sm mt-2 leading-relaxed mb-3">{reforma.impactText}</div>
            <div className="grid grid-cols-2 gap-2">
              {reforma.impactStats.map((s, i) => (
                <div key={i}>
                  <div className="font-bebas text-base text-accent">{s.val}</div>
                  <div className="text-xs text-t3">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {reforma.quote && (
          <blockquote className="border-l-[var(--border-lg)] border-accent pl-6 my-8 max-w-[700px] mt-6">
            <p className="font-playfair italic text-lg text-t1 leading-relaxed">{reforma.quote.text}</p>
            <footer className="text-sm text-t3 mt-2">— {reforma.quote.cite}</footer>
          </blockquote>
        )}
      </div>
    </FadeReveal>
  );
}

export default function ReformasPage() {
  return (
    <div className="bg-surface pt-24 pb-16">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow={reformasHero.eyebrow}
          title={reformasHero.title}
          intro={typeof reformasHero.desc === "string" ? reformasHero.desc : undefined}
          isPageTitle
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-16">
          {heroCounters.map((c, i) => (
            <FadeReveal key={i}>
              <div className="bg-surface-1 border border-border rounded-lg p-6 text-center">
                <div className="font-bebas text-2xl text-accent leading-none">{c.num}</div>
                <div className="text-xs text-t2 mt-2 uppercase tracking-wide">{c.label}</div>
              </div>
            </FadeReveal>
          ))}
        </div>

        {reformBlocks.map((block, bIdx) => (
          <div key={bIdx} className="mb-12">
            <FadeReveal>
              <div className="flex items-center gap-4 my-8">
                <span className="flex-1 h-px bg-border" />
                <div className="text-center">
                  <div className="font-bebas text-xs text-t3 tracking-[var(--tracking-wide)]">{block.title}</div>
                  <div className="text-xs text-t3">{block.subtitle}</div>
                </div>
                <span className="flex-1 h-px bg-border" />
              </div>
            </FadeReveal>
            {reformas.slice(block.range[0], block.range[1]).map((r) => (
              <ReformCard key={r.num} reforma={r} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
