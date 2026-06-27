"use client";

import { useState, useEffect, useRef } from "react";

type Category = "all" | "logo" | "motion" | "print" | "reels" | "social";

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Logo", value: "logo" },
  { label: "Motion & Video", value: "motion" },
  { label: "Print", value: "print" },
  { label: "Reels & Shorts", value: "reels" },
  { label: "Social Media", value: "social" },
];

const categoryCards: { cat: Category; label: string; image: string }[] = [
  { cat: "logo",   label: "Logo",            image: "/portfolio/logo-thumbnail.jpg" },
  { cat: "motion", label: "Motion & Video",  image: "/portfolio/motion-thumbnail.jpg" },
  { cat: "print",  label: "Print",           image: "/portfolio/print-thumbnail.jpg" },
  { cat: "reels",  label: "Reels & Shorts",  image: "/portfolio/reels-thumbnail.jpg" },
  { cat: "social", label: "Social Media",    image: "/portfolio/social-thumbnail.jpg" },
];

const posts: Record<Category, { id: number; image: string; title: string }[]> = {
  all:    [],
  motion: [],
  reels:  [],
  logo: [
    { id: 1, image: "/portfolio/logo/EZ.webp",                   title: "EZ" },
    { id: 2, image: "/portfolio/logo/Mockups-sensible-mama.webp", title: "Sensible Mama" },
    { id: 3, image: "/portfolio/logo/Ultra-premium.webp",         title: "Ultra Premium" },
  ],
  print: [
    { id: 1,  image: "/portfolio/print/Brochure-Lifestyle-holidays-ezgif.com-jpg-to-webp-converter.webp", title: "Lifestyle Holidays" },
    { id: 2,  image: "/portfolio/print/Fit-Fame-ezgif.com-jpg-to-webp-converter.webp",                    title: "Fit Fame" },
    { id: 3,  image: "/portfolio/print/Hope.jpg",          title: "Hope" },
    { id: 4,  image: "/portfolio/print/Master-enerty.jpg", title: "Master Energy" },
    { id: 5,  image: "/portfolio/print/RUMC.webp",         title: "RUMC" },
    { id: 6,  image: "/portfolio/print/Suzuki.webp",       title: "Suzuki" },
    { id: 7,  image: "/portfolio/print/edufair.webp",      title: "Edu Fair" },
    { id: 8,  image: "/portfolio/print/exchange-ezgif.com-jpg-to-webp-converter.webp", title: "Exchange" },
    { id: 9,  image: "/portfolio/print/govegan-ezgif.com-jpg-to-webp-converter.webp",  title: "Go Vegan" },
    { id: 10, image: "/portfolio/print/leap-frog.jpg",     title: "Leap Frog" },
    { id: 11, image: "/portfolio/print/sujal.webp",        title: "Sujal" },
    { id: 12, image: "/portfolio/print/wicca.jpg",         title: "Wicca" },
  ],
  social: [
    { id: 1, image: "/portfolio/social/Abeam SM.webp",  title: "Abeam" },
    { id: 2, image: "/portfolio/social/Daraz.webp",      title: "Daraz" },
    { id: 3, image: "/portfolio/social/Daraz-2.webp",    title: "Daraz 2" },
    { id: 4, image: "/portfolio/social/Moneyto.webp",    title: "MoneyTo" },
    { id: 5, image: "/portfolio/social/Rumc-1.webp",     title: "RUMC 1" },
    { id: 6, image: "/portfolio/social/RUMC 2.webp",     title: "RUMC 2" },
    { id: 7, image: "/portfolio/social/Imazing.webp",    title: "iMazing Holdings" },
    { id: 8, image: "/portfolio/social/Swinburne.webp",  title: "Swinburne" },
  ],
};

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<{ images: { image: string; title: string }[]; startIndex: number } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openLightbox = (images: { image: string; title: string }[], index: number) => {
    itemRefs.current = [];
    setLightbox({ images, startIndex: index });
  };

  const closeLightbox = () => setLightbox(null);

  useEffect(() => {
    if (lightbox && scrollRef.current) {
      const target = itemRefs.current[lightbox.startIndex];
      if (target) {
        target.scrollIntoView({ block: "start" });
      }
    }
  }, [lightbox]);

  const categoryLinks: Partial<Record<Category, string>> = {
    reels:  "https://www.youtube.com/watch?v=03uADDcx8ag&list=PLaAZMFMOeB03MnaNQP5T9KCAA1_QRwWH2",
    motion: "https://www.youtube.com/watch?v=03uADDcx8ag&list=PLaAZMFMOeB03MnaNQP5T9KCAA1_QRwWH2",
  };

  const handleCategoryClick = (cat: Category) => {
    if (categoryLinks[cat]) {
      window.open(categoryLinks[cat], "_blank", "noopener,noreferrer");
    } else if (posts[cat].length > 0) {
      openLightbox(posts[cat], 0);
    }
  };

  return (
    <section id="work" className="section-pad" style={{ background: "#ffffff" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="sub-label" style={{ color: "#2396fc" }}>Gallery</span>
          <h2
            style={{
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              color: "#111135",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            My Portfolio
          </h2>
        </div>

        {/* Filter tabs — always highlighted on "All" */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "48px",
          }}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => f.value !== "all" && handleCategoryClick(f.value)}
              style={
                f.value === "all"
                  ? { padding: "9px 22px", background: "#2396fc", color: "#fff", border: "none", borderRadius: "4px", fontSize: "13px", fontWeight: 600, cursor: "default" }
                  : { padding: "9px 22px", background: "transparent", color: "#50506a", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "4px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Category thumbnail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categoryCards.map((c) => (
            <div
              key={c.cat}
              onClick={() => handleCategoryClick(c.cat)}
              style={{
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                aspectRatio: "4/3",
                cursor: (posts[c.cat].length > 0 || categoryLinks[c.cat]) ? "pointer" : "default",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={(e) => {
                if (posts[c.cat].length === 0 && !categoryLinks[c.cat]) return;
                const ov = e.currentTarget.querySelector(".cat-overlay") as HTMLElement;
                if (ov) ov.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const ov = e.currentTarget.querySelector(".cat-overlay") as HTMLElement;
                if (ov) ov.style.opacity = "0";
              }}
            >
              <img
                src={c.image}
                alt={c.label}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  padding: "16px 20px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                }}
              >
                <h3 style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)", color: "#fff", fontSize: "16px", fontWeight: 700 }}>
                  {c.label}
                </h3>
              </div>
              <div
                className="cat-overlay"
                style={{
                  position: "absolute", inset: 0,
                  background: "rgba(35,150,252,0.75)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: 0, transition: "opacity 0.3s",
                }}
              >
                <span style={{ color: "#fff", fontSize: "15px", fontWeight: 700, letterSpacing: "1px" }}>
                  {categoryLinks[c.cat] ? "Watch on YouTube →" : `View ${c.label} →`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox — vertical scroll */}
      {lightbox && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.92)",
            overflowY: "auto",
          }}
          ref={scrollRef}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: "fixed", top: "20px", right: "20px", zIndex: 1001,
              background: "rgba(255,255,255,0.15)", border: "none",
              color: "#fff", fontSize: "20px", width: "44px", height: "44px",
              borderRadius: "50%", cursor: "pointer", backdropFilter: "blur(4px)",
            }}
          >
            ✕
          </button>

          <div
            style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: "32px",
              padding: "80px 24px 80px",
            }}
          >
            {lightbox.images.map((img, i) => (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                style={{ width: "100%", maxWidth: "900px" }}
              >
                <img
                  src={img.image}
                  alt={img.title}
                  style={{ width: "100%", borderRadius: "10px", display: "block", boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
                />
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", textAlign: "center", marginTop: "10px" }}>
                  {i + 1} / {lightbox.images.length} — {img.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
