import { FaArrowDown, FaPrint } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "#ffffff" }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src="/hero-photo.png"
                alt="Hari Sharan Prajapati"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div>
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
      </div>
    </section>
  );
}

