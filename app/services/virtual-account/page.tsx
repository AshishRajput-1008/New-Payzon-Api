import ServicePageLayout, { ServiceTheme, ServiceWhatIs, ServiceUseCase } from "@/components/ServicePageLayout";

const theme: ServiceTheme = {
  primary:      "#A855F7",
  primaryLight: "#D8B4FE",
  primaryMuted: "rgba(168,85,247,0.12)",
  heroGlow:     "rgba(168,85,247,0.28)",
  badgeText:    "#D8B4FE",
  badgeBg:      "rgba(168,85,247,0.12)",
  badgeBorder:  "rgba(168,85,247,0.35)",
  ctaGradient:  "linear-gradient(135deg,rgba(59,7,100,0.75) 0%,rgba(6,3,15,0.92) 100%)",
};

const HeroIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="10" stroke="#D8B4FE" strokeWidth="1.6" strokeOpacity="0.5" />
    <circle cx="13" cy="13" r="6.5" stroke="#A855F7" strokeWidth="1.2" strokeOpacity="0.4" />
    <rect x="9" y="8.5" width="8" height="9" rx="1.5" fill="rgba(168,85,247,0.12)" stroke="#D8B4FE" strokeWidth="1.4" />
    <path d="M11 12 L15 12 M11 14 L15 14 M11 16 L13.5 16" stroke="#D8B4FE" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.8" />
  </svg>
);

const R1 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><path d="M2 7 L16 7" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/></svg>;
const R2 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2 L16 9 L9 16 M2 9 L16 9" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const R3 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><rect x="11" y="2" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><rect x="2" y="11" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><rect x="11" y="11" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/></svg>;

const I = (d: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d={d} stroke="#D8B4FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const whatIs: ServiceWhatIs = {
  heading: `What is a <em>Virtual Account?</em>`,
  body: `A Virtual Account is a unique bank account number generated programmatically for a specific customer, order, or invoice. It has a genuine IFSC code and account number — but lives inside Payzon's infrastructure and routes incoming funds directly to your settlement account. When a payment arrives, Payzon instantly matches it to the right entity and fires a webhook. No manual checking. No UTR hunting. No reconciliation spreadsheets.`,
  highlights: [
    "Real IFSC and account number — payer needs no special instructions",
    "Payments arrive pre-tagged with customer or order ID",
    "Auto-reconciliation in milliseconds — no cron jobs needed",
    "NEFT, RTGS, IMPS, and UPI accepted from any Indian bank",
    "Set expiry dates for time-bound invoices or events",
    "Native ERP sync — Tally, Zoho, SAP, QuickBooks via webhook",
  ],
};

const useCases: ServiceUseCase[] = [
  {
    icon: I("M3 5 H19 M3 9 H19 M3 13 H13 M3 17 H10"),
    title: "B2B Invoice Collections",
    description: "One virtual account per invoice. When the buyer transfers the exact or partial amount, it auto-matches — no UTR cross-referencing for your finance team.",
  },
  {
    icon: I("M11 3 L13.5 8.5 L19 9.3 L15 13.2 L15.9 18.7 L11 16 L6.1 18.7 L7 13.2 L3 9.3 L8.5 8.5 Z"),
    title: "Loan Repayment Collections",
    description: "NBFCs and lending platforms assign one virtual account per loan. EMI payments self-reconcile, reducing collections overhead to zero.",
  },
  {
    icon: I("M4 11 L8 15 L18 5"),
    title: "Subscription & Membership Fees",
    description: "Each subscriber gets a dedicated account. Monthly renewals arrive pre-tagged — CRM and billing systems update with no human intervention.",
  },
  {
    icon: I("M5 3 H17 C18.1 3 19 3.9 19 5 V17 C19 18.1 18.1 19 17 19 H5 C3.9 19 3 18.1 3 17 V5 C3 3.9 3.9 3 5 3Z M8 11 L10 13 L14 9"),
    title: "Real Estate & Rent Collection",
    description: "Assign virtual accounts to tenants or unit numbers. Rent transfers are auto-reconciled to properties and landlords get instant digital receipts.",
  },
  {
    icon: I("M3 7 L11 3 L19 7 L11 11 Z M3 7 L3 15 L11 19 L19 15 L19 7"),
    title: "Marketplace Seller Wallets",
    description: "Each seller has an assigned virtual account. Customer payments land pre-tagged, ready for automated settlement minus platform commission.",
  },
  {
    icon: I("M6 3 H16 C17.1 3 18 3.9 18 5 V19 L11 16 L4 19 V5 C4 3.9 4.9 3 6 3Z"),
    title: "School & Institution Fees",
    description: "Generate unique accounts per student or roll number. Fee payments auto-tag to students, with automatic receipt generation and ERP update.",
  },
  {
    icon: I("M11 3 C11 3 5 6 5 12 C5 15.3 7.7 18 11 18 C14.3 18 17 15.3 17 12 C17 6 11 3 11 3Z"),
    title: "Tax & Compliance Deposits",
    description: "Assign dedicated accounts for GST, TDS, or advance tax collections. Every transfer is auto-matched and timestamped for filing records.",
  },
  {
    icon: I("M3 11 C3 6.6 6.6 3 11 3 S19 6.6 19 11 M11 11 L11 7 M11 11 L14 13"),
    title: "Crowdfunding & Pre-Orders",
    description: "Issue unique virtual accounts to each backer or pre-order. Track contribution targets in real time and auto-close when goals are reached.",
  },
];

