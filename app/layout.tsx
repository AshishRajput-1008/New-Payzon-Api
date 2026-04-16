import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Payment Solutions – Synox – Finance & Consulting Site Template.",
  description: "Synox – Finance & Consulting Site Template.",
  keywords: "Finance & Consulting Bootstrap Site Template",
  authors: [{ name: "Payzon-APi" }],
  icons: {
    icon: "@/assets/images/site_logo/favourite_icon.webp",
  },
  openGraph: {
    images: ["/assets/images/synox_page_thumbnail.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className="payment_solutions">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}