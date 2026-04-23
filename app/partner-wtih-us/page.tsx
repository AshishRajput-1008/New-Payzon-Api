"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight, CheckCircle2, Store, Zap,
  Shield, TrendingUp, Headphones, Globe, Star,
  ChevronDown, BarChart3, Handshake, Award, Code2,
  CreditCard, Repeat2, QrCode, Wallet, Lock, Users
} from "lucide-react";

const NAV_FONT: React.CSSProperties = {
  fontFamily: '"SuisseIntl", Arial, Helvetica, sans-serif',
  fontWeight: 600,
};

const TABS = ["reseller", "service-provider"] as const;
type Tab = typeof TABS[number];

/* ─────────────────────── CONTENT ─────────────────────── */

const resellerBenefits = [
  "Earn up to 30% recurring commission on every transaction your merchants process",
  "White-label merchant dashboard — fully branded with your logo, colors, and domain",
  "Dedicated Partner Success Manager assigned from Day 1",
  "Co-branded pitch decks, sales scripts, rate cards, and case studies provided",
  "Priority support via a dedicated partner Slack channel + SLA-backed response",
  "Monthly performance bonuses for top-tier resellers crossing GMV milestones",
  "Access to Payzon sandbox, demo environment, and live merchant demo accounts",
  "Real-time earnings dashboard with instant commission payout tracking",
];

const serviceProviderBenefits = [
  "Full API access: Payment Links, QR, Pay-In, Pay-Out, Virtual Accounts, Escrow",
  "Volume-based pricing — transaction rates reduce as your processing volume scales",
  "Dedicated integration engineer assigned throughout technical onboarding",
  "Custom SLA agreements with 99.9% uptime guarantee for enterprise platforms",
  "Webhook configurator, Postman collections, and exhaustive API reference portal",
  "Revenue sharing on every merchant account referred via your platform",
  "PCI DSS Level 1 & RBI compliance documentation provided for your audits",
  "Multi-tenant sub-account architecture — manage all clients under one dashboard",
];

const resellerSteps = [
  {
    n: "01",
    title: "Apply & Get Approved",
    desc: "Submit your reseller application with your business details. Our partner team reviews and approves qualified resellers within 48 business hours.",
  },
  {
    n: "02",
    title: "Onboarding & Branding",
    desc: "Attend a guided partner onboarding session. Receive your white-label credentials, co-branded sales kit, and merchant demo account on the same day.",
  },
  {
    n: "03",
    title: "Pitch Merchants & Sign Them",
    desc: "Present Payzon as your own payment gateway to your merchant network. We support you with live demos, pricing proposals, and co-sell calls.",
  },
  {
    n: "04",
    title: "Earn Recurring Commission",
    desc: "Earn a percentage of every transaction your merchants process — tracked live in your partner dashboard and paid monthly to your bank account.",
  },
];

const spSteps = [
  {
    n: "01",
    title: "Register as a Service Provider",
    desc: "Submit your platform details, use case, and expected volume. Our team reviews and approves your SP application within 2 business days.",
  },
  {
    n: "02",
    title: "API Integration & Testing",
    desc: "Access full API documentation, sandbox credentials, and a dedicated integration engineer who stays with you until you're fully live.",
  },
  {
    n: "03",
    title: "Deploy to Your Platform",
    desc: "Embed Payzon's payment infrastructure into your SaaS, marketplace, or fintech app. Your clients experience seamless payments; you own the UX.",
  },
  {
    n: "04",
    title: "Scale & Earn Revenue Share",
    desc: "Benefit from volume-tiered pricing as you scale, plus earn revenue share on every merchant account that signs up through your platform.",
  },
];

const resellerServices = [
  { icon: <BarChart3 size={18} />, title: "White-Label Dashboard", desc: "Full-featured merchant dashboard with your logo, domain, and color scheme — your merchants never see Payzon branding." },
  { icon: <TrendingUp size={18} />, title: "Real-Time Earnings Tracker", desc: "See every transaction, your commission cut, and cumulative earnings — updated live, paid monthly." },
  { icon: <Headphones size={18} />, title: "Co-Sell Support", desc: "Our sales team joins your merchant calls, helps draft proposals, and assists in closing deals alongside you." },
  { icon: <Award size={18} />, title: "Tiered Commission", desc: "Start at 15% and grow up to 30% recurring commission as your portfolio GMV increases — automatically upgraded." },
  { icon: <Globe size={18} />, title: "Sales & Marketing Kit", desc: "Ready-to-use pitch decks, one-pagers, email templates, digital ad assets, and co-branded case studies." },
  { icon: <Shield size={18} />, title: "Compliance Fully Covered", desc: "All PCI DSS, RBI, and regulatory compliance is handled by Payzon — your merchants are protected without any effort from you." },
];

