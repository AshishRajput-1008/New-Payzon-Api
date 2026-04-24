"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { clients } from "@/data/clients";

import "swiper/css";
import "swiper/css/free-mode";

export default function ClientsLogoCarousel() {
  return (
    <>
     <style>{`
  @font-face {
    font-family: "SuisseIntl SemiBold";
    src: url("/fonts/SuisseIntl-SemiBold.woff2") format("woff2"),
         url("/fonts/SuisseIntl-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

        .banks-section::before,
        .banks-section::after {
          content: "";
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(124,58,237,0.4) 25%,
            rgba(200,255,0,0.35) 50%,
            rgba(124,58,237,0.4) 75%,
            transparent 100%
          );
        }
        .banks-section::before { top: 0; }
        .banks-section::after  { bottom: 0; }

        .banks-header {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 24px;
          position: relative;
          z-index: 2;
          margin-top: 60px;
        }

        .banks-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(200,255,0,0.07);
          border: 1px solid rgba(200,255,0,0.28);
          border-radius: 6px;
          padding: 5px 16px;
          font-family: "SuisseIntl SemiBold", system-ui, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #C8FF00;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .banks-eyebrow-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #C8FF00;
          animation: bpulse 2s ease-in-out infinite;
        }
        @keyframes bpulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.25; transform:scale(0.6); }
        }

        .banks-title {
          font-family: "SuisseIntl SemiBold", system-ui, sans-serif;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.08;
          color: #F0F0FF;
          margin: 0 0 14px;
        }
        .banks-title em {
          font-style: normal;
          background: linear-gradient(118deg, #C8FF00 0%, #A8E800 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .banks-subtitle {
          font-family: "SuisseIntl SemiBold", system-ui, sans-serif;
          font-size: 15px;
          color: rgba(200,220,255,0.45);
          margin: 0 auto;
          max-width: 520px;
          line-height: 1.65;
          letter-spacing: 0.01em;
        }

        .banks-stats {
          display: inline-flex;
          align-items: center;
          gap: 0;
          margin-top: 28px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(124,58,237,0.22);
          border-radius: 12px;
          overflow: hidden;
        }
        .banks-stat {
          padding: 12px 26px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          border-right: 1px solid rgba(124,58,237,0.18);
        }
        .banks-stat:last-child { border-right: none; }
        .banks-stat-num {
          font-family: "SuisseIntl SemiBold", system-ui, sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #C8FF00;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .banks-stat-label {
          font-family: "SuisseIntl SemiBold", system-ui, sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(200,220,255,0.38);
        }

        .banks-track-wrapper {
          position: relative;
        }
        .banks-track-wrapper::before,
        .banks-track-wrapper::after {
          content: "";
          position: absolute;
          top: 0; bottom: 0;
          width: 160px;
          z-index: 10;
          pointer-events: none;
        }
        .banks-track-wrapper::before {
          left: 0;
          background: linear-gradient(90deg, #0D0B2A 0%, transparent 100%);
        }
        .banks-track-wrapper::after {
          right: 0;
          background: linear-gradient(270deg, #0D0B2A 0%, transparent 100%);
        }

        .banks-swiper {
          overflow: visible !important;
          padding: 20px 0 28px !important;
        }
        .banks-swiper .swiper-wrapper {
          align-items: center;
        }

        .bank-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 26px 22px 22px;
          border-radius: 22px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(124,58,237,0.2);
          cursor: pointer;
          overflow: hidden;
          transition:
            transform 0.32s cubic-bezier(0.34,1.56,0.64,1),
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
          text-decoration: none;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .bank-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(200,255,0,0.7) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .bank-card::after {
          content: "";
          position: absolute;
          inset: -50%;
          background: radial-gradient(
            circle,
            rgba(124,58,237,0.2) 0%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .bank-card:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: rgba(200,255,0,0.35);
          background: rgba(200,255,0,0.035);
          box-shadow:
            0 20px 50px rgba(0,0,0,0.35),
            0 0 40px rgba(200,255,0,0.06);
        }
        .bank-card:hover::before { opacity: 1; }
        .bank-card:hover::after  { opacity: 1; }

        .bank-logo-wrap {
          width: 130px;
          height: 68px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          flex-shrink: 0;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(124,58,237,0.28);
          box-shadow:
            0 0 0 5px rgba(124,58,237,0.07),
            0 0 0 10px rgba(124,58,237,0.04);
          transition: box-shadow 0.35s ease, border-color 0.3s ease;
          overflow: hidden;
          padding: 8px 10px;
        }
        .bank-card:hover .bank-logo-wrap {
          border-color: rgba(200,255,0,0.5);
          box-shadow:
            0 0 0 5px rgba(200,255,0,0.08),
            0 0 0 10px rgba(200,255,0,0.04),
            0 0 24px rgba(200,255,0,0.18);
        }

        .bank-logo-wrap img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          object-fit: contain;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .bank-card:hover .bank-logo-wrap img {
          transform: scale(1.08);
        }

        .bank-name {
          font-family: "SuisseIntl SemiBold", system-ui, sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          color: rgba(230,230,255,0.85);
          letter-spacing: -0.01em;
          text-align: center;
          transition: color 0.25s ease;
          white-space: nowrap;
          margin-bottom: 4px;
        }
        .bank-card:hover .bank-name { color: #ffffff; }

        .bank-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: "SuisseIntl SemiBold", system-ui, sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(200,255,0,0);
          border: 1px solid rgba(200,255,0,0);
          border-radius: 4px;
          padding: 2px 7px;
          transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .bank-card:hover .bank-tag {
          color: rgba(200,255,0,0.7);
          border-color: rgba(200,255,0,0.2);
          background: rgba(200,255,0,0.06);
        }
        .bank-tag-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #C8FF00;
          flex-shrink: 0;
        }

        .bank-verified {
          position: absolute;
          top: 12px; right: 12px;
          width: 22px; height: 22px;
          border-radius: 6px;
          background: rgba(200,255,0,0.08);
          border: 1px solid rgba(200,255,0,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .bank-card:hover .bank-verified {
          opacity: 1;
          transform: scale(1);
        }

        .banks-trust-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 44px;
          margin-bottom: 44px;
          padding: 0 24px;
          flex-wrap: wrap;
        }
        .banks-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: "SuisseIntl SemiBold", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: rgba(200,220,255,0.38);
          letter-spacing: 0.01em;
        }
        .banks-trust-icon {
          width: 20px; height: 20px;
          border-radius: 5px;
          background: rgba(200,255,0,0.07);
          border: 1px solid rgba(200,255,0,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .banks-trust-divider {
          width: 1px; height: 16px;
          background: rgba(124,58,237,0.25);
        }

        @media (max-width: 600px) {
          .banks-stats { flex-wrap: wrap; justify-content: center; }
          .banks-stat  { border-right: none; border-bottom: 1px solid rgba(124,58,237,0.18); flex: 1 1 45%; }
          .banks-stat:last-child { border-bottom: none; }
          .banks-trust-divider { display: none; }
          .banks-trust-strip { gap: 14px; }
        }
      `}</style>

      <section className="banks-section">
        <div className="banks-header">
          <div className="banks-eyebrow">
            <span className="banks-eyebrow-dot" />
            Trusted Banking Network
          </div>

          <h2 className="banks-title">
            India's <em>Leading</em> Payment<br />API Service Provider
          </h2>

          <p className="banks-subtitle">
            Integrated with top-tier banking institutions to deliver
            fast, secure, and seamless payment experiences for every business.
          </p>
        </div>

        <div className="banks-track-wrapper">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView="auto"
            freeMode={{ enabled: true, momentum: false }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={4000}
            allowTouchMove={false}
            className="banks-swiper"
          >
            {[...clients, ...clients].map((client, index) => (
              <SwiperSlide key={index} style={{ width: "200px" }}>
                <a
                  href={(client as any).url ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="bank-card"
                >
                  <div className="bank-logo-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={client.logo} alt={client.alt} />
                  </div>

                  <span className="bank-name">{client.alt}</span>

                  <span className="bank-tag">
                    <span className="bank-tag-dot" />
                    Banking Partner
                  </span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="banks-trust-strip">
          <div className="banks-trust-item">
            <div className="banks-trust-icon">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L7.5 4.5H11L8.25 6.75L9.25 10.5L6 8.5L2.75 10.5L3.75 6.75L1 4.5H4.5L6 1Z" fill="#C8FF00"/>
              </svg>
            </div>
            PCI-DSS Certified
          </div>
          <div className="banks-trust-divider" />
          <div className="banks-trust-item">
            <div className="banks-trust-icon">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="4" width="10" height="7" rx="1.5" stroke="#C8FF00" strokeWidth="1.2"/>
                <path d="M4 4V3a2 2 0 014 0v1" stroke="#C8FF00" strokeWidth="1.2"/>
              </svg>
            </div>
            256-bit SSL Encrypted
          </div>
          <div className="banks-trust-divider" />
          <div className="banks-trust-item">
            <div className="banks-trust-icon">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="4.5" stroke="#C8FF00" strokeWidth="1.2"/>
                <path d="M4 6l1.5 1.5L8 4" stroke="#C8FF00" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            RBI Regulated
          </div>
          <div className="banks-trust-divider" />
          <div className="banks-trust-item">
            <div className="banks-trust-icon">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="4.5" stroke="#C8FF00" strokeWidth="1.2"/>
                <polyline points="6 3.5 6 6 7.5 7.5" stroke="#C8FF00" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            24 × 7 Support
          </div>
        </div>

      </section>
    </>
  );
}