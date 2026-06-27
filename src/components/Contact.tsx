"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhone size={20} />,
    title: "Phone",
    value: "+977 9849151912",
    href: "tel:+9779849151912",
  },
  {
    icon: <FaEnvelope size={20} />,
    title: "Email",
    value: "prajapatiharisharan@gmail.com",
    href: "mailto:prajapatiharisharan@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    title: "Address",
    value: "Bhaktapur, Nepal",
    href: "#",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    background: "#ffffff",
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: "4px",
    color: "#111135",
    fontSize: "14px",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="section-pad" style={{ background: "#f5f5fa" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="sub-label" style={{ color: "#2396fc" }}>Contact</span>
          <h2
            style={{
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              color: "#111135",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            Contact Us
          </h2>
        </div>

        {/* Contact info boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: "50px" }}>
          {contactInfo.map((item) => (
            <a
              key={item.title}
              href={item.href}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "8px",
                  padding: "28px 24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,80,142,0.35)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 20px rgba(255,80,142,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2396fc, #2396fc)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                      color: "#111135",
                      fontWeight: 700,
                      fontSize: "15px",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ color: "#50506a", fontSize: "14px" }}>{item.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact form */}
        <div
          className="contact-form-inner"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "8px",
            padding: "48px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-poppins, Poppins, sans-serif)",
              color: "#111135",
              fontSize: "22px",
              fontWeight: 700,
              marginBottom: "32px",
            }}
          >
            Send Message
          </h3>

          {status === "sent" ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#2396fc,#2396fc)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12L10 17L19 8"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-poppins, Poppins, sans-serif)",
                  color: "#111135",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                Message Sent!
              </h4>
              <p style={{ color: "#50506a", fontSize: "14px" }}>
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2396fc")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.12)")}
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2396fc")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.12)")}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2396fc")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.12)")}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "#2396fc")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.12)")}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary-custom"
                  style={{ opacity: status === "sending" ? 0.6 : 1 }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "error" && (
                  <p style={{ color: "#e53935", fontSize: "13px" }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
