import { FooterLinkGroup } from "@/types";

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/career" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Accept Payments",
    links: [
      { label: "Payzon POS", href: "#" },
      { label: "Payment Pages", href: "#" },
      { label: "Payment Links", href: "#" },
      { label: "QR Codes", href: "#" },
      { label: "Payment Gateway", href: "#" },
    ],
  },
];