"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Database, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Assessment & Setup",
      desc: "We analyze your current operations and configure the MerlinFlow suite to match your specific industry needs.",
      icon: <ClipboardCheck size={28} color="#3b82f6" />,
      color: "#3b82f6",
      bgLight: "#eff6ff"
    },
    {
      num: "02",
      title: "Seamless Data Migration",
      desc: "Our automated tools securely migrate your legacy data into the cloud with zero downtime or data loss.",
      icon: <Database size={28} color="#a855f7" />,
      color: "#a855f7",
      bgLight: "#faf5ff"
    },
    {
      num: "03",
      title: "Go Live & Scale",
      desc: "Train your team in hours, not weeks. Go live globally and watch your operational efficiency skyrocket.",
      icon: <Rocket size={28} color="#10b981" />,
      color: "#10b981",
      bgLight: "#ecfdf5"
    }
  ];

  return (
    <section className="how-section">
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header-top"
        >
          <div className="badge">Simple Onboarding</div>
          <h2 style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", fontWeight: 700, marginBottom: "1rem", textAlign: "center" }}>
            How It <span className="text-gradient">Works</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 3rem auto", lineHeight: "1.6", textAlign: "center" }}>
            Transitioning to a new enterprise OS doesn't have to be painful. We get you fully operational in three simple steps.
          </p>
        </motion.div>

        <div className="how-steps-container">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)", borderColor: "#94a3b8" }}
                className="how-step"
              >
                <div className="how-icon-wrapper" style={{ backgroundColor: step.bgLight, borderColor: step.color }}>
                  {step.icon}
                </div>
                <h3 className="how-title">{step.title}</h3>
                <p className="how-desc">{step.desc}</p>
              </motion.div>
              
              {/* Arrow Element */}
              {idx < steps.length - 1 && (
                <div className="step-arrow">➔</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .how-section {
          padding: 6rem 0;
          background: transparent;
          position: relative;
        }

        .section-header-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 3rem;
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

        .how-steps-container {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .step-arrow {
          font-size: 2.5rem;
          color: var(--primary);
          opacity: 0.6;
          display: none;
          margin: 0 1.5rem;
          flex-shrink: 0;
          align-self: center;
        }

        /* Show arrows on desktop */
        @media (min-width: 1024px) {
          .step-arrow {
            display: block;
          }
        }

        .how-step {
          flex: 1;
          padding: 3rem 2.5rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: border-color 0.3s ease;
        }

        .how-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          border-width: 2px;
          border-style: solid;
          position: relative;
          z-index: 1;
        }

        .how-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .how-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .how-steps-container {
            flex-direction: column;
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .how-section {
            padding: 4rem 0;
          }
          .how-step {
            padding: 2rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
