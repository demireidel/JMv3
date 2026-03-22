import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import SectionPreviews from "@/components/home/SectionPreviews";
import PhotoStrip from "@/components/shared/PhotoStrip";
import { stripPhotos1 } from "@/data/photos";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="animate-pulse h-32 bg-surface-1 rounded-lg mx-6 my-16" />}>
        <StatsStrip />
      </Suspense>
      <PhotoStrip photos={stripPhotos1} />
      <SectionPreviews />
    </>
  );
}
