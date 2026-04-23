import ServicePageLayout, { ServiceTheme, ServiceWhatIs, ServiceUseCase } from "@/components/ServicePageLayout";
import qr from "@/public/assets/images/QR.png";

const theme: ServiceTheme = {
  primary:      "#F59E0B",
  primaryLight: "#FCD34D",
  primaryMuted: "rgba(245,158,11,0.12)",
  heroGlow:     "rgba(245,158,11,0.24)",
  badgeText:    "#FCD34D",
  badgeBg:      "rgba(245,158,11,0.12)",
  badgeBorder:  "rgba(245,158,11,0.32)",
  ctaGradient:  "linear-gradient(135deg,rgba(92,56,0,0.7) 0%,rgba(6,3,15,0.9) 100%)",
};

const HeroIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="2" y="2" width="9" height="9" rx="2" stroke="#FCD34D" strokeWidth="1.6" />
    <rect x="5" y="5" width="3" height="3" fill="#F59E0B" fillOpacity="0.8" />
    <rect x="15" y="2" width="9" height="9" rx="2" stroke="#FCD34D" strokeWidth="1.6" />
    <rect x="18" y="5" width="3" height="3" fill="#F59E0B" fillOpacity="0.8" />
    <rect x="2" y="15" width="9" height="9" rx="2" stroke="#FCD34D" strokeWidth="1.6" />
    <rect x="5" y="18" width="3" height="3" fill="#F59E0B" fillOpacity="0.8" />
    <rect x="15" y="15" width="3" height="3" rx="0.5" fill="#F59E0B" fillOpacity="0.7" />
    <rect x="20" y="15" width="3" height="3" rx="0.5" fill="#F59E0B" fillOpacity="0.5" />
    <rect x="15" y="20" width="3" height="3" rx="0.5" fill="#F59E0B" fillOpacity="0.5" />
    <rect x="20" y="20" width="3" height="3" rx="0.5" fill="#F59E0B" fillOpacity="0.7" />
  </svg>
);

const R1 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><path d="M2 7 L16 7" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/></svg>;
const R2 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2 L16 9 L9 16 M2 9 L16 9" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const R3 = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="5" width="14" height="11" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/><path d="M5 5 V4 C5 3 6.5 2 9 2 C11.5 2 13 3 13 4 V5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4"/></svg>;

