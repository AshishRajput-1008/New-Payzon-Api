import ServicePageLayout, { ServiceTheme, ServiceWhatIs, ServiceUseCase } from "@/components/ServicePageLayout";

const theme: ServiceTheme = {
  primary:      "#10B981",
  primaryLight: "#6EE7B7",
  primaryMuted: "rgba(16,185,129,0.12)",
  heroGlow:     "rgba(16,185,129,0.26)",
  badgeText:    "#6EE7B7",
  badgeBg:      "rgba(16,185,129,0.12)",
  badgeBorder:  "rgba(16,185,129,0.32)",
  ctaGradient:  "linear-gradient(135deg,rgba(5,78,48,0.7) 0%,rgba(6,3,15,0.9) 100%)",
};

const HeroIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="2" y="7" width="22" height="15" rx="3" stroke="#6EE7B7" strokeWidth="1.8" />
    <rect x="2" y="12" width="22" height="5" fill="#10B981" fillOpacity="0.3" />
    <rect x="5" y="17" width="7" height="2" rx="1" fill="#6EE7B7" fillOpacity="0.7" />
    <circle cx="19" cy="9" r="4" fill="#06030f" stroke="#10B981" strokeWidth="1.5" />
    <path d="M19 7 L19 11 M21 9 L19 11 L17 9" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const R1 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><path d="M2 7 L16 7" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/></svg>;
const R2 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><rect x="11" y="2" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><rect x="2" y="11" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><rect x="11" y="11" width="5" height="5" rx="1" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/></svg>;
const R3 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="5" width="14" height="11" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><path d="M5 5 V4 C5 3 6.5 2 9 2 C11.5 2 13 3 13 4 V5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/></svg>;

