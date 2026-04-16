import { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "#",
    active: true,
    children: [
      { label: "Investment Solution", href: "/" },
      { label: "Online Banking", href: "/online-banking" },
      { label: "Payment Solutions", href: "/payment-solutions", active: true },
      { label: "Insurance", href: "/insurance" },
      { label: "Car Insurance", href: "/car-insurance" },
      { label: "Financial Consulting", href: "/financial-consulting" },
    ],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Our Services", href: "/services" },
      { label: "Service Details", href: "/service-details" },
    ],
  },
  {
    label: "Projects",
    href: "#",
    children: [
      { label: "Our Projects", href: "/projects" },
      { label: "Project Details", href: "/project-details" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Help Center", href: "/contact" },
      {
        label: "Blogs",
        href: "#",
        children: [
          { label: "Our Blogs", href: "/blog" },
          { label: "Blog Details", href: "/blog-details" },
        ],
      },
      {
        label: "Career",
        href: "#",
        children: [
          { label: "Join Us", href: "/career" },
          { label: "Job Details", href: "/career-details" },
        ],
      },
      { label: "404 Error", href: "/404" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];