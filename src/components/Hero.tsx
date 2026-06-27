"use client";

import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import NetworkCanvas from "./NetworkCanvas";

const typedWords = ["Art Director", "Graphic Designer", "Video Editor"];

// Static particle positions to avoid hydration mismatch
const particles = [
  { top: "8%", left: "12%", size: 3, opacity: 0.5 },
  { top: "15%", left: "78%", size: 2, opacity: 0.4 },
  { top: "22%", left: "35%", size: 4, opacity: 0.3 },
  { top: "30%", left: "88%", size: 2, opacity: 0.6 },
  { top: "42%", left: "5%", size: 3, opacity: 0.4 },
  { top: "55%", left: "60%", size: 2, opacity: 0.5 },
  { top: "65%", left: "25%", size: 4, opacity: 0.3 },
  { top: "72%", left: "92%", size: 2, opacity: 0.4 },
  { top: "80%", left: "48%", size: 3, opacity: 0.5 },
  { top: "88%", left: "15%", size: 2, opacity: 0.3 },
  { top: "5%", left: "55%", size: 3, opacity: 0.4 },
  { top: "18%", left: "95%", size: 2, opacity: 0.5 },
  { top: "35%", left: "70%", size: 4, opacity: 0.3 },
  { top: "48%", left: "40%", size: 2, opacity: 0.6 },
  { top: "60%", left: "82%", size: 3, opacity: 0.4 },
  { top: "75%", left: "3%", size: 2, opacity: 0.5 },
  { top: "90%", left: "65%", size: 3, opacity: 0.3 },
  { top: "12%", left: "44%", size: 2, opacity: 0.4 },
  { top: "38%", left: "18%", size: 3, opacity: 0.5 },
  { top: "52%", left: "75%", size: 2, opacity: 0.3 },
  { top: "25%", left: "8%", size: 4, opacity: 0.4 },
  { top: "68%", left: "55%", size: 2, opacity: 0.5 },
  { top: "82%", left: "32%", size: 3, opacity: 0.3 },
  { top: "95%", left: "88%", size: 2, opacity: 0.4 },
  { top: "44%", left: "98%", size: 3, opacity: 0.5 },
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = typedWords[wordIndex];
      if (!isDeleting) {
        charIndex++;
        setTypedText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, 2000);
        } else {
          timeoutId = setTimeout(tick, 100);
        }
      } else {
        charIndex--;
        setTypedText(word.slice(0, charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % typedWords.length;
          timeoutId = setTimeout(tick, 200);
        } else {
          timeoutId = setTimeout(tick, 60);
        }
      }
    };

    timeoutId = setTimeout(tick, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "85vh",
        backgroundImage: "url('/Background-banner.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        clipPath:
          "polygon(50% 0%, 100% 0, 100% 86%, 33% 99%, 0 88%, 0 0)",
        paddingBottom: "40px",
      }}
    >
      {/* Radial glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,80,142,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,80,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Network animation */}
      <NetworkCanvas />

      {/* Particle dots */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "#ffffff",
            opacity: p.opacity,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Circular backdrop — centered behind the person's upper body */}
      <div className="hero-backdrop" />

      {/* Hero photo — pinned bottom-right, bleeds to edge */}
      <img
        src="/hero-hari.webp"
        alt="Hari Sharan Prajapati"
        className="hero-photo"
      />

      {/* Left content */}
      <div className="container-custom relative z-10 w-full pt-12 pb-4">
        <div className="hero-text-col">
          {/* Sub-label */}
          <h5
            style={{
              color: "#00f3fe",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
            }}
          >
            Hari Sharan Prajapati
          </h5>

          {/* Main heading with typed text */}
          <h2
            style={{
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              color: "#ffffff",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            {"I'm a "}
            <span className="typed-gradient">{typedText}</span>
            <span className="typed-cursor">|</span>
          </h2>

          {/* Description */}
          <p
            style={{
              color: "#c5c5d5",
              fontSize: "16px",
              lineHeight: "1.8",
              marginBottom: "36px",
              maxWidth: "540px",
            }}
          >
            Accomplished Art Director with 13+ years of experience delivering
            high-impact visual identities, social media campaigns, print
            publications, and motion graphics. Top Rated Plus on Upwork with
            113+ completed projects.
          </p>

          {/* CTA */}
          <a href="#work" className="btn-primary-custom" style={{ background: "#00f3fe", color: "#000" }}>
            Go To Portfolio <FaChevronRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
