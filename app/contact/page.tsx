"use client";

import  l1 from "@/public/assets/images/Blog Section/logo1.png"
import  l2 from "@/public/assets/images/Blog Section/shoppy-logo.png"
import  l3 from "@/public/assets/images/Blog Section/payzonit.png"
import  l4 from "@/public/assets/images/Blog Section/PAYZONINDIA-pngLogo.png"


import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Website {
  badge: string;
  name: string;
  desc: string;
  url: string;
  icon: React.ReactNode;
  logo: string;
}

// ─── Web3Forms Access Key ─────────────────────────────────────────────────────
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

// ─── Data ────────────────────────────────────────────────────────────────────

const WEBSITES: Website[] = [
  {
    badge: "OFFICIAL",
    name: "Payzon India",
    desc: "Corporate website & main platform",
    url: "payzonindia.com",
    logo: l1.src,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 3c2 3 3 5.5 3 9s-1 6-3 9M12 3c-2 3-3 5.5-3 9s1 6 3 9M3 12h18"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  {
    badge: "MARKETING",
    name: "Payzon Marketing",
    desc: "Marketing & promotional services",
    url: "payzonmarketing.com",
    logo: l3.src,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <polyline
          points="9 22 9 12 15 12 15 22"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    badge: "E-COMMERCE",
    name: "Payzon Shoppy",
    desc: "E-commerce & shopping platform",
    url: "payzonshoppy.com",
    logo: l2.src,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 6h3l2 9h10l2-7H8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="19" r="1.5" fill="currentColor" />
        <circle cx="17" cy="19" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    badge: "IT SERVICES",
    name: "Payzon IT Services",
    desc: "Technology & IT solutions",
    url: "payzonitservices.com",
    logo: l4.src,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 21h8M12 17v4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const INFO_ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "Location",
    value: "B1, Raisen Rd, Manak Vihar, Patel Nagar, Bhopal, Madhya Pradesh 462022",

    


  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.7" />
        <polyline
          points="12 6 12 12 16 14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Opening",
    value: "Mon – Sat\n10:00 – 17:00",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
    label: "Email",
    value: "info@payzonindia.com",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
    label: "Phone",
    value: "(+91) 755 485 9540",
  },
];

// ─── Decorative Background SVG shapes ─────────────────────────────────────────

function BgDecor() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(200,255,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <svg
        style={{ position: "absolute", top: 0, left: 0, width: "340px", opacity: 0.12 }}
        viewBox="0 0 340 500"
        fill="none"
      >
        <path d="M-40 100 Q80 80 120 200 Q160 320 80 400 Q0 480 -40 500" stroke="#7C3AED" strokeWidth="1" fill="none" />
        <path d="M-60 80 Q60 60 110 190 Q160 320 70 420 Q-10 500 -60 520" stroke="#7C3AED" strokeWidth="1" fill="none" />
        <path d="M-80 60 Q40 40 100 180 Q155 310 60 440 Q-20 520 -80 540" stroke="#7C3AED" strokeWidth="0.8" fill="none" />
        <path d="M-20 120 Q100 100 130 210 Q165 330 90 380 Q10 460 -20 480" stroke="#9333EA" strokeWidth="0.7" fill="none" />
      </svg>
      <svg
        style={{ position: "absolute", bottom: 0, right: 0, width: "300px", opacity: 0.1 }}
        viewBox="0 0 300 400"
        fill="none"
      >
        <path d="M340 0 Q220 50 240 150 Q260 250 340 300" stroke="#7C3AED" strokeWidth="1" fill="none" />
        <path d="M360 20 Q230 70 255 170 Q280 270 360 320" stroke="#7C3AED" strokeWidth="0.8" fill="none" />
        <path d="M380 40 Q240 90 265 190 Q295 290 380 340" stroke="#9333EA" strokeWidth="0.7" fill="none" />
      </svg>
      <div
        style={{
          position: "absolute", width: 500, height: 500, top: -120, left: -150,
          background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute", width: 400, height: 400, bottom: -80, right: -80,
          background: "radial-gradient(circle, rgba(200,255,0,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute", width: 700, height: 700, top: "30%", left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(90,40,180,0.12) 0%, transparent 60%)",
          borderRadius: "50%",
        }}
      />
      <svg style={{ position: "absolute", top: 90, right: 40, opacity: 0.7 }} width="32" height="36" viewBox="0 0 32 36" fill="none">
        <path d="M16 0L32 14H0L16 0Z" fill="#C8FF00" />
        <path d="M16 14L32 28H0L16 14Z" fill="#C8FF00" opacity="0.5" />
        <circle cx="16" cy="34" r="2" fill="#7C3AED" />
      </svg>
      <svg style={{ position: "absolute", bottom: 60, left: 40, opacity: 0.7 }} width="28" height="44" viewBox="0 0 28 44" fill="none">
        <circle cx="14" cy="4" r="3" fill="#7C3AED" />
        <circle cx="14" cy="16" r="3" fill="#7C3AED" opacity="0.6" />
        <path d="M0 28L14 44L28 28H0Z" fill="#C8FF00" />
        <path d="M4 22L14 34L24 22H4Z" fill="#C8FF00" opacity="0.5" />
      </svg>
    </div>
  );
}

