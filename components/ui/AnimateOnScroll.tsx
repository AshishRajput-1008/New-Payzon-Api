"use client";

import { useInView } from "@/hooks/useInView";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: string;
  delay?: string;
  direction?: "left" | "right" | "up";
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = "fadeInUp",
  delay = ".3s",
  direction,
  className = "",
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const getAnimationClass = () => {
    if (isInView) return `animated ${animation}`;
    return "visibility-hidden";
  };

  const style: React.CSSProperties = {
    animationDelay: delay,
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`} style={style}>
      {children}
    </div>
  );
}