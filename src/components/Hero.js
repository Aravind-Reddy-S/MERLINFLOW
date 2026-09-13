"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, GraduationCap, Building, HeartPulse, ShoppingCart, ArrowLeft, Building2, Briefcase, Sparkles, ChevronRight, Play } from "lucide-react";

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedERP, setSelectedERP] = useState(null);

  const demoIndustries = [
    {
      id: "education",
      title: "Educational ERP",
      subtitle: "Admissions, LMS & Fees",
      tag: "Live Demo",
      icon: GraduationCap,
      color: "#38bdf8",
      bgLight: "rgba(56, 189, 248, 0.12)",
      borderColor: "rgba(56, 189, 248, 0.28)",
      hoverBorder: "#38bdf8"
    },
    {
      id: "hotels",
      title: "Hotel & Resort ERP",
      subtitle: "PMS, POS & Multi-Property",
      tag: "Hospitality",
      icon: Building,
      color: "#34d399",
      bgLight: "rgba(52, 211, 153, 0.12)",
      borderColor: "rgba(52, 211, 153, 0.28)",
      hoverBorder: "#34d399"
    },
    {
      id: "healthcare",
      title: "Hospital & Clinic ERP",
      subtitle: "EHR, IPD/OPD & Billing",
      tag: "Healthcare",
      icon: HeartPulse,
      color: "#fb7185",
      bgLight: "rgba(251, 113, 133, 0.12)",
      borderColor: "rgba(251, 113, 133, 0.28)",
      hoverBorder: "#fb7185"
    },
    {
      id: "realestate",
      title: "Real Estate PropTech",
      subtitle: "3D Matrix, Demand & Leads",
      tag: "PropTech",
      icon: Building2,
      color: "#fbbf24",
      bgLight: "rgba(251, 191, 36, 0.12)",
      borderColor: "rgba(251, 191, 36, 0.28)",
      hoverBorder: "#fbbf24"
    },
    {
      id: "enterprise_crm",
      title: "Enterprise & CRMs",
      subtitle: "GST Sync, CPQ & Approvals",
      tag: "Scale CRM",
      icon: Briefcase,
      color: "#a78bfa",
      bgLight: "rgba(167, 139, 250, 0.12)",
      borderColor: "rgba(167, 139, 250, 0.28)",
      hoverBorder: "#a78bfa"
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Retail",
      subtitle: "NFC Profiles & WhatsApp Shop",
      tag: "Commerce",
      icon: ShoppingCart,
      color: "#22d3ee",
      bgLight: "rgba(34, 211, 238, 0.12)",
      borderColor: "rgba(34, 211, 238, 0.28)",
      hoverBorder: "#22d3ee"
    }
  ];

  const handleProceedToContact = (e) => {
    e.preventDefault();
    setIsDemoOpen(false);
    setSelectedERP(null);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background Hero Video covering full viewport edge-to-edge */}
      <div className="hero-video-bg" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-element"
          poster="/images/merlinflow.jpg"
          preload="auto"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content-container">
        <div className={`hero-grid ${isDemoOpen ? 'demo-active' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-text-content"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
              style={{ marginBottom: "1.5rem", display: "inline-block" }}
            >
              <span className="hero-badge-pill">
                Introducing MerlinFlow Technologies
              </span>
            </motion.div>

            <h1 className="hero-heading" style={{ marginBottom: "2.5rem" }}>
              Innovation at <span className="text-gradient">every step.</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-buttons"
            >
              <button onClick={() => setIsDemoOpen(true)} className="btn-primary">Book a Free Demo</button>
              <a href="#features" className="btn-secondary">Explore Products</a>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {isDemoOpen && (
              <motion.div 
                className="hero-demo-panel"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {!selectedERP ? (
                  <>
                    <div className="demo-panel-header">
                      <div>
                        <div className="demo-pill-tag">
                          <Sparkles size={13} color="#38bdf8" />
                          <span>Interactive Preview</span>
                        </div>
                        <h3 className="demo-title">Select an Industry</h3>
                        <p className="demo-desc">Choose a solution to preview workflows & architecture</p>
                      </div>
                      
                      <button className="close-panel-btn" onClick={() => { setIsDemoOpen(false); setSelectedERP(null); }} aria-label="Close demo panel">
                        <X size={18} />
                      </button>
                    </div>

                    <div className="demo-options-grid">
                      {demoIndustries.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <motion.div 
                            key={item.id}
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ width: '100%' }}
                          >
                            <button 
                              onClick={() => setSelectedERP(item)} 
                              className="demo-card-item"
                              style={{
                                borderColor: item.borderColor
                              }}
                            >
                              <div className="card-top-row">
                                <div 
                                  className="icon-badge"
                                  style={{ 
                                    backgroundColor: item.bgLight, 
                                    color: item.color 
                                  }}
                                >
                                  <IconComp size={20} />
                                </div>
                                <span 
                                  className="item-tag" 
                                  style={{ 
                                    color: item.color,
                                    borderColor: item.borderColor
                                  }}
                                >
                                  {item.tag}
                                </span>
                              </div>
                              
                              <div className="card-body">
                                <h4 className="item-title">{item.title}</h4>
                                <p className="item-sub">{item.subtitle}</p>
                              </div>

                              <div className="card-action-row">
                                <span className="action-text">Preview Flow</span>
                                <ChevronRight size={14} className="action-arrow" />
                              </div>
                            </button>
                          </motion.div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="erp-detail-view">
                    <div className="detail-header">
                      <button className="back-btn" onClick={() => setSelectedERP(null)}>
                        <ArrowLeft size={16} />
                        <span>All Industries</span>
                      </button>
                      <div className="detail-title-wrap">
                        <h3 className="detail-title">{selectedERP.title}</h3>
                        <span className="live-badge">
                          <Play size={11} fill="#34d399" color="#34d399" />
                          Interactive Demo
                        </span>
                      </div>
                      <button className="close-panel-btn" onClick={() => { setIsDemoOpen(false); setSelectedERP(null); }}>
                        <X size={18} />
                      </button>
                    </div>

                    <div className="video-container">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title={`${selectedERP.title} Demo`}
                        frameBorder="0" 
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="detail-actions">
                      <a 
                        href="#contact" 
                        onClick={handleProceedToContact}
                        className="btn-primary" 
                        style={{ display: 'inline-flex', width: '100%', textAlign: 'center', cursor: 'pointer', justifyContent: 'center' }}
                      >
                        Book 1-on-1 VIP Walkthrough
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 8rem 0 5rem;
          background: #090d1a;
        }

        .hero-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .hero-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(6, 10, 24, 0.82) 0%,
            rgba(4, 7, 18, 0.88) 50%,
            rgba(6, 10, 24, 0.95) 100%
          );
        }

        .hero-content-container {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          text-align: center;
          transition: all 0.5s ease;
          max-width: 1050px;
          margin: 0 auto;
        }

        .hero-grid.demo-active {
          grid-template-columns: 1fr 1fr;
          text-align: left;
          max-width: 1200px;
        }

        .hero-grid.demo-active .hero-buttons {
          justify-content: flex-start;
        }

        .hero-badge-pill {
          display: inline-block;
          padding: 0.55rem 1.4rem;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #38bdf8;
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(56, 189, 248, 0.6);
          border-radius: 50px;
          backdrop-filter: blur(16px);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(56, 189, 248, 0.2);
        }

        .hero-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 5.5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 2.5rem;
          color: #ffffff;
        }

        .text-gradient {
          background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: #ffffff !important;
          border: none;
          padding: 1.05rem 2.4rem;
          border-radius: 50px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.6);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(59, 130, 246, 0.8);
        }

        .btn-secondary {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: rgba(15, 23, 42, 0.85);
          color: #ffffff !important;
          border: 1.5px solid rgba(255, 255, 255, 0.6);
          padding: 0.78rem 1.7rem;
          border-radius: 50px;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #ffffff;
          transform: translateY(-2px);
        }

        .hero-demo-panel {
          padding: 1.75rem;
          border-radius: 20px;
          position: relative;
          background: rgba(10, 15, 30, 0.95) !important;
          border: 1px solid rgba(56, 189, 248, 0.35) !important;
          backdrop-filter: blur(28px);
          text-align: left;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(56, 189, 248, 0.12);
        }

        .demo-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
          gap: 1rem;
        }

        .demo-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.65rem;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #38bdf8;
          margin-bottom: 0.5rem;
        }

        .demo-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.2rem 0;
          font-family: var(--font-heading);
        }

        .demo-desc {
          font-size: 0.85rem;
          color: #94a3b8;
          margin: 0;
          line-height: 1.4;
        }

        .close-panel-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .close-panel-btn:hover {
          background: rgba(239, 68, 68, 0.35);
          border-color: rgba(239, 68, 68, 0.6);
          transform: rotate(90deg);
        }

        .demo-options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .demo-card-item {
          background: rgba(15, 23, 42, 0.95) !important;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 1.05rem 0.95rem;
          border-radius: 14px;
          text-align: left;
          transition: all 0.25s ease;
          cursor: pointer;
          color: #ffffff !important;
          display: flex;
          flex-direction: column;
          position: relative;
          backdrop-filter: blur(16px);
          width: 100%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
        }

        .demo-card-item:hover {
          background: rgba(26, 36, 66, 0.98) !important;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.6);
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.65rem;
        }

        .icon-badge {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }

        .demo-card-item:hover .icon-badge {
          transform: scale(1.08);
        }

        .item-tag {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          padding: 0.18rem 0.5rem;
          border-radius: 6px;
          border: 1px solid;
          background: rgba(0, 0, 0, 0.5) !important;
        }

        .card-body {
          margin-bottom: 0.65rem;
        }

        .item-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff !important;
          margin: 0 0 0.2rem 0;
          line-height: 1.3;
        }

        .item-sub {
          font-size: 0.76rem;
          color: #cbd5e1 !important;
          margin: 0;
          line-height: 1.35;
        }

        .card-action-row {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: #38bdf8;
          margin-top: auto;
        }

        .action-arrow {
          transition: transform 0.2s ease;
        }

        .demo-card-item:hover .action-arrow {
          transform: translateX(3px);
        }

        /* ERP Detail View */
        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          gap: 0.75rem;
        }

        .detail-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .detail-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #34d399;
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 0.45rem 0.85rem;
          color: #cbd5e1;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          transform: translateX(-2px);
        }

        .video-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          margin-bottom: 1.25rem;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 1024px) {
          .hero-grid, .hero-grid.demo-active {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid.demo-active .hero-buttons {
            justify-content: center;
          }
          .hero-buttons {
            flex-direction: column !important;
            width: 100% !important;
            gap: 1rem !important;
          }
          .btn-primary, .btn-secondary {
            width: 100% !important;
            max-width: 300px;
          }
          .hero-text-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 6.5rem 1rem 3.5rem 1rem;
            min-height: 90vh;
          }
          .hero-video-element {
            object-fit: cover;
            object-position: center;
          }
          .hero-heading {
            font-size: clamp(2rem, 7.5vw, 2.75rem);
            margin-bottom: 1.5rem;
          }
          .hero-demo-panel {
            padding: 1.25rem !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .demo-options-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .btn-primary, .btn-secondary {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0.9rem 1.5rem !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