// ─── Contact Form (Web3Forms Integration) ────────────────────────────────────

type FormState = "idle" | "loading" | "success" | "error";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: form.subject
          ? `[Payzon Contact] ${form.subject} — from ${form.name}`
          : `[Payzon Contact] New message from ${form.name}`,
        from_name: "Payzon India Contact Form",
        name: form.name,
        email: form.email,
        phone: form.phone || "Not provided",
        topic: form.subject || "Not specified",
        message: form.message,
        botcheck: "",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setFormState("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setFormState("idle"), 6000);
      } else {
        throw new Error(data.message || "Submission failed. Please try again.");
      }
    } catch (err: unknown) {
      setFormState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setTimeout(() => setFormState("idle"), 6000);
    }
  };

  const isLoading = formState === "loading";

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {formState === "success" && (
        <div style={bannerStyle("#C8FF00", "rgba(200,255,0,0.08)", "rgba(200,255,0,0.28)")}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="8" stroke="#C8FF00" strokeWidth="1.5" />
            <path d="M5.5 9l2.5 2.5L12.5 6" stroke="#C8FF00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Message sent successfully! We'll get back to you within 24 hours.</span>
        </div>
      )}
      {formState === "error" && (
        <div style={bannerStyle("#FF6B6B", "rgba(255,107,107,0.08)", "rgba(255,107,107,0.28)")}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="8" stroke="#FF6B6B" strokeWidth="1.5" />
            <path d="M9 5v5M9 12.5v.5" stroke="#FF6B6B" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span>{errorMsg || "Failed to send. Please try again."}</span>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Field label="Full Name">
          <input
            name="name" value={form.name} onChange={handle} required disabled={isLoading}
            placeholder="John Doe" style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = "#C8FF00")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.35)")}
          />
        </Field>
        <Field label="Email Address">
          <input
            name="email" type="email" value={form.email} onChange={handle} required disabled={isLoading}
            placeholder="you@example.com" style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = "#C8FF00")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.35)")}
          />
        </Field>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Field label="Phone Number">
          <input
            name="phone" value={form.phone} onChange={handle} disabled={isLoading}
            placeholder="+91 000 000 0000" style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = "#C8FF00")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.35)")}
          />
        </Field>
        <Field label="Subject">
          <select
            name="subject" value={form.subject} onChange={handle} disabled={isLoading}
            style={{ ...styles.input, appearance: "none" } as React.CSSProperties}
            onFocus={(e) => (e.target.style.borderColor = "#C8FF00")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.35)")}
          >
            <option value="">Select a topic</option>
            <option value="API Integration">API Integration</option>
            <option value="Pay In">Pay In</option>
            <option value="Pay Out">Pay Out</option>
            <option value="QR Code Payments">QR Code Payments</option>
            <option value="Virtual Account">Virtual Account</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Other">Other</option>
          </select>
        </Field>
      </div>

      <Field label="Your Message">
        <textarea
          name="message" value={form.message} onChange={handle} required disabled={isLoading}
          rows={5} placeholder="Tell us how we can help..."
          style={{ ...styles.input, resize: "vertical", minHeight: 110 } as React.CSSProperties}
          onFocus={(e) => (e.target.style.borderColor = "#C8FF00")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.35)")}
        />
      </Field>

      <button
        type="submit"
        disabled={isLoading || formState === "success"}
        style={{
          background:
            formState === "success"
              ? "rgba(200,255,0,0.15)"
              : isLoading
              ? "rgba(200,255,0,0.6)"
              : "linear-gradient(135deg, #C8FF00 0%, #A0D900 100%)",
          color: formState === "success" ? "#C8FF00" : "#0D0B2A",
          border: formState === "success" ? "1px solid rgba(200,255,0,0.4)" : "none",
          borderRadius: 10,
          padding: "15px 36px",
          fontSize: 15,
          fontWeight: 800,
          cursor: isLoading || formState === "success" ? "not-allowed" : "pointer",
          letterSpacing: "-0.01em",
          transition: "transform 0.2s, box-shadow 0.2s, background 0.3s",
          alignSelf: "flex-start",
          display: "flex",
          alignItems: "center",
          gap: 8,
          opacity: isLoading ? 0.7 : 1,
        }}
        onMouseEnter={(e) => {
          if (!isLoading && formState !== "success") {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 10px 36px rgba(200,255,0,0.35)";
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
        }}
      >
        {isLoading ? (
          <><Spinner />Sending…</>
        ) : formState === "success" ? (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 4" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Message Sent!
          </>
        ) : (
          <>
            Send Message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h10M8 4l4 4-4 4" stroke="#0D0B2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}

// ─── Small helper components ──────────────────────────────────────────────────

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={styles.label}>{label}</label>
      {children}
    </div>
  );
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
      style={{ animation: "spin 0.8s linear infinite" }}>
      <circle cx="8" cy="8" r="6" stroke="#0D0B2A" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10" strokeLinecap="round" />
    </svg>
  );
}

