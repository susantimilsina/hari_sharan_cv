import { FaArrowDown, FaPrint } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" style={{ background: "#ffffff", overflow: "hidden" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Photo — full bleed, no padding */}
        <div style={{ minHeight: "400px", position: "relative" }}>
          <img
            src="/hero-photo.png"
            alt="Hari Sharan Prajapati"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: "80px 48px" }}>
          <span className="sub-label" style={{ color: "#2396fc" }}>About Me</span>
          <h2
            style={{
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              color: "#2396fc",
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Hi there, I&apos;m Hari Sharan
          </h2>
          <h5
            style={{
              color: "#50506a",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "24px",
              fontFamily: "var(--font-1, Poppins, sans-serif)",
            }}
          >
            Art Director/Video Editor based in Bhaktapur, Nepal
          </h5>

          <p
            style={{
              color: "#50506a",
              fontSize: "15px",
              lineHeight: "1.85",
              marginBottom: "16px",
            }}
          >
            Accomplished Art Director with a proven track record at SURO Advertising,
            leading creative teams to enhance brand visibility. Expert in Adobe Creative
            Suite — delivering high-quality design solutions with strong collaboration
            skills and a passion for visual storytelling.
          </p>
          <p
            style={{
              color: "#50506a",
              fontSize: "15px",
              lineHeight: "1.85",
              marginBottom: "36px",
            }}
          >
            Top Rated Plus freelancer on Upwork.com with 113+ successfully completed
            projects, consistently meeting client expectations with engaging and
            impactful campaigns across branding, print, digital, and motion.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#" className="btn-primary-custom">
              <FaArrowDown size={13} /> Download CV
            </a>
            <a href="#contact" className="btn-outline-custom">
              <FaPrint size={13} /> Print CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
