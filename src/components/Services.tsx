import {
  FaPalette,
  FaInstagram,
  FaPrint,
  FaFilm,
  FaBullhorn,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: <FaPalette size={24} />,
    title: "Brand Identity Design",
    desc: "Designing modern high-impact logos that reflect brand identity and business values.",
    tags: ["Logo", "Branding", "Identity"],
  },
  {
    icon: <FaInstagram size={24} />,
    title: "Social Media Design",
    desc: "Visually compelling campaigns that drive engagement and boost brand visibility.",
    tags: ["Social", "Campaign", "Digital"],
  },
  {
    icon: <FaPrint size={24} />,
    title: "Print & Publication",
    desc: "High-quality ads, posters, brochures, and banners aligned with brand guidelines.",
    tags: ["Print", "InDesign", "Layout"],
  },
  {
    icon: <FaFilm size={24} />,
    title: "Video & Motion",
    desc: "Engaging video content and motion graphics using Adobe Premiere and After Effects.",
    tags: ["Video", "After Effects", "Premiere"],
  },
  {
    icon: <FaBullhorn size={24} />,
    title: "Art Direction",
    desc: "Leading creative teams to develop compelling campaigns enhancing brand visibility.",
    tags: ["Creative", "Strategy", "Direction"],
  },
  {
    icon: <FaExternalLinkAlt size={24} />,
    title: "Freelance (Upwork)",
    desc: "113+ successfully completed projects consistently meeting client expectations.",
    tags: ["Upwork", "Top Rated+", "Remote"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: "#f5f5fa" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="sub-label" style={{ color: "#0d1094" }}>My Services</span>
          <h2
            style={{
              fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
              color: "#111135",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            What I Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                padding: "36px 28px",
                textAlign: "center",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,80,142,0.35)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 40px rgba(255,80,142,0.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(0,0,0,0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  margin: "0 auto 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0d1094",
                }}
              >
                {s.icon}
              </div>

              <h4
                style={{
                  fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                  color: "#111135",
                  fontWeight: 700,
                  fontSize: "17px",
                  paddingBottom: "24px",
                  marginBottom: "24px",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  position: "relative",
                }}
              >
                {s.title}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-1px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "56px",
                    height: "2px",
                    background: "linear-gradient(to right, #73f7ea, #0d1094)",
                    borderRadius: "2px",
                  }}
                />
              </h4>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                {s.tags.map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    style={{
                      color: "#0d1094",
                      fontSize: "13px",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.textDecoration =
                        "underline")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.textDecoration =
                        "none")
                    }
                  >
                    {tag}
                  </a>
                ))}
              </div>

              <p
                style={{
                  color: "#50506a",
                  fontSize: "14px",
                  lineHeight: "1.75",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
