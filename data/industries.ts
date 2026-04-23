import { Industry } from "@/types";
import icobox from "@/public/assets/images/uses/icon_box.svg"
import icon_graduation_cap from "@/public/assets/images/uses/icon_graduation_cap.svg"
import icon_gadget from "@/public/assets/images/uses/icon_gadget.svg"
import icobox2 from "@/public/assets/images/uses/icon_devices.svg"


export const industries: Industry[] = [
  {
    icon: icobox.src,
    title: "E-commerce",
    content:
      "Accept customer payments via Pay In, auto-generate QR codes at checkout, and instantly disburse refunds or vendor payouts — all through a single integrated payment API built for online stores.",
  },
  {
    icon: icon_graduation_cap.src,
    title: "Education",
    content:
      "Collect tuition fees and course payments with Pay In, issue instant refunds via Payout, and assign Virtual Accounts per student for seamless fee tracking and automated reconciliation.",
  },
  {
    icon: icon_gadget.src,
    title: "SaaS",
    content:
      "Automate subscription billing with Pay In, manage partner and affiliate payouts at scale, and use Virtual Accounts to map each client's payments for zero-effort reconciliation.",
  },
  {
    icon: icobox2.src,
    title: "Freelancer's",
    content:
      "Share a QR code to get paid instantly on the go, receive client payments through Pay In, and withdraw earnings via Payout directly to your bank — simple, fast, and hassle-free.",
  },
];