"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, Users, Building, ShieldCheck } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { label: "Active Pilots", value: 10, suffix: "+", icon: <Building /> },
    { label: "Daily API Calls", value: 50, suffix: "k+", icon: <Zap /> },
    { label: "Early Adopters", value: 25, suffix: "+", icon: <Users /> },
    { label: "System Uptime", value: 99.9, suffix: "%", icon: <ShieldCheck /> },
  ];

  return (
    <section id="impact" className="stats-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <div className="badge">Built to Scale</div>
          <h2 style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
            Accelerating <span className="text-gradient">Growth</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Our flexible infrastructure is designed to scale effortlessly as you grow. We build systems that never sleep.
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="stat-card glass-panel"
            >
              <div className="icon-wrapper">{stat.icon}</div>
              <div className="stat-number">
                <Counter target={stat.value} duration={2} />{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .stats-section {
          padding: 4rem 0;
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.02), transparent);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }

        .stat-card {
          padding: 2.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s;
          border-radius: 18px;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .stat-number {
          font-size: clamp(2.25rem, 6vw, 3rem);
          font-weight: 800;
          color: var(--text-color);
          line-height: 1;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 0.95rem;
          font-weight: 500;
        }

        @media (max-width: 500px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

// Simple animated counter component
function Counter({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60); // Assuming 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        // If target is a float (like 1.2 or 99.9), show 1 decimal
        setCount(Number.isInteger(target) ? Math.floor(start) : start.toFixed(1));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}
