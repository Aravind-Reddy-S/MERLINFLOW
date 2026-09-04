"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Can MerlinFlow ERP handle multi-branch operations?",
      a: "Yes. Our enterprise plan is specifically designed for multi-location businesses, allowing you to manage multiple school campuses, hotel chains, or clinic branches from a single unified dashboard."
    },
    {
      q: "How long does implementation take?",
      a: "Implementation time varies by industry and scale. A standard single-branch setup can be deployed in 2-4 weeks, including data migration and staff training. Complex enterprise deployments may take 8-12 weeks."
    },
    {
      q: "Do you offer custom API integrations?",
      a: "Absolutely. MerlinFlow ERP features a robust RESTful API. Our engineering team can work with your IT department to build custom connectors for legacy systems or specialized hardware."
    },
    {
      q: "Is the platform mobile-friendly?",
      a: "Yes. MerlinFlow ERP is fully responsive and accessible via any web browser. We also provide dedicated native iOS and Android apps for field staff, parents (Education), and patients (Healthcare)."
    },
    {
      q: "What happens if we outgrow our current plan?",
      a: "Our cloud-native architecture is infinitely scalable. You can easily upgrade your plan, add new modules, or increase your user limits at any time without experiencing any downtime."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="badge">Got Questions?</div>
          <h2 style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="faq-item glass-panel"
            >
              <button 
                className="faq-question" 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span>{faq.q}</span>
                {openIndex === i ? <Minus className="text-primary" /> : <Plus className="text-muted" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .faq-section {
          padding: 4rem 0;
          background: transparent;
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

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background: transparent;
          border: none;
          color: var(--text-color);
          font-size: 1.05rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          gap: 1rem;
          transition: background 0.3s;
        }

        .faq-question:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .text-primary { color: var(--primary); flex-shrink: 0; }
        .text-muted { color: var(--text-muted); flex-shrink: 0; }

        .faq-answer-wrapper {
          overflow: hidden;
        }

        .faq-answer {
          padding: 0 2rem 1.5rem 2rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.98rem;
        }

        @media (max-width: 640px) {
          .faq-section {
            padding: 3rem 0;
          }
          .faq-question {
            padding: 1.25rem 1rem;
            font-size: 0.95rem;
          }
          .faq-answer {
            padding: 0 1rem 1.25rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
