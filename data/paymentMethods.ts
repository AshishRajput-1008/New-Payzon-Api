import { PaymentMethod } from "@/types";
import paymentCard from "@/public/assets/images/services/icon_payment_card.svg"
import houricon from "@/public/assets/images/services/icon_pay_24.svg"
import qrcode from "@/public/assets/images/services/icon_qr_code.svg"
import cardicon from "@/public/assets/images/services/icon_chart_3.svg"

// description: "Streamlining Your Purchases with Seamless Transactions.",
    // description: "Your Trusted Partner in Secure and Seamless Transactions.",
        // description: "Seamlessly Streamlining Your Financial Transactions.",

export const paymentMethods: PaymentMethod[] = [
  {
    icon: paymentCard.src,
    title: "PAY-IN",
    description: "Providing Convenient & Secure Payment Options for Need.",
    href: "/service-details",
  },
 
  {
    icon: houricon.src,
    title: "PAY-OUT",
    description: "Your Trusted Partner in Secure and Seamless Transactions.",
    href: "/service-details",
  },

  {
    icon: qrcode.src,
    title: "QR",
    description: "Instant Transactions with a Simple Scan Made Possible.",
    href: "/service-details",
  },
  {
   icon: cardicon.src,
    title: "VIRTUAL ACCOUNT",
    description: "Breakdown Your Purchases into Manageable Parts.",
    href: "/service-details",
  },
];