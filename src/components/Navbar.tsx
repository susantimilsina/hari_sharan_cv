"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiBehance } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen || mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
              padding: "10px 0",
              background: "rgba(11,15,40,0.96)",
              backdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }
            : { padding: "20px 0", background: "transparent" }
        }
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            style={{
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: scrolled ? "20px" : "24px",
              textDecoration: "none",
              transition: "font-size 0.3s",
            }}
          >
            Hari Sharan
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#2396fc")
                }
                onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.7)")
                }
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: custom 3-bar menu icon for drawer */}
          <div className="flex items-center gap-4">
            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-1"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle mobile menu"
              style={{ background: "transparent", border: "none" }}
            >
              <div style={{ width: "24px", height: "2px", background: "#fff" }} />
              <div style={{ width: "16px", height: "2px", background: "#fff" }} />
              <div style={{ width: "24px", height: "2px", background: "#fff" }} />
            </button>

            {/* Desktop drawer button */}
            <button
              className="hidden lg:flex flex-col gap-1.5 cursor-pointer p-1"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open side drawer"
              style={{ background: "transparent", border: "none" }}
            >
              <div style={{ width: "24px", height: "2px", background: "#fff" }} />
              <div style={{ width: "16px", height: "2px", background: "#fff" }} />
              <div style={{ width: "24px", height: "2px", background: "#fff" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen nav */}
      <div
        className="lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300"
        style={{
          background: "rgba(11,15,40,0.98)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            cursor: "pointer",
          }}
          aria-label="Close mobile menu"
        >
          ×
        </button>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                fontSize: "24px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#2396fc")
              }
              onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.85)")
              }
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Side Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-[60] transition-transform duration-300 overflow-y-auto"
        style={{
          width: "320px",
          background: "#0B0F28",
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          padding: "40px 30px",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setDrawerOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "24px",
            cursor: "pointer",
            lineHeight: 1,
          }}
          aria-label="Close drawer"
        >
          ×
        </button>

        {/* Profile image placeholder */}
        <div
          style={{
            width: "100%",
            height: "180px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #2396fc33, #2396fc33)",
            border: "1px solid rgba(255,80,142,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
            fontSize: "40px",
            fontWeight: 800,
            color: "#2396fc",
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
          }}
        >
          HSP
        </div>

        {/* About Me heading */}
        <h4
          style={{
            fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            color: "#ffffff",
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          About Me
        </h4>

        {/* Bio */}
        <p
          style={{
            color: "#c5c5d5",
            fontSize: "13px",
            lineHeight: "1.8",
            marginBottom: "24px",
          }}
        >
          Art Director & Graphic Designer with 13+ years of experience. Top Rated
          Plus freelancer on Upwork with 113+ successfully completed projects.
        </p>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            marginBottom: "24px",
          }}
        />

        {/* Contact items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
          {[
            { icon: <FaPhone size={12} />, text: "+977 9849151912" },
            { icon: <FaEnvelope size={12} />, text: "prajapatiharisharan@gmail.com" },
            { icon: <FaMapMarkerAlt size={12} />, text: "Bhaktapur, Nepal" },
          ].map((item) => (
            <div
              key={item.text}
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <span style={{ color: "#2396fc" }}>{item.icon}</span>
              <span style={{ color: "#c5c5d5", fontSize: "13px" }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            marginBottom: "24px",
          }}
        />

        {/* Social icons */}
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            { icon: <FaFacebookF size={13} />, label: "Facebook", href: "#" },
            { icon: <SiBehance size={13} />, label: "Behance", href: "#" },
            { icon: <FaTwitter size={13} />, label: "Twitter", href: "#" },
            { icon: <FaLinkedinIn size={13} />, label: "LinkedIn", href: "#" },
            { icon: <FaInstagram size={13} />, label: "Instagram", href: "#" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c5c5d5",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "linear-gradient(135deg,#2396fc,#2396fc)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#c5c5d5";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
