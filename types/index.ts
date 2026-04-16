export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
  active?: boolean;
}

export interface PaymentMethod {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface Client {
  logo: string;
  alt: string;
}

export interface BlogPost {
  image: string;
  category: string;
  date: string;
  title: string;
  href: string;
}

export interface PricingPlan {
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  variant: "general" | "individual";
  priceItems: { label?: string; value: string }[];
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface ProcessStep {
  number: number;
  title: string;
}

export interface PolicyFeature {
  icon: string;
  bgImage: string;
  title: string;
  description: string;
}

export interface Industry {
  icon: string;
  title: string;
  content: string;
}