const spServices = [
  { icon: <CreditCard size={18} />, title: "Payment Collection APIs", desc: "Accept payments via UPI, cards, net banking, wallets, payment links, hosted checkout, and embedded forms." },
  { icon: <Repeat2 size={18} />, title: "Pay-Out & Settlement", desc: "Programmatic vendor payouts, bulk disbursements, and automated settlement to any Indian bank account." },
  { icon: <QrCode size={18} />, title: "Dynamic QR & Payment Links", desc: "Generate unique QR codes and payment links on the fly — ideal for invoicing, POS, and e-commerce platforms." },
  { icon: <Wallet size={18} />, title: "Virtual Accounts", desc: "Issue unique virtual bank accounts per client. Hold funds in escrow and release on configured triggers." },
  { icon: <Code2 size={18} />, title: "Webhooks & Event Streaming", desc: "Real-time event notifications for every payment status change — configure via visual webhook builder or API." },
  { icon: <Lock size={18} />, title: "PCI DSS & RBI Compliant", desc: "Full compliance documentation for your audits, plus multi-tenant sub-account architecture for SaaS platforms." },
];

const stats = [
  { value: "500+", label: "Active Partners" },
  { value: "₹2Cr+", label: "Commissions Paid Out" },
  { value: "30%", label: "Max Commission Rate" },
  { value: "48h", label: "Approval Turnaround" },
];

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Founder, FinEdge Solutions",
    type: "Reseller",
    quote: "Payzon's white-label setup let us launch a branded payment gateway in under a week. Our merchants think it's our own product. Commission payouts are transparent and on time, every month.",
    avatar: "RM",
    color: "#c8f000",
  },
  {
    name: "Priya Sharma",
    role: "CTO, VendorLoop Marketplace",
    type: "Service Provider",
    quote: "We embedded Payzon's Virtual Account and Escrow APIs into our B2B marketplace in just 4 days. Automated reconciliation alone saves our finance team 25+ hours every month.",
    avatar: "PS",
    color: "#3B82F6",
  },
  {
    name: "Amit Joshi",
    role: "CEO, PayMatrix Agency",
    type: "Reseller",
    quote: "The co-sell support is exceptional — Payzon's team joins our merchant calls and helps close. We grew our reseller portfolio 3× in 6 months and moved to Platinum tier.",
    avatar: "AJ",
    color: "#10B981",
  },
];

/* ─────────────────────── COMPONENT ─────────────────────── */

