"use client";

import Header from "@/components/layout/Header";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROHIBITED = [
  {
    id: "narcotics",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M7 7l8 8M15 7l-8 8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Narcotics & Controlled Substances",
    description:
      "Sale, distribution, or procurement of illegal drugs, narcotics, psychotropic substances, or any controlled substance not authorized by the Government of India.",
    tags: ["Drugs", "Psychotropics", "Chemical Precursors"],
    ref: "NDPS Act, 1985",
  },
  {
    id: "weapons",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 13h10l2-4h2l1 2h1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 13l1 4H9l-1-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Weapons, Firearms & Explosives",
    description:
      "Unlicensed sale or transfer of firearms, ammunition, explosives, grenades, or any instrument designed to cause bodily harm. Military-grade equipment included.",
    tags: ["Firearms", "Ammunition", "Explosives", "Military Equipment"],
    ref: "Arms Act, 1959",
  },
  {
    id: "trafficking",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16 3l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Human Trafficking & Exploitation",
    description:
      "Any platform, service, or transaction that facilitates human trafficking, forced labour, sexual exploitation, bonded labour, or modern slavery in any form.",
    tags: ["Human Trafficking", "Forced Labour", "Sexual Exploitation"],
    ref: "IPC §370, ITPA",
  },
  {
    id: "counterfeit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="2"
          y="6"
          width="18"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="11"
          cy="11"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M2 9h2M18 9h2M2 13h2M18 13h2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M8 3l1.5 3M14 3l-1.5 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Counterfeit Currency & Goods",
    description:
      "Manufacture, sale, or transfer of counterfeit Indian currency notes, forged documents, fake branded merchandise, or any replica designed to deceive consumers.",
    tags: ["Fake Currency", "Forged Docs", "Counterfeit Brands"],
    ref: "IPC §489A–489E",
  },
  {
    id: "cyberweapons",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="4"
          width="16"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M7 18h8M11 15v3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 8l2 2-2 2M12 12h3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Malware, Hacking & Cyberweapons",
    description:
      "Tools, platforms, or services for unauthorized system access, ransomware distribution, phishing kits, DDoS attack tools, spyware, or any malicious cyber activity.",
    tags: ["Malware", "Phishing Kits", "Ransomware", "DDoS Tools"],
    ref: "IT Act §43, §66",
  },
  {
    id: "terrorism",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2L3 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L11 2z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8 11l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 8v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="11" cy="12" r="0.8" fill="currentColor" />
      </svg>
    ),
    title: "Terrorist Financing & Extremism",
    description:
      "Payments to organizations, individuals, or causes designated as terrorist entities by the Government of India, FATF, UN Security Council, or OFAC sanctions list.",
    tags: ["Terror Financing", "Sanctioned Entities", "Extremist Orgs"],
    ref: "UAPA, PMLA 2002",
  },
  {
    id: "childcontent",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M11 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 4.5L4 7M15 4.5L18 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Child Exploitation Material",
    description:
      "Any content, platform, or service that produces, distributes, or facilitates access to child sexual abuse material (CSAM) or exploitative content involving minors.",
    tags: ["CSAM", "Minor Exploitation", "Grooming Platforms"],
    ref: "POCSO Act, IT Act §67B",
  },
  {
    id: "ponzi",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 3v4M11 15v4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M3 11h4M15 11h4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M8.5 8.5l5 5M13.5 8.5l-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Ponzi & Pyramid Schemes",
    description:
      "Multi-level money circulation schemes, chain marketing frauds, fake investment platforms promising unrealistic returns, and any fraudulent chit fund or deposit scheme.",
    tags: ["Ponzi Schemes", "Pyramid Fraud", "Fake Investments"],
    ref: "SEBI Act, Prize Chits Act",
  },
];

