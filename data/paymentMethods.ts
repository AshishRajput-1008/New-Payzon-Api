import { PaymentMethod } from "@/types";
import paymentCard from "@/public/assets/images/services/icon_payment_card.svg";
import houricon from "@/public/assets/images/services/icon_pay_24.svg";
import qrcode from "@/public/assets/images/services/icon_qr_code.svg";
import cardicon from "@/public/assets/images/services/icon_chart_3.svg";

export const paymentMethods: PaymentMethod[] = [
  {
    icon: paymentCard.src,
    title: "PAY-IN",
    description: "High success rate payment collection solutions with smooth and reliable transaction processing.",
    href: "/services/pay-in",
  },

  {
    icon: houricon.src,
    title: "PAY-OUT",
    description: "Faster payouts with instant transfers, quick settlements, and reliable bank account disbursement services.",
        href: "/services/pay-in",
  },

  {
    icon: qrcode.src,
    title: "QR",
    description: "Easy to integrate QR payment solutions with seamless scan, pay, and instant merchant collections.",
    href: "/services/qr-code",
  },

  {
    icon: cardicon.src,
    title: "VIRTUAL ACCOUNT",
    description: "Secure transactions with dedicated virtual accounts for smooth fund management.",
    href: "/services/virtual-account",
  },
];