export default function PartnerPage() {
  const [active, setActive] = useState<Tab>("reseller");
  const isReseller = active === "reseller";

  return (
    <>
      <style>{`
        .pp-root {
          background: #06030f;
          color: #fff;
          font-family: "SuisseIntl", Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }
        .pp-grid-ov {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.027) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.027) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        /* ── Hero ── */
        .pp-hero {
          position: relative;
          padding: 120px 0 100px;
          overflow: hidden;
          text-align: center;
          background: radial-gradient(ellipse 80% 55% at 50% -10%, rgba(200,240,0,0.18) 0%, #06030f 65%);
        }
        .pp-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(200,240,0,0.1); border: 1px solid rgba(200,240,0,0.28);
          color: #c8f000; font-size: 11px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; padding: 5px 16px; border-radius: 20px; margin-bottom: 28px;
        }
        .pp-hero-title {
          font-size: clamp(44px, 7vw, 80px); font-weight: 800;
          line-height: 1.04; letter-spacing: -.028em; color: #fff; margin-bottom: 10px;
        }
        .pp-hero-title span { color: #c8f000; }
        .pp-hero-sub {
          font-size: clamp(17px, 2.2vw, 22px); color: rgba(255,255,255,0.55);
          max-width: 600px; margin: 0 auto 40px; line-height: 1.72; font-weight: 400;
        }
        .pp-hero-btns {
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 56px;
        }
        .pp-btn-gold {
          display: inline-flex; align-items: center; gap: 8px;
          background: #c8f000; color: #06030f; font-weight: 700; font-size: 14px;
          padding: 13px 28px; border-radius: 50px; text-decoration: none;
          transition: filter .2s, transform .2s; border: none; cursor: pointer;
        }
        .pp-btn-gold:hover { filter: brightness(1.1); transform: translateY(-1px); }
        .pp-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: rgba(255,255,255,0.78); font-weight: 600; font-size: 14px;
          padding: 13px 28px; border-radius: 50px; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.2); transition: all .2s; cursor: pointer;
        }
        .pp-btn-outline:hover { border-color: rgba(255,255,255,0.5); color: #fff; }

        /* ── Stats ── */
        .pp-stats {
          background: rgba(255,255,255,0.025);
          border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 32px 0;
        }
        .pp-stat { text-align: center; border-right: 1px solid rgba(255,255,255,0.07); }
        .pp-stat:last-child { border-right: none; }
        .pp-stat-v { font-size: 30px; font-weight: 800; color: #c8f000; letter-spacing: -.025em; margin-bottom: 5px; }
        .pp-stat-l { font-size: 12px; color: rgba(255,255,255,0.38); font-weight: 500; letter-spacing: .03em; }

        /* ── Toggle Tabs ── */
        .pp-toggle-wrap { padding: 72px 0 0; }
        .pp-toggle {
          display: inline-flex; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 50px; padding: 5px;
          gap: 0; margin: 0 auto; width: fit-content;
        }
        .pp-toggle-btn {
          padding: 11px 28px; border-radius: 50px; font-size: 14px; font-weight: 700;
          cursor: pointer; border: none; transition: all .22s; letter-spacing: .01em; white-space: nowrap;
        }
        .pp-toggle-btn.active { background: #c8f000; color: #06030f; }
        .pp-toggle-btn:not(.active) { background: transparent; color: rgba(255,255,255,0.5); }
        .pp-toggle-btn:not(.active):hover { color: rgba(255,255,255,0.85); }

        /* ── Partner Tab Content ── */
        .pp-partner-imgcard {
          position: relative; border-radius: 24px; overflow: hidden;
          aspect-ratio: 16/9; border: 1px solid rgba(255,255,255,0.1);
        }
        .pp-partner-imgcard img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pp-img-overlay { position: absolute; inset: 0; }
        .pp-img-stat {
          position: absolute; top: 20px; right: 20px;
          background: rgba(6,3,15,0.82); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 14px 18px;
          text-align: center; min-width: 110px;
        }
        .pp-img-stat-v { font-size: 24px; font-weight: 800; letter-spacing: -.02em; margin-bottom: 3px; }
        .pp-img-stat-l { font-size: 11px; color: rgba(255,255,255,0.45); font-weight: 500; }

        /* ── Section commons ── */
        .pp-sec { padding: 80px 0; }
        .pp-sec-badge { font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #c8f000; margin-bottom: 12px; }
        .pp-sec-title { font-size: clamp(26px, 3.8vw, 42px); font-weight: 800; line-height: 1.1; letter-spacing: -.022em; color: #fff; margin-bottom: 14px; }
        .pp-sec-desc { font-size: 15.5px; line-height: 1.78; color: rgba(255,255,255,0.52); font-weight: 400; }

        /* ── API chips ── */
        .pp-api-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
        .pp-api-chip {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.22);
          color: #93C5FD; font-size: 12px; font-weight: 600;
          padding: 5px 12px; border-radius: 20px;
        }

        /* ── Service cards ── */
        .pp-svc-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; padding: 26px; height: 100%;
          position: relative; overflow: hidden; transition: border-color .25s, background .25s;
        }
        .pp-svc-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #c8f000, transparent);
          opacity: 0; transition: opacity .25s;
        }
        .pp-svc-card:hover { border-color: rgba(200,240,0,0.22); background: rgba(255,255,255,0.05); }
        .pp-svc-card:hover::after { opacity: 1; }
        .pp-svc-icon {
          width: 44px; height: 44px; background: rgba(200,240,0,0.1);
          border-radius: 11px; display: flex; align-items: center; justify-content: center;
          color: #c8f000; margin-bottom: 16px;
        }
        .pp-svc-title { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 8px; letter-spacing: -.01em; }
        .pp-svc-desc { font-size: 13.5px; line-height: 1.7; color: rgba(255,255,255,0.48); font-weight: 400; }

        /* ── Steps ── */
        .pp-steps-section {
          background: rgba(255,255,255,0.02);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 80px 0; position: relative; overflow: hidden;
        }
        .pp-step { display: flex; gap: 22px; margin-bottom: 40px; }
        .pp-step:last-child { margin-bottom: 0; }
        .pp-step-num {
          width: 48px; height: 48px; flex-shrink: 0; border-radius: 13px;
          background: rgba(200,240,0,0.1); border: 1px solid rgba(200,240,0,0.28);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; font-weight: 800; color: #c8f000;
        }
        .pp-step-title { font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 7px; }
        .pp-step-desc { font-size: 13.5px; line-height: 1.7; color: rgba(255,255,255,0.48); font-weight: 400; }

        /* ── Benefits list ── */
        .pp-benefit { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 15px; font-size: 14.5px; color: rgba(255,255,255,0.72); line-height: 1.6; }
        .pp-benefit svg { flex-shrink: 0; color: #c8f000; margin-top: 2px; }

        /* ── Commission / Pricing table ── */
        .pp-table-wrap {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; overflow: hidden;
        }
        .pp-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .pp-table thead th {
          padding: 16px 20px; text-align: left; font-size: 11px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,0.35);
          border-bottom: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.02);
        }
        .pp-table tbody td { padding: 16px 20px; color: rgba(255,255,255,0.78); border-bottom: 1px solid rgba(255,255,255,0.05); }
        .pp-table tbody tr:last-child td { border-bottom: none; }
        .pp-table tbody tr:hover td { background: rgba(255,255,255,0.03); }
        .pp-table-badge {
          display: inline-flex; background: rgba(200,240,0,0.12); color: #c8f000;
          font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px;
        }
        .pp-table-highlight { color: #c8f000; font-weight: 700; }

        /* ── Testimonials ── */
        .pp-test-card {
          background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; padding: 28px; height: 100%;
        }
        .pp-test-avatar {
          width: 46px; height: 46px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 800; flex-shrink: 0;
        }
        .pp-test-type {
          display: inline-flex; font-size: 10px; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; padding: 3px 9px; border-radius: 20px; margin-bottom: 14px;
          background: rgba(200,240,0,0.1); color: #c8f000; border: 1px solid rgba(200,240,0,0.2);
        }
        .pp-test-quote {
          font-size: 14.5px; line-height: 1.75; color: rgba(255,255,255,0.7);
          font-weight: 400; font-style: italic; margin-bottom: 20px;
        }
        .pp-test-name { font-size: 14px; font-weight: 700; color: #fff; }
        .pp-test-role { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 2px; }
        .pp-stars { display: flex; gap: 3px; margin-bottom: 12px; }

        /* ── API Explorer Card ── */
        .pp-api-explorer {
          background: rgba(0,0,0,0.45); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; overflow: hidden;
        }
        .pp-api-explorer-header {
          display: flex; align-items: center; gap: 6px; padding: 13px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.03);
        }
        .pp-dot { width: 10px; height: 10px; border-radius: 50%; }
        .pp-code { padding: 20px 22px; font-family: "Courier New", monospace; font-size: 12.5px; line-height: 1.9; color: rgba(255,255,255,0.72); }
        .pp-code-key { color: #7dd3fc; }
        .pp-code-str { color: #fdba74; }
        .pp-code-green { color: #86efac; }
        .pp-code-lime { color: #c8f000; }
        .pp-code-dim { color: rgba(255,255,255,0.3); }
        .pp-api-status {
          margin: 0 18px 18px; padding: 12px 16px;
          background: rgba(200,240,0,0.08); border: 1px solid rgba(200,240,0,0.15);
          border-radius: 10px;
        }

        /* ── CTA ── */
        .pp-cta {
          position: relative; border-radius: 28px; overflow: hidden;
          background: linear-gradient(135deg, rgba(60,90,0,0.55) 0%, rgba(6,3,15,0.9) 100%);
          border: 1px solid rgba(200,240,0,0.22);
          padding: 80px 40px; text-align: center; margin-bottom: 80px;
        }
        .pp-cta::before {
          content: ''; position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 500px; height: 240px;
          background: radial-gradient(ellipse, rgba(200,240,0,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        .pp-cta-title { font-size: clamp(28px, 4.5vw, 44px); font-weight: 800; letter-spacing: -.025em; color: #fff; margin-bottom: 14px; position: relative; }
        .pp-cta-desc { font-size: 16px; color: rgba(255,255,255,0.55); max-width: 520px; margin: 0 auto 36px; line-height: 1.75; font-weight: 400; position: relative; }
        .pp-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; }

        /* ── FAQ ── */
        .pp-faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; cursor: pointer;
        }
        .pp-faq-item:last-child { border-bottom: none; }
        .pp-faq-q { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
        .pp-faq-q-text { font-size: 16px; font-weight: 600; color: #fff; }
        .pp-faq-chevron { color: rgba(255,255,255,0.4); flex-shrink: 0; transition: transform .22s; }
        .pp-faq-chevron.open { transform: rotate(180deg); }
        .pp-faq-a { font-size: 14px; line-height: 1.75; color: rgba(255,255,255,0.52); margin-top: 12px; font-weight: 400; }

        /* ── Decorative ── */
        .pp-deco { position: absolute; border-radius: 50%; border: 1px solid rgba(200,240,0,0.07); pointer-events: none; }
      `}</style>

      <div className="pp-root">

        {/* ── HERO ── */}
        <section className="pp-hero">
          <div className="pp-grid-ov" />
          <div className="pp-deco" style={{ width: 600, height: 600, top: -200, left: -200 }} />
          <div className="pp-deco" style={{ width: 400, height: 400, top: -100, right: -100 }} />

          <div className="container" style={{ position: "relative" }}>
            <div className="pp-hero-eyebrow">
              <Handshake size={13} />
              Partner Programme
            </div>
            <h1 className="pp-hero-title">
              Grow With<br /><span>Payzon API</span>
            </h1>
            <p className="pp-hero-sub">
              India's most developer-friendly payment gateway — built for partners who want to earn recurring revenue or embed world-class payment infrastructure into their own product.
            </p>
            <div className="pp-hero-btns">
              <Link href="/contact" className="pp-btn-gold" style={NAV_FONT}>
                Become a Reseller <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="pp-btn-outline" style={NAV_FONT}>
                Integrate as Service Provider
              </Link>
            </div>

            {/* Partner type cards */}
            <div className="row g-4 mt-2">
              <div className="col-md-6">
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "28px", textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 11, background: "rgba(200,240,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8f000" }}>
                      <Store size={20} />
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>Reseller Partner</div>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, marginBottom: 16 }}>
                    Sell Payzon's payment gateway to merchants under your own brand. No infrastructure to manage — just bring clients and earn recurring commissions on every rupee they process.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["White-label", "Up to 30% commission", "Co-sell support"].map(t => (
                      <span key={t} style={{ background: "rgba(200,240,0,0.1)", color: "#c8f000", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(200,240,0,0.2)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "28px", textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 11, background: "rgba(59,130,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3B82F6" }}>
                      <Code2 size={20} />
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>Service Provider</div>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, marginBottom: 16 }}>
                    Integrate Payzon's payment APIs directly into your SaaS, marketplace, or fintech platform. Accept payments, disburse funds, and manage settlements — all via clean REST APIs.
                  </p>
                  <div className="pp-api-chips">
                    {["Pay-In API", "Pay-Out API", "Virtual Accounts", "QR Code",].map(t => (
                      <span key={t} className="pp-api-chip">
                        <Zap size={10} />{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <div className="pp-stats">
          <div className="container">
            <div className="row g-0">
              {stats.map((s, i) => (
                <div key={i} className="col-6 col-md-3">
                  <div className="pp-stat">
                    <div className="pp-stat-v">{s.value}</div>
                    <div className="pp-stat-l">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOGGLE TABS ── */}
        <div className="pp-toggle-wrap">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="pp-toggle">
                <button
                  className={`pp-toggle-btn ${active === "reseller" ? "active" : ""}`}
                  onClick={() => setActive("reseller")}
                  style={NAV_FONT}
                >
                  <Store size={14} style={{ display: "inline", marginRight: 7, verticalAlign: "middle" }} />
                  Reseller Partner
                </button>
                <button
                  className={`pp-toggle-btn ${active === "service-provider" ? "active" : ""}`}
                  onClick={() => setActive("service-provider")}
                  style={NAV_FONT}
                >
                  <Code2 size={14} style={{ display: "inline", marginRight: 7, verticalAlign: "middle" }} />
                  Service Provider
                </button>
              </div>
            </div>

            {/* ── Tab: Intro ── */}
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <div className="pp-sec-badge">{isReseller ? "Reseller Programme" : "Service Provider Programme"}</div>
                <h2 className="pp-sec-title">
                  {isReseller
                    ? "Sell Payment Services Under Your Own Brand"
                    : "Embed Payment APIs Into Your Platform"}
                </h2>
                <p className="pp-sec-desc">
                  {isReseller
                    ? "As a Payzon Reseller, you onboard merchants to our payment gateway under your own branding and earn up to 30% recurring commission on every transaction — forever. No servers, no compliance headaches, no technical team needed."
                    : "As a Payzon Service Provider, you get full REST API access to integrate Pay-In, Pay-Out, QR Codes, Virtual Accounts, and Escrow directly into your own product. You own the user experience; Payzon powers the infrastructure behind it."}
                </p>
                {!isReseller && (
                  <div className="pp-api-chips">
                    {["UPI", "Cards", "Net Banking", "Wallets", "QR Code", "Payment Links", "Virtual Accounts", "Escrow"].map(t => (
                      <span key={t} className="pp-api-chip"><Zap size={10} />{t}</span>
                    ))}
                  </div>
                )}
                <div className="mt-4">
                  {(isReseller ? resellerBenefits.slice(0, 4) : serviceProviderBenefits.slice(0, 4)).map((b, i) => (
                    <div key={i} className="pp-benefit">
                      <CheckCircle2 size={17} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-7">
                <div className="pp-partner-imgcard">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={isReseller
                      ? "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
                    }
                    alt={isReseller ? "Reseller partner meeting" : "Service provider development team"}
                  />
                  <div className="pp-img-overlay" style={{ background: "linear-gradient(135deg, rgba(6,3,15,0.55) 0%, transparent 55%)" }} />
                  <div className="pp-img-stat">
                    <div className="pp-img-stat-v" style={{ color: isReseller ? "#c8f000" : "#3B82F6" }}>
                      {isReseller ? "30%" : "7+"}
                    </div>
                    <div className="pp-img-stat-l">{isReseller ? "Max Commission" : "Payment APIs"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── WHAT WE PROVIDE ── */}
        <section className="pp-sec">
          <div className="container">
            <div className="row mb-5 align-items-end">
              <div className="col-lg-5">
                <div className="pp-sec-badge">What You Get</div>
                <h2 className="pp-sec-title">
                  {isReseller ? "Your Complete Reseller Toolkit" : "Your Full API & SP Toolkit"}
                </h2>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <p className="pp-sec-desc">
                  {isReseller
                    ? "Everything you need to go to market fast — white-label branding, sales support, compliance coverage, and real-time commission tracking. We handle the product; you handle the relationships."
                    : "Everything you need to integrate, go live, and scale — REST APIs, webhooks, sandbox, dedicated support, and volume-based pricing that grows with your platform."}
                </p>
              </div>
            </div>
            <div className="row g-4">
              {(isReseller ? resellerServices : spServices).map((s, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="pp-svc-card">
                    <div className="pp-svc-icon">{s.icon}</div>
                    <h3 className="pp-svc-title">{s.title}</h3>
                    <p className="pp-svc-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="pp-steps-section">
          <div className="pp-grid-ov" style={{ opacity: 0.5 }} />
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-4">
                <div className="pp-sec-badge">How It Works</div>
                <h2 className="pp-sec-title">
                  {isReseller
                    ? "From Application to First Commission in 4 Steps"
                    : "From Application to Live Transactions in 4 Steps"}
                </h2>
                <p className="pp-sec-desc">
                  {isReseller
                    ? "Our reseller onboarding is designed to get you pitching merchants and closing deals within days — not months."
                    : "Our integration process is designed to get your platform processing live payments in under a week."}
                </p>
                <Link href="/contact" className="pp-btn-gold mt-4" style={{ ...NAV_FONT, display: "inline-flex" }}>
                  Apply Now <ArrowUpRight size={15} />
                </Link>
              </div>
              <div className="col-lg-7 offset-lg-1">
                {(isReseller ? resellerSteps : spSteps).map((step, i) => (
                  <div key={i} className="pp-step">
                    <div className="pp-step-num">{step.n}</div>
                    <div>
                      <h3 className="pp-step-title">{step.title}</h3>
                      <p className="pp-step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMISSION / PRICING TABLE ── */}
        <section className="pp-sec">
          <div className="container">
            <div className="pp-sec-badge">{isReseller ? "Commission Structure" : "Pricing Tiers"}</div>
            <h2 className="pp-sec-title mb-4">
              {isReseller
                ? "Transparent, Recurring Commissions — No Hidden Clauses"
                : "Volume-Based Pricing That Scales With Your Platform"}
            </h2>
            <div className="pp-table-wrap">
              <table className="pp-table">
                <thead>
                  <tr>
                    {isReseller
                      ? <><th>Partner Tier</th><th>Monthly GMV Referred</th><th>Commission Rate</th><th>Added Benefits</th></>
                      : <><th>SP Tier</th><th>Monthly Transaction Volume</th><th>Rate Benefit</th><th>Included Perks</th></>
                    }
                  </tr>
                </thead>
                <tbody>
                  {isReseller ? [
                    ["Starter", "Up to ₹25 Lakh / month", "15% recurring", "White-label dashboard, email support"],
                    ["Silver", "₹25L – ₹1 Crore / month", "20% recurring", "Co-branded sales kit + marketing co-budget"],
                    ["Gold", "₹1Cr – ₹5 Crore / month", "25% recurring", "Co-sell support + dedicated partner manager"],
                    ["Platinum", "Above ₹5 Crore / month", "30% + bonuses", "Custom contracts + quarterly performance bonuses"],
                  ].map(([tier, gmv, rate, benefit], i) => (
                    <tr key={i}>
                      <td><span className="pp-table-badge">{tier}</span></td>
                      <td>{gmv}</td>
                      <td className="pp-table-highlight">{rate}</td>
                      <td style={{ color: "rgba(255,255,255,0.45)" }}>{benefit}</td>
                    </tr>
                  )) : [
                    ["Starter", "Up to ₹50 Lakh / month", "Standard rates", "Full API access, sandbox, email support"],
                    ["Growth", "₹50L – ₹5 Crore / month", "Up to 5% lower MDR", "Dedicated integration engineer + Slack channel"],
                    ["Scale", "₹5Cr – ₹25 Crore / month", "Up to 12% lower MDR", "Custom SLA (99.9% uptime) + priority support"],
                    ["Enterprise", "Above ₹25 Crore / month", "Custom negotiated rates", "Revenue share + custom contract + account manager"],
                  ].map(([tier, vol, rate, perks], i) => (
                    <tr key={i}>
                      <td><span className="pp-table-badge">{tier}</span></td>
                      <td>{vol}</td>
                      <td className="pp-table-highlight">{rate}</td>
                      <td style={{ color: "rgba(255,255,255,0.45)" }}>{perks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 14, fontSize: 12.5, color: "rgba(255,255,255,0.3)" }}>
              * Commission tiers upgrade automatically as your monthly GMV grows. All rates are exclusive of applicable taxes. Contact us for enterprise pricing.
            </p>
          </div>
        </section>

        {/* ── FULL BENEFITS LIST ── */}
        <section className="pp-sec" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="pp-sec-badge">Everything Included</div>
                <h2 className="pp-sec-title">No Hidden Terms. No Surprises.</h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 28 }}>
                  {isReseller
                    ? "Every reseller partner gets the full suite from day one — branding, support, compliance, and earnings tracking all included."
                    : "Every service provider gets full API access, documentation, sandbox, and dedicated engineering support from day one."}
                </p>
                <div>
                  {(isReseller ? resellerBenefits : serviceProviderBenefits).map((b, i) => (
                    <div key={i} className="pp-benefit">
                      <CheckCircle2 size={17} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1">
                <div className="pp-api-explorer">
                  <div className="pp-api-explorer-header">
                    <div className="pp-dot" style={{ background: "#FF5F56" }} />
                    <div className="pp-dot" style={{ background: "#FFBD2E" }} />
                    <div className="pp-dot" style={{ background: "#27C93F" }} />
                    <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>
                      {isReseller ? "partner-dashboard.json" : "api-credentials.json"}
                    </span>
                  </div>
                  <div className="pp-code">
                    <span className="pp-code-dim">{"{"}</span><br />
                    &nbsp;&nbsp;<span className="pp-code-key">"partner_id"</span><span className="pp-code-dim">:</span> <span className="pp-code-str">"ptn_xK92Mj"</span><span className="pp-code-dim">,</span><br />
                    &nbsp;&nbsp;<span className="pp-code-key">"type"</span><span className="pp-code-dim">:</span> <span className="pp-code-lime">"{isReseller ? "reseller" : "service_provider"}"</span><span className="pp-code-dim">,</span><br />
                    &nbsp;&nbsp;<span className="pp-code-key">"tier"</span><span className="pp-code-dim">:</span> <span className="pp-code-str">"{isReseller ? "gold" : "growth"}"</span><span className="pp-code-dim">,</span><br />
                    {isReseller ? (
                      <>
                        &nbsp;&nbsp;<span className="pp-code-key">"commission_rate"</span><span className="pp-code-dim">:</span> <span className="pp-code-green">"25%"</span><span className="pp-code-dim">,</span><br />
                        &nbsp;&nbsp;<span className="pp-code-key">"merchants_active"</span><span className="pp-code-dim">:</span> <span className="pp-code-green">38</span><span className="pp-code-dim">,</span><br />
                        &nbsp;&nbsp;<span className="pp-code-key">"total_earned"</span><span className="pp-code-dim">:</span> <span className="pp-code-green">"₹4,28,500"</span><br />
                      </>
                    ) : (
                      <>
                        &nbsp;&nbsp;<span className="pp-code-key">"api_key"</span><span className="pp-code-dim">:</span> <span className="pp-code-str">"rzp_live_xK92..."</span><span className="pp-code-dim">,</span><br />
                        &nbsp;&nbsp;<span className="pp-code-key">"monthly_volume"</span><span className="pp-code-dim">:</span> <span className="pp-code-green">"₹2.4 Cr"</span><span className="pp-code-dim">,</span><br />
                        &nbsp;&nbsp;<span className="pp-code-key">"endpoints_active"</span><span className="pp-code-dim">:</span> <span className="pp-code-green">7</span><br />
                      </>
                    )}
                    <span className="pp-code-dim">{"}"}</span>
                  </div>
                  <div className="pp-api-status">
                    <div style={{ fontSize: 12, color: "#c8f000", fontWeight: 700, marginBottom: 3 }}>✓ Partner Approved — Active</div>
                    <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.4)" }}>
                      {isReseller
                        ? "Dashboard access granted · White-label branding active"
                        : "API credentials issued · Sandbox + live environment ready"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="pp-sec" style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="pp-sec-badge" style={{ display: "inline-block" }}>Partner Stories</div>
              <h2 className="pp-sec-title mt-2">Trusted by 500+ Partners Across India</h2>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.42)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.7 }}>
                From fintech startups to enterprise platforms — our partners earn more and build faster with Payzon.
              </p>
            </div>
            <div className="row g-4">
              {testimonials.map((t, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="pp-test-card">
                    <div className="pp-test-type">{t.type}</div>
                    <div className="pp-stars">
                      {Array(5).fill(0).map((_, j) => <Star key={j} size={13} fill="#c8f000" color="#c8f000" />)}
                    </div>
                    <p className="pp-test-quote">"{t.quote}"</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div className="pp-test-avatar" style={{ background: `${t.color}20`, color: t.color }}>{t.avatar}</div>
                      <div>
                        <div className="pp-test-name">{t.name}</div>
                        <div className="pp-test-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <PartnerFAQ isReseller={isReseller} />

        {/* ── CTA ── */}
        <div className="container">
          <div className="pp-cta">
            <h2 className="pp-cta-title">
              {isReseller
                ? "Start Earning Recurring Revenue Today"
                : "Build on India's Most Reliable Payment API"}
            </h2>
            <p className="pp-cta-desc">
              {isReseller
                ? "Join 500+ reseller partners already earning recurring commissions by bringing merchants to Payzon. Apply today — approvals in 48 hours."
                : "Integrate Payzon's complete payment suite into your platform and start processing live transactions within days. Apply for SP access today."}
            </p>
            <div className="pp-cta-btns">
              <Link href="/contact" className="pp-btn-gold" style={NAV_FONT}>
                {isReseller ? "Apply as Reseller" : "Apply as Service Provider"} <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="pp-btn-outline" style={NAV_FONT}>
                Book a Partner Call
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

/* ─────────────────────── FAQ ─────────────────────── */

function PartnerFAQ({ isReseller }: { isReseller: boolean }) {
  const [open, setOpen] = useState<number | null>(null);

  const rFaqs = [
    {
      q: "How long does reseller approval take?",
      a: "Most applications are reviewed within 48 business hours. Once approved, you receive your white-label credentials, onboarding call invite, and partner sales kit on the same day."
    },
    {
      q: "Do I need a technical background to become a reseller?",
      a: "Not at all. Resellers are business and sales partners. Payzon handles all merchant onboarding, technical support, and compliance — you bring the clients and we handle everything behind the scenes."
    },
    {
      q: "How and when are commissions paid out?",
      a: "Commissions are calculated daily based on the transactions your merchants process and are paid out monthly directly to your registered bank account. You can track every rupee in real time via your partner earnings dashboard."
    },
    {
      q: "Can I fully white-label the Payzon merchant dashboard?",
      a: "Yes. Gold and Platinum tier resellers get full white-label access — your logo, brand colors, and custom domain. Starter and Silver tiers receive co-branded materials and a branded subdomain."
    },
    {
      q: "Is there a minimum number of merchants I need to bring?",
      a: "There is no minimum. You grow at your own pace. Commission tiers upgrade automatically as your portfolio's monthly GMV increases — no manual requests needed."
    },
  ];

  const spFaqs = [
    {
      q: "What payment methods and APIs are available?",
      a: "Service Providers get access to the full Payzon API suite: UPI, Credit/Debit Cards, Net Banking, Wallets, Payment Links, Hosted Checkout, Pay-Out, QR Code, Virtual Accounts, Escrow, and Reconciliation APIs. All endpoints come with Postman collections, code samples in 5 languages, and a detailed API reference portal."
    },
    {
      q: "How quickly can we go live after signing up?",
      a: "Most service providers complete sandbox integration in 3–5 days and go live within 7–10 business days with the support of a dedicated integration engineer. Complex multi-tenant or custom escrow implementations may take 2–3 weeks."
    },
    {
      q: "How does the revenue sharing work for referred merchants?",
      a: "When merchants on your platform sign up for their own Payzon account (via a referral link or embed flow), you earn a percentage of their transaction fees for the lifetime of their account — no expiry, no caps."
    },
    {
      q: "Does Payzon support multi-tenant SaaS architectures?",
      a: "Yes. Our API is purpose-built for multi-tenant use. Each of your client organisations can have isolated sub-accounts, separate settlement bank accounts, independent reporting dashboards, and scoped API access."
    },
    {
      q: "What uptime and SLA can we commit to our own clients?",
      a: "Scale and Enterprise tier service providers receive a custom SLA agreement with a 99.9% uptime guarantee backed by financial penalties for breach. All infrastructure runs on a multi-region, redundant setup."
    },
  ];

  const faqs = isReseller ? rFaqs : spFaqs;

  return (
    <section className="pp-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="pp-sec-badge">FAQ</div>
            <h2 className="pp-sec-title">Common Questions</h2>
            <p className="pp-sec-desc" style={{ marginBottom: 0 }}>
              Can't find your answer?{" "}
              <Link href="/contact" style={{ color: "#c8f000", textDecoration: "none", fontWeight: 600 }}>
                Chat with our partner team →
              </Link>
            </p>
          </div>
          <div className="col-lg-7 offset-lg-1">
            {faqs.map((f, i) => (
              <div key={i} className="pp-faq-item" onClick={() => setOpen(open === i ? null : i)}>
                <div className="pp-faq-q">
                  <div className="pp-faq-q-text">{f.q}</div>
                  <ChevronDown size={18} className={`pp-faq-chevron ${open === i ? "open" : ""}`} />
                </div>
                {open === i && <p className="pp-faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}