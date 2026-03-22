import FadeReveal from "@/components/ui/FadeReveal";
import type { Paper } from "@/data/archivo";

interface PaperListProps {
  papers: Paper[];
}

export default function PaperList({ papers }: PaperListProps) {
  return (
    <FadeReveal>
      <div className="mb-16">
        <div className="flex items-center gap-4 my-8"><span className="flex-1 h-px bg-border" /><span className="font-bebas text-xs text-t3 tracking-[var(--tracking-wide)]">PAPERS ACADÉMICOS</span><span className="flex-1 h-px bg-border" /></div>
        <div className="grid gap-3">
          {papers.map((paper, i) => (
            <div
              key={i}
              className="flex gap-4 px-5 py-4 bg-surface-1 rounded-md border border-border items-start"
            >
              <span className="px-2 py-0.5 rounded-sm bg-accent/12 text-accent font-bebas text-xs tracking-wide whitespace-nowrap">
                {paper.topic}
              </span>
              <div>
                <h4 className="text-sm text-t1 leading-snug">
                  {paper.title}
                </h4>
                {paper.coauthors && (
                  <p className="text-xs text-t3">con {paper.coauthors}</p>
                )}
                {paper.desc && (
                  <p className="text-xs text-t2 mt-1">{paper.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeReveal>
  );
}
