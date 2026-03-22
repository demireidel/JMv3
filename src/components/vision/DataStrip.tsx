import FadeReveal from "@/components/ui/FadeReveal";
import type { DataStripItem } from "@/data/vision";

interface DataStripProps {
  items: DataStripItem[];
}

export default function DataStrip({ items }: DataStripProps) {
  return (
    <FadeReveal>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-12">
        {items.map((d, i) => (
          <div key={i} className="bg-surface-1 border border-border rounded-lg p-6 text-center">
            <div className="font-bebas text-2xl text-accent leading-none">
              {d.num}
              <span className="text-[0.6em]">{d.sup}</span>
            </div>
            <div className="text-xs text-t2 mt-2 whitespace-pre-line">
              {d.label}
            </div>
          </div>
        ))}
      </div>
    </FadeReveal>
  );
}
