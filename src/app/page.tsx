"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Counter from "@/components/Counter";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Counter />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {showTop && (
        <a
          href="#home"
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-50 text-white"
          style={{ background: "linear-gradient(135deg,#73f7ea,#0d1094)" }}
          aria-label="Back to top"
        >
          <FaArrowUp size={14} />
        </a>
      )}
    </>
  );
}
