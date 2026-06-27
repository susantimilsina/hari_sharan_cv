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
    icon: <FaPalette size={22} />,
    title: "Brand Identity Design",
    desc: "Designing modern high-impact logos that reflect brand identity and business values.",
    tags: ["Logo", "Branding", "Identity"],
  },
  {
    icon: <FaInstagram size={22} />,
    title: "Social Media Design",
    desc: "Visually compelling campaigns that drive engagement and boost brand visibility.",
    tags: ["Social", "Campaign", "Digital"],
  },
  {
    icon: <FaPrint size={22} />,
    title: "Print & Publication",
    desc: "High-quality ads, posters, brochures, and banners aligned with brand guidelines.",
    tags: ["Print", "InDesign", "Layout"],
  },
  {
    icon: <FaFilm size={22} />,
    title: "Video & Motion",
    desc: "Engaging video content and motion graphics using Adobe Premiere and After Effects.",
    tags: ["Video", "After Effects", "Premiere"],
  },
  {
    icon: <FaBullhorn size={22} />,
    title: "Art Direction",
    desc: "Leading creative teams to develop compelling campaigns enhancing brand visibility.",
    tags: ["Creative", "Strategy", "Direction"],
  },
  {
    icon: <FaExternalLinkAlt size={22} />,
    title: "Freelance (Upwork)",
    desc: "113+ successfully completed projects consistently meeting client expectations.",
    tags: ["Upwork", "Top Rated+", "Remote"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: "#f5f5fa" }}>
      <div className="container-custom">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              display: "inline-block",
              color: "#2396fc",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            My Services
          </span>
          <h2
            style={{
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              color: "#2396fc",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            What I Offer
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "40px 28px 32px",
                textAlign: "center",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px rgba(35,150,252,0.15)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 16px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "#ebebf0",
                  margin: "0 auto 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2396fc",
                }}
              >
                {s.icon}
              </div>

              {/* Title + gradient separator */}
              <h4
                style={{
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                  color: "#111135",
                  fontWeight: 700,
                  fontSize: "17px",
                  marginBottom: "14px",
                }}
              >
                {s.title}
              </h4>
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: "linear-gradient(to right, #00f3ff, #2396fc)",
                  borderRadius: "2px",
                  margin: "0 auto 20px",
                }}
              />

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      color: "#2396fc",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
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
