"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CreditCard, Mail, Database, Calendar, MessageSquare, 
  Briefcase, Zap, Calculator, PieChart, X, CheckCircle2, 
  ArrowRight, Layers, ShieldCheck
} from "lucide-react";

export default function IntegrationsSection() {
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIntegration(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const integrations = [
    { 
      name: "Payment Gateways", 
      icon: <CreditCard size={28} />, 
      color: "#3b82f6",
      tagline: "Instant multi-mode payments & automated settlement",
      description: "Seamlessly accept fee payments, billing invoices, and subscriptions via cards, UPI, net banking, and international gateways with automated ledger reconciliation.",
      providers: ["Razorpay", "Stripe", "Paytm", "UPI", "PayPal", "BillDesk"],
      features: [
        "Automated digital invoice & receipt generation",
        "Instant settlement with zero-failure smart routing",
        "Recurring fee subscriptions with auto-debit support",
        "Full webhook-based reconciliation with ERP ledger"
      ]
    },
    { 
      name: "Email Services", 
      icon: <Mail size={28} />, 
      color: "#ec4899",
      tagline: "High-deliverability transactional & marketing notifications",
      description: "Deliver real-time admission receipts, grade notifications, automated fee reminders, and employee payslips with 99.9% inbox deliverability.",
      providers: ["SendGrid", "Resend", "Amazon SES", "Mailgun", "Custom SMTP"],
      features: [
        "Trigger-based automated email workflows",
        "Custom branded responsive HTML email templates",
        "Real-time open, click, and bounce rate tracking",
        "Dedicated IP routing for high institutional volume"
      ]
    },
    { 
      name: "Cloud Storage", 
      icon: <Database size={28} />, 
      color: "#8b5cf6",
      tagline: "Ultra-secure, scalable storage with military-grade encryption",
      description: "Store student records, medical images, digital certificates, legal documents, and backups with automated replication and geo-redundancy.",
      providers: ["AWS S3", "Google Cloud Storage", "Azure Blob", "Cloudflare R2"],
      features: [
        "End-to-end AES-256 encryption at rest and in transit",
        "Automated daily incremental backups with disaster recovery",
        "Resumable high-speed multipart direct uploads",
        "Granular role-based access permissions per document"
      ]
    },
    { 
      name: "Google Workspace", 
      icon: <Calendar size={28} />, 
      color: "#f59e0b",
      tagline: "Unified calendar, classroom, and Single Sign-On sync",
      description: "Unify your institutional Google domain with MerlinFlow. Sync class timetables, faculty meetings, virtual classrooms, and user credentials effortlessly.",
      providers: ["Google Meet", "Google Calendar", "Google Drive", "Gmail", "Google SSO"],
      features: [
        "One-click Google Meet virtual lecture creation",
        "Two-way Google Calendar synchronization for schedules",
        "Google OAuth 2.0 Single Sign-On (SSO) login",
        "Direct Google Drive document attachment linking"
      ]
    },
    { 
      name: "Communication APIs", 
      icon: <MessageSquare size={28} />, 
      color: "#06b6d4",
      tagline: "Omnichannel WhatsApp, SMS, and Voice notifications",
      description: "Broadcast instant attendance updates, bus tracking links, exam announcements, and OTPs directly to parents, staff, and customers on their mobile phones.",
      providers: ["WhatsApp Business API", "Twilio", "Gupshup", "Exotel", "Fast2SMS"],
      features: [
        "Official verified WhatsApp Business template messaging",
        "Sub-second OTP delivery with automatic fallbacks",
        "Interactive 24/7 AI chatbot auto-responders",
        "Bulk SMS broadcasting with multi-language support"
      ]
    },
    { 
      name: "HR Systems", 
      icon: <Briefcase size={28} />, 
      color: "#f43f5e",
      tagline: "Biometric attendance, shift rosters & automated payroll",
      description: "Connect hardware biometric devices and HR software to synchronize punch logs, leave approvals, shift management, and statutory payroll deductions.",
      providers: ["Biometric Devices (Face/Fingerprint)", "Darwinbox", "Keka", "Zoho People", "BambooHR"],
      features: [
        "Direct LAN / Cloud sync with biometric hardware machines",
        "Automated overtime, loss-of-pay, and shift calculations",
        "Statutory compliance calculation (PF, ESI, TDS, PT)",
        "Employee self-service mobile app portal"
      ]
    },
    { 
      name: "Accounting Software", 
      icon: <Calculator size={28} />, 
      color: "#10b981",
      tagline: "Direct ledger synchronization & GST e-invoicing",
      description: "Sync all revenue transactions, purchases, vendor payments, and inventory vouchers directly with industry-standard accounting packages in real time.",
      providers: ["Tally Prime", "Zoho Books", "QuickBooks", "SAP Business One", "ClearTax"],
      features: [
        "Two-way automated Tally XML / REST API sync",
        "Real-time GST e-invoicing and e-Way bill generation",
        "Multi-branch balance sheet and P&L consolidation",
        "Bank reconciliation with auto-matched transaction feeds"
      ]
    },
    { 
      name: "Analytics Platforms", 
      icon: <PieChart size={28} />, 
      color: "#84cc16",
      tagline: "Executive BI dashboards & predictive intelligence",
      description: "Export clean data pipelines to enterprise business intelligence platforms to monitor institutional KPIs, fee collection forecasts, and operational health.",
      providers: ["PowerBI", "Google Analytics 4", "Tableau", "Metabase", "Mixpanel"],
      features: [
        "Live interactive KPI dashboards with real-time streaming",
        "Predictive student enrollment & fee default alerts",
        "Customizable drag-and-drop metrics visualizer",
        "Automated executive report delivery via email and PDF"
      ]
    },
    { 
      name: "Webhooks", 
      icon: <Zap size={28} />, 
      color: "#eab308",
      tagline: "Event-driven sub-millisecond custom automations",
      description: "Trigger custom scripts and third-party automation tools whenever events happen across your ERP (admissions, payments, discharges, stock alerts).",
      providers: ["Custom Webhooks", "Zapier", "Make.com", "n8n", "REST / GraphQL"],
      features: [
        "Sub-millisecond event publishing with HMAC-SHA256 signing",
        "Automated exponential retry with failure alerts",
        "Live webhook inspection console and payload replay",
        "Custom header configuration and payload filtering"
      ]
    },
  ];

  const handleContactClick = (integrationName) => {
    setSelectedIntegration(null);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <li>Click any card to explore integration capabilities.</li>
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
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedIntegration(item)}
                className="integration-card glass-panel"
                style={{ '--hover-color': item.color }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedIntegration(item);
                  }
                }}
                aria-label={`View details for ${item.name}`}
              >
                <div className="icon-circle" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <span className="label">{item.name}</span>
                <span className="click-hint">Click for info</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Integration Detail Modal */}
      <AnimatePresence>
        {selectedIntegration && (
          <div className="modal-backdrop" onClick={() => setSelectedIntegration(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="integration-modal glass-card"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              {/* Modal Header */}
              <div className="modal-header">
                <div className="modal-title-group">
                  <div className="modal-icon-badge" style={{ color: selectedIntegration.color, background: `${selectedIntegration.color}15`, borderColor: `${selectedIntegration.color}40` }}>
                    {selectedIntegration.icon}
                  </div>
                  <div>
                    <div className="modal-badge-pill" style={{ color: selectedIntegration.color, borderColor: `${selectedIntegration.color}40` }}>
                      <Layers size={12} /> Ready to Connect
                    </div>
                    <h3 className="modal-title">{selectedIntegration.name}</h3>
                  </div>
                </div>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setSelectedIntegration(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="modal-body">
                <p className="modal-tagline">{selectedIntegration.tagline}</p>
                <p className="modal-desc">{selectedIntegration.description}</p>

                {/* Providers / Supported platforms */}
                <div className="modal-section">
                  <span className="section-subtitle">POPULAR SUPPORTED PLATFORMS & SERVICES</span>
                  <div className="providers-tags">
                    {selectedIntegration.providers.map((provider, idx) => (
                      <span key={idx} className="provider-tag">
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="modal-section">
                  <span className="section-subtitle">KEY INTEGRATION CAPABILITIES</span>
                  <ul className="features-list">
                    {selectedIntegration.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} style={{ color: selectedIntegration.color, flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <div className="security-notice">
                  <ShieldCheck size={16} color="#10b981" />
                  <span>Enterprise encrypted & compliant API</span>
                </div>
                <button 
                  className="modal-action-btn"
                  onClick={() => handleContactClick(selectedIntegration.name)}
                >
                  Request Integration <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
          gap: 0.75rem;
          padding: 1.75rem 1rem 1.25rem;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          height: 100%;
          position: relative;
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          outline: none;
        }

        .integration-card:focus-visible {
          box-shadow: 0 0 0 3px var(--primary);
        }

        .integration-card:hover {
          border-color: var(--hover-color);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-alpha-light);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .integration-card:hover .icon-circle {
          transform: scale(1.12);
        }

        .label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.3;
        }

        .click-hint {
          font-size: 0.72rem;
          color: #888;
          font-weight: 500;
          opacity: 0;
          transform: translateY(4px);
          transition: all 0.2s ease;
        }

        .integration-card:hover .click-hint {
          opacity: 1;
          transform: translateY(0);
          color: var(--hover-color);
        }

        /* MODAL STYLING */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1.5rem;
        }

        .integration-modal {
          background: #ffffff;
          width: 100%;
          max-width: 600px;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: fadeIn 0.2s ease;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.75rem 2rem 1.25rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .modal-icon-badge {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .modal-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.15rem 0.5rem;
          border-radius: 50px;
          border: 1px solid;
          margin-bottom: 0.3rem;
        }

        .modal-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .modal-close-btn {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          max-height: 60vh;
          overflow-y: auto;
        }

        .modal-tagline {
          font-size: 1.05rem;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.4;
        }

        .modal-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
        }

        .modal-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .section-subtitle {
          font-size: 0.72rem;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.06em;
        }

        .providers-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .provider-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.35rem 0.75rem;
          transition: all 0.2s;
        }

        .provider-tag:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          font-size: 0.88rem;
          color: #334155;
          line-height: 1.45;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          gap: 1rem;
        }

        .security-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 500;
        }

        .modal-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #2563eb;
          color: #ffffff;
          padding: 0.7rem 1.3rem;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-action-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
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
            min-height: 160px;
            width: 100%;
            padding: 1.25rem 0.75rem;
          }

          .modal-header {
            padding: 1.25rem 1.25rem 1rem;
          }

          .modal-body {
            padding: 1.25rem;
          }

          .modal-footer {
            flex-direction: column;
            align-items: stretch;
            padding: 1rem 1.25rem;
          }

          .modal-action-btn {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

