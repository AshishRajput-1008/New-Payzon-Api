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
        <path d="M14 0L28 13H0Z" fill="#C8FF00" /><path d="M14 13L28 26H0Z" fill="#C8FF00" opacity=".5" /><circle cx="14" cy="32" r="2" fill="#7C3AED" />
      </svg>
      <svg style={{ position: "absolute", bottom: 56, left: 36, opacity: 0.7 }} width="24" height="40" viewBox="0 0 24 40" fill="none">
        <circle cx="12" cy="4" r="2.5" fill="#7C3AED" /><circle cx="12" cy="13" r="2.5" fill="#7C3AED" opacity=".5" />
        <path d="M0 26L12 40L24 26Z" fill="#C8FF00" /><path d="M4 20L12 30L20 20Z" fill="#C8FF00" opacity=".5" />
      </svg>
    </div>
  );
}

const SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "digital-delivery", title: "Digital Delivery" },
  { id: "api-access", title: "API Access & Credentials" },
  { id: "documentation", title: "Documentation & SDKs" },
  { id: "merchant-kit", title: "Merchant Onboarding Kit" },
  { id: "physical-items", title: "Physical Items (If Any)" },
  { id: "failed-delivery", title: "Failed Delivery" },
  { id: "redelivery", title: "Re-delivery Policy" },
  { id: "supported-regions", title: "Supported Regions" },
  { id: "contact", title: "Contact Us" },
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

function DeliveryCard({ icon, title, subtitle, time, status }: { icon: string; title: string; subtitle: string; time: string; status: "instant" | "fast" | "scheduled" }) {
  const statusConfig = {
    instant: { label: "Instant", color: "#C8FF00", bg: "rgba(200,255,0,0.1)", border: "rgba(200,255,0,0.25)" },
    fast: { label: "< 5 mins", color: "#00FFD1", bg: "rgba(0,255,209,0.08)", border: "rgba(0,255,209,0.2)" },
    scheduled: { label: "Scheduled", color: "#B47FFF", bg: "rgba(180,127,255,0.1)", border: "rgba(180,127,255,0.25)" },
  };
  const cfg = statusConfig[status];
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.22)", borderRadius: 16, padding: "24px 20px", position: "relative", overflow: "hidden", transition: "border-color 0.25s" }}>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(200,255,0,0.3), transparent)" }} />
      <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#E8E8FF", marginBottom: 4, letterSpacing: "-0.015em" }}>{title}</div>
      <div style={{ fontSize: 12, color: "rgba(200,220,255,0.48)", lineHeight: 1.5, marginBottom: 14 }}>{subtitle}</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, color: "rgba(200,220,255,0.4)", fontFamily: "JetBrains Mono, monospace" }}>{time}</span>
        <span style={{ fontSize: 10, fontWeight: 700, background: cfg.bg, border: `1px solid ${cfg.border}`, borderRadius: 4, padding: "3px 8px", color: cfg.color, letterSpacing: "0.08em" }}>{cfg.label}</span>
      </div>
    </div>
  );
}

function RegionCard({ flag, country, status, note }: { flag: string; country: string; status: "active" | "partial" | "upcoming"; note: string }) {
  const s = {
    active: { label: "Active", color: "#C8FF00", bg: "rgba(200,255,0,0.08)", border: "rgba(200,255,0,0.22)" },
    partial: { label: "Partial", color: "#FFB830", bg: "rgba(255,184,48,0.08)", border: "rgba(255,184,48,0.22)" },
    upcoming: { label: "Upcoming", color: "#B47FFF", bg: "rgba(180,127,255,0.08)", border: "rgba(180,127,255,0.22)" },
  };
  const cfg = s[status];
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 12, padding: "18px 16px" }}>
      <div style={{ fontSize: 28, marginBottom: 8 }}>{flag}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#E8E8FF", marginBottom: 4 }}>{country}</div>
      <div style={{ fontSize: 11, color: "rgba(200,220,255,0.42)", marginBottom: 10, lineHeight: 1.45 }}>{note}</div>
      <span style={{ fontSize: 10, fontWeight: 700, background: cfg.bg, border: `1px solid ${cfg.border}`, borderRadius: 4, padding: "2px 8px", color: cfg.color, letterSpacing: "0.08em" }}>{cfg.label}</span>
    </div>
  );
}

