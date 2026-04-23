"use client";

import { useState } from "react";

function BgDecor() {
  return (
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(200,255,0,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <svg style={{ position: "absolute", top: 0, left: 0, opacity: 0.1 }} width="320" height="600" viewBox="0 0 320 600" fill="none">
        <path d="M-40 100 Q100 60 130 220 Q160 380 60 500" stroke="#7C3AED" strokeWidth="1" fill="none" />
        <path d="M-60 80 Q80 40 120 210 Q155 380 40 520" stroke="#9333EA" strokeWidth=".7" fill="none" />
      </svg>
      <svg style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.09 }} width="260" height="500" viewBox="0 0 260 500" fill="none">
        <path d="M300 40 Q180 80 200 180 Q222 280 300 340" stroke="#7C3AED" strokeWidth="1" fill="none" />
        <path d="M320 20 Q190 70 215 180 Q240 295 320 360" stroke="#9333EA" strokeWidth=".7" fill="none" />
      </svg>
      <div style={{ position: "absolute", width: 600, height: 600, top: -150, left: -180, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)" }} />
      <div style={{ position: "absolute", width: 500, height: 500, bottom: -100, right: -120, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,255,0,0.07) 0%, transparent 65%)" }} />
      <svg style={{ position: "absolute", top: 94, right: 40, opacity: 0.7 }} width="28" height="34" viewBox="0 0 28 34" fill="none">
        <path d="M14 0L28 13H0Z" fill="#C8FF00" />
        <path d="M14 13L28 26H0Z" fill="#C8FF00" opacity=".5" />
        <circle cx="14" cy="32" r="2" fill="#7C3AED" />
      </svg>
      <svg style={{ position: "absolute", bottom: 56, left: 36, opacity: 0.7 }} width="24" height="40" viewBox="0 0 24 40" fill="none">
        <circle cx="12" cy="4" r="2.5" fill="#7C3AED" />
        <circle cx="12" cy="13" r="2.5" fill="#7C3AED" opacity=".5" />
        <path d="M0 26L12 40L24 26Z" fill="#C8FF00" />
        <path d="M4 20L12 30L20 20Z" fill="#C8FF00" opacity=".5" />
      </svg>
    </div>
  );
}

const CONTACT_ROWS = [
  { label: "Support Email", value: "support@payzonindia.com", href: "mailto:support@payzonindia.com" },
  { label: "Phone", value: "(+91) 755 485 9540", href: "tel:+917554859540" },
  { label: "Address", value: `Sector B Plot 1, Patel Nagar,
Raisen road, Bhopal (MP)
Pin: 462022`, href: null },
  { label: "Support Hours", value: "Mon – Sat · 10:00 – 17:00 IST", href: null },
];

