"use client";

import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface BarcodeProps {
  className?: string;
  seed?: number;
}

export function Barcode({ className, seed = 42 }: BarcodeProps) {
  const bars = useMemo(() => {
    const widths = [1, 2, 3, 1, 2, 1, 3, 2, 1, 2];
    const result = [];
    let seedVal = seed;

    for (let i = 0; i < 35; i++) {
      seedVal = (seedVal * 9301 + 49297) % 233280;
      const rnd = seedVal / 233280;

      result.push({
        width: widths[i % widths.length],
        height: 50 + rnd * 50,
        opacity: 0.3 + rnd * 0.4,
      });
    }
    return result;
  }, [seed]);

  return (
    <div className={cn("flex items-end justify-center gap-[1px] h-6", className)}>
      {bars.map((bar, i) => (
        <div
          key={i}
          className="bg-foreground/40 rounded-sm"
          style={{
            width: bar.width,
            height: `${bar.height}%`,
            opacity: bar.opacity,
          }}
        />
      ))}
    </div>
  );
}
