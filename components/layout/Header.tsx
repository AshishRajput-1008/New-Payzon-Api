"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, User, Menu, X } from "lucide-react";
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

const dropItemStyle: React.CSSProperties = {
  ...NAV_FONT,
};

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const navRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const inNav = navRef.current && navRef.current.contains(e.target as Node);
      const inDrawer = drawerRef.current && drawerRef.current.contains(e.target as Node);
      if (!inNav && !inDrawer) {
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isOpen = useCallback(
    (name: string) => openDropdowns.includes(name),
    [openDropdowns]
  );

  const toggleDropdown = useCallback((name: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setOpenDropdowns((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [name]
    );
  }, []);

  const handleMobileToggle = () => {
    setMenuOpen((prev) => {
      if (!prev) setOpenDropdowns([]);
      return !prev;
    });
  };

  return (
    <>
      <style>{`
        @media (min-width: 992px) {
          .header-inner-container {
            margin-left: 80px !important;
            margin-right: 80px !important;
          }
        }

        /* ── Partner desktop dropdown hover ── */
        .partner-dropdown-item:hover {
          background-color: rgba(0, 0, 0, 0.06) !important;
        }

        /* ── Mobile overlay backdrop ── */
        .mobile-nav-overlay {
          display: none;
        }
        @media (max-width: 991px) {
          .mobile-nav-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 1040;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.25s ease;
          }
          .mobile-nav-overlay.open {
            opacity: 1;
            pointer-events: all;
          }

          /* ── Slide-in drawer ── */
          .mobile-nav-drawer {
            position: fixed;
            top: 0;
            right: 0;
            width: min(88vw, 340px);
            height: 100dvh;
            background: #0f172a;
            z-index: 1050;
            display: flex;
            flex-direction: column;
            transform: translateX(100%);
            transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
          }
          .mobile-nav-drawer.open {
            transform: translateX(0);
          }

          /* ── Drawer header with logo ── */
          .mob-drawer-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 20px 18px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.03);
          }
          .mob-drawer-brand {
            display: inline-flex;
            align-items: center;
            gap: 11px;
            text-decoration: none;
          }
          .mob-drawer-logo-ring {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.55);
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mob-drawer-logo-ring img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .mob-drawer-brand-name {
            font-family: "SuisseIntl", Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 18px;
            letter-spacing: 0.02em;
            color: #ffffff;
            white-space: nowrap;
            line-height: 1.2;
          }
          .mob-close-btn {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, 0.85);
            flex-shrink: 0;
            transition: background 0.15s;
          }
          .mob-close-btn:hover {
            background: rgba(255, 255, 255, 0.18);
          }

          /* ── Nav items ── */
          .mob-nav-list {
            list-style: none;
            padding: 6px 0;
            margin: 0;
            flex: 1;
          }
          .mob-nav-item {
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .mob-nav-item:last-child {
            border-bottom: none;
          }
          .mob-nav-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 22px;
            color: rgba(255, 255, 255, 0.88);
            font-size: 15.5px;
            font-weight: 600;
            letter-spacing: 0.01em;
            text-decoration: none;
            cursor: pointer;
            background: none;
            border: none;
            width: 100%;
            text-align: left;
            transition: background 0.15s;
          }
          .mob-nav-link:hover {
            background: rgba(255, 255, 255, 0.05);
          }
          .mob-chevron {
            transition: transform 0.22s ease;
            color: rgba(255, 255, 255, 0.38);
            flex-shrink: 0;
          }
          .mob-chevron.open {
            transform: rotate(180deg);
          }

          /* ── Inline sub-menu ── */
          .mob-sub-panel {
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.28s ease;
            background: rgba(255, 255, 255, 0.03);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
          }
          .mob-sub-panel.open {
            max-height: 400px;
          }
          .mob-sub-link {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 22px 12px 34px;
            color: rgba(255, 255, 255, 0.58);
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);
            transition: color 0.15s, background 0.15s;
          }
          .mob-sub-link:last-child {
            border-bottom: none;
          }
          .mob-sub-link:hover {
            color: rgba(255, 255, 255, 0.85);
            background: rgba(255, 255, 255, 0.04);
          }
          .mob-sub-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.28);
            flex-shrink: 0;
          }

          /* ── Partner With Us CTA at bottom ── */
          .mob-partner-section {
            padding: 16px 18px 22px;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
          }
          .mob-partner-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.35);
            margin-bottom: 8px;
            padding-left: 2px;
          }
          .mob-partner-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 13px 16px;
            background: rgba(255, 255, 255, 0.09);
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 10px;
            color: rgba(255, 255, 255, 0.9);
            font-size: 14.5px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.15s;
          }
          .mob-partner-btn:hover {
            background: rgba(255, 255, 255, 0.14);
          }
          .mob-partner-btn-inner {
            display: flex;
            align-items: center;
            gap: 9px;
          }
          .mob-partner-icon {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.14);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mob-partner-sub {
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.26s ease;
          }
          .mob-partner-sub.open {
            max-height: 200px;
          }
          .mob-partner-sub-inner {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            margin-top: 6px;
            overflow: hidden;
          }
          .mob-partner-link {
            display: block;
            padding: 12px 18px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
            transition: background 0.15s, color 0.15s;
          }
          .mob-partner-link:last-child {
            border-bottom: none;
          }
          .mob-partner-link:hover {
            background: rgba(255, 255, 255, 0.07);
            color: #fff;
          }

          /* ── Bigger mobile logo + brand on the header bar ── */
          .mob-header-logo-ring {
            width: 62px !important;
            height: 62px !important;
          }
          .mob-header-brand-name {
            font-size: 24px !important;
          }
          /* Bigger hamburger button */
          .mobile-hamburger-btn {
            padding: 6px 8px !important;
            min-width: 46px !important;
            height: 46px !important;
          }
        }

        /* ── Hide drawer on desktop ── */
        @media (min-width: 992px) {
          .mobile-nav-overlay,
          .mobile-nav-drawer {
            display: none !important;
          }
        }
      `}</style>

      {/* ── Mobile overlay ── */}
      <div
        className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile slide-in drawer ── */}
      <div ref={drawerRef} className={`mobile-nav-drawer ${menuOpen ? "open" : ""}`}>

        {/* Drawer header: logo + brand name + close button */}
        <div className="mob-drawer-header">
          <Link
            href="/"
            className="mob-drawer-brand"
            onClick={() => setMenuOpen(false)}
          >
            <div className="mob-drawer-logo-ring">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt="Payzon API Logo" />
            </div>
            <span className="mob-drawer-brand-name">Payzon API</span>
          </Link>

          <button
            className="mob-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={17} strokeWidth={2.5} />
          </button>
        </div>

        <ul className="mob-nav-list">
          <li className="mob-nav-item">
            <Link href="/our-profile" className="mob-nav-link" onClick={() => setMenuOpen(false)}>
              Profile
            </Link>
          </li>

          <li className="mob-nav-item">
            <Link href="/Use-Cases" className="mob-nav-link" onClick={() => setMenuOpen(false)}>
              Use Cases
            </Link>
          </li>

          {/* Services dropdown */}
          <li className="mob-nav-item">
            <button
              className="mob-nav-link"
              onClick={(e) => toggleDropdown("mob-services", e)}
              aria-expanded={isOpen("mob-services")}
            >
              Services
              <ChevronDown
                size={15}
                strokeWidth={2.5}
                className={`mob-chevron ${isOpen("mob-services") ? "open" : ""}`}
              />
            </button>
            <div className={`mob-sub-panel ${isOpen("mob-services") ? "open" : ""}`}>
              <Link href="/services/pay-in" className="mob-sub-link" onClick={() => setMenuOpen(false)}>
                <span className="mob-sub-dot" />Pay-In
              </Link>
              <Link href="/services/pay-out" className="mob-sub-link" onClick={() => setMenuOpen(false)}>
                <span className="mob-sub-dot" />Pay-Out
              </Link>
              <Link href="/services/qr-code" className="mob-sub-link" onClick={() => setMenuOpen(false)}>
                <span className="mob-sub-dot" />QR Code
              </Link>
              <Link href="/services/virtual-account" className="mob-sub-link" onClick={() => setMenuOpen(false)}>
                <span className="mob-sub-dot" />Virtual Account
              </Link>
            </div>
          </li>

          <li className="mob-nav-item">
            <Link href="/contact" className="mob-nav-link" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>

          <li className="mob-nav-item">
            <Link href="https://payzonapi.com/account/sign-in" className="mob-nav-link" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </li>
        </ul>

        {/* Partner With Us section */}
        <div className="mob-partner-section">
          <p className="mob-partner-label">Partnerships</p>
          <button
            className="mob-partner-btn"
            onClick={(e) => toggleDropdown("mob-partner", e)}
            aria-expanded={isOpen("mob-partner")}
          >
            <span className="mob-partner-btn-inner">
              <span className="mob-partner-icon">
                <User size={14} strokeWidth={2} color="rgba(255,255,255,0.8)" />
              </span>
              Become Our Partner
            </span>
            <ChevronDown
              size={14}
              strokeWidth={2.5}
              className={`mob-chevron ${isOpen("mob-partner") ? "open" : ""}`}
            />
          </button>
          <div className={`mob-partner-sub ${isOpen("mob-partner") ? "open" : ""}`}>
            <div className="mob-partner-sub-inner">
              <Link href="/partner-wtih-us" className="mob-partner-link" onClick={() => setMenuOpen(false)}>
                Reseller
              </Link>
              <Link href="/partner-wtih-us" className="mob-partner-link" onClick={() => setMenuOpen(false)}>
                Service Provider
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Site Header ── */}
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
                    {/* Logo circle — bigger on mobile via class */}
                    <div
                      className="mob-header-logo-ring"
                      style={{
                        width: 62, height: 62, borderRadius: "50%", overflow: "hidden",
                        border: "2px solid rgba(255,255,255,0.6)", flexShrink: 0,
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logo.src} alt="Site Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>

                    {/* Brand name — bigger on mobile via class */}
                    <span
                      className="mob-header-brand-name"
                      style={{ ...NAV_FONT, fontSize: "24px", letterSpacing: "0.02em", color: "#ffffff", lineHeight: 1.2, whiteSpace: "nowrap" }}
                    >
                      Payzon API
                    </span>
                  </Link>
                </div>
              </div>

              {/* ── Desktop Navigation ── */}
              <div className="col-lg-6 d-none d-lg-block" ref={navRef}>
                <nav className="main_menu navbar navbar-expand-lg">
                  <div className="main_menu_inner justify-content-lg-center show" id="main_menu_dropdown">
                    <ul className="main_menu_list unordered_list justify-content-center">
                      <li>
                        <Link href="/our-profile" style={{ ...NAV_FONT, fontSize: "18px", letterSpacing: "0.01em" }}>Profile</Link>
                      </li>
                      <li>
                        <Link href="/Use-Cases" style={{ ...NAV_FONT, fontSize: "18px", letterSpacing: "0.01em" }}>Use Cases</Link>
                      </li>
                      <li className={`dropdown ${isOpen("services") ? "show" : ""}`}>
                        <a className="nav-link" href="#" role="button" onClick={(e) => toggleDropdown("services", e)} aria-expanded={isOpen("services")} style={navLinkStyle}>
                          Services <ChevronDown size={15} strokeWidth={2.5} />
                        </a>
                        <ul className={`dropdown-menu ${isOpen("services") ? "show" : ""}`}>
                          <li><Link href="/services/pay-in" style={dropItemStyle}>Pay-In</Link></li>
                          <li><Link href="/services/pay-out" style={dropItemStyle}>Pay-Out</Link></li>
                          <li><Link href="/services/qr-code" style={dropItemStyle}>QR Code</Link></li>
                          <li><Link href="/services/virtual-account" style={dropItemStyle}>Virtual Account</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact" style={{ ...NAV_FONT, fontSize: "18px", letterSpacing: "0.01em" }}>Contact</Link>
                      </li>
                      <li>
                        <Link href="https://payzonapi.com/account/sign-in" style={{ ...NAV_FONT, fontSize: "18px", letterSpacing: "0.01em" }}>Login</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* ── Action Buttons ── */}
              <div className="col-lg-3 col-7">
                <ul className="btns_group p-0 m-0 unordered_list justify-content-end" style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>

                  {/* Mobile hamburger — bigger size */}
                  <li className="d-lg-none" style={{ margin: 0 }}>
                    <button
                      className="mobile_menu_btn mobile-hamburger-btn"
                      type="button"
                      onClick={handleMobileToggle}
                      aria-expanded={menuOpen}
                      aria-label="Toggle navigation"
                      style={{
                        padding: "6px 8px",
                        minWidth: "46px",
                        height: "46px",
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        borderRadius: "10px",
                        color: "#fff",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.15s",
                      }}
                    >
                      {menuOpen ? <X size={22} strokeWidth={2.2} /> : <Menu size={22} strokeWidth={2.2} />}
                    </button>
                  </li>

                  {/* Desktop: Partner With Us dropdown */}
                  <li className="d-none d-lg-block" style={{ margin: 0, position: "relative" }} ref={navRef}>
                    <button
                      type="button"
                      className="btn bg-dark rounded-pill"
                      onClick={(e) => toggleDropdown("partnerWith", e)}
                      aria-expanded={isOpen("partnerWith")}
                      style={{ ...NAV_FONT, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: "0.95rem", padding: "8px 16px", lineHeight: 1, minHeight: "40px", whiteSpace: "nowrap", border: "none", cursor: "pointer" }}
                    >
                      <span className="btn_icon" style={{ display: "inline-flex", alignItems: "center" }}>
                        <User size={17} strokeWidth={2.1} />
                      </span>
                      <span className="btn_label">Become Our Partner</span>
                      <ChevronDown size={16} strokeWidth={2.5} />
                    </button>

                    {isOpen("partnerWith") && (
                      <ul style={{ position: "absolute", right: 0, top: "calc(100% + 6px)", left: "auto", minWidth: "190px", zIndex: 9999, borderRadius: "10px", padding: "6px 0", margin: 0, listStyle: "none", backgroundColor: "#ffffff", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", border: "1px solid rgba(0,0,0,0.08)" }}>
                        <li>
                          <Link href="/partner-wtih-us" className="partner-dropdown-item" onClick={() => setOpenDropdowns([])} style={{ ...dropItemStyle, display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", color: "#1a1a1a", textDecoration: "none", fontSize: "15px", transition: "background-color 0.15s ease" }}>
                            Reseller
                          </Link>
                        </li>
                        <li style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.07)", margin: "4px 12px" }} />
                        <li>
                          <Link href="/partner-wtih-us" className="partner-dropdown-item" onClick={() => setOpenDropdowns([])} style={{ ...dropItemStyle, display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", color: "#1a1a1a", textDecoration: "none", fontSize: "15px", transition: "background-color 0.15s ease" }}>
                            Service Provider
                          </Link>
                        </li>
                      </ul>
                    )}
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