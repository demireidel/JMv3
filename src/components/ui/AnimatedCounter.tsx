"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, animate, useInView, type MotionValue } from "motion/react";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sub?: string;
  formatLocale?: boolean;
  className?: string;
}

/** Subscribes to a MotionValue and renders its latest string value */
function DisplayValue({ motionValue }: { motionValue: MotionValue<string> }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(
    () =>
      motionValue.on("change", (v: string) => {
        if (ref.current) ref.current.textContent = v;
      }),
    [motionValue],
  );

  return <span ref={ref}>0</span>;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  sub,
  formatLocale = true,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => {
    const val = decimals > 0 ? v.toFixed(decimals) : Math.round(v);
    return formatLocale
      ? Number(val).toLocaleString("es-AR", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : String(val);
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, {
      duration: 1.8,
      ease: EASE_PREMIUM,
    });
    return controls.stop;
  }, [isInView, target]); // count is a stable MotionValue ref -- not a dependency

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="font-bebas text-4xl leading-none text-accent md:text-5xl">
        {prefix}
        <DisplayValue motionValue={display} />
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-t1">
        {label}
      </div>
      {sub && (
        <div className="mt-1 text-xs leading-snug text-t3">{sub}</div>
      )}
    </div>
  );
}
