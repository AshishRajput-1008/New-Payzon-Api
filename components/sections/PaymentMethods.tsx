import Link from "next/link";
import { paymentMethods } from "@/data/paymentMethods";
import SectionDecoration from "@/components/ui/SectionDecoration";
import shape15 from "@/public/assets/images/services/shape_nate_15.svg";
import shape16 from "@/public/assets/images/services/shape_nate_16.svg";

const shapes = [
  { className: "shape_nate_1", image: shape15.src, alt: "Shape Nate" },
  { className: "shape_nate_2", image: shape15.src, alt: "Shape Nate" },
  { className: "shape_nate_3", image: shape16.src, alt: "Shape Nate" },
];

const COLOR_CLASSES = ["lime", "cyan", "violet", "coral"];

const TAG_LABELS: Record<string, string> = {
  "PAY-IN":          "Collections",
  "PAY-OUT":         "Disbursements",
  "QR":              "Scan & Pay",
  "VIRTUAL ACCOUNT": "Fund Management",
};

const SECTION_CSS = `
  /*
   * SuisseIntl SemiBold — commercial font.
   * Place your font files in /public/fonts/ and adjust the src paths below.
   * Recommended: supply both .woff2 and .woff for maximum browser support.
   */
  @font-face {
    font-family: "SuisseIntl";
    src:
      url("/fonts/SuisseIntl-SemiBold.woff2") format("woff2"),
      url("/fonts/SuisseIntl-SemiBold.woff")  format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* Fallback weights — add more @font-face blocks if you have other cuts */
  @font-face {
    font-family: "SuisseIntl";
    src:
      url("/fonts/SuisseIntl-Regular.woff2") format("woff2"),
      url("/fonts/SuisseIntl-Regular.woff")  format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "SuisseIntl";
    src:
      url("/fonts/SuisseIntl-Bold.woff2") format("woff2"),
      url("/fonts/SuisseIntl-Bold.woff")  format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "SuisseIntl";
    src:
      url("/fonts/SuisseIntl-Black.woff2") format("woff2"),
      url("/fonts/SuisseIntl-Black.woff")  format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  /* ─── Section ─────────────────────────────────────────────── */
  .pz-services {
    position: relative;
    padding: 100px 0 110px;
    overflow: hidden;
    background: linear-gradient(160deg, #0a0520 0%, #130835 45%, #1a0a4a 75%, #0d0628 100%);
  }
  .pz-services__blob-1 {
    position: absolute; top: -80px; left: -120px;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%);
    pointer-events: none; z-index: 0;
  }
  .pz-services__blob-2 {
    position: absolute; bottom: -100px; right: -80px;
    width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 65%);
    pointer-events: none; z-index: 0;
  }

  .pz-services__inner {
    position: relative; z-index: 2;
    max-width: 1280px; margin: 0 auto;
    padding: 0 32px;
  }

  /* ─── Header ─────────────────────────────────────────────── */
  .pz-services__header {
    text-align: center;
    margin-bottom: 64px;
  }
  .pz-services__eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(200,255,0,0.07);
    border: 1px solid rgba(200,255,0,0.28);
    border-radius: 100px; padding: 6px 18px 6px 12px;
    font-family: "SuisseIntl", system-ui, sans-serif;
    font-size: 10.5px; font-weight: 600;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: #C8FF00; margin-bottom: 20px;
  }
  .pz-services__eyebrow-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: #C8FF00; box-shadow: 0 0 8px #C8FF00;
    animation: pzsvc-dot 2s ease-in-out infinite; flex-shrink: 0;
  }
  @keyframes pzsvc-dot {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.3; transform:scale(0.5); }
  }
  .pz-services__title {
    font-family: "SuisseIntl", system-ui, sans-serif;
    font-size: clamp(2rem, 3.5vw, 3.2rem);
    font-weight: 900; line-height: 1.1; letter-spacing: -0.03em;
    color: #ffffff; margin: 0 0 14px;
  }
  .pz-services__title mark {
    background: linear-gradient(118deg, #C8FF00 0%, #7FD800 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text; text-decoration: none;
  }
  .pz-services__subtitle {
    font-family: "SuisseIntl", system-ui, sans-serif;
    font-size: 15px; font-weight: 400;
    color: rgba(200,210,255,0.5); max-width: 520px;
    margin: 0 auto; line-height: 1.7;
  }

  /* ─── Grid ───────────────────────────────────────────────── */
  .pz-services__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  /* ─── Base card ──────────────────────────────────────────── */
  .pz-card {
    position: relative;
    display: flex; flex-direction: column;
    border-radius: 24px; overflow: hidden;
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    cursor: default;
    transition:
      transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
      border-color 0.3s ease,
      box-shadow 0.3s ease,
      background 0.3s ease;
  }
  .pz-card::before {
    content: ""; position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    opacity: 1; transition: opacity 0.3s ease; z-index: 3;
  }
  .pz-card::after {
    content: ""; position: absolute; inset: 0;
    opacity: 1; transition: opacity 0.35s ease;
    pointer-events: none; z-index: 0;
  }
  .pz-card:hover { transform: translateY(0) scale(1); }
  .pz-card:hover::before { opacity: 0.25; }
  .pz-card:hover::after  { opacity: 0.3; }

  /* ─── Per-color variants ─────────────────────────────────── */
  .pz-card--lime {
    background: rgba(200,255,0,0.028);
    border: 1px solid rgba(200,255,0,0.32);
    box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(200,255,0,0.08), 0 0 50px rgba(200,255,0,0.10);
  }
  .pz-card--lime::before  { background: linear-gradient(90deg, transparent, rgba(200,255,0,0.65) 50%, transparent); }
  .pz-card--lime::after   { background: radial-gradient(ellipse at 50% 0%, rgba(200,255,0,0.07) 0%, transparent 60%); }
  .pz-card--lime:hover    { background: rgba(255,255,255,0.03); border-color: rgba(200,255,0,0.12); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }

  .pz-card--cyan {
    background: rgba(0,212,255,0.025);
    border: 1px solid rgba(0,212,255,0.35);
    box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,212,255,0.07), 0 0 50px rgba(0,212,255,0.10);
  }
  .pz-card--cyan::before  { background: linear-gradient(90deg, transparent, rgba(0,212,255,0.65) 50%, transparent); }
  .pz-card--cyan::after   { background: radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 60%); }
  .pz-card--cyan:hover    { background: rgba(255,255,255,0.03); border-color: rgba(0,212,255,0.12); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }

  .pz-card--violet {
    background: rgba(185,127,255,0.03);
    border: 1px solid rgba(185,127,255,0.38);
    box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(185,127,255,0.08), 0 0 50px rgba(185,127,255,0.12);
  }
  .pz-card--violet::before { background: linear-gradient(90deg, transparent, rgba(185,127,255,0.65) 50%, transparent); }
  .pz-card--violet::after  { background: radial-gradient(ellipse at 50% 0%, rgba(185,127,255,0.08) 0%, transparent 60%); }
  .pz-card--violet:hover   { background: rgba(255,255,255,0.03); border-color: rgba(185,127,255,0.13); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }

  .pz-card--coral {
    background: rgba(255,122,80,0.025);
    border: 1px solid rgba(255,122,80,0.35);
    box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,122,80,0.07), 0 0 50px rgba(255,122,80,0.10);
  }
  .pz-card--coral::before  { background: linear-gradient(90deg, transparent, rgba(255,122,80,0.65) 50%, transparent); }
  .pz-card--coral::after   { background: radial-gradient(ellipse at 50% 0%, rgba(255,122,80,0.07) 0%, transparent 60%); }
  .pz-card--coral:hover    { background: rgba(255,255,255,0.03); border-color: rgba(255,122,80,0.12); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }

  /* ─── Card number ────────────────────────────────────────── */
  .pz-card__num {
    position: absolute; top: 16px; right: 16px;
    font-family: "SuisseIntl", system-ui, sans-serif;
    font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
    z-index: 2; transition: opacity 0.25s;
  }
  .pz-card--lime   .pz-card__num { color: rgba(200,255,0,0.55); }
  .pz-card--cyan   .pz-card__num { color: rgba(0,212,255,0.55); }
  .pz-card--violet .pz-card__num { color: rgba(185,127,255,0.55); }
  .pz-card--coral  .pz-card__num { color: rgba(255,122,80,0.55); }
  .pz-card:hover .pz-card__num   { opacity: 0.35; }

  /* ─── Icon wrap ──────────────────────────────────────────── */
  .pz-card__icon-wrap {
    position: relative; z-index: 1;
    padding: 32px 28px 24px;
    display: flex; align-items: flex-start;
  }
  .pz-card__icon-bg {
    width: 68px; height: 68px; border-radius: 18px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .pz-card--lime   .pz-card__icon-bg { background: rgba(200,255,0,0.10); border: 1px solid rgba(200,255,0,0.35); box-shadow: 0 0 24px rgba(200,255,0,0.15); }
  .pz-card--cyan   .pz-card__icon-bg { background: rgba(0,212,255,0.10); border: 1px solid rgba(0,212,255,0.38); box-shadow: 0 0 24px rgba(0,212,255,0.15); }
  .pz-card--violet .pz-card__icon-bg { background: rgba(185,127,255,0.12); border: 1px solid rgba(185,127,255,0.40); box-shadow: 0 0 24px rgba(185,127,255,0.18); }
  .pz-card--coral  .pz-card__icon-bg { background: rgba(255,122,80,0.10); border: 1px solid rgba(255,122,80,0.38); box-shadow: 0 0 24px rgba(255,122,80,0.15); }
  .pz-card:hover .pz-card__icon-bg   { background: rgba(124,58,237,0.12) !important; border-color: rgba(124,58,237,0.25) !important; box-shadow: none !important; }

  .pz-card__icon-bg img {
    width: 36px; height: 36px; object-fit: contain;
    transition: opacity 0.3s ease, filter 0.3s ease;
  }
  .pz-card--lime   .pz-card__icon-bg img { opacity:1; filter: brightness(0) saturate(100%) invert(88%) sepia(60%) saturate(500%) hue-rotate(30deg) brightness(105%); }
  .pz-card--cyan   .pz-card__icon-bg img { opacity:1; filter: brightness(0) saturate(100%) invert(75%) sepia(80%) saturate(400%) hue-rotate(160deg) brightness(120%); }
  .pz-card--violet .pz-card__icon-bg img { opacity:1; filter: brightness(0) saturate(100%) invert(70%) sepia(40%) saturate(600%) hue-rotate(240deg) brightness(115%); }
  .pz-card--coral  .pz-card__icon-bg img { opacity:1; filter: brightness(0) saturate(100%) invert(65%) sepia(70%) saturate(500%) hue-rotate(330deg) brightness(115%); }
  .pz-card:hover .pz-card__icon-bg img   { opacity: 0.55 !important; filter: brightness(0) invert(1) !important; }

  /* ─── Divider ────────────────────────────────────────────── */
  .pz-card__divider {
    height: 1px; margin: 0 28px;
    position: relative; z-index: 1;
    transition: background 0.3s ease;
  }
  .pz-card--lime   .pz-card__divider { background: linear-gradient(90deg, transparent, rgba(200,255,0,0.28) 50%, transparent); }
  .pz-card--cyan   .pz-card__divider { background: linear-gradient(90deg, transparent, rgba(0,212,255,0.28) 50%, transparent); }
  .pz-card--violet .pz-card__divider { background: linear-gradient(90deg, transparent, rgba(185,127,255,0.28) 50%, transparent); }
  .pz-card--coral  .pz-card__divider { background: linear-gradient(90deg, transparent, rgba(255,122,80,0.28) 50%, transparent); }
  .pz-card:hover .pz-card__divider   { background: linear-gradient(90deg, transparent, rgba(124,58,237,0.2) 50%, transparent) !important; }

  /* ─── Body ───────────────────────────────────────────────── */
  .pz-card__body {
    position: relative; z-index: 1;
    padding: 24px 28px 28px;
    display: flex; flex-direction: column; flex: 1; gap: 10px;
  }

  /* Tag pill */
  .pz-card__tag {
    display: inline-flex; align-items: center; gap: 5px;
    border-radius: 100px; padding: 3px 10px;
    font-family: "SuisseIntl", system-ui, sans-serif;
    font-size: 9.5px; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
    width: fit-content; margin-bottom: 2px;
    transition: background 0.25s, border-color 0.25s, color 0.25s;
  }
  .pz-card--lime   .pz-card__tag { background: rgba(200,255,0,0.07);    border: 1px solid rgba(200,255,0,0.22);    color: rgba(200,255,0,0.8); }
  .pz-card--cyan   .pz-card__tag { background: rgba(0,212,255,0.07);    border: 1px solid rgba(0,212,255,0.22);    color: rgba(0,212,255,0.85); }
  .pz-card--violet .pz-card__tag { background: rgba(185,127,255,0.08);  border: 1px solid rgba(185,127,255,0.25);  color: rgba(185,127,255,0.85); }
  .pz-card--coral  .pz-card__tag { background: rgba(255,122,80,0.07);   border: 1px solid rgba(255,122,80,0.22);   color: rgba(255,122,80,0.85); }
  .pz-card:hover .pz-card__tag   { background: rgba(124,58,237,0.12) !important; border-color: rgba(124,58,237,0.22) !important; color: rgba(180,160,255,0.6) !important; }

  /* Title */
  .pz-card__title {
    font-family: "SuisseIntl", system-ui, sans-serif;
    font-size: 19px; font-weight: 700;
    letter-spacing: -0.02em; line-height: 1.2;
    margin: 0; color: #ffffff;
    transition: color 0.25s;
  }
  .pz-card:hover .pz-card__title { color: rgba(200,210,255,0.7); }

  /* Desc */
  .pz-card__desc {
    font-family: "SuisseIntl", system-ui, sans-serif;
    font-size: 13.5px; font-weight: 400;
    color: rgba(200,210,255,0.65); line-height: 1.7;
    margin: 0; flex: 1; transition: color 0.25s;
  }
  .pz-card:hover .pz-card__desc { color: rgba(190,200,240,0.4); }

  /* CTA link */
  .pz-card__link {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: "SuisseIntl", system-ui, sans-serif;
    font-size: 12.5px; font-weight: 600;
    letter-spacing: 0.04em; text-decoration: none;
    margin-top: 6px; padding: 8px 0;
    width: 100%;
    transition: color 0.25s ease, border-color 0.25s ease, gap 0.2s ease;
    border-top: 1px solid;
  }
  .pz-card--lime   .pz-card__link { color: #C8FF00;  border-color: rgba(200,255,0,0.18); }
  .pz-card--cyan   .pz-card__link { color: #00D4FF;  border-color: rgba(0,212,255,0.18); }
  .pz-card--violet .pz-card__link { color: #B97FFF;  border-color: rgba(185,127,255,0.2); }
  .pz-card--coral  .pz-card__link { color: #FF7A50;  border-color: rgba(255,122,80,0.18); }
  .pz-card:hover .pz-card__link   { color: rgba(190,200,240,0.4) !important; border-color: rgba(124,58,237,0.12) !important; gap: 7px; }

  .pz-card__link-arrow {
    width: 22px; height: 22px; border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.25s, border-color 0.25s, transform 0.25s;
    border: 1px solid;
  }
  .pz-card--lime   .pz-card__link-arrow { background: rgba(200,255,0,0.10);   border-color: rgba(200,255,0,0.30); }
  .pz-card--cyan   .pz-card__link-arrow { background: rgba(0,212,255,0.10);   border-color: rgba(0,212,255,0.30); }
  .pz-card--violet .pz-card__link-arrow { background: rgba(185,127,255,0.12); border-color: rgba(185,127,255,0.32); }
  .pz-card--coral  .pz-card__link-arrow { background: rgba(255,122,80,0.10);  border-color: rgba(255,122,80,0.30); }
  .pz-card:hover .pz-card__link-arrow   { background: rgba(124,58,237,0.08) !important; border-color: rgba(124,58,237,0.2) !important; transform: none !important; }

  .pz-card__link-arrow svg path { transition: stroke 0.25s; }
  .pz-card--lime   .pz-card__link-arrow svg path { stroke: #C8FF00; }
  .pz-card--cyan   .pz-card__link-arrow svg path { stroke: #00D4FF; }
  .pz-card--violet .pz-card__link-arrow svg path { stroke: #B97FFF; }
  .pz-card--coral  .pz-card__link-arrow svg path { stroke: #FF7A50; }
  .pz-card:hover .pz-card__link-arrow svg path   { stroke: rgba(180,160,255,0.35) !important; }

  /* ─── Stats bar ──────────────────────────────────────────── */
  .pz-services__bar {
    margin-top: 56px; display: flex; align-items: center;
    justify-content: center; gap: 0;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(124,58,237,0.2);
    border-radius: 16px; overflow: hidden;
    max-width: 680px; margin-left: auto; margin-right: auto;
  }
  .pz-services__bar-item {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; gap: 3px; padding: 16px 20px;
    border-right: 1px solid rgba(124,58,237,0.15);
  }
  .pz-services__bar-item:last-child { border-right: none; }
  .pz-services__bar-num {
    font-family: "SuisseIntl", system-ui, sans-serif;
    font-size: 18px; font-weight: 700;
    color: #C8FF00; letter-spacing: -0.03em; line-height: 1;
  }
  .pz-services__bar-label {
    font-family: "SuisseIntl", system-ui, sans-serif;
    font-size: 9.5px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.1em;
    color: rgba(190,200,240,0.38);
  }

  /* ─── Responsive ─────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .pz-services__grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .pz-services { padding: 70px 0 80px; }
    .pz-services__inner { padding: 0 16px; }
    .pz-services__grid { grid-template-columns: 1fr; gap: 14px; }
    .pz-services__header { margin-bottom: 40px; }
    .pz-services__bar { flex-wrap: wrap; }
    .pz-services__bar-item { flex: 1 1 45%; border-bottom: 1px solid rgba(124,58,237,0.15); }
    .pz-services__bar-item:last-child { border-bottom: none; }
  }
`;

