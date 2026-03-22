import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeReveal from "@/components/ui/FadeReveal";
import Prose from "@/components/ui/Prose";
import DataStrip from "@/components/vision/DataStrip";
import Pyramid from "@/components/vision/Pyramid";
import ThinkerGrid from "@/components/vision/ThinkerGrid";
import { visionData } from "@/data/vision";
import { visionPhotos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Visión",
  description:
    "La visión del presidente Milei para Argentina — filosofía, principios y defensa de Occidente.",
};

export default function VisionPage() {
  const v = visionData;

  return (
    <div className="bg-surface pt-24 pb-16">
      <div className="w-full max-w-[var(--container-narrow)] mx-auto px-6 md:px-8">
        {/* Opening */}
        <FadeReveal>
          <div className="text-center mb-16">
            <p className="font-bebas text-xs text-accent tracking-[var(--tracking-widest)] uppercase">{v.kicker}</p>
            <h1 className="font-playfair text-3xl text-t1 leading-tight mt-2">
              {v.title}
              <br />
              <em>{v.titleEm}</em>
            </h1>
            <p className="text-t2 text-lg max-w-[600px] mx-auto mt-6">
              {v.subtitle}
            </p>
          </div>
        </FadeReveal>

        {/* Mantra */}
        <FadeReveal>
          <div className="bg-surface-1 border border-border rounded-lg text-center px-8 py-12 mb-16">
            <p className="text-xs text-t3 tracking-wide uppercase mb-4">
              {v.mantra.label}
            </p>
            <p className="font-playfair italic text-xl text-t1 leading-relaxed max-w-[700px] mx-auto">
              {v.mantra.text}
            </p>
            <p className="text-sm text-t3 mt-4">{v.mantra.cite}</p>
          </div>
        </FadeReveal>

        {/* Chapters */}
        {v.chapters.map((chapter, chIdx) => (
          <div key={chIdx} className="mb-16">
            <FadeReveal>
              {/* Chapter header */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-playfair text-3xl text-accent leading-none opacity-50">
                  {chapter.num}
                </span>
                <h2 className="font-playfair text-2xl text-t1 leading-tight">{chapter.title}</h2>
              </div>

              {/* Paragraphs */}
              <div className="flex flex-col gap-4 mb-6">
                {chapter.paragraphs.map((p, i) => (
                  <p key={i} className="text-t2 text-base leading-relaxed">
                    <Prose text={p} />
                  </p>
                ))}
              </div>

              {/* Pullquotes */}
              {chapter.pullquotes.map((pq, i) => (
                <blockquote key={i} className="border-l-[var(--border-lg)] border-accent pl-6 my-8 max-w-[700px]">
                  <p className="font-playfair italic text-lg text-t1 leading-relaxed">{pq.text}</p>
                  <footer className="text-sm text-t3 mt-2">— {pq.cite}</footer>
                </blockquote>
              ))}

              {/* Continued paragraphs */}
              {chapter.continuedParagraphs &&
                chapter.continuedParagraphs.length > 0 && (
                  <div className="flex flex-col gap-4 mb-6">
                    {chapter.continuedParagraphs.map((p, i) => (
                      <p key={i} className="text-t2 text-base leading-relaxed">
                        <Prose text={p} />
                      </p>
                    ))}
                  </div>
                )}

              {/* Continued pullquotes */}
              {chapter.continuedPullquotes &&
                chapter.continuedPullquotes.map((pq, i) => (
                  <blockquote key={`cpq-${i}`} className="border-l-[var(--border-lg)] border-accent pl-6 my-8 max-w-[700px]">
                    <p className="font-playfair italic text-lg text-t1 leading-relaxed">{pq.text}</p>
                    <footer className="text-sm text-t3 mt-2">— {pq.cite}</footer>
                  </blockquote>
                ))}
            </FadeReveal>

            {/* Chapter photo */}
            {chapter.photoIndex !== undefined &&
              visionPhotos[chapter.photoIndex] && (
                <FadeReveal>
                  <div
                    className="my-8 rounded-md overflow-hidden relative"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <Image
                      src={visionPhotos[chapter.photoIndex].src}
                      alt={visionPhotos[chapter.photoIndex].alt}
                      fill
                      className="object-cover"
                      style={{
                        objectPosition:
                          visionPhotos[chapter.photoIndex].objectPosition ||
                          "center",
                      }}
                      sizes="(max-width: 900px) 100vw, 900px"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-t3 mt-2 text-center">
                    {visionPhotos[chapter.photoIndex].caption}
                  </p>
                </FadeReveal>
              )}

            {/* Divider between chapters */}
            {chIdx < v.chapters.length - 1 && (
              <div className="w-[60px] h-0.5 bg-border mx-auto my-12" />
            )}

            {/* Data strip after chapter 1 */}
            {chIdx === 0 && <DataStrip items={v.dataStrip} />}

            {/* Pyramid after chapter 2 */}
            {chIdx === 1 && (
              <Pyramid levels={v.pyramid} intellectualSources={v.intellectualSources} />
            )}

            {/* Pillars after chapter 4 */}
            {chIdx === 3 && (
              <FadeReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                  {v.pillars.map((p, i) => (
                    <div key={i} className="bg-surface-1 border border-border rounded-lg p-6 text-center">
                      <div className="text-3xl mb-2">{p.icon}</div>

                      <h4 className="font-bebas text-base text-accent tracking-wide">
                        {p.title}
                      </h4>
                      <p className="text-sm text-t2 mt-2 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeReveal>
            )}
          </div>
        ))}

        {/* Thinkers */}
        <ThinkerGrid thinkers={v.thinkers} />

        {/* Closing declaration */}
        <FadeReveal>
          <div className="text-center my-16">
            <div className="w-[60px] h-0.5 bg-accent mx-auto mb-8" />
            <div className="font-bebas text-3xl text-t1 leading-snug tracking-wide">
              {v.closingDeclaration.lines.map((line, i) => (
                <span key={i}>
                  <Prose text={line} />
                  {i < v.closingDeclaration.lines.length - 1 && <br />}
                </span>
              ))}
            </div>
            <div className="w-[60px] h-0.5 bg-accent mx-auto my-8" />
            <p className="font-playfair italic text-lg text-accent">
              {v.closingDeclaration.source}
            </p>
          </div>
        </FadeReveal>
      </div>
    </div>
  );
}
