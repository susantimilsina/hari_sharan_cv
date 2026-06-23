"use client";

import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Hari delivered exceptional branding work for our startup. His attention to detail and creativity exceeded all our expectations. The brand identity he created has become central to our marketing success.",
    name: "Michael Daniel",
    role: "CEO, ManySoft Agency",
    initials: "MD",
  },
  {
    quote:
      "Working with Hari on our social media campaigns was a game-changer. His designs drove a 40% increase in engagement. A true professional who understands both aesthetics and business objectives.",
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    initials: "SJ",
  },
  {
    quote:
      "Hari's art direction for our advertising campaigns was outstanding. He leads creative teams seamlessly and delivers high-impact visuals that connect with audiences. Highly recommended.",
    name: "David Williams",
    role: "Founder, CreativeLab",
    initials: "DW",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section className="section-pad" style={{ background: "#f5f5fa" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="sub-label" style={{ color: "#0d1094" }}>Clients</span>
          <h2
            style={{
              fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
              color: "#111135",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            What Our Clients Say?
          </h2>
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "12px",
              padding: "48px",
              position: "relative",
            }}
          >
            <FaQuoteLeft
              size={36}
              style={{
                color: "#0d1094",
                marginBottom: "24px",
                opacity: 0.8,
              }}
            />

            <p
              style={{
                color: "#50506a",
                fontSize: "16px",
                lineHeight: "1.85",
                marginBottom: "32px",
              }}
            >
              {t.quote}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #73f7ea, #0d1094)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                    color: "#111135",
                    fontWeight: 700,
                    fontSize: "15px",
                    marginBottom: "2px",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    color: "#0d1094",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              marginTop: "28px",
            }}
          >
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid rgba(255,80,142,0.4)",
                background: "transparent",
                color: "#0d1094",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "linear-gradient(135deg,#73f7ea,#0d1094)";
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#0d1094";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,80,142,0.4)";
              }}
            >
              &#8592;
            </button>

            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  width: i === idx ? "28px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  background:
                    i === idx
                      ? "linear-gradient(to right, #73f7ea, #0d1094)"
                      : "rgba(0,0,0,0.15)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  padding: 0,
                }}
              />
            ))}

            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid rgba(255,80,142,0.4)",
                background: "transparent",
                color: "#0d1094",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "linear-gradient(135deg,#73f7ea,#0d1094)";
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#0d1094";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,80,142,0.4)";
              }}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
