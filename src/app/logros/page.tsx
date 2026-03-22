import { Suspense } from "react";
import type { Metadata } from "next";
import SectionHeader from "@/components/shared/SectionHeader";
import BeforeAfterCard from "@/components/shared/BeforeAfterCard";
import PobrezaHero from "@/components/logros/PobrezaHero";
import PhotoStrip from "@/components/shared/PhotoStrip";
import { logros } from "@/data/logros";
import { stripPhotos2 } from "@/data/photos";

export const metadata: Metadata = {
  title: "Logros",
  description: "Los 8 logros más importantes del gobierno de Javier Milei.",
};

export default function LogrosPage() {
  return (
    <div className="bg-surface pt-24">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-8">
        <SectionHeader eyebrow="LOGROS" title="LOS RESULTADOS HABLAN" intro="Datos concretos. Sin relato. Sin excusas." isPageTitle />
        <Suspense fallback={<div className="animate-pulse h-64 bg-surface-1 rounded-lg" />}>
          <PobrezaHero />
        </Suspense>
        <div className="grid gap-8 mb-16">
          {logros.map((l) => (
            <BeforeAfterCard key={l.num} data={l} />
          ))}
        </div>
      </div>
      <PhotoStrip photos={stripPhotos2} reverse />
    </div>
  );
}
