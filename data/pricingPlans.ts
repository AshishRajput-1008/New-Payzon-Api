import { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    title: "General",
    description: "Our Commission Deducted, Your Money Deposited —",
    features: [
      "Single Banking Day to Your Merchant Account.",
      "When the funds turnover reaches $300,000.",
    ],
    ctaLabel: "Connect Now",
    ctaHref: "/contact",
    variant: "general",
    priceItems: [
      { label: null, value: "1,9%" },
      { label: null, value: "Get everything you need to manage payments" },
      { label: null, value: "Finto mobile app is always available" },
      { label: null, value: "No setup fees, monthly/hidden" },
    ],
  },
  {
    title: "Individual",
    description: "Apply or write to the Chat to reduce the tariff if:",
    features: [
      "Quick Deposits—Optimal for Speedy Transactions.",
      "When the funds turnover reaches $300,000.",
    ],
    ctaLabel: "Apply now",
    ctaHref: "/contact",
    variant: "individual",
    priceItems: [
      { label: "Charity", value: "0%" },
      { label: "Housing and public utilities, condominium associations", value: "1%" },
      { label: "Online landing Working Process", value: "1%" },
    ],
  },
];