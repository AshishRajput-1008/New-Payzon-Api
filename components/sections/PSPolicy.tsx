import { policyFeatures } from "@/data/policyFeatures";
import HeadingBlock from "@/components/ui/HeadingBlock";
import SectionDecoration from "@/components/ui/SectionDecoration";
import shape_nate_17 from "@/public/assets/images/Policy/shape_nate_17.svg";
import shape_nate_18 from "@/public/assets/images/Policy/shape_nate_18.svg";
import shape_nate_20 from "@/public/assets/images/Policy/shape_nate_20.svg";


const shapes = [
  { className: "shape_nate_1", image: shape_nate_17.src, alt: "Shape Nate" },
  { className: "shape_nate_2", image: shape_nate_18.src, alt: "Shape Nate" },
  { className: "shape_nate_3", image: shape_nate_20.src, alt: "Shape Nate" },
];

export default function PSPolicy() {
  return (
    <section className="ps_policy_section">
      <div className="content_wrapper section_decoration overflow-hidden bg-secondary">
        <div className="container">
          <HeadingBlock badge="Why Choose Us" title="Elevate Your Payments with Us" />

          <ul className="ps_policy_items process_steps_block text-center unordered_list justify-content-center justify-content-lg-between">
            {policyFeatures.map((feature, index) => (
              <li key={index}>
                <div
                  className="step_block_icon"
                  style={{ backgroundImage: `url('${feature.bgImage}')` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="step_block_title">{feature.title}</h3>
                <p className="mb-0">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <SectionDecoration shapes={shapes} />
      </div>
    </section>
  );
}