import Image from "next/image";
import FadeReveal from "@/components/ui/FadeReveal";
import QuoteBlock from "@/components/shared/QuoteBlock";

interface PillarSectionProps {
  num: string;
  kicker: string;
  title: string;
  titleEm?: string;
  paragraphs: string[];
  stats: { val: string; label: string }[];
  photo: {
    src: string;
    alt: string;
    objectPosition: string;
    captionStrong: string;
    captionSpan: string;
    aspectRatio: string;
  };
  quote?: { text: string; cite: string };
  phases?: { label: string; text: string }[];
}

export default function PillarSection({
  num,
  kicker,
  title,
  titleEm,
  paragraphs,
  stats,
  photo,
  quote,
  phases,
}: PillarSectionProps) {
  return (
    <div className="mb-24 relative">
      {/* Large faded number */}
      <div
        className="font-bebas text-surface-1 -mb-8 relative z-0 text-[clamp(6rem,15vw,12rem)] leading-[0.8]"
      >
        {num}
      </div>

      <FadeReveal>
        <div className="relative z-[1]">
          <p className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase mb-2">{kicker}</p>
          <h3 className="font-playfair text-3xl text-t1 leading-tight mb-8">
            {title}
            {titleEm && (
              <>
                {" "}
                <em className="text-accent">{titleEm}</em>
              </>
            )}
          </h3>
        </div>
      </FadeReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text side */}
        <FadeReveal>
          <div>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-t2 text-base leading-relaxed mb-4">
                {p}
              </p>
            ))}

            {phases && (
              <div className="mt-6">
                {phases.map((phase, i) => (
                  <div key={i} className="bg-surface-1 border border-border rounded-lg p-6 flex gap-4 mb-4">
                    <div className="font-bebas text-sm text-accent min-w-[80px]">
                      {phase.label}
                    </div>
                    <p className="text-t2 text-sm">{phase.text}</p>
                  </div>
                ))}
              </div>
            )}

            {quote && <QuoteBlock text={quote.text} attr={quote.cite} />}
          </div>
        </FadeReveal>

        {/* Photo side */}
        <FadeReveal direction="right">
          <div
            className="rounded-lg overflow-hidden relative"
            style={{ aspectRatio: photo.aspectRatio || "3/2" }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              style={{ objectPosition: photo.objectPosition }}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="mt-3">
            <strong className="text-t1 text-sm">{photo.captionStrong}</strong>
            <span className="text-t3 text-xs ml-2">{photo.captionSpan}</span>
          </div>
        </FadeReveal>
      </div>

      {/* Stats row */}
      <FadeReveal>
        <div className="bg-surface-1 border border-border rounded-lg p-6 flex flex-wrap gap-8 mt-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 min-w-[150px]">
              <div className="font-bebas text-xl text-accent leading-none">
                {stat.val}
              </div>
              <div className="text-xs text-t3 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </FadeReveal>
    </div>
  );
}
