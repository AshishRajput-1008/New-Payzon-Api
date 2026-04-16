"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { NavLink } from "@/types";

// ─── Hook: reusable open/close logic ────────────────────────────────────────
function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef<HTMLLIElement>(null);

  const open = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  }, []);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { isOpen, open, close, toggle, ref };
}

// ─── Root export ─────────────────────────────────────────────────────────────
interface NavigationDropdownProps {
  items: NavLink[];
}

export default function NavigationDropdown({ items }: NavigationDropdownProps) {
  return (
    <ul className="main_menu_list unordered_list justify-content-center">
      {items.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </ul>
  );
}

// ─── Top-level nav item ───────────────────────────────────────────────────────
function NavItem({ item }: { item: NavLink }) {
  const { isOpen, open, close, toggle, ref } = useDropdown();
  const hasChildren = Boolean(item.children?.length);

  // No dropdown — plain link
  if (!hasChildren) {
    return (
      <li className={item.active ? "active" : ""}>
        <Link href={item.href}>{item.label}</Link>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className={[
        "dropdown",
        isOpen ? "show" : "",
        item.active ? "active" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <button
        className="nav-link"
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
      </button>

      <ul className={`dropdown-menu${isOpen ? " show" : ""}`}>
        {item.children!.map((child, i) =>
          child.children?.length ? (
            // Nested sub-dropdown
            <SubDropdown key={i} label={child.label} items={child.children} />
          ) : (
            <li key={i} className={child.active ? "active" : ""}>
              <Link href={child.href}>{child.label}</Link>
            </li>
          )
        )}
      </ul>
    </li>
  );
}

// ─── Sub-dropdown (e.g. Blogs, Career inside Pages) ──────────────────────────
// Renders its own <li> so it is placed directly inside the parent <ul>
function SubDropdown({ label, items }: { label: string; items: NavLink[] }) {
  const { isOpen, open, close, toggle, ref } = useDropdown();

  return (
    <li
      ref={ref}
      className={["dropdown", isOpen ? "show" : ""].filter(Boolean).join(" ")}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <button
        className="nav-link"
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
      </button>

      <ul className={`dropdown-menu${isOpen ? " show" : ""}`}>
        {items.map((item, i) => (
          <li key={i} className={item.active ? "active" : ""}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}