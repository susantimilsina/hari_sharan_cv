"use client";

import { useState } from "react";

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
  { cat: "logo",   label: "Logo",            image: "/portfolio/logo-thumbnail.png" },
  { cat: "motion", label: "Motion & Video",  image: "/portfolio/motion-thumbnail.png" },
  { cat: "print",  label: "Print",           image: "/portfolio/print-thumbnail.png" },
  { cat: "reels",  label: "Reels & Shorts",  image: "/portfolio/reels-thumbnail.png" },
  { cat: "social", label: "Social Media",    image: "/portfolio/social-thumbnail.png" },
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
  const [lightbox, setLightbox] = useState<{ images: { image: string; title: string }[]; index: number } | null>(null);

  const activePosts = posts[active];
  const showCategoryGrid = active === "all" || activePosts.length === 0;

  const openLightbox = (images: { image: string; title: string }[], index: number) => {
    setLightbox({ images, index });
  };

  const closeLightbox = () => setLightbox(null);

  const prev = () =>
    setLightbox((lb) => lb && { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length });

  const next = () =>
    setLightbox((lb) => lb && { ...lb, index: (lb.index + 1) % lb.images.length });

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

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute", left: "20px",
              background: "rgba(255,255,255,0.1)", border: "none",
              color: "#fff", fontSize: "28px", width: "48px", height: "48px",
              borderRadius: "50%", cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
            }}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={lightbox.images[lightbox.index].image}
            alt={lightbox.images[lightbox.index].title}
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: "88vh", maxWidth: "88vw", borderRadius: "8px", objectFit: "contain" }}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute", right: "20px",
              background: "rgba(255,255,255,0.1)", border: "none",
              color: "#fff", fontSize: "28px", width: "48px", height: "48px",
              borderRadius: "50%", cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
            }}
          >
            ›
          </button>

          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute", top: "20px", right: "20px",
              background: "rgba(255,255,255,0.1)", border: "none",
              color: "#fff", fontSize: "20px", width: "40px", height: "40px",
              borderRadius: "50%", cursor: "pointer",
            }}
          >
            ✕
          </button>

          {/* Counter */}
          <div style={{ position: "absolute", bottom: "24px", color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
            {lightbox.index + 1} / {lightbox.images.length}
          </div>
        </div>
      )}
    </section>
  );
}
