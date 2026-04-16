"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import OdometerCounter from "@/components/ui/OdometerCounter";
import SectionDecoration from "@/components/ui/SectionDecoration";
import shape1 from "@/public/assets/images/shape_pattern_1.svg";
import shape2 from "@/public/assets/images/shape_pattern_2.svg";
import shape14 from "@/public/assets/images/shape_nate_14.svg";
import shape15 from "@/public/assets/images/shape_nate_15.svg";
import medal from "@/public/assets/images/icon_medal.svg";
import heoHand from "@/public/assets/images/hero_hand_image_2.webp";

const heroShapes = [
  { className: "shape_pattern_1", image: shape1.src, alt: "Shape Pattern" },
  { className: "shape_pattern_2", image: shape2.src, alt: "Shape Pattern" },
  { className: "shape_nate_1", image: shape14.src, alt: "Shape Nate" },
  { className: "shape_nate_2", image: shape15.src, alt: "Shape Nate" },
];

// ─── Refined line-art payment SVGs ────────────────────────────────────────────
const SHAPES: Record<string, string> = {

  rupee_ring: `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="19" fill="none"
      stroke="currentColor" stroke-width="1.2" stroke-opacity="0.55"/>
    <circle cx="22" cy="22" r="14" fill="none"
      stroke="currentColor" stroke-width="0.6" stroke-opacity="0.25"/>
    <text x="22" y="29" text-anchor="middle" font-size="17" font-weight="600"
      font-family="system-ui,sans-serif" fill="currentColor" fill-opacity="0.85">₹</text>
  </svg>`,

  rupee_bare: `<svg viewBox="0 0 26 36" xmlns="http://www.w3.org/2000/svg">
    <text x="13" y="32" text-anchor="middle" font-size="32" font-weight="300"
      font-family="system-ui,sans-serif" fill="currentColor" fill-opacity="0.7">₹</text>
  </svg>`,

  rupee_badge: `<svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="36" height="36" rx="11"
      fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.55"/>
    <text x="21" y="28" text-anchor="middle" font-size="18" font-weight="500"
      font-family="system-ui,sans-serif" fill="currentColor" fill-opacity="0.85">₹</text>
  </svg>`,

  card: `<svg viewBox="0 0 54 36" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="50" height="32" rx="7"
      fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.55"/>
    <line x1="2" y1="11" x2="52" y2="11"
      stroke="currentColor" stroke-width="4" stroke-opacity="0.2"/>
    <rect x="7" y="20" width="10" height="7" rx="2"
      fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
    <line x1="23" y1="22" x2="38" y2="22"
      stroke="currentColor" stroke-width="1" stroke-opacity="0.3" stroke-linecap="round"/>
    <line x1="23" y1="26" x2="32" y2="26"
      stroke="currentColor" stroke-width="1" stroke-opacity="0.2" stroke-linecap="round"/>
  </svg>`,

  wallet: `<svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="46" height="28" rx="7"
      fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.55"/>
    <path d="M8 10 Q8 3 16 3 L38 3 Q44 3 44 10"
      fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
    <rect x="30" y="20" width="16" height="12" rx="4"
      fill="none" stroke="currentColor" stroke-width="1" stroke-opacity="0.4"/>
    <circle cx="38" cy="26" r="2.5"
      fill="currentColor" fill-opacity="0.4"/>
  </svg>`,

  shield: `<svg viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3 L36 10 L36 24 C36 35 28 43 20 46 C12 43 4 35 4 24 L4 10 Z"
      fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.55"
      stroke-linejoin="round"/>
    <path d="M13 24 L18 30 L28 18"
      fill="none" stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.75"/>
  </svg>`,

  lightning: `<svg viewBox="0 0 26 44" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3 L5 25 H13 L9 41 L23 19 H15 Z"
      fill="currentColor" fill-opacity="0.2"
      stroke="currentColor" stroke-width="1.2" stroke-opacity="0.6"
      stroke-linejoin="round"/>
  </svg>`,

  contactless: `<svg viewBox="0 0 42 46" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="37" r="3"
      fill="currentColor" fill-opacity="0.6"/>
    <path d="M12 29 C13.5 23 28.5 23 30 29"
      fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-opacity="0.65"/>
    <path d="M6 22 C9 13 33 13 36 22"
      fill="none" stroke="currentColor" stroke-width="1.4"
      stroke-linecap="round" stroke-opacity="0.45"/>
    <path d="M1 15 C5 3 37 3 41 15"
      fill="none" stroke="currentColor" stroke-width="1.2"
      stroke-linecap="round" stroke-opacity="0.28"/>
  </svg>`,

  percent: `<svg viewBox="0 0 40 46" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="13" r="7.5"
      fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.55"/>
    <circle cx="29" cy="33" r="7.5"
      fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.55"/>
    <line x1="5" y1="40" x2="35" y2="6"
      stroke="currentColor" stroke-width="1.4" stroke-opacity="0.45"
      stroke-linecap="round"/>
  </svg>`,

  // Small glowing dot — acts as a depth/sparkle particle
  dot: `<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="4"
      fill="currentColor" fill-opacity="0.55"/>
    <circle cx="6" cy="6" r="2"
      fill="currentColor" fill-opacity="0.85"/>
  </svg>`,

  // Diamond gem
  diamond: `<svg viewBox="0 0 36 38" xmlns="http://www.w3.org/2000/svg">
    <polygon points="18,2 34,14 18,36 2,14"
      fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.55"
      stroke-linejoin="round"/>
    <polygon points="18,2 34,14 18,16 2,14"
      fill="currentColor" fill-opacity="0.12" stroke="none"/>
    <line x1="2" y1="14" x2="34" y2="14"
      stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/>
    <line x1="18" y1="2" x2="18" y2="16"
      stroke="currentColor" stroke-width="0.8" stroke-opacity="0.2"/>
  </svg>`,

  // Checkmark inside a circle — confirmed payment
  check_ring: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="17"
      fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5"/>
    <path d="M12 21 L17 27 L28 13"
      fill="none" stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.7"/>
  </svg>`,

  // Upward arrow in circle — send money
  send: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="17"
      fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5"/>
    <path d="M20 28 L20 13" fill="none"
      stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-opacity="0.75"/>
    <path d="M14 19 L20 13 L26 19"
      fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.75"/>
  </svg>`,
};

