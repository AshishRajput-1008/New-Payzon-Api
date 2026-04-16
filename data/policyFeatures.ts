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
    title: "Fast & Secure",
    description: "Prioritizing Expediency, Safety in Every Transaction.",
  },
  {
    icon: icon_chat.src,
    bgImage: shape_2.src,
    title: "24/7 Live Support",
    description: "24/7 Live Assistance: Support Always Available",
  },
  {
    icon: icon_api.src,
    bgImage: shape_3.src,
    title: "Targeted Built API",
    description: "Tailored API Customized Solutions for You",
  },
  {
    icon: icon_layer.src,
    bgImage: shape_2.src,
    title: "Automated Flow",
    description: "Automated Workflow Processes for Efficiency",
  },
];