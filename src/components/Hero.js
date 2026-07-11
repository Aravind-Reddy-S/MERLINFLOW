"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, GraduationCap, Building, HeartPulse, ShoppingCart, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedERP, setSelectedERP] = useState(null);

  return (
    <div className="hero-wrapper">
      <section className="hero-container">
      <div className={`container hero-grid ${isDemoOpen ? 'demo-active' : ''}`} style={{ position: "relative", zIndex: 10 }}>
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
            style={{ marginBottom: "2rem", display: "inline-block" }}
          >
            <span className="glass-panel" style={{ display: "inline-block", padding: "0.5rem 1rem", fontSize: "0.875rem", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase", color: "var(--primary)", lineHeight: "1.5" }}>
              Introducing MerlinFlow Technologies
            </span>
          </motion.div>

          <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.5rem", wordBreak: "break-word" }}>
            Innovation at <span className="text-gradient">every step.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)", color: "var(--text-muted)", maxWidth: "650px", marginBottom: "3rem", lineHeight: 1.6, marginInline: isDemoOpen ? "0" : "auto", transition: "margin 0.5s ease" }}
          >
            The premium Operating System for modern Educational Institutions and Enterprises. Unify your workflows, automate complex processes, and unlock unprecedented growth with our state-of-the-art, secure SaaS platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-buttons"
          >
            <button onClick={() => setIsDemoOpen(true)} className="btn-primary">Book a Free Demo</button>
            <a href="#features" className="btn-secondary">Explore Products</a>
          </motion.div>

        </motion.div>

        <AnimatePresence>
          {isDemoOpen && (
            <motion.div 
              className="hero-demo-panel glass-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                {!selectedERP ? (
                  <h3 style={{ margin: 0, color: 'var(--primary)', fontSize: '1.5rem' }}>Select an Industry</h3>
                ) : (
                  <div className="detail-header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button className="back-btn" onClick={() => setSelectedERP(null)}>
                      <ArrowLeft size={18} />
                    </button>
                    <h3 style={{ margin: 0, color: 'var(--primary)', fontSize: '1.4rem' }}>{selectedERP.title} Overview</h3>
                  </div>
                )}
                
                <button className="close-panel-btn" onClick={() => { setIsDemoOpen(false); setSelectedERP(null); }}>
                  <X size={20} />
                </button>
              </div>

              {!selectedERP ? (
                <div className="demo-options-grid">
                  <button onClick={() => setSelectedERP({ title: 'Educational ERP', link: 'https://calendly.com/temp-educational' })} className="demo-card">
                    <GraduationCap size={32} className="card-icon" />
                    <h4>Educational ERP</h4>
                  </button>
                  <button onClick={() => setSelectedERP({ title: 'Hotel ERP', link: 'https://calendly.com/temp-hotel' })} className="demo-card">
                    <Building size={32} className="card-icon" />
                    <h4>Hotel ERP</h4>
                  </button>
                  <button onClick={() => setSelectedERP({ title: 'Hospital ERP', link: 'https://calendly.com/temp-hospital' })} className="demo-card">
                    <HeartPulse size={32} className="card-icon" />
                    <h4>Hospital ERP</h4>
                  </button>
                  <button onClick={() => setSelectedERP({ title: 'E-Commerce', link: 'https://calendly.com/temp-ecommerce' })} className="demo-card">
                    <ShoppingCart size={32} className="card-icon" />
                    <h4>E-Commerce</h4>
                  </button>
                </div>
              ) : (
                <div className="erp-detail-view">
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
                  <a href={selectedERP.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                    Proceed to Book Live Demo
                  </a>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      </section>

      <style jsx>{`
        .hero-container {
          min-height: 95vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding-top: 5rem;
          background-image: linear-gradient(var(--glass-bg), var(--glass-bg)), url('/images/merlinflow.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          text-align: center;
          transition: all 0.5s ease;
        }

        .hero-grid.demo-active {
          grid-template-columns: 1fr 1fr;
          text-align: left;
        }

        .hero-grid.demo-active .hero-buttons {
          justify-content: flex-start;
        }

        .hero-demo-panel {
          padding: 2rem;
          border-radius: 16px;
          position: relative;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(12px);
          text-align: left;
        }

        .close-panel-btn {
          background: var(--bg-alpha-light);
          border: none;
          color: var(--text-color);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .close-panel-btn:hover {
          background: var(--bg-alpha-hover);
        }

        .video-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          margin-bottom: 1.5rem;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .demo-options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .demo-card {
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          padding: 1.5rem 1rem;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          color: var(--text-color);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .demo-card:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .card-icon {
          color: var(--primary);
          margin-bottom: 0.75rem;
        }

        .demo-card h4 {
          font-size: 0.95rem;
          margin: 0;
        }

        .back-btn {
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          transition: all 0.2s;
        }

        .back-btn:hover {
          background: var(--bg-alpha-hover);
          color: var(--text-color);
          transform: translateX(-2px);
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .hero-container::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          opacity: 0.15;
          filter: blur(100px);
          animation: float 10s infinite alternate ease-in-out;
        }

        .hero-container::after {
          content: '';
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, var(--accent-1) 0%, transparent 70%);
          opacity: 0.15;
          filter: blur(100px);
          animation: float-reverse 12s infinite alternate ease-in-out;
        }

        .hero-image-wrapper {
          position: relative;
          perspective: 1000px;
        }

        .hero-image {
          position: relative;
          z-index: 1;
          width: 100%;
          height: auto;
          filter: var(--image-filter) drop-shadow(0 25px 50px rgba(0,0,0,0.2));
          mix-blend-mode: var(--image-blend);
          transform: scaleX(-1); /* Flips the eagle from right to left */
          animation: levitate 6s ease-in-out infinite;
          transition: filter 0.3s ease, mix-blend-mode 0.3s ease;
        }

        .btn-primary {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: var(--primary);
          color: #ffffff;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: var(--neon-glow);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .btn-primary:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: var(--neon-glow-hover);
        }

        .btn-secondary {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: transparent;
          color: var(--text-color);
          border: 1px solid var(--glass-border);
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: var(--glass-bg);
          border-color: var(--text-muted);
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes float-reverse {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50px, -50px); }
        }

        @keyframes levitate {
          0%, 100% { transform: translateY(0) scaleX(-1); }
          50% { transform: translateY(-20px) scaleX(-1); }
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

        @media (max-width: 600px) {
          .demo-options-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
