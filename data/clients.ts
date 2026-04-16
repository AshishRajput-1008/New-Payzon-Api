import { Client } from "@/types";

const baseLogos = [
  { logo: "/assets/images/clients/client_logo_11.webp", alt: "Client Logo" },
  { logo: "/assets/images/clients/client_logo_12.webp", alt: "Client Logo" },
  { logo: "/assets/images/clients/client_logo_13.webp", alt: "Client Logo" },
  { logo: "/assets/images/clients/client_logo_14.webp", alt: "Client Logo" },
  { logo: "/assets/images/clients/client_logo_15.webp", alt: "Client Logo" },
  { logo: "/assets/images/clients/client_logo_16.webp", alt: "Client Logo" },
  { logo: "/assets/images/clients/client_logo_17.webp", alt: "Client Logo" },
  { logo: "/assets/images/clients/client_logo_18.webp", alt: "Client Logo" },
];

export const clients: Client[] = [...baseLogos, ...baseLogos]; // duplicated for infinite scroll effect