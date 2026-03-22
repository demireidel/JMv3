"use client";

import { useState } from "react";
import Image from "next/image";
import type { Logro } from "@/data/logros";

interface BeforeAfterCardProps {
  data: Logro;
}

export default function BeforeAfterCard({ data }: BeforeAfterCardProps) {
  const {
    badge,
    title,
    paragraphs,
    before,
    after,
    callout,
    gradient,
    imgBefore,
    imgAfter,
    altBefore,
    altAfter,
    reverse = false,
  } = data;

  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <article
      className="fade-reveal grid gap-8 p-6 rounded-lg border border-border overflow-hidden md:grid-cols-[1fr_1fr]"
      style={{ background: gradient || "var(--color-surface-2)" }}
    >
      {/* Image -- accessible toggle */}
      <div
        role="button"
        tabIndex={0}
        aria-label={
          flipped
            ? "Mostrando despues -- presionar para ver antes"
            : "Mostrando antes -- presionar para ver despues"
        }
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className={`relative rounded-md overflow-hidden cursor-pointer aspect-[4/3] ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <Image
          src={flipped ? imgAfter : imgBefore}
          alt={flipped ? altAfter : altBefore}
          fill
          className="object-cover transition-opacity duration-500 ease-premium"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <span className="absolute top-4 left-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {badge}
        </span>
        <span className="absolute bottom-4 right-4 bg-black/60 text-t2 px-3 py-1 rounded-md text-xs">
          {flipped
            ? "DESPUES -- click para ver antes"
            : "ANTES -- click para ver despues"}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h3 className="font-bebas text-2xl leading-tight text-t1 md:text-3xl">
          {title}
        </h3>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-t2 text-sm">
            {p}
          </p>
        ))}

        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="rounded-md bg-danger/10 p-3">
            <div className="text-xs text-danger font-semibold uppercase tracking-wide">
              {before.label}
            </div>
            <div className="font-bebas text-2xl text-danger leading-none mt-1">
              {before.val}
            </div>
            <div className="text-xs text-t3 mt-1">{before.desc}</div>
          </div>
          <div className="rounded-md bg-success/10 p-3">
            <div className="text-xs text-success font-semibold uppercase tracking-wide">
              {after.label}
            </div>
            <div className="font-bebas text-2xl text-success leading-none mt-1">
              {after.val}
            </div>
            <div className="text-xs text-t3 mt-1">{after.desc}</div>
          </div>
        </div>

        {callout && (
          <div className="border-l-[var(--border-lg)] border-accent pl-4 italic text-t2 text-sm mt-2">
            {callout}
          </div>
        )}
      </div>
    </article>
  );
}
