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

// Category thumbnail cards shown on "All" tab
const categoryCards: { cat: Category; label: string; image: string }[] = [
  { cat: "logo",   label: "Logo",            image: "/portfolio/logo-thumbnail.jpg" },
  { cat: "motion", label: "Motion & Video",  image: "/portfolio/motion-thumbnail.jpg" },
  { cat: "print",  label: "Print",           image: "/portfolio/print-thumbnail.jpg" },
  { cat: "reels",  label: "Reels & Shorts",  image: "/portfolio/reels-thumbnail.jpg" },
  { cat: "social", label: "Social Media",    image: "/portfolio/social-thumbnail.jpg" },
];

// Individual posts per category
const posts: Record<Category, { id: number; image: string; title: string }[]> = {
  all:    [],
  logo:   [],
  motion: [],
  print:  [],
  reels:  [],
  social: [
    { id: 1,  image: "/portfolio/social/Mockups-social-media-Abeam.jpg",             title: "Abeam" },
    { id: 2,  image: "/portfolio/social/Mockups-social-media-Daraz.jpg",              title: "Daraz" },
    { id: 3,  image: "/portfolio/social/Mockups-social-media-Daraz-2.jpg",            title: "Daraz 2" },
    { id: 4,  image: "/portfolio/social/Mockups-social-media-MoneyTo.jpg",            title: "MoneyTo" },
    { id: 5,  image: "/portfolio/social/Mockups-social-media-RUMC-1.jpg",             title: "RUMC 1" },
    { id: 6,  image: "/portfolio/social/Mockups-social-media-RUMC-2.jpg",             title: "RUMC 2" },
    { id: 7,  image: "/portfolio/social/Mockups-social-media-imazing-holdings.jpg",   title: "iMazing Holdings" },
    { id: 8,  image: "/portfolio/social/Mockups-social-media-swinburne.jpg",          title: "Swinburne" },
  ],
};

export default function Portfolio() {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<{ images: { image: string; title: string }[]; startIndex: number } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activePosts = posts[active];
  const showCategoryGrid = active === "all" || activePosts.length === 0;

  const openLightbox = (images: { image: string; title: string }[], index: number) => {
    itemRefs.current = [];
    setLightbox({ images, startIndex: index });
  };

  const closeLightbox = () => setLightbox(null);

  // Scroll to the clicked image once the overlay mounts
  useEffect(() => {
    if (lightbox && scrollRef.current) {
      const target = itemRefs.current[lightbox.startIndex];
      if (target) {
        target.scrollIntoView({ block: "start" });
      }
    }
  }, [lightbox]);

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

        {/* Filter tabs */}
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
              onClick={() => setActive(f.value)}
              style={
                active === f.value
                  ? { padding: "9px 22px", background: "#2396fc", color: "#fff", border: "none", borderRadius: "4px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }
                  : { padding: "9px 22px", background: "transparent", color: "#50506a", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "4px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* All tab — category thumbnail cards */}
        {showCategoryGrid && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {(active === "all" ? categoryCards : categoryCards.filter((c) => c.cat === active)).map((c) => (
              <div
                key={c.cat}
                onClick={() => setActive(c.cat)}
                style={{
                  position: "relative",
                  borderRadius: "10px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  cursor: "pointer",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={(e) => {
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
                {/* Label bar */}
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
                {/* Hover overlay */}
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
                    View {c.label} →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Category posts grid */}
        {!showCategoryGrid && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {activePosts.map((p, i) => (
              <div
                key={p.id}
                onClick={() => openLightbox(activePosts, i)}
                style={{
                  position: "relative",
                  borderRadius: "10px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  cursor: "pointer",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={(e) => {
                  const ov = e.currentTarget.querySelector(".post-overlay") as HTMLElement;
                  if (ov) ov.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const ov = e.currentTarget.querySelector(".post-overlay") as HTMLElement;
                  if (ov) ov.style.opacity = "0";
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  className="post-overlay"
                  style={{
                    position: "absolute", inset: 0,
                    background: "rgba(17,17,53,0.82)",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    opacity: 0, transition: "opacity 0.3s",
                  }}
                >
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "2px solid #2396fc", display: "flex", alignItems: "center", justifyContent: "center", color: "#2396fc", fontSize: "22px", marginBottom: "10px" }}>
                    +
                  </div>
                  <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>{p.title}</span>
                </div>
              </div>
            ))}
          </div>
        )}
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
          {/* Close */}
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

          {/* All images stacked vertically */}
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
