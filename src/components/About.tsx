import { FaArrowDown, FaPrint } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "#ffffff" }}
    >
      <div className="container-custom">
        <div className="max-w-3xl">
          <div>
            <span className="sub-label" style={{ color: "#0d1094" }}>About Me</span>
            <h2
              style={{
                fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                color: "#111135",
                fontSize: "32px",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              Hi there, I&apos;m Hari Sharan
            </h2>
            <h5
              style={{
                color: "#0d1094",
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "24px",
                fontFamily: "var(--font-1, Poppins, sans-serif)",
              }}
            >
              Art Director based in Bhaktapur, Nepal
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
