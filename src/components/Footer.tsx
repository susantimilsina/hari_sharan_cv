import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { SiBehance } from "react-icons/si";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#work" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  { icon: <FaFacebookF size={13} />, label: "Facebook", href: "#" },
  { icon: <SiBehance size={13} />, label: "Behance", href: "#" },
  { icon: <FaTwitter size={13} />, label: "Twitter", href: "#" },
  { icon: <FaInstagram size={13} />, label: "Instagram", href: "#" },
  { icon: <FaLinkedinIn size={13} />, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#070E27",
        padding: "30px 0",
      }}
    >
      <div className="container-custom">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          style={{ textAlign: "center" }}
        >
          {/* Left: copyright */}
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "13px",
            }}
          >
            &copy; {new Date().getFullYear()} Hari Sharan Prajapati. All rights reserved.
          </p>

          {/* Center: nav links */}
          <nav style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#2396fc")
                }
                onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.5)")
                }
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: social icons */}
          <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#2396fc";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2396fc";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.5)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
