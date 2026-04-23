import { FooterLinkGroup } from "@/types";

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
        { label: "Sign In", href: "https://payzonapi.com/account/sign-in" },
      { label: "About Us", href: "/our-profile" },
      { label: "Terms of Use", href: "/terms-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy " },
      { label: "Refund & Cancellation", href: "/refund-cancellation" },

    ],
  },
  {
    title: "Services",
    links: [
       { label: "PayIn Sevices ", href: "/services/pay-in" },
      { label: "PayOut Services", href: "/services/pay-out" },
      { label: " QR Payment ", href: "/services/qr-payment" },
      { label: "Virtual Account", href: "/services/virtual-account" },
      { label: "Restricted Services", href: "/Restricted-Services" },
      
    ],
  },
];

    // { label: "Contact Us", href: "/contact" },