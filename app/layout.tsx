import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Payment Solutions – Payzon API",
  description:
    "Secure Payment Gateway Solutions with Pay-In, Pay-Out, QR & Virtual Accounts.",
  keywords:
    "Payment Gateway, Payzon API, Pay-In, Pay-Out, QR Payment, Virtual Account",
  authors: [{ name: "Payzon-APi" }],
  icons: {
    icon: "/new-api-logo.png",
  },
  openGraph: {
    images: ["/assets/images/new-api-logo.png"],
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

        <Header />

        <main>{children}</main>

        <Footer />

        {/* Render on all pages */}
        <ScrollToTop />
      </body>
    </html>
  );
}