"use client";

import { useState } from "react";
import { industries } from "@/data/industries";
import HeadingBlock from "@/components/ui/HeadingBlock";
import SectionDecoration from "@/components/ui/SectionDecoration";
import pattern19 from "@/public/assets/images/uses/shape_nate_19.svg";
import transCard from "@/public/assets/images/uses/transactions_card_image_2.webp";
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
            <HeadingBlock badge="Payment Solution" title="Powering Every Industry." centered={false} />

            <div className="accordion" id="industry_accordion">
              {industries.map((industry, index) => (
                <div key={index} className="accordion-item">
                  <div className="accordion-header">
                    <button
                      className={`accordion-button ${activeIndex !== index ? "collapsed" : ""}`}
                      type="button"
                      onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                      aria-expanded={activeIndex === index}
                    >
                      <span className="icon">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={industry.icon} alt={industry.title} />
                      </span>
                      {industry.title}
                    </button>
                  </div>

                  {/* ✅ Use inline style instead of Bootstrap collapse classes */}
                  <div
                    className="accordion-collapse"
                    style={{ display: activeIndex === index ? "block" : "none" }}
                  >
                    <div className="accordion-body">
                      <p className="m-0 text-muted">{industry.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="powering_industry_image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={transCard.src} alt="Transactions Card image" />
            </div>
          </div>
        </div>
      </div>

      <SectionDecoration shapes={shapes} />

      <div className="decoration_item shape_arrow_1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shapearrow1.src} alt="Arrow Down" />
      </div>
    </section>
  );
}