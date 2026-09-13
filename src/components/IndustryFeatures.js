"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Building2, Stethoscope, Briefcase, CheckCircle, Users, Calendar, BarChart, ShieldCheck, Bed, Clock, Activity, FileText } from "lucide-react";

export default function IndustryFeatures() {
  const [activeTab, setActiveTab] = useState("education");

  const industries = [
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "hotels", label: "Hotels & Resorts", icon: <Bed size={18} /> },
    { id: "healthcare", label: "Hospitals & Clinics", icon: <Stethoscope size={18} /> },
    { id: "realestate", label: "Real Estate", icon: <Building2 size={18} /> },
    { id: "enterprise_crm", label: "Enterprise & CRMs", icon: <Briefcase size={18} /> },
    { id: "corporate", label: "Corporate ERP", icon: <BarChart size={18} /> }
  ];

  const featuresData = {
    education: [
      { title: "Admissions & Enrollment", desc: "Automate the entire student lifecycle from application to graduation.", icon: <Users size={24} color="#3b82f6" />, color: "#3b82f6", bgLight: "#eff6ff" },
      { title: "Fee & Billing Management", desc: "Automate fee collection, generate receipts, and track defaulters easily.", icon: <CheckCircle size={24} color="#10b981" />, color: "#10b981", bgLight: "#ecfdf5" },
      { title: "Academics & Grading", desc: "Manage curriculum, conduct exams, and generate comprehensive report cards.", icon: <FileText size={24} color="#a855f7" />, color: "#a855f7", bgLight: "#faf5ff" },
      { title: "Timetable & Scheduling", desc: "Conflict-free scheduling for classes, teachers, and resources.", icon: <Calendar size={24} color="#eab308" />, color: "#eab308", bgLight: "#fef9c3" },
      { title: "Data Security", desc: "Bank-level encryption ensures student and staff data is always secure.", icon: <ShieldCheck size={24} color="#ef4444" />, color: "#ef4444", bgLight: "#fef2f2" },
      { title: "Parent Portal", desc: "Dedicated access for parents to track progress, attendance, and pay fees.", icon: <CheckCircle size={24} color="#6366f1" />, color: "#6366f1", bgLight: "#e0e7ff" }
    ],
    hotels: [
      { title: "Reservation System", desc: "Real-time booking engine integrated with global OTAs and front desk.", icon: <Calendar size={24} color="#3b82f6" />, color: "#3b82f6", bgLight: "#eff6ff" },
      { title: "Property Management (PMS)", desc: "Manage housekeeping, maintenance, and room statuses seamlessly.", icon: <Building2 size={24} color="#10b981" />, color: "#10b981", bgLight: "#ecfdf5" },
      { title: "Point of Sale (POS)", desc: "Integrated billing for restaurants, spas, and other hotel amenities.", icon: <BarChart size={24} color="#a855f7" />, color: "#a855f7", bgLight: "#faf5ff" },
      { title: "Guest Experience", desc: "Self-check-in kiosks and mobile room keys for a modern guest journey.", icon: <Users size={24} color="#eab308" />, color: "#eab308", bgLight: "#fef9c3" },
      { title: "Inventory & Procurement", desc: "Automate stock levels for F&B and housekeeping supplies.", icon: <CheckCircle size={24} color="#ef4444" />, color: "#ef4444", bgLight: "#fef2f2" },
      { title: "Revenue Management", desc: "Dynamic pricing algorithms to maximize occupancy and RevPAR.", icon: <Activity size={24} color="#6366f1" />, color: "#6366f1", bgLight: "#e0e7ff" }
    ],
    healthcare: [
      { title: "Patient Records (EHR)", desc: "Secure, centralized digital records for complete patient history.", icon: <FileText size={24} color="#3b82f6" />, color: "#3b82f6", bgLight: "#eff6ff" },
      { title: "Appointment Scheduling", desc: "Smart booking system for doctors, surgeries, and diagnostic labs.", icon: <Clock size={24} color="#10b981" />, color: "#10b981", bgLight: "#ecfdf5" },
      { title: "Pharmacy Management", desc: "Track medication inventory, expirations, and automate billing.", icon: <Briefcase size={24} color="#a855f7" />, color: "#a855f7", bgLight: "#faf5ff" },
      { title: "Insurance & Billing", desc: "Streamline claims processing and out-of-pocket patient invoicing.", icon: <BarChart size={24} color="#eab308" />, color: "#eab308", bgLight: "#fef9c3" },
      { title: "Telemedicine Ready", desc: "Integrated video consultations and remote patient monitoring.", icon: <Activity size={24} color="#ef4444" />, color: "#ef4444", bgLight: "#fef2f2" },
      { title: "Compliance & Security", desc: "HIPAA compliant infrastructure ensuring strict data privacy.", icon: <ShieldCheck size={24} color="#6366f1" />, color: "#6366f1", bgLight: "#e0e7ff" }
    ],
    realestate: [
      { title: "3D Unit Inventory Matrix", desc: "Real-time color-coded unit grid with atomic reservation locking and zero double bookings.", icon: <Building2 size={24} color="#0284c7" />, color: "#0284c7", bgLight: "#f0f9ff" },
      { title: "Omnichannel Lead Ingestion", desc: "Direct webhook pipelines for 99acres, MagicBricks, Meta Ads with sub-3s round-robin routing.", icon: <Users size={24} color="#059669" />, color: "#059669", bgLight: "#ecfdf5" },
      { title: "Site Visit & Cab Dispatch", desc: "Automated Uber/Ola dispatch, Google Maps GPS pins, and instant WhatsApp QR visitor passes.", icon: <Calendar size={24} color="#d97706" />, color: "#d97706", bgLight: "#fffbeb" },
      { title: "RERA Milestone Demand Notes", desc: "Stage-wise construction progress billing with engineer certification and instant payment links.", icon: <FileText size={24} color="#6366f1" />, color: "#6366f1", bgLight: "#eef2ff" },
      { title: "Channel Partner (CP) Portal", desc: "Dedicated mobile broker workspace with 60-day client protection and live commission ledgers.", icon: <ShieldCheck size={24} color="#ec4899" />, color: "#ec4899", bgLight: "#fdf2f8" },
      { title: "Executive Sales BI", desc: "Real-time tower absorption velocity, source-wise CAC analysis, and unsold holding cost tracker.", icon: <BarChart size={24} color="#8b5cf6" />, color: "#8b5cf6", bgLight: "#f5f3ff" }
    ],
    enterprise_crm: [
      { title: "Visual Deal Pipeline & CPQ", desc: "AI-backed win rate forecasting, multi-stage sales Kanban, and automated Configure-Price-Quote.", icon: <BarChart size={24} color="#6366f1" />, color: "#6366f1", bgLight: "#eef2ff" },
      { title: "Multi-Entity GST & E-Invoicing", desc: "Direct NIC portal sync with sub-second IRN, E-Way bills, and consolidated multi-branch ledgers.", icon: <FileText size={24} color="#059669" />, color: "#059669", bgLight: "#ecfdf5" },
      { title: "Workflow Approval Engine", desc: "Multi-tier approval matrices for contract discounts, purchase requisitions, and credit limits.", icon: <Activity size={24} color="#d97706" />, color: "#d97706", bgLight: "#fffbeb" },
      { title: "Procurement & Vendor Portal", desc: "Complete PO lifecycle management, 3-way invoice matching, GRN logs, and supplier ratings.", icon: <Briefcase size={24} color="#0284c7" />, color: "#0284c7", bgLight: "#f0f9ff" },
      { title: "Centralized HRMS & Payroll", desc: "Biometric hardware sync, shift rosters, automated statutory compliance (PF/ESI/TDS), and self-service.", icon: <Users size={24} color="#ec4899" />, color: "#ec4899", bgLight: "#fdf2f8" },
      { title: "360° Customer Timeline", desc: "Omnichannel communication trail uniting email, WhatsApp API, and cloud telephony call audits.", icon: <ShieldCheck size={24} color="#8b5cf6" />, color: "#8b5cf6", bgLight: "#f5f3ff" }
    ],
    corporate: [
      { title: "Human Resources (HRMS)", desc: "Manage payroll, attendance, leave, and employee lifecycles.", icon: <Users size={24} color="#3b82f6" />, color: "#3b82f6", bgLight: "#eff6ff" },
      { title: "Financial Accounting", desc: "Comprehensive ledgers, tax compliance, and automated reporting.", icon: <BarChart size={24} color="#10b981" />, color: "#10b981", bgLight: "#ecfdf5" },
      { title: "Supply Chain", desc: "End-to-end visibility from procurement to final delivery.", icon: <Briefcase size={24} color="#a855f7" />, color: "#a855f7", bgLight: "#faf5ff" },
      { title: "CRM Integration", desc: "Track sales pipelines, customer interactions, and support tickets.", icon: <CheckCircle size={24} color="#eab308" />, color: "#eab308", bgLight: "#fef9c3" },
      { title: "Asset Management", desc: "Track depreciation, maintenance schedules, and locations of IT assets.", icon: <Building2 size={24} color="#ef4444" />, color: "#ef4444", bgLight: "#fef2f2" },
      { title: "Advanced Analytics", desc: "Customizable dashboards and AI-driven business intelligence.", icon: <Activity size={24} color="#6366f1" />, color: "#6366f1", bgLight: "#e0e7ff" }
    ]
  };

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Industry Solutions</div>
          <h2 style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
            Built for <span className="text-gradient">Every Business</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Whether you run a school, a hospital, or a chain of hotels, our SaaS modules adapt to your specific workflow.
          </p>
        </div>

        <div className="tabs-container">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`tab-button ${activeTab === industry.id ? "active" : ""}`}
            >
              {industry.icon}
              <span>{industry.label}</span>
            </button>
          ))}
        </div>

        <div className="tab-content-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="features-grid"
            >
              {featuresData[activeTab].map((feature, i) => (
                <div key={i} className="feature-card glass-panel">
                  <div className="icon-wrapper" style={{ backgroundColor: feature.bgLight, color: feature.color }}>{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .features-section {
          padding: 4rem 0;
          position: relative;
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

        .tabs-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          gap: 0.55rem;
          margin-bottom: 2.5rem;
          max-width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0.35rem 0.5rem;
        }

        .tabs-container::-webkit-scrollbar {
          display: none;
        }

        .tab-button {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.05rem;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 50px;
          color: #475569;
          font-weight: 600;
          font-size: 0.86rem;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .tab-button:hover {
          background: #f8fafc;
          color: var(--primary);
          border-color: #3b82f6;
        }

        .tab-button.active {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
        }

        .tab-content-wrapper {
          min-height: 380px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 1fr;
          gap: 1.5rem;
        }

        .feature-card {
          padding: 2rem 1.5rem;
          transition: transform 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          border-radius: 18px;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.2);
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
        }

        .feature-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--text-color);
        }

        .feature-desc {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
          min-height: 50px;
          height: auto;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .feature-card {
            padding: 1.5rem 1.25rem;
          }
          .tab-button {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
