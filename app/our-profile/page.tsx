"use client";

import { useState, useRef, useEffect } from "react";
import logo from "@/public/assets/images/Gemini_Generated_Image_j9419lj9419lj941.png";
import logo2 from "@/public/assets/images/Blog Section/logo2bgremove.png"

// ─── Counter animation hook ───────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

// ─── Intersection observer hook ──────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const count = useCounter(value, 2000, inView);
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(124,58,237,0.25)",
      borderRadius: 16,
      padding: "28px 24px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg, transparent, #C8FF00, transparent)",
      }} />
      <div style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#C8FF00", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: 12, color: "rgba(200,220,255,0.5)", marginTop: 8, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {label}
      </div>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ icon, title, desc, accent, delay, link }: {
  icon: React.ReactNode; title: string; desc: string; accent: string; delay: number; link?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={link ?? "#"} target={link ? "_blank" : undefined} rel={link ? "noreferrer" : undefined} style={{ textDecoration: "none", display: "block" }}>
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `rgba(200,255,0,0.04)` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(200,255,0,0.35)" : "rgba(124,58,237,0.22)"}`,
        borderRadius: 18,
        padding: "32px 28px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s ease",
        animationDelay: `${delay}s`,
      }}
    >
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
      }} />
      <div style={{
        width: 56, height: 56,
        borderRadius: 14,
        background: `rgba(${accent === "#C8FF00" ? "200,255,0" : accent === "#B47FFF" ? "180,127,255" : accent === "#00FFD1" ? "0,255,209" : "255,184,48"},0.1)`,
        border: `1px solid ${accent}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: accent, marginBottom: 20,
        transition: "transform 0.3s",
        transform: hovered ? "scale(1.08)" : "scale(1)",
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", color: "#F0F0FF", marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 13.5, color: "rgba(200,220,255,0.55)", lineHeight: 1.7 }}>{desc}</p>
    </div>
    </a>
  );
}

// ─── Restricted Category Card ─────────────────────────────────────────────────
function RestrictedCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,60,60,0.06)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(255,80,80,0.35)" : "rgba(255,60,60,0.18)"}`,
        borderRadius: 14,
        padding: "20px 18px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(255,80,80,0.4), transparent)",
        opacity: hovered ? 1 : 0.5,
        transition: "opacity 0.3s",
      }} />
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10, flexShrink: 0,
          background: "rgba(255,60,60,0.1)",
          border: "1px solid rgba(255,60,60,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18,
        }}>
          {icon}
        </div>
        <div>
          <h4 style={{ fontSize: 13.5, fontWeight: 700, color: "#FFB0B0", letterSpacing: "-0.01em", marginBottom: 4 }}>{title}</h4>
          <p style={{ fontSize: 11.5, color: "rgba(200,180,180,0.5)", lineHeight: 1.55 }}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Why Choose Us Item ───────────────────────────────────────────────────────
function WhyItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12, flexShrink: 0,
        background: "rgba(124,58,237,0.15)",
        border: "1px solid rgba(124,58,237,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#C8FF00",
      }}>
        {icon}
      </div>
      <div>
        <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#E8E8FF", marginBottom: 5, letterSpacing: "-0.01em" }}>{title}</h4>
        <p style={{ fontSize: "13px", color: "rgba(200,220,255,0.5)", lineHeight: 1.6 }}>{desc}</p>
      </div>
    </div>
  );
}

// ─── Background decoration ────────────────────────────────────────────────────
function BgDecor() {
  return (
    <div aria-hidden style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(200,255,0,.025)1px,transparent 1px),linear-gradient(90deg,rgba(200,255,0,.025)1px,transparent 1px)",
        backgroundSize: "58px 58px",
      }} />
      <svg style={{ position: "absolute", top: 0, left: 0, opacity: 0.1 }} width="300" height="600" viewBox="0 0 300 600" fill="none">
        <path d="M-40 100 Q100 60 130 220 Q160 380 60 500 Q-10 580 -40 620" stroke="#7C3AED" strokeWidth="1"/>
        <path d="M-60 80 Q80 40 120 210 Q155 380 40 520 Q-20 600 -60 640" stroke="#7C3AED" strokeWidth=".8"/>
        <path d="M-80 60 Q60 20 110 200 Q148 370 20 540 Q-30 620 -80 660" stroke="#9333EA" strokeWidth=".6"/>
      </svg>
      <svg style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.09 }} width="260" height="500" viewBox="0 0 260 500" fill="none">
        <path d="M300 40 Q180 80 200 180 Q222 280 300 340" stroke="#7C3AED" strokeWidth="1"/>
        <path d="M320 20 Q190 70 215 180 Q240 295 320 360" stroke="#7C3AED" strokeWidth=".8"/>
        <path d="M340 0 Q200 60 230 180 Q258 310 340 380" stroke="#9333EA" strokeWidth=".6"/>
      </svg>
      <div style={{ position: "absolute", width: 600, height: 600, top: -150, left: -180, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.2)0%,transparent 65%)" }} />
      <div style={{ position: "absolute", width: 500, height: 500, bottom: -100, right: -120, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,255,0,0.07)0%,transparent 65%)" }} />
      <div style={{ position: "absolute", width: 800, height: 800, top: "40%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle,rgba(90,40,180,0.1)0%,transparent 55%)" }} />
      <svg style={{ position: "absolute", top: 94, right: 40, opacity: 0.7 }} width="28" height="34" viewBox="0 0 28 34" fill="none">
        <path d="M14 0L28 13H0Z" fill="#C8FF00"/>
        <path d="M14 13L28 26H0Z" fill="#C8FF00" opacity=".5"/>
        <circle cx="14" cy="32" r="2" fill="#7C3AED"/>
      </svg>
      <svg style={{ position: "absolute", bottom: 56, left: 36, opacity: .7 }} width="24" height="40" viewBox="0 0 24 40" fill="none">
        <circle cx="12" cy="4" r="2.5" fill="#7C3AED"/>
        <circle cx="12" cy="13" r="2.5" fill="#7C3AED" opacity=".5"/>
        <path d="M0 26L12 40L24 26Z" fill="#C8FF00"/>
        <path d="M4 20L12 30L20 20Z" fill="#C8FF00" opacity=".5"/>
      </svg>
    </div>
  );
}

