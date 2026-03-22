"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { megaStats } from "@/data/mundo";

export default function MegaStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
      {megaStats.map((stat, i) => (
        <div key={i} className="bg-surface-1 border border-border rounded-lg p-6 text-center">
          {stat.animated ? (
            <AnimatedCounter
              target={stat.animated.target}
              prefix={stat.animated.prefix ?? ""}
              suffix={stat.animated.suffix ?? ""}
              label={stat.label}
              sub={stat.detail}
              formatLocale={stat.animated.formatDot}
            />
          ) : (
            <>
              <div className="font-bebas text-2xl text-accent leading-none">
                {stat.value}
              </div>
              <div className="font-bebas text-xs text-t1 tracking-wide mt-2 uppercase">
                {stat.label}
              </div>
              <div className="text-xs text-t3 mt-1">{stat.detail}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