const RESTRICTED = [
  {
    id: "forex",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M7 9.5c0-1.7 1.8-3 4-3s4 1.3 4 3-1.8 3-4 3-4 1.3-4 3 1.8 3 4 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M11 5.5v1M11 15.5v1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Forex & Cross-border Remittance",
    description:
      "Foreign exchange trading platforms and cross-border remittance services. Prior RBI authorization under FEMA mandatory. Requires AD-I or AD-II licence.",
    tags: ["Forex Trading", "International Transfers", "FEMA Compliance"],
    approval: "RBI / FEMA Licence",
    level: "high",
  },
  {
    id: "crypto",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2l2.5 4h5l-4 3.5 1.5 5L11 12l-5 2.5 1.5-5L3.5 6h5L11 2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="11" cy="11" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: "Cryptocurrency & Digital Assets",
    description:
      "Crypto exchanges, NFT marketplaces, token issuances, and DeFi platforms. Subject to PMLA obligations, enhanced KYC/AML norms, and VASP registration under FIU-IND.",
    tags: ["Crypto Exchanges", "NFT Markets", "DeFi", "VASP"],
    approval: "FIU-IND Registration",
    level: "high",
  },
  {
    id: "pharma",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="7"
          y="3"
          width="8"
          height="5"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M5 8h12l-1.5 11H6.5L5 8z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9 12h4M11 10v4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Online Pharmacy & Prescription Drugs",
    description:
      "E-pharmacy portals and prescription drug delivery services. Valid drug licence, pharmacy board registration, and compliance with Drugs & Cosmetics Act required.",
    tags: ["E-Pharmacy", "Rx Drugs", "Drug Licence"],
    approval: "CDSCO / State Drug Licence",
    level: "medium",
  },
  {
    id: "gambling",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="3"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" />
        <circle cx="14.5" cy="7.5" r="1.2" fill="currentColor" />
        <circle cx="7.5" cy="14.5" r="1.2" fill="currentColor" />
        <circle cx="14.5" cy="14.5" r="1.2" fill="currentColor" />
        <circle cx="11" cy="11" r="1.2" fill="currentColor" />
      </svg>
    ),
    title: "Online Gaming & Real Money Gambling",
    description:
      "Real-money gaming, fantasy sports, poker, rummy, and online casinos. Permissible only in Goa, Sikkim, Daman under state-issued online gaming licences.",
    tags: ["Real Money Gaming", "Online Casino", "Fantasy Sports"],
    approval: "State Gaming Licence",
    level: "high",
  },
  {
    id: "nbfc",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 9l8-6 8 6v10H3V9z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <rect
          x="8"
          y="13"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M11 9v2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="11" cy="12" r="0.8" fill="currentColor" />
      </svg>
    ),
    title: "Lending, NBFC & Credit Services",
    description:
      "Peer-to-peer lending, NBFC operations, digital lending apps, and microcredit platforms. RBI registration and adherence to Digital Lending Guidelines 2022 mandatory.",
    tags: ["P2P Lending", "NBFC", "Digital Lending", "Microfinance"],
    approval: "RBI NBFC Registration",
    level: "high",
  },
  {
    id: "tobacco",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 13h13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M3 16h13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16 11c2 0 3 1 3 2.5S18 16 16 16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M14 7c1.5-1 3-1 3 1.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Tobacco & Nicotine Products",
    description:
      "Online retail of cigarettes, e-cigarettes, vaping devices, and smokeless tobacco. Prohibited for sale to minors. COTPA compliance and state-level licences required.",
    tags: ["Cigarettes", "E-Cigarettes", "Vaping", "Smokeless Tobacco"],
    approval: "COTPA / State Licence",
    level: "medium",
  },
  {
    id: "alcohol",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M8 3h6l1 5-3 3v7H10v-7L7 8l1-5z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9 11h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Alcohol & Liquor Retail",
    description:
      "Online sale or home delivery of alcoholic beverages. Requires state excise licence and is permitted only in states with an approved online liquor delivery policy.",
    tags: ["Beer & Wine", "Spirits", "Home Delivery", "Excise Licence"],
    approval: "State Excise Licence",
    level: "medium",
  },
  {
    id: "securities",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <polyline
          points="3,16 7,10 11,13 15,7 19,9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 19h16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="19" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Securities Trading & Stockbroking",
    description:
      "Equity trading platforms, mutual fund distribution, stockbroking, and investment advisory services. SEBI registration as broker/IA/RIA and investor protection measures required.",
    tags: ["Equity Trading", "Mutual Funds", "Stockbroking", "IA/RIA"],
    approval: "SEBI Registration",
    level: "high",
  },
  {
    id: "mlm",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="4" r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="5" cy="14" r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="14" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M11 6v4M11 10L5 12M11 10l6 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Multi-level Marketing (MLM)",
    description:
      "Direct selling and MLM networks. Permitted only if operating under MCA Direct Selling Guidelines 2021 with a valid business model that isn't disguised as pyramid recruitment.",
    tags: ["Direct Selling", "Network Marketing", "DSA Compliance"],
    approval: "MCA DS Guidelines 2021",
    level: "medium",
  },
  {
    id: "political",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 18V9l7-6 7 6v9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="8"
          y="13"
          width="6"
          height="5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 7h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Political Party Donations",
    description:
      "Online contributions to political parties or electoral trusts. Subject to RPA, foreign contribution prohibitions under FCRA. Reporting under Form 24A mandatory for parties.",
    tags: ["Political Donations", "Electoral Trust", "FCRA"],
    approval: "ECI / FCRA Compliance",
    level: "medium",
  },
  {
    id: "travel",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 15l4-8 4 4 4-6 4 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 18h18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="19" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Travel Agencies & Tour Operators",
    description:
      "High-risk travel aggregators, IATA agents, and tour operators collecting advance deposits. Escrow requirements apply. Chargeback ratios must remain below 0.5% monthly.",
    tags: ["IATA Agents", "Tour Operators", "Advance Deposits"],
    approval: "MoT Recognition + Escrow",
    level: "medium",
  },
  {
    id: "adult",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M8 11h6M11 8v6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M14 8l1-2M8 8l-1-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Adult Content (18+)",
    description:
      "Legal adult entertainment platforms accessible only to verified adults. Strict age-gating, consent verification, and IT (Intermediary) Rules 2021 compliance are mandatory prerequisites.",
    tags: ["18+ Content", "Age Gating", "Consent Verification"],
    approval: "IT Rules 2021 Compliance",
    level: "high",
  },
];

