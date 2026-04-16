"use client";

import { useOdometer } from "@/hooks/useOdometer";

interface OdometerCounterProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
}

export default function OdometerCounter({
  endValue,
  suffix = "",
  prefix = "",
}: OdometerCounterProps) {
  const { ref, value } = useOdometer(endValue);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}