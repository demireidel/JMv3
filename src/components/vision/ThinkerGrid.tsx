import FadeReveal from "@/components/ui/FadeReveal";
import type { Thinker } from "@/data/vision";

interface ThinkerGridProps {
  thinkers: Thinker[];
}

export default function ThinkerGrid({ thinkers }: ThinkerGridProps) {
  return (
    <FadeReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 my-12">
        {thinkers.map((t, i) => (
          <div key={i} className="bg-surface-1 border border-border rounded-lg p-6">
            <p className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase mb-1">{t.era}</p>
            <h4 className="font-playfair text-base text-t1 mb-2">
              {t.title}
            </h4>
            <p className="text-sm text-t2 leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </FadeReveal>
  );
}
