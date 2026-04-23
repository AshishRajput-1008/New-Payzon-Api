import { PolicyFeature } from "@/types";
import icon_browser from "@/public/assets/images/Policy/icon_browser.svg";
import icon_chat from "@/public/assets/images/Policy/icon_chat.svg";
import icon_api from "@/public/assets/images/Policy/icon_api.svg";
import icon_layer from "@/public/assets/images/Policy/icon_layer.svg";
import shape_1 from "@/public/assets/images/Policy/shape_1.webp";
import shape_2 from "@/public/assets/images/Policy/shape_2.webp";
import shape_3 from "@/public/assets/images/Policy/shape_3.webp";

export const policyFeatures: PolicyFeature[] = [
  {
    icon: icon_browser.src,
    bgImage: shape_1.src,
    title: "High Success Rate",
    description: "Reliable payment processing with maximum approval ratio.",
  },
  {
    icon: icon_chat.src,
    bgImage: shape_2.src,
    title: "Easy to Integrate",
    description: "Quick API setup for PayIn, PayOut, QR & VA services.",
  },
  {
    icon: icon_api.src,
    bgImage: shape_3.src,
    title: "Secure Transactions",
    description: "Advanced security layers for safe digital payments.",
  },
  {
    icon: icon_layer.src,
    bgImage: shape_2.src,
    title: "Faster Processing",
    description: "Instant settlements and smooth transaction flow.",
  },
];