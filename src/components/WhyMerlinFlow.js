"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Smartphone, MessageSquare, BarChart, CheckCircle } from "lucide-react";

export default function WhyMerlinFlow() {
  const advantages = [
    {
      title: "Real-time sync",
      desc: "Data updates instantly across all devices and roles — no refresh needed, no lag.",
      icon: <Zap size={32} color="#3b82f6" />, color: "#3b82f6", bgLight: "#eff6ff"
    },
    {
      title: "Role-based access",
      desc: "Granular permissions so every user sees exactly what they need and nothing more.",
      icon: <Shield size={32} color="#10b981" />, color: "#10b981", bgLight: "#ecfdf5"
    },
    {
      title: "Mobile-first design",
      desc: "Full functionality on any device — Android, iOS, and desktop — with native-feeling apps.",
      icon: <Smartphone size={32} color="#f97316" />, color: "#f97316", bgLight: "#fff7ed"
    },
    {
      title: "WhatsApp & SMS alerts",
      desc: "Automated notifications via WhatsApp and SMS to keep everyone in the loop, always.",
      icon: <MessageSquare size={32} color="#eab308" />, color: "#eab308", bgLight: "#fef9c3"
    },
    {
      title: "Analytics dashboard",
      desc: "Visual reports and actionable insights to make decisions faster and with confidence.",
      icon: <BarChart size={32} color="#a855f7" />, color: "#a855f7", bgLight: "#faf5ff"
    },
    {
      title: "India-ready compliance",
      desc: "Built-in GST, UPI payments, Aadhaar integration, and multi-language support.",
      icon: <CheckCircle size={32} color="#ef4444" />, color: "#ef4444", bgLight: "#fef2f2"
    }
  ];

  return (
    <section id="why-merlinflow" className="why-section">
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header-top"
        >
          <div className="badge">Platform-wide advantages</div>
          <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1rem" }}>
            Why <span className="text-gradient">MERLINFLOW</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 3rem auto", lineHeight: "1.6" }}>
            Every product in the MerlinFlow suite is built on the same powerful, reliable foundation.
          </p>
        </motion.div>

        <div className="advantages-grid">
          {advantages.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="advantage-card glass-panel"
            >
              <div className="icon-wrapper" style={{ background: item.bgLight, borderColor: item.color }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .why-section {
          padding: 6rem 2rem;
          background: transparent;
          border-bottom: 1px solid var(--glass-border);
          position: relative;
          overflow: hidden;
        }

        /* Subtle background glow effect */
        .why-section::before {
          content: '';
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .section-header-top {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .badge {
          display: inline-block;
          background: var(--bg-alpha-light);
          color: var(--primary);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid var(--glass-border);
          text-transform: uppercase;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent-1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 1fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .advantage-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.3s ease;
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          height: 100%;
        }

        .advantage-card:hover {
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          border-width: 1px;
          border-style: solid;
        }

        .advantage-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 1rem;
        }

        .advantage-card p {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .advantages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .advantages-grid {
            grid-template-columns: 1fr;
          }
          
          .advantage-card {
            align-items: center;
            text-align: center;
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
