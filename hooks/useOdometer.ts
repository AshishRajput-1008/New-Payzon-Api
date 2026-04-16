"use client";

import { useEffect, useState } from "react";
import { useInView } from "./useInView";

export function useOdometer(endValue: number, duration: number = 2000) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.floor(eased * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, endValue, duration]);

  return { ref, value };
}