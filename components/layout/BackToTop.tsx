"use client";

import { useState, useEffect } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function BackToTop() {
  const scrollY = useScrollPosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrollY > 300);
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="backtotop">
      <button
        className="scroll"
        onClick={scrollToTop}
        aria-label="Back to top"
        type="button"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
}