const RISK_BADGES = {
  high: {
    label: "High Risk",
    color: "#FF4D4D",
    bg: "rgba(255,77,77,0.1)",
    border: "rgba(255,77,77,0.25)",
  },
  medium: {
    label: "Moderate Risk",
    color: "#FFB830",
    bg: "rgba(255,184,48,0.1)",
    border: "rgba(255,184,48,0.25)",
  },
};

// ─── Components ───────────────────────────────────────────────────────────────

function ProhibitedCard({ item, index }) {
  return (
    <div
      className="prohibited-card"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div className="pcard-header">
        <span className="pcard-icon">{item.icon}</span>
        <span className="pcard-ref">{item.ref}</span>
      </div>
      <h3 className="pcard-title">{item.title}</h3>
      <p className="pcard-desc">{item.description}</p>
      <div className="pcard-tags">
        {item.tags.map((t) => (
          <span key={t} className="pcard-tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function RestrictedCard({ item, index }) {
  const badge = RISK_BADGES[item.level];
  return (
    <div
      className="restricted-card"
      style={{ animationDelay: `${0.48 + index * 0.05}s` }}
    >
      <div className="rcard-top">
        <div className="rcard-header">
          <span className="rcard-icon">{item.icon}</span>
          <h3 className="rcard-title">{item.title}</h3>
        </div>
        <span
          className="risk-badge"
          style={{
            color: badge.color,
            background: badge.bg,
            border: `1px solid ${badge.border}`,
          }}
        >
          {badge.label}
        </span>
      </div>
      <p className="rcard-desc">{item.description}</p>
      <div className="rcard-footer">
        <div className="rcard-tags">
          {item.tags.map((t) => (
            <span key={t} className="rcard-tag">
              {t}
            </span>
          ))}
        </div>
        <div className="approval-pill">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="#C8FF00" strokeWidth="1.2" />
            <path
              d="M4 6l1.5 1.5L8 4"
              stroke="#C8FF00"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {item.approval}
        </div>
      </div>
    </div>
  );
}

function BgDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      <div className="grid-lines" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="glow glow-3" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RestrictedServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .page {
        padding-top:82px;
          min-height: 100vh;
          background: #07071A;
          color: #E8E8FF;
          font-family: 'Sora', 'DM Sans', system-ui, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        /* Desktop only */
@media (min-width: 992px) {
  .page {
    padding-left: 42px;
    padding-right: 12px;
  }
}

        /* ── Background ── */
        .bg-decor { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .grid-lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(200,255,0,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,255,0,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .glow {
          position: absolute; border-radius: 50%;
          filter: blur(140px); pointer-events: none;
        }
        .glow-1 {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(255,60,60,0.09) 0%, transparent 70%);
          top: -200px; left: -200px;
        }
        .glow-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(200,255,0,0.07) 0%, transparent 70%);
          top: 40%; right: -150px;
        }
        .glow-3 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(255,180,48,0.06) 0%, transparent 70%);
          bottom: 0; left: 20%;
        }

        .container {
          max-width: 1140px; margin: 0 auto;
          padding: 0 28px; position: relative; z-index: 1;
        }

        /* ── Hero ── */
        .hero {
          padding: 100px 0 72px;
          position: relative;
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,60,60,0.08);
          border: 1px solid rgba(255,60,60,0.3);
          border-radius: 6px;
          padding: 7px 16px;
          margin-bottom: 32px;
        }
        .hero-badge-icon {
          display: flex; align-items: center; justify-content: center;
          width: 20px; height: 20px;
          background: rgba(255,60,60,0.2);
          border-radius: 50%;
        }
        .hero-badge-icon svg { color: #FF4D4D; }
        .hero-badge-text {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.14em; color: #FF4D4D;
          text-transform: uppercase;
        }
        .hero-badge-sep {
          width: 1px; height: 12px;
          background: rgba(255,60,60,0.3);
        }
        .hero-badge-sub {
          font-size: 11px; font-weight: 500;
          color: rgba(255,150,150,0.6);
          letter-spacing: 0.06em;
        }

        .hero-title {
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.035em;
          color: #F0F0FF;
          margin-bottom: 24px;
        }
        .hero-title .word-restricted {
          position: relative;
          display: inline-block;
          color: #FF4D4D;
        }
        .hero-title .word-restricted::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FF4D4D, transparent);
          border-radius: 2px;
        }
        .hero-title .word-prohibited {
          color: #FFB830;
        }

        .hero-desc {
          font-size: 16px; line-height: 1.75;
          color: rgba(220,220,255,0.52);
          max-width: 600px; margin-bottom: 40px;
          font-weight: 400;
        }

        /* ── Alert Banner ── */
        .alert-banner {
          display: flex; align-items: flex-start; gap: 16px;
          background: rgba(255,184,48,0.06);
          border: 1px solid rgba(255,184,48,0.22);
          border-left: 3px solid #FFB830;
          border-radius: 10px;
          padding: 18px 22px;
          margin-bottom: 72px;
        }
        .alert-icon {
          flex-shrink: 0; margin-top: 1px;
          color: #FFB830;
        }
        .alert-text {
          font-size: 13.5px; line-height: 1.65;
          color: rgba(255,220,140,0.8);
          font-weight: 400;
        }
        .alert-text strong {
          color: #FFB830; font-weight: 700;
        }

        /* ── Section Divider ── */
        .section-divider {
          display: flex; align-items: center; gap: 20px;
          margin-bottom: 40px;
        }
        .divider-line {
          flex: 1; height: 1px;
        }
        .divider-label {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          white-space: nowrap;
        }
        .divider-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          animation: blink 1.8s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Prohibited section */
        .divider-prohibited .divider-line {
          background: linear-gradient(90deg, transparent, rgba(255,77,77,0.25));
        }
        .divider-prohibited .divider-line:last-child {
          background: linear-gradient(270deg, transparent, rgba(255,77,77,0.25));
        }
        .divider-prohibited .divider-label {
          background: rgba(255,77,77,0.08);
          border: 1px solid rgba(255,77,77,0.25);
          color: #FF4D4D;
        }
        .divider-prohibited .divider-dot { background: #FF4D4D; }

        /* Restricted section */
        .divider-restricted .divider-line {
          background: linear-gradient(90deg, transparent, rgba(255,184,48,0.25));
        }
        .divider-restricted .divider-line:last-child {
          background: linear-gradient(270deg, transparent, rgba(255,184,48,0.25));
        }
        .divider-restricted .divider-label {
          background: rgba(255,184,48,0.08);
          border: 1px solid rgba(255,184,48,0.25);
          color: #FFB830;
        }
        .divider-restricted .divider-dot { background: #FFB830; }

        .section-subtitle {
          font-size: 15px; line-height: 1.7;
          color: rgba(220,220,255,0.45);
          max-width: 680px;
          margin-bottom: 36px;
          font-weight: 400;
        }

        /* ── Prohibited Cards Grid ── */
        .prohibited-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
          margin-bottom: 80px;
        }

        .prohibited-card {
          background: rgba(255,40,40,0.04);
          border: 1px solid rgba(255,77,77,0.14);
          border-radius: 14px;
          padding: 22px 22px 20px;
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
          animation: fadeUp 0.5s ease both;
          position: relative;
          overflow: hidden;
        }
        .prohibited-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #FF4D4D, transparent);
          opacity: 0.5;
        }
        .prohibited-card:hover {
          border-color: rgba(255,77,77,0.35);
          background: rgba(255,40,40,0.07);
          transform: translateY(-2px);
        }

        .pcard-header {
          display: flex; align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .pcard-icon {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px;
          background: rgba(255,77,77,0.1);
          border: 1px solid rgba(255,77,77,0.2);
          border-radius: 10px;
          color: #FF4D4D;
          flex-shrink: 0;
        }
        .pcard-ref {
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255,150,150,0.45);
          text-transform: uppercase;
          text-align: right;
        }
        .pcard-title {
          font-size: 15px; font-weight: 700;
          color: #F0E8FF;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
          line-height: 1.35;
        }
        .pcard-desc {
          font-size: 13px; line-height: 1.65;
          color: rgba(210,200,255,0.5);
          margin-bottom: 16px;
        }
        .pcard-tags {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .pcard-tag {
          font-size: 11px; font-weight: 600;
          color: rgba(255,120,120,0.7);
          background: rgba(255,77,77,0.07);
          border: 1px solid rgba(255,77,77,0.15);
          border-radius: 20px; padding: 3px 10px;
        }

        /* ── Restricted Cards ── */
        .restricted-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 80px;
        }
        @media (min-width: 720px) {
          .restricted-grid { grid-template-columns: 1fr 1fr; }
        }

        .restricted-card {
          background: rgba(255,184,48,0.03);
          border: 1px solid rgba(255,184,48,0.12);
          border-radius: 14px;
          padding: 20px 22px 18px;
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
          animation: fadeUp 0.5s ease both;
          position: relative;
          overflow: hidden;
        }
        .restricted-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #FFB830, transparent);
          opacity: 0.4;
        }
        .restricted-card:hover {
          border-color: rgba(255,184,48,0.3);
          background: rgba(255,184,48,0.06);
          transform: translateY(-2px);
        }

        .rcard-top {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 12px;
          margin-bottom: 12px;
        }
        .rcard-header {
          display: flex; align-items: center; gap: 12px;
          flex: 1;
        }
        .rcard-icon {
          display: flex; align-items: center; justify-content: center;
          width: 38px; height: 38px;
          background: rgba(255,184,48,0.1);
          border: 1px solid rgba(255,184,48,0.2);
          border-radius: 9px;
          color: #FFB830;
          flex-shrink: 0;
        }
        .rcard-title {
          font-size: 14px; font-weight: 700;
          color: #F0E8FF;
          letter-spacing: -0.015em;
          line-height: 1.35;
        }
        .risk-badge {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border-radius: 4px; padding: 4px 9px;
          white-space: nowrap; flex-shrink: 0;
        }
        .rcard-desc {
          font-size: 13px; line-height: 1.63;
          color: rgba(210,200,255,0.48);
          margin-bottom: 14px;
        }
        .rcard-footer {
          display: flex; align-items: center;
          justify-content: space-between; gap: 10px;
          flex-wrap: wrap;
        }
        .rcard-tags {
          display: flex; flex-wrap: wrap; gap: 5px;
        }
        .rcard-tag {
          font-size: 10.5px; font-weight: 600;
          color: rgba(255,200,120,0.6);
          background: rgba(255,184,48,0.06);
          border: 1px solid rgba(255,184,48,0.13);
          border-radius: 20px; padding: 3px 9px;
        }
        .approval-pill {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 600;
          color: rgba(200,255,0,0.65);
          background: rgba(200,255,0,0.05);
          border: 1px solid rgba(200,255,0,0.15);
          border-radius: 20px; padding: 4px 12px;
          white-space: nowrap; flex-shrink: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Compliance Box ── */
        .compliance-box {
          background: rgba(200,255,0,0.04);
          border: 1px solid rgba(200,255,0,0.15);
          border-radius: 16px;
          padding: 36px 40px;
          margin-bottom: 80px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 720px) {
          .compliance-box { grid-template-columns: 1fr 1fr 1fr; gap: 0; }
        }
        .compliance-item {
          display: flex; flex-direction: column; gap: 10px;
          padding: 0 28px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .compliance-item:first-child { padding-left: 0; }
        .compliance-item:last-child { border-right: none; }
        @media (max-width: 719px) {
          .compliance-item {
            padding: 0 0 24px; border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .compliance-item:last-child { border-bottom: none; padding-bottom: 0; }
        }
        .compliance-num {
          font-size: 36px; font-weight: 800;
          letter-spacing: -0.03em;
          color: #C8FF00; line-height: 1;
        }
        .compliance-label {
          font-size: 13px; font-weight: 600;
          color: #E8E8FF; letter-spacing: -0.01em;
        }
        .compliance-sub {
          font-size: 12.5px; line-height: 1.6;
          color: rgba(200,220,255,0.4);
        }

        /* ── Contact CTA ── */
        .contact-cta {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 48px 40px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 100px;
        }
        .contact-cta-left h2 {
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 800; letter-spacing: -0.025em;
          color: #F0F0FF; margin-bottom: 10px;
        }
        .contact-cta-left p {
          font-size: 14.5px; line-height: 1.65;
          color: rgba(200,220,255,0.45);
          max-width: 480px;
        }
        .contact-cta-buttons {
          display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0;
        }
        .btn-primary {
          background: #C8FF00; color: #07071A;
          border: none; border-radius: 10px;
          padding: 13px 28px; font-size: 14px; font-weight: 800;
          cursor: pointer; letter-spacing: -0.01em;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none; display: inline-block;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(200,255,0,0.28);
        }
        .btn-outline {
          background: transparent; color: #E8E8FF;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px; padding: 13px 28px;
          font-size: 14px; font-weight: 600;
          cursor: pointer; letter-spacing: -0.01em;
          transition: border-color 0.2s, background 0.2s;
          text-decoration: none; display: inline-block;
        }
        .btn-outline:hover {
          border-color: rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.04);
        }

        /* ── Footer note ── */
        .footer-note {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 32px 0 60px;
          display: flex; align-items: flex-start; gap: 16px;
        }
        .footer-note-icon { color: rgba(200,220,255,0.25); flex-shrink: 0; margin-top: 2px; }
        .footer-note-text {
          font-size: 12px; line-height: 1.7;
          color: rgba(180,200,255,0.3);
        }
        .footer-note-text a {
          color: rgba(200,255,0,0.5);
          text-decoration: none;
        }
        .footer-note-text a:hover { color: #C8FF00; }
      `}</style>

      <Header />

      <div className="page">
        <BgDecor />

        <div className="container">
          {/* ── Hero ── */}
          <section className="hero">
            <div className="hero-badge">
              <span className="hero-badge-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 2v4M6 8.5v.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="hero-badge-text">Compliance Policy</span>
              <span className="hero-badge-sep" />
              <span className="hero-badge-sub">Last updated — Jan 2025</span>
            </div>

            <h1 className="hero-title">
              <span className="word-restricted">Restricted</span>
              <br />
              &amp; <span className="word-prohibited">Prohibited</span>
              <br />
              Services.
            </h1>

            <p className="hero-desc">
              Payzon's payout infrastructure operates under the regulatory
              framework of the Reserve Bank of India, SEBI, and FATF guidelines.
              The following merchant categories are either strictly prohibited
              or require prior written approval before activation.
            </p>

            {/* Alert Banner */}
            <div className="alert-banner">
              <span className="alert-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2L2 17h16L10 2z"
                    stroke="#FFB830"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 8v4M10 14.5v.5"
                    stroke="#FFB830"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <p className="alert-text">
                <strong>Important Notice:</strong> Merchants found processing
                transactions in prohibited categories will face immediate
                account suspension, fund holds, and reporting to relevant
                regulatory authorities including FIU-IND and RBI.
                Restricted-category merchants must obtain Payzon's written
                approval before onboarding. Misrepresentation of business
                category is a violation of our Terms of Service and applicable
                law.
              </p>
            </div>
          </section>

          {/* ── Compliance Stats ── */}
          <div className="compliance-box">
            <div className="compliance-item">
              <span className="compliance-num">8</span>
              <span className="compliance-label">Prohibited Categories</span>
              <span className="compliance-sub">
                Absolute ban with zero exceptions. Transactions flagged
                immediately and reported to FIU-IND.
              </span>
            </div>
            <div className="compliance-item">
              <span className="compliance-num">12</span>
              <span className="compliance-label">Restricted Categories</span>
              <span className="compliance-sub">
                Permitted with prior approval, valid licence, and enhanced
                KYC/AML monitoring.
              </span>
            </div>
            <div className="compliance-item">
              <span className="compliance-num">RBI</span>
              <span className="compliance-label">Regulatory Framework</span>
              <span className="compliance-sub">
                Governed by PA Guidelines 2020, PMLA 2002, FEMA 1999, and FATF
                recommendations.
              </span>
            </div>
          </div>

          {/* ─── PROHIBITED SECTION ─── */}
          <div className="section-divider divider-prohibited">
            <div className="divider-line" />
            <div className="divider-label">
              <span className="divider-dot" />
              Strictly Prohibited
            </div>
            <div className="divider-line" />
          </div>

          <p className="section-subtitle">
            The following business categories are{" "}
            <strong style={{ color: "#FF6B6B", fontWeight: 700 }}>
              strictly prohibited
            </strong>{" "}
            on Payzon's platform. No exceptions, exemptions, or appeals apply.
            Any account found processing these transactions will be permanently
            terminated and reported to relevant authorities.
          </p>

          <div className="prohibited-grid">
            {PROHIBITED.map((item, i) => (
              <ProhibitedCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* ─── RESTRICTED SECTION ─── */}
          <div className="section-divider divider-restricted">
            <div className="divider-line" />
            <div className="divider-label">
              <span className="divider-dot" />
              Restricted — Approval Required
            </div>
            <div className="divider-line" />
          </div>

          <p className="section-subtitle">
            The following categories are{" "}
            <strong style={{ color: "#FFB830", fontWeight: 700 }}>
              conditionally permitted
            </strong>{" "}
            with valid licences, prior written approval from Payzon's compliance
            team, and ongoing adherence to enhanced due diligence (EDD) and AML
            monitoring requirements.
          </p>

          <div className="restricted-grid">
            {RESTRICTED.map((item, i) => (
              <RestrictedCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* ── Contact CTA ── */}
          <div className="contact-cta">
            <div className="contact-cta-left">
              <h2>Operate in a restricted category?</h2>
              <p>
                Submit your business licence, KYC documents, and use-case
                description to our compliance team. We review applications
                within 5–7 business days and provide conditional approval with
                an enhanced monitoring agreement.
              </p>
            </div>
            <div className="contact-cta-buttons">
              <a href="/contact" className="btn-primary">
                Apply for Approval →
              </a>
              <a href="/terms-and-conditions" className="btn-outline">
                Read Full Policy
              </a>
            </div>
          </div>

          {/* ── Footer Note ── */}
          <div className="footer-note">
            <span className="footer-note-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M8 5v4M8 10.5v.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <p className="footer-note-text">
              This list is indicative and not exhaustive. Payzon reserves the
              right to add, remove, or reclassify categories at any time in
              accordance with regulatory updates from RBI, SEBI, MCA, TRAI, or
              applicable Central/State government notifications. For the most
              current policy, refer to our <a href="#">Terms of Service</a> and{" "}
              <a href="#">Merchant Acceptable Use Policy</a>. Regulated under
              RBI PA Guidelines, Circular DPSS.CO.PD No.1810/02.14.008/2019-20.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
