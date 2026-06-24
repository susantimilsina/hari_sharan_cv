"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { label: "Adobe Illustrator", pct: 95 },
  { label: "Adobe Photoshop", pct: 95 },
  { label: "Adobe InDesign", pct: 88 },
  { label: "Adobe After Effects", pct: 82 },
  { label: "Video Editing", pct: 80 },
  { label: "Social Media Design", pct: 90 },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section
      id="skills"
      className="section-pad"
      style={{ background: "#ffffff" }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — label + description */}
          <div>
            <span className="sub-label" style={{ color: "#2396fc" }}>My Skills</span>
            <h4
              style={{
                fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                color: "#111135",
                fontSize: "26px",
                fontWeight: 700,
                marginBottom: "16px",
                lineHeight: 1.3,
              }}
            >
              My Design &amp; Creative Skills
            </h4>
            <p
              style={{
                color: "#50506a",
                fontSize: "14px",
                lineHeight: "1.85",
              }}
            >
              Over 13 years mastering the Adobe Creative Suite and visual
              communication — from brand identity and print to motion graphics
              and social media design.
            </p>
          </div>

          {/* Right — skill bars */}
          <div ref={ref}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "#111135",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {skill.label}
                    </span>
                    <span
                      style={{
                        color: "#000000",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      {skill.pct}%
                    </span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{
                        width: animated ? `${skill.pct}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
