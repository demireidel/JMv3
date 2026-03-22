"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { heroImage } from "@/data/photos";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative h-svh min-h-[600px] flex items-end justify-start overflow-hidden">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        fetchPriority="high"
        quality={85}
        className="object-cover object-[center_20%]"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] hero-overlay" />

      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-8 relative z-[2] pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.2 }}
        >
          <p className="font-bebas text-sm text-celeste tracking-[var(--tracking-widest)] uppercase mb-3">
            Presidente de la Nación Argentina
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_PREMIUM, delay: 0.4 }}
          className="font-playfair text-display text-t1 leading-none tracking-tight mb-6"
        >
          <span className="text-t1">JAVIER </span>
          <span className="gold-shimmer">MILEI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <hr className="w-[60px] h-[3px] border-none my-6 mb-6 accent-line" />
          <p className="font-playfair italic text-xl text-t1/80 max-w-[500px]">
            La libertad avanza. Argentina será el país más libre del mundo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-t3 tracking-[var(--tracking-wide)] font-bebas">SCROLL</span>
          <div className="w-0.5 h-10 animate-[scroll-bounce_2s_ease-in-out_infinite] scroll-fade" />
        </motion.div>
      </div>
    </section>
  );
}
