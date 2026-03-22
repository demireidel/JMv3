import type { Metadata } from "next";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeReveal from "@/components/ui/FadeReveal";
import PillarSection from "@/components/futuro/PillarSection";
import {
  futuroHeader,
  siliconValley,
  stargate,
  nuclear,
  vacaMuerta,
  futuroClosing,
} from "@/data/futuro";

export const metadata: Metadata = {
  title: "Futuro",
  description:
    "El futuro de Argentina — Silicon Valley, Stargate AI, energía nuclear, Vaca Muerta.",
};

export default function FuturoPage() {
  return (
    <div className="bg-surface pt-24 pb-16">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow={futuroHeader.sectionTitle}
          title={futuroHeader.introQuote}
          intro={futuroHeader.introText}
          isPageTitle
        />

        <PillarSection
          num="01"
          kicker={siliconValley.kicker}
          title={siliconValley.titleLine1}
          titleEm={siliconValley.titleLine2Em}
          paragraphs={siliconValley.paragraphs}
          stats={siliconValley.stats}
          photo={siliconValley.photo}
        />

        <PillarSection
          num="02"
          kicker={stargate.kicker}
          title={stargate.titleLine1}
          titleEm={stargate.titleLine2}
          paragraphs={stargate.paragraphs}
          stats={stargate.stats}
          photo={stargate.photo}
          quote={stargate.quote}
        />

        <PillarSection
          num="03"
          kicker={nuclear.kicker}
          title={nuclear.titleLine1}
          titleEm={nuclear.titleLine2}
          paragraphs={nuclear.closingParagraph ? [nuclear.closingParagraph] : []}
          stats={nuclear.stats}
          photo={nuclear.photo}
          quote={nuclear.quote}
          phases={nuclear.phases}
        />

        <PillarSection
          num="04"
          kicker={vacaMuerta.kicker}
          title={vacaMuerta.titleLine1}
          titleEm={vacaMuerta.titleLine2Em}
          paragraphs={vacaMuerta.paragraphs}
          stats={vacaMuerta.stats}
          photo={vacaMuerta.photo}
        />

        {/* Closing quote */}
        <FadeReveal>
          <div className="text-center max-w-[700px] mx-auto my-16">
            <div className="w-[60px] h-0.5 bg-accent mx-auto mb-8" />
            <p className="font-playfair italic text-xl text-t1 leading-relaxed">
              {futuroClosing.text}
            </p>
            <p className="text-sm text-t3 mt-4">— {futuroClosing.attr}</p>
          </div>
        </FadeReveal>
      </div>
    </div>
  );
}
