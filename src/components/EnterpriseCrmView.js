"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, Layers, Users, BarChart3, TrendingUp,
  CheckCircle2, ArrowRight, ShieldCheck, Database,
  Lock, AlertCircle, Receipt, Award, ChevronDown,
  Check, Star, Quote, Phone, HelpCircle, Sliders,
  Calculator, X, Globe, ArrowLeft, Box, MessageSquare,
  Clock, Flame, Send, CheckCheck, Search, Compass,
  Radio, Cpu, Share2, Tag, Shield, Building,
  GitBranch, RefreshCw, FileText, CheckCircle,
  FolderTree, Zap, Laptop, PieChart, Sparkles, Workflow, ExternalLink
} from "lucide-react";
import Link from "next/link";
import ContactSection from "./ContactSection";

export default function EnterpriseCrmView() {
  const [activeTab, setActiveTab] = useState("crm"); // crm, erp, supplychain, workflows
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState("all");

  // Enterprise ROI Calculator States
  const [employeeCount, setEmployeeCount] = useState(150);
  const [monthlyInvoices, setMonthlyInvoices] = useState(3500);
  const [currentToolSpendLakhs, setCurrentToolSpendLakhs] = useState(12);
  const [isYearlyPricing, setIsYearlyPricing] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // CRM Deals Pipeline
  const dealsData = [
    { id: "DL-401", title: "Apex Logistics Fleet ERP", client: "Apex Transports Ltd", value: "₹48,00,000", stage: "Proposal Sent", winRate: "88%", owner: "Arjun Mehta", priority: "High", expectedClose: "15 Oct" },
    { id: "DL-402", title: "Omnichannel POS & Supply Chain", client: "Vogue Retail Group", value: "₹28,50,000", stage: "Negotiation", winRate: "92%", owner: "Sneha Reddy", priority: "High", expectedClose: "20 Oct" },
    { id: "DL-403", title: "Multi-Plant Production Tracker", client: "Bharat Steel Casting", value: "₹65,00,000", stage: "Discovery Call", winRate: "65%", owner: "Karan Johar", priority: "Medium", expectedClose: "05 Nov" },
    { id: "DL-404", title: "Centralized HRMS & Biometrics", client: "Zenith Tech Park", value: "₹18,00,000", stage: "Qualified Lead", winRate: "70%", owner: "Pooja Hegde", priority: "Low", expectedClose: "12 Nov" },
    { id: "DL-405", title: "Global E-Invoicing & Compliance", client: "Titan Export Hub", value: "₹34,00,000", stage: "Closed Won", winRate: "100%", owner: "Arjun Mehta", priority: "High", expectedClose: "Won Today" }
  ];

  // Multi-Branch Accounting Ledger
  const branchLedger = [
    { branch: "Mumbai HQ (Entity 101)", gstin: "27AAACM8291M1Z5", monthlyRev: "₹1.84 Cr", ewayGenerated: "1,420 Bills", gstStatus: "GSTR-1 Filed", audit: "Passed" },
    { branch: "Bengaluru Tech Hub (Entity 102)", gstin: "29AAACM8291M1Z8", monthlyRev: "₹94.2 Lakhs", ewayGenerated: "680 Bills", gstStatus: "GSTR-3B Reconciled", audit: "Passed" },
    { branch: "Hyderabad Fulfillment Center", gstin: "36AAACM8291M1ZA", monthlyRev: "₹1.15 Cr", ewayGenerated: "2,150 Bills", gstStatus: "Pending E-Invoice Sync", audit: "Active" },
    { branch: "Delhi NCR Distribution", gstin: "07AAACM8291M1Z2", monthlyRev: "₹78.5 Lakhs", ewayGenerated: "890 Bills", gstStatus: "GSTR-1 Filed", audit: "Passed" }
  ];

  // Supply Chain / PO Lifecycle
  const purchaseOrders = [
    { poId: "PO-9921", vendor: "Hindalco Industrial Metals", item: "Aluminum Extrusions 40x40 (12 Tons)", amount: "₹14,50,000", status: "Approved by CFO", grn: "GRN-204 (Received)", delivery: "Delivered" },
    { poId: "PO-9922", vendor: "ABB Electricals India", item: "3-Phase VFD Inverters & Motors", amount: "₹8,90,000", status: "Pending Manager Auth", grn: "Awaiting Dispatch", delivery: "ETA: 18 Oct" },
    { poId: "PO-9923", vendor: "Supreme Polymers Ltd", item: "Industrial Grade Granules (5,000 kg)", amount: "₹6,40,000", status: "QC Inspection Passed", grn: "GRN-205 (Stocked)", delivery: "Delivered" }
  ];

  // Core Capabilities
  const capabilities = [
    {
      id: "sales-crm",
      title: "Omnichannel Enterprise CRM & AI Pipeline",
      badge: "4.8x Sales Velocity",
      icon: TrendingUp,
      color: "#6366f1",
      bgLight: "#eef2ff",
      border: "#c7d2fe",
      desc: "Complete 360° customer visibility. Unify enterprise inbound inquiries, track multi-stakeholder deal stages, forecast revenue with machine learning, and automate quotes.",
      bullets: [
        "Visual deal Kanban board with AI-backed win probability metrics",
        "Automated CPQ (Configure, Price, Quote) generator with custom tax logic",
        "Two-way email, WhatsApp Business API, and telephony timeline logging",
        "Territory management & dynamic commission split for global sales reps"
      ],
      stat: "84%",
      statLabel: "Closure Efficiency"
    },
    {
      id: "multi-gst",
      title: "Multi-Entity Financial Ledger & GST Engine",
      badge: "100% Tax Compliant",
      icon: Receipt,
      color: "#059669",
      bgLight: "#ecfdf5",
      border: "#a7f3d0",
      desc: "Centralize balance sheets across multiple legal entities and states. Direct host-to-host API integration for instant E-Way bill creation, E-Invoicing, and 1-click GSTR-1 & 3B export.",
      bullets: [
        "Consolidated group financial reporting with inter-company eliminations",
        "Sub-second IRN & QR generation via direct NIC government portal sync",
        "Automated TDS, TCS, Advance Tax, and automated depreciation schedules",
        "Multi-currency ledgers with real-time forex rate adjustment"
      ],
      stat: "Sub-1s",
      statLabel: "IRN Latency"
    },
    {
      id: "supply-chain",
      title: "Procurement, Vendor Portal & Smart Inventory",
      badge: "Zero Stock-Outs",
      icon: Box,
      color: "#0284c7",
      bgLight: "#f0f9ff",
      border: "#bae6fd",
      desc: "Total control over direct and indirect procurement. Automate RFQ bidding, evaluate supplier quotes, manage 3-way matching (PO, GRN, Vendor Invoice), and balance multi-warehouse stock.",
      bullets: [
        "Vendor self-service portal for RFQ submissions and invoice uploads",
        "Predictive re-order triggers based on historical consumption velocity",
        "Multi-location batch, serial number, and barcode tracking across warehouses",
        "Automated 3-way purchase order reconciliation eliminating phantom billing"
      ],
      stat: "22%",
      statLabel: "Holding Cost Saved"
    },
    {
      id: "hrms",
      title: "Enterprise HRMS & Biometric Global Payroll",
      badge: "100% Statutory Clean",
      icon: Users,
      color: "#d97706",
      bgLight: "#fffbeb",
      border: "#fde68a",
      desc: "From hiring to retirement, manage your workforce seamlessly. Direct biometric hardware sync, flexible shift rosters, expense claims with OCR receipt scanning, and 1-click salary disbursement.",
      bullets: [
        "Automated PF, ESI, PT, and Income Tax TDS calculation and form 16",
        "Real-time biometric & geofenced mobile attendance synchronization",
        "Multi-tier leave approval hierarchies and shift rotation scheduler",
        "Employee self-service mobile app for payslips and tax declarations"
      ],
      stat: "1-Click",
      statLabel: "Salary Disbursement"
    },
    {
      id: "workflow-automation",
      title: "Low-Code Workflow Engine & Approval Chains",
      badge: "Infinite Automation",
      icon: Cpu,
      color: "#ec4899",
      bgLight: "#fdf2f8",
      border: "#fbcfe8",
      desc: "Design complex approval hierarchies and trigger multi-department automations with zero code. Send instant WhatsApp alerts for big-ticket approvals, credit-limit breaches, and SLA deadlines.",
      bullets: [
        "Visual drag-and-drop rule builder with conditional IF-THEN branching",
        "Instant multi-level approval triggers on WhatsApp and Mobile App",
        "Webhook and REST API event dispatchers to connect third-party legacy apps",
        "Automated SLA timers with escalation alerts to department heads"
      ],
      stat: "65%",
      statLabel: "Faster Decision Turnaround"
    },
    {
      id: "enterprise-security",
      title: "Military-Grade Security & Granular RBAC",
      badge: "SOC2 & ISO 27001",
      icon: Shield,
      color: "#8b5cf6",
      bgLight: "#f5f3ff",
      border: "#ddd6fe",
      desc: "Built to pass the most demanding enterprise security audits. Role-Based Access Control (RBAC), immutable audit logging, field-level encryption, SSO (SAML/OAuth), and automated daily snapshots.",
      bullets: [
        "Row-level and field-level permission masking for sensitive financial data",
        "Single Sign-On (SSO) with Okta, Azure AD, and Google Workspace",
        "Immutable compliance audit trails tracking every edit, export, and delete",
        "Dedicated VPC deployment and private on-premises hybrid deployment options"
      ],
      stat: "99.99%",
      statLabel: "High Availability SLA"
    }
  ];

  // Pricing Plans
  const pricingPlans = [
    {
      name: "Mid-Market Growth ERP",
      desc: "For fast-scaling corporations and manufacturing units needing unified CRM, multi-branch billing, and supply chain.",
      price: isYearlyPricing ? 4999 : 5999,
      period: "/month",
      billing: isYearlyPricing ? "Billed ₹59,988/yr (Save 20%)" : "Billed monthly",
      badge: null,
      popular: false,
      features: [
        "Up to 25 Full ERP & CRM User Logins",
        "Omnichannel Sales CRM & Deals Pipeline",
        "Multi-GST Accounting & Automated E-Invoicing",
        "Multi-Warehouse Inventory & Barcode Tracking",
        "Purchase Order & Vendor Management",
        "Standard HRMS (Attendance + Payroll for 100 staff)",
        "Standard REST API Access & 24h SLA"
      ],
      cta: "Start 14-Day Enterprise Trial",
      color: "#64748b"
    },
    {
      name: "Enterprise Multi-Branch Suite",
      desc: "For multi-entity corporations, pan-India retail chains, and enterprise manufacturers needing deep automation.",
      price: isYearlyPricing ? 11999 : 14499,
      period: "/month",
      billing: isYearlyPricing ? "Billed ₹1,43,988/yr (Save 20%)" : "Billed monthly",
      badge: "MOST POPULAR",
      popular: true,
      features: [
        "Unlimited ERP & CRM Users across all Branches",
        "Multi-Entity Consolidated Balance Sheets & Inter-company",
        "Advanced CPQ (Configure, Price, Quote) Engine",
        "Vendor Self-Service Bidding Portal & 3-Way Matching",
        "Visual Low-Code Workflow Automation & Webhooks",
        "Full HRMS, Performance Appraisals & Biometric Sync",
        "WhatsApp Business API Integration & Bot Builder",
        "Dedicated Solution Architect & 1-Hour Priority SLA"
      ],
      cta: "Schedule Enterprise Demo",
      color: "#6366f1"
    },
    {
      name: "Global Conglomerate & Custom",
      desc: "For multinational enterprises, banking institutions, and large conglomerates requiring dedicated VPCs and tailored integrations.",
      price: isYearlyPricing ? 24999 : 29999,
      period: "/month",
      billing: isYearlyPricing ? "Billed annually with custom SLA terms" : "Billed monthly",
      badge: "MISSION CRITICAL",
      popular: false,
      features: [
        "Unlimited Global Entities, Currencies & Multi-Tax Zones",
        "Custom SAP, Oracle & Salesforce Bidirectional Connectors",
        "Dedicated Isolated VPC / Hybrid On-Premises Deployment",
        "Custom AI Copilot trained on internal company SOPs",
        "White-Glove Legacy Data Migration & ERP Cutover",
        "24/7/365 Dedicated War-Room Support with 99.99% SLA",
        "Custom SOC2 Type II & InfoSec Audit Compliance Reports",
        "Executive Strategy & Digital Transformation Consulting"
      ],
      cta: "Talk to VP of Enterprise Solutions",
      color: "#059669"
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "Can MerlinFlow Enterprise ERP handle multiple legal entities with different GSTINs?",
      a: "Yes, flawlessly. You can create multiple subsidiary companies and branches, each with their own distinct GSTIN and state tax registrations. The system automatically maintains separate general ledgers while allowing parent company CFOs to generate consolidated profit & loss statements and eliminate inter-company transactions with one click."
    },
    {
      q: "How does the automated E-Invoicing and E-Way Bill generation work?",
      a: "MerlinFlow integrates directly with the GST Suvidha Provider (GSP) and NIC government servers. The instant a sales invoice or dispatch note is approved, the system fetches the IRN (Invoice Reference Number) and QR code in under 1 second and embeds it onto the customer's PDF tax invoice. No manual JSON uploads needed."
    },
    {
      q: "Can we migrate data from our legacy SAP, Tally, or Zoho systems?",
      a: "Yes. We offer automated ETL migration scripts for Tally Prime, SAP Business One, Zoho Books, Microsoft Dynamics, and custom SQL databases. Our enterprise implementation team handles master ledger mapping, historical vendor balances, and opening inventory with zero operational downtime."
    },
    {
      q: "How flexible is the CRM pipeline for custom sales stages and approval matrices?",
      a: "Our CRM allows you to design custom deal pipelines, mandatory qualification stages, discount approval rules, and automated quote generation. Sales reps can trigger digital quotation PDFs containing digital signature links directly through WhatsApp and Email."
    },
    {
      q: "What security and data privacy standards does MerlinFlow adhere to?",
      a: "Our infrastructure is architected according to SOC2 Type II and ISO 27001 guidelines. All data in transit is encrypted using TLS 1.3, and data at rest is secured with AES-256 encryption. We support Single Sign-On (SAML/OAuth 2.0) and granular role-based permissions down to individual table columns."
    }
  ];

  // Calculate estimated ROI boost
  const hoursSavedPerEmployee = 6; // hrs/week
  const annualHoursSaved = employeeCount * hoursSavedPerEmployee * 50;
  const directSoftwareSavingsLakhs = (currentToolSpendLakhs * 0.45).toFixed(1);
  const estimatedProductivityGainsLakhs = ((annualHoursSaved * 400) / 100000).toFixed(1); // assuming ₹400/hr loaded cost

  return (
    <div className="enterprise-page" style={{ paddingTop: "9.5rem" }}>
      {/* Background Orbs & Ambient Glows */}
      <div className="bg-decorations" aria-hidden="true">
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
        <div className="glow-orb orb-3" />
      </div>

      <div className="container">
        {/* Back Link */}
        <div className="back-nav">
          <Link href="/#products" className="back-link">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>

        {/* Hero Section */}
        <section className="product-hero">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge"
          >
            <Sparkles size={16} color="#6366f1" />
            <span>ENTERPRISE CLOUD OS • MULTI-ENTITY ERP + AI CRM</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title"
          >
            Unified Operating System for <br />
            <span className="text-gradient">Enterprise Operations & CRMs</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle"
          >
            Consolidate multi-branch accounting, automated GST compliance, omnichannel sales pipelines, supply chain procurement, and biometric HRMS into a single high-security enterprise platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-actions"
          >
            <a href="#enterprise-sandbox" className="btn-primary">
              <Layers size={18} /> Launch Enterprise Sandbox
            </a>
            <a href="#contact" className="btn-secondary">
              <Phone size={18} /> Talk to Enterprise Architect
            </a>
          </motion.div>

          {/* Key Stat Cards */}
          <div className="stats-strip">
            <div className="stat-card">
              <div className="stat-number">99.99%</div>
              <div className="stat-desc">Guaranteed Uptime SLA</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.8x</div>
              <div className="stat-desc">Faster Deal Velocity</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-desc">Automated GST & E-Invoicing</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15,000+</div>
              <div className="stat-desc">Enterprise Users Active</div>
            </div>
          </div>
        </section>

        {/* Live Interactive Command Center Preview */}
        <section id="enterprise-sandbox" className="sandbox-section">
          <div className="sandbox-header">
            <div className="badge-small">Interactive Sandbox</div>
            <h2 className="section-title">Experience the Enterprise Operations Suite</h2>
            <p className="section-subtitle">
              Test drive how corporate leaders, finance teams, sales executives, and supply chain managers work simultaneously with real-time sync.
            </p>

            {/* Sandbox Tabs */}
            <div className="sandbox-tabs">
              <button 
                onClick={() => setActiveTab("crm")}
                className={`sandbox-tab ${activeTab === "crm" ? "active" : ""}`}
              >
                <TrendingUp size={18} /> Omnichannel Sales CRM
              </button>
              <button 
                onClick={() => setActiveTab("erp")}
                className={`sandbox-tab ${activeTab === "erp" ? "active" : ""}`}
              >
                <Receipt size={18} /> Multi-Entity GST Accounting
              </button>
              <button 
                onClick={() => setActiveTab("supplychain")}
                className={`sandbox-tab ${activeTab === "supplychain" ? "active" : ""}`}
              >
                <Box size={18} /> Supply Chain & PO Engine
              </button>
              <button 
                onClick={() => setActiveTab("workflows")}
                className={`sandbox-tab ${activeTab === "workflows" ? "active" : ""}`}
              >
                <Workflow size={18} /> Low-Code Approval Chains
              </button>
            </div>
          </div>

          <div className="sandbox-window glass-panel">
            <div className="window-topbar">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="window-title">
                <Shield size={14} color="#6366f1" />
                MerlinFlow Enterprise OS • Consolidated Multi-Entity Workspace (SOC2 Certified)
              </div>
              <div className="window-status">
                <span className="status-indicator live" />
                <span>Encrypted • 4 Subsidiaries Active</span>
              </div>
            </div>

            <div className="sandbox-content">
              {/* TAB 1: CRM DEALS PIPELINE */}
              {activeTab === "crm" && (
                <div className="crm-view">
                  <div className="crm-toolbar">
                    <div className="crm-stats-pill">
                      <span>Total Active Pipeline:</span>
                      <strong>₹1.93 Crore</strong>
                    </div>
                    <div className="crm-stats-pill">
                      <span>Weighted Forecast:</span>
                      <strong>₹1.58 Crore (82% Win Prob)</strong>
                    </div>
                    <button 
                      className="btn-add-deal"
                      onClick={() => alert("New Deal Modal opened. Auto-syncing with HubSpot & Salesforce.")}
                    >
                      <Sparkles size={14} /> + New Enterprise Deal
                    </button>
                  </div>

                  <div className="deals-grid">
                    {dealsData.map((deal) => (
                      <div 
                        key={deal.id}
                        onClick={() => setSelectedDeal(deal)}
                        className={`deal-card ${selectedDeal?.id === deal.id ? "selected" : ""}`}
                      >
                        <div className="deal-header">
                          <span className="deal-id">{deal.id}</span>
                          <span className={`priority-tag ${deal.priority.toLowerCase()}`}>{deal.priority}</span>
                        </div>
                        <h4 className="deal-title">{deal.title}</h4>
                        <div className="deal-client">{deal.client}</div>
                        
                        <div className="deal-value-row">
                          <span className="val">{deal.value}</span>
                          <span className="win-rate">🎯 {deal.winRate} win</span>
                        </div>

                        <div className="deal-footer">
                          <span className="stage-tag">{deal.stage}</span>
                          <span className="owner">👤 {deal.owner}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedDeal && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="deal-detail-box"
                    >
                      <div className="deal-detail-header">
                        <div>
                          <h4>{selectedDeal.title} — {selectedDeal.client}</h4>
                          <p>Owner: {selectedDeal.owner} • Stage: {selectedDeal.stage} • Expected Close: {selectedDeal.expectedClose}</p>
                        </div>
                        <button onClick={() => setSelectedDeal(null)} className="close-btn"><X size={16} /></button>
                      </div>

                      <div className="deal-actions">
                        <button className="btn-deal-action cpq" onClick={() => alert(`Generating instant CPQ Quotation with GST for ${selectedDeal.client}`)}>
                          <FileText size={14} /> Generate 1-Click CPQ Quote
                        </button>
                        <button className="btn-deal-action whatsapp" onClick={() => alert(`Executive WhatsApp summary dispatched to ${selectedDeal.owner}`)}>
                          <MessageSquare size={14} /> WhatsApp Deal Digest
                        </button>
                        <button className="btn-deal-action advance" onClick={() => alert(`Deal advanced to Closed Won stage.`)}>
                          <CheckCircle2 size={14} /> Advance to Closed Won
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* TAB 2: MULTI-ENTITY GST ACCOUNTING */}
              {activeTab === "erp" && (
                <div className="erp-view">
                  <div className="erp-banner">
                    <div>
                      <h4>Consolidated Multi-Branch General Ledger</h4>
                      <p>Active Real-Time Reconciliation with GSTIN Suvidha Provider (GSP)</p>
                    </div>
                    <button 
                      className="btn-gstr-export"
                      onClick={() => alert("Consolidated GSTR-1, 3B and E-Invoice IRN package exported.")}
                    >
                      <Receipt size={16} /> Export All GSTR-1 & 3B
                    </button>
                  </div>

                  <div className="branch-table-container">
                    <table className="branch-table">
                      <thead>
                        <tr>
                          <th>Branch & Legal Entity</th>
                          <th>GSTIN Identifier</th>
                          <th>Monthly Revenue</th>
                          <th>E-Way Bills</th>
                          <th>GST Filing Status</th>
                          <th>Audit Trail</th>
                        </tr>
                      </thead>
                      <tbody>
                        {branchLedger.map((row, i) => (
                          <tr key={i}>
                            <td>
                              <strong>{row.branch}</strong>
                            </td>
                            <td><code>{row.gstin}</code></td>
                            <td className="rev-val">{row.monthlyRev}</td>
                            <td>{row.ewayGenerated}</td>
                            <td>
                              <span className={`gst-status ${row.gstStatus.includes("Filed") ? "filed" : "reconciled"}`}>
                                {row.gstStatus}
                              </span>
                            </td>
                            <td>
                              <span className="audit-badge">🛡️ {row.audit}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: SUPPLY CHAIN & PO */}
              {activeTab === "supplychain" && (
                <div className="supplychain-view">
                  <div className="po-header">
                    <h4>Active Purchase Orders & 3-Way Reconciliations</h4>
                    <span className="po-counter">3 Pending Approvals Today</span>
                  </div>

                  <div className="po-list">
                    {purchaseOrders.map((po) => (
                      <div key={po.poId} className="po-card">
                        <div className="po-main-info">
                          <div className="po-id-badge">{po.poId}</div>
                          <div>
                            <h5>{po.item}</h5>
                            <p className="vendor">Vendor: <strong>{po.vendor}</strong> • Delivery: {po.delivery}</p>
                          </div>
                        </div>

                        <div className="po-right-info">
                          <div className="po-amount">{po.amount}</div>
                          <div className="po-status-tag">{po.status}</div>
                          <div className="po-grn-tag">{po.grn}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: WORKFLOWS */}
              {activeTab === "workflows" && (
                <div className="workflows-view">
                  <div className="workflow-diagram">
                    <div className="workflow-step start">
                      <div className="step-icon"><FileText size={18} /></div>
                      <div className="step-info">
                        <strong>Trigger Event:</strong>
                        <span>New PO Created &gt; ₹5,00,000</span>
                      </div>
                    </div>

                    <div className="workflow-arrow">&rarr;</div>

                    <div className="workflow-step condition">
                      <div className="step-icon"><Workflow size={18} /></div>
                      <div className="step-info">
                        <strong>Rule Check:</strong>
                        <span>Is Vendor Credit &lt; 30 Days?</span>
                      </div>
                    </div>

                    <div className="workflow-arrow">&rarr;</div>

                    <div className="workflow-step action">
                      <div className="step-icon"><MessageSquare size={18} /></div>
                      <div className="step-info">
                        <strong>Instant Action:</strong>
                        <span>Send WhatsApp Dual-Auth to CFO</span>
                      </div>
                    </div>

                    <div className="workflow-arrow">&rarr;</div>

                    <div className="workflow-step final">
                      <div className="step-icon"><CheckCircle size={18} /></div>
                      <div className="step-info">
                        <strong>Ledger Event:</strong>
                        <span>Auto-Release Fund & Sync SAP</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="capabilities-section">
          <div className="section-header">
            <div className="badge-small">Architected For Scale</div>
            <h2 className="section-title">Engineered for High-Performance Enterprise</h2>
            <p className="section-subtitle">
              Eliminate software silos. Consolidate ERP, CRM, HRMS, and supply chain into one unified data fabric.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon || Layers;
              return (
                <div 
                  key={cap.id}
                  className="cap-card"
                >
                  <div className="cap-header">
                    <div className="cap-icon-wrapper" style={{ backgroundColor: cap.bgLight, color: cap.color }}>
                      <IconComponent size={28} color={cap.color} />
                    </div>
                    <div className="cap-title-group">
                      <h3 className="cap-title">{cap.title}</h3>
                      <div className="cap-tag" style={{ color: cap.color }}>
                        {cap.badge} • {cap.stat} {cap.statLabel}
                      </div>
                    </div>
                  </div>

                  <p className="cap-desc">{cap.desc}</p>

                  <ul className="cap-bullets">
                    {cap.bullets.map((b, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} color={cap.color} style={{ flexShrink: 0, marginTop: "3px" }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Live Client Deployments in Enterprise CRM & ERP */}
        <section className="product-deployments-section">
          <div className="section-header">
            <div className="badge-small">Live Production Systems</div>
            <h2 className="section-title">Proven Enterprise Architecture Deployments</h2>
            <p className="section-subtitle">
              See how enterprise organizations and multi-tenant SaaS platforms operate on MerlinFlow architectures.
            </p>
          </div>

          <div className="product-deployments-grid">
            {/* Project 1: Nest Infra CRM */}
            <div className="prop-deployment-card">
              <div className="p-dep-top">
                <span className="p-dep-tag">Real Estate CRM Model</span>
                <span className="p-dep-badge">Live Enterprise</span>
              </div>
              <h3 className="p-dep-title">Nest Infra Developers — Real Estate CRM & Broker Operations</h3>
              <div className="p-dep-meta">
                <strong>Nest Infra Developers</strong> • <span className="p-domain">crm.nestinfradevelopers.in</span> • Hyderabad & Telangana
              </div>
              <p className="p-dep-desc">
                Specialized CRM architecture automating channel partner broker lead attribution, site-visit tracking, live unit inventory matrix, and customer payment milestone schedules.
              </p>
              <div className="p-dep-metrics">
                <div className="p-metric">
                  <span className="val">&lt; 2 Mins</span>
                  <span className="lbl">Broker Response</span>
                </div>
                <div className="p-metric">
                  <span className="val">-92%</span>
                  <span className="lbl">Lead Leakage</span>
                </div>
                <div className="p-metric">
                  <span className="val">₹450 Cr+</span>
                  <span className="lbl">Pipeline Managed</span>
                </div>
              </div>
              <a 
                href="https://crm.nestinfradevelopers.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-dep-btn"
              >
                <span>Visit Live Platform (crm.nestinfradevelopers.in)</span>
                <ExternalLink size={15} />
              </a>
            </div>

            {/* Project 2: OneClickBiz */}
            <div className="prop-deployment-card">
              <div className="p-dep-top">
                <span className="p-dep-tag">Smart SaaS & vCard</span>
                <span className="p-dep-badge">Live Platform</span>
              </div>
              <h3 className="p-dep-title">OneClickBiz — Digital Business Card, NFC & WhatsApp Store SaaS</h3>
              <div className="p-dep-meta">
                <strong>OneClickBiz</strong> • <span className="p-domain">oneclickbiz.in</span> • India & Global
              </div>
              <p className="p-dep-desc">
                Full-featured digital identity SaaS platform combining interactive vCards, dynamic NFC tap-and-share routing, integrated WhatsApp mini-store e-commerce, and multi-gateway subscriptions.
              </p>
              <div className="p-dep-metrics">
                <div className="p-metric">
                  <span className="val">250,000+</span>
                  <span className="lbl">Profile Taps</span>
                </div>
                <div className="p-metric">
                  <span className="val">88.4%</span>
                  <span className="lbl">Contact Save Rate</span>
                </div>
                <div className="p-metric">
                  <span className="val">3.8x Boost</span>
                  <span className="lbl">Store Leads</span>
                </div>
              </div>
              <a 
                href="https://oneclickbiz.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-dep-btn"
              >
                <span>Visit Live Platform (oneclickbiz.in)</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Enterprise TCO / Savings Calculator */}
        <section className="calculator-section glass-panel">
          <div className="calc-header">
            <div className="badge-small">Interactive Financial Model</div>
            <h2 className="section-title">Calculate Your Enterprise TCO & Productivity ROI</h2>
            <p className="section-subtitle">
              See the measurable financial return of replacing 6+ fragmented SaaS subscriptions with MerlinFlow Enterprise OS.
            </p>
          </div>

          <div className="calc-body">
            <div className="calc-controls">
              <div className="control-group">
                <div className="control-label">
                  <span>Total Corporate Headcount:</span>
                  <strong>{employeeCount} Employees</strong>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="1000" 
                  step="10"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>

              <div className="control-group">
                <div className="control-label">
                  <span>Monthly Invoices & Transactions:</span>
                  <strong>{monthlyInvoices.toLocaleString()} Invoices</strong>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="25000" 
                  step="500"
                  value={monthlyInvoices}
                  onChange={(e) => setMonthlyInvoices(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>

              <div className="control-group">
                <div className="control-label">
                  <span>Current Annual Software Subscriptions:</span>
                  <strong>₹{currentToolSpendLakhs} Lakhs / Year</strong>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="50" 
                  step="1"
                  value={currentToolSpendLakhs}
                  onChange={(e) => setCurrentToolSpendLakhs(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>
            </div>

            <div className="calc-results-card">
              <h3>Projected Annual Enterprise Savings</h3>
              
              <div className="calc-metrics">
                <div className="metric-box">
                  <span className="metric-title">Staff Hours Saved / Year</span>
                  <span className="metric-val highlight">{annualHoursSaved.toLocaleString()} Hrs</span>
                </div>
                <div className="metric-box">
                  <span className="metric-title">Direct Software Bill Reduction</span>
                  <span className="metric-val green">₹{directSoftwareSavingsLakhs} Lakhs</span>
                </div>
                <div className="metric-box">
                  <span className="metric-title">Labor Productivity Value</span>
                  <span className="metric-val">₹{estimatedProductivityGainsLakhs} Lakhs</span>
                </div>
                <div className="metric-box">
                  <span className="metric-title">Total Estimated ROI Multiple</span>
                  <span className="metric-val highlight">5.4x Net Gain</span>
                </div>
              </div>

              <a href="#contact" className="calc-cta-btn">
                <Sparkles size={18} /> Request Custom Enterprise TCO Audit
              </a>
            </div>
          </div>
        </section>

        {/* Transparent Pricing Plans */}
        <section className="pricing-section">
          <div className="section-header">
            <div className="badge-small">Transparent Pricing</div>
            <h2 className="section-title">Enterprise Plans Engineered for ROI</h2>
            <p className="section-subtitle">
              Scalable pricing with zero per-lead penalties and predictable annual licensing in Indian Rupees.
            </p>

            <div className="pricing-toggle">
              <span className={!isYearlyPricing ? "active" : ""}>Monthly</span>
              <button 
                className="toggle-switch"
                onClick={() => setIsYearlyPricing(!isYearlyPricing)}
              >
                <div className={`switch-knob ${isYearlyPricing ? "yearly" : ""}`} />
              </button>
              <span className={isYearlyPricing ? "active" : ""}>
                Yearly <span className="discount-pill">20% OFF</span>
              </span>
            </div>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, i) => (
              <div 
                key={i} 
                className={`pricing-card glass-panel ${plan.popular ? "popular" : ""}`}
              >
                {plan.badge && <div className="popular-ribbon">{plan.badge}</div>}
                
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>

                <div className="plan-price-row">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price.toLocaleString()}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <div className="billing-cycle">{plan.billing}</div>

                <ul className="plan-features">
                  {plan.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check size={16} color="#6366f1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`btn-plan ${plan.popular ? "primary" : "secondary"}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Global Contact Form */}
      <div id="contact" className="contact-wrapper">
        <ContactSection />
      </div>

      <style jsx>{`
        .enterprise-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          position: relative;
          overflow-x: hidden;
        }

        .bg-decorations {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: #6366f1;
          top: 5%;
          left: -200px;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: #059669;
          top: 40%;
          right: -150px;
        }

        .orb-3 {
          width: 550px;
          height: 550px;
          background: #0284c7;
          top: 75%;
          left: 15%;
        }

        .back-nav {
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
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
          margin-bottom: 5rem;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.35);
          color: #4338ca;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          color: #0f172a;
        }

        .text-gradient {
          background: linear-gradient(135deg, #4338ca 0%, #6366f1 40%, #0ea5e9 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: #334155;
          max-width: 820px;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 3.5rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: #ffffff;
          padding: 0.9rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(99, 102, 241, 0.45);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffffff;
          color: #0f172a;
          padding: 0.9rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid #cbd5e1;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: background 0.2s, border-color 0.2s;
        }

        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #6366f1;
        }

        .stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          width: 100%;
          max-width: 1150px;
          margin: 2.5rem auto 0;
        }

        .stats-strip .stat-card {
          background: #ffffff;
          border: 1px solid rgba(99, 102, 241, 0.25);
          padding: 1.5rem 1rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .stats-strip .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.15);
        }

        .stats-strip .stat-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: #6366f1;
          margin-bottom: 0.3rem;
          line-height: 1.1;
        }

        .stats-strip .stat-desc {
          font-size: 0.85rem;
          color: #334155;
          font-weight: 600;
        }

        /* Sandbox Section */
        .sandbox-section {
          margin-bottom: 6rem;
          position: relative;
          z-index: 2;
        }

        .sandbox-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .badge-small {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
          padding: 0.35rem 1rem;
          border-radius: 30px;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .section-subtitle {
          color: #475569;
          font-size: 1.05rem;
          max-width: 700px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .sandbox-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .sandbox-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.4rem;
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .sandbox-tab:hover {
          color: var(--text-color);
          background: var(--bg-alpha-hover);
        }

        .sandbox-tab.active {
          background: #6366f1;
          color: #ffffff;
          border-color: #6366f1;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
        }

        .sandbox-window {
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          overflow: hidden;
          background: var(--bg-alpha-light);
          backdrop-filter: blur(16px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
        }

        .window-topbar {
          background: rgba(0,0,0,0.2);
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--glass-border);
          font-size: 0.85rem;
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot.red { background: #ef4444; }
        .dot.yellow { background: #f59e0b; }
        .dot.green { background: #10b981; }

        .window-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .window-status {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #10b981;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .status-indicator.live {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .sandbox-content {
          padding: 2rem;
        }

        /* CRM View */
        .crm-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .crm-stats-pill {
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          display: flex;
          gap: 0.5rem;
        }

        .crm-stats-pill span { color: var(--text-muted); }
        .crm-stats-pill strong { color: #6366f1; }

        .btn-add-deal {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #6366f1;
          color: white;
          padding: 0.55rem 1.1rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
        }

        .deals-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .deal-card {
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 1.25rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .deal-card:hover {
          transform: translateY(-3px);
          border-color: #6366f1;
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.15);
        }

        .deal-card.selected {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.08);
          box-shadow: 0 0 0 2px #6366f1;
        }

        .deal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .deal-id {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .priority-tag {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 12px;
          text-transform: uppercase;
        }
        .priority-tag.high { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
        .priority-tag.medium { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
        .priority-tag.low { background: rgba(16, 185, 129, 0.15); color: #10b981; }

        .deal-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-color);
          margin: 0;
        }

        .deal-client {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .deal-value-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-top: 1px dashed var(--glass-border);
          border-bottom: 1px dashed var(--glass-border);
        }

        .deal-value-row .val {
          font-weight: 800;
          font-size: 1.15rem;
          color: #6366f1;
        }

        .deal-value-row .win-rate {
          font-size: 0.8rem;
          color: #10b981;
          font-weight: 600;
        }

        .deal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .stage-tag {
          background: var(--bg-alpha-hover);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          font-weight: 600;
          color: var(--text-color);
        }

        .deal-detail-box {
          background: var(--bg-alpha-hover);
          border: 1px solid #6366f1;
          border-radius: 16px;
          padding: 1.5rem;
          margin-top: 1.5rem;
        }

        .deal-detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .deal-detail-header h4 {
          margin: 0 0 0.3rem 0;
          font-size: 1.25rem;
          color: var(--text-color);
        }

        .deal-detail-header p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .deal-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-deal-action {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          border: none;
        }

        .btn-deal-action.cpq { background: #6366f1; color: white; }
        .btn-deal-action.whatsapp { background: #25d366; color: white; }
        .btn-deal-action.advance { background: #10b981; color: white; }

        /* ERP Multi-Branch Table */
        .erp-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .erp-banner h4 {
          margin: 0 0 0.3rem 0;
          font-size: 1.2rem;
          color: var(--text-color);
        }

        .erp-banner p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .btn-gstr-export {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #059669;
          color: white;
          padding: 0.65rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
        }

        .branch-table-container {
          overflow-x: auto;
        }

        .branch-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          text-align: left;
        }

        .branch-table th {
          padding: 0.85rem 1rem;
          border-bottom: 2px solid var(--glass-border);
          color: var(--text-muted);
        }

        .branch-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--glass-border);
          color: var(--text-color);
        }

        .rev-val {
          font-weight: 700;
          color: #6366f1;
        }

        .gst-status {
          padding: 0.25rem 0.6rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .gst-status.filed { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .gst-status.reconciled { background: rgba(99, 102, 241, 0.15); color: #6366f1; }

        .audit-badge {
          font-size: 0.8rem;
          font-weight: 600;
          color: #10b981;
        }

        /* Supply Chain PO */
        .po-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .po-header h4 {
          margin: 0;
          font-size: 1.2rem;
          color: var(--text-color);
        }

        .po-counter {
          font-size: 0.85rem;
          color: #f59e0b;
          font-weight: 600;
        }

        .po-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .po-card {
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .po-main-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .po-id-badge {
          background: rgba(99, 102, 241, 0.12);
          color: #6366f1;
          font-weight: 800;
          font-size: 0.9rem;
          padding: 0.5rem 0.8rem;
          border-radius: 8px;
        }

        .po-main-info h5 {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
          color: var(--text-color);
        }

        .po-main-info .vendor {
          margin: 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .po-right-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .po-amount {
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-color);
        }

        .po-status-tag {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.3rem 0.7rem;
          border-radius: 20px;
        }

        .po-grn-tag {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Workflows View */
        .workflow-diagram {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          overflow-x: auto;
          padding: 1.5rem 0;
        }

        .workflow-step {
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 180px;
        }

        .workflow-step.start { border-color: #6366f1; }
        .workflow-step.condition { border-color: #f59e0b; }
        .workflow-step.action { border-color: #25d366; }
        .workflow-step.final { border-color: #10b981; }

        .step-icon {
          color: #6366f1;
        }

        .step-info strong {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .step-info span {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-color);
        }

        .workflow-arrow {
          font-size: 1.5rem;
          color: var(--text-muted);
          font-weight: 800;
        }

        /* Capabilities Grid */
        .capabilities-section {
          margin-bottom: 6rem;
          position: relative;
          z-index: 2;
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 1fr;
          gap: 2rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .cap-card {
          background: #ffffff;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          border-radius: 18px;
          border: 1px solid #cbd5e1;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          height: 100%;
        }

        .cap-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.1);
          border-color: #94a3b8;
        }

        .cap-header {
          display: flex;
          align-items: flex-start;
          gap: 1.15rem;
          margin-bottom: 1.25rem;
          width: 100%;
        }

        .cap-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cap-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }

        .cap-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
          margin: 0;
        }

        .cap-tag {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .cap-desc {
          color: #475569;
          font-size: 0.93rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .cap-bullets {
          list-style: none;
          padding: 1rem 0 0 0;
          border-top: 1px solid #f1f5f9;
          width: 100%;
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .cap-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.86rem;
          color: #1e293b;
          line-height: 1.45;
        }

        /* ROI Calculator Section */
        .calculator-section {
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 3rem;
          margin-bottom: 6rem;
          position: relative;
          z-index: 2;
        }

        .calc-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .calc-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .calc-controls {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .control-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-color);
        }

        .control-label strong {
          color: #6366f1;
          font-size: 1.1rem;
        }

        .calc-slider {
          width: 100%;
          accent-color: #6366f1;
          height: 6px;
          cursor: pointer;
        }

        .calc-results-card {
          background: var(--bg-alpha-hover);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
        }

        .calc-results-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }

        .calc-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .metric-box {
          background: var(--bg-alpha-light);
          padding: 1.25rem 1rem;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
        }

        .metric-title {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
        }

        .metric-val {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-color);
        }

        .metric-val.highlight { color: #6366f1; }
        .metric-val.green { color: #10b981; }

        .calc-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          justify-content: center;
          background: #6366f1;
          color: white;
          padding: 0.9rem;
          border-radius: 10px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .calc-cta-btn:hover {
          transform: translateY(-2px);
        }

        /* Pricing Section */
        .pricing-section {
          margin-bottom: 6rem;
          position: relative;
          z-index: 2;
        }

        .pricing-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .pricing-toggle .active {
          color: var(--text-color);
        }

        .toggle-switch {
          width: 50px;
          height: 26px;
          background: var(--bg-alpha-hover);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          cursor: pointer;
          position: relative;
          padding: 2px;
        }

        .switch-knob {
          width: 20px;
          height: 20px;
          background: #6366f1;
          border-radius: 50%;
          transition: transform 0.2s;
        }

        .switch-knob.yearly {
          transform: translateX(24px);
        }

        .discount-pill {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 12px;
          margin-left: 0.3rem;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .pricing-card {
          border-radius: 24px;
          padding: 2.5rem 2rem;
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .pricing-card.popular {
          border-color: #6366f1;
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.2);
        }

        .popular-ribbon {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #6366f1;
          color: white;
          padding: 0.35rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .plan-name {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-color);
        }

        .plan-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          min-height: 48px;
        }

        .plan-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
          margin-bottom: 0.25rem;
        }

        .currency {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-color);
        }

        .amount {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-color);
        }

        .period {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .billing-cycle {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          flex-grow: 1;
        }

        .plan-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-color);
        }

        .btn-plan {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .btn-plan.primary {
          background: #6366f1;
          color: white;
        }

        .btn-plan.secondary {
          background: var(--bg-alpha-light);
          color: var(--text-color);
          border: 1px solid var(--glass-border);
        }

        /* FAQ Section */
        .faq-section {
          margin-bottom: 6rem;
          position: relative;
          z-index: 2;
        }

        .faq-list {
          max-width: 850px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          border-radius: 14px;
          border: 1px solid var(--glass-border);
          padding: 1.25rem 1.5rem;
          cursor: pointer;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-color);
        }

        .faq-arrow {
          transition: transform 0.2s;
          color: var(--text-muted);
        }

        .faq-arrow.rotate {
          transform: rotate(180deg);
          color: #6366f1;
        }

        .faq-answer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .contact-wrapper {
          position: relative;
          z-index: 2;
        }

        /* Product Deployments Section */
        .product-deployments-section {
          margin-bottom: 5rem;
          position: relative;
          z-index: 2;
        }

        .product-deployments-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.35rem;
        }

        .prop-deployment-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 14px;
          padding: 1.35rem 1.4rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .prop-deployment-card:hover {
          transform: translateY(-3px);
          border-color: #6366f1;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
        }

        .p-dep-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .p-dep-tag {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #6366f1;
          background: rgba(99, 102, 241, 0.08);
          padding: 0.22rem 0.6rem;
          border-radius: 50px;
        }

        .p-dep-badge {
          font-size: 0.68rem;
          font-weight: 700;
          color: #059669;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.2rem 0.55rem;
          border-radius: 50px;
        }

        .p-dep-title {
          font-size: 1.12rem;
          font-weight: 700;
          line-height: 1.35;
          margin: 0 0 0.35rem 0;
          color: #0f172a;
        }

        .p-dep-meta {
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 0.65rem;
        }

        .p-domain {
          color: #6366f1;
          font-weight: 600;
        }

        .p-dep-desc {
          font-size: 0.84rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 0.85rem;
          flex-grow: 1;
        }

        .p-dep-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
          background: #f8fafc;
          padding: 0.55rem 0.65rem;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          margin-bottom: 1rem;
          text-align: center;
        }

        .p-metric .val {
          display: block;
          font-size: 1.05rem;
          font-weight: 800;
          color: #6366f1;
        }

        .p-metric .lbl {
          display: block;
          font-size: 0.65rem;
          color: #64748b;
          margin-top: 0.1rem;
          font-weight: 600;
        }

        .p-dep-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          width: 100%;
          padding: 0.6rem 1.1rem;
          border-radius: 8px;
          background: #6366f1;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 3px 10px rgba(99, 102, 241, 0.18);
          margin-top: auto;
        }

        .p-dep-btn:hover {
          background: #4f46e5;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .stats-strip { grid-template-columns: repeat(2, 1fr); }
          .deals-grid { grid-template-columns: 1fr; }
          .capabilities-grid { grid-template-columns: 1fr; }
          .product-deployments-grid { grid-template-columns: 1fr; }
          .calc-body { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .workflow-diagram { flex-direction: column; }
          .workflow-arrow { transform: rotate(90deg); }
        }

        @media (max-width: 768px) {
          .product-hero {
            margin-bottom: 3.5rem;
          }

          .hero-title {
            font-size: clamp(1.85rem, 6.5vw, 2.6rem);
            margin-bottom: 1rem;
          }

          .hero-subtitle {
            font-size: 0.95rem;
            margin-bottom: 1.75rem;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            margin: 0 auto 2.5rem;
            gap: 0.75rem;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .stats-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
            margin-top: 1.5rem;
          }

          .stats-strip .stat-card {
            padding: 1rem 0.75rem;
            border-radius: 12px;
          }

          .stats-strip .stat-number {
            font-size: 1.75rem;
          }

          .stats-strip .stat-desc {
            font-size: 0.78rem;
          }

          .sandbox-section {
            margin-bottom: 3.5rem;
          }

          .sandbox-header {
            margin-bottom: 1.5rem;
          }

          .section-title {
            font-size: clamp(1.5rem, 5vw, 2rem);
          }

          .section-subtitle {
            font-size: 0.9rem;
            margin-bottom: 1.25rem;
          }

          .sandbox-tabs {
            justify-content: flex-start;
            gap: 0.5rem;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 0.5rem;
            scrollbar-width: none;
          }

          .sandbox-tabs::-webkit-scrollbar {
            display: none;
          }

          .sandbox-tab {
            white-space: nowrap;
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
            flex-shrink: 0;
          }

          .sandbox-window {
            border-radius: 14px;
          }

          .window-topbar {
            padding: 0.6rem 1rem;
            font-size: 0.75rem;
          }

          .sandbox-content {
            padding: 1.25rem 0.85rem;
          }

          .crm-toolbar {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
          }

          .crm-stats-pill {
            width: 100%;
            justify-content: space-between;
          }

          .btn-add-deal {
            width: 100%;
            justify-content: center;
          }

          .deals-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }

          .deal-card {
            padding: 1rem;
          }

          .deal-detail-box {
            padding: 1rem;
            border-radius: 12px;
            margin-top: 1rem;
          }

          .deal-actions {
            flex-direction: column;
            gap: 0.5rem;
          }

          .btn-deal-action {
            width: 100%;
            justify-content: center;
          }

          .erp-banner {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }

          .btn-gstr-export {
            width: 100%;
            justify-content: center;
          }

          .branch-table-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin: 0 -0.85rem;
            padding: 0 0.85rem;
          }

          .branch-table {
            min-width: 540px;
            font-size: 0.82rem;
          }

          .branch-table th, .branch-table td {
            padding: 0.65rem 0.75rem;
          }

          .po-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.35rem;
            margin-bottom: 1rem;
          }

          .po-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 1rem;
          }

          .po-main-info {
            width: 100%;
            gap: 0.75rem;
          }

          .po-right-info {
            width: 100%;
            justify-content: space-between;
            border-top: 1px solid var(--glass-border);
            padding-top: 0.6rem;
          }

          .workflow-diagram {
            flex-direction: column;
            align-items: stretch;
            gap: 0.65rem;
            padding: 0.75rem 0;
          }

          .workflow-step {
            min-width: 100%;
            width: 100%;
          }

          .workflow-arrow {
            transform: rotate(90deg);
            align-self: center;
            margin: 0.15rem 0;
          }

          .capabilities-section {
            margin-bottom: 3.5rem;
          }

          .cap-card {
            padding: 1.4rem 1.15rem;
            border-radius: 14px;
          }

          .cap-header {
            gap: 0.85rem;
            margin-bottom: 1rem;
          }

          .cap-icon-wrapper {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }

          .cap-title {
            font-size: 1.15rem;
          }

          .calculator-section {
            padding: 1.5rem 1rem;
            border-radius: 16px;
            margin-bottom: 3.5rem;
          }

          .calc-header {
            margin-bottom: 1.5rem;
          }

          .calc-body {
            gap: 1.75rem;
          }

          .calc-results-card {
            padding: 1.25rem 1rem;
            border-radius: 14px;
          }

          .calc-metrics {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem;
            margin-bottom: 1.25rem;
          }

          .pricing-section {
            margin-bottom: 3.5rem;
          }

          .pricing-grid {
            margin-top: 2rem;
            gap: 1.5rem;
          }

          .pricing-card {
            padding: 1.75rem 1.25rem;
            border-radius: 18px;
          }

          .faq-section {
            margin-bottom: 3.5rem;
          }

          .faq-item {
            padding: 1rem 1.15rem;
          }

          .product-deployments-section {
            margin-bottom: 3.5rem;
          }

          .prop-deployment-card {
            padding: 1.15rem 1rem;
            border-radius: 12px;
          }

          .p-dep-metrics {
            padding: 0.45rem;
            gap: 0.25rem;
          }

          .p-metric .val {
            font-size: 0.95rem;
          }

          .p-metric .lbl {
            font-size: 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .stats-strip {
            grid-template-columns: 1fr;
          }

          .calc-metrics {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