export default function ShippingPolicyPage() {
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

        .sp-page { min-height: 100vh; background: #0D0B2A; color: #E8E8FF; font-family: 'Sora', system-ui, sans-serif; position: relative; overflow-x: hidden; padding-top: 80px; }
        .sp-container { max-width: 1160px; margin: 0 auto; padding: 0 28px; position: relative; z-index: 1; }
        .sp-hero { padding: 72px 0 56px; text-align: center; animation: fadeDown .6s ease both; }
        .sp-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: rgba(200,255,0,0.08); border: 1px solid rgba(200,255,0,0.28); border-radius: 6px; padding: 5px 14px; font-size: 11px; font-weight: 700; letter-spacing: .14em; color: #C8FF00; text-transform: uppercase; margin-bottom: 22px; }
        .sp-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #C8FF00; animation: pulse 2s infinite; }
        .sp-hero h1 { font-size: clamp(32px, 5vw, 60px); font-weight: 800; letter-spacing: -.035em; line-height: 1.05; color: #F0F0FF; margin-bottom: 18px; }
        .sp-hero h1 em { font-style: normal; background: linear-gradient(120deg, #C8FF00, #A8E800); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .sp-hero p { font-size: 15px; color: rgba(220,220,255,0.5); max-width: 540px; margin: 0 auto; line-height: 1.72; }
        .sp-meta { display: inline-flex; align-items: center; gap: 20px; margin-top: 22px; flex-wrap: wrap; justify-content: center; }
        .sp-meta-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: rgba(200,220,255,0.4); font-family: 'JetBrains Mono', monospace; }
        .sp-meta-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(200,255,0,0.4); }
        .sp-divider { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 0 52px; }
        .sp-divider::before, .sp-divider::after { content: ''; flex: 1; max-width: 200px; height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent); }
        .sp-divider span { width: 8px; height: 8px; background: #C8FF00; border-radius: 2px; transform: rotate(45deg); }
        .sp-layout { display: grid; grid-template-columns: 240px 1fr; gap: 40px; align-items: start; padding-bottom: 80px; animation: fadeUp .6s .2s ease both; }
        .sp-toc { position: sticky; top: 100px; background: rgba(255,255,255,0.03); border: 1px solid rgba(124,58,237,0.25); border-radius: 18px; padding: 24px 20px; overflow: hidden; }
        .sp-toc::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #7C3AED, #C8FF00, transparent); }
        .sp-toc-title { font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #C8FF00; margin-bottom: 16px; }
        .sp-toc-item { display: block; padding: 8px 12px; border-radius: 8px; font-size: 12.5px; color: rgba(200,220,255,0.5); cursor: pointer; transition: all .2s; margin-bottom: 2px; border: 1px solid transparent; }
        .sp-toc-item:hover, .sp-toc-item.active { background: rgba(200,255,0,0.07); border-color: rgba(200,255,0,0.2); color: #C8FF00; }
        .sp-toc-num { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(200,255,0,0.4); margin-right: 6px; }
        .sp-content { background: rgba(255,255,255,0.025); border: 1px solid rgba(124,58,237,0.2); border-radius: 20px; padding: 48px 44px; position: relative; overflow: hidden; }
        .sp-content::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #C8FF00, #7C3AED, transparent); }
        .sp-footer { border-top: 1px solid rgba(200,255,0,0.07); padding: 28px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .sp-footer-brand { font-size: 18px; font-weight: 800; letter-spacing: -.02em; color: #F0F0FF; }
        .sp-footer-brand em { font-style: normal; color: #C8FF00; }
        .sp-footer-copy { font-size: 12px; color: rgba(200,220,255,0.28); }
        .delivery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px; }
        .regions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 16px; }
        @media (max-width: 900px) { .sp-layout { grid-template-columns: 1fr; } .sp-toc { position: static; } .delivery-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .sp-content { padding: 28px 20px; } .sp-container { padding: 0 16px; } .delivery-grid { grid-template-columns: 1fr; } .regions-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>

      <div className="sp-page">
        <BgDecor />
        <div className="sp-container">

          <header className="sp-hero">
            <div className="sp-eyebrow"><span className="sp-eyebrow-dot" />Legal</div>
            <h1><em>Shipping</em> & Delivery</h1>
            <p>As a digital payment technology company, Payzon delivers all products and services electronically. This policy outlines how we deliver access, credentials, and documentation.</p>
            <div className="sp-meta">
              <span className="sp-meta-item"><span className="sp-meta-dot" />Effective: January 1, 2024</span>
              <span className="sp-meta-item"><span className="sp-meta-dot" />Last Updated: April 2025</span>
              <span className="sp-meta-item"><span className="sp-meta-dot" />Version 1.2</span>
            </div>
          </header>

          <div className="sp-divider"><span /></div>

          <div className="sp-layout">
            <aside className="sp-toc">
              <p className="sp-toc-title">Table of Contents</p>
              {SECTIONS.map((s, i) => (
                <span key={s.id} className={`sp-toc-item${activeSection === s.id ? " active" : ""}`} onClick={() => scrollTo(s.id)}>
                  <span className="sp-toc-num">{String(i + 1).padStart(2, "0")}.</span>{s.title}
                </span>
              ))}
            </aside>

            <div className="sp-content">

              <Section id="overview" title="1. Overview">
                <InfoBox>
                  Payzon India is a digital-first payment technology company. We do not sell or ship physical goods as part of our core payment gateway business. All our products — including API access, developer credentials, documentation, integration support kits, and billing invoices — are delivered electronically to your registered email address and/or made available in your merchant dashboard.
                </InfoBox>
                <P>This Shipping & Delivery Policy clarifies the delivery mechanisms, timelines, and support processes for everything Payzon provides to its merchants, developers, and partners. For merchants using <strong style={{ color: "#C8FF00" }}>Payzon Shoppy</strong> (our e-commerce platform), additional shipping policies may apply as governed by individual merchant agreements and are the responsibility of the selling merchant.</P>
                <P>We believe in zero-friction delivery — everything you need to build and operate with Payzon should be in your inbox and dashboard within minutes of completing onboarding.</P>
              </Section>

              <Section id="digital-delivery" title="2. Digital Delivery">
                <P>All Payzon products and services are delivered digitally through the following channels:</P>
                <div className="delivery-grid">
                  <DeliveryCard icon="📧" title="Email Delivery" subtitle="Credentials, invoices, alerts, and important notices delivered to your registered email" time="Post-registration" status="instant" />
                  <DeliveryCard icon="🖥️" title="Dashboard Access" subtitle="Merchant portal, analytics, transaction history, and settings available immediately" time="On activation" status="instant" />
                  <DeliveryCard icon="🔑" title="API Keys" subtitle="Live and test API keys provisioned in your developer console upon KYC approval" time="< 5 minutes" status="fast" />
                  <DeliveryCard icon="📚" title="Documentation" subtitle="Full API reference, SDKs, and integration guides available at payzonapi.com/docs" time="Always available" status="instant" />
                  <DeliveryCard icon="🔔" title="Webhooks" subtitle="Real-time transaction event notifications delivered to your configured endpoint" time="< 2 seconds" status="instant" />
                  <DeliveryCard icon="📋" title="Monthly Invoices" subtitle="GST invoices and settlement statements generated and emailed on the 1st of each month" time="Monthly" status="scheduled" />
                </div>
              </Section>

              <Section id="api-access" title="3. API Access & Credentials">
                <P>Upon successful completion of registration, KYC verification, and account activation, the following credentials and accesses are provisioned and delivered:</P>
                <UL items={[
                  "Test API Key (API_KEY_TEST_*): Available immediately after email verification, enabling sandbox integration before KYC",
                  "Live API Key (API_KEY_LIVE_*): Provisioned within 30 minutes of KYC approval — delivered to your registered email and available in the dashboard under Settings → API Keys",
                  "Webhook Secret Key: Generated alongside the live API key for validating the authenticity of Payzon webhook payloads",
                  "Merchant ID (MID): Your unique platform identifier, included in all API responses and settlement reports",
                  "Dashboard Credentials: Your registered email serves as the login username; a secure password setup link is emailed immediately upon registration"
                ]} />
                <InfoBox>API keys are delivered over encrypted channels exclusively to the registered email and displayed only once in the dashboard. If you lose your API key, you can regenerate it from Settings → API Keys — the old key is immediately invalidated.</InfoBox>
                <P>KYC approval timelines depend on document completeness and verification queue. Standard KYC is typically completed within 1–3 business days. Enhanced Due Diligence (EDD) for high-value merchants may take up to 7 business days.</P>
              </Section>

              <Section id="documentation" title="4. Documentation & SDKs">
                <P>All Payzon developer resources are delivered online with no download required, though offline packages are available:</P>
                <UL items={[
                  "API Reference: Live documentation at payzonapi.com/docs — updated in real time with every API version release",
                  "Official SDKs for Node.js, Python, PHP, Java, Ruby, and .NET available on GitHub (github.com/payzon-india) under MIT license",
                  "Postman Collection: Importable collection with all API endpoints, sample requests, and environment variables — download link available in the dashboard",
                  "Integration Guides: Step-by-step guides for popular platforms (WooCommerce, Shopify, Magento, custom) available in the Knowledge Base",
                  "Change Logs: All API version changes, breaking changes, and deprecation notices published at payzonapi.com/changelog with email subscription option",
                  "Sandbox Test Cards & UPI IDs: A set of test credentials for simulating success, failure, and edge-case payment scenarios in the sandbox environment"
                ]} />
              </Section>

              <Section id="merchant-kit" title="5. Merchant Onboarding Kit">
                <P>Upon successful account activation, every new Payzon merchant receives a digital onboarding kit delivered to their registered email within 24 hours of KYC approval:</P>
                <UL items={[
                  "Welcome email with Merchant ID, dashboard login link, and quick-start guide",
                  "PDF copy of your Merchant Agreement and service schedule with applicable fee rates",
                  "API Quick-Start Guide tailored to your business category with relevant code samples",
                  "Compliance Checklist: A guide to maintaining RBI compliance for payment acceptance on your platform",
                  "Support directory with dedicated account manager contact details for Enterprise plan holders",
                  "Payzon brand assets (logos, payment badges) for use on your checkout page per our Brand Usage Guidelines"
                ]} />
                <InfoBox variant="purple">Enterprise merchants (monthly volume &gt; ₹1 Crore) receive an additional dedicated onboarding session with a Payzon integration engineer, scheduled within 3 business days of account activation via calendar invite sent to the registered email.</InfoBox>
              </Section>

              <Section id="physical-items" title="6. Physical Items (If Any)">
                <P>Payzon India's core payment gateway services are entirely digital. However, in select scenarios, physical items may be dispatched:</P>
                <UL items={[
                  "Payment Terminal Devices (POS/QR stands): If you have arranged a hardware order through our sales team, dispatch is within 5–7 business days of confirmed order and payment. Delivery is via registered courier (DTDC, BlueDart, or Delhivery) with tracking details emailed within 24 hours of dispatch.",
                  "Welcome Kit for Premium Merchants: Certain enterprise plans include a physical welcome package (certificate of partnership, branded collateral). Delivered via registered post within 10–14 business days of onboarding.",
                  "Legal / Compliance Documents: If physical copies of agreements are required for regulatory purposes, they are dispatched via registered/speed post within 7 business days upon written request."
                ]} />
                <P>Physical shipping is available across India to all PIN codes serviceable by our logistics partners. Remote areas (Part A / Part C of the Sixth Schedule to the Constitution) may experience extended delivery timelines of 14–21 business days.</P>
                <InfoBox variant="warning">Shipping charges for physical items, if applicable, will be communicated at the time of order confirmation. Payzon does not charge for digital delivery of any kind — all fees listed in your plan cover digital access, credentials, and documentation.</InfoBox>
              </Section>

              <Section id="failed-delivery" title="7. Failed Delivery">
                <P>If you do not receive expected digital deliverables within the stated timelines, it may be due to the following reasons:</P>
                <UL items={[
                  "Email delivery failure: Our emails may have been filtered into your spam or promotions folder — add noreply@payzonindia.com and support@payzonindia.com to your safe senders list",
                  "Incorrect email address: If you registered with a typo in your email, contact support immediately with your Merchant ID to correct it",
                  "KYC pending: Live API keys are not issued until KYC is fully approved — check your dashboard for pending document requirements",
                  "Account under review: If your account is flagged for compliance review, credential provisioning may be temporarily paused pending resolution",
                  "Two-Factor Authentication (2FA) required: Dashboard access requires 2FA setup on first login — check your registered phone number for the OTP"
                ]} />
                <P>If email delivery fails due to a server error on our side, our automated retry system will attempt re-delivery up to 3 times over 6 hours. After 3 failures, a support ticket is automatically created and our team will reach out within 4 business hours.</P>
              </Section>

              <Section id="redelivery" title="8. Re-delivery Policy">
                <P>Re-delivery of digital items is available for the following:</P>
                <UL items={[
                  "API Keys: Can be regenerated at any time from the dashboard. The old key is immediately deactivated — update your integration before regenerating in production",
                  "Invoices & Settlement Reports: Available for re-download from the dashboard under Billing → Invoices at any time, for all historical periods",
                  "KYC Approval Email: Can be resent from the dashboard under Account → KYC Status → Resend Confirmation",
                  "SDK & Documentation: Always available online at payzonapi.com/docs — no re-delivery required as these are always current",
                  "Merchant Agreement PDF: Request a re-send via support@payzonindia.com with your Merchant ID — delivered within 4 business hours"
                ]} />
                <P>For physical items returned due to incorrect address or recipient unavailability, re-dispatch will be arranged within 3 business days of the item being returned to our dispatch center. The merchant is responsible for providing the correct delivery address.</P>
              </Section>

              <Section id="supported-regions" title="9. Supported Regions">
                <P>Payzon's digital services are available across the following regions:</P>
                <div className="regions-grid">
                  <RegionCard flag="🇮🇳" country="India" status="active" note="All 28 states & 8 UTs. Full payment stack including UPI, cards, net banking." />
                  <RegionCard flag="🇳🇵" country="Nepal" status="partial" note="INR settlements. Limited to NEFT/RTGS cross-border flows." />
                  <RegionCard flag="🇧🇩" country="Bangladesh" status="partial" note="Inward remittance support via banking partners only." />
                  <RegionCard flag="🇦🇪" country="UAE" status="upcoming" note="Cross-border payment APIs planned for Q3 2025 rollout." />
                </div>
                <InfoBox>Cross-border and international payment features are subject to RBI FEMA regulations, SWIFT messaging requirements, and bilateral banking arrangements. International merchants should contact our enterprise sales team at enterprise@payzonindia.com for current availability and compliance requirements.</InfoBox>
                <P>Digital documentation, API access, sandbox environments, and developer resources are globally accessible from any country. Restrictions apply only to live payment processing capabilities.</P>
              </Section>

              <Section id="contact" title="10. Contact Us">
                <P>For any questions about delivery timelines, missing credentials, or shipping of physical items:</P>
                <div style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 14, padding: "24px 28px", marginTop: 8 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#F0F0FF", marginBottom: 16 }}>Payzon India — Support & Delivery</div>
                  {[
                    ["Support Email", "support@payzonindia.com"],
                    ["Enterprise", "enterprise@payzonindia.com"],
                    ["Phone", "(+91) 755 485 9540"],
                    ["Address", "Patel Nagar, Bhopal, Madhya Pradesh 462022"],
                    ["Support Hours", "Mon – Sat · 10:00 – 17:00 IST"],
                    ["Response Time", "< 4 business hours for delivery issues"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 13 }}>
                      <span style={{ color: "rgba(200,220,255,0.4)", minWidth: 160, fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: 1 }}>{k}</span>
                      <span style={{ color: "rgba(230,230,255,0.82)" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </Section>

            </div>
          </div>

          <footer className="sp-footer">
            <div className="sp-footer-brand">Payzon<em>.</em></div>
            <p className="sp-footer-copy">© {new Date().getFullYear()} Payzon India. All rights reserved. · Patel Nagar, Bhopal, MP</p>
          </footer>
        </div>
      </div>
    </>
  );
}