const I = (d: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d={d} stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const whatIs: ServiceWhatIs = {
  heading: `What is <em>Pay-Out?</em>`,
  body: `Pay-Out is how your business pushes money out to other parties. Whether paying a freelancer, reimbursing a customer, running payroll for hundreds of employees, or settling with marketplace sellers, Payzon Pay-Out automates every outgoing transfer. With a single API call you can move funds to any Indian bank account, UPI ID, or digital wallet instantly — at any hour, on any day of the year.`,
  highlights: [
    "NEFT, RTGS, IMPS, and UPI — right rail chosen automatically",
    "Bulk API handles 10,000+ recipients in one request",
    "Maker-checker dual approval for high-value payouts",
    "Beneficiary validation before funds leave — zero bad transfers",
    "Scheduled jobs for recurring payroll and vendor settlements",
    "Webhooks + CSV/XLSX/JSON reconciliation exports",
  ],
};

const useCases: ServiceUseCase[] = [
  {
    icon: I("M4 11 L8 15 L18 5"),
    title: "Payroll & HR Platforms",
    description: "Disburse salaries to thousands of employees on payday in one batch. Supports multiple banks, departments, and pay schedules — fully automated.",
  },
  {
    icon: I("M3 5 H19 M3 9 H13 M3 13 H10 M3 17 H15"),
    title: "Gig Economy & Freelance Apps",
    description: "Pay gig workers or freelancers instantly after task completion. Instant IMPS transfers 24/7, including weekends and public holidays.",
  },
  {
    icon: I("M11 3 L13.5 8.5 L19 9.3 L15 13.2 L15.9 18.7 L11 16 L6.1 18.7 L7 13.2 L3 9.3 L8.5 8.5 Z"),
    title: "Marketplaces & Aggregators",
    description: "Settle with sellers after deducting your platform fee — automatically triggered when order status changes to delivered.",
  },
  {
    icon: I("M5 3 H17 C18.1 3 19 3.9 19 5 V17 C19 18.1 18.1 19 17 19 H5 C3.9 19 3 18.1 3 17 V5 C3 3.9 3.9 3 5 3Z M7 11 L10 14 L15 8"),
    title: "Insurance Claim Settlements",
    description: "Instantly credit approved claims or policy refunds to the insured's bank account, reducing settlement time from days to seconds.",
  },
  {
    icon: I("M11 3 C11 3 5 6 5 12 C5 15.3 7.7 18 11 18 C14.3 18 17 15.3 17 12 C17 6 11 3 11 3Z"),
    title: "Cashback & Loyalty Rewards",
    description: "Credit cashback or referral bonuses as real cash directly into customer bank accounts or UPI IDs to drive repeat engagement.",
  },
  {
    icon: I("M3 7 L11 3 L19 7 L11 11 Z M3 7 L3 15 L11 19 L19 15 L19 7"),
    title: "Vendor & Supplier Payments",
    description: "Automated vendor payment runs on a schedule. Approve in bulk via dashboard or trigger from your ERP with a full audit trail.",
  },
  {
    icon: I("M11 3 L13.5 8.5 L19 9.3 L15 13.2 L15.9 18.7 L11 16 L6.1 18.7 L7 13.2 L3 9.3 L8.5 8.5 Z"),
    title: "Investment & Wealth Platforms",
    description: "Process redemptions, dividends, and SIP returns to investor accounts within seconds of approval — with full regulatory traceability.",
  },
  {
    icon: I("M6 3 H16 C17.1 3 18 3.9 18 5 V19 L11 16 L4 19 V5 C4 3.9 4.9 3 6 3Z"),
    title: "Government & NGO Disbursements",
    description: "Distribute scholarship amounts, relief funds, or grant payments to beneficiaries at scale — with built-in deduplication and audit logs.",
  },
];

export default function PayOutPage() {
  return (
    <ServicePageLayout
      badge="PAY-OUT"
      title="Disburse Funds"
      subtitle="Instantly & Reliably"
      description="Send money to thousands of recipients simultaneously — vendors, employees, merchants, customers — through any bank, UPI, or wallet. Real-time, at any scale."
      heroImageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop"
      heroImageAlt="Business bank transfer and payout"
      heroIcon={<HeroIcon />}
      theme={theme}
      whatIs={whatIs}
      useCases={useCases}
      stats={[
        { value: "UPI",  label: "Transfers / Batch" },
        { value: "IMPS", label: "IMPS Instant" },
        { value: "NEFT", label: "Fast Settlement" },
        { value: "RTGS", label: "Success Rate" },
      ]}
      features={[
        { title: "Bulk Disbursement",      description: "Upload CSV or call our bulk API to pay 10,000+ recipients in a single request with millisecond processing per transfer." },
        { title: "Any Destination",        description: "Pay to any Indian bank via NEFT/RTGS/IMPS, any UPI handle, Paytm, PhonePe, Amazon Pay, and all major wallets." },
        { title: "Scheduled Payouts",      description: "Schedule recurring disbursements — weekly payroll, monthly vendor payments — with automatic execution and failure alerts." },
        { title: "Escrow & Hold",          description: "Hold funds in secure escrow and release on your schedule or based on configurable triggers and approval workflows." },
        { title: "Real-Time Status",       description: "Track every payout live via webhook events and our monitoring dashboard with full status history and logs." },
        { title: "Maker-Checker Workflow", description: "Built-in dual-approval workflows with role-based access control for high-value disbursements and compliance." },
      ]}
      benefits={[
        "Instant IMPS payouts 24/7, 365 days — including weekends and all public holidays",
        "Batch API supports up to 10,000 transfers per call with smart queue management",
        "Beneficiary validation before fund transfer prevents failed transactions",
        "Automated retry with exponential backoff recovers failed transfers silently",
        "Immutable audit trail with detailed logs for regulatory compliance",
        "Real-time balance alerts to prevent insufficient fund errors mid-batch",
      ]}
      ctaTitle="Automate Your Disbursements"
      ctaDescription="From one-time vendor payments to high-volume payroll — Payzon Pay-Out scales with your business without the operational overhead."
      ctaHref="/contact"
      relatedServices={[
        { title: "Pay-In",          href: "/services/pay-in",          description: "Accept customer payments via cards, UPI, wallets, and net banking with one integration.", icon: <R1 /> },
        { title: "QR Code",         href: "/services/qr-code",         description: "Generate dynamic QR codes for instant in-person and online payment collection.",          icon: <R2 /> },
        { title: "Virtual Account", href: "/services/virtual-account", description: "Assign unique virtual bank accounts for seamless automated reconciliation.",              icon: <R3 /> },
      ]}
    />
  );
}