const I = (d: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d={d} stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const whatIs: ServiceWhatIs = {
  heading: `What is a <em>QR Code Payment?</em>`,
  body: `A QR Code payment is a contactless transaction where a customer scans a unique code with their phone camera or UPI app to instantly send money. Payzon generates both dynamic QR codes — each tied to a specific amount — and static merchant QR codes that work permanently. No POS terminal, no card swipe, no cash handling. Just display or print the code, and the customer's UPI app completes the payment in under three seconds.`,
  highlights: [
    "Dynamic QR: unique per transaction, preset amount, auto-expiry",
    "Static QR: permanent merchant code for retail counters & kiosks",
    "Compatible with every UPI app — GPay, PhonePe, Paytm, BHIM",
    "Payment confirmed in under 3 seconds via real-time webhook",
    "Export as PNG, SVG, or PDF — print-ready at any resolution",
    "Embed logo and brand colors in every QR for consistent identity",
  ],
};

const useCases: ServiceUseCase[] = [
  {
    icon: I("M3 5 H19 M3 9 H19 M3 13 H13 M3 17 H10"),
    title: "Retail & Brick-and-Mortar",
    description: "Replace the cash counter with a printed QR. Customers pay instantly, confirmation hits the cashier screen, and your books update automatically.",
  },
  {
    icon: I("M11 3 L13.5 8.5 L19 9.3 L15 13.2 L15.9 18.7 L11 16 L6.1 18.7 L7 13.2 L3 9.3 L8.5 8.5 Z"),
    title: "Restaurants & Cafés",
    description: "Print QR codes on table cards or menus. Guests scan, pay from their seat, and walk out — zero wait for the bill, zero card machine needed.",
  },
  {
    icon: I("M4 11 L8 15 L18 5"),
    title: "Digital Invoicing",
    description: "Embed a dynamic QR directly in PDF invoices. Clients scan and pay the exact amount in one tap — no NEFT reference copy-paste required.",
  },
  {
    icon: I("M3 7 L11 3 L19 7 L11 11 Z M3 7 L3 15 L11 19 L19 15 L19 7"),
    title: "Events & Exhibitions",
    description: "Display QR codes at stalls, ticket booths, and donation drives. Accept UPI from anyone with a smartphone — no hardware required.",
  },
  {
    icon: I("M11 3 C11 3 5 6 5 12 C5 15.3 7.7 18 11 18 C14.3 18 17 15.3 17 12 C17 6 11 3 11 3Z"),
    title: "Service Professionals",
    description: "Plumbers, electricians, tutors, freelancers — carry your QR on a card or your phone and get paid on the spot, no bank details shared.",
  },
  {
    icon: I("M5 3 H17 C18.1 3 19 3.9 19 5 V17 C19 18.1 18.1 19 17 19 H5 C3.9 19 3 18.1 3 17 V5 C3 3.9 3.9 3 5 3Z M8 11 L10 13 L14 9"),
    title: "NGOs & Donation Drives",
    description: "Generate branded donation QR codes for hoardings, leaflets, or websites. Every donation is reconciled and auto-receipted.",
  },
  {
    icon: I("M6 3 H16 C17.1 3 18 3.9 18 5 V19 L11 16 L4 19 V5 C4 3.9 4.9 3 6 3Z"),
    title: "Pharmacies & Healthcare",
    description: "Accept UPI at the billing counter with zero setup cost. Instant confirmation and automatic daily settlement to your account.",
  },
  {
    icon: I("M3 11 C3 6.6 6.6 3 11 3 S19 6.6 19 11 M11 11 L11 7 M11 11 L14 13"),
    title: "Parking & Utilities",
    description: "Display QR codes at parking gates or utility kiosks. Customers scan, pay the exact amount, and barrier lifts — no attendant needed.",
  },
];

export default function QrCodePage() {
  return (
    <ServicePageLayout
      badge="QR CODE"
      title="Payments via"
      subtitle="Scan. Pay. Done."
      description="Generate dynamic, branded QR codes that work with every UPI app in India. From retail counters to digital invoices — turn any surface into a payment terminal in seconds."
      heroImageSrc={qr.src}
      heroImageAlt="Customer scanning QR code at retail store"
      heroIcon={<HeroIcon />}
      theme={theme}
      whatIs={whatIs}
      useCases={useCases}
      stats={[
        { value: "<3s",     label: "Payment Confirm" },
        { value: "All UPI", label: "Apps Supported" },
        { value: "Dynamic", label: "Per Transaction" },
        { value: "Branded", label: "Custom Design" },
      ]}
      features={[
        { title: "Dynamic QR Generation",  description: "Unique QR per transaction with preset amounts, auto-expiry, and custom metadata — generated with a single API call." },
        { title: "Static Merchant QR",     description: "Permanent branded QR code for your business. Customers enter the amount — ideal for retail counters and kiosks." },
        { title: "Universal UPI Support",  description: "GPay, PhonePe, Paytm, BHIM, all bank apps — zero friction for every customer, no special setup required." },
        { title: "Instant Confirmation",   description: "Payments confirmed in under 3 seconds. Real-time webhook fires the moment a scan is successfully completed." },
        { title: "Branded QR Design",      description: "Embed your logo, brand colors, and custom styling into every QR code for a consistent payment experience." },
        { title: "Print & Digital Ready",  description: "Export QR codes as PNG, SVG, or PDF. Print-ready at any resolution for receipts, posters, or packaging." },
      ]}
      benefits={[
        "Works for online and offline payments from a single unified integration",
        "Dynamic QR codes auto-expire — zero risk of accidental duplicate charges",
        "No app installation required for payers — any camera phone works instantly",
        "Generate thousands of unique QR codes per minute via the batch API",
        "Full payment analytics: scan rate, conversion rate, average order value per QR",
        "Supports tip, convenience fee, or surcharge addition at scan time",
      ]}
      ctaTitle="Activate QR Payments in Minutes"
      ctaDescription="Replace your manual payment process with frictionless QR-based checkout that customers love and your team can manage effortlessly."
      ctaHref="/contact"
      relatedServices={[
        { title: "Pay-In",          href: "/services/pay-in",          description: "Full-spectrum card, UPI, and bank transfer acceptance via one integration.",                icon: <R1 /> },
        { title: "Pay-Out",         href: "/services/pay-out",         description: "Disburse funds in bulk or individually to any bank account or wallet.",                     icon: <R2 /> },
        { title: "Virtual Account", href: "/services/virtual-account", description: "Pair QR with virtual accounts for a complete checkout-to-reconcile flow.",                 icon: <R3 /> },
      ]}
    />
  );
}