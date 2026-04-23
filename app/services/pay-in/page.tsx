import ServicePageLayout, { ServiceTheme, ServiceWhatIs, ServiceUseCase } from "@/components/ServicePageLayout";

const theme: ServiceTheme = {
  primary:      "#3B82F6",
  primaryLight: "#93C5FD",
  primaryMuted: "rgba(59,130,246,0.12)",
  heroGlow:     "rgba(59,130,246,0.28)",
  badgeText:    "#93C5FD",
  badgeBg:      "rgba(59,130,246,0.12)",
  badgeBorder:  "rgba(59,130,246,0.35)",
  ctaGradient:  "linear-gradient(135deg,rgba(30,58,138,0.7) 0%,rgba(6,3,15,0.9) 100%)",
};

const HeroIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="2" y="7" width="22" height="15" rx="3" stroke="#93C5FD" strokeWidth="1.8" />
    <rect x="2" y="12" width="22" height="5" fill="#3B82F6" fillOpacity="0.3" />
    <rect x="5" y="17" width="7" height="2" rx="1" fill="#93C5FD" fillOpacity="0.7" />
    <circle cx="19" cy="9" r="4" fill="#06030f" stroke="#3B82F6" strokeWidth="1.5" />
    <path d="M19 7 L19 11 M17 9 L21 9" stroke="#3B82F6" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const R1 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2 L16 9 L9 16 M2 9 L16 9" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const R2 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><rect x="11" y="2" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><rect x="2" y="11" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><rect x="11" y="11" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/></svg>;
const R3 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="5" width="14" height="11" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><path d="M5 5 V4 C5 3 6.5 2 9 2 C11.5 2 13 3 13 4 V5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/></svg>;

