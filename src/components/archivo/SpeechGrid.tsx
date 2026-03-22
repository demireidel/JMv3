import FadeReveal from "@/components/ui/FadeReveal";
import type { Discurso } from "@/data/archivo";

interface SpeechGridProps {
  speeches: Discurso[];
}

export default function SpeechGrid({ speeches }: SpeechGridProps) {
  return (
    <FadeReveal>
      <div className="mb-16">
        <div className="flex items-center gap-4 my-8"><span className="flex-1 h-px bg-border" /><span className="font-bebas text-xs text-t3 tracking-[var(--tracking-wide)]">DISCURSOS</span><span className="flex-1 h-px bg-border" /></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {speeches.map((d, i) => (
            <div
              key={i}
              className={`bg-surface-1 border border-border rounded-lg p-6 ${
                d.keynote ? "bg-surface-2 border-accent" : ""
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase">{d.date}</span>
                {d.duration && (
                  <span className="text-xs text-t3">{d.duration}</span>
                )}
              </div>
              <h4 className="font-playfair text-base text-t1 leading-snug mb-1">
                {d.title}
              </h4>
              <p className="text-xs text-celeste">{d.location}</p>
              <p className="text-sm text-t2 mt-2 leading-relaxed">
                {d.desc}
              </p>
              {d.frase && (
                <p className="font-playfair italic text-sm text-t1 mt-3 border-l-2 border-accent pl-3">
                  {d.frase}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </FadeReveal>
  );
}
