import Link from "next/link";
import { pricingPlans } from "@/data/pricingPlans";
import HeadingBlock from "@/components/ui/HeadingBlock";

export default function Pricing() {
  return (
    <section className="pricing_section section_space">
      <div className="container">
        <HeadingBlock badge="Tariffs" title="Clear Pricing for Transactions" />

        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-6">
              <div className={`ps_pricing_block ${plan.variant === "individual" ? "bg-grd-2" : "bg-grd"}`}>
                <div className="pricing_description">
                  <h3 className="pricing_title">{plan.title}</h3>
                  <p>{plan.description}</p>
                  <ul className="iconlist_block unordered_list_block">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <span className="iconlist_icon">
                          <i className="fa-solid fa-circle"></i>
                        </span>
                        <span className="iconlist_text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link className="btn bg-primary text-dark btn-rounded" href={plan.ctaHref}>
                    <span className="btn_label">{plan.ctaLabel}</span>
                    <span className="btn_icon">
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928932C12.9526 0.538408 12.3195 0.538408 11.9289 0.928932C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM0 9H19V7H0V9Z" fill="black" />
                      </svg>
                    </span>
                  </Link>
                </div>
                <ul className="pricing_feature_list text-center unordered_list_block">
                  {plan.priceItems.map((item, pIndex) => (
                    <li key={pIndex}>
                      {item.label && <p className="mb-2">{item.label}</p>}
                      <div className="price_value">{item.value}</div>
                      {!item.label && <p className="mb-0">&nbsp;</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}