const I = (d: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d={d} stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const whatIs: ServiceWhatIs = {
  heading: `What is <em>Pay-In?</em>`,
  body: `Pay-In is the process of collecting money from your customers and routing it securely into your business account. Payzon's Pay-In solution unifies every major Indian payment channel — cards, UPI, net banking, wallets, and bank transfers — behind a single API, so you never need to integrate with multiple providers again. Whether you sell online, via mobile app, or on a SaaS dashboard, Pay-In handles the full payment lifecycle from checkout to confirmed settlement.`,
  highlights: [
    "Single API covering all payment methods used in India",
    "Real-time success/failure webhooks keep orders in sync",
    "Intelligent routing picks the best processor automatically",
    "PCI DSS Level 1 — Payzon holds full compliance for you",
    "One-time, subscriptions, and split-payment workflows",
    "T+0 / T+1 settlement directly to your bank with full audit trail",
  ],
};

const useCases: ServiceUseCase[] = [
  {
    icon: I("M3 7 L11 3 L19 7 L11 11 Z M3 7 L3 15 L11 19 L19 15 L19 7"),
    title: "E-Commerce & D2C Brands",
    description: "Accept card, UPI, and wallet payments at checkout. Reduce drop-offs with saved cards, auto-retry, and a fast hosted payment page.",
  },
  {
    icon: I("M11 3 C11 3 5 6 5 12 C5 15.3 7.7 18 11 18 C14.3 18 17 15.3 17 12 C17 6 11 3 11 3Z"),
    title: "SaaS & Subscriptions",
    description: "Charge customers monthly or annually with built-in recurring billing, dunning management, and prorated upgrades via one API.",
  },
  {
    icon: I("M4 11 L8 15 L18 5"),
    title: "Marketplaces & Platforms",
    description: "Collect from buyers, hold securely, and auto-split to sellers with full compliance and escrow capability built in.",
  },
  {
    icon: I("M3 5 H19 M3 9 H19 M3 13 H13 M3 17 H10"),
    title: "EdTech & Online Courses",
    description: "Enable students to pay via UPI or EMI with seamless course-access activation on payment confirmation via webhook.",
  },
  {
    icon: I("M5 3 H17 C18.1 3 19 3.9 19 5 V17 C19 18.1 18.1 19 17 19 H5 C3.9 19 3 18.1 3 17 V5 C3 3.9 3.9 3 5 3Z M8 11 L10 13 L14 9"),
    title: "Insurance & BFSI",
    description: "Collect premiums, loan repayments, and investment contributions with real-time confirmation and regulatory-ready audit logs.",
  },
  {
    icon: I("M11 3 L13.5 8.5 L19 9.3 L15 13.2 L15.9 18.7 L11 16 L6.1 18.7 L7 13.2 L3 9.3 L8.5 8.5 Z"),
    title: "Events & Ticketing",
    description: "Sell tickets with dynamic pricing and surge-protected payment flow. Instant settlement the moment a sale completes.",
  },
  {
    icon: I("M3 11 C3 6.6 6.6 3 11 3 S19 6.6 19 11 M11 11 L11 7 M11 11 L14 13"),
    title: "Travel & Hospitality",
    description: "Accept bookings via cards or UPI, issue instant confirmation, and handle multi-currency with real-time FX rates.",
  },
  {
    icon: I("M6 3 H16 C17.1 3 18 3.9 18 5 V19 L11 16 L4 19 V5 C4 3.9 4.9 3 6 3Z"),
    title: "Healthcare & Clinics",
    description: "Collect consultation fees, lab payments, and insurance co-pays digitally — with zero cash handling and instant digital receipts.",
  },
];

export default function PayInPage() {
  return (
    <ServicePageLayout
      badge="PAY-IN"
      title="Collect Payments"
      subtitle="Seamlessly & Securely"
      description="Accept payments from customers across India through every major channel — cards, UPI, net banking, wallets, and bank transfers. One API. Infinite scale."
      heroImageSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80&auto=format&fit=crop"
      heroImageAlt="Digital payment card transaction"
      heroIcon={<HeroIcon />}
      theme={theme}
      whatIs={whatIs}
      useCases={useCases}
      stats={[
        { value: "99.9%", label: "Uptime SLA" },
        { value: "<2s",   label: "Avg Response" },
        { value: "150+",  label: "Currencies" },
        { value: "24/7",  label: "Support" },
      ]}
      features={[
        { title: "Multi-Method Acceptance",  description: "Credit, debit, UPI, net banking, mobile wallets, NEFT, RTGS, IMPS — all through a single unified API endpoint." },
        { title: "Real-Time Settlement",     description: "T+1 or T+0 settlement to your account with instant webhook notifications for every confirmed payment." },
        { title: "Smart Payment Routing",    description: "Intelligent routing selects the optimal processor automatically to maximise success rates and minimise cost." },
        { title: "ML Fraud Shield",          description: "Multi-layer fraud detection trained on hundreds of millions of transactions blocks threats before they land." },
        { title: "Retry Logic Engine",       description: "Failed transactions are automatically retried on alternate routes, recovering revenue that would otherwise be lost." },
        { title: "PCI DSS Level 1",          description: "Fully certified infrastructure. We handle all compliance burdens so your team can stay focused on building." },
      ]}
      benefits={[
        "99.9% uptime SLA with geo-redundant infrastructure across multiple availability zones",
        "150+ currency support with real-time FX conversion at live interbank rates",
        "Instant webhook delivery with automatic retry on failure — zero missed events",
        "Fully customisable hosted checkout or embeddable SDK — matches your brand exactly",
        "Recurring billing and subscription management built into the same API",
        "Advanced analytics: conversion funnel, payment method split, failure reason breakdown",
      ]}
      ctaTitle="Start Accepting Payments Today"
      ctaDescription="Join thousands of businesses using Payzon Pay-In to collect payments from customers across India and beyond."
      ctaHref="/contact"
      relatedServices={[
        { title: "Pay-Out",         href: "/services/pay-out",         description: "Disburse funds to vendors, partners, and customers instantly through any bank or wallet.", icon: <R1 /> },
        { title: "QR Code",         href: "/services/qr-code",         description: "Generate dynamic QR codes for instant in-person and online payment collection.",           icon: <R2 /> },
        { title: "Virtual Account", href: "/services/virtual-account", description: "Assign unique virtual bank accounts for seamless automated reconciliation.",               icon: <R3 /> },
      ]}
    />
  );
}