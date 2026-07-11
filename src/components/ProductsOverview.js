"use client";

import { motion } from "framer-motion";
import { ShoppingCart, GraduationCap, Hospital, Hotel, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductsOverview() {
  const products = [
    {
      id: "edu",
      name: "School IMS",
      tag: "Education, Simplified",
      desc: "Complete school information management — attendance, fees, exams, reports, parent communication, and complaint management.",
      icon: <GraduationCap size={28} color="#3b82f6" />,
      color: "#3b82f6",
      bgLight: "#eff6ff",
      btnText: "Explore School IMS"
    },
    {
      id: "health",
      name: "Medical ERP",
      tag: "Healthcare, Digitized",
      desc: "Advanced ERP for medical shops and pharmacies. Inventory tracking, automated billing, expiry management, and GST compliance.",
      icon: <Hospital size={28} color="#10b981" />,
      color: "#10b981",
      bgLight: "#ecfdf5",
      btnText: "Explore Medical ERP"
    },
    {
      id: "stay",
      name: "Restaurant ERP",
      tag: "Hospitality, Automated",
      desc: "Smart QR-based restaurant automation. Digital menus, real-time kitchen sync, table ordering, and automated billing.",
      icon: <Hotel size={28} color="#f97316" />,
      color: "#f97316",
      bgLight: "#fff7ed",
      btnText: "Explore Restaurant ERP"
    },
    {
      id: "ecommerce",
      name: "E-commerce Platform",
      tag: "Commerce, on Autopilot",
      desc: "End-to-end e-commerce OS for Indian brands. Auto checkout, COD automation, Shiprocket integration, and WhatsApp orders.",
      icon: <ShoppingCart size={28} color="#a855f7" />,
      color: "#a855f7",
      bgLight: "#faf5ff",
      btnText: "Explore E-commerce"
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header-top"
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", textAlign: "center" }}>
            Our <span className="text-gradient">Products</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 3rem auto", textAlign: "center", lineHeight: "1.6" }}>
            Discover our suite of industry-specific ERP solutions designed to streamline your operations, automate complex workflows, and drive unprecedented growth for your business.
          </p>
        </motion.div>

        <div className="products-grid">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.12)", borderColor: "#94a3b8" }}
              className="prod-card"
            >
              <div className="prod-header">
                <div className="prod-icon-wrapper" style={{ backgroundColor: product.bgLight }}>
                  {product.icon}
                </div>
                <div className="prod-title-group">
                  <h3 className="prod-name">{product.name}</h3>
                  <div className="prod-tag">{product.tag}</div>
                </div>
              </div>
              
              <p className="prod-desc">{product.desc}</p>
              
              <Link href={`/products/${product.id}`} className="prod-btn" style={{ backgroundColor: product.color }}>
                {product.btnText} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .products-section {
          padding: 6rem 0;
          background: transparent;
          position: relative;
          overflow: hidden;
        }

        .section-header-top {
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

        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 1fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .prod-card {
          background: #ffffff;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: border-color 0.3s ease;
          border-radius: 16px;
          border: 1px solid #cbd5e1;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          height: 100%;
        }

        .prod-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .prod-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .prod-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .prod-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .prod-tag {
          font-size: 0.9rem;
          font-weight: 500;
          color: #64748b;
        }

        .prod-desc {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        :global(.prod-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #ffffff;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.95rem;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          margin-top: auto;
          transition: transform 0.2s, opacity 0.2s, box-shadow 0.2s;
        }

        :global(.prod-btn:hover) {
          transform: translateY(-2px);
          opacity: 0.95;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .prod-card {
            align-items: center;
            text-align: center;
            padding: 2rem 1.5rem;
          }
          
          .prod-header {
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }

          .prod-title-group {
            align-items: center;
          }
          
          .prod-desc {
            text-align: center;
          }
          
          :global(.prod-btn) {
            width: 100%;
            font-size: 0.9rem;
            padding: 0.8rem 1rem;
            white-space: normal;
          }
        }
      `}</style>
    </section>
  );
}
