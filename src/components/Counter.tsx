"use client";

import { useEffect, useRef, useState } from "react";
import { FaClock, FaUsers, FaTrophy } from "react-icons/fa";

const stats = [
  {
    icon: <FaClock size={22} />,
    countTo: 13,
    suffix: "+",
    label1: "Years",
    label2: "Experience",
    color: "#73f7ea",
  },
  {
    icon: <FaUsers size={22} />,
    countTo: 113,
    suffix: "+",
    label1: "Upwork",
    label2: "Projects",
    color: "#0d1094",
  },
  {
    icon: <FaTrophy size={22} />,
    countTo: 6,
    suffix: "",
    label1: "Companies",
    label2: "Worked At",
    color: "#73f7ea",
  },
];

function useCountUp(to: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let current = 0;
    const step = Math.ceil(to / (duration / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [to, duration, triggered]);
  return count;
}

function StatItem({
  icon,
  countTo,
  suffix,
  label1,
  label2,
  color,
  triggered,
}: {
  icon: React.ReactNode;
  countTo: number;
  suffix: string;
  label1: string;
  label2: string;
  color: string;
  triggered: boolean;
}) {
  const count = useCountUp(countTo, 2000, triggered);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #73f7ea, #0d1094)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          marginBottom: "16px",
          boxShadow: `0 4px 20px ${color}40`,
        }}
      >
        {icon}
      </div>

      {/* Count */}
      <div
        style={{
          fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
          fontSize: "42px",
          fontWeight: 800,
          color: "#111135",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        {count}
        {suffix}
      </div>

      {/* Label */}
      <p
        style={{
          color: "#50506a",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
        {label1}
        <br />
        {label2}
      </p>
    </div>
  );
}

export default function Counter() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setTriggered(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "#f5f5fa",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-custom" ref={ref}>
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ position: "relative", zIndex: 1 }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label1}
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(0,0,0,0.08)"
                    : "none",
              }}
            >
              <StatItem {...s} triggered={triggered} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