function SidebarContact() {
  return (
    <div className="rc-sidebar-contact">
      <div className="rc-sidebar-contact-header">
        <div className="rc-sidebar-contact-icon">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2h10a1 1 0 011 1v6a1 1 0 01-1 1H8l-3 2V10H2a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#C8FF00" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <span className="rc-sidebar-contact-title">Quick Contact</span>
      </div>
      <div className="rc-sidebar-contact-rows">
        {CONTACT_ROWS.map(({ label, value, href }) => (
          <div key={label} className="rc-sidebar-contact-row">
            <span className="rc-sidebar-contact-label">{label}</span>
            {href ? (
              <a href={href} className="rc-sidebar-contact-value rc-sidebar-contact-link">{value}</a>
            ) : (
              <span className="rc-sidebar-contact-value">{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileContact() {
  return (
    <div className="rc-mobile-contact">
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
        <div style={{ width: 4, height: 28, background: "linear-gradient(180deg, #C8FF00, #7C3AED)", borderRadius: 4 }} />
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "#F0F0FF", letterSpacing: "-0.025em", margin: 0 }}>Contact Us</h2>
      </div>
      <div className="rc-mobile-contact-grid">
        {CONTACT_ROWS.map(({ label, value, href }) => (
          <div key={label} className="rc-mobile-contact-card">
            <span className="rc-mobile-contact-label">{label}</span>
            {href ? (
              <a href={href} className="rc-mobile-contact-value rc-mobile-contact-link">{value}</a>
            ) : (
              <span className="rc-mobile-contact-value">{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "refund-eligibility", title: "Refund Eligibility" },
  { id: "non-refundable", title: "Non-Refundable Charges" },
  { id: "refund-process", title: "Refund Process & Timeline" },
  { id: "cancellation-policy", title: "Cancellation Policy" },
  { id: "subscription-cancellation", title: "Subscription Cancellation" },
  { id: "merchant-obligations", title: "Merchant Obligations" },
  { id: "chargebacks", title: "Chargebacks & Disputes" },
  { id: "partial-refunds", title: "Partial Refunds" },
  { id: "refund-status", title: "Checking Refund Status" },
  { id: "escalation", title: "Escalation Process" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: 52, scrollMarginTop: 100 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <div style={{ width: 4, height: 32, background: "linear-gradient(180deg, #C8FF00, #7C3AED)", borderRadius: 4, flexShrink: 0 }} />
        <h2 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 800, color: "#F0F0FF", letterSpacing: "-0.025em", margin: 0 }}>{title}</h2>
      </div>
      <div style={{ paddingLeft: 18, borderLeft: "1px solid rgba(124,58,237,0.2)" }}>{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 14.5, color: "rgba(210,210,255,0.72)", lineHeight: 1.82, marginBottom: 14 }}>{children}</p>;
}

function UL({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(200,255,0,0.1)", border: "1px solid rgba(200,255,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l1.5 1.5L6.5 2" stroke="#C8FF00" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span style={{ fontSize: 14, color: "rgba(210,210,255,0.7)", lineHeight: 1.75 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function XList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,80,80,0.1)", border: "1px solid rgba(255,80,80,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2L2 6" stroke="#FF6B6B" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </span>
          <span style={{ fontSize: 14, color: "rgba(210,210,255,0.7)", lineHeight: 1.75 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoBox({ children, variant = "lime" }: { children: React.ReactNode; variant?: "lime" | "purple" | "warning" }) {
  const colors = {
    lime: { bg: "rgba(200,255,0,0.05)", border: "rgba(200,255,0,0.18)", text: "rgba(210,230,200,0.75)" },
    purple: { bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.28)", text: "rgba(210,210,255,0.72)" },
    warning: { bg: "rgba(255,184,48,0.07)", border: "rgba(255,184,48,0.25)", text: "rgba(255,220,140,0.8)" },
  };
  const c = colors[variant];
  return (
    <div style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
      <p style={{ fontSize: 13.5, color: c.text, lineHeight: 1.75, margin: 0 }}>{children}</p>
    </div>
  );
}

function TimelineItem({ step, title, desc, time }: { step: string; title: string; desc: string; time: string }) {
  return (
    <div style={{ display: "flex", gap: 18, marginBottom: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(124,58,237,0.2)", border: "2px solid rgba(200,255,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#C8FF00", fontFamily: "JetBrains Mono, monospace", flexShrink: 0 }}>{step}</div>
        <div style={{ width: 1, flex: 1, background: "rgba(124,58,237,0.25)", minHeight: 20, marginTop: 4 }} />
      </div>
      <div style={{ paddingBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#E8E8FF" }}>{title}</span>
          <span style={{ fontSize: 10, fontWeight: 700, background: "rgba(200,255,0,0.1)", border: "1px solid rgba(200,255,0,0.25)", borderRadius: 4, padding: "2px 8px", color: "#C8FF00", letterSpacing: "0.06em" }}>{time}</span>
        </div>
        <p style={{ fontSize: 13, color: "rgba(200,220,255,0.55)", lineHeight: 1.65, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

export default function RefundCancellationPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const scrollTo = (id: string) => { setActiveSection(id); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.7)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }

        .rc-page { min-height: 100vh; background: #0D0B2A; color: #E8E8FF; font-family: 'Sora', system-ui, sans-serif; position: relative; overflow-x: hidden; padding-top: 80px; }
        .rc-container { max-width: 1160px; margin: 0 auto; padding: 0 28px; position: relative; z-index: 1; }
        .rc-hero { padding: 72px 0 56px; text-align: center; animation: fadeDown .6s ease both; }
        .rc-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: rgba(200,255,0,0.08); border: 1px solid rgba(200,255,0,0.28); border-radius: 6px; padding: 5px 14px; font-size: 11px; font-weight: 700; letter-spacing: .14em; color: #C8FF00; text-transform: uppercase; margin-bottom: 22px; }
        .rc-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #C8FF00; animation: pulse 2s infinite; }
        .rc-hero h1 { font-size: clamp(32px, 5vw, 60px); font-weight: 800; letter-spacing: -.035em; line-height: 1.05; color: #F0F0FF; margin-bottom: 18px; }
        .rc-hero h1 em { font-style: normal; background: linear-gradient(120deg, #C8FF00, #A8E800); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .rc-hero p { font-size: 15px; color: rgba(220,220,255,0.5); max-width: 520px; margin: 0 auto; line-height: 1.72; }
        .rc-meta { display: inline-flex; align-items: center; gap: 20px; margin-top: 22px; flex-wrap: wrap; justify-content: center; }
        .rc-meta-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: rgba(200,220,255,0.4); font-family: 'JetBrains Mono', monospace; }
        .rc-meta-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(200,255,0,0.4); }
        .rc-divider { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 0 52px; }
        .rc-divider::before, .rc-divider::after { content: ''; flex: 1; max-width: 200px; height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent); }
        .rc-divider span { width: 8px; height: 8px; background: #C8FF00; border-radius: 2px; transform: rotate(45deg); }
        .rc-layout { display: grid; grid-template-columns: 260px 1fr; gap: 40px; align-items: start; padding-bottom: 80px; animation: fadeUp .6s .2s ease both; }

        /* ── Sidebar ── */
        .rc-toc { position: sticky; top: 100px; background: rgba(255,255,255,0.03); border: 1px solid rgba(124,58,237,0.25); border-radius: 18px; overflow: hidden; }
        .rc-toc::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #C8FF00, #7C3AED, transparent); }
        .rc-toc-inner { padding: 24px 20px; }
        .rc-toc-title { font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #C8FF00; margin-bottom: 16px; }
        .rc-toc-item { display: block; padding: 8px 12px; border-radius: 8px; font-size: 12.5px; color: rgba(200,220,255,0.5); cursor: pointer; transition: all .2s; margin-bottom: 2px; border: 1px solid transparent; }
        .rc-toc-item:hover, .rc-toc-item.active { background: rgba(200,255,0,0.07); border-color: rgba(200,255,0,0.2); color: #C8FF00; }
        .rc-toc-num { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(200,255,0,0.4); margin-right: 6px; }

        /* ── Sidebar Contact ── */
        .rc-sidebar-contact { border-top: 1px solid rgba(124,58,237,0.2); padding: 20px; }
        .rc-sidebar-contact-header { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .rc-sidebar-contact-icon { width: 24px; height: 24px; border-radius: 6px; background: rgba(200,255,0,0.08); border: 1px solid rgba(200,255,0,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .rc-sidebar-contact-title { font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #C8FF00; }
        .rc-sidebar-contact-rows { display: flex; flex-direction: column; gap: 0; }
        .rc-sidebar-contact-row { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04); display: flex; flex-direction: column; gap: 2px; }
        .rc-sidebar-contact-row:last-child { border-bottom: none; }
        .rc-sidebar-contact-label { font-size: 9px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(200,220,255,0.35); }
        .rc-sidebar-contact-value { font-size: 11.5px; color: rgba(220,220,255,0.75); line-height: 1.5; word-break: break-word; }
        .rc-sidebar-contact-link { color: #C8FF00; text-decoration: none; transition: opacity .15s; }
        .rc-sidebar-contact-link:hover { opacity: 0.75; text-decoration: underline; }

        /* ── Mobile Contact ── */
        .rc-mobile-contact { display: none; }
        .rc-mobile-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .rc-mobile-contact-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(124,58,237,0.22); border-radius: 12px; padding: 14px 16px; display: flex; flex-direction: column; gap: 4px; }
        .rc-mobile-contact-card:last-child:nth-child(odd) { grid-column: 1 / -1; }
        .rc-mobile-contact-label { font-size: 9px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(200,220,255,0.35); }
        .rc-mobile-contact-value { font-size: 12.5px; color: rgba(220,220,255,0.8); line-height: 1.5; word-break: break-word; }
        .rc-mobile-contact-link { color: #C8FF00; text-decoration: none; }
        .rc-mobile-contact-link:hover { text-decoration: underline; }

        .rc-content { background: rgba(255,255,255,0.025); border: 1px solid rgba(124,58,237,0.2); border-radius: 20px; padding: 48px 44px; position: relative; overflow: hidden; }
        .rc-content::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #C8FF00, #7C3AED, transparent); }
        .rc-footer { border-top: 1px solid rgba(200,255,0,0.07); padding: 28px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .rc-footer-brand { font-size: 18px; font-weight: 800; letter-spacing: -.02em; color: #F0F0FF; }
        .rc-footer-brand em { font-style: normal; color: #C8FF00; }
        .rc-footer-copy { font-size: 12px; color: rgba(200,220,255,0.28); }

        @media (max-width: 900px) {
          .rc-layout { grid-template-columns: 1fr; }
          .rc-toc { position: static; }
          .rc-sidebar-contact { display: none; }
          .rc-mobile-contact { display: block; margin-bottom: 40px; background: rgba(255,255,255,0.025); border: 1px solid rgba(124,58,237,0.2); border-radius: 20px; padding: 28px 20px; position: relative; overflow: hidden; }
          .rc-mobile-contact::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #C8FF00, #7C3AED, transparent); }
        }
        @media (max-width: 600px) {
          .rc-content { padding: 28px 20px; }
          .rc-container { padding: 0 16px; }
          .rc-mobile-contact { padding: 24px 16px; }
          .rc-mobile-contact-grid { grid-template-columns: 1fr; }
          .rc-mobile-contact-card:last-child:nth-child(odd) { grid-column: auto; }
        }
            /* ── Footer ── */
        .tc-footer { border-top: 1px solid rgba(200,255,0,0.07); padding: 28px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .tc-footer-brand { font-size: 18px; font-weight: 800; letter-spacing: -.02em; color: #F0F0FF; }
        .tc-footer-brand em { font-style: normal; color: #C8FF00; }
        .tc-footer-copy { font-size: 12px; color: rgba(200,220,255,0.28); margin-bottom: 0; }
      `}</style>

      <div className="rc-page">
        <BgDecor />
        <div className="rc-container">

          <header className="rc-hero">
            <div className="rc-eyebrow"><span className="rc-eyebrow-dot" />Legal</div>
            <h1>Refund & <em>Cancellation</em></h1>
            <p>Clear and transparent guidelines on refunds, cancellations, and dispute resolution for all Payzon-API payment services.</p>
            <div className="rc-meta">
              <span className="rc-meta-item"><span className="rc-meta-dot" />Effective: January, 2024</span>
              <span className="rc-meta-item"><span className="rc-meta-dot" />Last Updated: January {new Date().getFullYear()}</span>
              <span className="rc-meta-item"><span className="rc-meta-dot" />Version 2.0</span>
            </div>
          </header>

          <div className="rc-divider"><span /></div>

          <div className="rc-layout">
            {/* Sidebar — TOC + Contact */}
            <aside className="rc-toc">
              <div className="rc-toc-inner">
                <p className="rc-toc-title">Table of Contents</p>
                {SECTIONS.map((s, i) => (
                  <span key={s.id} className={`rc-toc-item${activeSection === s.id ? " active" : ""}`} onClick={() => scrollTo(s.id)}>
                    <span className="rc-toc-num">{String(i + 1).padStart(2, "0")}.</span>{s.title}
                  </span>
                ))}
              </div>
              <SidebarContact />
            </aside>

            <div className="rc-content">

              <Section id="overview" title="1. Overview">
                <InfoBox>This Refund & Cancellation Policy governs all transactions processed through Payzonindia's payment infrastructure including Payzon API, Payzon Shoppy, and affiliated platforms. As a payment intermediator, Payzon facilitates transactions between merchants (vendors) and customers — our policy outlines the responsibilities of each party.</InfoBox>
                <P>Payzonindia operates as a payment technology intermediary. We process payments on behalf of merchants registered on our platform. Refunds may be initiated by the merchant, requested by the customer, or mandated by the acquiring bank or card network through a chargeback process.</P>
                <P>This policy is governed by the Consumer Protection Act 2019, RBI Payment Aggregator Guidelines 2020, and the Information Technology Act 2000 as applicable to digital payment transactions in India.</P>
              </Section>

              <Section id="refund-eligibility" title="2. Refund Eligibility">
                <P>A refund may be eligible under the following circumstances. The merchant is responsible for verifying the refund claim before initiating a refund through the Payzon dashboard or API:</P>
                <UL items={[
                  "Payment was successfully debited from the customer's account but the order confirmation or service activation failed due to a technical error",
                  "Customer was charged more than the invoiced amount due to a system or merchant configuration error (overcharge)",
                  "Duplicate transaction occurred where the customer was charged multiple times for the same order within a short time window",
                  "Service or product was not delivered within the committed timeframe and the merchant agrees to cancel the order",
                  "Customer cancels an order within the cancellation window as defined in the merchant's own cancellation policy",
                  "Subscription or recurring payment was charged after the customer had validly cancelled the subscription",
                  "Transaction was made using compromised payment credentials and the merchant has received a law enforcement notification"
                ]} />
              </Section>

              <Section id="non-refundable" title="3. Non-Refundable Charges">
                <P>The following charges and transactions are explicitly non-refundable under Payzon's policy:</P>
                <XList items={[
                  "Payzon platform fees, transaction processing fees, and API usage charges — these are earned service fees and non-refundable",
                  "Transactions where the service or digital product has been fully delivered and consumed by the customer",
                  "Payments made for customized, personalized, or bespoke services that were specifically created per customer request",
                  "One-time API integration fees, onboarding fees, or compliance verification fees paid to Payzon",
                  "Transactions marked as successful where the delay in delivery is attributable to third-party logistics or the customer's own infrastructure",
                  "Payments where the customer claims non-delivery but tracking evidence or delivery confirmation is available",
                  "Transactions processed for services explicitly marked as 'Non-Refundable' by the merchant at checkout with customer acknowledgement"
                ]} />
                <InfoBox variant="warning">Platform processing fees charged by Payzon (typically 0.5%–2% depending on payment method) are non-refundable even if the underlying transaction is refunded to the customer. Merchants should factor this into their refund policies.</InfoBox>
              </Section>

              <Section id="refund-process" title="4. Refund Process & Timeline">
                <P>The end-to-end refund process follows a structured timeline from initiation to credit. All timelines are in business days (Mon–Sat, 10:00–17:00 IST, excluding national holidays):</P>
                <TimelineItem step="01" title="Refund Initiation" desc="Merchant initiates refund via Payzon dashboard or POST /v1/refunds API. Refund ID generated immediately." time="Day 0" />
                <TimelineItem step="02" title="Payzon Verification" desc="Our fraud and compliance team verifies the refund request against original transaction data and merchant account standing." time="0–4 hrs" />
                <TimelineItem step="03" title="Bank/Network Submission" desc="Approved refund is submitted to the acquiring bank, card network (Visa/Mastercard/RuPay), or NPCI for UPI reversals." time="4–24 hrs" />
                <TimelineItem step="04" title="Issuer Processing" desc="Customer's bank processes the incoming credit. Timeline varies by bank and payment method." time="1–7 days" />
                <TimelineItem step="05" title="Customer Credit" desc="Amount reflects in customer's account. Credit card refunds may take up to 2 billing cycles depending on the issuer." time="2–10 days" />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
                  {[
                    { method: "UPI", time: "24–48 hours" },
                    { method: "Net Banking", time: "3–5 business days" },
                    { method: "Debit Card", time: "5–7 business days" },
                    { method: "Credit Card", time: "7–10 business days" },
                    { method: "NEFT/RTGS", time: "2–3 business days" },
                    { method: "Wallets", time: "24–48 hours" },
                  ].map(({ method, time }) => (
                    <div key={method} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 10, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(200,220,255,0.6)" }}>{method}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#C8FF00", fontFamily: "JetBrains Mono, monospace" }}>{time}</span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="cancellation-policy" title="5. Cancellation Policy">
                <P>Order or service cancellations are subject to the following rules depending on the nature of the transaction and the timing of the cancellation request:</P>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#B47FFF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Before Processing</p>
                <UL items={[
                  "Cancellations made before the service is initiated or goods are dispatched qualify for a full refund of the transaction amount",
                  "API transactions cancelled within 30 minutes of initiation may be voided (reversed at network level) at no additional cost",
                  "QR code payment cancellations initiated within 5 minutes are auto-voided if the merchant has not yet claimed the funds"
                ]} />
                <p style={{ fontSize: 13, fontWeight: 700, color: "#B47FFF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, marginTop: 16 }}>After Processing</p>
                <UL items={[
                  "Cancellations after service initiation or goods dispatch are subject to the merchant's individual cancellation policy",
                  "Partial cancellations (cancelling one item from a multi-item order) require merchant approval and will result in a partial refund",
                  "Recurring/subscription cancellations must be made at least 3 business days before the next billing date to avoid the next charge"
                ]} />
              </Section>

              <Section id="subscription-cancellation" title="6. Subscription Cancellation">
                <P>For recurring payment plans and API subscription tiers offered through Payzon's platform:</P>
                <UL items={[
                  "Subscriptions can be cancelled at any time through the merchant dashboard under Settings → Billing → Cancel Plan",
                  "Upon cancellation, the subscription remains active until the end of the current paid billing period — no pro-rated refund is issued for the remaining days",
                  "If cancellation is requested within 48 hours of the initial subscription charge (first-time subscribers only), a full refund will be processed as a goodwill gesture",
                  "Annual plan holders who cancel within 7 days of renewal are eligible for a pro-rated refund for the unused months",
                  "Downgrades (switching to a lower plan) take effect at the next billing cycle; the difference is not refunded for the current cycle"
                ]} />
              </Section>

              <Section id="merchant-obligations" title="7. Merchant Obligations">
                <P>Merchants integrated with Payzon are responsible for managing refunds for their end customers. Payzon provides the technical infrastructure; the contractual relationship for refunds is between the merchant and the customer.</P>
                <UL items={[
                  "Merchants must display their refund and cancellation policy clearly at checkout before the customer completes payment",
                  "Merchants must process legitimate refund requests within 5 business days of receiving the customer's request",
                  "Failure to process valid refunds may result in chargebacks, which carry additional fees and risk to the merchant's Payzon account standing",
                  "Merchants with a chargeback ratio exceeding 1% of monthly transactions may face account review, suspension, or termination",
                  "Merchants must maintain sufficient settlement balance in their Payzon account to cover pending refunds"
                ]} />
                <InfoBox variant="warning">Merchants who repeatedly fail to process legitimate refunds or maintain high chargeback rates will face escalating consequences including increased rolling reserve requirements, higher transaction fees, account suspension, or permanent deregistration from the Payzon platform.</InfoBox>
              </Section>

              <Section id="chargebacks" title="8. Chargebacks & Disputes">
                <P>A chargeback is a forced transaction reversal initiated by the customer's bank or card network, bypassing the merchant's refund process. Chargebacks are governed by card network rules (Visa, Mastercard, RuPay) and RBI guidelines.</P>
                <UL items={[
                  "Payzon will notify the merchant via email and dashboard within 3 business days of receiving a chargeback notification",
                  "Merchants have 7 calendar days from notification to submit compelling evidence to contest a chargeback through the Payzon dashboard",
                  "Accepted chargeback evidence includes: delivery confirmation, customer communication records, signed invoices, terms accepted at checkout",
                  "If the merchant does not respond within 7 days, the chargeback is accepted by default and the transaction amount is debited from the merchant's settlement account",
                  "Each chargeback incurs a dispute handling fee of ₹500–₹1,500 depending on card network and transaction amount, regardless of outcome",
                  "Chargeback decisions made by card networks are final and Payzon cannot override them"
                ]} />
              </Section>

              <Section id="partial-refunds" title="9. Partial Refunds">
                <P>Partial refunds are supported via the Payzon API and dashboard. A partial refund allows the merchant to refund a specific amount less than the original transaction total. Key rules:</P>
                <UL items={[
                  "Partial refunds can be initiated up to 180 days from the original transaction date (subject to acquiring bank limits)",
                  "Multiple partial refunds on a single transaction are allowed, but the total refunded amount cannot exceed the original transaction amount",
                  "For UPI transactions, partial refunds are settled via NACH/NEFT and may take 3–5 business days",
                  "Partial refunds do not affect Payzon processing fees; fees are calculated on the original transaction amount"
                ]} />
              </Section>

              <Section id="refund-status" title="10. Checking Refund Status">
                <P>Both merchants and customers can track refund status through multiple channels:</P>
                <UL items={[
                  "Merchant Dashboard: Navigate to Transactions → Refunds to see real-time status updates for all initiated refunds",
                  "API: Call GET /v1/refunds/{refund_id} to retrieve current status programmatically (status values: pending, processing, success, failed)",
                  "Customer Portal: Customers can check refund status at payzonindia.com/track-refund using their transaction reference ID",
                  "SMS/Email Alerts: Automated notifications sent to both merchant and customer at each status change",
                  "Support: Contact support@payzonindia.com with your Refund ID and Transaction ID for manual status updates"
                ]} />
              </Section>

              <Section id="escalation" title="11. Escalation Process">
                <P>If your refund is not processed within the stated timelines or you are dissatisfied with the resolution, you may escalate through the following hierarchy:</P>
                <TimelineItem step="L1" title="Customer Support" desc="Email support@payzonindia.com or call (+91) 755 485 9540 with your Refund ID. Resolution target: 48 hours." time="0–48 hrs" />
                <TimelineItem step="L2" title="Grievance Officer" desc="If L1 is unresolved, escalate to grievance@payzonindia.com. Our Grievance Officer will respond within 7 business days." time="7 days" />
                <TimelineItem step="L3" title="Banking Ombudsman" desc="For payment-related disputes unresolved at our end, you may approach the RBI Banking Ombudsman at cms.rbi.org.in." time="30 days" />
              </Section>

            </div>
          </div>

          {/* Mobile Contact — shown only below 900px */}
          <MobileContact /> 

          <footer className="tc-footer">
            <div className="tc-footer-brand">Payzonindia Private Limited<em>.</em></div>
            <p className="tc-footer-copy">© {new Date().getFullYear()} Payzonindia. - All rights reserved. · Sector B Plot 1, Patel Nagar, Raisen road, Bhopal (MP) Pin: 462022</p>
          </footer>
        </div>
      </div>
    </>
  );
}