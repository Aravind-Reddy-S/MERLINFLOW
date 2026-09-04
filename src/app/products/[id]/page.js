"use client";

import { motion } from "framer-motion";
import { ShoppingCart, GraduationCap, Hospital, Hotel, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import ContactSection from "../../../components/ContactSection";
import SchoolImsView from "../../../components/SchoolImsView";
import { notFound } from "next/navigation";

// Data mapping for all products
const PRODUCT_DATA = {
  edu: {
    name: "School IMS",
    tag: "Education, Simplified",
    desc: "Complete school information management — attendance, fees, exams, reports, parent communication, and complaint management.",
    icon: GraduationCap,
    color: "#3b82f6",
    bgLight: "#eff6ff",
    features: [
      { title: "Smart Attendance Engine", desc: "Instant view of multi-session daily attendance records with cumulative percentage tracking against systemic baseline requirements." },
      { title: "Digital Fee Processing", desc: "Instant digital checkout powered by UPI, cards, and net banking with automated generation of downloadable tax-compliant receipts." },
      { title: "Assignment Repository", desc: "Digital dropbox engine for homework submission with real-time countdown alerts, dynamic file validations, and evaluation alerts." },
      { title: "Result & Progress Analytics", desc: "Interactive performance analytics engine tracking historical progress charts across major examination cycles." }
    ]
  },
  "school-ims": {
    name: "School IMS",
    tag: "Education, Simplified",
    desc: "Complete school information management — attendance, fees, exams, reports, parent communication, and complaint management.",
    icon: GraduationCap,
    color: "#3b82f6",
    bgLight: "#eff6ff",
  },
  health: {
    name: "Medical ERP",
    tag: "Healthcare, Digitized",
    desc: "Advanced ERP for medical shops and pharmacies. Inventory tracking, automated billing, expiry management, and GST compliance.",
    icon: Hospital,
    color: "#10b981",
    bgLight: "#ecfdf5",
    features: [
      { title: "Patient Management", desc: "Complete digital registration, patient profiling, medical history timelines, and automated insurance verification workflows." },
      { title: "Centralized Pharmacy", desc: "End-to-end medicine inventory tracking, barcode dispensing, stock management, and automated expiry alerts." },
      { title: "Advanced Billing Engine", desc: "Automated OPD/IPD charge calculations, discount management, insurance split billing, and integrated online payments." },
      { title: "Smart Laboratory Module", desc: "Integrated test booking, real-time sample tracking, digitized report uploads, and seamless machine integration." }
    ]
  },
  stay: {
    name: "Restaurant ERP",
    tag: "Hospitality, Automated",
    desc: "Smart QR-based restaurant automation. Digital menus, real-time kitchen sync, table ordering, and automated billing.",
    icon: Hotel,
    color: "#f97316",
    bgLight: "#fff7ed",
    features: [
      { title: "Intelligent Reservation & OTA Sync", desc: "A flawless reservation matrix that synchronizes real-time availability across multiple Online Travel Agencies (OTAs), completely eliminating concurrent double-bookings." },
      { title: "Automated POS Integration", desc: "Connect localized physical inventory directly to the primary accounting ledger, syncing dine-in QR orders and bar tabs directly to the guest's master bill." },
      { title: "Dynamic Housekeeping Workflows", desc: "An administrative scheduling layer that assigns cleaning tasks, tracks room readiness in real-time, and automatically notifies front desk personnel." },
      { title: "Comprehensive Financial Policy", desc: "Highly flexible fee structure configurer mapping room tariffs, seasonal premiums, and individual discount allocations alongside automated collection ledgers." }
    ]
  },
  ecommerce: {
    name: "E-commerce Platform",
    tag: "Commerce, on Autopilot",
    desc: "End-to-end e-commerce OS for Indian brands. Auto checkout, COD automation, Shiprocket integration, and WhatsApp orders.",
    icon: ShoppingCart,
    color: "#a855f7",
    bgLight: "#faf5ff",
    features: [
      { title: "Automated Checkout & COD", desc: "An advanced digital checkout pipeline powered by OTP-based validations to reduce abandoned carts and streamline Cash on Delivery verifications." },
      { title: "Logistics Integration Layer", desc: "Direct API integration hooks with delivery partners for real-time order synchronization, automated airway bill generation, and live shipment tracking." },
      { title: "Omnichannel Notification Hub", desc: "Automated multi-channel notification microservice broadcasting order confirmations, tracking links, and abandoned cart recovery alerts via WhatsApp." },
      { title: "Master Inventory Management", desc: "Complete structural management of multi-warehouse inventory levels, featuring predictive low-stock alerts and advanced demand forecasting analytics." }
    ]
  }
};

export default function ProductPage({ params }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  if (id === "edu" || id === "school-ims") {
    return <SchoolImsView />;
  }

  const product = PRODUCT_DATA[id];

  if (!product) {
    notFound();
  }

  const IconComponent = product.icon;

  return (
    <div className="product-page">
      <div className="container">
        {/* Back Link */}
        <div className="back-nav">
          <Link href="/#products" className="back-link">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>

        {/* Hero Section */}
        <div className="product-hero">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="hero-icon-wrapper" 
            style={{ backgroundColor: product.bgLight }}
          >
            <IconComponent size={64} color={product.color} />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="hero-text"
          >
            <span className="product-tag" style={{ color: product.color }}>{product.tag}</span>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">{product.desc}</p>
          </motion.div>
        </div>

        {/* Deep Dive Features */}
        <div className="features-section">
          <h2 className="section-heading">Key Capabilities</h2>
          <div className="features-grid">
            {product.features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon" style={{ backgroundColor: product.bgLight }}>
                  <CheckCircle2 size={24} color={product.color} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Contact Form reused */}
      <div className="contact-wrapper">
        <ContactSection />
      </div>

      <style jsx>{`
        .product-page {
          padding-top: 8rem;
          min-height: 100vh;
          background-color: var(--bg-color);
        }

        .back-nav {
          margin-bottom: 3rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: var(--primary);
        }

        .product-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 6rem;
        }

        .hero-icon-wrapper {
          width: 120px;
          height: 120px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .product-tag {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: block;
          margin-bottom: 1rem;
        }

        .product-title {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 1.5rem;
        }

        .product-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .features-section {
          margin-bottom: 6rem;
        }

        .section-heading {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          color: var(--text-color);
          margin-bottom: 3rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .feature-card {
          background: var(--bg-alpha-light);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        .contact-wrapper {
          border-top: 1px solid var(--glass-border);
          background-color: var(--bg-color);
        }

        @media (max-width: 768px) {
          .product-title {
            font-size: 2.5rem;
          }
          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