// ─── 3 depth layers — far (faint, small, slow), mid, near ─────────────────────
type Layer = "far" | "mid" | "near";

const LAYERS: Record<Layer, {
  pool: string[];
  sizeRange: [number, number];
  speedRange: [number, number];
  opacityRange: [number, number];
  rotSpeedRange: [number, number];
  count: number;
}> = {
  far: {
    pool: ["dot", "dot", "rupee_bare", "percent", "lightning"],
    sizeRange: [6, 13],
    speedRange: [0.04, 0.07],
    opacityRange: [0.18, 0.32],
    rotSpeedRange: [-0.15, 0.15],
    count: 8,
  },
  mid: {
    pool: [
      "rupee_ring", "rupee_ring", "rupee_ring",
      "rupee_badge", "card", "wallet",
      "shield", "contactless", "percent",
      "check_ring", "send", "diamond",
    ],
    sizeRange: [18, 32],
    speedRange: [0.065, 0.10],
    opacityRange: [0.38, 0.58],
    rotSpeedRange: [-0.28, 0.28],
    count: 11,
  },
  near: {
    pool: [
      "rupee_ring", "rupee_badge", "rupee_bare",
      "card", "lightning", "shield", "send",
    ],
    sizeRange: [32, 50],
    speedRange: [0.10, 0.15],
    opacityRange: [0.6, 0.82],
    rotSpeedRange: [-0.4, 0.4],
    count: 5,
  },
};

// Palette: icy white + teal + periwinkle + lavender
// All desaturated-light so they glow softly on dark bg
const COLORS = [
  "rgba(255,255,255,1)",   // pure white
  "rgba(255,255,255,0.9)",
  "#a5f3fc",               // icy cyan
  "#bfdbfe",               // pale blue
  "#c7d2fe",               // periwinkle
  "#ddd6fe",               // lavender
  "#99f6e4",               // mint-teal
  "rgba(255,255,255,0.85)",
  "#e0f2fe",               // sky white
  "#f0abfc",               // soft pink-violet (rare accent)
];

interface FloatingSymbol {
  el: HTMLDivElement;
  x: number;
  y: number;
  speed: number;
  drift: number;
  phase: number;       // unique sine phase — stops all symbols swaying in sync
  rotation: number;
  rotationSpeed: number;
  baseOpacity: number;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const symbolsRef = useRef<FloatingSymbol[]>([]);
  const animRef = useRef<number>(0);
  const tickRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const spawn = (layer: Layer, startY?: number): FloatingSymbol => {
      const cfg = LAYERS[layer];
      const el = document.createElement("div");
      const type = cfg.pool[Math.floor(Math.random() * cfg.pool.length)];
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size = rand(...cfg.sizeRange);

      el.innerHTML = SHAPES[type];
      el.style.cssText = [
        "position:absolute",
        `width:${size}px`,
        `height:${size}px`,
        `color:${color}`,
        "pointer-events:none",
        "will-change:transform,opacity",
        "top:0",
        "left:0",
      ].join(";");

      canvas.appendChild(el);

      const rs = cfg.rotSpeedRange;

      return {
        el,
        x: rand(-5, 105),
        y: startY ?? rand(-15, -5),
        speed: rand(...cfg.speedRange),
        drift: rand(-0.06, 0.06),
        phase: rand(0, Math.PI * 2),    // unique phase per symbol
        rotation: rand(0, 360),
        rotationSpeed: rand(rs[0], rs[1]),
        baseOpacity: rand(...cfg.opacityRange),
      };
    };

    // Seed all layers
    (["far", "mid", "near"] as Layer[]).forEach((layer) => {
      const { count } = LAYERS[layer];
      for (let i = 0; i < count; i++) {
        symbolsRef.current.push(spawn(layer, rand(0, 110)));
      }
    });

