import HeadingBlock from "@/components/ui/HeadingBlock";
import SectionDecoration from "@/components/ui/SectionDecoration";
import shape_nate_17 from "@/public/assets/images/Integrating Section/shape_nate_17.svg";
import shape_nate_18 from "@/public/assets/images/Integrating Section/shape_nate_18 (2).svg";
import integration_image_1 from "@/public/assets/images/Integrating Section/integration_image_1.webp";


const shapes = [
  { className: "shape_nate_1", image: shape_nate_17.src, alt: "Shape Nate" },
  { className: "shape_nate_2", image: shape_nate_18.src, alt: "Shape Nate" },
];

export default function IntegratingSection() {
  return (
    <section className="ps_pntegrating_section section_space pb-0 section_decoration">
      <div className="container">
        <HeadingBlock badge="Integrating" title="Our popular e-commerce CMS" />

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="integrating_image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={integration_image_1.src}
                alt="Integration Image"
              />
            </div>
          </div>
        </div>
      </div>

      <SectionDecoration shapes={shapes} />
    </section>
  );
}