function bannerStyle(color: string, bg: string, border: string): React.CSSProperties {
  return {
    display: "flex", alignItems: "center", gap: 10,
    background: bg, border: `1px solid ${border}`, borderRadius: 10,
    padding: "12px 16px", fontSize: 13, color: color,
    fontWeight: 500, lineHeight: 1.5, animation: "fadeDown 0.4s ease both",
  };
}

const styles = {
  label: {
    fontSize: 12, fontWeight: 600, color: "rgba(200,220,255,0.5)",
    letterSpacing: "0.06em", textTransform: "uppercase" as const,
  },
  input: {
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.35)",
    borderRadius: 10, padding: "12px 16px", fontSize: 14, color: "#E8E8FF",
    fontFamily: "inherit", outline: "none", transition: "border-color 0.2s", width: "100%",
  },
};

// ─── Social icons ─────────────────────────────────────────────────────────────

const SOCIALS = [
  {
    label: "Twitter / X", href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 5.932zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn", href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Instagram", href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "WhatsApp", href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: "YouTube", href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

// ─── Page Component ──────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        @keyframes spin { to { transform: rotate(360deg); } }

        .cp-page {
          padding-top: 80px;
          min-height: 100vh;
          background: #0D0B2A;
          color: #E8E8FF;
          font-family: 'Sora', system-ui, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .cp-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 1;
        }

        /* ── Hero Header ── */
        .cp-hero {
          padding: 100px 0 70px;
          text-align: center;
          position: relative;
        }
        .cp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(200,255,0,0.08);
          border: 1px solid rgba(200,255,0,0.28);
          border-radius: 6px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #C8FF00;
          text-transform: uppercase;
          margin-bottom: 22px;
          animation: fadeDown 0.6s ease both;
        }
        .cp-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #C8FF00;
          animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.7)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

        .cp-hero h1 {
          font-size: clamp(40px, 5.5vw, 72px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.03;
          color: #F0F0FF;
          margin-bottom: 20px;
          animation: fadeDown 0.6s 0.1s ease both;
        }
        .cp-hero h1 em {
          font-style: normal;
          background: linear-gradient(120deg, #C8FF00 0%, #A8E800 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cp-hero p {
          font-size: 16px;
          color: rgba(220,220,255,0.5);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.72;
          animation: fadeDown 0.6s 0.18s ease both;
        }

        .cp-line-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 12px 0 52px;
        }
        .cp-line-divider::before,
        .cp-line-divider::after {
          content: '';
          flex: 1;
          max-width: 180px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent);
        }
        .cp-line-divider span {
          width: 8px; height: 8px;
          background: #C8FF00;
          border-radius: 2px;
          transform: rotate(45deg);
        }

        /* ── Info + Form grid ── */
        .cp-main-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 32px;
          margin-bottom: 36px;
          animation: fadeUp 0.6s 0.25s ease both;
        }
        @media (max-width: 900px) {
          .cp-main-grid { grid-template-columns: 1fr; }
        }

        /* ── Info Panel ── */
        .cp-info-panel {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(124,58,237,0.25);
          border-radius: 20px;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          overflow: hidden;
        }
        .cp-info-panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #7C3AED, #C8FF00, transparent);
        }
        .cp-info-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C8FF00;
          margin-bottom: 28px;
        }
        .cp-info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cp-info-item:last-of-type { border-bottom: none; }
        .cp-info-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: rgba(124,58,237,0.15);
          border: 1px solid rgba(124,58,237,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C8FF00;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .cp-info-item:hover .cp-info-icon {
          background: rgba(200,255,0,0.1);
          border-color: rgba(200,255,0,0.4);
        }
        .cp-info-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(200,220,255,0.4);
          margin-bottom: 4px;
        }
        .cp-info-value {
          font-size: 14px;
          color: rgba(230,230,255,0.85);
          line-height: 1.55;
          white-space: pre-line;
        }
        .cp-social-row {
          display: flex;
          gap: 10px;
          margin-top: 24px;
        }
        .cp-social-btn {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(200,220,255,0.6);
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .cp-social-btn:hover {
          background: rgba(200,255,0,0.1);
          border-color: #C8FF00;
          color: #C8FF00;
          transform: translateY(-2px);
        }

        /* ── Form Panel ── */
        .cp-form-panel {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(124,58,237,0.25);
          border-radius: 20px;
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
        }
        .cp-form-panel::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C8FF00, #7C3AED, transparent);
        }
        .cp-form-title {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #F0F0FF;
          margin-bottom: 6px;
        }
        .cp-form-sub {
          font-size: 13px;
          color: rgba(200,220,255,0.45);
          margin-bottom: 28px;
        }

        /* ── Map row ── */
        .cp-map-row {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(124,58,237,0.25);
          height: 320px;
          position: relative;
          margin-bottom: 36px;
          animation: fadeUp 0.6s 0.35s ease both;
        }
        .cp-map-row iframe {
          width: 100%; height: 100%;
          filter: invert(90%) hue-rotate(190deg) saturate(0.7) brightness(0.8);
        }
        .cp-map-overlay-badge {
          position: absolute;
          top: 16px; left: 16px;
          background: rgba(13,11,42,0.9);
          border: 1px solid rgba(200,255,0,0.3);
          border-radius: 10px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #E8E8FF;
          backdrop-filter: blur(8px);
        }
        .cp-map-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #C8FF00;
          animation: pulse 2s infinite;
        }

        /* ── Websites section ── */
        .cp-section-header {
          text-align: center;
          margin-bottom: 32px;
          animation: fadeUp 0.6s 0.4s ease both;
        }
        .cp-section-header h2 {
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #F0F0FF;
          margin-bottom: 10px;
        }
        .cp-section-header p {
          font-size: 14px;
          color: rgba(200,220,255,0.45);
        }

        /* ─────────────────────────────────────────────────
           WEBSITES GRID — 4 columns desktop, 2×2 mobile
        ───────────────────────────────────────────────── */
        .cp-websites-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 80px;
          animation: fadeUp 0.6s 0.45s ease both;
        }

        /* Each card: vertical stack with logo on top, info below */
        .cp-website-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(124,58,237,0.22);
          border-radius: 18px;
          padding: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.25s, background 0.25s;
          text-decoration: none;
          position: relative;
          cursor: pointer;
        }
        .cp-website-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #C8FF00, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .cp-website-card:hover {
          border-color: rgba(200,255,0,0.38);
          background: rgba(200,255,0,0.03);
          transform: translateY(-4px);
        }
        .cp-website-card:hover::after { opacity: 1; }

        /* Top logo area */
        .cp-card-logo-area {
          width: 100%;
          height: 90px;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(124,58,237,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 20px;
          flex-shrink: 0;
          overflow: hidden;
        }
        .cp-card-logo-img {
          max-width: 85%;
          max-height: 54px;
          object-fit: contain;
          filter: brightness(1.1);
          transition: transform 0.25s;
        }
        .cp-website-card:hover .cp-card-logo-img {
          transform: scale(1.05);
        }
        /* Fallback icon when logo fails */
        .cp-card-icon-fallback {
          display: none;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(124,58,237,0.18);
          border: 1px solid rgba(124,58,237,0.3);
          align-items: center;
          justify-content: center;
          color: #C8FF00;
        }

        /* Bottom info area */
        .cp-card-info {
          padding: 16px 18px 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }
        .cp-badge {
          display: inline-block;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(124,58,237,0.2);
          border: 1px solid rgba(124,58,237,0.35);
          border-radius: 4px;
          padding: 3px 8px;
          color: #B47FFF;
          width: fit-content;
          margin-bottom: 2px;
        }
        .cp-website-name {
          font-size: 14px;
          font-weight: 700;
          color: #E8E8FF;
          letter-spacing: -0.015em;
          line-height: 1.3;
        }
        .cp-website-desc {
          font-size: 11.5px;
          color: rgba(200,220,255,0.45);
          line-height: 1.5;
        }
        .cp-website-url {
          font-size: 11px;
          font-family: 'JetBrains Mono', monospace;
          color: #C8FF00;
          opacity: 0.65;
          margin-top: auto;
          padding-top: 8px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .cp-website-card:hover .cp-website-url { opacity: 1; }

        /* ── Footer strip ── */
        .cp-footer-strip {
          border-top: 1px solid rgba(200,255,0,0.08);
          padding: 32px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .cp-footer-brand {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #F0F0FF;
        }
        .cp-footer-brand em {
          font-style: normal;
          color: #C8FF00;
        }
        .cp-footer-copy {
          font-size: 12px;
          color: rgba(200,220,255,0.3);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          /* Websites: 2×2 grid on tablet/mobile */
          .cp-websites-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .cp-form-panel { padding: 28px 20px; }
          .cp-info-panel { padding: 28px 20px; }
          /* Keep 2×2 on small mobile */
          .cp-websites-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .cp-card-logo-area { height: 72px; }
          .cp-card-info { padding: 12px 14px 14px; }
          .cp-website-name { font-size: 13px; }
          .cp-footer-strip { flex-direction: column; text-align: center; }
          .cp-map-row { height: 220px; }
          .cp-map-row iframe { width: 100% !important; height: 100% !important; }
        }

        /* Disabled state for inputs */
        input:disabled, textarea:disabled, select:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>

      <div className="cp-page">
        <BgDecor />

        <div className="cp-container">
          {/* ── Hero ── */}
          <header className="cp-hero">
            <div className="cp-eyebrow">
              <span className="cp-eyebrow-dot" />
              Contact Us
            </div>
            <h1>
              Get <em>In Touch</em>
            </h1>
            <p>
              We would love to hear from you. Our team is always ready to help
              and provide you with the best possible support for Payzon API
              integration.
            </p>
            <div className="cp-line-divider">
              <span />
            </div>
          </header>

          {/* ── Info + Form ── */}
          <div className="cp-main-grid">
            {/* Info Panel */}
            <aside className="cp-info-panel">
              <p className="cp-info-title">Contact Information</p>

              {INFO_ITEMS.map((item) => (
                <div key={item.label} className="cp-info-item">
                  <div className="cp-info-icon">{item.icon}</div>
                  <div>
                    <p className="cp-info-label">{item.label}</p>
                    <p className="cp-info-value">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div>
                <p className="cp-info-label" style={{ marginTop: 20, marginBottom: 0 }}>
                  Social Media
                </p>
                <div className="cp-social-row">
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.href} className="cp-social-btn" title={s.label} rel="noreferrer">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              <svg
                aria-hidden="true"
                style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.08 }}
                width="120" height="120" viewBox="0 0 120 120" fill="none"
              >
                <circle cx="120" cy="120" r="80" stroke="#7C3AED" strokeWidth="1.5" />
                <circle cx="120" cy="120" r="50" stroke="#C8FF00" strokeWidth="1" />
                <circle cx="120" cy="120" r="25" stroke="#7C3AED" strokeWidth="0.8" />
              </svg>
            </aside>

            {/* Form Panel */}
            <section className="cp-form-panel">
              <h2 className="cp-form-title">Send Message</h2>
              <p className="cp-form-sub">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </section>
          </div>

      {/* ── Map ── */}
<div className="cp-map-row">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.027271651592!2d77.493428!3d23.2496407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41dd20a8788b%3A0xbac1812be533a741!2sPAYZONINDIA%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1776700000000!5m2!1sen!2sin"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="PAYZONINDIA PVT LTD - Bhopal"
    style={{ border: 0 }}
    allowFullScreen
  />
  
  
</div>

          {/* ── Official Websites ── */}
          <section>
            <div className="cp-section-header">
              <div className="cp-eyebrow" style={{ margin: "0 auto 16px" }}>
                <span className="cp-eyebrow-dot" />
                Our Ecosystem
              </div>
              <h2>Our Official Websites</h2>
              <p>Explore our complete ecosystem of services across multiple platforms</p>
            </div>

            {/* ── 4-column grid (2×2 on mobile) ── */}
            <div className="cp-websites-grid">
              {WEBSITES.map((site) => (
                <a
                  key={site.url}
                  href={`https://${site.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="cp-website-card"
                >
                  {/* Logo area at top */}
                  <div className="cp-card-logo-area">
                    <img
                      src={site.logo}
                      alt={`${site.name} logo`}
                      className="cp-card-logo-img"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    {/* SVG icon — shown only when logo fails */}
                    <span className="cp-card-icon-fallback">
                      {site.icon}
                    </span>
                  </div>

                  {/* Info area below logo */}
                  <div className="cp-card-info">
                    <span className="cp-badge">{site.badge}</span>
                    <p className="cp-website-name">{site.name}</p>
                    <p className="cp-website-desc">{site.desc}</p>
                    <span className="cp-website-url">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {site.url}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* ── Footer strip ── */}
          <footer className="cp-footer-strip">
            <div className="cp-footer-brand">
              Payzonindia Private Limited<em>.</em>
            </div>
            <p className="cp-footer-copy">
              Patel Nagar, Bhopal, MP • info@payzonindia.com
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}