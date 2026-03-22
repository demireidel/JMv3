import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeReveal from "@/components/ui/FadeReveal";
import MegaStats from "@/components/mundo/MegaStats";
import FactPill from "@/components/mundo/FactPill";
import {
  leaders,
  timeline,
  tradeAgreements,
  financialSupport,
  cooperationGrid,
} from "@/data/mundo";
import { mundoHeroImage } from "@/data/photos";

export const metadata: Metadata = {
  title: "Mundo",
  description:
    "Argentina en el mundo — diplomacia, acuerdos comerciales, alianzas internacionales.",
};

export default function MundoPage() {
  return (
    <div className="bg-surface pt-24 pb-16">
      {/* Hero image */}
      <div className="relative h-[40vh] min-h-[300px] mb-16 overflow-hidden">
        <Image
          src={mundoHeroImage.src}
          alt={mundoHeroImage.alt}
          fill
          className="object-cover brightness-[0.6]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 z-[1] surface-fade" />
        <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-8 relative z-[2] h-full flex items-end pb-8">
          <div>
            <p className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase">MUNDO</p>
            <h1 className="font-playfair text-3xl text-t1">
              Argentina en el mundo
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-8">
        {/* Leader grid */}
        <FadeReveal>
          <div className="mb-16">
            <h2 className="font-bebas text-xl text-t1 tracking-wide mb-6">
              LIDERES MUNDIALES
            </h2>
            <div className="flex flex-wrap gap-3">
              {leaders.map((leader, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-surface-1 rounded-full border border-border"
                >
                  <span className="text-xl">{leader.flag}</span>
                  <span className="text-sm text-t1">{leader.name}</span>
                  <span className="text-xs text-t3">{leader.role}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeReveal>

        {/* Mega stats */}
        <Suspense fallback={<div className="animate-pulse h-48 bg-surface-1 rounded-lg" />}>
          <MegaStats />
        </Suspense>

        {/* Timeline */}
        <FadeReveal>
          <div className="mb-16">
            <div className="flex items-center gap-4 my-8"><span className="flex-1 h-px bg-border" /><span className="font-bebas text-xs text-t3 tracking-[var(--tracking-wide)]">CRONOLOGIA</span><span className="flex-1 h-px bg-border" /></div>

            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border" />

              {timeline.map((event, i) => (
                <div key={i} className="relative mb-8 pl-4">
                  {/* Dot */}
                  <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-accent border-[var(--border-lg)] border-surface" />
                  <div className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase mb-1">{event.date}</div>
                  <h4 className="font-playfair text-base text-t1 mb-1">
                    {event.title}
                  </h4>
                  <p className="text-sm text-t2 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeReveal>

        {/* Trade agreements */}
        <FadeReveal>
          <div className="mb-16">
            <div className="flex items-center gap-4 my-8"><span className="flex-1 h-px bg-border" /><span className="font-bebas text-xs text-t3 tracking-[var(--tracking-wide)]">ACUERDOS COMERCIALES</span><span className="flex-1 h-px bg-border" /></div>

            <div className="grid gap-8">
              {tradeAgreements.map((agreement, i) => (
                <div
                  key={i}
                  className="bg-surface-1 border border-border rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden"
                >
                  <div className={agreement.reverse ? "md:order-1" : ""}>
                    <span className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase">{agreement.tag}</span>
                    <h3 className="font-playfair text-xl text-t1 leading-snug my-2">{agreement.title}</h3>
                    <p className="text-t2 text-sm leading-relaxed mb-4">
                      {agreement.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {agreement.keyFacts.map((fact, j) => (
                        <FactPill key={j} text={fact.text} color={fact.color} />
                      ))}
                    </div>
                  </div>
                  <div className="relative rounded-md overflow-hidden min-h-[200px]">
                    <Image
                      src={agreement.image}
                      alt={agreement.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 right-3 bg-black/70 text-accent px-3 py-1 rounded-md font-bebas text-xs tracking-wide">
                      {agreement.badge}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeReveal>

        {/* Financial support */}
        <FadeReveal>
          <div className="mb-16">
            <div className="bg-surface-1 border border-border rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
              <div>
                <span className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase">{financialSupport.tag}</span>
                <h3 className="font-playfair text-xl text-t1 leading-snug my-2">{financialSupport.title}</h3>
                <p className="text-t2 text-sm leading-relaxed mb-4">
                  {financialSupport.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {financialSupport.keyFacts.map((fact, j) => (
                    <FactPill key={j} text={fact.text} color={fact.color} />
                  ))}
                </div>
              </div>
              <div className="relative rounded-md overflow-hidden min-h-[200px]">
                <Image
                  src={financialSupport.image}
                  alt={financialSupport.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </FadeReveal>

        {/* Cooperation grid */}
        <FadeReveal>
          <div className="mb-16">
            <h2 className="font-bebas text-xl text-t1 tracking-wide mb-6">
              COOPERACION ESTRATEGICA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {cooperationGrid.map((item, i) => (
                <div key={i} className="bg-surface-1 border border-border rounded-lg p-6">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-bebas text-base text-accent tracking-wide mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-t2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeReveal>
      </div>
    </div>
  );
}
