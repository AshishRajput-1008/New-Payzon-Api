"use client";

import { useState } from "react";

// ─── Background Decoration ────────────────────────────────────────────────────
function BgDecor() {
  return (
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(200,255,0,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <svg style={{ position: "absolute", top: 0, left: 0, opacity: 0.1 }} width="320" height="600" viewBox="0 0 320 600" fill="none">
        <path d="M-40 100 Q100 60 130 220 Q160 380 60 500" stroke="#7C3AED" strokeWidth="1" fill="none" />
        <path d="M-60 80 Q80 40 120 210 Q155 380 40 520" stroke="#7C3AED" strokeWidth=".8" fill="none" />
        <path d="M-80 60 Q60 20 110 200 Q148 370 20 540" stroke="#9333EA" strokeWidth=".6" fill="none" />
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

// ─── Contact Data ─────────────────────────────────────────────────────────────
const CONTACT_ROWS = [
  { icon: "✉", label: "General Enquiries", value: "info@payzonindia.com", href: "mailto:info@payzonindia.com" },
  { icon: "☎", label: "Phone", value: "(+91) 755 485 9540", href: "tel:+917554859540" },
 { label: "Address", value: `Sector B Plot 1, Patel Nagar,
Raisen road, Bhopal (MP)
Pin: 462022`, href: null },
  { icon: "⏱", label: "Response Time", value: "24 hrs-30 days resolution", href: null },
];

// ─── Sidebar Contact Card ─────────────────────────────────────────────────────
function SidebarContact() {
  return (
    <div className="pp-sidebar-contact">
      <div className="pp-sidebar-contact-header">
        <div className="pp-sidebar-contact-icon">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2h10a1 1 0 011 1v6a1 1 0 01-1 1H8l-3 2V10H2a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#C8FF00" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <span className="pp-sidebar-contact-title">Quick Contact</span>
      </div>
      <div className="pp-sidebar-contact-rows">
        {CONTACT_ROWS.map(({ label, value, href }) => (
          <div key={label} className="pp-sidebar-contact-row">
            <span className="pp-sidebar-contact-label">{label}</span>
            {href ? (
              <a href={href} className="pp-sidebar-contact-value pp-sidebar-contact-link">{value}</a>
            ) : (
              <span className="pp-sidebar-contact-value">{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Mobile Contact Block ────────────────────────────────────────────────────
function MobileContact() {
  return (
    <div className="pp-mobile-contact">
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
        <div style={{ width: 4, height: 28, background: "linear-gradient(180deg, #C8FF00, #7C3AED)", borderRadius: 4 }} />
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "#F0F0FF", letterSpacing: "-0.025em", margin: 0 }}>Contact Us</h2>
      </div>
      <div className="pp-mobile-contact-grid">
        {CONTACT_ROWS.map(({ label, value, href }) => (
          <div key={label} className="pp-mobile-contact-card">
            <span className="pp-mobile-contact-label">{label}</span>
            {href ? (
              <a href={href} className="pp-mobile-contact-value pp-mobile-contact-link">{value}</a>
            ) : (
              <span className="pp-mobile-contact-value">{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Table of Contents ────────────────────────────────────────────────────────
const SECTIONS = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "data-sharing", title: "Data Sharing & Disclosure" },
  { id: "data-security", title: "Data Security" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-rights", title: "Your Rights" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "third-party", title: "Third-Party Services" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
];

// ─── Section Block ────────────────────────────────────────────────────────────
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: 52, scrollMarginTop: 100 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <div style={{ width: 4, height: 32, background: "linear-gradient(180deg, #C8FF00, #7C3AED)", borderRadius: 4, flexShrink: 0 }} />
        <h2 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 800, color: "#F0F0FF", letterSpacing: "-0.025em", margin: 0 }}>{title}</h2>
      </div>
      <div style={{ paddingLeft: 18, borderLeft: "1px solid rgba(124,58,237,0.2)" }}>
        {children}
      </div>
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

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "rgba(200,255,0,0.05)", border: "1px solid rgba(200,255,0,0.18)", borderRadius: 12, padding: "16px 20px", marginBottom: 16 }}>
      <p style={{ fontSize: 13.5, color: "rgba(210,230,200,0.75)", lineHeight: 1.75, margin: 0 }}>{children}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("information-we-collect");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.7)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }

        .pp-page { min-height: 100vh; background: #0D0B2A; color: #E8E8FF; font-family: 'Sora', system-ui, sans-serif; position: relative; overflow-x: hidden; padding-top: 80px; }
        .pp-container { max-width: 1160px; margin: 0 auto; padding: 0 28px; position: relative; z-index: 1; }

        .pp-hero { padding: 72px 0 56px; text-align: center; animation: fadeDown .6s ease both; }
        .pp-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: rgba(200,255,0,0.08); border: 1px solid rgba(200,255,0,0.28); border-radius: 6px; padding: 5px 14px; font-size: 11px; font-weight: 700; letter-spacing: .14em; color: #C8FF00; text-transform: uppercase; margin-bottom: 22px; }
        .pp-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #C8FF00; animation: pulse 2s infinite; }
        .pp-hero h1 { font-size: clamp(36px, 5vw, 64px); font-weight: 800; letter-spacing: -.035em; line-height: 1.04; color: #F0F0FF; margin-bottom: 18px; }
        .pp-hero h1 em { font-style: normal; background: linear-gradient(120deg, #C8FF00, #A8E800); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .pp-hero p { font-size: 15px; color: rgba(220,220,255,0.5); max-width: 520px; margin: 0 auto; line-height: 1.72; }
        .pp-meta { display: inline-flex; align-items: center; gap: 20px; margin-top: 22px; flex-wrap: wrap; justify-content: center; }
        .pp-meta-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: rgba(200,220,255,0.4); font-family: 'JetBrains Mono', monospace; }
        .pp-meta-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(200,255,0,0.4); }

        .pp-line-divider { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 0 52px; }
        .pp-line-divider::before, .pp-line-divider::after { content: ''; flex: 1; max-width: 200px; height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent); }
        .pp-line-divider span { width: 8px; height: 8px; background: #C8FF00; border-radius: 2px; transform: rotate(45deg); }

        .pp-layout { display: grid; grid-template-columns: 260px 1fr; gap: 40px; align-items: start; padding-bottom: 80px; animation: fadeUp .6s .2s ease both; }

        /* ── Sidebar ── */
        .pp-toc { position: sticky; top: 100px; background: rgba(255,255,255,0.03); border: 1px solid rgba(124,58,237,0.25); border-radius: 18px; overflow: hidden; }
        .pp-toc::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #7C3AED, #C8FF00, transparent); }
        .pp-toc-inner { padding: 24px 20px; }
        .pp-toc-title { font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #C8FF00; margin-bottom: 16px; }
        .pp-toc-item { display: block; padding: 8px 12px; border-radius: 8px; font-size: 12.5px; color: rgba(200,220,255,0.5); cursor: pointer; transition: all .2s; margin-bottom: 2px; border: 1px solid transparent; text-decoration: none; }
        .pp-toc-item:hover, .pp-toc-item.active { background: rgba(200,255,0,0.07); border-color: rgba(200,255,0,0.2); color: #C8FF00; }
        .pp-toc-num { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: rgba(200,255,0,0.4); margin-right: 6px; }

        /* ── Sidebar Contact ── */
        .pp-sidebar-contact { border-top: 1px solid rgba(124,58,237,0.2); padding: 20px; }
        .pp-sidebar-contact-header { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .pp-sidebar-contact-icon { width: 24px; height: 24px; borderRadius: 6px; background: rgba(200,255,0,0.08); border: 1px solid rgba(200,255,0,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .pp-sidebar-contact-title { font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #C8FF00; }
        .pp-sidebar-contact-rows { display: flex; flex-direction: column; gap: 0; }
        .pp-sidebar-contact-row { padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04); display: flex; flex-direction: column; gap: 2px; }
        .pp-sidebar-contact-row:last-child { border-bottom: none; }
        .pp-sidebar-contact-label { font-size: 9px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(200,220,255,0.35); }
        .pp-sidebar-contact-value { font-size: 11.5px; color: rgba(220,220,255,0.75); line-height: 1.5; word-break: break-word; }
        .pp-sidebar-contact-link { color: #C8FF00; text-decoration: none; transition: opacity .15s; }
        .pp-sidebar-contact-link:hover { opacity: 0.75; text-decoration: underline; }

        /* ── Mobile Contact (shown only on mobile) ── */
        .pp-mobile-contact { display: none; }
        .pp-mobile-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .pp-mobile-contact-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(124,58,237,0.22); border-radius: 12px; padding: 14px 16px; display: flex; flex-direction: column; gap: 4px; }
        .pp-mobile-contact-card:last-child:nth-child(odd) { grid-column: 1 / -1; }
        .pp-mobile-contact-label { font-size: 9px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(200,220,255,0.35); }
        .pp-mobile-contact-value { font-size: 12.5px; color: rgba(220,220,255,0.8); line-height: 1.5; word-break: break-word; }
        .pp-mobile-contact-link { color: #C8FF00; text-decoration: none; }
        .pp-mobile-contact-link:hover { text-decoration: underline; }

          .tc-footer { border-top: 1px solid rgba(200,255,0,0.07); padding: 28px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .tc-footer-brand { font-size: 18px; font-weight: 800; letter-spacing: -.02em; color: #F0F0FF; }
        .tc-footer-brand em { font-style: normal; color: #C8FF00; }
        .tc-footer-copy { font-size: 12px; color: rgba(200,220,255,0.28); margin-bottom: 0; }
        }

        /* ── Content Panel ── */
        .pp-content-panel { background: rgba(255,255,255,0.025); border: 1px solid rgba(124,58,237,0.2); border-radius: 20px; padding: 48px 44px; position: relative; overflow: hidden; }
        .pp-content-panel::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #C8FF00, #7C3AED, transparent); }

        @media (max-width: 900px) {
          .pp-layout { grid-template-columns: 1fr; }
          .pp-toc { position: static; }
          .pp-sidebar-contact { display: none; }
          .pp-mobile-contact { display: block; margin-bottom: 40px; background: rgba(255,255,255,0.025); border: 1px solid rgba(124,58,237,0.2); border-radius: 20px; padding: 28px 20px; position: relative; overflow: hidden; }
          .pp-mobile-contact::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #C8FF00, #7C3AED, transparent); }
        }
        @media (max-width: 600px) {
          .pp-content-panel { padding: 28px 20px; }
          .pp-container { padding: 0 16px; }
          .pp-mobile-contact { padding: 24px 16px; }
          .pp-mobile-contact-grid { grid-template-columns: 1fr; }
          .pp-mobile-contact-card:last-child:nth-child(odd) { grid-column: auto; }

      
      `}</style>

      <div className="pp-page">
        <BgDecor />
        <div className="pp-container">

          {/* Hero */}
          <header className="pp-hero">
            <div className="pp-eyebrow"><span className="pp-eyebrow-dot" />Legal</div>
            <h1>Privacy <em>Policy</em></h1>
            <p>We are committed to protecting your personal data. This policy explains what we collect, why we collect it, and how we keep it safe.</p>
            <div className="pp-meta">
              <span className="pp-meta-item"><span className="pp-meta-dot" />Effective: January, 2024</span>
              <span className="pp-meta-item"><span className="pp-meta-dot" />Last Updated: January {new Date().getFullYear()}</span>
              <span className="pp-meta-item"><span className="pp-meta-dot" />Version 2.1</span>
            </div>
          </header>

          <div className="pp-line-divider"><span /></div>

          {/* Layout */}
          <div className="pp-layout">

            {/* Sidebar — TOC + Contact */}
            <aside className="pp-toc">
              <div className="pp-toc-inner">
                <p className="pp-toc-title">Table of Contents</p>
                {SECTIONS.map((s, i) => (
                  <span key={s.id} className={`pp-toc-item${activeSection === s.id ? " active" : ""}`} onClick={() => scrollTo(s.id)}>
                    <span className="pp-toc-num">{String(i + 1).padStart(2, "0")}.</span>{s.title}
                  </span>
                ))}
              </div>
              <SidebarContact />
            </aside>

            {/* Main Content */}
            <div className="pp-content-panel">

              <InfoBox>
                This Privacy Policy applies to Payzonindia, Payzon API, Payzon Marketing, Payzon Shoppy, and Payzon IT Services (collectively "Payzon", "we", "our", or "us"), operating from Patel Nagar, Bhopal, Madhya Pradesh, India. By using our services, you agree to the terms described herein.
              </InfoBox>

              <Section id="information-we-collect" title="1. Information We Collect">
                <P>We collect information necessary to provide secure and reliable payment processing services. The categories of information we collect include:</P>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#B47FFF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Personal Identification Data</p>
                <UL items={["Full legal name, date of birth, and government-issued ID numbers (PAN, Aadhaar) for KYC compliance", "Business registration documents including GST number, CIN, and business address for merchant onboarding", "Email address, phone number, and physical address for account creation and communication", "Biometric or photographic identification when required by RBI or applicable law"]} />
                <p style={{ fontSize: 13, fontWeight: 700, color: "#B47FFF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, marginTop: 16 }}>Financial & Transaction Data</p>
                <UL items={["Bank account details including IFSC, account number, and bank name for payment processing and payouts", "UPI Virtual Payment Addresses (VPAs), credit/debit card details (stored in encrypted, tokenized form only)", "Transaction history, amounts, timestamps, merchant/beneficiary details, and reconciliation data", "IP address and device fingerprint associated with each transaction for fraud detection purposes"]} />
                <p style={{ fontSize: 13, fontWeight: 700, color: "#B47FFF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, marginTop: 16 }}>Technical & Usage Data</p>
                <UL items={["API keys, access tokens, webhook endpoints, and integration configuration data", "Server logs, request/response metadata, error reports, and performance telemetry", "Browser type, OS, device identifiers, and geolocation data derived from IP address", "Cookies and session identifiers for authenticated dashboard access"]} />
              </Section>

              <Section id="how-we-use" title="2. How We Use Your Information">
                <P>All data collected is used for specific, legitimate purposes directly tied to delivering our payment infrastructure services:</P>
                <UL items={[
                  "Processing payment transactions (Pay In, Pay Out, QR Codes, Virtual Accounts) accurately and securely",
                  "Performing KYC/AML verification as mandated by the Reserve Bank of India (RBI) and PMLA 2002",
                  "Detecting, investigating, and preventing fraudulent transactions, money laundering, and unauthorized access",
                  "Generating settlement reports, tax documents (Form 26AS, GST invoices), and reconciliation statements",
                  "Sending transaction alerts, OTPs, service notifications, and regulatory disclosures via SMS/email",
                  "Improving our platform through anonymized analytics, A/B testing, and performance monitoring",
                  "Responding to customer support inquiries, dispute resolution, and chargeback management",
                  "Complying with court orders, regulatory audits, FEMA requirements, and income tax assessments"
                ]} />
                <InfoBox>We do not sell, rent, or trade your personal information to third parties for marketing purposes. Any commercial use of aggregated, anonymized data is done without any personally identifiable information.</InfoBox>
              </Section>

              <Section id="data-sharing" title="3. Data Sharing & Disclosure">
                <P>We may share your information with the following categories of recipients, strictly for the purposes outlined:</P>
                <UL items={[
                  "Banking partners and NPCI (National Payments Corporation of India) to route UPI, IMPS, NEFT, and RTGS transactions",
                  "Card networks (Visa, Mastercard, RuPay) and acquiring banks for card payment processing",
                  "RBI, SEBI, FIU-IND, and other government/regulatory authorities upon lawful request or mandatory reporting",
                  "Third-party fraud prevention and risk assessment vendors operating under strict data processing agreements",
                  "Cloud infrastructure providers (AWS, Azure) acting as data processors under GDPR/DPDP-compliant contracts",
                  "Legal counsel, auditors, and compliance consultants bound by professional confidentiality obligations",
                  "Successor entities in the event of a merger, acquisition, or corporate restructuring"
                ]} />
                <P>All third-party data processors are contractually bound to use your data solely for the contracted purpose, maintain confidentiality, and implement appropriate technical and organizational security measures.</P>
              </Section>

              <Section id="data-security" title="4. Data Security">
                <P>We implement industry-standard and regulatory-compliant security controls to protect your data:</P>
                <UL items={[
                  "256-bit TLS 1.3 encryption for all data in transit between your systems and our infrastructure",
                  "AES-256 encryption for all sensitive data at rest, including card data, bank credentials, and PII",
                  "PCI DSS Level 1 compliance for cardholder data environments — the highest level of card security certification",
                  "Multi-Factor Authentication (MFA) enforced on all merchant dashboard and API management access",
                  "Role-Based Access Control (RBAC) ensuring employees access only the data necessary for their role",
                  "Regular penetration testing, vulnerability assessments, and VAPT audits by certified third-party firms",
                  "24/7 Security Operations Center (SOC) monitoring for anomalies, intrusions, and data exfiltration attempts",
                  "Secure development lifecycle (SDLC) including code review, static analysis, and dependency scanning"
                ]} />
                <InfoBox>Despite our robust security posture, no system is 100% immune to breaches. In the event of a data breach affecting your rights and freedoms, we will notify you and the appropriate authorities within 72 hours of discovery, as required by applicable law.</InfoBox>
              </Section>

              <Section id="data-retention" title="5. Data Retention">
                <P>We retain your information for periods required by law and legitimate business purposes:</P>
                <UL items={[
                  "Transaction records: Minimum 8 years as required by the Prevention of Money Laundering Act (PMLA) 2002 and RBI guidelines",
                  "KYC documents: 5 years after the end of the business relationship, per RBI Master Direction on KYC",
                  "Customer account data: Duration of active account + 3 years post-closure for dispute resolution",
                  "API logs and technical data: 1 year for debugging purposes, then automatically purged",
                  "Marketing communication preferences: Until you withdraw consent or request deletion",
                  "Legal hold data: Retained until resolution of any pending legal, regulatory, or audit matter"
                ]} />
                <P>Upon expiry of the applicable retention period, data is securely deleted using NIST SP 800-88 compliant data destruction methods, or anonymized such that it can no longer be associated with any individual.</P>
              </Section>

              <Section id="your-rights" title="6. Your Rights">
                <P>Under the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable Indian regulations, you have the following rights:</P>
                <UL items={[
                  "Right to Access: Request a copy of the personal data we hold about you and understand how it is processed",
                  "Right to Correction: Request correction of inaccurate or incomplete personal data",
                  "Right to Erasure: Request deletion of your data where it is no longer needed (subject to legal retention requirements)",
                  "Right to Grievance Redressal: Lodge a complaint with our Grievance Officer who must respond within 30 days",
                  "Right to Nominee: Designate a nominee to exercise your data rights in the event of your death or incapacity",
                  "Right to Withdraw Consent: Withdraw consent for processing where consent is the legal basis, without affecting prior lawful processing"
                ]} />
                <P>To exercise any of these rights, contact our Grievance Officer at <strong style={{ color: "#C8FF00" }}>privacy@payzonindia.com</strong> or write to us at Patel Nagar, Bhopal, Madhya Pradesh 462022.</P>
              </Section>

              <Section id="cookies" title="7. Cookies & Tracking">
                <P>Our web platform and developer portal use cookies and similar tracking technologies for the following purposes:</P>
                <UL items={[
                  "Strictly Necessary Cookies: Session management, CSRF protection, and authentication tokens — cannot be disabled",
                  "Performance Cookies: Anonymized analytics on page load times, error rates, and API endpoint usage (Google Analytics, Mixpanel)",
                  "Functional Cookies: Remembering your dashboard preferences, theme settings, and language selection",
                  "Security Cookies: Device fingerprinting and risk scoring for fraud prevention during checkout flows"
                ]} />
                <P>You may manage non-essential cookie preferences through your browser settings or our cookie preference center. Disabling cookies may limit functionality of the merchant dashboard but will not affect core payment processing APIs.</P>
              </Section>

              <Section id="third-party" title="8. Third-Party Services">
                <P>Our payment platform integrates with third-party services whose own privacy policies govern their data handling. Key integrations include NPCI (UPI infrastructure), NSDL/CDSL (KYC verification), credit bureaus (CIBIL, Experian), and cloud providers. We recommend reviewing their respective privacy policies before integrating our services into your product.</P>
                <P>Our website may contain links to partner or affiliate websites. Payzon is not responsible for the privacy practices of those sites, and this Privacy Policy does not apply to them.</P>
              </Section>

              <Section id="children" title="9. Children's Privacy">
                <P>Our payment services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If we discover that we have inadvertently collected data from a minor without verified parental consent, we will delete such data immediately. If you believe a minor has provided us with personal information, please contact us at privacy@payzonindia.com.</P>
              </Section>

              <Section id="changes" title="10. Changes to This Policy">
                <P>We may update this Privacy Policy periodically to reflect changes in our practices, technology, or regulatory requirements. When we make material changes, we will:</P>
                <UL items={[
                  "Post the updated policy on this page with a revised 'Last Updated' date",
                  "Send an email notification to registered merchants and API users at least 30 days prior to changes taking effect",
                  "Display a prominent banner on our dashboard and developer portal highlighting key changes",
                  "For changes required by law or regulation, notify you as soon as practically possible"
                ]} />
                <P>Your continued use of Payzon services after the effective date of an updated policy constitutes acceptance of the revised terms.</P>
              </Section>

            </div>
          </div>

          {/* Mobile Contact — shown only on mobile below 900px */}
          <MobileContact />

          {/* Footer */}
           <footer className="tc-footer">
            <div className="tc-footer-brand">Payzonindia Private Limited<em>.</em></div>
            <p className="tc-footer-copy">© {new Date().getFullYear()} Payzonindia. - All rights reserved. · Sector B Plot 1, Patel Nagar, Raisen road, Bhopal (MP) Pin: 462022</p>
          </footer>

        </div>
      </div>
    </>
  );
}