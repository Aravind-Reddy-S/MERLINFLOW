"use client";

import { motion } from "framer-motion";
import { CreditCard, Mail, Database, Calendar, MessageSquare, Briefcase, Zap, Calculator, PieChart } from "lucide-react";

export default function IntegrationsSection() {
  const integrations = [
    { name: "Payment Gateways", icon: <CreditCard size={28} />, color: "#3b82f6" },
    { name: "Email Services", icon: <Mail size={28} />, color: "#ec4899" },
    { name: "Cloud Storage", icon: <Database size={28} />, color: "#8b5cf6" },
    { name: "Google Workspace", icon: <Calendar size={28} />, color: "#f59e0b" },
    { name: "Communication APIs", icon: <MessageSquare size={28} />, color: "#06b6d4" },
    { name: "HR Systems", icon: <Briefcase size={28} />, color: "#f43f5e" },
    { name: "Accounting Software", icon: <Calculator size={28} />, color: "#10b981" },
    { name: "Analytics Platforms", icon: <PieChart size={28} />, color: "#84cc16" },
    { name: "Webhooks", icon: <Zap size={28} />, color: "#eab308" },
  ];

  return (
    <section id="integrations" className="integrations-section">
      <div className="container">
        <div className="layout-grid">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-content"
          >
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
              Plays nicely with <span className="text-gradient">everyone.</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: "2rem" }}>
              MerlinFlow ERP doesn't force you to rip and replace. We seamlessly integrate with your existing infrastructure, payment gateways, and hardware devices to create a unified ecosystem.
            </p>
            
            <ul className="benefits-list">
              <li>Open API architecture for custom deployments.</li>
              <li>Real-time sync with global payment providers.</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="integrations-grid"
          >
            {integrations.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="integration-card glass-panel"
                style={{ '--hover-color': item.color }}
              >
                <div className="icon-circle" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <span className="label">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      <style jsx global>{`
        .integrations-section {
          padding: 4rem 0;
          background: transparent;
          position: relative;
          overflow: hidden;
        }

        .layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .text-content {
          max-width: 500px;
        }

        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .benefits-list li {
          color: var(--text-color);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .benefits-list li::before {
          content: "✓";
          color: var(--primary);
          font-weight: bold;
          background: rgba(59, 130, 246, 0.1);
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 1fr;
          gap: 1rem;
        }

        .integration-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 2rem 1rem;
          text-align: center;
          transition: all 0.3s;
          cursor: pointer;
          height: 100%;
        }

        .integration-card:hover {
          border-color: var(--hover-color);
          box-shadow: var(--neon-glow-hover);
        }

        .integration-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: var(--bg-alpha-light);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s;
        }

        .icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-alpha-light);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s;
        }

        .integration-card:hover .icon-circle {
          transform: scale(1.1);
        }

        .label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .integration-card:hover .label {
          color: var(--text-color);
        }

        @media (max-width: 1024px) {
          .layout-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .text-content {
            max-width: 100%;
            margin: 0 auto;
          }
          .benefits-list li {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .integrations-grid {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            margin: 0 auto;
            justify-content: center;
          }
          
          .integration-card {
            min-height: 180px;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