// ─── Eyebrow pill ─────────────────────────────────────────────────────────────
function Eyebrow({ text, variant = "green" }: { text: string; variant?: "green" | "red" }) {
  const isRed = variant === "red";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: isRed ? "rgba(255,60,60,0.08)" : "rgba(200,255,0,0.08)",
      border: `1px solid ${isRed ? "rgba(255,60,60,0.3)" : "rgba(200,255,0,0.28)"}`,
      borderRadius: 6, padding: "5px 14px", fontSize: 11, fontWeight: 700,
      letterSpacing: "0.14em", color: isRed ? "#FF8080" : "#C8FF00", textTransform: "uppercase",
      marginBottom: 18,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: isRed ? "#FF5555" : "#C8FF00", animation: "pulse 2s infinite" }} />
      {text}
    </div>
  );
}

// ─── Mediator Flow Diagram ────────────────────────────────────────────────────
function MediatorDiagram() {
  return (
    <div style={{
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(124,58,237,0.25)",
      borderRadius: 20,
      padding: "40px 32px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#7C3AED,#C8FF00,transparent)" }} />

      {/* ── 3-column: Vendor | Platform | Customer ── */}
      <div className="mediator-inner-grid">

        {/* Vendor */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          <div style={{
            width: "100%", maxWidth: 200,
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.4)",
            borderRadius: 16, padding: "28px 20px", textAlign: "center",
          }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>🏪</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#B47FFF", letterSpacing: "-0.01em", marginBottom: 4 }}>VENDOR&apos;S</div>
            <div style={{ fontSize: 11, color: "rgba(200,220,255,0.45)" }}>Service Provider</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, marginTop: 16 }}>
            <div style={{
              background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: 8, padding: "6px 14px", fontSize: 11, fontWeight: 600,
              color: "rgba(200,220,255,0.6)", letterSpacing: "0.04em",
            }}>Payment →</div>
          </div>
        </div>

        {/* Center platform */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, padding: "0 16px" }}>
          <div style={{
            background: "linear-gradient(135deg,rgba(124,58,237,0.3)0%,rgba(90,20,180,0.4)100%)",
            border: "1px solid rgba(124,58,237,0.5)",
            borderRadius: 20, padding: "28px 32px", textAlign: "center",
            boxShadow: "0 0 60px rgba(124,58,237,0.25)",
            minWidth: 0,
            width: "100%",
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "linear-gradient(135deg,#7C3AED,#5B21B6)",
              border: "2px solid rgba(200,255,0,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 14px", fontSize: 28, fontWeight: 800, color: "#C8FF00",
              fontFamily: "monospace",
            }}>
              <img style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }} src={logo.src} />
            </div>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#F0F0FF", letterSpacing: "0.04em", marginBottom: 18 }}>MEDIATOR PLATFORM</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { icon: "💳", label: "Pay Processing" },
                { icon: "🔒", label: "Security & Escrow" },
                { icon: "🤝", label: "Matching & Trust" },
              ].map(item => (
                <div key={item.label} style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 10, padding: "10px 8px",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}>
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{item.icon}</div>
                  <div style={{ fontSize: 9, color: "rgba(200,220,255,0.55)", fontWeight: 600, letterSpacing: "0.04em", lineHeight: 1.3 }}>{item.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", marginTop: "8px", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
              <div style={{
                background: "rgba(200,255,0,0.1)", border: "1px solid rgba(200,255,0,0.3)",
                borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 700,
                color: "#C8FF00", letterSpacing: "0.08em", textTransform: "uppercase",
              }}>Commission</div>
            </div>
          </div>
          <div style={{ marginTop: 8 }}>
            <div style={{
              background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: 6, padding: "3px 14px", fontSize: 10, fontWeight: 700,
              color: "#B47FFF", letterSpacing: "0.1em", textTransform: "uppercase",
            }}>TRUST</div>
          </div>
        </div>

        {/* Customer */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          <div style={{
            width: "100%", maxWidth: 200,
            background: "rgba(200,255,0,0.08)",
            border: "1px solid rgba(200,255,0,0.35)",
            borderRadius: 16, padding: "28px 20px", textAlign: "center",
          }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>👤</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#C8FF00", letterSpacing: "-0.01em", marginBottom: 4 }}>CUSTOMER&apos;S</div>
            <div style={{ fontSize: 11, color: "rgba(200,220,255,0.45)" }}>Buyer / User</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, marginTop: 16 }}>
            <div style={{
              background: "rgba(200,255,0,0.1)", border: "1px solid rgba(200,255,0,0.25)",
              borderRadius: 8, padding: "6px 14px", fontSize: 11, fontWeight: 600,
              color: "rgba(200,255,0,0.8)", letterSpacing: "0.04em",
            }}>← Payment </div>
          </div>
        </div>
      </div>

      {/* ── Flow arrows row ── */}
      <div className="mediator-flow-row">

        {/* Left */}
        <div style={{
          background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)",
          borderRadius: 12, padding: "14px 18px", display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <span style={{ color: "#B47FFF", flexShrink: 0, marginTop: 2 }}>→</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#E8E8FF", marginBottom: 3 }}>Vendor provides services</div>
            <div style={{ fontSize: 11, color: "rgba(200,220,255,0.45)" }}>Vendor registers, verifies & lists services on Payzon's mediator platform then processed</div>
          </div>
        </div>

        {/* Middle logo — hidden on mobile via CSS */}
        <div className="mediator-flow-logo" style={{
          background: "rgba(200,255,0,0.05)", border: "1px solid rgba(200,255,0,0.18)",
          borderRadius: 12, padding: "10px", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <img src={logo.src} style={{ width: 63, height: 63, borderRadius: "50%", display: "block" }} />
        </div>

        {/* Right */}
        <div style={{
          background: "rgba(200,255,0,0.05)", border: "1px solid rgba(200,255,0,0.18)",
          borderRadius: 12, padding: "14px 18px", display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <span style={{ color: "#C8FF00", flexShrink: 0, marginTop: 2 }}>←</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#E8E8FF", marginBottom: 3 }}>Customer receives services</div>
            <div style={{ fontSize: 11, color: "rgba(200,220,255,0.45)" }}>Customer pays through Payzon; platform deducts commission & pays vendor</div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Domain Website Card ─────────────────────────────────────────────────────
const DOMAINS = [
  { badge: "MAIN", name: "Payzon India", desc: "Corporate headquarters & main platform", url: "payzonindia.com", accent: "#C8FF00" },
  { badge: "API", name: "Payzon API", desc: "Developer API platform & documentation", url: "payzonapi.com", accent: "#B47FFF" },
  { badge: "MARKETING", name: "Payzon Marketing", desc: "Marketing & promotional services", url: "payzonmarketing.com", accent: "#00FFD1" },
  { badge: "E-COMMERCE", name: "Payzon Shoppy", desc: "E-commerce & shopping platform", url: "payzonshoppy.com", accent: "#FFB830" },
  { badge: "IT", name: "Payzon IT Services", desc: "Technology & IT solutions", url: "payzonitservices.com", accent: "#FF6B9D" },
];

// ─── Services data ────────────────────────────────────────────────────────────
const SERVICES = [
  {
    accent: "#C8FF00",
    link: "services/pay-in",
    title: "Pay In",
    desc: "Accept payments seamlessly from customers via UPI, IMPS, NEFT, RTGS, and net banking — all through a single unified API endpoint.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    accent: "#B47FFF",
    link: "services/pay-out",
    title: "Pay Out",
    desc: "Disburse funds to vendors, freelancers, or employees in real time. Bulk payouts supported with full reconciliation and audit trail.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="7" cy="15" r="1.5" fill="currentColor"/>
        <path d="M11 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    accent: "#00FFD1",
    link: "services/qr-code",
    title: "QR Code Payments",
    desc: "Auto-generate dynamic & static QR codes for checkout or POS. Customers scan and pay instantly — zero friction at the point of sale.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="14" y="2" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="2" y="14" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
        <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
        <circle cx="6" cy="18" r="1.5" fill="currentColor"/>
        <path d="M14 14h3v3M17 17h3v3M14 20h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    accent: "#FFB830",
    link: "services/virtual-account",
    title: "Virtual Account",
    desc: "Create unique virtual bank accounts for each customer or transaction. Automatic reconciliation — every payment maps to its source instantly.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M2 9h20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 14h3M6 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 13l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// ─── Restricted Categories data ───────────────────────────────────────────────
const RESTRICTED = [
  { icon: "🎰", title: "Gambling & Betting", desc: "Online casinos, fantasy sports with real money, lottery, sports betting or any wagering platform." },
  { icon: "🔞", title: "Adult Content", desc: "Pornography, adult entertainment services, escort platforms or any sexually explicit content businesses." },
  { icon: "💊", title: "Pharmaceuticals & Drugs", desc: "Unregulated drug sales, prescription medicine without a license, narcotics or controlled substances." },
  { icon: "🔫", title: "Weapons & Firearms", desc: "Unlicensed sale of firearms, ammunition, explosives, knives or any regulated weapons." },
  { icon: "💰", title: "Ponzi / Pyramid Schemes", desc: "Multi-level marketing fraud, investment scams, high-yield investment programs (HYIP) or chain money schemes." },
  { icon: "🪙", title: "Crypto / Unregulated Investments", desc: "Unlicensed cryptocurrency exchanges, unregistered investment schemes or unapproved forex trading platforms." },
  { icon: "🃏", title: "Skill Gaming (Unregulated)", desc: "Real-money card games, rummy or any skill-gaming platform without valid state-specific gaming licenses." },
  { icon: "🧪", title: "Tobacco & Nicotine Products", desc: "Online sale of cigarettes, e-cigarettes, vapes, smokeless tobacco or similar products to end consumers." },
  { icon: "🏴‍☠️", title: "Piracy & Counterfeit Goods", desc: "Digital piracy, fake products, counterfeit branded merchandise or sale of stolen intellectual property." },
  { icon: "🌐", title: "Dark Web / Illegal Marketplaces", desc: "Any business operating on or facilitating access to dark web markets or anonymous illegal trade platforms." },
  { icon: "📡", title: "Telemarketing Fraud", desc: "Deceptive telemarketing, phishing campaigns, robocall services or fake charity / NGO collections." },
  { icon: "🏦", title: "Unlicensed Money Services", desc: "Money lending, chit funds, deposits or payment aggregation without RBI authorization or NBFC registration." },
];

// ─── Why Choose Us data ───────────────────────────────────────────────────────
const WHY = [
  {
    title: "Seamless API Integration",
    desc: "RESTful APIs with comprehensive documentation. Integrate in under a day with SDKs for Node.js, Python, PHP, and more.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  },
  {
    title: "Bank-Grade Security",
    desc: "256-bit TLS encryption, PCI DSS Level 1 compliance, and multi-factor authentication protect every transaction.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5 4.5-1.35 8-6.25 8-11.5V6L12 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  },
  {
    title: "99.9% Uptime SLA",
    desc: "Multi-region infrastructure with auto-failover ensures your payment flows never stop, even during peak loads.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.7"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  },
  {
    title: "Transparent Pricing",
    desc: "Zero hidden fees, no setup cost. Pay only for what you use with clear, predictable per-transaction pricing.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.7"/><path d="M12 6v2M12 16v2M8.5 9.5a3.5 1.5 0 015 0v5a3.5 1.5 0 01-5 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  },
  {
    title: "Real-time Dashboard",
    desc: "Monitor transactions, reconcile payouts, generate reports, and set webhook alerts — all from one intuitive dashboard.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  },
  {
    title: "Dedicated Support",
    desc: "24/7 technical support from our Bhopal-based team. Direct access to engineers who know your integration inside out.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const { ref: statsRef, inView: statsInView } = useInView(0.3);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.7)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes warningPulse { 0%,100%{box-shadow:0 0 0 0 rgba(255,60,60,0)} 50%{box-shadow:0 0 0 8px rgba(255,60,60,0)} }

        .ap { background:#0D0B2A; color:#E8E8FF; font-family:'Sora',system-ui,sans-serif; min-height:100vh; position:relative; overflow-x:hidden; }
        .ap-cont { max-width:1160px; margin:0 auto; padding:0 28px; padding-top: 72px; padding-left: 32px; position:relative; z-index:1; }

        /* ── Hero ── */
        .ap-hero { padding:96px 0 72px; display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        .ap-hero-left { animation:fadeDown .7s ease both; }
        .ap-hero-right { animation:fadeUp .7s .15s ease both; }
        .ap-h1 { font-size:clamp(38px,5vw,68px); font-weight:800; letter-spacing:-.04em; line-height:1.02; color:#F0F0FF; margin-bottom:20px; }
        .ap-h1 em { font-style:normal; background:linear-gradient(120deg,#C8FF00,#A0D900); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .ap-hero-desc { font-size:15px; color:rgba(220,220,255,.52); line-height:1.75; margin-bottom:28px; max-width:480px; }
        .ap-hero-badges { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:32px; }
        .ap-hero-badge { background:rgba(124,58,237,.12); border:1px solid rgba(124,58,237,.3); border-radius:8px; padding:7px 14px; font-size:12px; font-weight:600; color:#B47FFF; }
        .ap-cta-row { display:flex; gap:12px; flex-wrap:wrap; }
        .ap-btn-primary { background:linear-gradient(135deg,#C8FF00,#A8E800); color:#0D0B2A; border:none; border-radius:10px; padding:13px 28px; font-size:14px; font-weight:800; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; transition:transform .2s,box-shadow .2s; font-family:inherit; }
        .ap-btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(200,255,0,.3); }
        .ap-btn-secondary { background:transparent; color:#E8E8FF; border:1px solid rgba(255,255,255,.15); border-radius:10px; padding:13px 28px; font-size:14px; font-weight:600; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; transition:border-color .2s,background .2s; font-family:inherit; }
        .ap-btn-secondary:hover { border-color:rgba(255,255,255,.35); background:rgba(255,255,255,.04); }

        /* ── Restricted CTA button ── */
        .ap-btn-restricted { background:linear-gradient(135deg,rgba(255,60,60,0.15),rgba(200,20,20,0.2)); color:#FF8080; border:1px solid rgba(255,60,60,0.4); border-radius:10px; padding:13px 28px; font-size:14px; font-weight:700; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; transition:all .2s; font-family:inherit; }
        .ap-btn-restricted:hover { background:linear-gradient(135deg,rgba(255,60,60,0.22),rgba(200,20,20,0.3)); border-color:rgba(255,80,80,0.6); transform:translateY(-2px); box-shadow:0 8px 28px rgba(255,60,60,0.15); }

        /* ── Identity card ── */
        .ap-id-card { background:rgba(255,255,255,.03); border:1px solid rgba(124,58,237,.3); border-radius:20px; padding:32px; position:relative; overflow:hidden; }
        .ap-id-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#C8FF00,#7C3AED,transparent); }
        .ap-id-logo { width:72px; height:72px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:32px; font-weight:800; font-family:monospace; margin-bottom:20px; }
        .ap-id-name { font-size:24px; font-weight:800; letter-spacing:-.03em; color:#F0F0FF; margin-bottom:4px; }
        .ap-id-sub { font-size:12px; color:rgba(200,220,255,.4); font-family:'JetBrains Mono',monospace; margin-bottom:20px; }
        .ap-id-row { display:flex; gap:8px; align-items:center; padding:10px 0; border-bottom:1px solid rgba(255,255,255,.05); font-size:13px; }
        .ap-id-row:last-child { border-bottom:none; }
        .ap-id-key { color:rgba(200,220,255,.38); min-width:90px; font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:.06em; }
        .ap-id-val { color:rgba(230,230,255,.82); }
        .ap-id-val a { color:#C8FF00; text-decoration:none; }
        .ap-id-val a:hover { text-decoration:underline; }

        /* ── Section wrapper ── */
        .ap-section { padding:80px 0; }
        .ap-section-head { text-align:center; margin-bottom:52px; }
        .ap-section-head h2 { font-size:clamp(28px,4vw,46px); font-weight:800; letter-spacing:-.03em; color:#F0F0FF; margin-bottom:12px; }
        .ap-section-head h2 em { font-style:normal; color:#C8FF00; }
        .ap-section-head p { font-size:15px; color:rgba(200,220,255,.48); max-width:520px; margin:0 auto; line-height:1.7; }

        /* ── Divider ── */
        .ap-divider { display:flex; align-items:center; gap:12px; padding:0 0 80px; }
        .ap-divider::before,.ap-divider::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,transparent,rgba(124,58,237,.4),transparent); }
        .ap-divider span { width:8px; height:8px; background:#C8FF00; border-radius:2px; transform:rotate(45deg); }

        /* ── Services grid ── */
        .services-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:20px; }

        /* ── Stats grid ── */
        .stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:80px; }

        /* ── Why grid (inner 2-col items) ── */
        .why-grid { display:grid; grid-template-columns:1fr 1fr; gap:28px 48px; }

        /* ── Why outer (text col + items col) ── */
        .why-choose-outer { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:start; }

        /* ── Domains ── */
        .domains-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:14px; }

        /* ── Mediator section ── */
        .mediator-grid { display:grid; grid-template-columns:35% 65%; gap:40px; align-items:center; }

        /* ── MediatorDiagram: inner 3-col ── */
        .mediator-inner-grid { display:grid; grid-template-columns:1fr auto 1fr; gap:0; align-items:center; position:relative; z-index:1; }

        /* ── MediatorDiagram: flow row ── */
        .mediator-flow-row { display:grid; grid-template-columns:1fr auto 1fr; gap:12px; margin-top:32px; align-items:center; }

        /* ── Restricted grid ── */
        .restricted-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }

        /* ── Contact strip ── */
        .contact-strip { background:rgba(255,255,255,.02); border:1px solid rgba(124,58,237,.22); border-radius:20px; padding:48px 40px; display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; position:relative; overflow:hidden; margin-bottom:40px; }
        .contact-strip::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#7C3AED,#C8FF00,transparent); }

        /* ── Footer ── */
        .ap-footer { border-top:1px solid rgba(200,255,0,.07); padding:28px 0; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; }
        .ap-footer-brand { font-size:18px; font-weight:800; letter-spacing:-.02em; }
        .ap-footer-brand em { font-style:normal; color:#C8FF00; }
        .ap-footer-copy { font-size:12px; color:rgba(200,220,255,.28); }

        /* ════════════════════════════════════════
           RESPONSIVE BREAKPOINTS
           ════════════════════════════════════════ */

        /* ── ≤900px ── */
        @media(max-width:900px) {
          .ap-hero { grid-template-columns:1fr; gap:36px; padding:72px 0 56px; }
          .mediator-grid { grid-template-columns:1fr; }
          .domains-grid { grid-template-columns:repeat(3,1fr); }
          .restricted-grid { grid-template-columns:repeat(2,1fr); }
        }

        /* ── ≤800px ── */
        @media(max-width:800px) {
          .ap-cont { padding:0 18px; padding-top:60px; }
          .stats-grid { grid-template-columns:1fr 1fr; }
          .why-choose-outer { grid-template-columns:1fr; gap:32px; }
        }

        /* ── ≤700px ── */
        @media(max-width:700px) {
          .why-grid { grid-template-columns:1fr; }
          .contact-strip { grid-template-columns:1fr; gap:28px; padding:32px 24px; }
        }

        /* ── ≤600px ── */
        @media(max-width:600px) {
          .ap-cont { padding:0 16px; padding-top:56px; }
          .mediator-inner-grid { grid-template-columns:1fr; gap:20px; }
          .mediator-flow-row { grid-template-columns:1fr; gap:10px; }
          .mediator-flow-logo { display:none; }
          .services-grid { grid-template-columns:1fr; }
          .domains-grid { grid-template-columns:1fr 1fr; }
          .restricted-grid { grid-template-columns:1fr; }
          .ap-hero { padding:56px 0 40px; }
          .ap-section-head { margin-bottom:32px; }
          .ap-section { padding:56px 0; }
          .why-choose-outer { gap:24px; }
        }

        /* ── ≤420px ── */
        @media(max-width:420px) {
          .domains-grid { grid-template-columns:1fr; }
          .stats-grid { grid-template-columns:1fr 1fr; gap:10px; }
          .ap-hero-badges { gap:8px; }
          .ap-cta-row { flex-direction:column; }
          .ap-btn-primary, .ap-btn-secondary { width:100%; justify-content:center; }
          .contact-strip { padding:28px 16px; }
        }
      `}</style>

      <div className="ap">
        <BgDecor />

        <div className="ap-cont pl-[16px] md:pl-[46px]">
          {/* ── HERO ── */}
          <section className="ap-hero">
            <div className="ap-hero-left">
              <Eyebrow text="About Payzon API" />
              <h1 className="ap-h1">
                India's Trusted<br />
                <em>Payment</em><br />
                Mediator.
              </h1>
              <p className="ap-hero-desc">
                Payzon API is the developer-facing arm of Payzon India — powering seamless
                Pay In, Pay Out, QR Codes, and Virtual Accounts for thousands of businesses
                across every industry.
              </p>
              <div className="ap-hero-badges">
                {["Pay In", "Pay Out", "QR Payments", "Virtual Accounts"].map(b => (
                  <span key={b} className="ap-hero-badge">{b}</span>
                ))}
              </div>
              <div className="ap-cta-row">
                <a href="/contact" target="_blank" rel="noreferrer" className="ap-btn-primary">
                  More Info
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8h10M8 4l4 4-4 4" stroke="#0D0B2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="https://payzonindia.com" target="_blank" rel="noreferrer" className="ap-btn-secondary">
                  Visit Payzon India
                </a>
              </div>
            </div>

            {/* Identity Card */}
            <div className="ap-hero-right">
              <div className="ap-id-card">
                <div className="ap-id-logo">
                  <img style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }} src={logo.src} />
                </div>
                <div className="ap-id-name">Payzon API</div>
                <div className="ap-id-sub">payzonapi.com · Developer Platform</div>
                {[
                  { k: "Parent Company", v: "Payzon India" },
                  { k: "Founded", v: "Bhopal, Madhya Pradesh" },
                  { k: "Role", v: "Payment Intermediator / Mediator" },
                  { k: "Email", v: <a href="mailto:info@payzonindia.com">info@payzonindia.com</a> },
                  { k: "Phone", v: "(+91) 755 485 9540" },
                  { k: "Address", v: "B1, Raisen Rd, Manak Vihar, Patel Nagar, Bhopal, Madhya Pradesh 462022" },
                  { k: "Hours", v: "Mon – Sat · 10:00 – 17:00" },
                ].map(item => (
                  <div key={item.k} className="ap-id-row">
                    <span className="ap-id-key">{item.k}</span>
                    <span className="ap-id-val">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="ap-divider"><span /></div>

          {/* ── STATS ── */}
          <div ref={statsRef} className="stats-grid">
            <StatCard value={50} suffix="K+" label="Active Merchants" inView={statsInView} />
            <StatCard value={99} suffix=".9%" label="Uptime SLA" inView={statsInView} />
            <StatCard value={5} suffix="+" label="Platforms" inView={statsInView} />
            <StatCard value={24} suffix="/7" label="Expert Support" inView={statsInView} />
          </div>

          {/* ── WHO WE ARE ── */}
          <section className="ap-section" style={{ paddingTop: 0 }}>
            <div className="ap-section-head">
              <Eyebrow text="Who We Are" />
              <h2>The <em>Intermediator</em> Layer<br />Between Vendors & Customers</h2>
              <p>
                Payzon India is the parent organization. Payzon API is the technology backbone —
                a middleman platform that connects service providers, businesses, and customers
                through secure, compliant, and instant payment rails.
              </p>
            </div>
            <div className="mediator-grid">
              <div>
                <h3 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#F0F0FF", marginBottom: 16, lineHeight: 1.2 }}>
                  We sit in the <span style={{ color: "#C8FF00" }}>middle</span> — so you don't have to.
                </h3>
                <p style={{ fontSize: 14, color: "rgba(200,220,255,0.52)", lineHeight: 1.78, marginBottom: 20 }}>
                  As a fintech mediator, Payzon API handles the complex web of payment processing,
                  security, fraud prevention, and fund disbursement — so your business can focus
                  on what it does best.
                </p>
                <p style={{ fontSize: 14, color: "rgba(200,220,255,0.52)", lineHeight: 1.78, marginBottom: 28 }}>
                  When a customer pays, Payzon receives the funds, verifies the transaction,
                  deducts the platform commission, and disburses the remainder to the vendor —
                  all in real time, all with full audit visibility.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Vendor registration & service listing",
                    "Secure escrow holding until delivery",
                    "Commission deduction & payout automation",
                    "Full dispute resolution & chargeback management",
                  ].map(item => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(200,255,0,0.12)", border: "1px solid rgba(200,255,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ fontSize: 13.5, color: "rgba(220,220,255,0.7)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <MediatorDiagram />
            </div>
          </section>

          <div className="ap-divider"><span /></div>

          {/* ── SERVICES ── */}
          <section className="ap-section" style={{ paddingTop: 0 }}>
            <div className="ap-section-head">
              <Eyebrow text="Our Services" />
              <h2>Everything Your Business<br /><em>Needs to Get Paid</em></h2>
              <p>
                Four core payment primitives, one unified API. Mix and match to build exactly
                the payment experience your product demands.
              </p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s, i) => (
                <ServiceCard key={s.title} {...s} delay={i * 0.08} />
              ))}
            </div>
          </section>

          <div className="ap-divider"><span /></div>

          {/* ── RESTRICTED CATEGORIES ── */}
          <section className="ap-section" style={{ paddingTop: 0 }}>
            {/* Warning banner */}
            <div style={{
              background: "linear-gradient(135deg, rgba(255,40,40,0.08) 0%, rgba(180,10,10,0.12) 100%)",
              border: "1px solid rgba(255,60,60,0.3)",
              borderRadius: 16,
              padding: "20px 28px",
              marginBottom: 48,
              display: "flex",
              alignItems: "center",
              gap: 16,
              position: "relative",
              overflow: "hidden",
            }}>
              {/* top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(255,60,60,0.7), transparent)" }} />
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: "rgba(255,60,60,0.12)",
                border: "1px solid rgba(255,60,60,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
              }}>
                ⚠️
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#FF9090", letterSpacing: "0.02em", marginBottom: 4 }}>
                  Restricted & Prohibited Business Categories
                </div>
                <div style={{ fontSize: 12.5, color: "rgba(255,180,180,0.6)", lineHeight: 1.6 }}>
                  The following business types are <strong style={{ color: "rgba(255,120,120,0.9)" }}>not eligible</strong> to use Payzon API's payment services.
                  Attempting to onboard under these categories may result in immediate account termination and regulatory reporting.
                </div>
              </div>
              <a
                href="/Restricted-Services"
                style={{
                  flexShrink: 0,
                  background: "rgba(255,60,60,0.12)",
                  border: "1px solid rgba(255,60,60,0.35)",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#FF8080",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,60,60,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,80,80,0.55)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,60,60,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,60,60,0.35)";
                }}
              >
                Full List
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </a>
            </div>

            {/* Section head */}
            <div className="ap-section-head" style={{ marginBottom: 36 }}>
              <Eyebrow text="Restricted Categories" variant="red" />
              <h2 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#F0F0FF", marginBottom: 12 }}>
                Services We <span style={{ color: "#FF6060" }}>Do Not Support</span>
              </h2>
              <p style={{ fontSize: 15, color: "rgba(200,220,255,0.48)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
                In compliance with RBI regulations, NPCI guidelines, and our internal risk framework,
                Payzon API prohibits payment processing for the following categories.
              </p>
            </div>

            {/* Restricted cards grid */}
            <div className="restricted-grid">
              {RESTRICTED.map(item => (
                <RestrictedCard key={item.title} {...item} />
              ))}
            </div>

            {/* Bottom CTA strip */}
            <div style={{
              marginTop: 36,
              background: "rgba(255,40,40,0.04)",
              border: "1px solid rgba(255,60,60,0.18)",
              borderRadius: 14,
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#FFB0B0", marginBottom: 4 }}>
                  Not sure if your business qualifies?
                </div>
                <div style={{ fontSize: 13, color: "rgba(200,180,180,0.55)", lineHeight: 1.6 }}>
                  Review the complete restricted services policy or reach out to our compliance team for a pre-assessment.
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/Restricted-Services" className="ap-btn-restricted">
                  View Full Policy
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M2 8h10M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="/contact" target="_blank" rel="noreferrer" className="ap-btn-secondary">
                  Contact Compliance
                </a>
              </div>
            </div>
          </section>

          <div className="ap-divider"><span /></div>

          {/* ── WHY CHOOSE US ── */}
          <section className="ap-section" style={{ paddingTop: 0 }}>
            <div className="why-choose-outer">
              <div>
                <Eyebrow text="Why Choose Us" />
                <h2 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#F0F0FF", marginBottom: 16, lineHeight: 1.1 }}>
                  Built for builders,<br /><span style={{ color: "#C8FF00" }}>trusted by thousands.</span>
                </h2>
                <p style={{ fontSize: 14.5, color: "rgba(200,220,255,0.48)", lineHeight: 1.75, marginBottom: 32 }}>
                  We aren't just a payment gateway — we're your end-to-end financial infrastructure.
                  From the first API call to the final payout, we make money movement invisible.
                </p>
                {/* Quick fact strip */}
                <div style={{ background: "rgba(200,255,0,0.05)", border: "1px solid rgba(200,255,0,0.18)", borderRadius: 14, padding: "20px 24px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#C8FF00", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Quick Facts</div>
                  {[
                    ["Headquarters", "Bhopal, Madhya Pradesh"],
                    ["Parent Brand", "Payzon India"],
                    ["Operating Since", "Active & Growing"],
                    ["Compliance", "PCI DSS · RBI Guidelines"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: 13 }}>
                      <span style={{ color: "rgba(200,220,255,0.4)", fontWeight: 600 }}>{k}</span>
                      <span style={{ color: "rgba(230,230,255,0.8)" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="why-grid">
                {WHY.map(item => <WhyItem key={item.title} {...item} />)}
              </div>
            </div>
          </section>

          <div className="ap-divider"><span /></div>

          {/* ── DOMAINS / ECOSYSTEM ── */}
          <section className="ap-section" style={{ paddingTop: 0 }}>
            <div className="ap-section-head">
              <Eyebrow text="Our Ecosystem" />
              <h2>One Brand, <em>Five Platforms</em></h2>
              <p>Payzon India powers a full ecosystem of digital services across payments, marketing, e-commerce and IT.</p>
            </div>
            <div className="domains-grid">
              {DOMAINS.map(d => (
                <a
                  key={d.url}
                  href={`https://${d.url}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    borderRadius: 16, padding: "22px 18px",
                    textDecoration: "none", display: "flex",
                    flexDirection: "column", gap: 10,
                    transition: "all 0.25s", position: "relative", overflow: "hidden",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${d.accent}55`;
                    (e.currentTarget as HTMLAnchorElement).style.background = `${d.accent}08`;
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.2)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.35)", borderRadius: 4, padding: "2px 7px", color: "#B47FFF", width: "fit-content" }}>
                    {d.badge}
                  </span>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#E8E8FF", letterSpacing: "-0.015em" }}>{d.name}</div>
                  <div style={{ fontSize: 11, color: "rgba(200,220,255,0.42)", lineHeight: 1.45 }}>{d.desc}</div>
                  <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: d.accent, opacity: 0.7, display: "flex", alignItems: "center", gap: 4, marginTop: "auto" }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    {d.url}
                  </div>
                </a>
              ))}
            </div>
          </section>

          <div className="ap-divider"><span /></div>

          {/* ── CONTACT STRIP ── */}
          <section style={{ paddingBottom: 80 }}>
            <div className="contact-strip">
              <div>
                <Eyebrow text="Get In Touch" />
                <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#F0F0FF", marginBottom: 12, lineHeight: 1.15 }}>
                  Ready to integrate<br /><span style={{ color: "#C8FF00" }}>Payzon API?</span>
                </h2>
                <p style={{ fontSize: 14, color: "rgba(200,220,255,0.48)", lineHeight: 1.7, marginBottom: 28 }}>
                  Our team is ready to help you get started. Reach out via any channel below
                  or explore our documentation to build your first integration.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="mailto:info@payzonindia.com" className="ap-btn-primary">
                    Email Us
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8h10M8 4l4 4-4 4" stroke="#0D0B2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <a href="/contact" target="_blank" rel="noreferrer" className="ap-btn-secondary">
                    Get Call
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "📍", label: "Address", val: "B1, Raisen Rd, Manak Vihar, Patel Nagar, Bhopal, Madhya Pradesh 462022" },
                  { icon: "📧", label: "Email", val: "info@payzonindia.com" },
                  { icon: "📞", label: "Phone", val: "(+91) 755 485 9540" },
                  { icon: "🕐", label: "Hours", val: "Mon – Sat · 10:00 – 20:00 IST" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.28)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(200,220,255,0.38)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: 13.5, color: "rgba(230,230,255,0.82)" }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FOOTER ── */}
          <footer className="ap-footer">
            <div className="ap-footer-brand ">Payzonindia Private Limited<em>.</em></div>
            <p className="ap-footer-copy mt-[10px] md:mt-0">B1, Raisen Rd, Manak Vihar, Patel Nagar, Bhopal, Madhya Pradesh 462022 · India</p>
          </footer>
        </div>
      </div>
    </>
  );
}