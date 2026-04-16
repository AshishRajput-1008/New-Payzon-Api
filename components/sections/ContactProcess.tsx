import Link from "next/link";
import { processSteps } from "@/data/processSteps";
import HeadingBlock from "@/components/ui/HeadingBlock";
import SectionDecoration from "@/components/ui/SectionDecoration";
import shape17 from "@/public/assets/images/Cprocess/shape_nate_17.svg"
import shape18 from "@/public/assets/images/Cprocess/shape_nate_18.svg"
import shape1 from "@/public/assets/images/Cprocess/process_line_shape_1.webp"
import shapearrow1 from "@/public/assets/images/Cprocess/shape_arrow_1.webp"
import shapearrow2 from "@/public/assets/images/Cprocess/shape_arrow_2.webp"
import pattern3 from "@/public/assets/images/Cprocess/shape_pattern_3.svg"
import logo from  "@/public/assets/images/Cprocess/logo2bgremove.png"

const shapes = [
  { className: "shape_nate_1", image: shape17.src, alt: "Shape Nate" },
  { className: "shape_nate_2", image: shape18.src, alt: "Shape Nate" },
];

export default function ContactProcess() {
  return (
    <section className="ps_contact_process_section section_space section_decoration">
      <div className="container">
        <HeadingBlock badge="Working Process" title="How to Working Payzon API" />

        <div
          className="contact_process_content"
          style={{ backgroundImage: `url('${pattern3.src}')` }}
        >
          <div className="site_logo text-center">
            <Link className="site_link" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt="Site Logo White" />
            </Link>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <div className="process_line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shape1.src} alt="Process Line Shape" />
              </div>
            </div>
          </div>

          <div className="contact_process_step row">
            {processSteps.map((step) => (
              <div key={step.number} className="col-lg-4">
                <div className="iconbox_block icon_left">
                  <div className="block_number">{step.number}</div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title mb-0">{step.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parallax arrows — static fallback since we removed jQuery parallax */}
      <div className="decoration_item shape_arrow_1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shapearrow1.src} alt="Arrow Down" />
      </div>
      <div className="decoration_item shape_arrow_2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shapearrow2.src} alt="Arrow Up" />
      </div>

      <SectionDecoration shapes={shapes} />
    </section>
  );
}