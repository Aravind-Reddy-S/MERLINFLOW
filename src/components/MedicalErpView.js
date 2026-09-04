"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Pill, Activity, Receipt, Truck, ShieldCheck, 
  History, Users, FileText, BarChart3, Database, 
  PhoneCall, CreditCard, Stethoscope, Lock, Server, 
  Shield, FileCheck, ArrowRight, LayoutGrid, Target, 
  UserCheck, Heart, Sparkles, Clock, ArrowLeft, 
  Check, Layers, ChevronDown, Phone, HelpCircle, 
  Award, Zap, Globe, IndianRupee, AlertCircle, ExternalLink,
  Calculator, CheckCircle2, X, Sliders, TrendingUp, Search
} from "lucide-react";
import Link from "next/link";
import ContactSection from "./ContactSection";

export default function MedicalErpView() {
  const [activeTab, setActiveTab] = useState("overview"); // overview, modules, solutions, roadmap, calculator, compare, pricing, security
  const [moduleCategory, setModuleCategory] = useState("all");
  const [previewTab, setPreviewTab] = useState("pos"); // pos, inventory
  const [monthlySales, setMonthlySales] = useState(500000); // 5 Lakhs default for ROI calculator
  const [dailyBills, setDailyBills] = useState(120);
  const [isYearlyPricing, setIsYearlyPricing] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeRole, setActiveRole] = useState(0);

  // 15+ Purpose-Built Modules categorized internally
  const moduleCategories = [
    {
      id: "inventory",
      title: "Inventory & Stock Control",
      subtitle: "Core pharmacy stock management, medicine catalog & zero-expiry loss",
      badgeColor: "linear-gradient(135deg, #10b981, #059669)",
      badgeBg: "#ecfdf5",
      badgeBorder: "#a7f3d0",
      badgeText: "#059669",
      modules: [
        { 
          name: "Medicine Master", 
          desc: "Centralized database for all medicines with generic salt composition, batch numbers, HSN codes, and category tags.", 
          icon: <Pill size={24} color="#059669" />,
          iconBg: "#ecfdf5",
          borderColor: "#a7f3d0",
          tags: ["HSN & GST Ready", "Generic Salt Search", "Batch Master"]
        },
        { 
          name: "Expiry Radar & Batch Tracking", 
          desc: "Proactive 30/60/90-day expiry notifications with automated batch blocking to eliminate dead stock.", 
          icon: <History size={24} color="#0d9488" />,
          iconBg: "#f0fdfa",
          borderColor: "#99f6e4",
          tags: ["30/60/90d Alerts", "Auto Batch Lock", "Zero Deadstock"]
        },
        { 
          name: "Low Stock & Smart Reorder", 
          desc: "Never run out of essential life-saving drugs with predictive threshold alerts and automated vendor PO drafts.", 
          icon: <Activity size={24} color="#ea580c" />,
          iconBg: "#fff7ed",
          borderColor: "#fed7aa",
          tags: ["Predictive Alerts", "Vendor PO Drafts", "Min/Max Levels"]
        },
        { 
          name: "Supplier Ledger Management", 
          desc: "Manage purchase orders, track supplier credit balances, procurement timelines, and accounts payable ledgers.", 
          icon: <Truck size={24} color="#2563eb" />,
          iconBg: "#eff6ff",
          borderColor: "#bfdbfe",
          tags: ["Accounts Payable", "Credit Khata", "PO Tracking"]
        },
        { 
          name: "Purchase & Breakage Returns", 
          desc: "Process and reconcile returns to distributors for damaged, near-expiry, or recalled medicine batches in one click.", 
          icon: <FileText size={24} color="#7c3aed" />,
          iconBg: "#faf5ff",
          borderColor: "#e9d5ff",
          tags: ["1-Click Returns", "Distributor Credit", "Breakage Reconcile"]
        }
      ]
    },
    {
      id: "sales",
      title: "Sales & Invoicing (POS)",
      subtitle: "Lightning-fast barcode checkout, customer credit accounts & schedule drug records",
      badgeColor: "linear-gradient(135deg, #0d9488, #0284c7)",
      badgeBg: "#f0fdfa",
      badgeBorder: "#99f6e4",
      badgeText: "#0d9488",
      modules: [
        { 
          name: "Fast Barcode Billing (POS)", 
          desc: "Complete counter checkout in under 5 seconds with barcode scanning, auto GST computation, and instant thermal printing.", 
          icon: <Receipt size={24} color="#059669" />,
          iconBg: "#ecfdf5",
          borderColor: "#a7f3d0",
          tags: ["< 5s Checkout", "Auto GST Split", "Thermal Print"]
        },
        { 
          name: "Sales & Gross Margin Analytics", 
          desc: "Identify fast-moving medicines, peak counter hours, daily net revenue, and gross profit margins in real time.", 
          icon: <BarChart3 size={24} color="#2563eb" />,
          iconBg: "#eff6ff",
          borderColor: "#bfdbfe",
          tags: ["Gross Margin %", "Fast-Moving Drugs", "Daily P&L"]
        },
        { 
          name: "Patient Profiles & Credit Accounts", 
          desc: "Maintain customer purchase history, manage chronic medication refill lists, and track credit balance khata.", 
          icon: <Users size={24} color="#ea580c" />,
          iconBg: "#fff7ed",
          borderColor: "#fed7aa",
          tags: ["Patient Khata", "Chronic Refills", "Purchase History"]
        },
        { 
          name: "Schedule H/H1 Prescription Records", 
          desc: "Digitally attach and record doctor prescriptions for Schedule H, H1, and narcotic drugs for complete regulatory audits.", 
          icon: <Stethoscope size={24} color="#e11d48" />,
          iconBg: "#fef2f2",
          borderColor: "#fecaca",
          tags: ["Doctor Rx Attach", "Narcotic Audit", "Govt Compliant"]
        },
        { 
          name: "Multi-Mode Split Payments", 
          desc: "Accept split transactions across UPI (PhonePe, GPay, Paytm), credit/debit cards, patient credit, and cash seamlessly.", 
          icon: <CreditCard size={24} color="#7c3aed" />,
          iconBg: "#faf5ff",
          borderColor: "#e9d5ff",
          tags: ["Dynamic QR Code", "Split Payments", "UPI & Cards"]
        }
      ]
    },
    {
      id: "admin",
      title: "Admin, Multi-Store & Compliance",
      subtitle: "Business administration, tax audit preparedness & enterprise data security",
      badgeColor: "linear-gradient(135deg, #f59e0b, #d97706)",
      badgeBg: "#fffbeb",
      badgeBorder: "#fde68a",
      badgeText: "#d97706",
      modules: [
        { 
          name: "Granular Role-Based Access (RBAC)", 
          desc: "Configure role-specific permissions for Pharmacists, Store Managers, and Billing Cashiers with immutable audit logs.", 
          icon: <ShieldCheck size={24} color="#059669" />,
          iconBg: "#ecfdf5",
          borderColor: "#a7f3d0",
          tags: ["Staff Permissions", "Manager Override", "Audit Trail"]
        },
        { 
          name: "Multi-Branch & Warehouse Sync", 
          desc: "Synchronize stock levels, manage inter-branch transfers, and view consolidated sales across all your pharmacy outlets.", 
          icon: <Globe size={24} color="#0d9488" />,
          iconBg: "#f0fdfa",
          borderColor: "#99f6e4",
          tags: ["Inter-Store Transfer", "Consolidated P&L", "Chain Control"]
        },
        { 
          name: "Automated Cloud Data Backups", 
          desc: "Automated daily cloud backups with 256-bit encrypted snapshots ensuring zero data loss and business continuity.", 
          icon: <Database size={24} color="#2563eb" />,
          iconBg: "#eff6ff",
          borderColor: "#bfdbfe",
          tags: ["Daily Auto Backup", "256-bit AES", "Zero Loss"]
        },
        { 
          name: "One-Click GST & Tax Returns", 
          desc: "Generate pre-formatted GSTR-1, GSTR-3B, and HSN summary spreadsheets ready for instant CA upload.", 
          icon: <FileText size={24} color="#ea580c" />,
          iconBg: "#fff7ed",
          borderColor: "#fed7aa",
          tags: ["GSTR-1 & 3B", "HSN Breakdown", "CA Upload Ready"]
        }
      ]
    },
    {
      id: "future",
      title: "Future-Ready & Modern Retail",
      subtitle: "Tele-doctor consultations, doorstep delivery & omnichannel pharmacy",
      badgeColor: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      badgeBg: "#faf5ff",
      badgeBorder: "#e9d5ff",
      badgeText: "#7c3aed",
      modules: [
        { 
          name: "Tele-Consultation Kiosk", 
          desc: "Connect walk-in customers with certified online physicians directly from your pharmacy counter console.", 
          icon: <PhoneCall size={24} color="#7c3aed" />,
          iconBg: "#faf5ff",
          borderColor: "#e9d5ff",
          tags: ["Doctor Video Call", "Instant Rx Print", "Counter Kiosk"]
        },
        { 
          name: "Doorstep Delivery & Dispatch Tracker", 
          desc: "Organize home deliveries, assign delivery staff, send WhatsApp status alerts, and collect digital COD receipts.", 
          icon: <Truck size={24} color="#e11d48" />,
          iconBg: "#fef2f2",
          borderColor: "#fecaca",
          tags: ["WhatsApp Tracking", "Rider App", "Digital COD"]
        }
      ]
    }
  ];

  const displayedCategories = moduleCategory === "all"
    ? moduleCategories
    : moduleCategories.filter(cat => cat.id === moduleCategory);

  const roleSolutions = [
    {
      title: "Pharmacy Owners & Directors",
      tag: "Strategic Control & Complete Financial Clarity",
      desc: "Gain total visibility into your pharmacy operations. Make informed business decisions with real-time revenue analytics, inventory health, and automated tax audits.",
      icon: <Target className="w-5 h-5 text-emerald-600" />,
      color: "#059669",
      badge: "EXECUTIVE PORTAL",
      internalCards: [
        {
          title: "Executive Revenue Dashboard",
          desc: "Live visibility into counter sales, peak billing hours, fast-moving medicines, and net profit margins.",
          icon: <BarChart3 size={20} color="#059669" />,
          iconBg: "#ecfdf5",
          borderColor: "#a7f3d0",
          tag: "REAL-TIME",
          highlights: ["Counter Metrics", "Gross Margins", "Daily P&L"]
        },
        {
          title: "Expiry Radar & Loss Prevention",
          desc: "Proactive 30/60/90-day alert watchdog with automated batch lock to prevent dead stock write-offs.",
          icon: <History size={20} color="#0d9488" />,
          iconBg: "#f0fdfa",
          borderColor: "#99f6e4",
          tag: "PROFIT SAVER",
          highlights: ["30/60/90d Watchdog", "Batch Freeze", "Zero Loss"]
        },
        {
          title: "Multi-Store & Chain Sync",
          desc: "Synchronize inventory levels across branch stores, route inter-branch transfers, and review consolidated P&L.",
          icon: <Database size={20} color="#0284c7" />,
          iconBg: "#f0f9ff",
          borderColor: "#bae6fd",
          tag: "CENTRAL SYNC",
          highlights: ["Inter-Branch Routes", "Central Stock", "Chain Reports"]
        },
        {
          title: "1-Click GST Return Filing",
          desc: "Automated GSTR-1, GSTR-3B, and HSN-wise tax breakdown spreadsheets ready for instant CA upload.",
          icon: <FileText size={20} color="#7c3aed" />,
          iconBg: "#faf5ff",
          borderColor: "#e9d5ff",
          tag: "TAX READY",
          highlights: ["GSTR-1 & 3B", "HSN Breakdown", "Instant Export"]
        },
        {
          title: "Supplier Ledger Reconciliation",
          desc: "Track distributor invoices, payment credit terms, credit notes, and supplier statement reconciliation.",
          icon: <Receipt size={20} color="#d97706" />,
          iconBg: "#fffbeb",
          borderColor: "#fde68a",
          tag: "FINANCIALS",
          highlights: ["Statement Match", "Credit Terms", "Payment Alerts"]
        },
        {
          title: "Granular RBAC Staff Security",
          desc: "Control access permissions for billing cashiers, store managers, and accountants with tamper-proof audit trails.",
          icon: <ShieldCheck size={20} color="#e11d48" />,
          iconBg: "#fef2f2",
          borderColor: "#fecaca",
          tag: "AUDIT LOGS",
          highlights: ["Tamper-Proof Logs", "Role Overrides", "Safe Billing"]
        }
      ]
    },
    {
      title: "Pharmacists & Cashiers",
      tag: "Zero Billing Errors & Rapid Counter Checkouts",
      desc: "Eliminate long customer queues and manual errors. Focus on patient care and rapid dispensing with lightning-fast barcode search and automated generic salt lookups.",
      icon: <UserCheck className="w-5 h-5 text-teal-600" />,
      color: "#0d9488",
      badge: "POS & DISPENSARY",
      internalCards: [
        {
          title: "Sub-5s Fast Barcode Billing",
          desc: "Lightning-fast barcode scanner integration with sub-second lookups, auto-batch selection, and instant thermal print.",
          icon: <Receipt size={20} color="#059669" />,
          iconBg: "#ecfdf5",
          borderColor: "#a7f3d0",
          tag: "FAST POS",
          highlights: ["Barcode Scanner", "Auto Batch", "Thermal Print"]
        },
        {
          title: "Smart Generic Salt Engine",
          desc: "Instant molecule substitute recommendations when brand names are out of stock to preserve counter sales.",
          icon: <Sparkles size={20} color="#0d9488" />,
          iconBg: "#f0fdfa",
          borderColor: "#99f6e4",
          tag: "SMART AI",
          highlights: ["Molecule Search", "Salt Matching", "Instant Alternates"]
        },
        {
          title: "Automated Batch Expiry Lock",
          desc: "Built-in POS safety lock strictly blocks expired or recalled medicine batches from being scanned or billed.",
          icon: <Lock size={20} color="#e11d48" />,
          iconBg: "#fef2f2",
          borderColor: "#fecaca",
          tag: "SAFETY",
          highlights: ["POS Safety Gate", "Zero Expired Billed", "Regulatory Safe"]
        },
        {
          title: "Schedule H/H1 Rx Vault",
          desc: "Digitally capture doctor prescriptions, patient details, and medical registration numbers for drug compliance.",
          icon: <FileCheck size={20} color="#7c3aed" />,
          iconBg: "#faf5ff",
          borderColor: "#e9d5ff",
          tag: "COMPLIANCE",
          highlights: ["Doctor Info Attach", "Patient Records", "Audit Compliant"]
        },
        {
          title: "Multi-Mode Split Payments",
          desc: "Accept split transactions across UPI QR codes, debit/credit cards, cash, and customer khata credit in one bill.",
          icon: <CreditCard size={20} color="#0284c7" />,
          iconBg: "#f0f9ff",
          borderColor: "#bae6fd",
          tag: "PAYMENTS",
          highlights: ["Dynamic QR", "Cards & Khata", "Split Billing"]
        },
        {
          title: "WhatsApp Digital Invoices",
          desc: "Dispatch paperless GST invoices directly to customer WhatsApp numbers with dosage instructions attached.",
          icon: <Phone size={20} color="#16a34a" />,
          iconBg: "#f0fdf4",
          borderColor: "#bbf7d0",
          tag: "PAPERLESS",
          highlights: ["Paperless GST", "Dosage Info", "Instant Send"]
        }
      ]
    },
    {
      title: "Suppliers & Patients",
      tag: "Smooth Procurement & Rewarding Patient Experience",
      desc: "Keep your medicine supply chain resilient and customers loyal with automated purchase orders, digital records, and flexible split payments.",
      icon: <Heart className="w-5 h-5 text-cyan-600" />,
      color: "#0284c7",
      badge: "SUPPLY & PATIENT",
      internalCards: [
        {
          title: "Automated Vendor PO Generator",
          desc: "Auto-generate purchase order drafts to distributors when medicine stock reaches minimum safety threshold.",
          icon: <Zap size={20} color="#059669" />,
          iconBg: "#ecfdf5",
          borderColor: "#a7f3d0",
          tag: "AUTO REORDER",
          highlights: ["Min/Max Levels", "Auto Drafts", "Direct PDF/Email"]
        },
        {
          title: "Supplier Credit & Ledger Books",
          desc: "Full transparency on purchase orders, credit notes, due balances, and automated payment milestone alerts.",
          icon: <Receipt size={20} color="#0d9488" />,
          iconBg: "#f0fdfa",
          borderColor: "#99f6e4",
          tag: "TRANSPARENT",
          highlights: ["Credit Khata", "Invoice History", "Payment Alerts"]
        },
        {
          title: "Chronic Refill Notifications",
          desc: "Automated SMS and WhatsApp reminders for recurring diabetic, hypertensive, and monthly prescription refills.",
          icon: <Clock size={20} color="#0284c7" />,
          iconBg: "#f0f9ff",
          borderColor: "#bae6fd",
          tag: "RETENTION",
          highlights: ["WhatsApp Alerts", "Recurring Meds", "Patient Reminders"]
        },
        {
          title: "Customer Loyalty Rewards",
          desc: "Reward repeat pharmacy customers with loyalty cashback points redeemable on future medicine orders.",
          icon: <Award size={20} color="#d97706" />,
          iconBg: "#fffbeb",
          borderColor: "#fde68a",
          tag: "LOYALTY",
          highlights: ["Reward Points", "Cashback Khata", "Repeat Discounts"]
        },
        {
          title: "Doorstep Delivery Tracker",
          desc: "Assign delivery staff, track real-time fulfillment status, and collect contactless digital COD receipts.",
          icon: <Truck size={20} color="#7c3aed" />,
          iconBg: "#faf5ff",
          borderColor: "#e9d5ff",
          tag: "DISPATCH",
          highlights: ["Rider Dispatch", "Live Tracking", "Digital COD"]
        },
        {
          title: "Digitized Prescription Archive",
          desc: "Patients access lifetime medicine receipts and clear doctor dosage instructions via secure mobile links.",
          icon: <FileText size={20} color="#e11d48" />,
          iconBg: "#fef2f2",
          borderColor: "#fecaca",
          tag: "ACCESSIBLE",
          highlights: ["Lifetime Receipts", "Dosage History", "Secure Link"]
        }
      ]
    }
  ];

  const roadmapSteps = [
    {
      step: "01",
      title: "Supplier Onboarding",
      desc: "Import your distributor catalogs, GST details, payment credit terms, and pricing matrices in minutes.",
      icon: <Users size={24} color="#059669" />
    },
    {
      step: "02",
      title: "Inventory Stocking",
      desc: "Receive medicine batches with automatic barcode indexing, HSN code tagging, and FEFO expiry tracking.",
      icon: <Database size={24} color="#0d9488" />
    },
    {
      step: "03",
      title: "Sales & Invoicing",
      desc: "Process high-speed counter checkouts with barcode scanning, automated discounts, and instant tax invoices.",
      icon: <Receipt size={24} color="#0284c7" />
    },
    {
      step: "04",
      title: "Compliance & GST",
      desc: "Generate automated monthly GST returns and schedule H drug compliance logs ready for CA filing.",
      icon: <FileCheck size={24} color="#7c3aed" />
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Barcode POS Billing Speed",
      legacy: "Slow legacy desktop software (30-45s per bill)",
      merlinflow: "Instant Cloud & LAN POS (< 5s per bill)"
    },
    {
      feature: "Expiry & Wastage Prevention",
      legacy: "Manual shelf audits; high expired batch losses",
      merlinflow: "Automated 30/60/90-day radar + batch lock"
    },
    {
      feature: "GST & Tax Compliance",
      legacy: "Manual data exports, prone to mismatches",
      merlinflow: "1-Click automated GSTR-1, 3B & HSN filing"
    },
    {
      feature: "Multi-Store & Chain Sync",
      legacy: "Requires separate database and slow night sync",
      merlinflow: "Real-time live multi-branch inventory & ledger sync"
    },
    {
      feature: "Generic Salt Substitutes",
      legacy: "Manual lookup; lost sales during stock-outs",
      merlinflow: "Instant salt/molecule recommendations on POS"
    },
    {
      feature: "Schedule H & Prescription Audits",
      legacy: "Paper registers with high regulatory audit risks",
      merlinflow: "Digitized prescription attachment & doctor logs"
    },
    {
      feature: "Data Backup & Recovery",
      legacy: "Manual pen-drive backups; high ransomware risk",
      merlinflow: "Automated daily multi-zone cloud snapshots"
    },
    {
      feature: "Setup Cost & Hardware Lock-in",
      legacy: "₹25,000 - ₹50,000 upfront license + server",
      merlinflow: "₹0 Setup Cost; works on any PC, laptop, or tablet"
    }
  ];

  // Dynamic ROI Calculations
  const calculatedSavings = Math.round(monthlySales * 0.035); // ~3.5% saved from expiry reduction & dead-stock avoidance
  const calculatedHoursSaved = Math.round((dailyBills * 30 * 25) / 3600); // 25s saved per bill converted to hours/mo
  const annualBenefit = Math.round((calculatedSavings * 12) + (calculatedHoursSaved * 12 * 250));

  const pricingPlans = [
    {
      id: "basic",
      name: "Single Store",
      tagline: "Perfect for independent retail pharmacies starting digital operations",
      monthlyPrice: "₹1,500",
      yearlyPrice: "₹1,250",
      period: "/ store / mo",
      popular: false,
      badge: "STARTER",
      cta: "Select Basic Plan",
      features: [
        "Complete Medicine Master Inventory (Up to 10,000 SKUs)",
        "Lightning Fast Barcode Billing POS",
        "Automated 30/60/90 Day Expiry Alerts",
        "Low Stock & Reorder Monitoring",
        "Supplier Purchase Ledger Tracking",
        "Basic GST Invoicing & Reports",
        "Thermal & A4 Invoice Printing",
        "Standard Email & Helpdesk Support"
      ]
    },
    {
      id: "chain",
      name: "Pharmacy Chain",
      tagline: "Most popular for expanding pharmacies with multiple retail stores",
      monthlyPrice: "₹3,500",
      yearlyPrice: "₹2,900",
      period: "/ store / mo",
      popular: true,
      badge: "MOST POPULAR",
      cta: "Select Standard Plan",
      features: [
        "Everything in Single Store Plan",
        "Real-Time Multi-Branch Inventory Sync",
        "Inter-Store Stock Transfers & Requisitions",
        "Advanced Revenue & Profit Margin Analytics",
        "Automated Purchase Order Generator",
        "Doctor Commission & Referral Tracking",
        "Advanced One-Click GST Returns (GSTR-1, 3B)",
        "Patient Loyalty Points & Chronic Refill Engine",
        "Priority 24/7 Phone Support & Free Staff Training"
      ]
    },
    {
      id: "hospital",
      name: "Hospital Pharmacy",
      tagline: "For large hospitals and institutions needing deep EMR/HIS integrations",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      period: "/ enterprise",
      popular: false,
      badge: "ENTERPRISE",
      cta: "Contact Enterprise Sales",
      features: [
        "Everything in Pharmacy Chain Plan",
        "Hospital EMR & HIS Integration (FHIR / HL7)",
        "Inpatient (IPD) & Outpatient (OPD) Ward Requisitions",
        "Central Medical Store & Sub-Pharmacy Routing",
        "Schedule H/H1 Narcotic Register Audits",
        "Dedicated Technical Account Manager",
        "Custom REST API & Webhook Access",
        "On-Site Staff Training & Guided Data Migration",
        "Custom SLA with 99.99% Guaranteed Uptime"
      ]
    }
  ];

  const faqs = [
    {
      q: "How is pricing calculated for MerlinFlow Medical ERP?",
      a: "Pricing is transparent and based on the number of stores or hospital pharmacies you operate. For instance, if you operate 2 retail stores on the Pharmacy Chain plan, your billing is calculated cleanly with zero hidden surcharges."
    },
    {
      q: "Is there a free trial available?",
      a: "Yes! We provide a 14-day full-featured free trial on all standard plans with zero credit card commitment so your team can test real barcode billing and inventory management."
    },
    {
      q: "Is the platform 100% GST compliant for Indian pharmacies?",
      a: "100% yes. MerlinFlow Medical ERP automatically computes intra-state (CGST + SGST) and inter-state (IGST) taxations, generates HSN-wise itemized bills, and exports pre-formatted GSTR-1 and GSTR-3B spreadsheets."
    },
    {
      q: "Can we migrate our existing medicine catalog and stock data?",
      a: "Absolutely. Our onboarding team provides a Managed Migration Service that securely imports your entire medicine catalog, batch numbers, current stock levels, and supplier contact lists with zero downtime."
    },
    {
      q: "Is staff training included with our subscription?",
      a: "Yes. All plans include guided interactive video walkthroughs for cashiers and store managers, while Pharmacy Chain and Hospital plans include live training sessions conducted by our product experts."
    },
    {
      q: "Can we upgrade or adjust our plan as our pharmacy expands?",
      a: "Yes. You can add new branch stores or upgrade tiers at any time. Changes are reflected instantaneously from the start of your subsequent billing cycle."
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const handleScroll = () => {
      const sections = ['overview', 'modules', 'solutions', 'roadmap', 'calculator', 'compare', 'pricing', 'security'];
      const scrollPos = window.scrollY + 140;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(s);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExperienceRolePortal = (roleIndex) => {
    if (roleIndex === 0) {
      setPreviewTab("inventory");
    } else if (roleIndex === 1) {
      setPreviewTab("pos");
    } else {
      setPreviewTab("inventory");
    }
    const el = document.getElementById("overview");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    if (sectionId === "overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="medical-erp-page">
      {/* Top Breadcrumb & Sub Navigation */}
      <div className="sticky-subnav">
        <div className="container subnav-container">
          <Link href="/#products" className="back-link">
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="subnav-tabs">
            <button 
              className={`subnav-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => scrollToSection('overview')}
            >
              Overview
            </button>
            <button 
              className={`subnav-tab ${activeTab === 'modules' ? 'active' : ''}`}
              onClick={() => scrollToSection('modules')}
            >
              15+ Modules
            </button>
            <button 
              className={`subnav-tab ${activeTab === 'solutions' ? 'active' : ''}`}
              onClick={() => scrollToSection('solutions')}
            >
              Role Solutions
            </button>
            <button 
              className={`subnav-tab ${activeTab === 'roadmap' ? 'active' : ''}`}
              onClick={() => scrollToSection('roadmap')}
            >
              Workflow
            </button>
            <button 
              className={`subnav-tab ${activeTab === 'calculator' ? 'active' : ''}`}
              onClick={() => scrollToSection('calculator')}
            >
              ROI Calculator
            </button>
            <button 
              className={`subnav-tab ${activeTab === 'compare' ? 'active' : ''}`}
              onClick={() => scrollToSection('compare')}
            >
              Compare
            </button>
            <button 
              className={`subnav-tab ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => scrollToSection('pricing')}
            >
              Pricing
            </button>
            <button 
              className={`subnav-tab ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => scrollToSection('security')}
            >
              Security
            </button>
          </div>

          <button onClick={scrollToContact} className="subnav-cta-btn">
            Request Demo <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section id="overview" className="hero-section">
        <div className="container hero-container">
          <div className="hero-grid">
            {/* Left Hero Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-text-col"
            >
              <div className="hero-badge">
                <span className="ping-dot"></span>
                <span>ADVANCED MEDICAL SHOP & PHARMACY ERP</span>
              </div>
              <h1 className="hero-heading">
                The Operating System for <span className="highlight-text">High-Performance Pharmacies</span>
              </h1>
              <p className="hero-subtitle">
                Go beyond basic billing. MerlinFlow Medical ERP is the integrated digital infrastructure that creates harmony between your inventory, compliance, and financial growth.
              </p>
              
              <div className="hero-cta-group">
                <button onClick={scrollToContact} className="btn-primary">
                  Request Access <ArrowRight size={18} />
                </button>
                <button onClick={() => scrollToSection('modules')} className="btn-secondary">
                  <LayoutGrid size={18} /> Explore 15+ Modules
                </button>
              </div>

              <div className="stats-strip">
                <div 
                  className="stat-card" 
                  onClick={() => scrollToSection('modules')} 
                  style={{ cursor: "pointer" }}
                  title="Click to view 15+ modules"
                >
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Integrated Modules</div>
                </div>
                <div className="stat-divider"></div>
                <div 
                  className="stat-card"
                  onClick={() => scrollToSection('roadmap')}
                  style={{ cursor: "pointer" }}
                  title="Click to view workflow roadmap"
                >
                  <div className="stat-number">100%</div>
                  <div className="stat-label">GST Compliant</div>
                </div>
                <div className="stat-divider"></div>
                <div 
                  className="stat-card"
                  onClick={() => scrollToSection('calculator')}
                  style={{ cursor: "pointer" }}
                  title="Click to view ROI calculator"
                >
                  <div className="stat-number">5x</div>
                  <div className="stat-label">Faster Checkout</div>
                </div>
                <div className="stat-divider"></div>
                <div 
                  className="stat-card"
                  onClick={() => scrollToSection('pricing')}
                  style={{ cursor: "pointer" }}
                  title="Click to view pricing plans"
                >
                  <div className="stat-number">₹0</div>
                  <div className="stat-label">Setup Cost</div>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Live Preview Window */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-preview-col"
            >
              <div className="mac-browser-window">
                <div className="mac-browser-header">
                  <div className="mac-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="mac-address-bar">
                    <Lock size={12} className="text-emerald-500" />
                    <span>medical.merlinflow.in/pos/billing</span>
                  </div>
                  <div 
                    className="mac-open-ext"
                    title="Live MerlinFlow System Active"
                  >
                    <Activity size={14} className="text-emerald-500" />
                  </div>
                </div>

                {/* Switcher Bar inside Mac Window */}
                <div className="preview-tab-switcher">
                  <button 
                    className={`preview-tab-btn ${previewTab === 'pos' ? 'active' : ''}`}
                    onClick={() => setPreviewTab('pos')}
                  >
                    <Receipt size={14} /> POS & Rapid Billing
                  </button>
                  <button 
                    className={`preview-tab-btn ${previewTab === 'inventory' ? 'active' : ''}`}
                    onClick={() => setPreviewTab('inventory')}
                  >
                    <Activity size={14} /> Stock & Expiry Radar
                  </button>
                </div>

                <div className="mac-browser-body">
                  {previewTab === 'pos' ? (
                    /* POS VIEW */
                    <div className="live-preview-dashboard">
                      <div className="dashboard-top-row">
                        <div className="dash-title-block">
                          <div className="dash-badge">FAST COUNTER POS</div>
                          <h4 className="dash-h4">Sub-Second Barcode Dispensing</h4>
                        </div>
                        <span className="live-status-pill">
                          <span className="live-dot"></span> Barcode Scanner Ready
                        </span>
                      </div>

                      {/* Fake POS search item */}
                      <div className="pos-search-mock">
                        <Search size={14} className="text-slate-400" />
                        <span className="pos-search-input">Scan Barcode or Search "Paracetamol 650"...</span>
                        <span className="pos-badge-shortcut">F2</span>
                      </div>

                      <div className="kpi-cards-grid">
                        <div className="kpi-card sales-kpi">
                          <div className="kpi-header">
                            <span className="kpi-label">Today's Counter Sales</span>
                            <span className="kpi-growth">↑ 12% vs yest.</span>
                          </div>
                          <div className="kpi-val">₹42,500</div>
                          <span className="kpi-sub">86 GST Invoices Issued</span>
                        </div>

                        <div className="kpi-card split-kpi">
                          <div className="kpi-header">
                            <span className="kpi-label">Payment Split</span>
                            <span className="kpi-tag success">Auto-Reconciled</span>
                          </div>
                          <div className="split-bars">
                            <span className="split-text">UPI: 68% • Cash: 22% • Cards: 10%</span>
                          </div>
                          <span className="kpi-sub">Zero end-of-day mismatch</span>
                        </div>
                      </div>

                      <div className="generic-sub-box">
                        <div className="generic-title">
                          <Sparkles size={14} className="text-emerald" />
                          <span>Smart Generic Salt Recommendations</span>
                        </div>
                        <p className="generic-desc">Dolo 650 out of stock? Suggested substitute: <strong>Calpol 650mg</strong> (₹30.50/strip - 24 Strips in stock).</p>
                      </div>

                      <div className="dash-bottom-actions">
                        <button 
                          onClick={scrollToContact}
                          className="btn-live-launch"
                        >
                          Request Live Pharmacy ERP Demo <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* INVENTORY & EXPIRY RADAR VIEW */
                    <div className="live-preview-dashboard">
                      <div className="dashboard-top-row">
                        <div className="dash-title-block">
                          <div className="dash-badge">EXPIRY & FEFO RADAR</div>
                          <h4 className="dash-h4">Intelligent Stock Optimization</h4>
                        </div>
                        <span className="live-status-pill alert">
                          <span className="live-dot-red"></span> Expiry Watchdog Active
                        </span>
                      </div>

                      <div className="kpi-cards-grid">
                        <div className="kpi-card expiry-kpi">
                          <div className="kpi-header">
                            <span className="kpi-label">Expiring in 30 Days</span>
                            <span className="kpi-tag alert">Action Required</span>
                          </div>
                          <div className="kpi-val text-rose">14 Batches</div>
                          <span className="kpi-sub">Locked for returns / clearance</span>
                        </div>

                        <div className="kpi-card lowstock-kpi">
                          <div className="kpi-header">
                            <span className="kpi-label">Low Stock Alerts</span>
                            <span className="kpi-tag warning">Auto PO Drafted</span>
                          </div>
                          <div className="kpi-val text-amber">6 Items</div>
                          <span className="kpi-sub">Below minimum threshold</span>
                        </div>
                      </div>

                      <div className="low-stock-box">
                        <div className="low-stock-title">
                          <AlertCircle size={14} className="text-amber" />
                          <span>Priority Batches to Return to Distributor</span>
                        </div>
                        <div className="stock-items-row">
                          <div className="stock-item-badge">
                            <span className="stock-qty alert">BATCH #B204</span>
                            <span className="stock-name">Amoxicillin 500mg (Expiry: 28 Days)</span>
                          </div>
                          <div className="stock-item-badge">
                            <span className="stock-qty alert">BATCH #V109</span>
                            <span className="stock-name">Cough Syrup 100ml (Expiry: 32 Days)</span>
                          </div>
                        </div>
                      </div>

                      <div className="dash-bottom-actions">
                        <button 
                          onClick={scrollToContact}
                          className="btn-live-launch"
                        >
                          Request Live Pharmacy ERP Demo <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 15+ Modules Suite Section */}
      <section id="modules" className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Layers size={14} /> COMPLETE SUITE</div>
            <h2 className="section-title">15+ Purpose-Built Pharmacy Modules</h2>
            <p className="section-desc">Modular, customizable, and seamlessly integrated for modern medical shops, retail chains, and hospital pharmacies.</p>

            {/* Category Filter Pills */}
            <div className="category-filters">
              {[
                { id: "all", label: "All Modules (15+)" },
                { id: "inventory", label: "Inventory & Stock (5)" },
                { id: "sales", label: "Sales & Invoicing (5)" },
                { id: "admin", label: "Admin & Compliance (4)" },
                { id: "future", label: "Future-Ready (2)" }
              ].map(cat => (
                <button 
                  key={cat.id}
                  className={`cat-pill ${moduleCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setModuleCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="module-categories-stack">
            {displayedCategories.map((category) => (
              <div key={category.id} className="category-group-block">
                <div className="category-group-header">
                  <div className="category-group-info">
                    <div className="category-badge-pill" style={{ background: category.badgeColor }}>
                      {category.title}
                    </div>
                    <p className="category-group-desc">{category.subtitle}</p>
                  </div>
                  <span className="category-count-tag">{category.modules.length} Modules</span>
                </div>

                <div className="modules-grid-large">
                  {category.modules.map((mod, idx) => (
                    <motion.div 
                      key={`${category.id}-${idx}`}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.03 }}
                      className="module-large-card"
                    >
                      <div className="module-card-top-content">
                        <div className="card-top-row">
                          <div 
                            className="mod-large-icon" 
                            style={{ background: mod.iconBg || '#ecfdf5', borderColor: mod.borderColor || '#a7f3d0' }}
                          >
                            {mod.icon}
                          </div>
                          <span 
                            className="mod-category-badge"
                            style={{ 
                              background: category.badgeBg || '#f1f5f9',
                              borderColor: category.badgeBorder || '#e2e8f0',
                              color: category.badgeText || '#64748b'
                            }}
                          >
                            {category.id}
                          </span>
                        </div>
                        
                        <div className="module-card-body">
                          <h3 className="mod-large-name">{mod.name}</h3>
                          <p className="mod-large-desc">{mod.desc}</p>
                        </div>

                        {mod.tags && mod.tags.length > 0 && (
                          <div className="module-card-tags">
                            {mod.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="module-feature-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="module-card-footer">
                        <div className="module-status-indicator">
                          <span className="module-status-dot" style={{ background: mod.borderColor || '#10b981' }}></span>
                          <span className="module-status-text">Included in Suite</span>
                        </div>
                        <div className="module-card-arrow">
                          <ArrowRight size={13} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder Role Solutions */}
      <section id="solutions" className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Users size={14} /> DESIGNED FOR EVERY ROLE</div>
            <h2 className="section-title">Tailored Portals for Your Entire Ecosystem</h2>
            <p className="section-desc">Each stakeholder gets a customized interface optimized for their exact daily operational workflows.</p>

            {/* Role Switcher Tabs */}
            <div className="role-switcher-tabs">
              {roleSolutions.map((role, idx) => (
                <button
                  key={idx}
                  className={`role-tab-pill ${activeRole === idx ? 'active' : ''}`}
                  onClick={() => setActiveRole(idx)}
                >
                  <div className="role-tab-left">
                    <span className="role-tab-icon">{role.icon}</span>
                    <span className="role-tab-name">{role.title}</span>
                  </div>
                  <span className="role-tab-badge">{role.badge}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Role Portal Card with Small Internal Cards */}
          <motion.div 
            key={activeRole}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="role-portal-container"
          >
            <div className="role-portal-top">
              <div className="role-portal-info">
                <div 
                  className="role-badge" 
                  style={{ 
                    color: roleSolutions[activeRole].color, 
                    borderColor: `${roleSolutions[activeRole].color}33`, 
                    background: `${roleSolutions[activeRole].color}12` 
                  }}
                >
                  {roleSolutions[activeRole].badge}
                </div>
                <h3 className="role-portal-heading">{roleSolutions[activeRole].title}</h3>
                <p className="role-portal-tagline" style={{ color: roleSolutions[activeRole].color }}>
                  {roleSolutions[activeRole].tag}
                </p>
                <p className="role-portal-desc">{roleSolutions[activeRole].desc}</p>
              </div>

              <div className="role-portal-action">
                <button 
                  onClick={() => handleExperienceRolePortal(activeRole)} 
                  className="role-request-btn" 
                  style={{ background: roleSolutions[activeRole].color }}
                >
                  <Sparkles size={16} /> Experience {roleSolutions[activeRole].title} Demo <ArrowRight size={16} />
                </button>
                <button 
                  onClick={scrollToContact} 
                  className="role-contact-secondary-btn"
                >
                  Book Walkthrough
                </button>
              </div>
            </div>

            {/* 6 Small Internal Cards Grid */}
            <div className="role-internal-cards-grid">
              {roleSolutions[activeRole].internalCards.map((card, i) => (
                <div key={i} className="role-internal-card">
                  <div className="internal-card-main">
                    <div className="internal-card-top-row">
                      <div 
                        className="internal-card-icon" 
                        style={{ background: card.iconBg, borderColor: card.borderColor }}
                      >
                        {card.icon}
                      </div>
                      <span 
                        className="internal-card-tag" 
                        style={{ 
                          color: roleSolutions[activeRole].color,
                          background: `${roleSolutions[activeRole].color}12`,
                          borderColor: `${roleSolutions[activeRole].color}33`
                        }}
                      >
                        {card.tag}
                      </span>
                    </div>

                    <div className="internal-card-body">
                      <h4 className="internal-card-title">{card.title}</h4>
                      <p className="internal-card-desc">{card.desc}</p>
                    </div>

                    {card.highlights && card.highlights.length > 0 && (
                      <div className="internal-card-highlights">
                        {card.highlights.map((item, hIdx) => (
                          <span key={hIdx} className="internal-highlight-tag">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="internal-card-footer">
                    <span className="internal-card-status">
                      <span className="internal-card-dot" style={{ background: roleSolutions[activeRole].color }}></span>
                      <span>Verified Capability</span>
                    </span>
                    <div className="internal-card-arrow" style={{ color: roleSolutions[activeRole].color }}>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Onboarding Workflow Roadmap */}
      <section id="roadmap" className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Zap size={14} /> ONBOARDING ROADMAP</div>
            <h2 className="section-title">Streamline Pharmacy Workflows</h2>
            <p className="section-desc">From procurement to daily sales, MerlinFlow connects every step of the pharmacy lifecycle seamlessly.</p>
          </div>

          <div className="roadmap-grid">
            {roadmapSteps.map((step, idx) => (
              <div key={idx} className="roadmap-card">
                <div className="roadmap-step-num">{step.step}</div>
                <div className="roadmap-icon-wrap">{step.icon}</div>
                <h3 className="roadmap-title">{step.title}</h3>
                <p className="roadmap-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pharmacy ROI & Efficiency Calculator */}
      <section id="calculator" className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Calculator size={14} /> ROI & EFFICIENCY ESTIMATOR</div>
            <h2 className="section-title">Calculate Your Annual Pharmacy Savings</h2>
            <p className="section-desc">Adjust your store's monthly sales volume and daily counter bills to see how much revenue leakage MerlinFlow eliminates.</p>
          </div>

          <div className="calculator-layout">
            <div className="calculator-inputs-card">
              <div className="calc-input-group">
                <div className="calc-label-row">
                  <label className="calc-label">Monthly Store Sales Volume</label>
                  <span className="calc-val-badge">₹{(monthlySales / 100000).toFixed(1)} Lakhs / mo</span>
                </div>
                <input 
                  type="range" 
                  min="100000" 
                  max="2500000" 
                  step="50000"
                  value={monthlySales}
                  onChange={(e) => setMonthlySales(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="range-bounds">
                  <span>₹1 Lakh</span>
                  <span>₹10 Lakhs</span>
                  <span>₹25 Lakhs</span>
                </div>
              </div>

              <div className="calc-input-group mt-6">
                <div className="calc-label-row">
                  <label className="calc-label">Average Daily Invoices Issued</label>
                  <span className="calc-val-badge">{dailyBills} Bills / Day</span>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="400" 
                  step="10"
                  value={dailyBills}
                  onChange={(e) => setDailyBills(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="range-bounds">
                  <span>30 bills</span>
                  <span>200 bills</span>
                  <span>400+ bills</span>
                </div>
              </div>

              <div className="calc-assumptions">
                <p>⚡ Calculated using actual benchmarks: 3.5% dead-stock / expiry elimination + 25 seconds saved per barcode counter checkout.</p>
              </div>
            </div>

            <div className="calculator-results-card">
              <span className="results-badge">ESTIMATED ANNUAL VALUE</span>
              <div className="results-big-num">₹{annualBenefit.toLocaleString("en-IN")}</div>
              <p className="results-sub">Direct Profit Impact & Staff Productivity Gained / Year</p>

              <div className="results-metrics-grid">
                <div className="res-metric-item">
                  <span className="res-metric-label">Expiry Wastage Saved</span>
                  <span className="res-metric-val">₹{calculatedSavings.toLocaleString("en-IN")} / mo</span>
                </div>
                <div className="res-metric-item">
                  <span className="res-metric-label">Staff Hours Saved</span>
                  <span className="res-metric-val">{calculatedHoursSaved} Hours / mo</span>
                </div>
              </div>

              <button onClick={scrollToContact} className="btn-calc-cta">
                Unlock These Savings Today <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Legacy Software vs MerlinFlow Comparison Matrix */}
      <section id="compare" className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><CheckCircle2 size={14} /> WHY WE COMPARE</div>
            <h2 className="section-title">Traditional Desktop Software vs MerlinFlow Medical ERP</h2>
            <p className="section-desc">See why modern pharmacies are replacing legacy offline software with our next-generation cloud infrastructure.</p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="th-feature">Operational Capability</th>
                  <th className="th-legacy">Traditional Legacy Software</th>
                  <th className="th-merlinflow">MerlinFlow Medical ERP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "row-even" : "row-odd"}>
                    <td className="td-feature">{row.feature}</td>
                    <td className="td-legacy">
                      <div className="cell-content">
                        <X size={16} className="text-rose shrink-0" />
                        <span>{row.legacy}</span>
                      </div>
                    </td>
                    <td className="td-merlinflow">
                      <div className="cell-content">
                        <Check size={16} className="text-emerald shrink-0" />
                        <span className="font-semibold text-slate-900">{row.merlinflow}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><IndianRupee size={14} /> TRANSPARENT PRICING</div>
            <h2 className="section-title">Predictable Pricing for Pharmacies</h2>
            <p className="section-desc">Scale your medical shop or chain without worrying about hidden software costs.</p>

            {/* Monthly / Annual Toggle */}
            <div className="pricing-toggle-wrap">
              <span className={`toggle-label ${!isYearlyPricing ? 'active' : ''}`}>Monthly</span>
              <button 
                className={`pricing-toggle-switch ${isYearlyPricing ? 'yearly' : ''}`}
                onClick={() => setIsYearlyPricing(!isYearlyPricing)}
                aria-label="Toggle annual pricing"
              >
                <span className="toggle-slider"></span>
              </button>
              <span className={`toggle-label ${isYearlyPricing ? 'active' : ''}`}>
                Annual Billing <span className="discount-pill">2 MONTHS FREE</span>
              </span>
            </div>
          </div>

          <div className="pricing-cards-grid">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`pricing-plan-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Sparkles size={12} /> BEST VALUE
                  </div>
                )}
                <div className="plan-header">
                  <span className="plan-badge">{plan.badge}</span>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>

                <div className="plan-price-box">
                  <span className="price-val">
                    {isYearlyPricing ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="price-period">{plan.period}</span>
                </div>

                <button 
                  onClick={scrollToContact} 
                  className={`plan-cta-btn ${plan.popular ? 'primary' : 'outline'}`}
                >
                  {plan.cta} <ArrowRight size={16} />
                </button>

                <div className="plan-features-list">
                  <span className="features-title">What's included:</span>
                  <ul>
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <Check size={16} className="text-emerald" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="pricing-footnote">
            All prices exclude applicable GST. 14-day full-featured free trial available on all plans. No credit card required.
          </p>
        </div>
      </section>

      {/* Bank-Grade Security Section */}
      <section id="security" className="section-padding bg-light">
        <div className="container">
          <div className="security-banner-layout">
            <div className="security-text-col">
              <div className="pill-tag"><Shield size={14} /> BANK-GRADE ARCHITECTURE</div>
              <h2 className="section-title">Uncompromising Healthcare Data Security</h2>
              <p className="section-desc">
                Pharmacies handle sensitive patient records, prescription logs, and financial transactions daily. MerlinFlow is built with a &quot;Security First&quot; infrastructure to protect your business.
              </p>
              
              <div className="security-badges-row">
                <div className="sec-trust-item">
                  <Check size={18} className="text-emerald" />
                  <span>256-Bit SSL/TLS End-to-End Encryption</span>
                </div>
                <div className="sec-trust-item">
                  <Check size={18} className="text-emerald" />
                  <span>Daily Automated Cloud Backups with Snapshots</span>
                </div>
                <div className="sec-trust-item">
                  <Check size={18} className="text-emerald" />
                  <span>Schedule H & H1 Regulatory Audit Preparedness</span>
                </div>
              </div>
            </div>

            <div className="security-grid-col">
              <div className="security-feature-card">
                <div className="sec-icon"><Lock size={22} color="#059669" /></div>
                <h4>Role-Based Access Control</h4>
                <p>Ensure staff and cashiers only view data and margins relevant to their exact duties.</p>
              </div>
              <div className="security-feature-card">
                <div className="sec-icon"><Server size={22} color="#0d9488" /></div>
                <h4>Daily Cloud Backups</h4>
                <p>Your pharmacy database is backed up every 24 hours with multi-zone disaster recovery.</p>
              </div>
              <div className="security-feature-card">
                <div className="sec-icon"><Shield size={22} color="#0284c7" /></div>
                <h4>End-to-End Encryption</h4>
                <p>All sensitive patient records and invoices are encrypted both in transit and at rest.</p>
              </div>
              <div className="security-feature-card">
                <div className="sec-icon"><FileCheck size={22} color="#7c3aed" /></div>
                <h4>Compliance Ready</h4>
                <p>Engineered to meet Indian healthcare data privacy standards and drug authority mandates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Promise */}
      <section className="section-padding">
        <div className="container">
          <div className="promise-banner">
            <div className="promise-content">
              <div className="promise-tag">
                <Sparkles size={14} /> FREE DATA MIGRATION & TRAINING INCLUDED
              </div>
              <h2 className="promise-title">
                Ready to Join the Future of <span className="highlight-text">Pharmacy Management?</span>
              </h2>
              <p className="promise-desc">
                Experience the difference of a software platform engineered for trust, reliability, and speed. Schedule a personalized walkthrough today.
              </p>
              <div className="promise-cta-row">
                <button onClick={scrollToContact} className="btn-white">
                  Schedule Free Walkthrough <ArrowRight size={16} />
                </button>
                <a href="tel:+917892654731" className="btn-call-outline">
                  <Phone size={16} /> Call +91 7892654731
                </a>
              </div>
            </div>

            <div className="promise-cards-side">
              <div className="promise-item">
                <div className="promise-check">✓</div>
                <div>
                  <h4>Managed Data Migration</h4>
                  <p>We securely import all medicine catalogs, supplier files, and initial stock quantities.</p>
                </div>
              </div>
              <div className="promise-item">
                <div className="promise-check">✓</div>
                <div>
                  <h4>Pharmacist Staff Training</h4>
                  <p>Free guided onboarding sessions for your store managers and counter cashiers.</p>
                </div>
              </div>
              <div className="promise-item">
                <div className="promise-check">✓</div>
                <div>
                  <h4>Priority Support Hotline</h4>
                  <p>Direct phone and WhatsApp support channel for immediate billing assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding bg-light">
        <div className="container max-w-4xl">
          <div className="section-header-center">
            <div className="pill-tag"><HelpCircle size={14} /> FREQUENTLY ASKED QUESTIONS</div>
            <h2 className="section-title">Common Questions & Answers</h2>
            <p className="section-desc">Everything you need to know about MerlinFlow Medical ERP deployment and pricing.</p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="faq-chevron" />
                </div>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="faq-answer-wrap"
                    >
                      <p className="faq-answer">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      <style jsx>{`
        .medical-erp-page {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
          overflow-x: hidden;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .max-w-4xl {
          max-width: 900px;
        }

        .section-padding {
          padding: 6rem 0;
        }

        .bg-light {
          background-color: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        /* STICKY SUB NAVIGATION */
        .sticky-subnav {
          position: sticky;
          top: 68px;
          z-index: 40;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #e2e8f0;
          padding: 0.6rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .subnav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: #059669;
        }

        .subnav-tabs {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #f1f5f9;
          padding: 0.25rem;
          border-radius: 50px;
          flex-wrap: wrap;
        }

        .subnav-tab {
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .subnav-tab:hover {
          color: #0f172a;
        }

        .subnav-tab.active {
          background: #ffffff;
          color: #059669;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
        }

        .subnav-cta-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #059669;
          color: #ffffff;
          border: none;
          border-radius: 50px;
          padding: 0.45rem 1.1rem;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .subnav-cta-btn:hover {
          background: #047857;
          transform: translateY(-1px);
        }

        /* HERO SECTION */
        .hero-section {
          padding: 5rem 0 4rem 0;
          background: radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.08) 0%, rgba(255, 255, 255, 0) 50%),
                      radial-gradient(circle at 10% 80%, rgba(13, 148, 136, 0.06) 0%, rgba(255, 255, 255, 0) 40%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #047857;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }

        .ping-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.4);
        }

        .hero-heading {
          font-size: 3.2rem;
          font-weight: 900;
          line-height: 1.15;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
        }

        .highlight-text {
          background: linear-gradient(135deg, #059669 0%, #0d9488 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #059669;
          color: #ffffff;
          padding: 0.9rem 1.8rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(5, 150, 105, 0.25);
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: #047857;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(5, 150, 105, 0.35);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffffff;
          color: #334155;
          padding: 0.9rem 1.8rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1rem;
          border: 1px solid #cbd5e1;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #94a3b8;
        }

        .stats-strip {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }

        .stat-card {
          transition: transform 0.2s;
        }

        .stat-card:hover {
          transform: translateY(-2px);
        }

        .stat-number {
          font-size: 1.75rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
        }

        .stat-divider {
          width: 1px;
          height: 36px;
          background: #e2e8f0;
        }

        /* MAC BROWSER WINDOW LIVE PREVIEW */
        .mac-browser-window {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #cbd5e1;
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02);
          overflow: hidden;
        }

        .mac-browser-header {
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mac-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .mac-address-bar {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.3rem 1.25rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 60%;
          justify-content: center;
        }

        .mac-open-ext {
          color: #64748b;
          transition: color 0.2s;
        }

        .mac-open-ext:hover {
          color: #059669;
        }

        .preview-tab-switcher {
          display: flex;
          background: #f1f5f9;
          border-bottom: 1px solid #e2e8f0;
        }

        .preview-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.65rem 1rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748b;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .preview-tab-btn.active {
          background: #ffffff;
          color: #059669;
          border-bottom: 2px solid #059669;
        }

        .mac-browser-body {
          padding: 1.5rem;
          background: #fdfdfd;
        }

        .live-preview-dashboard {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .dashboard-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .dash-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: #059669;
          letter-spacing: 0.05em;
        }

        .dash-h4 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .live-status-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #059669;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
        }

        .live-status-pill.alert {
          color: #e11d48;
          background: #ffe4e6;
          border-color: #fecdd3;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #059669;
        }

        .live-dot-red {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e11d48;
        }

        .pos-search-mock {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 0.5rem 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.03);
        }

        .pos-search-input {
          font-size: 0.8rem;
          color: #64748b;
          flex: 1;
        }

        .pos-badge-shortcut {
          font-size: 0.7rem;
          font-weight: 800;
          color: #475569;
          background: #f1f5f9;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .kpi-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .kpi-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .kpi-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }

        .kpi-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        .kpi-growth {
          font-size: 0.7rem;
          font-weight: 700;
          color: #059669;
        }

        .kpi-tag.success {
          font-size: 0.65rem;
          font-weight: 700;
          color: #059669;
          background: #ecfdf5;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .kpi-tag.alert {
          font-size: 0.65rem;
          font-weight: 700;
          color: #e11d48;
          background: #ffe4e6;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .kpi-tag.warning {
          font-size: 0.65rem;
          font-weight: 700;
          color: #b45309;
          background: #fef3c7;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .kpi-val {
          font-size: 1.5rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .kpi-val.text-rose {
          color: #e11d48;
        }

        .kpi-val.text-amber {
          color: #d97706;
        }

        .kpi-sub {
          font-size: 0.72rem;
          color: #94a3b8;
        }

        .split-bars {
          margin: 0.35rem 0;
        }

        .split-text {
          font-size: 0.75rem;
          font-weight: 700;
          color: #0f172a;
        }

        .generic-sub-box {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 12px;
          padding: 0.75rem 1rem;
        }

        .generic-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: #166534;
          margin-bottom: 0.25rem;
        }

        .generic-desc {
          font-size: 0.75rem;
          color: #15803d;
          margin: 0;
          line-height: 1.4;
        }

        .low-stock-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 0.85rem;
        }

        .low-stock-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .stock-items-row {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .stock-item-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 0.35rem 0.65rem;
          border-radius: 8px;
        }

        .stock-qty.alert {
          background: #fee2e2;
          color: #991b1b;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .stock-name {
          font-size: 0.78rem;
          font-weight: 600;
          color: #1e293b;
        }

        .dash-bottom-actions {
          padding-top: 0.25rem;
        }

        .btn-live-launch {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #0f172a;
          color: #ffffff;
          text-decoration: none;
          padding: 0.7rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.82rem;
          transition: all 0.2s;
        }

        .btn-live-launch:hover {
          background: #059669;
        }

        /* SECTION HEADER CENTER */
        .section-header-center {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3.5rem auto;
        }

        .pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.4rem;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .section-desc {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* CATEGORY FILTERS */
        .category-filters {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-top: 1.75rem;
        }

        .cat-pill {
          padding: 0.5rem 1.1rem;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cat-pill:hover {
          border-color: #059669;
          color: #059669;
        }

        .cat-pill.active {
          background: #059669;
          border-color: #059669;
          color: #ffffff;
        }

        /* CATEGORY GROUPINGS */
        .module-categories-stack {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
          margin-top: 1rem;
        }

        .category-group-block {
          background: transparent;
          border: none;
          padding: 0;
          box-shadow: none;
          margin-bottom: 3.5rem;
        }

        .category-group-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #e2e8f0;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .category-group-info {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .category-badge-pill {
          padding: 0.4rem 1.25rem;
          border-radius: 50px;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: -0.01em;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .category-group-desc {
          font-size: 0.95rem;
          color: #64748b;
          margin: 0;
        }

        .category-count-tag {
          font-size: 0.85rem;
          font-weight: 700;
          color: #059669;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
        }

        /* MODULES GRID LARGE */
        .modules-grid-large {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .module-large-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -2px rgba(0, 0, 0, 0.02);
          position: relative;
          overflow: hidden;
        }

        .module-large-card:hover {
          border-color: #cbd5e1;
          transform: translateY(-5px);
          box-shadow: 0 16px 28px -6px rgba(15, 23, 42, 0.1), 0 6px 10px -4px rgba(0, 0, 0, 0.04);
        }

        .module-large-card:hover::before {
          opacity: 1;
        }

        .module-card-top-content {
          display: flex;
          flex-direction: column;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.1rem;
        }

        .mod-large-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .module-large-card:hover .mod-large-icon {
          transform: scale(1.08) rotate(2deg);
        }

        .mod-category-badge {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border: 1px solid;
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
          line-height: 1;
        }

        .module-card-body {
          margin-bottom: 0.25rem;
        }

        .mod-large-name {
          font-size: 1.12rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.45rem;
          line-height: 1.35;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }

        .module-large-card:hover .mod-large-name {
          color: #059669;
        }

        .mod-large-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
          font-weight: 450;
        }

        .module-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.9rem;
        }

        .module-feature-tag {
          font-size: 0.72rem;
          font-weight: 600;
          color: #475569;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          letter-spacing: -0.01em;
          transition: all 0.2s;
        }

        .module-large-card:hover .module-feature-tag {
          background: #ffffff;
          border-color: #cbd5e1;
        }

        .module-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.9rem;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .module-status-indicator {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .module-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
        }

        .module-status-text {
          font-size: 0.72rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.01em;
        }

        .module-card-arrow {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .module-large-card:hover .module-card-arrow {
          background: #059669;
          border-color: #059669;
          color: #ffffff;
          transform: translateX(3px);
        }

        /* STAKEHOLDER ROLE SOLUTIONS */
        .role-switcher-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          max-width: 1060px;
          margin: 2.25rem auto 0;
        }

        .role-tab-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.9rem 1.25rem;
          border-radius: 16px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          font-size: 0.92rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          text-align: left;
        }

        .role-tab-left {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .role-tab-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: inherit;
        }

        .role-tab-pill:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.04);
        }

        .role-tab-pill.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.25);
          transform: translateY(-2px);
        }

        .role-tab-pill.active .role-tab-icon svg {
          color: #34d399 !important;
        }

        .role-tab-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          background: #f1f5f9;
          color: #64748b;
          padding: 0.25rem 0.6rem;
          border-radius: 50px;
          white-space: nowrap;
        }

        .role-tab-pill.active .role-tab-badge {
          background: rgba(255, 255, 255, 0.15);
          color: #6ee7b7;
        }

        .role-portal-container {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          padding: 3rem 2.75rem;
          margin-top: 2.5rem;
          box-shadow: 0 20px 50px -15px rgba(15, 23, 42, 0.08);
        }

        .role-portal-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2.5rem;
          padding-bottom: 2.25rem;
          border-bottom: 1.5px solid #e2e8f0;
          margin-bottom: 2.25rem;
          flex-wrap: wrap;
        }

        .role-portal-info {
          flex: 1;
          min-width: 320px;
          max-width: 760px;
        }

        .role-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 0.3rem 0.85rem;
          border-radius: 50px;
          border: 1px solid;
          margin-bottom: 0.85rem;
          text-transform: uppercase;
        }

        .role-portal-heading {
          font-size: 2.25rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 0.4rem;
          letter-spacing: -0.02em;
        }

        .role-portal-tagline {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.85rem;
        }

        .role-portal-desc {
          font-size: 0.98rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
        }

        .role-portal-action {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-self: center;
        }

        .role-request-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: #ffffff;
          padding: 0.9rem 1.8rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          white-space: nowrap;
        }

        .role-request-btn:hover {
          filter: brightness(1.08);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }

        .role-contact-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #475569;
          border: 1.5px solid #cbd5e1;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .role-contact-secondary-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
          border-color: #94a3b8;
          transform: translateY(-1px);
        }

        /* 6 SMALL INTERNAL CARDS GRID */
        .role-internal-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .role-internal-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          position: relative;
          overflow: hidden;
        }

        .role-internal-card:hover {
          border-color: #a7f3d0;
          transform: translateY(-5px);
          box-shadow: 0 16px 32px -8px rgba(16, 185, 129, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .internal-card-main {
          display: flex;
          flex-direction: column;
        }

        .internal-card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.1rem;
        }

        .internal-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .role-internal-card:hover .internal-card-icon {
          transform: scale(1.08) rotate(2deg);
        }

        .internal-card-tag {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid;
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
        }

        .internal-card-body {
          margin-bottom: 0.25rem;
        }

        .internal-card-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.45rem;
          line-height: 1.35;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }

        .internal-card-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
          font-weight: 450;
        }

        .internal-card-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: 0.85rem;
        }

        .internal-highlight-tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: #475569;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.18rem 0.5rem;
          border-radius: 6px;
          letter-spacing: -0.01em;
          transition: all 0.2s;
        }

        .role-internal-card:hover .internal-highlight-tag {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .internal-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .internal-card-status {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: #64748b;
        }

        .internal-card-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .internal-card-arrow {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .role-internal-card:hover .internal-card-arrow {
          transform: translateX(3px);
          background: #f1f5f9;
        }

        /* ROADMAP GRID */
        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .roadmap-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -2px rgba(0, 0, 0, 0.02);
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .roadmap-card:hover {
          border-color: #cbd5e1;
          transform: translateY(-5px);
          box-shadow: 0 16px 28px -6px rgba(15, 23, 42, 0.1), 0 6px 10px -4px rgba(0, 0, 0, 0.04);
        }

        .roadmap-step-num {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 1.1rem;
          font-weight: 900;
          font-family: monospace;
          color: #cbd5e1;
        }

        .roadmap-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .roadmap-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .roadmap-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        /* ROI CALCULATOR */
        .calculator-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2.5rem;
          align-items: stretch;
          max-width: 1100px;
          margin: 0 auto;
        }

        .calculator-inputs-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .calc-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .calc-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .calc-label {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .calc-val-badge {
          font-size: 0.95rem;
          font-weight: 800;
          color: #059669;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
        }

        .calc-range-slider {
          width: 100%;
          height: 8px;
          border-radius: 5px;
          background: #e2e8f0;
          outline: none;
          accent-color: #059669;
          cursor: pointer;
        }

        .range-bounds {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
        }

        .calc-assumptions {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
        }

        .calc-assumptions p {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .calculator-results-card {
          background: linear-gradient(145deg, #0f172a 0%, #064e3b 100%);
          border-radius: 24px;
          padding: 2.5rem;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 20px 40px -10px rgba(6, 78, 59, 0.3);
        }

        .results-badge {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #6ee7b7;
          text-transform: uppercase;
        }

        .results-big-num {
          font-size: 3rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
          margin: 0.75rem 0 0.5rem 0;
          letter-spacing: -0.02em;
        }

        .results-sub {
          font-size: 0.85rem;
          color: #cbd5e1;
          margin-bottom: 2rem;
        }

        .results-metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 1.25rem;
          margin-bottom: 2rem;
        }

        .res-metric-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .res-metric-label {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .res-metric-val {
          font-size: 1.1rem;
          font-weight: 800;
          color: #6ee7b7;
        }

        .btn-calc-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #ffffff;
          color: #0f172a;
          padding: 0.9rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-calc-cta:hover {
          background: #f1f5f9;
          transform: translateY(-2px);
        }

        /* COMPARISON TABLE */
        .comparison-table-wrapper {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 25px rgba(0,0,0,0.02);
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .comparison-table th {
          padding: 1.25rem 1.75rem;
          font-size: 0.9rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border-bottom: 2px solid #e2e8f0;
        }

        .th-feature {
          background: #f8fafc;
          color: #475569;
          width: 30%;
        }

        .th-legacy {
          background: #fff1f2;
          color: #be123c;
          width: 35%;
        }

        .th-merlinflow {
          background: #ecfdf5;
          color: #047857;
          width: 35%;
        }

        .comparison-table td {
          padding: 1.1rem 1.75rem;
          font-size: 0.9rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .row-even {
          background: #ffffff;
        }

        .row-odd {
          background: #fbfcfe;
        }

        .td-feature {
          font-weight: 700;
          color: #0f172a;
        }

        .cell-content {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #475569;
        }

        .text-rose {
          color: #e11d48;
        }

        /* PRICING SECTION */
        .pricing-toggle-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .toggle-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #64748b;
        }

        .toggle-label.active {
          color: #0f172a;
          font-weight: 700;
        }

        .pricing-toggle-switch {
          width: 56px;
          height: 30px;
          background: #e2e8f0;
          border-radius: 50px;
          border: none;
          padding: 3px;
          cursor: pointer;
          position: relative;
          transition: background 0.25s;
        }

        .pricing-toggle-switch.yearly {
          background: #059669;
        }

        .toggle-slider {
          display: block;
          width: 24px;
          height: 24px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          transition: transform 0.25s;
        }

        .pricing-toggle-switch.yearly .toggle-slider {
          transform: translateX(26px);
        }

        .discount-pill {
          background: #ecfdf5;
          color: #059669;
          border: 1px solid #a7f3d0;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: 50px;
          margin-left: 0.35rem;
        }

        .pricing-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
          align-items: stretch;
        }

        .pricing-plan-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .pricing-plan-card.popular {
          border-color: #059669;
          box-shadow: 0 20px 40px -10px rgba(5, 150, 105, 0.15);
          transform: scale(1.03);
          background: linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%);
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #059669, #0d9488);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 0.35rem 1rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
        }

        .plan-badge {
          font-size: 0.75rem;
          font-weight: 800;
          color: #059669;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .plan-name {
          font-size: 1.6rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .plan-tagline {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.4;
          min-height: 42px;
          margin-bottom: 1.5rem;
        }

        .plan-price-box {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
          padding: 1.25rem 0;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 1.75rem;
        }

        .price-val {
          font-size: 2.5rem;
          font-weight: 900;
          color: #0f172a;
        }

        .price-period {
          font-size: 0.9rem;
          font-weight: 600;
          color: #64748b;
        }

        .plan-cta-btn {
          width: 100%;
          padding: 0.85rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s;
          margin-bottom: 2rem;
        }

        .plan-cta-btn.primary {
          background: #059669;
          color: #ffffff;
          border: none;
          box-shadow: 0 4px 14px rgba(5, 150, 105, 0.25);
        }

        .plan-cta-btn.primary:hover {
          background: #047857;
          transform: translateY(-2px);
        }

        .plan-cta-btn.outline {
          background: #ffffff;
          color: #0f172a;
          border: 1px solid #cbd5e1;
        }

        .plan-cta-btn.outline:hover {
          background: #f8fafc;
          border-color: #0f172a;
        }

        .plan-features-list {
          flex-grow: 1;
        }

        .features-title {
          font-size: 0.8rem;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          display: block;
          margin-bottom: 1rem;
        }

        .plan-features-list ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .plan-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.875rem;
          color: #475569;
          line-height: 1.4;
        }

        .text-emerald {
          color: #059669;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pricing-footnote {
          text-align: center;
          font-size: 0.85rem;
          color: #64748b;
          margin-top: 3rem;
        }

        /* SECURITY BANNER LAYOUT */
        .security-banner-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }

        .security-badges-row {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .sec-trust-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
        }

        .security-grid-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .security-feature-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 1.75rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .sec-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .security-feature-card h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }

        .security-feature-card p {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        /* ONBOARDING PROMISE BANNER */
        .promise-banner {
          background: linear-gradient(135deg, #0f172a 0%, #064e3b 100%);
          border-radius: 28px;
          padding: 4rem;
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3.5rem;
          align-items: center;
          box-shadow: 0 20px 40px -15px rgba(6, 78, 59, 0.4);
        }

        .promise-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #6ee7b7;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }

        .promise-title {
          font-size: 2.2rem;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .promise-desc {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .promise-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          color: #0f172a;
          padding: 0.85rem 1.8rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-white:hover {
          background: #f1f5f9;
          transform: translateY(-2px);
        }

        .btn-call-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.4);
          padding: 0.85rem 1.8rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.2s;
        }

        .btn-call-outline:hover {
          border-color: #ffffff;
          background: rgba(255,255,255,0.08);
        }

        .promise-cards-side {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .promise-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 1.25rem;
        }

        .promise-check {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #10b981;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .promise-item h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .promise-item p {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.4;
          margin: 0;
        }

        /* FAQ ACCORDION */
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .faq-item:hover {
          border-color: #cbd5e1;
        }

        .faq-item.open {
          border-color: #059669;
          box-shadow: 0 4px 20px rgba(5, 150, 105, 0.08);
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
        }

        .faq-chevron {
          color: #94a3b8;
          transition: transform 0.2s;
          flex-shrink: 0;
        }

        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
          color: #059669;
        }

        .faq-answer-wrap {
          overflow: hidden;
        }

        .faq-answer {
          margin: 1rem 0 0 0;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-heading {
            font-size: 2.6rem;
          }

          .modules-grid-large {
            grid-template-columns: repeat(2, 1fr);
          }

          .role-internal-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .roadmap-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .calculator-layout {
            grid-template-columns: 1fr;
          }

          .pricing-cards-grid {
            grid-template-columns: 1fr;
          }

          .pricing-plan-card.popular {
            transform: none;
          }

          .security-banner-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .promise-banner {
            grid-template-columns: 1fr;
            padding: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-heading {
            font-size: 2.2rem;
          }

          .modules-grid-large {
            grid-template-columns: 1fr;
          }

          .role-internal-cards-grid {
            grid-template-columns: 1fr;
          }

          .role-portal-container {
            padding: 1.75rem;
          }

          .role-portal-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .role-request-btn {
            width: 100%;
            justify-content: center;
          }

          .roadmap-grid {
            grid-template-columns: 1fr;
          }

          .security-grid-col {
            grid-template-columns: 1fr;
          }

          .subnav-tabs {
            display: none;
          }

          .comparison-table-wrapper {
            overflow-x: auto;
          }

          .comparison-table th, .comparison-table td {
            padding: 0.85rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}
