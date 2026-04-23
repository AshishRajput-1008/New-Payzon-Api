import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import ClientsLogoCarousel from "@/components/sections/ClientsLogoCarousel";
import PaymentMethods from "@/components/sections/PaymentMethods";
import ContactProcess from "@/components/sections/ContactProcess";
import PoweringIndustry from "@/components/sections/PoweringIndustry";
import PSPolicy from "@/components/sections/PSPolicy";
import Pricing from "@/components/sections/Pricing";
import IntegratingSection from "@/components/sections/IntegratingSection";
import BlogSection from "@/components/sections/BlogSection";
import ScrollToTop from "@/components/ScrollToTop";


export default function HomePage() {
  return (
    <div className="page_wrapper">
      <BackToTop />

      <main className="page_content">
        <HeroSection />
        <ClientsLogoCarousel />
        <PaymentMethods />
        <ContactProcess />

        <div className="bg-dark">
          <PoweringIndustry />
          <PSPolicy />
          <Pricing />
        </div>

        <IntegratingSection />
        <BlogSection />
      </main>


    </div>
  );
}