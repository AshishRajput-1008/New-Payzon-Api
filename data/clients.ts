import { Client } from "@/types";
import  l2 from "@/public/assets/images/Blog Section/idfc.webp"
import  l3 from "@/public/assets/images/Blog Section/icici.webp"
import  l1 from "@/public/assets/images/Blog Section/hdfc2.webp"
import  l4 from "@/public/assets/images/Blog Section/kotak.webp"
import  l5 from "@/public/assets/images/Blog Section/indus4.jpg"

const baseLogos = [
  { logo: l1.src, alt: "HDFC BANK" },
  { logo: l2.src, alt: "IDFC BANK" },
  { logo: l3.src, alt: "ICICI BANK" },
  { logo: l4.src, alt: "KOTAK MAHINDRA BANK" },
  { logo: l5.src, alt: "INDUSIND BANK" }
];

export const clients: Client[] = [...baseLogos, ...baseLogos]; // duplicated for infinite scroll effect