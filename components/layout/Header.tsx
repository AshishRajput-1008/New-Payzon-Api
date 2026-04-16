"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, User, Menu, X } from "lucide-react";
import logo from "@/public/assets/images/Gemini_Generated_Image_j9419lj9419lj941.png";

const NAV_FONT: React.CSSProperties = {
  fontFamily: '"SuisseIntl", Arial, Helvetica, sans-serif',
  fontWeight: 600,
  fontStyle: "normal",
};

const navLinkStyle: React.CSSProperties = {
  ...NAV_FONT,
  display: "inline-flex",
  alignItems: "center",
  gap: 5,
  fontSize: "18px",
  letterSpacing: "0.01em",
};

const subLinkStyle: React.CSSProperties = {
  ...NAV_FONT,
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
};

const dropItemStyle: React.CSSProperties = {
  ...NAV_FONT,
};

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdowns([]);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMenuOpen(false);
        setOpenDropdowns([]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isOpen = useCallback(
    (name: string) => openDropdowns.includes(name),
    [openDropdowns],
  );

  const toggleDropdown = useCallback((name: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setOpenDropdowns((prev) => {
      const isNested = name === "blogs" || name === "career";
      const parent = "pages";
      if (prev.includes(name)) {
        return isNested ? prev.filter((n) => n !== name) : [];
      }
      if (isNested) {
        const withoutSiblings = prev.filter(
          (n) => n !== "blogs" && n !== "career",
        );
        return [...withoutSiblings, parent, name];
      }
      return [name];
    });
  }, []);

  const handleMobileToggle = () => {
    setMenuOpen((prev) => {
      if (!prev) setOpenDropdowns([]);
      return !prev;
    });
  };

  return (
    <>
      {/* ── Responsive margin: 74px only on desktop ── */}
      <style>{`
        @media (min-width: 992px) {
          .header-inner-container {
            margin-left: 78px !important;
            margin-right: 78px !important;
          }
        }
      `}</style>

      <header className="site_header header_layout_1">
        <div className="xb-header stricky">
          <div className="container header-inner-container">
            <div className="row align-items-center">

              {/* ── Logo + Brand Name ── */}
              <div className="col-lg-3 col-5">
                <div className="site_logo">
                  <Link
                    className="site_link"
                    href="/"
                    style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}
                  >
                    {/* Circle logo */}
                    <div
                      style={{
                        width: 54,
                        height: 54,
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "2px solid rgba(255,255,255,0.6)",
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logo.src}
                        alt="Site Logo"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>

                    {/* Brand name */}
                    <span
                      style={{
                        ...NAV_FONT,
                        fontSize: "21px",
                        letterSpacing: "0.02em",
                        color: "#ffffff",
                        lineHeight: 1.2,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Payzon API
                    </span>
                  </Link>
                </div>
              </div>

              {/* ── Navigation ── */}
              <div className="col-lg-6 col-2" ref={navRef}>
                <nav className="main_menu navbar navbar-expand-lg">
                  <div
                    className={`main_menu_inner justify-content-lg-center ${menuOpen ? "show" : ""}`}
                    id="main_menu_dropdown"
                  >
                    <ul className="main_menu_list unordered_list justify-content-center">

                      {/* ── Pay-In ── */}
                      <li className={`dropdown ${isOpen("services") ? "show" : ""}`}>
                        <a
                          className="nav-link"
                          href="#" 
                          role="button"
                          onClick={(e) => toggleDropdown("services", e)}
                          aria-expanded={isOpen("services")}
                          style={navLinkStyle}
                        >
                          PAY-IN
                          <ChevronDown size={15} strokeWidth={2.5} />
                        </a>
                        <ul className={`dropdown-menu ${isOpen("services") ? "show" : ""}`}>
                          <li>
                            <Link href="/services" style={dropItemStyle}>Our Services</Link>
                          </li>
                          <li>
                            <Link href="/service-details" style={dropItemStyle}>Service Details</Link>
                          </li>
                        </ul>
                      </li>

                      {/* ── Pay-Out ── */}
                      <li className={`dropdown ${isOpen("projects") ? "show" : ""}`}>
                        <a
                          className="nav-link"
                          href="#"
                          role="button"
                          onClick={(e) => toggleDropdown("projects", e)}
                          aria-expanded={isOpen("projects")}
                          style={navLinkStyle}
                        >
                          PAY-OUT
                          <ChevronDown size={15} strokeWidth={2.5} />
                        </a>
                        <ul className={`dropdown-menu ${isOpen("projects") ? "show" : ""}`}>
                          <li>
                            <Link href="/projects" style={dropItemStyle}>Our Projects</Link>
                          </li>
                          <li>
                            <Link href="/project-details" style={dropItemStyle}>Project Details</Link>
                          </li>
                        </ul>
                      </li>

                      {/* ── QR-Code ── */}
                      <li className={`dropdown ${isOpen("pages") ? "show" : ""}`}>
                        <a
                          className="nav-link"
                          href="#"
                          role="button"
                          onClick={(e) => toggleDropdown("pages", e)}
                          aria-expanded={isOpen("pages")}
                          style={navLinkStyle}
                        >
                          QR-CODE
                          <ChevronDown size={15} strokeWidth={2.5} />
                        </a>
                        <ul className={`dropdown-menu ${isOpen("pages") ? "show" : ""}`}>
                          <li>
                            <Link href="/contact" style={dropItemStyle}>Help Center</Link>
                          </li>

                          {/* Blogs (Nested) */}
                          <li className={`dropdown dropdown-submenu ${isOpen("blogs") ? "show" : ""}`}>
                            <a
                              className="nav-link"
                              href="#"
                              role="button"
                              onClick={(e) => toggleDropdown("blogs", e)}
                              aria-expanded={isOpen("blogs")}
                              style={subLinkStyle}
                            >
                              Blogs
                              <ChevronRight size={14} strokeWidth={2} />
                            </a>
                            <ul className={`dropdown-menu ${isOpen("blogs") ? "show" : ""}`}>
                              <li>
                                <Link href="/blog" style={dropItemStyle}>Our Blogs</Link>
                              </li>
                              <li>
                                <Link href="/blog-details" style={dropItemStyle}>Blog Details</Link>
                              </li>
                            </ul>
                          </li>

                          {/* Career (Nested) */}
                          <li className={`dropdown dropdown-submenu ${isOpen("career") ? "show" : ""}`}>
                            <a
                              className="nav-link"
                              href="#"
                              role="button"
                              onClick={(e) => toggleDropdown("career", e)}
                              aria-expanded={isOpen("career")}
                              style={subLinkStyle}
                            >
                              Career
                              <ChevronRight size={14} strokeWidth={2} />
                            </a>
                            <ul className={`dropdown-menu ${isOpen("career") ? "show" : ""}`}>
                              <li>
                                <Link href="/career" style={dropItemStyle}>Join Us</Link>
                              </li>
                              <li>
                                <Link href="/career-details" style={dropItemStyle}>Job Details</Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link href="/404" style={dropItemStyle}>404 Error</Link>
                          </li>
                        </ul>
                      </li>

                      {/* ── V-Account ── */}
                      <li className="mb-[3px]">
                        <Link
                          href="/pricing"
                          style={{ ...NAV_FONT, fontSize: "18px", letterSpacing: "0.01em" }}
                        >
                          V-ACCOUNT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* ── Action Buttons ── */}
              <div className="col-lg-3 col-5">
                <ul className="btns_group p-0 unordered_list justify-content-end">
                  <li>
                    <button
                      className="mobile_menu_btn"
                      type="button"
                      onClick={handleMobileToggle}
                      aria-expanded={menuOpen}
                      aria-controls="main_menu_dropdown"
                      aria-label="Toggle navigation"
                    >
                      {menuOpen ? (
                        <X size={20} strokeWidth={2} />
                      ) : (
                        <Menu size={20} strokeWidth={2} />
                      )}
                    </button>
                  </li>
                  <li>
                    <Link
                      className="btn bg-dark rounded-pill"
                      href="/login"
                      style={{
                        ...NAV_FONT,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: "1rem",
                      }}
                    >
                      <span className="btn_icon" style={{ display: "inline-flex", alignItems: "center" }}>
                        <User size={16} strokeWidth={2} />
                      </span>
                      <span className="btn_label">Login</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}