"use client";

import Header from "@/components/layout/Header";
import { useState, useRef, useEffect } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const INDUSTRIES = [
  {
    id: "ecommerce",
    label: "E-commerce",
    tag: "RETAIL & ONLINE STORES",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 6h3l2 10h12l2-8H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11" cy="20" r="1.5" fill="currentColor"/>
        <circle cx="19" cy="20" r="1.5" fill="currentColor"/>
      </svg>
    ),
    headline: "Seamless checkout, zero friction — built for modern retail.",
    description: `Today's e-commerce customer expects instant, frictionless payment at every touchpoint. Whether you're running a D2C brand, a multi-vendor marketplace, or a quick-commerce delivery platform, Payzon's unified payment API ensures every transaction flows smoothly — from the first click to the final confirmation. Accept customer payments instantly via Pay In, auto-generate QR codes at checkout, and instantly disburse refunds or vendor payouts, all through a single integration.

India's e-commerce landscape is evolving at breakneck speed — with over 180 million online shoppers and transaction volumes doubling year-on-year, the payment infrastructure underneath your store needs to be bulletproof. Payzon supports every payment mode your customers prefer: UPI, credit/debit cards, BNPL (Buy Now Pay Later), digital wallets, EMI on cards and cardless EMI, and net banking — all under one roof with unified settlement reporting.

What sets Payzon apart for retail is its intelligent payment orchestration layer. When a customer initiates a transaction, Payzon's routing engine selects the optimal payment processor in real time based on success rate, latency, and cost — ensuring your checkout conversion is maximized even during peak sale events like Diwali or end-of-season sales. With built-in retry logic for failed UPI transactions and smart card tokenization for repeat customers, Payzon is engineered to make every rupee count.`,
    whoUses: ["D2C Brands", "Multi-vendor Marketplaces", "Quick Commerce Platforms", "Fashion & Apparel Stores", "Electronics Retailers", "Grocery Apps", "Subscription Boxes"],
    features: [
      "Pay In & Pay Out", "Auto QR at Checkout", "Instant Refunds",
      "Multi-vendor Splits", "Abandoned Cart Recovery", "Smart Retry Engine",
      "UPI AutoPay & Mandates", "COD Reconciliation", "Plug-in for Shopify/WooCommerce",
      "BNPL & Cardless EMI", "Card Tokenization (CoFT)", "Dynamic Offers Engine",
      "Bulk Payout to Vendors", "GST Invoice Generation", "Webhook Event Streaming",
    ],
    howItWorks: [
      { step: "01", title: "Integrate Once, Everywhere", desc: "Drop in Payzon's SDK or use our no-code plugins for Shopify, WooCommerce, Magento, and OpenCart. Our REST API follows industry-standard conventions with comprehensive documentation, sandbox environment, and ready-to-use code samples in Node.js, Python, PHP, Java, and React Native. Go live in under 2 hours — no dedicated payment developer required." },
      { step: "02", title: "Accept Every Payment Mode", desc: "UPI (including UPI Lite and UPI 123Pay for feature phone users), all major credit/debit cards, BNPL players like LazyPay and ZestMoney, digital wallets, cardless EMI via Bajaj and HDFC, and internet banking — all in one checkout. Payzon's intelligent payment routing engine selects the highest-success-rate processor for each transaction in real time, boosting overall payment success by 18–22%." },
      { step: "03", title: "Auto-split & Settle Vendors", desc: "Set commission and split rules once in your Payzon dashboard. When a customer pays on your marketplace, Payzon automatically calculates the platform fee, applicable taxes, and vendor amount — then disburses each party's share in real time. No spreadsheets, no batch files, no manual intervention. Supports flat-fee, percentage-based, and tiered commission structures per vendor category." },
      { step: "04", title: "Reconcile, Report & Grow", desc: "Every transaction, refund, chargeback, and payout flows into Payzon's real-time reconciliation dashboard. Download GST-ready financial reports, track gross merchandise value (GMV) trends, and identify payment failure hotspots — all from a single control plane. Automated webhook alerts notify your ops team of any anomalies before they become problems." },
    ],
    benefits: [
      { icon: "⚡", title: "18% Checkout Conversion Boost", desc: "Smart payment routing, one-tap UPI pre-fill, and intelligent fallback logic ensure the maximum number of initiated transactions actually complete — even on 2G networks or during bank downtimes." },
      { icon: "🔄", title: "Instant Refund Engine", desc: "Trigger refunds programmatically via API or in bulk via CSV upload. Customers see money back in their original payment mode within seconds — turning a negative experience into a trust-building moment that drives repeat purchase." },
      { icon: "🛒", title: "Abandoned Cart Payment Links", desc: "When a customer drops off at checkout, Payzon's cart recovery engine automatically sends a personalized payment link via SMS or WhatsApp. One-tap payment resumes the abandoned order — recover 15–25% of carts that would otherwise be lost." },
      { icon: "📦", title: "COD to Digital Conversion", desc: "Convert cash-on-delivery orders to digital payments at the doorstep with Payzon's delivery agent QR. Reduce RTO (Return to Origin) rates, eliminate cash handling risks, and get same-day digital reconciliation for every COD order." },
      { icon: "🔐", title: "PCI DSS Level 1 Compliance", desc: "All card data is tokenized and stored on Payzon's PCI DSS Level 1 certified infrastructure. You never touch raw card numbers — reducing your compliance burden to near zero while giving customers the peace of mind to save their cards for faster repeat checkout." },
      { icon: "📊", title: "Real-time GMV Dashboard", desc: "Track gross merchandise value, average order value, payment method mix, refund rates, and settlement timelines all on a single live dashboard. Set custom alerts for anomalous spikes or drops and share white-labeled reports with your finance team." },
    ],
    stats: [
      { val: "99.9%", label: "Uptime SLA" },
      { val: "2s", label: "Avg Settlement" },
      { val: "0%", label: "Hidden Fees" },
      { val: "18%", label: "Conversion Lift" },
    ],
    integrations: ["Shopify", "WooCommerce", "Magento", "Unicommerce", "Increff", "Delhivery", "Shiprocket"],
    compliance: ["PCI DSS Level 1", "RBI PA Guidelines", "GST Compliant", "DPDP Ready"],
    accent: "#C8FF00",
  },
  {
    id: "education",
    label: "Education",
    tag: "EdTech & INSTITUTES",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5L3 10l11 5 11-5-11-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M7 12.5v5c2 2 8 3 14 0v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="25" y1="10" x2="25" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    headline: "End-to-end fee collection that works for institutions of every size.",
    description: `Managing fee collection across hundreds of students, multiple batches, and different payment schedules is one of the biggest operational headaches for educational institutions. Payzon solves it completely — from sending batch-wise payment links and collecting tuition fees, to auto-generating receipts, issuing refunds for dropped courses, and reconciling every rupee in real time. Trusted by schools, colleges, coaching institutes, and EdTech platforms across India.

The education sector in India is witnessing an unprecedented digital transformation. With over 250 million students enrolled in formal education and tens of millions more using EdTech platforms for upskilling, the pressure on payment infrastructure is enormous. Payzon's education payment suite is designed to handle the full complexity of institutional billing — from one-time annual fees and recurring hostel charges to per-module content payments on online learning platforms.

For EdTech companies specifically, Payzon provides the backbone for both B2C and B2B2C payment models. Whether you're selling individual courses, live cohort programs, institutional licenses, or marketplace courses from multiple instructors, Payzon handles collection, split, and disbursement seamlessly. Our automated EMI fee plans allow parents and students to spread large fee payments across months — dramatically improving your enrollment conversion rate without the complexity of managing a lending operation yourself.`,
    whoUses: ["K-12 Schools", "Colleges & Universities", "Coaching Institutes", "EdTech Platforms", "Skill Training Centers", "Online Tutors", "Government Exam Prep"],
    features: [
      "Fee Links per Batch/Student", "Virtual Accounts per Student", "Bulk Batch Collection",
      "Auto Receipts & Digital Invoices", "Scholarship Disbursement", "EMI Fee Plans",
      "Exam Fee Portals", "Parent Notification via SMS/WhatsApp", "ERP/LMS Integration",
      "Hostel & Transport Fee Modules", "Course-wise Revenue Splitting", "Instructor Payouts",
      "Fee Defaulter Auto-alerts", "Refund on Course Drop", "Government Scholarship Reconciliation",
    ],
    howItWorks: [
      { step: "01", title: "Configure Your Fee Structure", desc: "Define every fee type your institution charges — tuition, examination fees, library deposits, hostel charges, transport, activity fees, and lab fees. Map each fee type to specific batches, departments, academic years, or individual students. Payzon's fee matrix engine supports unlimited custom fee structures without any developer intervention — your accounts team can manage it all from the dashboard." },
      { step: "02", title: "Auto-generate & Distribute Payment Links", desc: "Once fee structures are configured, Payzon automatically generates a unique, trackable payment link for each student — pre-filled with their exact fee amount, due date, and applicable late fee rules. Distribute these via SMS, WhatsApp, email, or embed a Payzon-powered payment portal directly into your school or college website. Students and parents click once, pay, and receive instant confirmation." },
      { step: "03", title: "Collect via Every Mode with EMI Options", desc: "Students and parents pay via UPI (including UPI AutoPay for recurring charges), all credit/debit cards, net banking, BNPL, or EMI through partner lending institutions. Payzon handles all modes with zero extra integration. For large annual fees, our built-in EMI orchestration splits the payment across 3, 6, or 12 months — Payzon settles the full amount to your institution upfront while managing the installment collection." },
      { step: "04", title: "Auto Receipts, Reporting & ERP Sync", desc: "The moment a payment is received, Payzon auto-generates a digitally-signed receipt in PDF format and sends it to both the parent's email and phone. All transactions sync in real time with your ERP (Tally, SAP, Oracle), your student information system, or your custom LMS. Fee collection reports, defaulter lists, batch-wise collection summaries, and GST reports are available in one click." },
    ],
    benefits: [
      { icon: "📋", title: "Batch-wise Fee Management at Scale", desc: "Whether you have 200 students or 200,000 — Payzon manages fee collection at any scale. Assign different fee structures to different batches, run batch-specific collection campaigns, and track collection progress per cohort in real time from a single admin dashboard." },
      { icon: "💳", title: "EMI Fee Plans Without a Lending License", desc: "Partner with Payzon's NBFC network to offer parents interest-free or low-interest EMI plans on fees. Your institution receives the full fee amount on day one; the lending partner manages the installment collection. This single feature has been shown to improve enrollment conversion by 30–40% for coaching institutes." },
      { icon: "🎓", title: "Instant Scholarship Disbursements", desc: "Disburse government scholarship amounts, merit awards, and internal scholarship grants directly to student bank accounts or registered UPI IDs from a single dashboard. Bulk disburse to thousands of students in one batch upload — with automatic NEFT/IMPS routing and full transaction-level audit trail for audit compliance." },
      { icon: "📊", title: "Fee Analytics & Defaulter Management", desc: "Track paid fees, pending fees, overdue accounts, partial payments, and refunds in a live collection analytics dashboard. Set automated escalation workflows — reminder SMS on due date, escalation to parent on +3 days, and late fee auto-calculation on +7 days — without any manual follow-up from your accounts team." },
      { icon: "🔗", title: "LMS & ERP Integration", desc: "Payzon integrates out of the box with leading EdTech platforms (Teachable, Thinkific, Moodle, custom LMSes) and accounting software (Tally, SAP B1, Zoho Books). Payment status automatically unlocks course access — no manual enrollment confirmation needed." },
      { icon: "🌍", title: "International Student Payments", desc: "Accept fee payments from international students in USD, GBP, EUR, AED, and 40+ currencies. Payzon handles FX conversion, cross-border compliance, and settles in INR to your institution's account — making international admissions truly seamless." },
    ],
    stats: [
      { val: "50K+", label: "Institutes" },
      { val: "₹0", label: "Setup Cost" },
      { val: "24/7", label: "Support" },
      { val: "95%", label: "Collection Rate" },
    ],
    integrations: ["Moodle", "Teachable", "Tally ERP", "SAP B1", "Zoho Books", "Extramarks", "EduSmart"],
    compliance: ["RBI Guidelines", "UGC Compliant", "GST Invoicing", "DPDP Ready"],
    accent: "#00FFD1",
  },
  {
    id: "saas",
    label: "SaaS",
    tag: "SUBSCRIPTIONS & BILLING",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="7" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 11h20" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="8" cy="17" r="1.5" fill="currentColor"/>
        <path d="M12 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    headline: "Build recurring revenue machines with zero billing complexity.",
    description: `Subscription billing is the lifeblood of every SaaS business — and failed payments are its biggest silent killer. Payzon's intelligent subscription engine handles the complete billing lifecycle: plan creation, trial periods, proration on upgrades, smart retry on payment failures, dunning management, and real-time MRR/ARR dashboards. Whether you're a bootstrapped indie product or an enterprise SaaS, Payzon scales with your billing complexity without adding developer overhead.

The hidden cost of poorly managed subscription billing is enormous. Industry data shows that 20–40% of SaaS churn is involuntary — caused by failed payments, expired cards, or insufficient funds — not by customers who actually want to leave. Payzon's dunning engine addresses this directly with intelligent retry scheduling, automated customer communication, and account pause states that give customers time to update payment methods without losing their data. Recovering even 30% of involuntary churn can add millions to your ARR.

For SaaS companies expanding globally, Payzon's multi-currency billing engine allows you to price and charge customers in their local currency while settling in INR. Combined with automatic tax calculation for Indian GST, US sales tax, and EU VAT, Payzon eliminates the entire compliance burden of international SaaS billing. Your finance team gets clean, audit-ready revenue reports broken down by geography, plan tier, and billing cycle — all in real time.`,
    whoUses: ["B2B SaaS Startups", "Enterprise Software", "Developer Tools", "Analytics Platforms", "CRM & ERP Vendors", "Productivity Apps", "API-first Companies"],
    features: [
      "Subscription Billing Engine", "Smart Retry Logic", "Webhook & Event Streams",
      "Revenue Dashboard (MRR/ARR/LTV)", "Plan Upgrades & Downgrades", "Trial Period Management",
      "Proration Engine", "Dunning Management", "Multi-currency Billing",
      "Metered / Usage-based Billing", "Seat-based Licensing", "Annual Billing with Discounts",
      "Invoice PDF Generation", "Tax Calculation (GST/VAT)", "Revenue Recognition Reports",
    ],
    howItWorks: [
      { step: "01", title: "Define Your Billing Plans", desc: "Create any pricing model via API or dashboard in minutes: monthly/annual subscriptions, usage-based billing (per API call, per user, per GB), seat-based licensing with volume discounts, or hybrid plans that combine a base fee with usage overages. Add trial periods, one-time setup fees, add-ons, and promotional coupon codes. Payzon's plan configurator supports pricing models used by every major SaaS product on the market." },
      { step: "02", title: "Capture Mandates & Auto-charge", desc: "Customers authorize auto-debit via UPI AutoPay mandate or card-on-file during the trial or at plan selection. Payzon stores the authorization securely and executes charges automatically on the configured billing cycle — monthly, quarterly, or annually — without any manual intervention. For annual plans, Payzon auto-sends renewal reminders 30, 14, and 7 days before the billing date." },
      { step: "03", title: "Smart Failure Recovery & Dunning", desc: "When a payment fails, Payzon doesn't give up. Our dunning engine retries with intelligent scheduling — spacing retries to align with times when bank success rates are historically higher. Simultaneously, automated email sequences nudge customers to update their payment method with personalized, branded communications. After configurable retry attempts, Payzon can pause, downgrade, or cancel accounts per your configured policy — all automatically." },
      { step: "04", title: "Revenue Intelligence & Reporting", desc: "Payzon's revenue intelligence dashboard gives you real-time visibility into every SaaS finance metric that matters: MRR, ARR, Net Revenue Retention (NRR), churn rate by cohort, expansion revenue, contraction revenue, customer lifetime value, and average revenue per user. Export data via REST API or scheduled CSV reports to feed your financial model, BI tool, or investor reporting stack." },
    ],
    benefits: [
      { icon: "🔁", title: "Fully Automated Recurring Billing", desc: "Set billing rules once and Payzon charges customers on schedule across every billing cycle — handling date math for months with different lengths, prorating mid-cycle plan changes, and calculating applicable taxes automatically. Your engineering team never has to touch billing logic again." },
      { icon: "📉", title: "Recover 30–40% of Involuntary Churn", desc: "Payzon's multi-stage dunning system — combining intelligent retry scheduling, automated email sequences, and account grace periods — recovers failed payments that most billing systems write off as lost. The ROI on this single feature alone typically covers Payzon's cost within the first month." },
      { icon: "🧮", title: "Exact Proration, Every Time", desc: "When customers upgrade mid-month, Payzon calculates the exact prorated charge to the second — crediting unused time from the old plan and charging only for the remaining days on the new plan. Customers see fair, transparent charges; you see clean revenue accounting with zero reconciliation effort." },
      { icon: "🌍", title: "Multi-currency & Tax-compliant", desc: "Charge international customers in their local currency (USD, EUR, GBP, AED, SGD, and 40+ more). Payzon handles real-time FX conversion, auto-calculates Indian GST or foreign VAT per customer location, and generates tax-compliant invoices — making global SaaS expansion financially and legally effortless." },
      { icon: "📈", title: "Cohort-level Revenue Analytics", desc: "Break down MRR by acquisition cohort, pricing plan, geography, or customer segment. Identify which plans have the highest churn, which cohorts expand fastest, and where your NRR compresses — with drill-down data that goes all the way to the individual customer level." },
      { icon: "🔌", title: "CRM & Accounting Integrations", desc: "Payzon syncs billing data in real time with Salesforce, HubSpot, Zoho CRM, Stripe (for hybrid stacks), QuickBooks, and Tally. When a customer upgrades, their CRM record updates automatically; when an invoice is generated, it flows into your accounting software without manual entry." },
    ],
    stats: [
      { val: "99.8%", label: "Success Rate" },
      { val: "3x", label: "Fewer Failures" },
      { val: "API-first", label: "Integration" },
      { val: "40%", label: "Churn Saved" },
    ],
    integrations: ["Salesforce", "HubSpot", "Zoho CRM", "QuickBooks", "Tally", "Segment", "Amplitude"],
    compliance: ["RBI PA/PG Guidelines", "GST Compliant", "VAT Ready", "SOC 2 Type II"],
    accent: "#B47FFF",
  },
  {
    id: "freelance",
    label: "Freelance",
    tag: "CREATORS & SOLOPRENEURS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M5 23c0-5 4-8 9-8s9 3 9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M18 13l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    headline: "Get paid on your terms — faster than sending an invoice.",
    description: `Freelancers and creators shouldn't have to chase payments or wait days for bank transfers. Payzon gives you the tools to collect money instantly — from professional payment links and branded invoice pages to multi-bank payouts and automatic income tracking. Whether you're a designer, developer, consultant, videographer, or content creator, Payzon handles your entire payment flow so you can focus on doing great work.

India's freelance economy is booming — with over 15 million active freelancers and a creator economy valued at over $1 billion, the need for professional, instant payment infrastructure has never been greater. Yet most freelancers still rely on manual bank transfers, informal UPI requests, or invoicing software that doesn't integrate with payment collection — creating cash flow delays, reconciliation nightmares, and an unprofessional client experience.

Payzon changes all of this. Your branded payment page acts as your digital billing identity — clients see your logo, your project details, and a clean professional interface that instills confidence and gets paid faster. For international clients, Payzon supports cross-border payment collection in multiple currencies with competitive FX rates, automatic tax withholding calculation, and year-end income reports formatted for ITR filing — making you financially independent from day one.`,
    whoUses: ["Graphic Designers", "Web Developers", "Video Editors", "Content Writers", "Business Consultants", "Photographers", "Social Media Managers"],
    features: [
      "Instant Payment Links", "UPI, IMPS & NEFT Collection", "Professional Invoice Generator",
      "Multi-bank Payouts", "Partial Payment Collection", "Milestone-based Billing",
      "Branded Payment Pages", "Tax-ready Income Reports", "Client Portal Access",
      "International Payment Collection", "Recurring Retainer Billing", "Project Escrow Holds",
      "Payment Reminder Automation", "Multi-currency Invoicing", "Expense Tracking",
    ],
    howItWorks: [
      { step: "01", title: "Create Your Freelancer Profile", desc: "Set up your Payzon freelancer account in minutes — no business registration needed. Add your services, standard pricing, bank account details, and upload your logo for branded invoices and payment pages. Your personalized Payzon payment URL (payzon.me/yourname) serves as your permanent digital billing address that you can share with any client, anywhere." },
      { step: "02", title: "Generate & Send Payment Requests Instantly", desc: "For every project or retainer, create a payment request in under 10 seconds — just enter the client name, amount, description, and due date. Payzon generates a branded invoice PDF and a one-click payment link simultaneously. Share via WhatsApp, email, or embed the payment button on your portfolio website. Clients can pay without creating an account — no friction, no excuses." },
      { step: "03", title: "Clients Pay via Any Method", desc: "Your clients pay via UPI (no minimum, no maximum), all credit/debit cards, net banking, or even international wire for overseas clients. They receive an automatic payment receipt; you get an instant push notification and see the funds reflected in your Payzon balance in real time. For milestone projects, release each payment link as the project phase completes — full control, zero awkwardness." },
      { step: "04", title: "Withdraw & Track Your Earnings", desc: "Funds in your Payzon balance settle to your linked bank account daily — or on-demand for instant withdrawal. Your income dashboard shows client-wise earnings, project-wise revenue, monthly trends, and outstanding payment status. At year end, export your complete income statement formatted for ITR-1 or ITR-4 filing in one click — save hours on tax preparation." },
    ],
    benefits: [
      { icon: "⚡", title: "Invoice to Payment in Under 10 Seconds", desc: "No more navigating complex invoicing software or waiting for clients to process payment via slow bank channels. With Payzon, you create a payment request and the client can pay immediately — the entire flow from invoice to money-in-account takes under 2 minutes for a prepared client." },
      { icon: "🧩", title: "Milestone Billing Without Awkward Conversations", desc: "Define project milestones upfront and lock them in your Payzon project workspace. Release each milestone payment link as the deliverable is completed — Payzon handles the payment collection, sends automatic reminders, and tracks which milestones are paid and which are outstanding. No more chasing clients manually." },
      { icon: "📈", title: "Complete Earnings Analytics", desc: "See exactly how much you earned this month vs last month, which clients pay fastest, which projects have the highest margins, and what your annualized income run rate looks like. Payzon's freelancer dashboard gives you the financial clarity to make smart decisions about your rates and client mix." },
      { icon: "🧾", title: "ITR-ready Income Reports", desc: "Come tax season, Payzon generates a complete income statement with all payment dates, client names, amounts, and applicable TDS deductions — formatted exactly as needed for your CA or direct ITR filing. Never scramble through bank statements trying to reconstruct your annual income again." },
      { icon: "🌐", title: "Collect from International Clients", desc: "Receive payments from clients in the US, UK, UAE, Singapore, and 60+ countries in their local currency. Payzon's cross-border collection handles compliance, FX conversion, and FEMA reporting — settling clean INR in your bank account with competitive conversion rates that beat most bank wire options." },
      { icon: "🔒", title: "Project Escrow for High-value Work", desc: "For large projects with new clients, use Payzon's escrow feature — the client deposits the full project amount upfront, which is held securely and released to you in agreed tranches as milestones are approved. Full protection for both sides, zero trust required." },
    ],
    stats: [
      { val: "10 sec", label: "Invoice to Pay" },
      { val: "₹1", label: "Min Transfer" },
      { val: "Instant", label: "Settlement" },
      { val: "5L+", label: "Creators" },
    ],
    integrations: ["Notion", "Trello", "Canva", "Figma", "Upwork (payouts)", "Zoho Invoice", "Google Workspace"],
    compliance: ["FEMA Compliant", "ITR-ready Reports", "TDS Tracking", "GST Invoicing"],
    accent: "#FFB830",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    tag: "CLINICS & HOSPITALS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 9v10M9 14h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    headline: "Compliant, secure payments designed for the demands of modern healthcare.",
    description: `Healthcare billing is uniquely complex — balancing OPD collections, IPD deposits, insurance co-payments, pharmacy payments, and lab fee disbursements while maintaining the strictest data security and regulatory compliance. Payzon is purpose-built for healthcare institutions: from single-doctor clinics to multi-specialty hospital chains. Every payment flow is secure, auditable, and compliant with healthcare data protection standards — so you can focus entirely on patient care.

The Indian healthcare payment landscape is at an inflection point. With the Ayushman Bharat Digital Mission (ABDM) pushing for fully digital health records and payments, and insurance penetration growing rapidly post-COVID, healthcare providers need payment infrastructure that handles not just direct patient payments but also insurance co-pays, pre-authorization holds, and pharmacy disbursements — all in a fully integrated, NABH-compliant system.

Payzon's healthcare payment suite integrates with leading Hospital Management Systems (HMS) and Electronic Health Record (EHR) platforms to create a fully digital patient billing journey. From the moment a patient registers at the front desk to the final discharge bill settlement, every payment touchpoint is managed by Payzon — reducing billing errors by 90%, eliminating cash leakage, and providing hospital management with real-time revenue visibility across every department and cost centre.`,
    whoUses: ["Multi-specialty Hospitals", "Diagnostic Centers", "Single-Doctor Clinics", "Dental & Eye Clinics", "Telemedicine Platforms", "Pharmacy Chains", "Physiotherapy Centers"],
    features: [
      "OPD & IPD Billing Modules", "Insurance Co-pay Collection", "Lab & Diagnostics Disbursements",
      "PCI DSS Level 1 Compliant", "Pharmacy Payment Modules", "Telemedicine Billing",
      "Patient Payment Portals", "Appointment Booking & Prepayment", "Health Insurance Integrations",
      "Pre-authorization Hold & Release", "Visiting Doctor Payout Automation", "Cost Centre Accounting",
      "Discharge Summary Auto-billing", "Refund on Cancelled Appointments", "ABDM Integration Ready",
    ],
    howItWorks: [
      { step: "01", title: "Configure Departments & Billing Rules", desc: "Map every revenue centre in your facility — OPD, IPD, emergency, pharmacy, laboratory, radiology, cafeteria — with separate payment routing, account mapping, and billing templates. Configure visiting doctor fee structures, insurance co-pay percentages per TPA, and pharmacy credit limits. Once configured, your front-desk and billing staff operate purely in Payzon's intuitive interface with zero payment complexity." },
      { step: "02", title: "Patient Registration & Pre-payment Collection", desc: "At registration, collect consultation fees via QR code, POS terminal, or patient-facing kiosk. For IPD admissions, collect the security deposit via Payzon's hold-and-capture mechanism — the amount is blocked on the patient's card or UPI but not yet settled to your account, allowing for final adjustment at discharge. Auto-generate digital payment receipts in real time, eliminating paper receipt workflows." },
      { step: "03", title: "Insurance Co-pay & TPA Management", desc: "For insured patients, Payzon's billing engine automatically splits the bill — collecting only the co-pay amount from the patient while generating the TPA claim documentation for the balance. Payzon tracks the status of each pending insurance claim, sends follow-up reminders to TPA partners, and reconciles insurance payouts against pending claims in real time — giving your billing team complete visibility into the insurance receivables pipeline." },
      { step: "04", title: "Discharge Settlement & Auto-disburse", desc: "At discharge, Payzon generates the final consolidated bill covering all departments visited during the stay. The patient pays the net amount (after insurance adjustments) via any digital mode. Payzon then automatically disburses the appropriate shares: visiting doctor consultancy fees, lab charges to partner diagnostic centres, pharmacy settlements, and the hospital's revenue — all in a single automated settlement run." },
    ],
    benefits: [
      { icon: "🔐", title: "Hospital-grade Security & Audit Trails", desc: "Every financial transaction in Payzon's healthcare module is encrypted with 256-bit AES, stored with a tamper-proof audit trail, and accessible to authorized personnel only. Full transaction history is available for NABH accreditation audits, income tax assessments, and medical insurance TPA dispute resolution." },
      { icon: "🏥", title: "Multi-department Revenue Accounting", desc: "One Payzon integration gives you separate revenue accounting for every cost centre — OPD, IPD, pharmacy, diagnostics, physiotherapy, cafeteria — with consolidated reporting at the hospital level and drill-down capability to the individual department, doctor, or patient level." },
      { icon: "💊", title: "Telemedicine Payment Integration", desc: "Charge consultation fees for video appointments before the session starts — eliminating no-shows and ensuring revenue is collected even when patients don't convert to in-person visits. Integrates with leading telemedicine platforms and auto-refunds if the doctor is unavailable." },
      { icon: "📋", title: "Insurance Co-pay Engine Reduces Errors by 90%", desc: "Payzon's insurance co-pay calculator applies the correct co-pay percentage per TPA agreement, patient's policy tier, and procedure type — automatically. Billing staff never need to manually calculate co-pays again, eliminating one of the most common sources of billing disputes and revenue leakage." },
      { icon: "👨‍⚕️", title: "Automated Visiting Doctor Payouts", desc: "Configure payout rules for visiting consultants — fixed per-consultation fees, percentage of billed amount, or hybrid models. Payzon auto-calculates and disburses visiting doctor payouts at the end of every day, week, or billing cycle — with detailed payout statements that doctors can view in their own mobile dashboard." },
      { icon: "📱", title: "Patient Payment Portal & App", desc: "Give patients a branded online portal where they can view their bills, make partial payments, set up payment plans for large bills, download receipts, and track insurance claim status — reducing front-desk workload and improving the patient financial experience significantly." },
    ],
    stats: [
      { val: "256-bit", label: "Encryption" },
      { val: "100%", label: "PCI DSS" },
      { val: "Zero", label: "Chargebacks" },
      { val: "90%", label: "Fewer Errors" },
    ],
    integrations: ["Practo", "eHospital", "Medicore", "HIS Pro", "mfine", "Healthplix", "CarePlix"],
    compliance: ["PCI DSS L1", "ABDM Ready", "NABH Billing Standards", "HIPAA-aligned"],
    accent: "#FF6B9D",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    tag: "PLATFORMS & AGGREGATORS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="15" y="8" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M13 14h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 5l-2 3M20 5l2 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    headline: "Split, settle, and scale payments across every seller on your platform.",
    description: `Running a marketplace means managing money for dozens, hundreds, or thousands of sellers simultaneously — and getting it wrong means disputes, delays, and loss of seller trust. Payzon's marketplace payment infrastructure handles the full money flow: buyer payments in, commission auto-deduction, escrow holds for dispute resolution, and bulk vendor payouts out — all in real time, all fully automated. Whether you're building a service marketplace, product aggregator, or gig platform, Payzon gives you the financial plumbing to scale.

The marketplace model's biggest operational challenge isn't customer acquisition — it's the money mechanics. How do you collect from buyers, hold funds safely until service delivery is confirmed, deduct the right commission across thousands of different vendor agreements, and pay out to hundreds of sellers daily without errors, delays, or compliance risks? Payzon answers every one of these questions with a purpose-built marketplace payment stack that Indian regulators, sellers, and buyers trust.

For gig economy platforms — ride-sharing, delivery, freelance services, home services — Payzon's real-time earnings wallet and instant payout capability is a game-changer. Workers see their earnings update in real time after every completed job and can withdraw to their bank account instantly at any time, 24/7. This single capability dramatically improves gig worker satisfaction and retention — a critical moat in highly competitive gig economy markets.`,
    whoUses: ["Product Marketplaces", "Service Aggregators", "Gig Economy Platforms", "Food Delivery Apps", "Home Services Platforms", "Freelance Marketplaces", "Rental Platforms"],
    features: [
      "Multi-party Payment Splits", "Commission Deduction Engine", "Escrow Holds & Release",
      "Bulk Vendor Payouts (1000+ simultaneous)", "Vendor KYC Onboarding", "Dispute & Chargeback Management",
      "Buyer Protection Holds", "Real-time Seller Dashboard", "GST Invoice per Vendor",
      "Dynamic Commission Rules", "Instant Worker Earnings Wallet", "Payout Scheduling",
      "Seller Onboarding API", "Revenue Share Management", "Marketplace Settlement Reports",
    ],
    howItWorks: [
      { step: "01", title: "Onboard Sellers with Hosted KYC", desc: "Sellers complete identity verification (Aadhaar, PAN), business registration, and bank account validation through Payzon's hosted onboarding flow — fully white-labeled to match your marketplace brand. The entire KYC process takes under 5 minutes for most sellers and requires zero custom development from your engineering team. Payzon handles regulatory compliance and stores all verification documents securely." },
      { step: "02", title: "Buyer Payment to Escrow", desc: "When a buyer places an order, the full payment is collected and held in Payzon's regulated escrow account — not your platform account, not the seller's account. This protects buyers from fraud (they can get a refund if the seller doesn't deliver) while assuring sellers that the money exists and will be released on delivery confirmation. Payzon is RBI-authorized to hold escrow funds under the Payment Aggregator (PA) framework." },
      { step: "03", title: "Commission Deduction on Autopilot", desc: "Commission rules configured in your Payzon dashboard are applied automatically to every transaction at the escrow release stage. Whether you charge a flat 10% on all orders, a tiered commission based on order value, a per-category rate, or a seller-specific custom agreement — Payzon handles every case without any per-transaction manual calculation. Commission reports are available in real time for your finance team." },
      { step: "04", title: "Bulk Seller Payouts in Seconds", desc: "Once orders are confirmed as delivered, run a bulk payout to all eligible sellers in a single API call or scheduled batch job. Payzon processes 1,000+ simultaneous payouts via IMPS, NEFT, or UPI — each routed to the seller's verified bank account. Every payout generates a payout confirmation that sellers see in their dashboard and receive via SMS — zero ambiguity on settlement status." },
    ],
    benefits: [
      { icon: "🧩", title: "Infinitely Configurable Split Rules", desc: "Set commission as flat fee, percentage, or a multi-tier table. Override rules at the seller category, individual seller, or even individual product level. Run promotional periods with reduced commission without any code changes — all managed through your Payzon dashboard." },
      { icon: "🔒", title: "RBI-authorized Buyer Protection Escrow", desc: "Payzon holds buyer funds in a regulated escrow account until delivery confirmation — protecting buyers from fraud while giving sellers confidence that payment exists. Release or refund with a single API call. Full audit trail for every escrow transaction." },
      { icon: "📤", title: "1000+ Concurrent Seller Payouts", desc: "Trigger payouts to your entire seller base in a single batch — Payzon processes all simultaneously via optimal payment rails (IMPS for instant, NEFT for large batches). Track real-time status per seller with webhook callbacks for every payout state change." },
      { icon: "🧾", title: "Auto-generate GST Invoices per Seller", desc: "Payzon auto-generates GSTIN-compliant invoices for every seller transaction — including the correct HSN code, GST rate, platform commission, and net settlement amount. Sellers can download their monthly invoice pack for GST filing; you get a consolidated platform revenue report. Saves your finance team weeks of manual invoice preparation." },
      { icon: "📊", title: "Real-time Seller Dashboard & Earnings", desc: "Give every seller on your platform a white-labeled earnings dashboard showing their daily sales, commission deductions, pending payouts, and bank settlement history. Transparency in payments dramatically reduces seller support tickets and builds platform trust." },
      { icon: "⚖️", title: "Built-in Dispute Resolution", desc: "When a buyer raises a dispute, Payzon automatically freezes the relevant escrow amount and creates a dispute workflow. Both parties submit evidence; your platform team adjudicates through Payzon's dispute console and triggers either full release or refund with one click — full chargeback protection built in." },
    ],
    stats: [
      { val: "1000+", label: "Sellers/Batch" },
      { val: "Real-time", label: "Split Logic" },
      { val: "T+0", label: "Settlement" },
      { val: "100%", label: "Audit Trail" },
    ],
    integrations: ["Magento", "WooCommerce", "Shopify (multi-vendor)", "Sharetribe", "CS-Cart", "Mirakl", "Custom APIs"],
    compliance: ["RBI PA License", "GST Compliant", "Escrow RBI Authorized", "KYC Verified Sellers"],
    accent: "#4DFFC3",
  },
  {
    id: "corporate-onboarding",
    label: "Corporate Onboarding",
    tag: "B2B CLIENT SOLUTIONS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M3 11h22" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="9" cy="17" r="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M14 16h7M14 18.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    headline: "Onboard business clients in hours, not weeks — with zero manual intervention.",
    description: `B2B payment onboarding has traditionally been a slow, paper-heavy process that takes days or weeks and requires dedicated compliance teams. Payzon's corporate onboarding engine automates the entire pipeline: company registration verification via MCA, director identity verification via Aadhaar and PAN, GST validation, bank account confirmation, and risk scoring — all in a single intelligent workflow that takes hours, not weeks. Scale your B2B payment operations without scaling your compliance headcount.

India's B2B payments market is massive and growing — with over $500 billion in annual B2B transaction value and thousands of new businesses registering every month, the need for automated, digital-first business onboarding has never been more urgent. Traditional approaches involving physical document submission, manual verification, and multi-day approval cycles create significant drop-off in the onboarding funnel and competitive disadvantage for platforms that rely on them.

Payzon's corporate onboarding engine is built on live API integrations with the Ministry of Corporate Affairs (MCA) database, GSTN portal, NSDL for PAN verification, UIDAI for Aadhaar validation, and multiple bureau APIs for director background checks. Rather than relying on document uploads that require human review, Payzon pulls verification data directly from authoritative government sources in real time — delivering verification results in under 5 minutes for the majority of standard business applications.`,
    whoUses: ["B2B SaaS Platforms", "Lending Platforms", "Supply Chain Finance", "Corporate Card Issuers", "Trade Finance Platforms", "NBFCs", "B2B Marketplaces"],
    features: [
      "MCA Registry Document Validation", "Company Registration Verification (CIN)", "Director KYC (Aadhaar + PAN)",
      "Auto Approval Workflow Engine", "GSTIN Number Verification", "Bank Account & IFSC Validation",
      "ML-powered Risk Score Engine", "Bulk Onboarding API (CSV upload)", "Compliance Audit Log Storage",
      "Penny Drop Bank Verification", "Negative List Screening (CIBIL/Bureau)", "UBO (Ultimate Beneficial Owner) Check",
      "Re-KYC Workflow Engine", "Document Expiry Tracking", "Video KYC (V-CIP) Option",
    ],
    howItWorks: [
      { step: "01", title: "Business Submits Details via Your Portal", desc: "Your corporate client submits their basic business information — GSTIN, Corporate Identification Number (CIN), and the PAN of authorised directors — through your branded onboarding portal, which Payzon powers via white-labeled widget or API. The interface is optimised for desktop and mobile, with form pre-fill from GST number lookup that reduces the data entry burden on applicants." },
      { step: "02", title: "Payzon Runs Parallel Verification", desc: "Immediately on submission, Payzon's verification engine runs 8–12 checks simultaneously in under 5 minutes: MCA registry lookup for company details and director list, GSTN portal check for registration status and filing history, Aadhaar-PAN linkage verification for each director, bank account validation via penny drop, and bureau screening of directors for adverse credit events or legal proceedings." },
      { step: "03", title: "ML Risk Scoring & Categorisation", desc: "Once all verification checks are complete, Payzon's risk scoring model assigns each application a risk tier (Low / Medium / High) based on: company age, number of filings, director history, geographic risk, business type, and verification match confidence scores. Low-risk applications are auto-approved; medium-risk applications are flagged for express human review with a pre-populated recommendation; high-risk applications are declined with detailed reason codes." },
      { step: "04", title: "Instant Approval & Activation", desc: "Approved businesses receive their payment activation credentials immediately — typically within 4 hours for standard applications. Your compliance team receives a structured onboarding report for every applicant: verification timestamps, check results, risk score breakdown, and a digital approval package ready for audit. Re-KYC schedules are set automatically based on business type and risk tier." },
    ],
    benefits: [
      { icon: "🏢", title: "Live MCA & GSTN Registry Integration", desc: "Payzon verifies company registration, director details, and GST filing compliance directly from government databases in real time — not from uploaded documents that can be forged. Every verification comes with an API timestamp and database source reference for audit purposes." },
      { icon: "⚖️", title: "Fully Automated Compliance Packaging", desc: "Every approved business automatically receives a compliance record package: individual check results with timestamps, approval rationale, risk score justification, and storage of verified documents — all formatted for regulatory inspection or audit readiness." },
      { icon: "📊", title: "ML Risk Scoring — Fraud Before Onboarding", desc: "Payzon's risk model is trained on thousands of verified and fraudulent business applications. It flags common fraud patterns — director name mismatches, newly incorporated shells, address clusters, and bureau negatives — before a single transaction happens, protecting your platform from losses before they occur." },
      { icon: "🚀", title: "85% Faster, 10x More Volume", desc: "What previously took 7–10 business days with a dedicated KYC team now takes under 4 hours with Payzon's automation. Run the same compliance quality at 10x the volume without proportional headcount growth — the unit economics of B2B onboarding transform entirely." },
      { icon: "🔄", title: "Automated Re-KYC Management", desc: "Payzon tracks KYC document expiry dates and triggers automated re-KYC workflows before a business's verification lapses — sending reminders to the business contact, running automated re-checks where government sources allow, and escalating to human review only when necessary." },
      { icon: "📋", title: "Bulk Onboarding for Enterprise", desc: "Onboard hundreds of B2B clients simultaneously via CSV bulk upload API — ideal for trade finance platforms, supply chain finance providers, and corporate card programs that need to onboard an entire vendor or supplier network at once." },
    ],
    stats: [
      { val: "85%", label: "Faster Onboarding" },
      { val: "99%", label: "Doc Accuracy" },
      { val: "Zero", label: "Manual Reviews" },
      { val: "4 hrs", label: "Avg Approval" },
    ],
    integrations: ["MCA Portal", "GSTN API", "NSDL PAN", "Experian B2B", "CIBIL Commercial", "Signzy", "IDfy"],
    compliance: ["RBI KYC Guidelines", "PMLA Compliant", "SEBI Aligned", "AML Screening"],
    accent: "#7EB8FF",
  },
  {
    id: "fintech-media",
    label: "Fintech & Media",
    tag: "PLATFORM SECURITY",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 23h10M14 19v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    headline: "Instant KYC verification for digital finance and content platforms.",
    description: `Fintech platforms and digital media companies face the twin challenge of regulatory compliance and user experience — every verification step adds friction that drives users away, yet skipping verification invites fraud and regulatory penalties. Payzon's verification layer strikes the perfect balance: RBI-compliant KYC for neobanks and lending platforms, real-time identity checks for digital wallets, and seamless content access control for OTT and streaming platforms — all with sub-2-second verification times.

The Indian fintech landscape has evolved dramatically since the UPI revolution — with neobanks, lending apps, digital wallets, investment platforms, and insurance aggregators now serving hundreds of millions of customers. Each category faces distinct compliance requirements: neobanks need full V-CIP KYC per RBI's Master Direction; lending apps need PAN + Aadhaar + bureau checks; digital wallets need minimum KYC for low-value and full KYC for higher limits; investment platforms need SEBI-mandated KYC with CKYC registry linking.

For digital media and OTT platforms, the challenge is different but equally complex. The rise of account sharing (Netflix's crackdown proved the scale of this problem), minor-age access to mature content, and geographic content licensing restrictions all demand sophisticated identity and access management that doesn't destroy the user experience. Payzon's media verification module handles all of these with device fingerprinting, concurrent session management, age verification, and geo-IP access control — without requiring users to verify their identity every session.`,
    whoUses: ["Neobanks & Digital Banks", "Lending Apps", "Digital Wallets", "Investment Platforms", "OTT & Streaming", "Insurance Aggregators", "Crypto Exchanges"],
    features: [
      "Digital Banking KYC (V-CIP)", "Payment Platform Compliance", "OTT Content Access Control",
      "Anti-account-sharing Detection", "Video KYC (VKYC) with Liveness", "Credit Bureau Checks (CIBIL/Equifax)",
      "Account Aggregator Integration", "Penny Drop Bank Verification", "Device Fingerprinting & Trust Scoring",
      "CKYC Registry Linking", "Aadhaar eKYC (OTP + Biometric)", "PAN Verification (NSDL)",
      "Geo-restriction Enforcement", "Minor Age Verification", "Risk-adaptive Authentication",
    ],
    howItWorks: [
      { step: "01", title: "User Initiates Identity Verification", desc: "Users submit identity documents (Aadhaar, PAN, Voter ID, Passport) directly through Payzon's SDK — embedded natively in your app or web platform with your brand colours and flow. Payzon's SDK captures document images with guided overlays, performs real-time blur/glare detection to ensure quality, and passes data to the verification engine without storing raw images — all data is processed in Payzon's encrypted verification pipeline." },
      { step: "02", title: "Multi-layer Real-time Verification", desc: "Simultaneously and in parallel: OCR extracts data from document images; government database APIs verify extracted data against UIDAI (Aadhaar), NSDL (PAN), GSTN (business), and MCA (directors); face match compares the document photo against a live selfie or video KYC feed; liveness detection ensures the selfie is from a live person not a photo or screen replay. Total verification time: under 1.2 seconds for standard flows." },
      { step: "03", title: "Risk-adaptive Access Control", desc: "Payzon categorises verified users into risk tiers based on identity confidence score, device trust score, IP risk signals, and bureau data. Low-risk users get instant full access. Medium-risk users receive enhanced verification steps (additional document, V-CIP video call, or enhanced bureau check). High-risk users are flagged for manual review with a full risk report — your compliance team sees a structured case, not raw data." },
      { step: "04", title: "Compliance Records & Ongoing Monitoring", desc: "Every verified identity generates a tamper-proof compliance record stored in Payzon's encrypted vault — accessible via API for audit purposes and linked to the user's session for re-verification triggers. Ongoing monitoring flags users whose risk profile changes post-onboarding (adverse bureau events, device changes, location anomalies) and triggers appropriate re-verification workflows automatically." },
    ],
    benefits: [
      { icon: "🏦", title: "Full RBI V-CIP KYC for Digital Banking", desc: "Payzon's Video Customer Identification Process (V-CIP) module meets all RBI requirements for digital account opening — live video recording, geo-tagging, face match, document verification, and tamper-proof storage — enabling neobanks and lending platforms to onboard customers 100% digitally without any branch visit." },
      { icon: "📺", title: "Anti-account-sharing for OTT Platforms", desc: "Payzon's device fingerprinting engine creates a unique device signature per registered device. Concurrent session tracking detects when the same account is active on too many devices simultaneously and triggers re-authentication or session termination — recoverable revenue from account sharing can exceed 15% of subscriber base." },
      { icon: "💳", title: "Instant Credit Bureau Integration", desc: "Access CIBIL, Equifax, and CRIF scores with a single API call — fetching the full bureau report, score, and report summary in under 2 seconds. Integrate this into your lending decisioning engine or investment suitability assessment without the complexity of direct bureau integrations." },
      { icon: "🔍", title: "RBI Account Aggregator Framework", desc: "Payzon is an approved Financial Information User (FIU) under the RBI Account Aggregator framework. Fetch verified, user-consented bank statements, investment portfolios, insurance data, and tax information from 100+ financial institutions — enabling bank-statement-free lending and fully digital financial planning flows." },
      { icon: "👶", title: "Minor Age Verification & Parental Consent", desc: "For platforms with age-restricted content or minor-age users, Payzon's age estimation (via face analysis) and Aadhaar date-of-birth verification enables regulatory-compliant minor detection with an automatic parental consent flow — mandatory for OTT, gaming, and social platforms under DPDP Act requirements." },
      { icon: "📍", title: "Geo-content Restriction Enforcement", desc: "For OTT platforms with geographic content licensing, Payzon's IP geolocation + GPS verification enforces content availability per user location — at stream initiation and periodically during playback — preventing VPN-based license violations with configurable enforcement policies." },
    ],
    stats: [
      { val: "1.2s", label: "Avg Verify Time" },
      { val: "RBI", label: "Compliant" },
      { val: "99.5%", label: "Accuracy" },
      { val: "60%", label: "Drop-off Saved" },
    ],
    integrations: ["DigiLocker", "UIDAI API", "NSDL PAN API", "CIBIL", "Account Aggregator", "CKYC Registry", "mAadhaar"],
    compliance: ["RBI V-CIP", "PMLA KYC", "DPDP Act", "SEBI KYC"],
    accent: "#E57FFF",
  },
  {
    id: "logistics-education",
    label: "Logistics & Education",
    tag: "ACCESS CONTROL",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="9" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M17 12l4 2v4h-4V12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="7" cy="22" r="1.8" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="21" cy="22" r="1.8" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M10 6h8M14 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    headline: "Authenticate every delivery handoff and every remote learner — with certainty.",
    description: `Two industries where identity verification directly impacts outcomes: logistics, where the wrong person receiving a package can mean a fraud claim or lost shipment — and education, where verifying the right student is taking an exam determines academic integrity. Payzon's authentication layer serves both with biometric-backed delivery confirmation for last-mile logistics players, and multi-factor student identity verification for remote learning platforms, online exams, and digital certificate issuance.

India's logistics sector processes over 15 million shipments per day across 19,000+ pin codes — and delivery fraud (false delivery claims, wrong-person deliveries, and tampered proof of delivery) costs the industry an estimated ₹2,400 crore annually. Payzon's delivery authentication module reduces false delivery claims by 98% in the first month of deployment — replacing paper POD slips and informal photo captures with biometric-backed, geo-tagged, timestamped delivery events that are admissible as evidence in dispute resolution.

For the education sector, the shift to online and hybrid learning has exposed a fundamental weakness: existing proctoring solutions are expensive, intrusive, and easily defeated. Payzon's education identity layer takes a different approach — lightweight, continuous identity re-verification during exam sessions, blockchain-backed digital certificate issuance, and fraud-resistant student authentication for examination portals — at a fraction of the cost of traditional remote proctoring vendors.`,
    whoUses: ["E-commerce Logistics", "Courier Companies", "B2B Delivery Fleets", "Online Exam Platforms", "University Examination Boards", "Skill Development Institutes", "Digital Certificate Issuers"],
    features: [
      "Delivery Authentication (OTP + Face Match)", "Student ID Verification for Exams", "Blockchain Certificate Issuance",
      "Remote Proctoring Support", "OTP + Biometric Multi-factor Auth", "Geo-tagged Delivery Proof",
      "Face Match at Doorstep (Field App)", "Digital Stamp & Seal on Certificates", "Bulk Certificate Generation API",
      "Delivery Agent Authentication", "Tamper-proof Delivery Events", "QR-scannable Certificate Verification",
      "Exam Session Monitoring", "Re-identification During Exam", "Academic Transcript Authentication",
    ],
    howItWorks: [
      { step: "01", title: "Delivery Agent Opens Authentication Flow", desc: "At the delivery address, the agent opens the Payzon-powered delivery authentication module embedded in your logistics app. The interface displays the shipment details, expected recipient name, and initiates the verification flow — guiding the agent through OTP generation, delivery photo capture, and optional face liveness check in a simple, step-by-step interface optimised for field use even on low-end Android devices with 2G connectivity." },
      { step: "02", title: "Recipient Authenticates with OTP + Liveness", desc: "The recipient's registered mobile number receives an OTP. On OTP entry, the agent captures a face liveness check of the recipient using the phone camera — Payzon's liveness engine detects blink/smile prompts to confirm it's a live person. The face match compares against the Aadhaar photo (with consent) or the shipping address profile photo. The entire authentication takes under 30 seconds." },
      { step: "03", title: "Geo-tagged Event Recorded & Synced", desc: "On successful authentication, Payzon records a tamper-proof delivery event — including GPS coordinates, timestamp, OTP verification result, face match confidence score, agent ID, and photo of delivery. This event syncs to your logistics platform in real time via webhook. If connectivity is poor, the event is stored locally and synced when connectivity resumes — zero data loss in offline scenarios." },
      { step: "04", title: "Exam & Digital Certificate Flow for Education", desc: "For education: students authenticate before exam session start with Aadhaar-linked face match. Payzon's lightweight session monitor performs periodic face re-identification every 5–10 minutes during the exam without interrupting the test. On exam completion and result declaration, Payzon auto-generates a blockchain-anchored digital certificate with QR verification code — employers can verify authenticity by scanning in under 3 seconds." },
    ],
    benefits: [
      { icon: "📍", title: "Geo-tagged Proof of Delivery — Unbeatable in Disputes", desc: "Every delivery confirmation includes GPS-verified coordinates (accurate to 5 metres), UTC timestamp, recipient face match result, agent ID, and an encrypted delivery photo — creating an evidence package that resolves 99% of delivery disputes without human investigation." },
      { icon: "🎓", title: "Blockchain-anchored Certificate Issuance", desc: "Digital certificates issued via Payzon are anchored to a blockchain hash at issuance — making them permanently verifiable and impossible to forge. Employers scan the QR code on a certificate to see the original verified data in under 3 seconds, from anywhere in the world." },
      { icon: "👁️", title: "Lightweight Exam Proctoring Without Intrusion", desc: "Unlike traditional proctoring tools that lock down the entire device and require live human monitoring, Payzon's identity layer runs a face re-identification check every few minutes in the background — confirming the registered candidate is still in the seat without disrupting the exam flow or requiring expensive live proctors." },
      { icon: "📦", title: "98% Reduction in False Delivery Claims", desc: "Logistics companies deploying Payzon's delivery authentication report a 98% reduction in false delivery claims within 30 days. The elimination of fraudulent claims reduces customer support cost, reverse logistics cost, and insurance premiums — typically delivering ROI within the first billing month." },
      { icon: "🏭", title: "Warehouse & Loading Bay Authentication", desc: "Extend Payzon's authentication layer to warehouse receiving — verify the identity of the receiving employee, capture geo-tagged acceptance events, and create tamper-proof chain-of-custody records for high-value inventory from warehouse to final delivery." },
      { icon: "📜", title: "Bulk Certificate Generation for Scale", desc: "For large educational institutions awarding thousands of certificates per academic cycle — Payzon's bulk certificate API generates, signs, blockchain-anchors, and distributes digital certificates to students via email and WhatsApp in a single batch operation. Process 10,000 certificates in under 15 minutes." },
    ],
    stats: [
      { val: "98%", label: "Delivery Match" },
      { val: "50M+", label: "Students" },
      { val: "OTP + Bio", label: "Auth Layers" },
      { val: "T+0", label: "Cert Issuance" },
    ],
    integrations: ["Delhivery", "Shiprocket", "Shadowfax", "Ekart", "DIKSHA", "NIC Digital Certificate", "TCS iON"],
    compliance: ["DPDP Act", "NTA Exam Standards", "UGC e-Certificate", "UIDAI Consent Framework"],
    accent: "#FFAA33",
  },
  {
    id: "travel",
    label: "Travel & Hospitality",
    tag: "BOOKINGS & REFUNDS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 20L14 5l9 15H5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M10 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="18" r="1.5" fill="currentColor"/>
      </svg>
    ),
    headline: "Power every booking, upgrade, and refund with travel-grade reliability.",
    description: `Travel businesses deal with some of the most complex payment scenarios in any industry: dynamic pricing, group bookings, partial payments and upgrades, last-minute cancellations, refund policies with custom rules, and multi-party settlements across airlines, hotels, and OTAs. Payzon handles all of it — with specialized support for travel inventory payments, OTA commission splits, instant refunds on cancellations, and dynamic currency conversion for international travelers.

The travel industry's payment complexity stems from its multi-party nature. A single hotel booking on an OTA involves at least four financial parties: the traveler (who pays), the OTA platform (which collects and deducts commission), the hotel (which receives the net amount), and potentially an insurance provider (for trip protection). Each of these parties has different settlement timing expectations, different currency requirements, and different compliance obligations. Payzon's travel payment stack handles all of this in a single integration.

For airlines and large travel operators, Payzon's dynamic pricing collection capability is particularly powerful. When a traveler books at INR 4,500 but pays 3 days later at a final price of INR 5,200 due to dynamic price recalculation, Payzon manages the pre-authorization, final capture, and any refund on the differential — without any manual intervention. The same engine handles seat upgrade billing mid-trip, ancillary service payments (excess baggage, priority boarding, airport transfers), and group booking splits across multiple traveler payment methods.`,
    whoUses: ["Online Travel Agencies", "Airlines", "Hotels & Resort Chains", "Tour Operators", "Visa & Immigration Services", "Airport Services", "Cruise Lines"],
    features: [
      "Group Booking Payment Collection", "Dynamic Pricing Pre-auth & Capture", "Partial Pay & Upgrade Billing",
      "Instant Cancellation Refunds", "OTA Commission Auto-splits", "Multi-currency DCC",
      "Travel Voucher Issuance & Redemption", "Hotel Deposit Hold & Release", "Airline Ancillary Billing",
      "Travel Insurance Premium Collection", "Foreign Currency Settlement", "B2B Travel Agent Payouts",
      "Chargeback Protection for Bookings", "Pre-trip Payment Reminders", "Group Split & Shared Payment",
    ],
    howItWorks: [
      { step: "01", title: "Booking Payment & Pre-authorization", desc: "When a traveler books, Payzon collects the full payment or triggers a pre-authorization hold on the traveler's card/UPI account — freezing the funds without final settlement, allowing for dynamic price adjustments before the booking is confirmed. For partial payment models (pay 20% now, balance 7 days before travel), Payzon manages the staged collection schedule automatically with reminders and retry logic for the balance collection." },
      { step: "02", title: "Dynamic Split Across Travel Partners", desc: "Payzon's travel split engine automatically distributes the received booking amount according to your configured revenue sharing agreements. OTA commission, hotel accommodation net rate, GST to government, travel insurance premium to insurer, bed tax to municipality — all calculated and disbursed in a single automated settlement run per booking, with full lineage linking every sub-payment back to the original booking ID." },
      { step: "03", title: "Mid-trip Upgrade & Ancillary Billing", desc: "While travelers are in-trip, Payzon enables ancillary revenue collection without requiring travelers to re-enter payment details. Seat upgrades, room upgrades, extra baggage, airport transfers, guided tour add-ons — all sent as one-click payment links to the traveler's registered mobile number. Payment links work over WhatsApp, SMS, and in-app without requiring the traveler to log in again." },
      { step: "04", title: "Cancellation, Refund & Penalty Engine", desc: "When a traveler cancels, Payzon's refund policy engine applies your configured cancellation rules in real time — calculating the eligible refund based on notice period, fare type, and season. The refund is triggered programmatically and typically reaches the traveler's account within seconds. Penalty amounts are settled to the appropriate party (airline, hotel, OTA) as configured — zero manual calculation, zero delays." },
    ],
    benefits: [
      { icon: "✈️", title: "Instant Refunds Build Loyalty", desc: "Customers who receive refunds within seconds of cancellation are 3x more likely to rebook on the same platform. Payzon's instant refund capability — for cancellations, overbookings, and service failures — transforms the most painful customer service interaction into a brand-building moment." },
      { icon: "💱", title: "Dynamic Currency Conversion for 150+ Countries", desc: "International travelers see prices in their home currency during the booking flow. Payzon handles real-time FX conversion with competitive rates, FEMA-compliant cross-border settlement, and monthly FX reconciliation reports — enabling your travel platform to serve global customers without any additional compliance setup." },
      { icon: "🏨", title: "Hotel Security Deposit Management", desc: "Collect and manage hotel security deposits with Payzon's hold-and-capture mechanism. The deposit is blocked on the guest's payment method at check-in and automatically released at checkout if no charges apply — or captured for damages with proper digital documentation. Zero cash handling, zero deposit disputes." },
      { icon: "🎫", title: "Travel Voucher & Credit Shell System", desc: "Issue, track, and redeem digital travel vouchers, promotional credits, and credit shell amounts for cancelled bookings. Payzon's voucher management API handles issuance, balance tracking, partial redemption, expiry enforcement, and anti-fraud controls — fully integrated with your booking engine." },
      { icon: "✈️ ", title: "Airline Ancillary Revenue Optimization", desc: "Payzon's ancillary billing engine enables airlines to collect for seat selection, baggage, priority boarding, lounge access, and meal preferences via payment links sent before and during travel — increasing ancillary revenue per passenger by up to 40% compared to at-airport collection." },
      { icon: "🧾", title: "B2B Travel Agent Payouts & Commissions", desc: "Manage commission payouts to your network of B2B travel agents, corporate account managers, and affiliate partners — with configurable commission structures, booking-linked payout triggers, and consolidated monthly settlement statements per agent." },
    ],
    stats: [
      { val: "3s", label: "Refund Time" },
      { val: "150+", label: "Currencies" },
      { val: "99.7%", label: "Booking Success" },
      { val: "Zero", label: "Overbilling" },
    ],
    integrations: ["Amadeus", "Sabre", "Travelport", "RateGain", "Cleartrip API", "MakeMyTrip API", "Booking.com Partner"],
    compliance: ["RBI FEMA", "IATA BSP Ready", "GST TCS Compliant", "DGCA Refund Rules"],
    accent: "#38C8FF",
  },
  {
    id: "gaming",
    label: "Gaming & Esports",
    tag: "IN-GAME & TOURNAMENTS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="22" height="13" rx="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M10 14v4M8 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="14" r="1.3" fill="currentColor"/>
        <circle cx="21" cy="17" r="1.3" fill="currentColor"/>
      </svg>
    ),
    headline: "Payments as fast as your gameplay — built for the gaming economy.",
    description: `The gaming economy runs on micro-transactions, tournament entry fees, in-game currency purchases, and real-money prize payouts — and every millisecond of payment latency costs you player engagement. Payzon is built for gaming-grade payment speed: sub-second transaction processing for in-game purchases, instant tournament prize payouts to thousands of winners simultaneously, secure wallet top-ups with zero friction, and real-money gaming compliance for skill-based gaming platforms operating in India.

India's gaming market is one of the fastest-growing in the world — with over 450 million gamers, a real-money gaming (RMG) industry generating $2.5 billion annually, and esports prize pools crossing ₹100 crore per year, the payment infrastructure demands are immense. Payzon's gaming payment stack is designed from the ground up for this sector's unique needs: extreme transaction frequency, instant payout expectations, regulatory complexity across Indian states, and mandatory TDS compliance on prize winnings above ₹10,000.

For skill gaming platforms (rummy, fantasy sports, chess, trivia), Payzon provides a complete RMG compliance stack — including TDS deduction and certificate generation on prize winnings, state-wise eligibility checks (automatically blocking players from states where RMG is prohibited), and the platform wallet architecture required for RBI-compliant real-money gaming operations. This dramatically reduces the legal and compliance infrastructure cost of running a legitimate skill gaming platform in India.`,
    whoUses: ["Mobile Game Studios", "Esports Tournament Platforms", "Fantasy Sports Apps", "Skill Gaming Platforms (Rummy/Chess)", "Game Streaming Platforms", "Virtual Goods Marketplaces", "Game Publishers"],
    features: [
      "In-Game Currency Purchase (sub-second)", "Tournament Entry Fee Collection", "Prize Payout Engine (bulk)",
      "Player Wallet Top-up & Withdrawal", "RMG Compliance Stack", "Anti-fraud for Gaming Transactions",
      "Batch Prize Disbursement (10K+ simultaneous)", "Leaderboard Payment API", "Parental Consent Payment Flows",
      "TDS Auto-deduction on Prizes", "State-wise RMG Eligibility Check", "Game Currency Exchange Rate Engine",
      "Season Pass & DLC Billing", "Esports Sponsorship Payouts", "Creator Revenue Share",
    ],
    howItWorks: [
      { step: "01", title: "Player Deposits to Gaming Wallet", desc: "Players top up their in-game wallet via UPI (including UPI Lite for small amounts), all credit/debit cards, or net banking. Funds reflect in their wallet balance in under 500ms — fast enough that wallet loading never interrupts the game session. Payzon's gaming wallet API supports instant balance queries with sub-10ms response times, enabling real-time balance display within your game UI without perceptible delay." },
      { step: "02", title: "Tournament Entry & Escrow Lock", desc: "When a player joins a tournament, their entry fee is deducted from their wallet and locked in a tournament-specific escrow account. The total prize pool is calculated in real time as entries come in and displayed to players on the tournament lobby screen via Payzon's prize pool API. Funds remain locked until tournament completion — players who withdraw before the tournament starts receive automatic refunds per your configured policy." },
      { step: "03", title: "Gameplay, Scoring & Real-time Payouts", desc: "As the tournament progresses, your game backend updates the leaderboard via Payzon's tournament scoring API. Payzon tracks the current prize distribution in real time based on your configured prize structure (top 10 players win, proportional distribution, guaranteed prizes, etc.). At tournament conclusion, prize allocations are finalised in under 2 seconds and disbursement begins immediately to all winners simultaneously." },
      { step: "04", title: "Instant Prize Payout with Compliance", desc: "Winners receive prize money in their registered bank account within seconds of the tournament concluding. For prizes above ₹10,000, Payzon automatically deducts TDS at the applicable rate (30% for net winnings, per current tax rules), generates a TDS certificate for the player, and files TDS with the government on your behalf. State-wise eligibility checks run automatically — players from restricted states are blocked from real-money tournaments at wallet creation, not at payout." },
    ],
    benefits: [
      { icon: "🎮", title: "Sub-500ms In-game Transactions", desc: "In-game currency purchases, item buys, and wallet deductions complete in under 500ms — fast enough to feel instantaneous within a game session. Payzon's gaming transaction API is optimised for high concurrency, handling thousands of simultaneous micro-transactions without degradation during peak tournament events." },
      { icon: "🏆", title: "10,000+ Concurrent Prize Payouts", desc: "At the conclusion of large esports tournaments or fantasy sports contests, Payzon disbursed prizes to 10,000+ winners simultaneously — each receiving their exact prize amount directly to their registered bank account or UPI ID within seconds of the results being declared. Zero manual processing, zero delays." },
      { icon: "🛡️", title: "Complete RMG Compliance Stack", desc: "Payzon's RMG compliance module handles everything: platform wallet structure compliant with RBI guidelines, TDS deduction and certificate generation on winnings, GST calculation on platform fee, state-wise eligibility enforcement (blocking Andhra Pradesh, Telangana, Assam, etc.), and annual filing support — letting your team focus on the game, not the compliance." },
      { icon: "👶", title: "Minor Protection & Parental Consent", desc: "Age verification at registration, parental consent flows for users under 18, spending limits for minor accounts, and automatic blocking of real-money features for underage users — fully compliant with DPDP Act requirements and platform store guidelines for Android and iOS distribution." },
      { icon: "🔮", title: "Anti-fraud Engine for Gaming", desc: "Gaming platforms face unique fraud patterns: bonus abuse, multi-accounting, chip-dumping in poker, and collusion in tournaments. Payzon's gaming-specific anti-fraud engine detects these patterns using device fingerprinting, behavioural analysis, network relationship mapping, and transaction velocity checks — flagging suspicious accounts before payouts are triggered." },
      { icon: "🎬", title: "Creator & Streamer Revenue Payments", desc: "Pay gaming creators, esports commentators, and stream hosts for their platform contributions — sponsorship fees, revenue shares, and tournament appearance fees — via Payzon's creator payout API with automated TDS deduction, payout statements, and wallet-to-bank settlement in a fully compliant creator economy payment stack." },
    ],
    stats: [
      { val: "<500ms", label: "Transaction Speed" },
      { val: "10K+", label: "Concurrent Payouts" },
      { val: "TDS Auto", label: "Deduction" },
      { val: "Zero Lag", label: "Wallet Top-up" },
    ],
    integrations: ["Unity SDK", "Unreal Plugin", "Firebase", "PlayFab", "GameSparks", "Dream11 API", "MyTeam11"],
    compliance: ["RBI Prepaid Payment", "TDS 194BA", "GST on Gaming", "DPDP Minor Protection"],
    accent: "#8AFF45",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FeatureTag({ text, accent }: { text: string; accent: string }) {
  return (
    <span className="feature-tag" style={{ "--accent": accent } as React.CSSProperties}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ marginRight: 5 }}>
        <circle cx="4" cy="4" r="3" fill={accent} opacity="0.3"/>
        <circle cx="4" cy="4" r="1.5" fill={accent}/>
      </svg>
      {text}
    </span>
  );
}

