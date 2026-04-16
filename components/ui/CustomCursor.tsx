'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let ringX = -200, ringY = -200;
    let mouseX = -200, mouseY = -200;
    let raf: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [data-cursor-hover]')) setHovered(true);
    };
    const onMouseOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [data-cursor-hover]')) setHovered(false);
    };
    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${clicked ? 'clicked' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${hovered ? 'hovered' : ''}`} />
    </>
  );
}