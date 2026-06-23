"use client";

import { useState } from "react";

type Category = "all" | "branding" | "social" | "print" | "motion";

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Branding", value: "branding" },
  { label: "Social", value: "social" },
  { label: "Print", value: "print" },
  { label: "Motion", value: "motion" },
];

interface Project {
  id: number;
  num: string;
  title: string;
  category: string;
  cats: Category[];
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    num: "01",
    title: "Brand Identity",
    category: "Branding",
    cats: ["branding"],
    gradient: "linear-gradient(135deg, #1a0f40 0%, #2d1b69 50%, #5240a0 100%)",
  },
  {
    id: 2,
    num: "02",
    title: "Social Campaign",
    category: "Social Media",
    cats: ["social"],
    gradient: "linear-gradient(135deg, #3a0a1a 0%, #6e1040 50%, #c03060 100%)",
  },
  {
    id: 3,
    num: "03",
    title: "Magazine Layout",
    category: "Print",
    cats: ["print"],
    gradient: "linear-gradient(135deg, #0a1040 0%, #1a2855 50%, #2040a0 100%)",
  },
  {
    id: 4,
    num: "04",
    title: "Motion Reel",
    category: "Motion",
    cats: ["motion"],
    gradient: "linear-gradient(135deg, #2a0a3e 0%, #5a1070 50%, #9030c0 100%)",
  },
  {
    id: 5,
    num: "05",
    title: "Corporate Guidelines",
    category: "Branding",
    cats: ["branding", "print"],
    gradient: "linear-gradient(135deg, #1a1535 0%, #2a2060 50%, #4040a0 100%)",
  },
  {
    id: 6,
    num: "06",
    title: "Instagram Growth Pack",
    category: "Social Media",
    cats: ["social", "branding"],
    gradient: "linear-gradient(135deg, #350a2a 0%, #6a1455 50%, #b030a0 100%)",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("all");

  const visible = projects.filter(
    (p) => active === "all" || p.cats.includes(active)
  );

  return (
    <section id="work" className="section-pad" style={{ background: "#ffffff" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="sub-label" style={{ color: "#0d1094" }}>Gallery</span>
          <h2
            style={{
              fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
              color: "#111135",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            My Portfolio
          </h2>
        </div>

        {/* Filter buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={
                active === f.value
                  ? {
                      padding: "9px 24px",
                      background: "linear-gradient(135deg, #73f7ea, #0d1094)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }
                  : {
                      padding: "9px 24px",
                      background: "transparent",
                      color: "#50506a",
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: "4px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visible.map((p) => (
            <div
              key={p.id}
              className="group"
              style={{
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                aspectRatio: "4/3",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: p.gradient,
                  transition: "transform 0.4s ease",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}
              >
                <span
                  style={{
                    color: "#73f7ea",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {p.num}. {p.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  {p.title}
                </h3>
              </div>

              <div
                className="hover-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(17,17,53,0.9)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0";
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "2px solid #73f7ea",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    color: "#73f7ea",
                    fontSize: "20px",
                  }}
                >
                  +
                </div>
                <span
                  style={{
                    color: "#73f7ea",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {p.num}. {p.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="https://www.upwork.com"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-custom"
          >
            Load More
          </a>
        </div>
      </div>
    </section>
  );
}