export default function PaymentMethods() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SECTION_CSS }} />

      <section className="pz-services">
        <div className="pz-services__blob-1" aria-hidden="true" />
        <div className="pz-services__blob-2" aria-hidden="true" />

        <div className="pz-services__inner">

          {/* ── Header ── */}
          <div className="pz-services__header">
            <div className="pz-services__eyebrow">
              <span className="pz-services__eyebrow-dot" />
              Core Features
            </div>
            <h2 className="pz-services__title">
              Variety of <mark>Payzon API</mark><br />Payment Services
            </h2>
            <p className="pz-services__subtitle">
              End-to-end payment infrastructure built for scale — from
              collections to disbursements, all in one unified API.
            </p>
          </div>

          {/* ── Cards ── */}
          <div className="pz-services__grid">
            {paymentMethods.map((method, index) => {
              const accent = COLOR_CLASSES[index % COLOR_CLASSES.length];
              return (
                <div key={index} className={`pz-card pz-card--${accent}`}>

                  <span className="pz-card__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="pz-card__icon-wrap">
                    <div className="pz-card__icon-bg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={method.icon} alt={method.title} />
                    </div>
                  </div>

                  <div className="pz-card__divider" />

                  <div className="pz-card__body">
                    <span className="pz-card__tag">
                      {TAG_LABELS[method.title] ?? "Payment"}
                    </span>
                    <h3 className="pz-card__title">{method.title}</h3>
                    <p className="pz-card__desc">{method.description}</p>

                    <Link className="pz-card__link" href={method.href}>
                      Explore Service
                      <span className="pz-card__link-arrow">
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                          <path d="M3 9L9 3M9 3H4.5M9 3V7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Stats bar ── */}
          <div className="pz-services__bar">
            <div className="pz-services__bar-item">
              <span className="pz-services__bar-num">10M+</span>
              <span className="pz-services__bar-label">Daily Transactions</span>
            </div>
            <div className="pz-services__bar-item">
              <span className="pz-services__bar-num">99.9%</span>
              <span className="pz-services__bar-label">Uptime SLA</span>
            </div>
            <div className="pz-services__bar-item">
              <span className="pz-services__bar-num">₹500Cr+</span>
              <span className="pz-services__bar-label">Processed</span>
            </div>
            <div className="pz-services__bar-item">
              <span className="pz-services__bar-num">RBI</span>
              <span className="pz-services__bar-label">Compliant</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}