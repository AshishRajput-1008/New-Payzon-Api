/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { industries } from "@/data/industries";
import HeadingBlock from "@/components/ui/HeadingBlock";
import SectionDecoration from "@/components/ui/SectionDecoration";
import pattern19 from "@/public/assets/images/uses/shape_nate_19.svg";
import transCard from "@/public/assets/images/avatar/hero20.png";
import shapearrow1 from "@/public/assets/images/uses/shape_arrow_1.webp";

const shapes = [
  { className: "shape_nate_1", image: pattern19.src, alt: "Shape Nate 19" },
];

export default function PoweringIndustry() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="powering_industry_section section_space section_decoration">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <HeadingBlock badge="Use Cases" title="Powering Every Industry." centered={false} />

            <div className="accordion" id="industry_accordion">
              {industries.map((industry, index) => (
                <div key={index} className="accordion-item">
                  <div className="accordion-header">
                    <button
                      className={`accordion-button ${activeIndex !== index ? "collapsed" : ""}`}
                      type="button"
                      onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                      aria-expanded={activeIndex === index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        gap: "12px",
                      }}
                    >
                      <span className="icon">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={industry.icon} alt={industry.title} />
                      </span>

                      <span style={{ flex: 1, textAlign: "left" }}>{industry.title}</span>

                      {/* ✅ Inline SVG Chevron — replaces broken square */}
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          transition: "transform 0.3s ease",
                          transform: activeIndex === index ? "rotate(0deg)" : "rotate(180deg)",
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 11.5L9 6.5L14 11.5"
                            stroke="#ffffff"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>

                  <div
                    className="accordion-collapse"
                    style={{ display: activeIndex === index ? "block" : "none" }}
                  >
                    <div className="accordion-body">
                      <p className="m-0 text-muted">{industry.content}</p>

                      {/* Know More Button */}
                      <a
                        href={(industry as any).link ?? "/Use-Cases"}
                        className="know_more_btn"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          marginTop: "16px",
                          padding: "9px 22px",
                          fontSize: "13px",
                          fontWeight: 600,
                          letterSpacing: "0.4px",
                          color: "#c8ff00",
                          border: "1.5px solid rgba(200, 255, 0, 0.45)",
                          borderRadius: "6px",
                          background: "rgba(200, 255, 0, 0.06)",
                          textDecoration: "none",
                          transition: "all 0.25s ease",
                          backdropFilter: "blur(4px)",
                        }}
                        onMouseEnter={e => {
                          const el = e.currentTarget;
                          el.style.background = "rgba(200, 255, 0, 0.15)";
                          el.style.borderColor = "#c8ff00";
                          el.style.boxShadow = "0 0 14px rgba(200,255,0,0.25)";
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget;
                          el.style.background = "rgba(200, 255, 0, 0.06)";
                          el.style.borderColor = "rgba(200, 255, 0, 0.45)";
                          el.style.boxShadow = "none";
                        }}
                      >
                        Know More
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                            stroke="#c8ff00"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="powering_industry_image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                style={{ borderRadius: "24px", maxHeight: "610px" }}
                src={transCard.src}
                alt="Transactions Card image"
              />
            </div>
          </div>
        </div>
      </div>

      <SectionDecoration shapes={shapes} />

      <div className="decoration_item shape_arrow_1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shapearrow1.src} alt="Arrow Down" />
      </div>

      {/* ✅ Suppress the theme's broken ::after pseudo-element square */}
      <style>{`
        .accordion-button::after {
          display: none !important;
        }
      `}</style>
    </section>
  );
}