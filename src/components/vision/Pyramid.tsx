import FadeReveal from "@/components/ui/FadeReveal";
import Prose from "@/components/ui/Prose";
import type { PyramidLevel } from "@/data/vision";

interface PyramidProps {
  levels: PyramidLevel[];
  intellectualSources: string;
}

export default function Pyramid({ levels, intellectualSources }: PyramidProps) {
  return (
    <FadeReveal>
      <div className="my-12">
        {levels.map((level, i) => (
          <div
            key={i}
            className="bg-surface-1 border border-border rounded-lg p-6 flex gap-6 mb-4 mx-auto"
            style={{ maxWidth: `${100 - i * 10}%` }}
          >
            <div className="text-center min-w-[60px]">
              <div className="font-bebas text-xl text-accent">
                {level.rank}
              </div>
              <div className="text-xs text-t3">{level.ordinal}</div>
            </div>
            <div>
              <h4 className="font-playfair text-base text-t1 mb-1">
                {level.title}
              </h4>
              <p className="text-sm text-t2 leading-relaxed">
                {level.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Intellectual sources aside */}
      <div className="bg-surface-1 border border-border rounded-lg p-6 my-8">
        <p className="text-t2 text-sm leading-relaxed">
          <Prose text={intellectualSources} />
        </p>
      </div>
    </FadeReveal>
  );
}
