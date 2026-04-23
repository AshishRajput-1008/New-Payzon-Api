"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceWhatIs {
  heading: string;
  body: string;
  highlights: string[];
}

export interface ServiceUseCase {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ServiceTheme {
  primary: string;
  primaryLight: string;
  primaryMuted: string;
  heroGlow: string;
  badgeText: string;
  badgeBg: string;
  badgeBorder: string;
  ctaGradient: string;
}

export interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  heroImageSrc: string;
  heroImageAlt: string;
  heroIcon: ReactNode;
  theme: ServiceTheme;
  features: ServiceFeature[];
  benefits: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaHref?: string;
  stats: { value: string; label: string }[];
  relatedServices: { title: string; href: string; description: string; icon: ReactNode }[];
  whatIs?: ServiceWhatIs;
  useCases?: ServiceUseCase[];
}

const NAV_FONT: React.CSSProperties = {
  fontFamily: '"SuisseIntl", Arial, Helvetica, sans-serif',
  fontWeight: 600,
};

export default function ServicePageLayout({
  badge,
  title,
  subtitle,
  description,
  heroImageSrc,
  heroImageAlt,
  heroIcon,
  theme,
  features,
  benefits,
  ctaTitle,
  ctaDescription,
  ctaHref = "/https://payzonapi.com/account/sign-in",
  stats,
  relatedServices,
  whatIs,
  useCases,
}: ServicePageProps) {
  const p  = theme.primary;
  const pl = theme.primaryLight;
  const pm = theme.primaryMuted;

  return (
    <>
      <style>{`
        .sp-root {
          background: #06030f;
          color: #fff;
          font-family: "SuisseIntl", Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }
        .sp-grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        /* ── Hero ── */
        .sp-hero { position: relative; padding: 110px 0 90px; overflow: hidden; }
        .sp-badge {
          display: inline-block;
          background: ${theme.badgeBg}; border: 1px solid ${theme.badgeBorder};
          color: ${theme.badgeText}; font-size: 10.5px; font-weight: 700;
          letter-spacing: .15em; text-transform: uppercase;
          padding: 5px 14px; border-radius: 20px; margin-bottom: 22px;
        }
        .sp-hero-title    { font-size: clamp(40px,5.5vw,68px); font-weight: 800; line-height: 1.06; letter-spacing: -.025em; color: #fff; margin-bottom: 6px; }
        .sp-hero-subtitle { font-size: clamp(20px,2.8vw,30px); font-weight: 700; color: ${p}; margin-bottom: 22px; letter-spacing: -.01em; }
        .sp-hero-desc     { font-size: 16.5px; line-height: 1.78; color: rgba(255,255,255,0.58); max-width: 520px; margin-bottom: 38px; font-weight: 400; }
        .sp-cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: ${p}; color: #fff; font-weight: 700; font-size: 14px;
          padding: 13px 26px; border-radius: 50px; text-decoration: none;
          transition: filter .2s, transform .2s; border: none; cursor: pointer;
        }
        .sp-cta-primary:hover { filter: brightness(1.12); transform: translateY(-1px); }
        .sp-cta-outline {
          display: inline-flex; align-items: center; gap: 8px; background: transparent;
          color: #ffffff; font-weight: 600; font-size: 14px;
          padding: 13px 26px; border-radius: 50px; text-decoration: none;
          background-color:oklch(64.5% 0.246 16.439);
          border: 1px solid rgba(255,255,255,0.18);
          transition: border-color .2s, color .2s; cursor: pointer;
        }
        .sp-cta-outline:hover { border-color: rgba(255,255,255,0.45); color: #fff; }

        .sp-hero-imgcard {
          position: relative; border-radius: 24px; overflow: hidden; aspect-ratio: 4/3;
          border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 0 80px ${theme.heroGlow};
        }
        .sp-hero-imgcard img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .sp-hero-img-overlay { position: absolute; inset: 0; background: linear-gradient(135deg,rgba(6,3,15,0.55) 0%,transparent 60%); }
        .sp-hero-icon-badge {
          position: absolute; bottom: 20px; left: 20px;
          background: rgba(6,3,15,0.75); backdrop-filter: blur(12px);
          border: 1px solid ${theme.badgeBorder}; border-radius: 16px;
          padding: 14px 18px; display: flex; align-items: center; gap: 12px;
        }
        .sp-hero-icon-inner { width: 48px; height: 48px; border-radius: 12px; background: ${pm}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .sp-hero-icon-label { font-size: 13px; font-weight: 700; color: #fff; line-height: 1.3; }
        .sp-hero-icon-sub   { font-size: 11px; color: ${p}; font-weight: 500; }

        /* ── Stats ── */
        .sp-stats {
          background: rgba(255,255,255,0.025);
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 28px 0;
        }
        .sp-stat { text-align: center; padding: 0 20px; border-right: 1px solid rgba(255,255,255,0.07); }
        .sp-stat:last-child { border-right: none; }
        .sp-stat-val { font-size: 28px; font-weight: 800; color: ${p}; letter-spacing: -.025em; line-height: 1; margin-bottom: 5px; }
        .sp-stat-lbl { font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 500; letter-spacing: .03em; }

        /* ═══════════════════════════════════════
           ── WHAT IS  ─ Editorial layout ────────
        ═══════════════════════════════════════ */
        .sp-whatis {
          position: relative; padding: 100px 0 88px; overflow: hidden;
        }
        /* giant watermark numeral */
        .sp-whatis-wm {
          position: absolute; right: -30px; top: -30px;
          font-size: clamp(140px, 20vw, 260px); font-weight: 900; line-height: 1;
          letter-spacing: -.08em; color: ${p}; opacity: .04;
          pointer-events: none; user-select: none;
        }

        /* top label bar ─ full width rule */
        .sp-whatis-bar {
          display: flex; align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding-bottom: 24px; margin-bottom: 60px;
        }
        .sp-whatis-bar-lhs {
          display: flex; align-items: center; gap: 12px;
        }
        .sp-whatis-bar-rule {
          width: 32px; height: 2px; border-radius: 2px; background: ${p};
        }
        .sp-whatis-bar-label {
          font-size: 10px; font-weight: 800; letter-spacing: .2em;
          text-transform: uppercase; color: ${p};
        }
        .sp-whatis-bar-sep {
          width: 1px; height: 14px; background: rgba(255,255,255,0.14);
        }
        .sp-whatis-bar-sub {
          font-size: 10px; font-weight: 600; letter-spacing: .12em;
          text-transform: uppercase; color: rgba(255,255,255,0.22);
        }
        .sp-whatis-bar-pill {
          background: ${theme.badgeBg}; border: 1px solid ${theme.badgeBorder};
          color: ${theme.badgeText}; font-size: 9.5px; font-weight: 800;
          letter-spacing: .16em; text-transform: uppercase;
          padding: 4px 12px; border-radius: 20px;
        }

        /* heading column (sticky on desktop) */
        .sp-whatis-h-wrap { position: sticky; top: 96px; }
        .sp-whatis-h {
          font-size: clamp(30px, 4vw, 50px); font-weight: 900;
          line-height: 1.06; letter-spacing: -.03em; color: #fff; margin: 0 0 22px;
        }
        .sp-whatis-h em { font-style: normal; color: ${p}; }
        .sp-whatis-h-accent {
          width: 48px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, ${p}, transparent);
        }

        /* right: body + 2-col highlight cards */
        .sp-whatis-body {
          font-size: 16px; line-height: 1.84; color: rgba(255,255,255,0.56);
          font-weight: 400; margin-bottom: 36px;
        }
        .sp-whatis-hl-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }
        @media(max-width: 767px) { .sp-whatis-hl-grid { grid-template-columns: 1fr; } }
        .sp-whatis-hl {
          display: flex; align-items: flex-start; gap: 11px;
          padding: 13px 15px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-left: 2px solid ${p};
          border-radius: 0 10px 10px 0;
          font-size: 12.5px; line-height: 1.58; color: rgba(255,255,255,0.65);
          font-weight: 400;
          transition: background .2s, border-left-color .2s;
        }
        .sp-whatis-hl:hover {
          background: rgba(255,255,255,0.04);
          border-left-color: ${pl};
        }
        .sp-whatis-hl-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${p}; flex-shrink: 0; margin-top: 5px;
        }

        /* ═══════════════════════════════════════
           ── USE CASES — 4 × 2 grid ─────────────
        ═══════════════════════════════════════ */
        .sp-uc-section {
          padding: 90px 0;
          background: rgba(255,255,255,0.018);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          position: relative; overflow: hidden;
        }
        .sp-uc-section::before {
          content: ''; position: absolute;
          top: -100px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 360px;
          background: radial-gradient(ellipse, ${theme.heroGlow} 0%, transparent 68%);
          opacity: .3; pointer-events: none;
        }

        /* header row */
        .sp-uc-hdr {
          display: flex; align-items: flex-end;
          justify-content: space-between; gap: 32px; margin-bottom: 48px;
        }
        .sp-uc-hdr-r {
          max-width: 320px; font-size: 13.5px; line-height: 1.7;
          color: rgba(255,255,255,0.38); font-weight: 400;
          padding-bottom: 4px; text-align: right;
        }

        /* ── Mobile fix for use cases header ── */
        @media(max-width: 767px) {
          .sp-uc-hdr {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 36px;
          }
          .sp-uc-hdr > div:first-child {
            width: 100%;
          }
          .sp-uc-hdr-r {
            text-align: left;
            max-width: 100%;
            width: 100%;
            padding-bottom: 0;
          }
        }

        /* 4-col grid */
        .sp-uc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        @media(max-width: 1199px) { .sp-uc-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(max-width: 575px)  { .sp-uc-grid { grid-template-columns: 1fr; } }

        .sp-uc-card {
          position: relative; overflow: hidden;
          background: rgba(255,255,255,0.028);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px; padding: 24px 20px 22px;
          display: flex; flex-direction: column;
          transition: border-color .28s, transform .28s, background .28s;
        }
        /* top colour line */
        .sp-uc-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent 0%, ${p} 50%, transparent 100%);
          opacity: 0; transition: opacity .28s;
        }
        /* inner radial glow */
        .sp-uc-card::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 90% 55% at 50% -5%, ${pm} 0%, transparent 70%);
          opacity: 0; transition: opacity .3s; pointer-events: none;
        }
        .sp-uc-card:hover { border-color: ${theme.badgeBorder}; background: rgba(255,255,255,0.05); transform: translateY(-5px); }
        .sp-uc-card:hover::after  { opacity: 1; }
        .sp-uc-card:hover::before { opacity: 1; }

        .sp-uc-top {
          display: flex; align-items: flex-start;
          justify-content: space-between; margin-bottom: 14px;
        }
        .sp-uc-icon {
          width: 42px; height: 42px; border-radius: 11px;
          background: ${pm}; border: 1px solid ${theme.badgeBorder};
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .sp-uc-index {
          font-size: 9.5px; font-weight: 800; letter-spacing: .1em;
          color: rgba(255,255,255,0.18); padding-top: 3px;
        }
        .sp-uc-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px; letter-spacing: -.01em; line-height: 1.3; }
        .sp-uc-desc  { font-size: 12px; line-height: 1.7; color: rgba(255,255,255,0.4); font-weight: 400; flex: 1; }
        .sp-uc-foot  {
          display: flex; align-items: center; gap: 6px;
          margin-top: 16px; padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-size: 10px; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; color: ${p}; opacity: .7;
        }
        .sp-uc-foot-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, ${p}, transparent); opacity: .4;
        }

        /* ── Sections ── */
        .sp-section      { padding: 88px 0; }
        .sp-section-badge { font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: ${p}; margin-bottom: 12px; }
        .sp-section-title { font-size: clamp(26px,3.6vw,40px); font-weight: 800; line-height: 1.1; letter-spacing: -.022em; color: #fff; margin-bottom: 14px; }
        .sp-section-desc  { font-size: 15.5px; line-height: 1.78; color: rgba(255,255,255,0.5); max-width: 480px; font-weight: 400; }

        /* ── Feature cards ── */
        .sp-feat-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; padding: 28px; height: 100%;
          transition: border-color .25s, background .25s; position: relative; overflow: hidden;
        }
        .sp-feat-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, ${p}, transparent); opacity: 0; transition: opacity .25s;
        }
        .sp-feat-card:hover { border-color: ${theme.badgeBorder}; background: rgba(255,255,255,0.05); }
        .sp-feat-card:hover::after { opacity: 1; }
        .sp-feat-icon  { width: 44px; height: 44px; background: ${pm}; border-radius: 11px; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
        .sp-feat-title { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 9px; letter-spacing: -.01em; }
        .sp-feat-desc  { font-size: 13.5px; line-height: 1.7; color: rgba(255,255,255,0.48); font-weight: 400; }

        /* ── Benefits + code ── */
        .sp-benefit { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; font-size: 14.5px; color: rgba(255,255,255,0.72); font-weight: 400; line-height: 1.6; }
        .sp-code-card { background: rgba(0,0,0,0.45); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; overflow: hidden; }
        .sp-code-topbar { display: flex; align-items: center; gap: 7px; padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.03); }
        .sp-code-dot    { width: 11px; height: 11px; border-radius: 50%; }
        .sp-code-body   { padding: 22px 24px; font-family: "Courier New", monospace; font-size: 12.5px; line-height: 1.85; color: rgba(255,255,255,0.72); }
        .sp-code-success { margin: 0 20px 20px; padding: 13px 18px; background: ${pm}; border: 1px solid ${theme.badgeBorder}; border-radius: 11px; }
        .sp-code-success-title { font-size: 12px; color: ${p}; font-weight: 700; margin-bottom: 3px; }
        .sp-code-success-sub   { font-size: 11.5px; color: rgba(255,255,255,0.4); }

        /* ── CTA ── */
        .sp-cta-section {
          position: relative; border-radius: 28px; overflow: hidden;
          background: ${theme.ctaGradient};
          border: 1px solid ${theme.badgeBorder};
          padding: 72px 40px; text-align: center; margin: 0 0 88px;
        }
        .sp-cta-section::before {
          content: ''; position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 480px; height: 220px;
          background: radial-gradient(ellipse, ${theme.heroGlow} 0%, transparent 70%);
          pointer-events: none;
        }
        .sp-cta-title { font-size: clamp(24px,3.5vw,38px); font-weight: 800; letter-spacing: -.022em; color: #fff; margin-bottom: 14px; position: relative; }
        .sp-cta-desc  { font-size: 15.5px; color: rgba(255,255,255,0.58); margin-bottom: 36px; max-width: 460px; margin-left: auto; margin-right: auto; line-height: 1.75; font-weight: 400; position: relative; }
        .sp-cta-btns  { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; position: relative; }

        /* ── Related ── */
        .sp-rel-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px; padding: 26px; text-decoration: none; display: block;
          transition: border-color .2s, transform .2s;
        }
        .sp-rel-card:hover { border-color: ${theme.badgeBorder}; transform: translateY(-3px); }
        .sp-rel-icon  { width: 40px; height: 40px; background: rgba(255,255,255,0.06); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
        .sp-rel-title { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .sp-rel-desc  { font-size: 12.5px; color: rgba(255,255,255,0.42); line-height: 1.62; font-weight: 400; }
        .sp-rel-link  { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; color: ${p}; font-weight: 700; margin-top: 13px; }
      `}</style>

      <div className="sp-root">

        {/* ── Hero ── */}
        <section className="sp-hero" style={{ background: `radial-gradient(ellipse 90% 55% at 60% -15%, ${theme.heroGlow} 0%, #06030f 60%)` }}>
          <div className="sp-grid-overlay" />
          <div className="container">
            <div className="row align-items-center g-5 px-6 pr-3">
              <div className="col-lg-5">
                <div className="sp-badge">{badge}</div>
                <h1 className="sp-hero-title">{title}</h1>
                <p className="sp-hero-subtitle">{subtitle}</p>
                <p className="sp-hero-desc">{description}</p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link href="https://payzonapi.com/account/sign-in" className="sp-cta-primary" style={NAV_FONT}>
                    Get Started <ArrowUpRight size={16} />
                  </Link>
                  <Link href="/contact" className="sp-cta-outline" style={NAV_FONT}>
                  More Info
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="sp-hero-imgcard">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={heroImageSrc} alt={heroImageAlt} />
                  <div className="sp-hero-img-overlay" />
                  <div className="sp-hero-icon-badge">
                    <div className="sp-hero-icon-inner">{heroIcon}</div>
                    <div>
                      <div className="sp-hero-icon-label">{title}</div>
                      <div className="sp-hero-icon-sub">{subtitle}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <div className="sp-stats">
          <div className="container">
            <div className="row g-0">
              {stats.map((s, i) => (
                <div key={i} className="col-6 col-md-3">
                  <div className="sp-stat">
                    <div className="sp-stat-val">{s.value}</div>
                    <div className="sp-stat-lbl">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
            ── WHAT IS — editorial ─────────
        ════════════════════════════════ */}
        {whatIs && (
          <section className="sp-whatis">
            <div className="sp-whatis-wm" aria-hidden="true">01</div>
            <div className="container" style={{ position: "relative" }}>

              {/* top bar */}
              <div className="sp-whatis-bar">
                <div className="sp-whatis-bar-lhs">
                  <div className="sp-whatis-bar-rule" />
                  <span className="sp-whatis-bar-label">Overview</span>
                  <div className="sp-whatis-bar-sep" />
                  <span className="sp-whatis-bar-sub">Section 01</span>
                </div>
                <span className="sp-whatis-bar-pill">{badge}</span>
              </div>

              {/* two-column */}
              <div className="row g-5 align-items-start">
                <div className="col-lg-4">
                  <div className="sp-whatis-h-wrap">
                    <h2
                      className="sp-whatis-h"
                      dangerouslySetInnerHTML={{ __html: whatIs.heading }}
                    />
                    <div className="sp-whatis-h-accent" />
                  </div>
                </div>
                <div className="col-lg-7 offset-lg-1">
                  <p className="sp-whatis-body">{whatIs.body}</p>
                  <div className="sp-whatis-hl-grid">
                    {whatIs.highlights.map((h, i) => (
                      <div key={i} className="sp-whatis-hl">
                        <div className="sp-whatis-hl-dot" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ════════════════════════════════
            ── USE CASES — 4×2 grid ────────
        ════════════════════════════════ */}
        {useCases && useCases.length > 0 && (
          <section className="sp-uc-section">
            <div className="container" style={{ position: "relative" }}>

              <div className="sp-uc-hdr">
                <div>
                  <div className="sp-section-badge">Use Cases</div>
                  <h2 className="sp-section-title" style={{ marginBottom: 0 }}>
                    Who Uses{" "}
                    {badge.charAt(0) + badge.slice(1).toLowerCase()}?
                  </h2>
                </div>
                <div className="sp-uc-hdr-r">
                  From early-stage startups to enterprise platforms — every industry that moves money relies on this service to stay efficient, compliant, and competitive.
                </div>
              </div>

              <div className="sp-uc-grid">
                {useCases.map((uc, i) => (
                  <div key={i} className="sp-uc-card">
                    <div className="sp-uc-top">
                      <div className="sp-uc-icon">{uc.icon}</div>
                      <span className="sp-uc-index">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="sp-uc-title">{uc.title}</div>
                    <div className="sp-uc-desc">{uc.description}</div>
                    <div className="sp-uc-foot">
                      <div className="sp-uc-foot-line" />
                      {badge}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* ── Features ── */}
        <section className="sp-section">
          <div className="container">
            <div className="row align-items-end mb-5 g-4">
              <div className="col-lg-5">
                <div className="sp-section-badge">Core Features</div>
                <h2 className="sp-section-title">Everything You Need,<br />Built In</h2>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <p className="sp-section-desc">
                  Powerful features engineered for reliability, scalability, and seamless integration into your existing workflows.
                </p>
              </div>
            </div>
            <div className="row g-4">
              {features.map((f, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="sp-feat-card">
                    <div className="sp-feat-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="3.5" fill={p} />
                        <circle cx="10" cy="10" r="8" stroke={p} strokeWidth="1" strokeOpacity="0.4" />
                      </svg>
                    </div>
                    <h3 className="sp-feat-title">{f.title}</h3>
                    <p className="sp-feat-desc">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits + API snippet ── */}
        <section className="sp-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="sp-section-badge">Why Choose Us</div>
                <h2 className="sp-section-title">Built for Scale,<br />Designed for Trust</h2>
                <div className="mt-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="sp-benefit">
                      <CheckCircle2 size={17} color={p} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="sp-code-card">
                  <div className="sp-code-topbar">
                    <div className="sp-code-dot" style={{ background: "#FF5F56" }} />
                    <div className="sp-code-dot" style={{ background: "#FFBD2E" }} />
                    <div className="sp-code-dot" style={{ background: "#27C93F" }} />
                    <span style={{ marginLeft: 10, fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>payzon-api.js</span>
                  </div>
                  <div className="sp-code-body">
                    <span style={{ color: p }}>POST</span> /v1/transactions<br />
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>Authorization: Bearer</span>{" "}
                    <span style={{ color: pl }}>YOUR_API_KEY</span><br />
                    <br />
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>{"{"}</span><br />
                    &nbsp;&nbsp;<span style={{ color: "#7dd3fc" }}>"amount"</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>:</span>{" "}
                    <span style={{ color: "#86efac" }}>10000</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span><br />
                    &nbsp;&nbsp;<span style={{ color: "#7dd3fc" }}>"currency"</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>:</span>{" "}
                    <span style={{ color: "#fdba74" }}>"INR"</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span><br />
                    &nbsp;&nbsp;<span style={{ color: "#7dd3fc" }}>"method"</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>:</span>{" "}
                    <span style={{ color: "#fdba74" }}>"upi"</span><br />
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>{"}"}</span>
                  </div>
                  <div className="sp-code-success">
                    <div className="sp-code-success-title">✓ 200 OK — Transaction Created</div>
                    <div className="sp-code-success-sub">txn_9xKj2mNpQ7vR · processed in 0.8s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="container">
          <div className="sp-cta-section">
            <h2 className="sp-cta-title">{ctaTitle}</h2>
            <p className="sp-cta-desc">{ctaDescription}</p>
            <div className="sp-cta-btns">
              <Link href="https://payzonapi.com/account/sign-in" className="sp-cta-primary" style={NAV_FONT}>
                Get Started Today <ArrowUpRight size={16} />
              </Link>
              <Link href="/Restricted-Services" className="sp-cta-outline" style={NAV_FONT}>
                Our Restricted Category
              </Link>
            </div>
          </div>
        </div>

        {/* ── Related ── */}
        <section style={{ paddingBottom: 88 }}>
          <div className="container">
            <div className="sp-section-badge mb-3">Related Services</div>
            <h2 className="sp-section-title mb-5">Explore More Solutions</h2>
            <div className="row g-4">
              {relatedServices.map((s, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <Link href={s.href} className="sp-rel-card">
                    <div className="sp-rel-icon">{s.icon}</div>
                    <div className="sp-rel-title">{s.title}</div>
                    <div className="sp-rel-desc">{s.description}</div>
                    <div className="sp-rel-link">Learn more <ArrowUpRight size={12} /></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}