    const tick = () => {
      tickRef.current++;
      const t = tickRef.current;

      symbolsRef.current.forEach((p) => {
        p.y += p.speed;

        // Two-frequency sway: slow large wave + fast tiny tremble
        // p.phase offsets each symbol so they never move in unison
        const sway =
          Math.sin(p.phase + t * 0.004) * 0.18 +
          Math.sin(p.phase * 1.7 + t * 0.011) * 0.06;

        p.x += p.drift + sway;
        p.rotation += p.rotationSpeed;

        const fadeIn  = Math.min(1, p.y / 8);
        const fadeOut = p.y > 86 ? Math.max(0, 1 - (p.y - 86) / 16) : 1;

        p.el.style.opacity = String(p.baseOpacity * fadeIn * fadeOut);
        p.el.style.transform =
          `translate(${p.x}vw,${p.y}vh) rotate(${p.rotation}deg)`;

        if (p.y > 110) {
          p.y = rand(-12, -4);
          p.x = rand(-5, 105);
          p.rotation = rand(0, 360);
        }
      });

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animRef.current);
      symbolsRef.current.forEach((p) => p.el.remove());
      symbolsRef.current = [];
      tickRef.current = 0;
    };
  }, []);

  return (
    <section
      className="hero_section hero_payment_solutions overflow-hidden section_decoration bg-dark"
      style={{ position: "relative" }}
    >
      {/* ══ SYMBOL CANVAS ══ */}
      <div
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      />

      {/* ══ HEADING ══ */}
      <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <AnimateOnScroll delay=".1s">
              <div className="badge text-uppercase text-primary bg-primary-subtle font-bold">
                easily send money anywhere
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay=".3s">
              <h1
                className="hero_title text-white"
                style={{ fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                Fast, Reliable Payment
                <br />
                Solutions for Today&apos;s Needs
              </h1>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* ══ THREE-COLUMN ROW ══ */}
      <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
        <div className="row">
          {/* Left */}
          <div className="col-lg-3">
            <AnimateOnScroll animation="fadeInLeft" delay=".4s">
              <p className="text-white">
                That&apos;s where we come in—as a trusted middleware mediator,
                bridging the gap between users and payment systems to ensure
                secure, smooth, and efficient transactions.
              </p>
            </AnimateOnScroll>
            <ul className="btns_group unordered_list_block p-0">
              <AnimateOnScroll animation="fadeInLeft" delay=".5s">
                <li>
                  <Link className="btn bg-primary text-dark btn-rounded" href="/pricing">
                    <span className="btn_label">Sign Up For Free</span>
                    <span className="btn_icon">
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928932C12.9526 0.538408 12.3195 0.538408 11.9289 0.928932C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.3195 15.4616 13.3431 15.0711L19.7071 8.70711ZM0 9H19V7H0V9Z" fill="black"/>
                      </svg>
                    </span>
                  </Link>
                </li>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInLeft" delay=".6s">
                <li>
                  <div className="avatars_block">
                    <div className="text_content text-white mb-3">Over <b>9,000+</b> Reviews</div>
                    <ul className="avatars_group unordered_list">
                      <li><img src="/assets/images/avatar/avatar_image_4.webp" alt="Avatar Image" /></li>
                      <li><img src="/assets/images/avatar/avatar_image_5.webp" alt="Avatar Image" /></li>
                      <li><img src="/assets/images/avatar/avatar_image_6.webp" alt="Avatar Image" /></li>
                      <li><span>9K+</span></li>
                    </ul>
                  </div>
                </li>
              </AnimateOnScroll>
            </ul>
          </div>

          {/* Right Funfacts */}
          <div className="col-lg-3 order-lg-last">
            <ul className="btns_group unordered_list_block p-0">
              <AnimateOnScroll animation="fadeInRight" delay=".4s">
                <li>
                  <div className="funfact_block left_layout flex-column">
                    <div className="funfact_icon bg-dark">
                      <img src={medal.src} alt="Icon Medal" />
                    </div>
                    <div className="funfact_content">
                      <h4 className="funfact_title mb-0 text-uppercase">Our daily achievement</h4>
                    </div>
                  </div>
                </li>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInRight" delay=".5s">
                <li>
                  <div className="funfact_block">
                    <div className="funfact_value">
                      <OdometerCounter endValue={10} /><span>M+</span>
                    </div>
                    <h4 className="funfact_title mb-0">Daily Transactions</h4>
                  </div>
                </li>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInRight" delay=".6s">
                <li>
                  <div className="funfact_block">
                    <div className="funfact_value">
                      <span>+</span><OdometerCounter endValue={9} /><span>%</span>
                    </div>
                    <h4 className="funfact_title mb-0">Unlimited Daily Cashback</h4>
                  </div>
                </li>
              </AnimateOnScroll>
            </ul>
          </div>

          {/* Center Image */}
          <div className="col-lg-6">
            <AnimateOnScroll delay=".3s">
              <div className="hero_hand_image">
                <img src={heoHand.src} alt="Hand Image" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      <SectionDecoration shapes={heroShapes} />
    </section>
  );
}