export default function VirtualAccountPage() {
  return (
    <ServicePageLayout
      badge="VIRTUAL ACCOUNT"
      title="Smart Account"
      subtitle="Auto-Reconcile at Scale"
      description="Assign a unique virtual bank account to every customer, order, or invoice. Payments arrive pre-tagged and auto-matched — eliminating manual reconciliation work entirely."
      heroImageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop"
      heroImageAlt="Financial dashboard and analytics reconciliation"
      heroIcon={<HeroIcon />}
      theme={theme}
      whatIs={whatIs}
      useCases={useCases}
      stats={[
        { value: "100%",      label: "Auto-Matched" },
        { value: "∞",         label: "Accounts/sec" },
        { value: "All Banks", label: "Compatible" },
        { value: "Real IFSC", label: "Numbers" },
      ]}
      features={[
        { title: "Unique Account per Entity",    description: "Generate dedicated virtual accounts per customer, merchant, or order. Incoming funds are auto-tagged and matched without any manual step." },
        { title: "Real Bank Account Numbers",    description: "Each virtual account has a genuine IFSC code and account number. Customers pay via NEFT, RTGS, IMPS, or UPI — no special process." },
        { title: "Instant Auto-Reconciliation",  description: "Every incoming payment is matched to its virtual account in milliseconds. Your system receives a webhook with full payer details." },
        { title: "Unlimited Account Generation", description: "Create thousands of virtual accounts per second via API. Scale to millions with no infrastructure overhead or per-account fees." },
        { title: "Expiry & Lifecycle Control",   description: "Set custom expiry dates or deactivate accounts on demand. Perfect for time-bound invoices, event tickets, and subscription cycles." },
        { title: "ERP & Accounting Integration", description: "Native webhooks sync with Tally, Zoho, SAP, and QuickBooks. Export statements in any format for clean financial reporting." },
      ]}
      benefits={[
        "Eliminate 100% of manual payment matching and reconciliation overhead",
        "Each virtual account is a dedicated payment identifier — no mismatch, no confusion",
        "Works with all Indian banks — no special transfer method required from payers",
        "Detailed payer information captured with every single incoming transfer",
        "Supports partial and multiple payments to a single virtual account",
        "Immutable transaction logs for audit readiness and compliance reporting",
      ]}
      ctaTitle="Eliminate Reconciliation Headaches"
      ctaDescription="Businesses processing hundreds of incoming payments daily trust Payzon Virtual Accounts to handle reconciliation automatically — zero manual work."
      ctaHref="/contact"
      relatedServices={[
        { title: "Pay-In",  href: "/services/pay-in",  description: "Accept customer payments via any channel — cards, UPI, wallets, bank transfers.", icon: <R1 /> },
        { title: "Pay-Out", href: "/services/pay-out", description: "Disburse collected funds to vendors or partners on demand or in bulk.",             icon: <R2 /> },
        { title: "QR Code", href: "/services/qr-code", description: "Pair virtual accounts with dynamic QR for a complete checkout-to-reconcile flow.", icon: <R3 /> },
      ]}
    />
  );
}