"use client";

import Link from "next/link";
import { footerLinkGroups } from "@/data/footerLinks";
import Button from "@/components/ui/Button";
import shapeNate14 from "@/public/assets/images/shape_nate_14.svg";
import shapeNate15 from "@/public/assets/images/shape_nate_15.svg";
import shapeNate21 from "@/public/assets/images/shape_nate_21.svg";
import Appstore from "@/public/assets/images/app_store.webp";
import googleplay from "@/public/assets/images/google_play.webp";

export default function Footer() {
  return (
    <>
      {/* Hover Style */}
      <style jsx>{`
        .restricted-hover {
          color: inherit;
          transition: color 0.3s ease;
        }

        .restricted-hover:hover {
          color: oklch(65.6% 0.241 354.308);
        }
      `}</style>

      <footer className="site_footer footer_layout_3 bg-dark">
        {/* CTA Section */}
        <div className="cta_section section_space">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2
                  className="heading_text mb-0"
                  style={{
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    fontFamily: "SuisseIntl",
                    fontSize: "64px",
                  }}
                >
                  Ready to level up your payment process?
                </h2>
              </div>

              <div className="col-lg-5 text-lg-end">
                <Button
                  href="https://payzonapi.com/account/sign-in"
                  label="Sign Up Now"
                  variant="primary-pill"
                  size="large"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="content_wrap section_decoration overflow-hidden">
          <div className="container">
            <div className="row justify-content-lg-between">
              {/* Link Groups */}
              {footerLinkGroups.map((group, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                  <h3
                    className="footer_info_title"
                    style={{ fontWeight: 800, fontSize: "23px" }}
                  >
                    {group.title}
                  </h3>

                  <ul className="iconlist_block unordered_list_block mb-0">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href}>
                          <span className="iconlist_text fw-bold restricted-hover">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Download App */}
              <div className="col-lg-2 col-md-6 col-sm-6">
                <h3
                  className="footer_info_title"
                  style={{ fontWeight: 800, fontSize: "23px" }}
                >
                  Download App
                </h3>

                <p>Available version Coming Soon</p>

                <ul className="app_download_btns unordered_list_block">
                  <li>
                    <Link href="#">
                      <img src={Appstore.src} alt="App Store" />
                    </Link>
                  </li>

                  <li>
                    <Link href="#">
                      <img src={googleplay.src} alt="Google Play" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer_bottom bg-dark">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <p className="copyright_text mb-0">
                    Copyright © {new Date().getFullYear()} Payzonindia Private
                    Limited, All rights reserved.
                  </p>
                </div>

                <div className="col-lg-6">
                  <ul className="social_icons_block unordered_list justify-content-center justify-content-lg-end">
                    {/* Twitter X */}
                    <li>
                      <Link
                        aria-label="Twitter X"
                        href="https://x.com/payzonindia"
                      >
                        <svg
                          viewBox="0 0 15 15"
                          fill="currentColor"
                          width="12"
                          height="12"
                        >
                          <path d="M8.92704 6.35148L14.5111 0H13.1879L8.33921 5.5149L4.4666 0H0L5.85615 8.3395L0 15H1.32333L6.44364 9.17608L10.5334 15H15L8.92671 6.35148H8.92704Z" />
                        </svg>
                      </Link>
                    </li>

                    {/* Facebook */}
                    <li>
                      <Link
                        aria-label="Facebook"
                        href="https://www.facebook.com/PAYZONINDIA/"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="16"
                          height="16"
                        >
                          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                        </svg>
                      </Link>
                    </li>

                    {/* LinkedIn */}
                    <li>
                      <Link
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com/company/payzonindiabhopal/"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="15"
                          height="15"
                        >
                          <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8h4.96v13H.02V8zm7.932 0h4.752v1.791h.066c.662-1.254 2.276-2.576 4.684-2.576 5.007 0 5.931 3.295 5.931 7.581V21h-4.962v-5.494c0-1.309-.023-2.994-1.824-2.994-1.826 0-2.106 1.426-2.106 2.898V21H7.952V8z" />
                        </svg>
                      </Link>
                    </li>

                    {/* Instagram */}
                    <li>
                      <Link
                        aria-label="Instagram"
                        href="https://www.instagram.com/thepayzonindia"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="15"
                          height="15"
                        >
                          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2z" />
                        </svg>
                      </Link>
                    </li>

                    {/* YouTube */}
                    <li>
                      <Link
                        aria-label="YouTube"
                        href="https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="15"
                          height="15"
                        >
                          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2A31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8z" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Decorations */}
          <div className="decoration_item shape_nate_1">
            <img src={shapeNate14.src} alt="Shape" />
          </div>

          <div className="decoration_item shape_nate_2">
            <img src={shapeNate15.src} alt="Shape" />
          </div>

          <div className="decoration_item shape_nate_3">
            <img src={shapeNate21.src} alt="Shape" />
          </div>
        </div>
      </footer>
    </>
  );
}