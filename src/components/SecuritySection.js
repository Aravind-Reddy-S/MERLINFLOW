"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, FileDigit, CloudLightning, ActivitySquare } from "lucide-react";
import Image from "next/image";

export default function SecuritySection() {
  const securityFeatures = [
    { title: "HIPAA Compliant", desc: "Strict adherence to health data privacy for clinical environments.", icon: <FileDigit size={32} color="#3b82f6" />, color: "#3b82f6", bgLight: "#eff6ff" },
    { title: "End-to-End Encryption", desc: "Military-grade AES-256 encryption for data at rest and in transit.", icon: <Lock size={32} color="#6366f1" />, color: "#6366f1", bgLight: "#e0e7ff" },
    { title: "99.99% Guaranteed Uptime", desc: "Redundant cloud architecture ensures you never go offline.", icon: <CloudLightning size={32} color="#a855f7" />, color: "#a855f7", bgLight: "#faf5ff" },
    { title: "SOC 2 Type II Certified", desc: "Audited operational security for enterprise peace of mind.", icon: <ShieldCheck size={32} color="#10b981" />, color: "#10b981", bgLight: "#ecfdf5" },
    { title: "Automated Backups", desc: "Geographically distributed daily backups prevent data loss.", icon: <Server size={32} color="#f97316" />, color: "#f97316", bgLight: "#fff7ed" },
    { title: "Real-time Threat Monitoring", desc: "AI-driven anomaly detection stops breaches before they happen.", icon: <ActivitySquare size={32} color="#ef4444" />, color: "#ef4444", bgLight: "#fef2f2" },
  ];

  return (
    <section id="security" className="security-section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header-top"
        >
          <div className="badge">Enterprise Security</div>
          <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1rem" }}>
            Your data is our <span className="text-gradient">Fort Knox.</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 2rem auto", lineHeight: "1.6" }}>
            Whether you are managing sensitive patient records, student financial data, or high-volume hotel transactions, MerlinFlow ERP provides uncompromising, world-class security infrastructure out of the box.
          </p>
        </motion.div>

        <div className="features-grid">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)", borderColor: "#94a3b8" }}
                className="sec-feature"
              >
                <div className="sec-header">
                  <div className="sec-icon" style={{ backgroundColor: feature.bgLight }}>{feature.icon}</div>
                  <h4>{feature.title}</h4>
                </div>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
      </div>

      <style jsx global>{`
        .security-section {
          padding: 4rem 2rem;
          background: transparent;
          border-top: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
        }

        .section-header-top {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 5rem;
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
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--accent-1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 1fr;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .sec-feature {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: #ffffff;
          padding: 2.5rem 2rem;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: border-color 0.3s ease;
          height: 100%;
        }

        .sec-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .sec-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sec-feature h4 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.3;
        }

        .sec-feature p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        .primary-btn {
          background: var(--primary);
          color: #ffffff;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: var(--neon-glow);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .primary-btn:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: var(--neon-glow-hover);
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .sec-feature {
            align-items: center;
            text-align: center;
            padding: 2rem 1.5rem;
          }
          
          .sec-header {
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
