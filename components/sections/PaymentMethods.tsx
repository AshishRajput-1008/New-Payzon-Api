import Link from "next/link";
import { paymentMethods } from "@/data/paymentMethods";
import HeadingBlock from "@/components/ui/HeadingBlock";
import SectionDecoration from "@/components/ui/SectionDecoration";
import shape15 from "@/public/assets/images/services/shape_nate_15.svg"
import shape16 from "@/public/assets/images/services/shape_nate_16.svg"
import shape17 from "@/public/assets/images/services/icon_chart_3.svg"

const shapes = [
  { className: "shape_nate_1", image: shape15.src, alt: "Shape Nate" },
  { className: "shape_nate_2", image: shape15.src, alt: "Shape Nate" },
  { className: "shape_nate_3", image: shape16.src, alt: "Shape Nate" },
];

export default function PaymentMethods() {
  return (
    <section className="payment_methods_section">
      <div className="content_wrapper section_decoration overflow-hidden">
        <div className="container">
          <HeadingBlock badge="CORE FEATURES" title="Variety of Payzon API Payment Methods" />

          <div className="row">
            {paymentMethods.map((method, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                <div className="payment_method_block">
                  <div className="block_icon border-bottom-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={method.icon} alt={method.title} />
                  </div>
                  <div className="block_content border-top-0">
                    <h3 className="block_title">{method.title}</h3>
                    <p>{method.description}</p>
                    <Link className="btn-link" href={method.href}>
                      <span className="btn_label">Read More</span>
                      <span className="btn_icon">
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionDecoration shapes={shapes} />
      </div>
    </section>
  );
}