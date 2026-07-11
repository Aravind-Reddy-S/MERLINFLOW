"use client";

import { motion } from "framer-motion";
import { Check, X, ShoppingCart, Hotel, GraduationCap, Hospital } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "E-Commerce Integration",
      desc: "Perfect for scaling online stores connecting to basic accounting.",
      price: "$3,500",
      period: "/annum",
      popular: false,
      icon: ShoppingCart,
      color: "#a855f7",
      bgLight: "#faf5ff",
      features: [
        { text: "Shopify & WooCommerce Sync", included: true },
        { text: "Up to 50,000 orders/year", included: true },
        { text: "Inventory & CRM Sync", included: true },
        { text: "Standard Email Support", included: true },
        { text: "Custom API Workflows", included: true },
        { text: "Dedicated Account Manager", included: true },
      ]
    },
    {
      name: "Hotel ERP Integration",
      desc: "Connect Property Management Systems to booking engines.",
      price: "$7,500",
      period: "/annum",
      popular: false,
      icon: Hotel,
      color: "#f97316",
      bgLight: "#fff7ed",
      features: [
        { text: "Opera & Mews Integration", included: true },
        { text: "Real-time Booking Sync", included: true },
        { text: "Restaurant & POS Sync", included: true },
        { text: "Priority Phone Support", included: true },
        { text: "Custom API Workflows", included: true },
        { text: "Dedicated Account Manager", included: true },
      ]
    },
    {
      name: "Educational ERP",
      desc: "Unified systems for schools and universities (SIS & LMS).",
      price: "$5,500",
      period: "/annum",
      popular: false,
      icon: GraduationCap,
      color: "#3b82f6",
      bgLight: "#eff6ff",
      features: [
        { text: "Canvas & Blackboard Sync", included: true },
        { text: "Student Record Management", included: true },
        { text: "Automated Fee Collection", included: true },
        { text: "Parent Portal Integration", included: true },
        { text: "Custom API Workflows", included: true },
        { text: "Dedicated Account Manager", included: true },
      ]
    },
    {
      name: "Hospital ERP",
      desc: "Secure integration for healthcare, EMR, and patient billing.",
      price: "$12,500",
      period: "/annum",
      popular: false,
      icon: Hospital,
      color: "#10b981",
      bgLight: "#ecfdf5",
      features: [
        { text: "Epic & Cerner Integration", included: true },
        { text: "HIPAA Compliant Data Flow", included: true },
        { text: "Insurance Claims Sync", included: true },
        { text: "24/7 Dedicated Support", included: true },
        { text: "Custom API Workflows", included: true },
        { text: "Dedicated Account Manager", included: true },
      ]
    }
  ];

  // Unique entrance animations for each card based on index
  const getCardAnimation = (index) => {
    switch(index) {
      case 0: return { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } };
      case 1: return { initial: { opacity: 0, y: 30, scale: 0.9 }, whileInView: { opacity: 1, y: 0, scale: 1 } };
      case 2: return { initial: { opacity: 0, y: 30, scale: 0.9 }, whileInView: { opacity: 1, y: 0, scale: 1 } };
      case 3: return { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } };
      default: return { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } };
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header-top"
        >
          <div className="badge">Transparent Pricing</div>
          <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1rem" }}>
            Annual Plans for every <span className="text-gradient">Industry.</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 2rem auto", lineHeight: "1.6" }}>
            Whether you are managing e-commerce transactions, hotel bookings, student records, or sensitive patient data, our integration tiers are built to scale with your annual requirements.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => {
            const animationProps = getCardAnimation(index);
            return (
              <motion.div 
                key={index}
                initial={animationProps.initial}
                whileInView={animationProps.whileInView}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)", borderColor: "rgba(99, 102, 241, 0.5)" }}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="pricing-header">
                  <div className="plan-icon-wrapper" style={{ backgroundColor: plan.bgLight }}>
                    <plan.icon size={28} color={plan.color} />
                  </div>
                  <h3>{plan.name}</h3>
                  <p className="plan-desc">{plan.desc}</p>
                  <div className="price-tag">
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>

                <div className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      className={`feature-item ${!feature.included ? 'disabled' : ''}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      {feature.included ? (
                        <Check size={18} className="feature-icon check" />
                      ) : (
                        <X size={18} className="feature-icon cross" />
                      )}
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pricing-footer">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="plan-btn primary"
                    style={{ backgroundColor: plan.color, boxShadow: `0 4px 15px ${plan.color}40` }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .pricing-section {
          padding: 6rem 0;
          background: transparent;
          border-bottom: 1px solid var(--glass-border);
          overflow: hidden; /* Ensure animations don't cause scrollbars */
        }

        .section-header-top {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4rem;
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

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 1fr;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .pricing-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 2.5rem 2rem;
          position: relative;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(12px);
          transition: background 0.3s ease;
          height: 100%;
        }

        .pricing-card.popular {
          background: var(--bg-color);
          border: 1px solid var(--primary);
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.15);
          z-index: 2;
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--primary), var(--accent-1));
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
          width: 90%;
          max-width: 200px;
          text-align: center;
        }

        .pricing-header {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .plan-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .pricing-header h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-color);
        }

        .plan-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          min-height: 60px;
          height: auto;
        }

        .price-tag {
          display: flex;
          align-items: flex-end;
          gap: 0.25rem;
        }

        .amount {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-color);
          line-height: 1;
        }

        .period {
          color: var(--text-muted);
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 0.3rem;
        }

        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          flex-grow: 1;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-color);
          line-height: 1.4;
        }

        .feature-item.disabled {
          color: var(--text-muted);
          opacity: 0.5;
        }

        .feature-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-icon.check {
          color: var(--primary);
        }

        .feature-icon.cross {
          color: var(--text-muted);
          opacity: 0.5;
        }

        .pricing-footer {
          margin-top: auto;
        }

        .plan-btn {
          width: 100%;
          padding: 1rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .plan-btn.primary {
          background: var(--primary);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .plan-btn.secondary {
          background: var(--bg-alpha-light);
          color: var(--text-color);
          border: 1px solid var(--glass-border);
        }

        @media (max-width: 1200px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 900px;
          }
          .plan-desc {
            height: auto;
          }
        }

        @media (max-width: 640px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 450px;
          }
          
          .pricing-card {
            align-items: center;
            text-align: center;
          }
          
          .pricing-header {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .pricing-features {
            align-items: center;
          }
          
          .feature-item {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
