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

const CONTACT_ROWS = [
  { label: "General Email", value: "info@payzonindia.com", href: "mailto:info@payzonindia.com" },
  { label: "Phone", value: "(+91) 755 485 9540", href: "tel:+917554859540" },
  { label: "Address", value: `Sector B Plot 1, Patel Nagar, Raisen road, Bhopal (MP) Pin: 462022`, href: null },
  { label: "Jurisdiction", value: "Courts of Bhopal, Madhya Pradesh", href: null },
];

/* ── Sidebar contact (desktop only) ── */
function SidebarContact() {
  return (
    <div className="tc-sidebar-contact">
      <div className="tc-sidebar-contact-header">
        <div className="tc-sidebar-contact-icon">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2h10a1 1 0 011 1v6a1 1 0 01-1 1H8l-3 2V10H2a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#C8FF00" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <span className="tc-sidebar-contact-title">Quick Contact</span>
      </div>
      <div className="tc-sidebar-contact-rows">
        {CONTACT_ROWS.map(({ label, value, href }) => (
          <div key={label} className="tc-sidebar-contact-row">
            <span className="tc-sidebar-contact-label">{label}</span>
            {href ? (
              <a href={href} className="tc-sidebar-contact-value tc-sidebar-contact-link">{value}</a>
            ) : (
              <span className="tc-sidebar-contact-value">{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Bottom contact (mobile only) ── */
function MobileContact() {
  return (
    <div className="tc-mobile-contact">
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
        <div style={{ width: 4, height: 28, background: "linear-gradient(180deg, #C8FF00, #7C3AED)", borderRadius: 4 }} />
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "#F0F0FF", letterSpacing: "-0.025em", margin: 0 }}>Contact Us</h2>
      </div>
      <div className="tc-mobile-contact-grid">
        {CONTACT_ROWS.map(({ label, value, href }) => (
          <div key={label} className="tc-mobile-contact-card">
            <span className="tc-mobile-contact-label">{label}</span>
            {href ? (
              <a href={href} className="tc-mobile-contact-value tc-mobile-contact-link">{value}</a>
            ) : (
              <span className="tc-mobile-contact-value">{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const SECTIONS = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "definitions", title: "Definitions" },
  { id: "account-registration", title: "Account Registration & KYC" },
  { id: "services", title: "Payment Services" },
  { id: "merchant-responsibilities", title: "Merchant Responsibilities" },
  { id: "fees-settlement", title: "Fees & Settlement" },
  { id: "prohibited-use", title: "Prohibited Use" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "api-usage", title: "API Usage & Limits" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law" },
  { id: "amendments", title: "Amendments" },
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

function DefinitionRow({ term, def }: { term: string; def: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 16, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: "#C8FF00", fontFamily: "JetBrains Mono, monospace" }}>{term}</span>
      <span style={{ fontSize: 13.5, color: "rgba(210,210,255,0.7)", lineHeight: 1.65 }}>{def}</span>
    </div>
  );
}

export default function TermsConditionsPage() {
  const [activeSection, setActiveSection] = useState("acceptance");
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

        .tc-page { min-height: 100vh; background: #0D0B2A; color: #E8E8FF; font-family: 'Sora', system-ui, sans-serif; position: relative; overflow-x: hidden; padding-top: 80px; }
        .tc-container { max-width: 1160px; margin: 0 auto; padding: 0 28px; position: relative; z-index: 1; }

        /* ── Hero ── */
        .tc-hero { padding: 72px 0 56px; text-align: center; animation: fadeDown .6s ease both; }
        .tc-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: rgba(200,255,0,0.08); border: 1px solid rgba(200,255,0,0.28); border-radius: 6px; padding: 5px 14px; font-size: 11px; font-weight: 700; letter-spacing: .14em; color: #C8FF00; text-transform: uppercase; margin-bottom: 22px; }
        .tc-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #C8FF00; animation: pulse 2s infinite; }
        .tc-hero h1 { font-size: clamp(32px, 5vw, 60px); font-weight: 800; letter-spacing: -.035em; line-height: 1.05; color: #F0F0FF; margin-bottom: 18px; }
        .tc-hero h1 em { font-style: normal; background: linear-gradient(120deg, #C8FF00, #A8E800); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .tc-hero p { font-size: 15px; color: rgba(220,220,255,0.5); max-width: 540px; margin: 0 auto; line-height: 1.72; }
        .tc-meta { display: inline-flex; align-items: center; gap: 20px; margin-top: 22px; flex-wrap: wrap; justify-content: center; }
        .tc-meta-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: rgba(200,220,255,0.4); font-family: 'JetBrains Mono', monospace; }
        .tc-meta-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(200,255,0,0.4); }
        .tc-divider { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 0 52px; }
        .tc-divider::before, .tc-divider::after { content: ''; flex: 1; max-width: 200px; height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent); }
        .tc-divider span { width: 8px; height: 8px; background: #C8FF00; border-radius: 2px; transform: rotate(45deg); }

        /* ── Layout: 2-col desktop, 1-col mobile ── */
        .tc-layout { display: grid; grid-template-columns: 260px 1fr; gap: 40px; align-items: start; padding-bottom: 80px; animation: fadeUp .6s .2s ease both; }

        /* ── Sidebar (desktop) ── */
        .tc-toc { position: sticky; top: 100px; background: rgba(255,255,255,0.03); border: 1px solid rgba(124,58,237,0.25); border-radius: 18px; overflow: hidden; }
        .tc-toc::before { content: ''; display: block; height: 2px; background: linear-gradient(90deg, transparent, #7C3AED, #C8FF00, transparent); }
        .tc-toc-inner { padding: 24px 20px; }
        .tc-toc-title { font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #C8FF00; margin-bottom: 16px; }
        .tc-toc-item { display: block; padding: 7px 12px; border-radius: 8px; font-size: 12px; color: rgba(200,220,255,0.5); cursor: pointer; transition: all .2s; margin-bottom: 2px; border: 1px solid transparent; }
        .tc-toc-item:hover, .tc-toc-item.active { background: rgba(200,255,0,0.07); border-color: rgba(200,255,0,0.2); color: #C8FF00; }
        .tc-toc-num { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(200,255,0,0.4); margin-right: 6px; }

        /* ── Sidebar contact block (desktop only) ── */
        .tc-sidebar-contact { border-top: 1px solid rgba(124,58,237,0.2); padding: 20px; flex-shrink: 0; }
        .tc-sidebar-contact-header { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .tc-sidebar-contact-icon { width: 24px; height: 24px; border-radius: 6px; background: rgba(200,255,0,0.08); border: 1px solid rgba(200,255,0,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .tc-sidebar-contact-title { font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #C8FF00; }
        .tc-sidebar-contact-rows { display: flex; flex-direction: column; gap: 0; }
        .tc-sidebar-contact-row { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04); display: flex; flex-direction: column; gap: 2px; }
        .tc-sidebar-contact-row:last-child { border-bottom: none; }
        .tc-sidebar-contact-label { font-size: 9px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(200,220,255,0.35); }
        .tc-sidebar-contact-value { font-size: 11.5px; color: rgba(220,220,255,0.75); line-height: 1.5; word-break: break-word; }
        .tc-sidebar-contact-link { color: #C8FF00; text-decoration: none; transition: opacity .15s; }
        .tc-sidebar-contact-link:hover { opacity: 0.75; text-decoration: underline; }

        /* ── Mobile contact block (mobile only, hidden on desktop) ── */
        .tc-mobile-contact { display: none; }
        .tc-mobile-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .tc-mobile-contact-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(124,58,237,0.22); border-radius: 12px; padding: 14px 16px; display: flex; flex-direction: column; gap: 4px; }
        .tc-mobile-contact-card:last-child:nth-child(odd) { grid-column: 1 / -1; }
        .tc-mobile-contact-label { font-size: 9px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(200,220,255,0.35); }
        .tc-mobile-contact-value { font-size: 12.5px; color: rgba(220,220,255,0.8); line-height: 1.5; word-break: break-word; }
        .tc-mobile-contact-link { color: #C8FF00; text-decoration: none; }
        .tc-mobile-contact-link:hover { text-decoration: underline; }

        /* ── Content panel ── */
        .tc-content { background: rgba(255,255,255,0.025); border: 1px solid rgba(124,58,237,0.2); border-radius: 20px; padding: 48px 44px; position: relative; overflow: hidden; }
        .tc-content::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #C8FF00, #7C3AED, transparent); }

        /* ── Footer ── */
        .tc-footer { border-top: 1px solid rgba(200,255,0,0.07); padding: 28px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .tc-footer-brand { font-size: 18px; font-weight: 800; letter-spacing: -.02em; color: #F0F0FF; }
        .tc-footer-brand em { font-style: normal; color: #C8FF00; }
        .tc-footer-copy { font-size: 12px; color: rgba(200,220,255,0.28); margin-bottom: 0; }

        /* ── Responsive: tablet / mobile ── */
        @media (max-width: 900px) {
          /* Switch to single-column stacked layout */
          .tc-layout { grid-template-columns: 1fr; gap: 24px; }

          /* TOC: unstick, full width, compact */
          .tc-toc { position: static; }

          /* Hide sidebar contact on mobile — shown via MobileContact below instead */
          .tc-sidebar-contact { display: none; }

          /* Show mobile contact block */
          .tc-mobile-contact {
            display: block;
            margin-bottom: 40px;
            background: rgba(255,255,255,0.025);
            border: 1px solid rgba(124,58,237,0.2);
            border-radius: 20px;
            padding: 28px 20px;
            position: relative;
            overflow: hidden;
          }
          .tc-mobile-contact::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #C8FF00, #7C3AED, transparent);
          }
        }

        @media (max-width: 600px) {
          .tc-content { padding: 28px 20px; }
          .tc-container { padding: 0 16px; }
          .tc-mobile-contact { padding: 24px 16px; }
          .tc-mobile-contact-grid { grid-template-columns: 1fr; }
          .tc-mobile-contact-card:last-child:nth-child(odd) { grid-column: auto; }
          .tc-hero { padding: 48px 0 36px; }
        }
      `}</style>

      <div className="tc-page">
        <BgDecor />
        <div className="tc-container">

          <header className="tc-hero">
            <div className="tc-eyebrow"><span className="tc-eyebrow-dot" />Legal</div>
            <h1>Terms & <em>Conditions</em></h1>
            <p>Please read these terms carefully before using Payzon API's payment infrastructure, APIs, or merchant platform. By using our services, you agree to be bound by these terms.</p>
            <div className="tc-meta">
              <span className="tc-meta-item"><span className="tc-meta-dot" />Effective: January, 2024</span>
              <span className="tc-meta-item"><span className="tc-meta-dot" />Last Updated: January {new Date().getFullYear()}</span>
              <span className="tc-meta-item"><span className="tc-meta-dot" />Version 3.0</span>
            </div>
          </header>

          <div className="tc-divider"><span /></div>

          {/* ── 2-col on desktop, 1-col on mobile ── */}
          <div className="tc-layout">

            {/* LEFT: Sidebar — TOC + contact (contact hidden on mobile via CSS) */}
            <aside className="tc-toc">
              <div className="tc-toc-inner">
                <p className="tc-toc-title">Table of Contents</p>
                {SECTIONS.map((s, i) => (
                  <span key={s.id} className={`tc-toc-item${activeSection === s.id ? " active" : ""}`} onClick={() => scrollTo(s.id)}>
                    <span className="tc-toc-num">{String(i + 1).padStart(2, "0")}.</span>{s.title}
                  </span>
                ))}
              </div>
              {/* SidebarContact is hidden on mobile via CSS */}
              <SidebarContact />
            </aside>

            {/* RIGHT: Main content */}
            <div className="tc-content">

              <InfoBox variant="warning">
                IMPORTANT LEGAL NOTICE: These Terms and Conditions constitute a legally binding agreement between you (the Merchant or User) and Payzonindia Private Limited. By registering an account, accessing our APIs, or processing any transaction through Payzon's platform, you acknowledge that you have read, understood, and agree to be bound by these terms in their entirety.
              </InfoBox>

              <Section id="acceptance" title="1. Acceptance of Terms">
                <P>These Terms and Conditions ("Terms") are entered into between Payzonindia Private Limited ("Payzon", "Company", "we", "us", "our"), a company operating from Patel Nagar, Bhopal, Madhya Pradesh 462022, India, and the entity or individual accessing or using our payment services ("Merchant", "User", "you").</P>
                <P>By clicking "I Agree," registering an account, making an API call, or otherwise using any of our services, you expressly accept these Terms. If you do not agree, you must not access or use our services. If you are accepting on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</P>
                <P>These Terms are to be read alongside our Privacy Policy, Refund & Cancellation Policy, and any service-specific addenda, all of which are incorporated herein by reference.</P>
              </Section>

              <Section id="definitions" title="2. Definitions">
                <P>For clarity and legal precision, the following terms carry the meanings assigned below throughout this document:</P>
                <div style={{ marginBottom: 16 }}>
                  <DefinitionRow term="Payzon / Platform" def="Payzonindia Private Limited and all its affiliated platforms including Payzon API, Payzon Shoppy, Payzon Marketing, and Payzon IT Services." />
                  <DefinitionRow term="Merchant" def="A business, company, individual, or developer registered on the Payzon platform for the purpose of accepting or disbursing payments." />
                  <DefinitionRow term="Customer" def="An end-user or buyer who makes a payment through a Merchant's platform powered by Payzon's infrastructure." />
                  <DefinitionRow term="Transaction" def="Any payment instruction processed through Payzon including Pay In, Pay Out, QR Code payment, or Virtual Account credit." />
                  <DefinitionRow term="Settlement" def="The transfer of collected funds from Payzon's nodal account to the Merchant's designated bank account after deducting applicable fees." />
                  <DefinitionRow term="API" def="The Application Programming Interface provided by Payzon that enables Merchants to integrate payment capabilities into their applications." />
                  <DefinitionRow term="KYC" def="Know Your Customer — the regulatory process of verifying the identity of Merchants and Customers per RBI guidelines." />
                  <DefinitionRow term="Chargeback" def="A forced reversal of a payment transaction initiated by a Customer's bank or card network." />
                </div>
              </Section>

              <Section id="account-registration" title="3. Account Registration & KYC">
                <P>To access Payzon's payment services, you must complete our account registration and KYC verification process:</P>
                <UL items={[
                  "Provide accurate, complete, and current information during registration including business name, GST number, PAN, and bank details",
                  "Submit valid government-issued KYC documents as required by the RBI Master Direction on Know Your Customer (2016, updated 2023)",
                  "Ensure all authorized signatories complete individual KYC verification for business accounts",
                  "Notify Payzon within 7 business days if any registered information changes (address, bank account, authorized signatory)",
                  "Maintain a single merchant account per legal entity — multiple accounts for the same entity are prohibited without prior written approval",
                  "You must be at least 18 years of age and legally authorized to enter into commercial contracts under Indian law"
                ]} />
                <InfoBox>Payzon reserves the right to reject any application, require additional documentation, or suspend accounts if KYC verification cannot be completed satisfactorily or if the nature of your business is incompatible with our risk policies.</InfoBox>
              </Section>

              <Section id="services" title="4. Payment Services">
                <P>Subject to these Terms and successful account activation, Payzon provides the following core payment infrastructure services:</P>
                <UL items={[
                  "Pay In: Accept payments from Customers via UPI, IMPS, NEFT, RTGS, credit/debit cards, and net banking through a single unified API",
                  "Pay Out: Disburse funds to vendors, employees, or beneficiaries via IMPS, NEFT, RTGS, UPI, and NACH with real-time status tracking",
                  "QR Code Payments: Generate static and dynamic QR codes for in-store or online payment collection compatible with all UPI apps",
                  "Virtual Accounts: Create unique virtual bank account numbers for automated payment reconciliation per customer or order"
                ]} />
                <P>Service availability is subject to banking partner hours, NPCI infrastructure status, and RBI regulations. Payzon shall not be liable for unavailability caused by factors outside our control including banking network failures, NPCI downtime, or force majeure events.</P>
                <P>We reserve the right to modify, suspend, or discontinue any service feature with 30 days' prior notice except where immediate modification is required by regulatory mandate or security considerations.</P>
              </Section>

              <Section id="merchant-responsibilities" title="5. Merchant Responsibilities">
                <P>As a Merchant on the Payzon platform, you are solely responsible for:</P>
                <UL items={[
                  "Ensuring your business operations, products, and services comply with all applicable laws, regulations, and licensing requirements",
                  "Maintaining accurate product/service descriptions, pricing, and delivery commitments on your customer-facing platforms",
                  "Implementing and displaying a clear refund, cancellation, and returns policy to your Customers before they make payment",
                  "Safeguarding your API keys, dashboard credentials, and webhook secrets — any transaction using your credentials is your responsibility",
                  "Implementing HTTPS, input validation, and OWASP security best practices on your integration to prevent man-in-the-middle attacks",
                  "Monitoring your chargeback ratio and taking proactive steps to maintain it below 1% of monthly transaction volume",
                  "Maintaining sufficient funds or credit in your account to cover pending refunds, chargebacks, and rolling reserve requirements",
                  "Filing and remitting all applicable taxes (GST, TDS) on transactions and Payzon's invoices per Indian tax law"
                ]} />
              </Section>

              <Section id="fees-settlement" title="6. Fees & Settlement">
                <P>Payzon's fee structure is transparent and communicated at the time of onboarding. Key terms governing fees and settlements:</P>
                <UL items={[
                  "Transaction fees are charged as a percentage of the transaction amount and vary by payment method, volume tier, and merchant category",
                  "Fees are deducted at source before settlement — you receive the net amount (transaction amount minus Payzon fees)",
                  "Settlement is typically processed within T+2 business days (transaction day + 2 working days) for standard merchant accounts",
                  "Payzon maintains a rolling reserve of 5–10% of monthly transaction volume for a 90-day period as a security measure against chargebacks and fraud",
                  "GST at 18% is applicable on Payzon's service fees as per Indian tax regulations; a tax invoice is provided monthly",
                  "Late payment fees of 2% per month apply to any outstanding amounts owed by the Merchant to Payzon",
                  "Payzon may revise its fee schedule with 30 days' notice via email and dashboard notification; continued use constitutes acceptance"
                ]} />
                <InfoBox variant="warning">Settlements to merchant accounts are subject to successful KYC completion, clean compliance status, and no active fraud investigations. Payzon reserves the right to hold settlements for up to 180 days during active investigations of suspected fraud or compliance violations.</InfoBox>
              </Section>

              <Section id="prohibited-use" title="7. Prohibited Use">
                <P>The Payzon platform must not be used for any of the following prohibited activities. Violation will result in immediate account suspension and legal action where warranted:</P>
                <XList items={[
                  "Processing payments for illegal goods or services including narcotics, counterfeit goods, illegal weapons, or CSAM",
                  "Gambling, fantasy sports with real money, lottery, or casino services without valid state-issued gaming licenses",
                  "Pyramid schemes, Ponzi schemes, multi-level marketing (MLM) structures that violate SEBI regulations",
                  "Transactions designed to circumvent RBI foreign exchange regulations (FEMA) or income tax reporting requirements",
                  "Processing payments on behalf of unlicensed financial intermediaries, NBFCs, or unauthorized forex dealers",
                  "Using Payzon's APIs to test exploits, conduct denial-of-service attacks, or probe security vulnerabilities",
                  "Creating fraudulent transactions, test transactions in production without merchant permission, or manipulating transaction metadata",
                  "Selling access to your Payzon merchant account or API keys to third parties without a sub-merchant arrangement",
                  "Processing transactions for businesses or individuals listed on OFAC, UN sanctions lists, or RBI caution lists",
                  "Any activity that violates the Information Technology Act 2000, Bharatiya Nyaya Sanhita 2023, or PMLA 2002"
                ]} />
              </Section>

              <Section id="intellectual-property" title="8. Intellectual Property">
                <P>All intellectual property associated with the Payzon platform is owned exclusively by Payzon India:</P>
                <UL items={[
                  "The Payzon name, logo, brand marks, and visual identity are registered trademarks of Payzon India",
                  "Our API specifications, SDKs, documentation, and developer tools are proprietary and protected by copyright",
                  "You are granted a limited, non-exclusive, non-transferable, revocable license to use our APIs solely to integrate payment functionality into your own products",
                  "You may not reverse engineer, decompile, reproduce, or create derivative works based on Payzon's technology",
                  "Reference to Payzon in your marketing materials is permitted only in accordance with our Brand Usage Guidelines available at payzonapi.com/brand"
                ]} />
              </Section>

              <Section id="api-usage" title="9. API Usage & Limits">
                <P>Use of the Payzon API is subject to rate limits, version policies, and usage terms designed to ensure platform stability for all merchants:</P>
                <UL items={[
                  "Default rate limits: 100 requests/minute per API key; 10,000 requests/day per merchant account on the Starter plan",
                  "Higher rate limits are available under Growth and Enterprise plans — contact sales@payzonindia.com for custom limits",
                  "Exceeding rate limits returns HTTP 429 (Too Many Requests); persistent violation may result in temporary API key suspension",
                  "API versioning: We support the current version and one prior major version. Deprecated versions receive 6 months' notice before sunset",
                  "Webhook endpoints must respond with HTTP 200 within 10 seconds; failed deliveries are retried 5 times with exponential backoff",
                  "Test environment (sandbox) is provided for integration development; processing real customer payments in sandbox is prohibited",
                  "API keys must be rotated immediately upon suspected compromise; Payzon is not liable for unauthorized transactions using compromised credentials"
                ]} />
              </Section>

              <Section id="liability" title="10. Limitation of Liability">
                <P>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW, PAYZON'S TOTAL AGGREGATE LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO PAYZON IN THE 3 MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.</P>
                <P>Payzon shall not be liable for any indirect, incidental, special, consequential, or punitive damages including loss of revenue, loss of profits, loss of data, loss of goodwill, or business interruption, even if Payzon has been advised of the possibility of such damages.</P>
                <UL items={[
                  "Transaction failures caused by banking network downtime, NPCI outages, or customer's bank issues",
                  "Delays in settlement caused by RBI regulatory holds, fraud investigations, or court orders",
                  "Unauthorized transactions arising from merchant's failure to secure API credentials",
                  "Losses arising from the merchant's non-compliance with applicable laws or Payzon's policies"
                ]} />
              </Section>

              <Section id="indemnification" title="11. Indemnification">
                <P>You agree to defend, indemnify, and hold harmless Payzon India, its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or relating to:</P>
                <UL items={[
                  "Your violation of these Terms or any applicable law, regulation, or third-party right",
                  "The products, services, or content offered by you through the Payzon platform",
                  "Any dispute between you and your Customers including chargebacks and consumer complaints",
                  "Your negligent or wrongful use of Payzon's APIs, SDKs, or payment infrastructure",
                  "Any tax liability arising from your transactions including GST, TDS, or income tax obligations"
                ]} />
              </Section>

              <Section id="termination" title="12. Termination">
                <P>Either party may terminate this agreement with 30 days' written notice. Payzon may suspend or terminate your account immediately and without notice in the following circumstances:</P>
                <XList items={[
                  "Breach of any provision of these Terms including prohibited use violations",
                  "Fraudulent activity, money laundering, or involvement in any criminal investigation",
                  "Chargeback ratio exceeding 2% of monthly transaction volume for two consecutive months",
                  "Failure to complete KYC or comply with regulatory requirements within specified timelines",
                  "Court order, regulatory directive, or law enforcement mandate requiring account suspension",
                  "Insolvency, bankruptcy, or appointment of a liquidator for your business"
                ]} />
                <P>Upon termination, outstanding settlements will be processed after a 90-day hold period (to accommodate chargebacks), minus any amounts owed to Payzon. API access is revoked immediately upon termination.</P>
              </Section>

              <Section id="governing-law" title="13. Governing Law & Dispute Resolution">
                <P>These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Bhopal, Madhya Pradesh, India.</P>
                <P>Before initiating legal proceedings, parties agree to attempt good-faith resolution through the following process:</P>
                <UL items={[
                  "Informal negotiation: Written notice of the dispute to the other party with 30 days to reach a negotiated resolution",
                  "Mediation: If negotiation fails, parties shall engage a mutually agreed mediator from the Delhi International Arbitration Centre (DIAC)",
                  "Arbitration: Unresolved disputes shall be settled by binding arbitration under the Arbitration and Conciliation Act 1996",
                  "Litigation: Only if arbitration is not applicable to the nature of the dispute under Indian law"
                ]} />
              </Section>

              <Section id="amendments" title="14. Amendments">
                <P>Payzon reserves the right to modify these Terms at any time. Material changes will be communicated via email to your registered address and via a banner notification on the merchant dashboard at least 30 days before taking effect. Non-material changes (corrections, clarifications) may be made without prior notice. Your continued use of Payzon services after the effective date of any amendment constitutes your acceptance of the updated Terms.</P>
              </Section>

            </div>
          </div>

          {/*
            Mobile contact: shown ONLY on mobile (≤900px) via CSS.
            Desktop: hidden. This prevents the duplicate contact on desktop.
          */}
          <MobileContact />

          <footer className="tc-footer">
            <div className="tc-footer-brand">Payzonindia Private Limited<em>.</em></div>
            <p className="tc-footer-copy">© {new Date().getFullYear()} Payzonindia Private Limited. - All rights reserved. · Sector B Plot 1, Patel Nagar, Raisen road, Bhopal (MP) Pin: 462022</p>
          </footer>

        </div>
      </div>
    </>
  );
}