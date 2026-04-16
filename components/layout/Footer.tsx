import Link from "next/link";
import { footerLinkGroups } from "@/data/footerLinks";
import Button from "@/components/ui/Button";
import shapeNate14 from "@/public/assets/images/shape_nate_14.svg";
import shapeNate15 from "@/public/assets/images/shape_nate_15.svg";
import shapeNate21 from "@/public/assets/images/shape_nate_21.svg";
import Appstore from "@/public/assets/images/app_store.webp";
import googleplay from "@/public/assets/images/google_play.webp";
import { Weight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site_footer footer_layout_3 bg-dark">
      {/* CTA Section */}
      <div className="cta_section section_space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2
                style={{
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  fontFamily: "SuisseIntl",
                  fontSize: "64px",
                }}
                className="heading_text mb-0"
              >
                Ready to level up your payment process?
              </h2>
            </div>
            <div className="col-lg-5 text-lg-end">
              <Button href="/pricing" label="Sign Up Now" variant="primary-pill" size="large" />
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
<h3 className="footer_info_title" style={{ fontWeight: 800 , fontSize:"23px"}}>
  {group.title}
</h3>                <ul className="iconlist_block unordered_list_block mb-0">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href}>
                        <span className="iconlist_text fw-bold">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Download App */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <h3 className="footer_info_title">Download App</h3>
              <p>Available of ready version Coming Soon</p>
              <ul className="app_download_btns unordered_list_block">
                <li>
                  <Link href="#">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={Appstore.src} alt="App Store" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
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
                  Copyright © 2026 Synox, All rights reserved.
                </p>
              </div>
              <div className="col-lg-6">
                <ul className="social_icons_block unordered_list justify-content-center justify-content-lg-end">

                  {/* Twitter X */}
                  <li>
                    <Link aria-label="Twitter X" href="#">
                      <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15">
                        <path d="M8.92704 6.35148L14.5111 0H13.1879L8.33921 5.5149L4.4666 0H0L5.85615 8.3395L0 15H1.32333L6.44364 9.17608L10.5334 15H15L8.92671 6.35148H8.92704ZM7.11456 8.41297L6.52121 7.58255L1.80014 0.974755H3.83269L7.64265 6.30746L8.236 7.13788L13.1885 14.0696H11.156L7.11456 8.41329V8.41297Z" />
                      </svg>
                    </Link>
                  </li>

                  {/* Facebook */}
                  <li>
                    <Link aria-label="Facebook" href="#">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15">
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                      </svg>
                    </Link>
                  </li>

                  {/* LinkedIn */}
                  <li>
                    <Link aria-label="Linkedin" href="#">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15">
                        <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8h4.96v13H.02V8zm7.932 0h4.752v1.791h.066c.662-1.254 2.276-2.576 4.684-2.576 5.007 0 5.931 3.295 5.931 7.581V21h-4.962v-5.494c0-1.309-.023-2.994-1.824-2.994-1.826 0-2.106 1.426-2.106 2.898V21H7.952V8z" />
                      </svg>
                    </Link>
                  </li>

                  {/* Telegram */}
                  <li>
                    <Link aria-label="Telegram" href="#">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="15" height="15">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shapeNate14.src} alt="Shape Nate" />
        </div>
        <div className="decoration_item shape_nate_2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shapeNate15.src} alt="Shape Nate" />
        </div>
        <div className="decoration_item shape_nate_3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shapeNate21.src} alt="Shape Nate" />
        </div>
      </div>
    </footer>
  );
}