function StepCard({ step, title, desc, accent }: { step: string; title: string; desc: string; accent: string }) {
  return (
    <div className="step-card">
      <div className="step-number" style={{ color: accent }}>{step}</div>
      <div className="step-content">
        <div className="step-title">{title}</div>
        <div className="step-desc">{desc}</div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="benefit-card">
      <span className="benefit-icon">{icon}</span>
      <div>
        <div className="benefit-title">{title}</div>
        <div className="benefit-desc">{desc}</div>
      </div>
    </div>
  );
}

function StatPill({ val, label, accent }: { val: string; label: string; accent: string }) {
  return (
    <div className="stat-pill" style={{ "--accent": accent } as React.CSSProperties}>
      <span className="stat-val">{val}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

// ─── Accordion Row ────────────────────────────────────────────────────────────

function IndustryRow({ item, isOpen, onToggle, index }: {
  item: typeof INDUSTRIES[0]; isOpen: boolean; onToggle: () => void; index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`industry-row ${isOpen ? "open" : ""}`}
      style={{ "--accent": item.accent, animationDelay: `${index * 0.06}s` } as React.CSSProperties}
    >
      {/* Header */}
      <button className="industry-header" onClick={onToggle} aria-expanded={isOpen}>
        <div className="industry-header-left">
          <span className="industry-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="industry-icon" style={{ color: item.accent }}>{item.icon}</span>
          <span className="industry-name">{item.label}</span>
          <span className="industry-tag">{item.tag}</span>
        </div>
        <span className="industry-toggle">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="toggle-icon">
            <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M6 10h8M10 6v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="toggle-lines"/>
          </svg>
        </span>
      </button>

      {/* Expandable Content */}
      <div className="industry-content" style={{ height }} aria-hidden={!isOpen}>
        <div ref={contentRef} className="industry-content-inner">

          {/* ── Overview Row ── */}
          <div className="overview-row">
            <div className="overview-left">
              <h3 className="content-headline" style={{ color: item.accent }}>{item.headline}</h3>

              {/* Multi-paragraph description */}
              {item.description.split("\n\n").map((para, i) => (
                <p key={i} className="content-desc">{para}</p>
              ))}

              {/* Who Uses This */}
              <div className="section-label" style={{ marginTop: 24 }}>Who Uses This</div>
              <div className="who-uses-list">
                {item.whoUses.map((w) => (
                  <span key={w} className="who-chip" style={{ "--accent": item.accent } as React.CSSProperties}>{w}</span>
                ))}
              </div>

              {/* Feature Tags */}
              <div className="section-label" style={{ marginTop: 24 }}>Key Capabilities</div>
              <div className="feature-list">
                {item.features.map((f) => (
                  <FeatureTag key={f} text={f} accent={item.accent} />
                ))}
              </div>

              {/* Compliance & Integrations */}
              <div className="compliance-row">
                <div>
                  <div className="section-label" style={{ marginBottom: 10 }}>Compliance</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {item.compliance.map((c) => (
                      <span key={c} className="compliance-badge">{c}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="section-label" style={{ marginBottom: 10 }}>Works With</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {item.integrations.map((int) => (
                      <span key={int} className="integration-badge">{int}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="overview-stats">
              {item.stats.map((s) => (
                <StatPill key={s.label} val={s.val} label={s.label} accent={item.accent} />
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="section-divider" style={{ background: `linear-gradient(90deg, ${item.accent}30, transparent)` }} />

          {/* ── How It Works ── */}
          <div className="section-label" style={{ marginTop: 32 }}>How It Works</div>
          <div className="steps-grid">
            {item.howItWorks.map((s) => (
              <StepCard key={s.step} {...s} accent={item.accent} />
            ))}
          </div>

          {/* ── Divider ── */}
          <div className="section-divider" style={{ background: `linear-gradient(90deg, ${item.accent}30, transparent)`, marginTop: 36 }} />

          {/* ── Key Benefits ── */}
          <div className="section-label" style={{ marginTop: 32 }}>Key Benefits</div>
          <div className="benefits-grid">
            {item.benefits.map((b) => (
              <BenefitCard key={b.title} {...b} />
            ))}
          </div>

          {/* ── CTA Row ── */}
          <div className="cta-row">
            <a href="https://payzonapi.com/account/sign-in" className="cta-link" style={{ "--accent": item.accent } as React.CSSProperties}>
              Use {item.label} Integration
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/contact" className="cta-link-ghost" style={{ "--accent": item.accent } as React.CSSProperties}>
              Get Contact 
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Background Decorations ───────────────────────────────────────────────────

function BgDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      <div className="grid-lines" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <svg className="wave-svg" viewBox="0 0 900 600" fill="none" preserveAspectRatio="xMidYMid slice">
        <path d="M0 300 Q150 100 300 300 T600 300 T900 300" stroke="#C8FF00" strokeWidth="0.5" opacity="0.15" fill="none"/>
        <path d="M0 350 Q200 150 400 350 T800 350" stroke="#7C3AED" strokeWidth="0.5" opacity="0.15" fill="none"/>
        <path d="M0 400 Q250 200 500 400 T1000 400" stroke="#C8FF00" strokeWidth="0.3" opacity="0.08" fill="none"/>
      </svg>
    </div>
  );
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default function UseCasesPage() {
  const [openId, setOpenId] = useState<string | null>("ecommerce");
  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .page {
          min-height: 100vh;
          background: #07071A;
          color: #E8E8FF;
          font-family: 'Sora', 'DM Sans', system-ui, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        /* ── Background ── */
        .bg-decor { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .grid-lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(200,255,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,255,0,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; }
        .glow-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%);
          top: -100px; left: -150px;
        }
        .glow-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(200,255,0,0.08) 0%, transparent 70%);
          bottom: 0; right: -100px;
        }
        .wave-svg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }

        /* ── Container ── */
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }

        /* ── Header Section ── */
        .section-header { padding: 100px 0 36px; }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(200,255,0,0.08); border: 1px solid rgba(200,255,0,0.25);
          border-radius: 6px; padding: 6px 14px; font-size: 11px; font-weight: 700;
          letter-spacing: 0.14em; color: #C8FF00; text-transform: uppercase; margin-bottom: 28px;
        }
        .eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #C8FF00;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.7); } }
        .headline {
          font-size: clamp(42px, 6vw, 76px); font-weight: 800; line-height: 1.02;
          letter-spacing: -0.03em; color: #F0F0FF; margin-bottom: 20px;
        }
        .headline em {
          font-style: normal;
          background: linear-gradient(135deg, #C8FF00 0%, #7BFF00 50%, #C8FF00 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .subheadline {
          font-size: 17px; line-height: 1.65; color: rgba(220,220,255,0.55);
          max-width: 560px; font-weight: 400;
        }

        /* ── Restricted Notice Banner ── */
        .restricted-notice {
          margin: 32px 0 0;
          background: linear-gradient(135deg, rgba(255,40,40,0.07), rgba(180,10,10,0.1));
          border: 1px solid rgba(255,60,60,0.28);
          border-radius: 14px; padding: 16px 22px;
          display: flex; align-items: center; gap: 14px;
          position: relative; overflow: hidden;
        }
        .restricted-notice::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,60,60,0.6), transparent);
        }
        .restricted-notice-icon {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
          background: rgba(255,60,60,0.1); border: 1px solid rgba(255,60,60,0.3);
          display: flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .restricted-notice-text { flex: 1; }
        .restricted-notice-title {
          font-size: 12.5px; font-weight: 700; color: #FF9090;
          letter-spacing: 0.02em; margin-bottom: 3px;
        }
        .restricted-notice-sub {
          font-size: 11.5px; color: rgba(255,180,180,0.55); line-height: 1.5;
        }
        .restricted-notice-sub strong { color: rgba(255,130,130,0.85); font-weight: 700; }
        .restricted-btn {
          flex-shrink: 0;
          background: rgba(255,60,60,0.1); border: 1px solid rgba(255,60,60,0.32);
          border-radius: 8px; padding: 8px 16px; font-size: 12px; font-weight: 700;
          color: #FF8080; text-decoration: none; display: inline-flex; align-items: center;
          gap: 6px; white-space: nowrap; transition: all 0.2s;
        }
        .restricted-btn:hover {
          background: rgba(255,60,60,0.18); border-color: rgba(255,80,80,0.55);
          transform: translateY(-1px);
        }

        /* ── Row Wrapper ── */
        .industries-list {
          padding-bottom: 100px; display: flex; flex-direction: column; gap: 0;
        }
        .industry-row {
          border-top: 1px solid rgba(200,255,0,0.1);
          transition: border-color 0.3s; animation: slideUp 0.5s ease both;
        }
        .industry-row:last-child { border-bottom: 1px solid rgba(200,255,0,0.1); }
        .industry-row.open { border-color: rgba(200,255,0,0.2); }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Row Header Button ── */
        .industry-header {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 22px 0; background: none; border: none; cursor: pointer; gap: 16px;
          transition: opacity 0.2s;
        }
        .industry-header:hover { opacity: 0.85; }
        .industry-header-left { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .industry-index {
          font-size: 11px; font-weight: 700; color: rgba(200,220,255,0.3);
          letter-spacing: 0.08em; min-width: 22px;
        }
        .industry-icon {
          display: flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 10px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0; transition: background 0.3s, border-color 0.3s;
        }
        .open .industry-icon { background: rgba(200,255,0,0.06); border-color: rgba(200,255,0,0.2); }
        .industry-name {
          font-size: clamp(18px, 2.5vw, 24px); font-weight: 700; color: #E8E8FF;
          letter-spacing: -0.02em; transition: color 0.3s;
        }
        .open .industry-name { color: #fff; }
        .industry-tag {
          font-size: 10px; font-weight: 600; letter-spacing: 0.12em;
          color: rgba(200,220,255,0.35); text-transform: uppercase;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 4px; padding: 3px 8px; display: none;
        }
        @media (min-width: 640px) { .industry-tag { display: inline-block; } }
        .industry-toggle { color: rgba(200,220,255,0.4); flex-shrink: 0; display: flex; transition: color 0.3s; }
        .open .industry-toggle { color: var(--accent); }
        .toggle-lines {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); transform-origin: center;
        }
        .open .toggle-lines { transform: rotate(45deg); }

        /* ── Expandable Panel ── */
        .industry-content { height: 0; overflow: hidden; transition: height 0.45s cubic-bezier(0.4, 0, 0.2, 1); }
        .industry-content-inner { padding-bottom: 40px; }

        /* ── Overview Row ── */
        .overview-row {
          display: grid; grid-template-columns: 1fr; gap: 28px; padding-top: 8px;
        }
        @media (min-width: 760px) {
          .overview-row { grid-template-columns: 1fr 200px; gap: 48px; align-items: start; }
        }
        .content-headline {
          font-size: clamp(20px, 2.8vw, 28px); font-weight: 700;
          letter-spacing: -0.025em; margin-bottom: 16px; line-height: 1.2;
        }
        .content-desc {
          font-size: 14.5px; line-height: 1.85; color: rgba(220,220,255,0.6);
          max-width: 680px; margin-bottom: 16px;
        }
        .content-desc:last-of-type { margin-bottom: 0; }
        .section-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(200,220,255,0.35); margin-bottom: 12px;
        }

        /* ── Who Uses ── */
        .who-uses-list { display: flex; flex-wrap: wrap; gap: 7px; }
        .who-chip {
          font-size: 11px; font-weight: 700; letter-spacing: 0.04em;
          color: var(--accent); background: rgba(255,255,255,0.04);
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
          border-radius: 20px; padding: 4px 12px; text-transform: uppercase;
        }

        /* ── Feature Tags ── */
        .feature-list { display: flex; flex-wrap: wrap; gap: 8px; }
        .feature-tag {
          display: inline-flex; align-items: center; font-size: 11.5px; font-weight: 600;
          color: rgba(220,220,255,0.72); background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09); border-radius: 20px; padding: 5px 11px;
          letter-spacing: 0.01em; transition: border-color 0.2s, background 0.2s; cursor: default;
        }
        .feature-tag:hover { background: rgba(255,255,255,0.07); border-color: var(--accent); }

        /* ── Compliance / Integration Row ── */
        .compliance-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px;
          padding: 20px 22px;
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
        }
        @media (max-width: 600px) { .compliance-row { grid-template-columns: 1fr; gap: 18px; } }
        .compliance-badge {
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(200,255,0,0.8); background: rgba(200,255,0,0.06);
          border: 1px solid rgba(200,255,0,0.2); border-radius: 4px; padding: 3px 8px;
        }
        .integration-badge {
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.02em;
          color: rgba(200,220,255,0.6); background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09); border-radius: 4px; padding: 3px 8px;
        }

        /* ── Overview Stats ── */
        .overview-stats {
          display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px;
        }
        @media (min-width: 760px) { .overview-stats { flex-direction: column; align-items: flex-end; } }
        .stat-pill {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px; padding: 12px 18px; display: flex; flex-direction: column;
          gap: 3px; min-width: 88px; transition: border-color 0.3s, background 0.3s;
        }
        .stat-pill:hover { border-color: var(--accent); background: rgba(255,255,255,0.06); }
        .stat-val { font-size: 18px; font-weight: 800; color: var(--accent); letter-spacing: -0.02em; line-height: 1; }
        .stat-label {
          font-size: 9px; font-weight: 700; color: rgba(200,220,255,0.38);
          text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px;
        }

        /* ── Divider ── */
        .section-divider { height: 1px; width: 100%; opacity: 0.6; margin-top: 12px; }

        /* ── Steps Grid ── */
        .steps-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
        @media (min-width: 600px) { .steps-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .steps-grid { grid-template-columns: repeat(4, 1fr); } }
        .step-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 20px 18px; display: flex; gap: 14px;
          align-items: flex-start; transition: border-color 0.2s, background 0.2s;
        }
        .step-card:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.14); }
        .step-number { font-size: 22px; font-weight: 900; letter-spacing: -0.03em; line-height: 1; flex-shrink: 0; opacity: 0.7; }
        .step-title { font-size: 13px; font-weight: 700; color: #E8E8FF; margin-bottom: 6px; letter-spacing: -0.01em; }
        .step-desc { font-size: 12.5px; line-height: 1.72; color: rgba(200,210,255,0.5); }

        /* ── Benefits Grid ── */
        .benefits-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
        @media (min-width: 600px) { .benefits-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .benefits-grid { grid-template-columns: 1fr 1fr 1fr; } }
        .benefit-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 20px 18px; display: flex; gap: 14px;
          align-items: flex-start; transition: border-color 0.2s, background 0.2s;
        }
        .benefit-card:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.14); }
        .benefit-icon { font-size: 22px; flex-shrink: 0; line-height: 1; margin-top: 1px; }
        .benefit-title { font-size: 13.5px; font-weight: 700; color: #E8E8FF; margin-bottom: 5px; letter-spacing: -0.01em; }
        .benefit-desc { font-size: 12.5px; line-height: 1.65; color: rgba(200,210,255,0.52); }

        /* ── CTA Row ── */
        .cta-row {
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin-top: 32px;
        }
        .cta-link {
          display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700;
          color: var(--accent); text-decoration: none; padding: 10px 18px;
          background: rgba(200,255,0,0.07); border: 1px solid rgba(200,255,0,0.22);
          border-radius: 8px; letter-spacing: 0.01em;
          transition: background 0.2s, border-color 0.2s, gap 0.2s; white-space: nowrap;
        }
        .cta-link:hover { background: rgba(200,255,0,0.13); border-color: var(--accent); gap: 13px; }
        .cta-link-ghost {
          display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600;
          color: rgba(200,220,255,0.55); text-decoration: none; padding: 10px 16px;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
          transition: border-color 0.2s, color 0.2s;
        }
        .cta-link-ghost:hover { border-color: rgba(255,255,255,0.25); color: rgba(200,220,255,0.85); }

        /* ── Restricted strip between list and bottom CTA ── */
        .restricted-strip {
          margin: 0 24px 60px;
          max-width: 1100px;
          margin-left: auto; margin-right: auto;
          background: rgba(255,40,40,0.04); border: 1px solid rgba(255,60,60,0.2);
          border-radius: 16px; padding: 24px 32px;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
          flex-wrap: wrap; position: relative; z-index: 1;
        }
        .restricted-strip::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,60,60,0.5), transparent);
        }
        .restricted-strip-left { display: flex; align-items: center; gap: 16px; }
        .restricted-strip-icon {
          width: 48px; height: 48px; border-radius: 12px; flex-shrink: 0;
          background: rgba(255,60,60,0.1); border: 1px solid rgba(255,60,60,0.3);
          display: flex; align-items: center; justify-content: center; font-size: 22px;
        }
        .restricted-strip-title { font-size: 15px; font-weight: 800; color: #FFB0B0; margin-bottom: 5px; letter-spacing: -0.01em; }
        .restricted-strip-sub { font-size: 13px; color: rgba(200,160,160,0.55); line-height: 1.55; max-width: 600px; }
        .restricted-strip-sub strong { color: rgba(255,120,120,0.8); }
        .btn-restricted {
          background: rgba(255,60,60,0.1); color: #FF8080;
          border: 1px solid rgba(255,60,60,0.35); border-radius: 10px;
          padding: 12px 24px; font-size: 14px; font-weight: 700;
          cursor: pointer; text-decoration: none; display: inline-flex; align-items: center;
          gap: 8px; transition: all 0.2s; white-space: nowrap;
        }
        .btn-restricted:hover {
          background: rgba(255,60,60,0.18); border-color: rgba(255,80,80,0.6);
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,60,60,0.12);
        }

        /* ── Bottom CTA ── */
        .bottom-cta {
          text-align: center; padding: 80px 24px 100px;
          border-top: 1px solid rgba(200,255,0,0.08);
          position: relative; z-index: 1;
        }
        .bottom-cta h2 {
          font-size: clamp(28px, 4vw, 48px); font-weight: 800;
          letter-spacing: -0.03em; color: #F0F0FF; margin-bottom: 16px;
        }
        .bottom-cta p { color: rgba(220,220,255,0.5); font-size: 16px; margin-bottom: 36px; }
        .cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .btn-primary {
          background: #C8FF00; color: #07071A; border: none; border-radius: 10px;
          padding: 14px 32px; font-size: 15px; font-weight: 800; cursor: pointer;
          letter-spacing: -0.01em; transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(200,255,0,0.3); }
        .btn-secondary {
          background: transparent; color: #E8E8FF; border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px; padding: 14px 32px; font-size: 15px; font-weight: 600;
          cursor: pointer; letter-spacing: -0.01em;
          transition: border-color 0.2s, background 0.2s; text-decoration: none;
        }
        .btn-secondary:hover { border-color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.04); }

        @media (max-width: 480px) {
          .restricted-notice { flex-wrap: wrap; }
          .restricted-btn { width: 100%; justify-content: center; }
          .restricted-strip { flex-direction: column; align-items: flex-start; }
          .restricted-strip-left { flex-direction: column; align-items: flex-start; }
          .btn-restricted { width: 100%; justify-content: center; }
        }
      `}</style>

      <Header />

      <div className="page">
        <BgDecor />

        <div style={{ marginTop: "82px" }} className="container">
          {/* ── Hero Header ── */}
          <header className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Payment Solutions
            </div>
            <h1 className="headline">
              Powering <em>Every</em><br />Industry.
            </h1>
            <p className="subheadline">
              Payzon integrates seamlessly across sectors — whether you're billing students,
              settling marketplace vendors, running gaming tournaments, or collecting SaaS subscriptions.
              One API, every use case.
            </p>

            {/* ── Restricted Categories Notice ── */}
       
          </header>

          {/* ── Accordion List ── */}
          <section className="industries-list" aria-label="Industry use cases">
            {INDUSTRIES.map((item, i) => (
              <IndustryRow
                key={item.id}
                item={item}
                index={i}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </section>
        </div>

        {/* ── Restricted Services Strip ── */}
        <div className="restricted-strip">
          <div className="restricted-strip-left">
            <div className="restricted-strip-icon">🚫</div>
            <div>
              <div className="restricted-strip-title">Some Business Categories Are Not Eligible</div>
              <div className="restricted-strip-sub">
                Payzon operates under <strong>RBI Payment Aggregator</strong> licensing and NPCI guidelines.
                Certain high-risk business types — including online gambling, adult content, unregulated crypto trading,
                and weapons sales — are <strong>strictly prohibited</strong> from using Payzon's payment services.
                Review the full restricted categories policy before applying.
              </div>
            </div>
          </div>
          <a href="/Restricted-Services" className="btn-restricted">
            View Full Restricted Policy
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h10M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="bottom-cta">
          <div className="container">
            <h2>Ready to integrate Payzon?</h2>
            <p>Start accepting payments in under 30 minutes. No hidden fees. No lock-ins.</p>
            <div className="cta-buttons">
              <a href="https://payzonapi.com/account/sign-in" className="btn-primary">Get API Keys →</a>
              <a href="/contact" className="btn-secondary">View Docs</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}