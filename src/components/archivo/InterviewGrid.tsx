import FadeReveal from "@/components/ui/FadeReveal";
import type { Entrevista } from "@/data/archivo";

interface InterviewGridProps {
  interviews: Entrevista[];
}

export default function InterviewGrid({ interviews }: InterviewGridProps) {
  return (
    <FadeReveal>
      <div className="mb-16">
        <div className="flex items-center gap-4 my-8"><span className="flex-1 h-px bg-border" /><span className="font-bebas text-xs text-t3 tracking-[var(--tracking-wide)]">ENTREVISTAS</span><span className="flex-1 h-px bg-border" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {interviews.map((e, i) => (
            <div
              key={i}
              className={`bg-surface-1 border border-border rounded-lg p-6 ${
                e.highlight ? "bg-surface-2 border-accent" : ""
              }`}
            >
              <div className="flex justify-between mb-2">
                <span className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase">{e.date}</span>
                {e.duration && (
                  <span className="text-xs text-t3">{e.duration}</span>
                )}
              </div>
              <h4 className="font-playfair text-base text-t1 leading-snug">
                {e.outlet}
              </h4>
              {e.journalist && (
                <p className="text-xs text-celeste">{e.journalist}</p>
              )}
              <p className="text-sm text-t2 mt-2 leading-relaxed">
                {e.desc}
              </p>
              {e.impact && (
                <p className="text-xs text-accent mt-2">{e.impact}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </FadeReveal>
  );
}
