"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Home, MapPin, Key, Users, Calendar, 
  CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, 
  CreditCard, Sparkles, Smartphone, BarChart3, 
  Database, Lock, AlertCircle, Receipt, Award, 
  Layers, ChevronDown, Check, Star, Quote, Phone, 
  HelpCircle, Sliders, Calculator, X, Globe, 
  ArrowLeft, ArrowUpRight, Box, MessageSquare, 
  Clock, Flame, Send, CheckCheck, Search,
  Compass, Radio, Cpu, Share2, Tag, Shield,
  Filter, FileText, CheckCircle, Percent, ExternalLink
} from "lucide-react";
import Link from "next/link";
import ContactSection from "./ContactSection";

export default function RealEstateView() {
  const [activeTab, setActiveTab] = useState("inventory"); // inventory, leads, sitevisits, rera
  const [selectedTower, setSelectedTower] = useState("Tower A - Sapphire");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("all");
  const [selectedUnit, setSelectedUnit] = useState(null);
  
  // ROI Calculator States
  const [monthlyLeads, setMonthlyLeads] = useState(800);
  const [ticketPriceLakhs, setTicketPriceLakhs] = useState(85); // in Lakhs
  const [conversionBoostPct, setConversionBoostPct] = useState(25);
  const [isYearlyPricing, setIsYearlyPricing] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Sample Interactive Real Estate Inventory
  const inventoryUnits = [
    { id: "A-201", tower: "Tower A - Sapphire", type: "3 BHK Luxury", area: "1,850 sq.ft", floor: "2nd Floor", price: "₹1.48 Cr", facing: "East / Park View", status: "Available", parking: "2 Covered", reraId: "P02400004921" },
    { id: "A-202", tower: "Tower A - Sapphire", type: "2 BHK Premium", area: "1,240 sq.ft", floor: "2nd Floor", price: "₹99.2 L", facing: "North-East", status: "Booked", parking: "1 Covered", reraId: "P02400004921" },
    { id: "A-501", tower: "Tower A - Sapphire", type: "3 BHK Luxury", area: "1,850 sq.ft", floor: "5th Floor", price: "₹1.52 Cr", facing: "East / Club View", status: "Token Paid", parking: "2 Covered", reraId: "P02400004921" },
    { id: "A-1201", tower: "Tower A - Sapphire", type: "4 BHK Sky Villa", area: "3,200 sq.ft", floor: "12th Floor", price: "₹2.85 Cr", facing: "360 Panoramic", status: "Hold", parking: "3 Covered", reraId: "P02400004921" },
    { id: "B-101", tower: "Tower B - Emerald", type: "2 BHK Smart", area: "1,180 sq.ft", floor: "1st Floor", price: "₹88.5 L", facing: "West / Garden", status: "Available", parking: "1 Covered", reraId: "P02400004922" },
    { id: "B-402", tower: "Tower B - Emerald", type: "3 BHK Royal", area: "1,920 sq.ft", floor: "4th Floor", price: "₹1.58 Cr", facing: "North / Lake View", status: "Available", parking: "2 Covered", reraId: "P02400004922" },
    { id: "B-801", tower: "Tower B - Emerald", type: "3 BHK Royal", area: "1,920 sq.ft", floor: "8th Floor", price: "₹1.62 Cr", facing: "North / Lake View", status: "Booked", parking: "2 Covered", reraId: "P02400004922" },
    { id: "V-07", tower: "Greenwood Villas", type: "4 BHK Duplex Villa", area: "4,100 sq.ft", floor: "G+2 with Private Pool", price: "₹4.20 Cr", facing: "East Facing", status: "Available", parking: "2 Covered + 1 Open", reraId: "P02400004925" }
  ];

  const filteredUnits = inventoryUnits.filter(u => {
    const matchesTower = selectedTower === "All Projects" || u.tower === selectedTower;
    const matchesStatus = selectedStatusFilter === "all" || u.status.toLowerCase().replace(" ", "-") === selectedStatusFilter;
    return matchesTower && matchesStatus;
  });

  // Live Leads Pipeline Simulation
  const liveLeads = [
    { id: "LD-8942", name: "Vikram Singhania", source: "99acres Webhook", project: "Tower A - Sapphire", budget: "₹1.5 - 1.8 Cr", bhk: "3 BHK", agent: "Rahul Verma", score: "Hot (94%)", time: "3 min ago", status: "Site Visit Confirmed" },
    { id: "LD-8941", name: "Dr. Shalini Deshmukh", source: "MagicBricks API", project: "Greenwood Villas", budget: "₹3.8 - 4.5 Cr", bhk: "4 BHK Villa", agent: "Priya Nair", score: "Hot (98%)", time: "8 min ago", status: "Cab Pick-up Booked" },
    { id: "LD-8940", name: "Aditya Kulkarni", source: "Meta Ad Campaign", project: "Tower B - Emerald", budget: "₹90 L - 1.1 Cr", bhk: "2 BHK", agent: "Sunil Rao", score: "Warm (76%)", time: "14 min ago", status: "Brochure Downloaded" },
    { id: "LD-8939", name: "Rajesh & Anita Gupta", source: "Channel Partner (Anarock)", project: "Tower A - Sapphire", budget: "₹2.5 - 3.0 Cr", bhk: "4 BHK Sky Villa", agent: "Amit Shah", score: "Token Ready (99%)", time: "22 min ago", status: "Negotiation Meeting" },
    { id: "LD-8938", name: "Gautam Nambiar", source: "Google Search Ads", project: "Tower B - Emerald", budget: "₹1.4 - 1.6 Cr", bhk: "3 BHK", agent: "Rahul Verma", score: "Warm (68%)", time: "35 min ago", status: "Follow-up Scheduled" }
  ];

  // Construction Milestone Data
  const milestoneSlabs = [
    { stage: "Booking & Agreement", pct: "10%", status: "Completed", amountDue: "₹14.8 L", collected: "100%", reraClause: "Section 13(1)" },
    { stage: "Completion of Raft & Foundation", pct: "15%", status: "Completed", amountDue: "₹22.2 L", collected: "100%", reraClause: "Section 13(2) - A" },
    { stage: "Completion of 5th Floor Slab", pct: "20%", status: "Current Active Demand", amountDue: "₹29.6 L", collected: "84%", reraClause: "Section 13(2) - B" },
    { stage: "Completion of Terrace Slab", pct: "15%", status: "Upcoming Q3", amountDue: "₹22.2 L", collected: "0%", reraClause: "Architect Certification Pending" },
    { stage: "Internal Brickwork & Plaster", pct: "15%", status: "Upcoming Q4", amountDue: "₹22.2 L", collected: "0%", reraClause: "Inspection Stage" },
    { stage: "Flooring, Doors & Windows", pct: "15%", status: "Upcoming", amountDue: "₹22.2 L", collected: "0%", reraClause: "Finishing Stage" },
    { stage: "Possession & Handover", pct: "10%", status: "Final Milestone", amountDue: "₹14.8 L", collected: "0%", reraClause: "Occupancy Certificate (OC)" }
  ];

  // Core Capabilities
  const capabilities = [
    {
      id: "inventory-sync",
      title: "Real-Time 3D Digital Inventory Matrix",
      badge: "Zero Double Bookings",
      icon: Building2,
      color: "#0284c7",
      bgLight: "#f0f9ff",
      border: "#bae6fd",
      desc: "Interactive 2D/3D floorplans and unit matrices accessible to all in-house teams and 1,000+ channel partners in real-time. Lock units, collect digital tokens, and update status in sub-seconds.",
      bullets: [
        "Live colour-coded inventory grid (Available, Token, Hold, Booked, Sold)",
        "Instant blocking with automated 24-hour expiration token timers",
        "Automated cost-sheet generator with PLC, floor rise, parking, and GST",
        "Deep integration with RERA carpet area and super built-up calculations"
      ],
      stat: "0.1s",
      statLabel: "Live Inventory Latency"
    },
    {
      id: "portal-leads",
      title: "Omnichannel Lead Ingestion & Telephony",
      badge: "4x Faster Response",
      icon: Smartphone,
      color: "#059669",
      bgLight: "#ecfdf5",
      border: "#a7f3d0",
      desc: "Direct webhook pipelines for 99acres, MagicBricks, Housing.com, Meta Ads, and Google Ads. Integrated cloud telephony with click-to-call, call recording, and AI lead scoring.",
      bullets: [
        "Instant round-robin & rule-based lead assignment to site managers",
        "Cloud telephony with zero SIM-card leakage & mandatory recording",
        "Auto-WhatsApp brochure broadcasting within 5 seconds of lead arrival",
        "Duplicate lead detector & lifetime attribution mapping across brokers"
      ],
      stat: "42s",
      statLabel: "Avg First Response Time"
    },
    {
      id: "site-visits",
      title: "Site Visit Planner & Smart Cab Dispatch",
      badge: "68% Visit Turnout",
      icon: MapPin,
      color: "#d97706",
      bgLight: "#fffbeb",
      border: "#fde68a",
      desc: "Turn passive leads into physical walkthroughs. Automated Ola/Uber/private cab dispatch, automated GPS geo-location WhatsApp drop, and digital visitor gate pass generation.",
      bullets: [
        "Digital site visit scheduling with calendar invites & live Google Map links",
        "Automated WhatsApp pickup reminders with driver details",
        "Tablet-based reception check-in with digital feedback and selfie capture",
        "Sales rep geofenced check-in verification during client walkthroughs"
      ],
      stat: "3.2x",
      statLabel: "Lead to Visit Ratio"
    },
    {
      id: "rera-billing",
      title: "RERA Milestone Demand Letters & Invoicing",
      badge: "100% RERA Compliant",
      icon: Receipt,
      color: "#6366f1",
      bgLight: "#eef2ff",
      border: "#c7d2fe",
      desc: "Automate complex construction milestone billing. Trigger demand notes when the engineer certifies a slab, calculate interest for overdue payments, and reconcile escrow accounts.",
      bullets: [
        "1-click RERA compliant demand letters sent via registered Email & WhatsApp",
        "Dynamic payment gateway (UPI, NEFT, RTGS) with instant payment receipts",
        "Automated interest calculation under RERA guidelines for late payments",
        "Bank NOC and loan disbursement letter management with HDFC, SBI, ICICI"
      ],
      stat: "99.8%",
      statLabel: "Collection Accuracy Rate"
    },
    {
      id: "broker-portal",
      title: "Channel Partner (CP) & Broker Settlement OS",
      badge: "Instant CP Loyalty",
      icon: Users,
      color: "#ec4899",
      bgLight: "#fdf2f8",
      border: "#fbcfe8",
      desc: "Empower your broker ecosystem. Dedicated mobile web app for channel partners to register leads, share branded digital brochures, check live inventory, and track commission milestones.",
      bullets: [
        "Unique QR code broker onboarding with instant RERA certificate upload",
        "Protected 60-day client tag attribution to prevent broker conflict",
        "Transparent commission milestone ledger (Token, Agreement, Disbursement)",
        "Leaderboards, incentive milestone contests, and instant TDS invoices"
      ],
      stat: "₹180Cr+",
      statLabel: "Broker Commission Settled"
    },
    {
      id: "analytics",
      title: "Executive Cockpit & Absorption Velocity",
      badge: "Real-time BI",
      icon: BarChart3,
      color: "#8b5cf6",
      bgLight: "#f5f3ff",
      border: "#ddd6fe",
      desc: "Give leadership total visibility over real-time project health. Monitor cost per site visit, source-wise CAC, tower-wise sales velocity, and projected cashflow receipts.",
      bullets: [
        "Absorption rate forecasts and unsold inventory holding cost tracker",
        "Sales executive performance leaderboards with call-time audits",
        "Ad-spend ROI calculation across 99acres, Meta, and Print campaigns",
        "Multi-project consolidated cashflow balance sheet for developers"
      ],
      stat: "14%",
      statLabel: "Higher Net Realization"
    }
  ];

  // Pricing plans
  const pricingPlans = [
    {
      name: "Broker & Boutique Agency",
      desc: "For real estate agencies and high-performing broker teams managing up to 10 active projects.",
      price: isYearlyPricing ? 2499 : 2999,
      period: "/month",
      billing: isYearlyPricing ? "Billed ₹29,988/yr (Save 20%)" : "Billed monthly",
      badge: null,
      popular: false,
      features: [
        "Up to 10 Active Agent Logins",
        "Omnichannel Lead Sync (99acres & MagicBricks)",
        "Click-to-Call Cloud Telephony Integration",
        "Automated WhatsApp Brochure Broadcaster",
        "Site Visit Tracking & Calendar Manager",
        "Basic Commission Ledger & Invoicing",
        "Email & Chat Support (24h SLA)"
      ],
      cta: "Start 14-Day Free Trial",
      color: "#64748b"
    },
    {
      name: "Developer & Builder Pro",
      desc: "For residential & commercial developers executing 1 to 3 active construction projects.",
      price: isYearlyPricing ? 6999 : 8499,
      period: "/project/mo",
      billing: isYearlyPricing ? "Billed ₹83,988/yr (Save 20%)" : "Billed monthly",
      badge: "MOST POPULAR",
      popular: true,
      features: [
        "Unlimited Agent & Staff Logins",
        "Live 3D Digital Inventory Grid & Cost-Sheet Builder",
        "RERA Milestone Demand Letter Automation",
        "Channel Partner (CP) Dedicated Mobile Portal",
        "Smart Cab Dispatch & Visitor Gate Pass System",
        "Virtual Number Cloud Telephony + Call Recording",
        "Automated GST & Escrow Bank Reconciliation",
        "Dedicated Implementation Engineer & 1-Hr SLA"
      ],
      cta: "Get Started Now",
      color: "#0284c7"
    },
    {
      name: "Enterprise Conglomerate",
      desc: "For national builders, REITs, and multi-city property conglomerates with massive portfolio scales.",
      price: isYearlyPricing ? 14999 : 17999,
      period: "/month",
      billing: isYearlyPricing ? "Billed annually with dedicated SLA" : "Billed monthly",
      badge: "ENTERPRISE GRADE",
      popular: false,
      features: [
        "Unlimited Projects, Towers & Multi-City Locations",
        "Custom SAP, Salesforce & Oracle ERP Connectors",
        "Multi-Tier Approval Matrix for Unit Discounts & Holds",
        "Custom AI WhatsApp Bot for Lead Qualification",
        "Complete Legal Document & Agreement Generator",
        "White-Glove Data Migration & On-Premises Option",
        "Dedicated Key Account Director & 99.99% SLA",
        "RERA Escrow Multi-Bank Host-to-Host Integration"
      ],
      cta: "Talk to Real Estate Solutions Head",
      color: "#6366f1"
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "How does MerlinFlow Real Estate prevent double-booking of units?",
      a: "Our centralized 3D Digital Inventory Matrix uses distributed atomic locking. As soon as a sales executive or channel partner selects a unit and initiates a token transaction, that unit is instantly locked system-wide with a countdown timer. No other user can claim it until the token window concludes or completes."
    },
    {
      q: "Can we automatically capture leads from 99acres, MagicBricks, and Housing.com?",
      a: "Yes! MerlinFlow includes official webhook pipelines and API connectors for 99acres, MagicBricks, Housing.com, Facebook Lead Ads, Google Ads, and your landing pages. Incoming leads are enriched, assigned to available site managers via round-robin within 3 seconds, and immediately sent an automated WhatsApp brochure."
    },
    {
      q: "How does the RERA Construction Milestone billing work?",
      a: "When your project structural engineer certifies that a construction stage (e.g. 5th floor slab) is completed, you simply toggle that milestone in the system. The platform automatically generates individualized RERA-compliant Demand Notes, attaches the engineer certificate, and dispatches them via registered email, SMS, and WhatsApp with embedded UPI/RTGS payment links."
    },
    {
      q: "How does the Channel Partner (CP) Portal help our external brokers?",
      a: "Brokers receive their own dedicated, branded mobile web link where they can register prospective buyers, see real-time inventory availability without calling your sales team, download customized brochures stamped with their contact details, and track their commission payout milestones transparently."
    },
    {
      q: "Does it support cloud telephony and call recording for compliance?",
      a: "Yes. We integrate with major cloud telephony providers (Exotel, MCube, Tata Tele). Executives can place calls directly from the CRM with single click, incoming calls are masked to prevent client phone number theft, and 100% of calls are recorded for quality audit and sales training."
    }
  ];

  // Calculate estimated ROI boost
  const estimatedVisits = Math.round(monthlyLeads * 0.18);
  const estimatedDeals = Math.round(estimatedVisits * (conversionBoostPct / 100));
  const estimatedPipelineValueCr = ((estimatedDeals * ticketPriceLakhs) / 100).toFixed(2);
  const extraRevenueLakhs = Math.round(estimatedDeals * (ticketPriceLakhs * 0.12));

  return (
    <div className="proptech-page" style={{ paddingTop: "9.5rem" }}>
      {/* Background Glows & Ambient Orbs */}
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
            <Sparkles size={16} color="#0284c7" />
            <span>PROPTECH 2.0 • BUILT FOR INDIAN BUILDERS & BROKERS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title"
          >
            The Operating System for <br />
            <span className="text-gradient">Real Estate Developers & CRMs</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle"
          >
            Unify real-time 3D unit inventory, automated portal lead routing (99acres, MagicBricks, Meta Ads), WhatsApp site-visit booking, and milestone-linked RERA billing into one high-velocity command center.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-actions"
          >
            <a href="#demo-sandbox" className="btn-primary">
              <Key size={18} /> Launch Live Inventory Matrix
            </a>
            <a href="#contact" className="btn-secondary">
              <Phone size={18} /> Book Live Builder Walkthrough
            </a>
          </motion.div>

          {/* Key Stat Cards */}
          <div className="stats-strip">
            <div className="stat-card">
              <div className="stat-number">42%</div>
              <div className="stat-desc">Faster Inventory Velocity</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-desc">RERA Milestone Compliance</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3.2x</div>
              <div className="stat-desc">Lead-to-Site Visit Turnout</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">₹3,200Cr+</div>
              <div className="stat-desc">Real Estate GMV Managed</div>
            </div>
          </div>
        </section>

        {/* Live Interactive Command Center Preview */}
        <section id="demo-sandbox" className="sandbox-section">
          <div className="sandbox-header">
            <div className="badge-small">Interactive Sandbox</div>
            <h2 className="section-title">Explore the Real Estate Command Center</h2>
            <p className="section-subtitle">
              Experience how your sales directors, site executives, and accounting teams manage multi-tower projects with zero friction.
            </p>

            {/* Sandbox Tabs */}
            <div className="sandbox-tabs">
              <button 
                onClick={() => setActiveTab("inventory")}
                className={`sandbox-tab ${activeTab === "inventory" ? "active" : ""}`}
              >
                <Building2 size={18} /> 3D Inventory Matrix
              </button>
              <button 
                onClick={() => setActiveTab("leads")}
                className={`sandbox-tab ${activeTab === "leads" ? "active" : ""}`}
              >
                <Users size={18} /> Multi-Portal Lead Routing
              </button>
              <button 
                onClick={() => setActiveTab("sitevisits")}
                className={`sandbox-tab ${activeTab === "sitevisits" ? "active" : ""}`}
              >
                <MapPin size={18} /> Site Visit & Cab Scheduler
              </button>
              <button 
                onClick={() => setActiveTab("rera")}
                className={`sandbox-tab ${activeTab === "rera" ? "active" : ""}`}
              >
                <Receipt size={18} /> RERA Milestone Billing
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
                <Shield size={14} color="#0284c7" />
                MerlinFlow PropTech OS • Live Project Workspace (RERA Reg: P02400004921)
              </div>
              <div className="window-status">
                <span className="status-indicator live" />
                <span>Connected • 1,240 Units Live</span>
              </div>
            </div>

            <div className="sandbox-content">
              {/* TAB 1: 3D INVENTORY MATRIX */}
              {activeTab === "inventory" && (
                <div className="inventory-view">
                  <div className="inventory-toolbar">
                    <div className="project-select-group">
                      <label>Active Project & Tower:</label>
                      <select 
                        value={selectedTower} 
                        onChange={(e) => setSelectedTower(e.target.value)}
                        className="custom-select"
                      >
                        <option value="Tower A - Sapphire">Tower A - Sapphire (G+14 Floors • 3 & 4 BHK)</option>
                        <option value="Tower B - Emerald">Tower B - Emerald (G+12 Floors • 2 & 3 BHK)</option>
                        <option value="Greenwood Villas">Greenwood Villas (Phase 1 • 4 BHK Luxury)</option>
                        <option value="All Projects">All Projects Portfolio</option>
                      </select>
                    </div>

                    <div className="status-filters">
                      <span className="filter-label">Status:</span>
                      {["all", "available", "booked", "token-paid", "hold"].map(statusKey => (
                        <button
                          key={statusKey}
                          onClick={() => setSelectedStatusFilter(statusKey)}
                          className={`filter-btn ${selectedStatusFilter === statusKey ? "active" : ""} ${statusKey}`}
                        >
                          {statusKey.replace("-", " ").toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Units Grid */}
                  <div className="units-grid">
                    {filteredUnits.map((unit) => {
                      const isSelected = selectedUnit?.id === unit.id;
                      return (
                        <div 
                          key={unit.id}
                          onClick={() => setSelectedUnit(unit)}
                          className={`unit-card ${unit.status.toLowerCase().replace(" ", "-")} ${isSelected ? "selected" : ""}`}
                        >
                          <div className="unit-card-header">
                            <span className="unit-number">{unit.id}</span>
                            <span className={`unit-status-pill ${unit.status.toLowerCase().replace(" ", "-")}`}>
                              {unit.status}
                            </span>
                          </div>
                          <div className="unit-type">{unit.type}</div>
                          <div className="unit-meta">
                            <span>📐 {unit.area}</span>
                            <span>🧭 {unit.facing}</span>
                          </div>
                          <div className="unit-card-footer">
                            <div className="unit-price">{unit.price}</div>
                            <span className="tap-hint">View Cost Sheet &rarr;</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Selected Unit Deep Detail Card */}
                  {selectedUnit && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="selected-unit-modal"
                    >
                      <div className="modal-header">
                        <div>
                          <h3>Unit {selectedUnit.id} — {selectedUnit.type}</h3>
                          <p>{selectedUnit.tower} • {selectedUnit.floor} • RERA No: {selectedUnit.reraId}</p>
                        </div>
                        <button onClick={() => setSelectedUnit(null)} className="close-btn"><X size={18} /></button>
                      </div>

                      <div className="cost-breakdown-grid">
                        <div className="cost-item">
                          <span>Super Built-up Area</span>
                          <strong>{selectedUnit.area}</strong>
                        </div>
                        <div className="cost-item">
                          <span>Base Unit Price</span>
                          <strong>{selectedUnit.price}</strong>
                        </div>
                        <div className="cost-item">
                          <span>Parking Allocation</span>
                          <strong>{selectedUnit.parking}</strong>
                        </div>
                        <div className="cost-item">
                          <span>Facing & View</span>
                          <strong>{selectedUnit.facing}</strong>
                        </div>
                      </div>

                      <div className="modal-actions">
                        <button 
                          className="btn-modal-action token"
                          onClick={() => alert(`Initiating Digital Token collection of ₹1,00,000 for Unit ${selectedUnit.id}`)}
                        >
                          <CreditCard size={16} /> Collect Token (₹1,00,000)
                        </button>
                        <button 
                          className="btn-modal-action hold"
                          onClick={() => alert(`Unit ${selectedUnit.id} placed on 24-Hour Manager Hold.`)}
                        >
                          <Clock size={16} /> Place 24h Hold
                        </button>
                        <button 
                          className="btn-modal-action share"
                          onClick={() => alert(`Instant PDF Cost Sheet generated and dispatched via WhatsApp.`)}
                        >
                          <Share2 size={16} /> WhatsApp Cost Sheet
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* TAB 2: MULTI-PORTAL LEADS */}
              {activeTab === "leads" && (
                <div className="leads-view">
                  <div className="leads-stats-row">
                    <div className="lead-stat-badge">
                      <span className="label">Total Leads Today:</span>
                      <span className="value">48 Inbound</span>
                    </div>
                    <div className="lead-stat-badge">
                      <span className="label">MagicBricks API:</span>
                      <span className="value success">Live Webhook (0s lag)</span>
                    </div>
                    <div className="lead-stat-badge">
                      <span className="label">99acres Webhook:</span>
                      <span className="value success">Active</span>
                    </div>
                    <div className="lead-stat-badge">
                      <span className="label">Meta Lead Gen:</span>
                      <span className="value success">Connected</span>
                    </div>
                  </div>

                  <div className="leads-table-container">
                    <table className="leads-table">
                      <thead>
                        <tr>
                          <th>Lead Name & ID</th>
                          <th>Portal Source</th>
                          <th>Project & BHK</th>
                          <th>Budget Range</th>
                          <th>Assigned Executive</th>
                          <th>Lead Score</th>
                          <th>Status / Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {liveLeads.map((lead) => (
                          <tr key={lead.id}>
                            <td>
                              <strong>{lead.name}</strong>
                              <div className="lead-id-sub">{lead.id} • {lead.time}</div>
                            </td>
                            <td>
                              <span className="source-tag">{lead.source}</span>
                            </td>
                            <td>
                              <div>{lead.project}</div>
                              <span className="bhk-tag">{lead.bhk}</span>
                            </td>
                            <td className="lead-budget">{lead.budget}</td>
                            <td>
                              <div className="agent-badge">
                                <Users size={14} /> {lead.agent}
                              </div>
                            </td>
                            <td>
                              <span className={`score-badge ${lead.score.includes("9") ? "hot" : "warm"}`}>
                                {lead.score}
                              </span>
                            </td>
                            <td>
                              <button 
                                className="action-pill-btn"
                                onClick={() => alert(`Opening Call & WhatsApp dialer for ${lead.name}`)}
                              >
                                <Phone size={14} /> {lead.status}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: SITE VISITS */}
              {activeTab === "sitevisits" && (
                <div className="sitevisits-view">
                  <div className="sitevisits-grid">
                    <div className="sitevisit-card active">
                      <div className="sv-header">
                        <span className="sv-time">11:30 AM Today</span>
                        <span className="sv-badge in-transit">Cab In-Transit</span>
                      </div>
                      <h4>Dr. Shalini Deshmukh</h4>
                      <p className="sv-details">Visiting: Greenwood Villas (Plot 07) • 4 BHK Villa</p>
                      <div className="sv-cab-info">
                        <span>🚖 Uber Premier (KA-03-AB-4921)</span>
                        <span>Driver: Suresh Kumar (+91 98451 23412)</span>
                      </div>
                      <div className="sv-actions">
                        <button className="btn-sv whatsapp"><MessageSquare size={14} /> WhatsApp Gate Pass</button>
                        <button className="btn-sv location"><MapPin size={14} /> Track Cab GPS</button>
                      </div>
                    </div>

                    <div className="sitevisit-card">
                      <div className="sv-header">
                        <span className="sv-time">02:00 PM Today</span>
                        <span className="sv-badge confirmed">Confirmed Walkthrough</span>
                      </div>
                      <h4>Vikram Singhania</h4>
                      <p className="sv-details">Visiting: Tower A - Sapphire • Unit 1201 (Sky Villa)</p>
                      <div className="sv-cab-info">
                        <span>🚗 Self Drive • Parking Bay P2 Reserved</span>
                        <span>Site Rep: Rahul Verma (+91 83743 73753)</span>
                      </div>
                      <div className="sv-actions">
                        <button className="btn-sv whatsapp"><MessageSquare size={14} /> Send Location Pin</button>
                        <button className="btn-sv checklist"><CheckCircle2 size={14} /> Prepare 3D VR Tour</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: RERA MILESTONES */}
              {activeTab === "rera" && (
                <div className="rera-view">
                  <div className="rera-top-banner">
                    <div>
                      <h4>Tower A - Sapphire Construction Payment Schedule</h4>
                      <p>Total Project Units: 120 • RERA Registered Construction Escrow Account</p>
                    </div>
                    <button 
                      className="btn-demand-all"
                      onClick={() => alert("Batch Demand Notes generated for all 5th floor slab buyers.")}
                    >
                      <Receipt size={16} /> Trigger 5th Slab Demand Letters
                    </button>
                  </div>

                  <div className="milestones-table-wrapper">
                    <table className="milestones-table">
                      <thead>
                        <tr>
                          <th>Construction Stage</th>
                          <th>Payment %</th>
                          <th>Avg Demand / Unit</th>
                          <th>Collection Status</th>
                          <th>RERA Section Compliance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {milestoneSlabs.map((slab, i) => (
                          <tr key={i} className={slab.status.includes("Active") ? "active-row" : ""}>
                            <td>
                              <strong>{slab.stage}</strong>
                              <div className="slab-status-tag">{slab.status}</div>
                            </td>
                            <td><span className="pct-badge">{slab.pct}</span></td>
                            <td>{slab.amountDue}</td>
                            <td>
                              <div className="progress-bar-container">
                                <div className="progress-bar-fill" style={{ width: slab.collected }} />
                                <span>{slab.collected} Collected</span>
                              </div>
                            </td>
                            <td><code>{slab.reraClause}</code></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="capabilities-section">
          <div className="section-header">
            <div className="badge-small">Architected For Growth</div>
            <h2 className="section-title">Built for Modern High-Velocity PropTech</h2>
            <p className="section-subtitle">
              From lead ingestion to handover, every module is designed to accelerate absorption and eliminate lost revenue.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((cap, idx) => {
              const IconComponent = cap.icon || Building2;
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

        {/* Live Client Deployments in PropTech */}
        <section className="product-deployments-section">
          <div className="section-header">
            <div className="badge-small">Live Production Deployments</div>
            <h2 className="section-title">Proven Real Estate & PropTech Systems</h2>
            <p className="section-subtitle">
              See how prominent real estate builders and digital performance growth engines run on MerlinFlow architectures.
            </p>
          </div>

          <div className="product-deployments-grid">
            {/* Project 1: Nest Infra CRM */}
            <div className="prop-deployment-card">
              <div className="p-dep-top">
                <span className="p-dep-tag">Real Estate CRM Model</span>
                <span className="p-dep-badge">Live Enterprise</span>
              </div>
              <h3 className="p-dep-title">Nest Infra Developers — Real Estate CRM & Sales Automation</h3>
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

            {/* Project 2: HimasTech */}
            <div className="prop-deployment-card">
              <div className="p-dep-top">
                <span className="p-dep-tag">Marketing & PropTech</span>
                <span className="p-dep-badge">Live System</span>
              </div>
              <h3 className="p-dep-title">HimasTech — Performance Marketing & Enterprise PropTech Synergy</h3>
              <div className="p-dep-meta">
                <strong>HimasTech</strong> • <span className="p-domain">himastech.com</span> • India & Global
              </div>
              <p className="p-dep-desc">
                Generative AI Search Optimization (GEO) architecture, algorithmic media buying funnels, digital training academy, and seamless synergy with MerlinFlow Enterprise Software.
              </p>
              <div className="p-dep-metrics">
                <div className="p-metric">
                  <span className="val">4.8x Avg</span>
                  <span className="lbl">Client ROAS</span>
                </div>
                <div className="p-metric">
                  <span className="val">-48%</span>
                  <span className="lbl">CAC Reduction</span>
                </div>
                <div className="p-metric">
                  <span className="val">1,200+</span>
                  <span className="lbl">Trained Marketers</span>
                </div>
              </div>
              <a 
                href="https://himastech.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-dep-btn"
              >
                <span>Visit Live Platform (himastech.com)</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* PropTech ROI & Sales Velocity Calculator */}
        <section className="calculator-section glass-panel">
          <div className="calc-header">
            <div className="badge-small">Interactive Financial Model</div>
            <h2 className="section-title">Calculate Your Sales Velocity & Revenue Uplift</h2>
            <p className="section-subtitle">
              See how accelerating lead response and eliminating inventory drop-offs directly translates to higher bottom-line realization.
            </p>
          </div>

          <div className="calc-body">
            <div className="calc-controls">
              <div className="control-group">
                <div className="control-label">
                  <span>Monthly Inbound Portal Leads:</span>
                  <strong>{monthlyLeads.toLocaleString()} Leads</strong>
                </div>
                <input 
                  type="range" 
                  min="200" 
                  max="5000" 
                  step="100"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>

              <div className="control-group">
                <div className="control-label">
                  <span>Average Property Ticket Size:</span>
                  <strong>₹{ticketPriceLakhs} Lakhs</strong>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="500" 
                  step="5"
                  value={ticketPriceLakhs}
                  onChange={(e) => setTicketPriceLakhs(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>

              <div className="control-group">
                <div className="control-label">
                  <span>Site Visit Conversion Boost:</span>
                  <strong>+{conversionBoostPct}% Boost</strong>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  step="5"
                  value={conversionBoostPct}
                  onChange={(e) => setConversionBoostPct(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>
            </div>

            <div className="calc-results-card">
              <h3>Projected Annual PropTech Gains</h3>
              
              <div className="calc-metrics">
                <div className="metric-box">
                  <span className="metric-title">Estimated Site Visits / Mo</span>
                  <span className="metric-val">{estimatedVisits} Visits</span>
                </div>
                <div className="metric-box">
                  <span className="metric-title">Projected Annual Unit Bookings</span>
                  <span className="metric-val highlight">{estimatedDeals * 12} Units</span>
                </div>
                <div className="metric-box">
                  <span className="metric-title">Annual Gross Booking Value</span>
                  <span className="metric-val">₹{(estimatedPipelineValueCr * 12).toFixed(1)} Cr</span>
                </div>
                <div className="metric-box">
                  <span className="metric-title">Projected Annual Profit Uplift</span>
                  <span className="metric-val green">+₹{(extraRevenueLakhs * 12 / 100).toFixed(2)} Cr</span>
                </div>
              </div>

              <a href="#contact" className="calc-cta-btn">
                <Sparkles size={18} /> Schedule Strategy Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Transparent Pricing Plans */}
        <section className="pricing-section">
          <div className="section-header">
            <div className="badge-small">Transparent Pricing</div>
            <h2 className="section-title">Transparent Plans for Builders & Brokerages</h2>
            <p className="section-subtitle">
              Priced in Indian Rupees to scale with your project launches. No hidden per-lead charges.
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
                      <Check size={16} color="#0284c7" />
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
        .proptech-page {
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
          background: #0284c7;
          top: 5%;
          left: -200px;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: #059669;
          top: 35%;
          right: -150px;
        }

        .orb-3 {
          width: 550px;
          height: 550px;
          background: #6366f1;
          top: 70%;
          left: 20%;
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
          background: rgba(2, 132, 199, 0.12);
          border: 1px solid rgba(2, 132, 199, 0.35);
          color: #0284c7;
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
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 40%, #0d9488 100%);
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
          background: linear-gradient(135deg, #0284c7, #0369a1);
          color: #ffffff;
          padding: 0.9rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(2, 132, 199, 0.45);
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
          border-color: #0284c7;
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
          border: 1px solid rgba(2, 132, 199, 0.25);
          padding: 1.5rem 1rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .stats-strip .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.15);
        }

        .stats-strip .stat-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0284c7;
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
          color: #0284c7;
          background: rgba(2, 132, 199, 0.1);
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
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
          box-shadow: 0 4px 15px rgba(2, 132, 199, 0.35);
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

        /* Inventory View */
        .inventory-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .project-select-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .custom-select {
          background: var(--bg-alpha-light);
          color: var(--text-color);
          border: 1px solid var(--glass-border);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          outline: none;
        }

        .status-filters {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .filter-btn {
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-btn.active {
          background: #0284c7;
          color: white;
          border-color: #0284c7;
        }

        .units-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .unit-card {
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

        .unit-card:hover {
          transform: translateY(-3px);
          border-color: #0284c7;
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.15);
        }

        .unit-card.selected {
          border-color: #0284c7;
          background: rgba(2, 132, 199, 0.08);
          box-shadow: 0 0 0 2px #0284c7;
        }

        .unit-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .unit-number {
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--text-color);
        }

        .unit-status-pill {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 20px;
          text-transform: uppercase;
        }

        .unit-status-pill.available { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .unit-status-pill.booked { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
        .unit-status-pill.token-paid { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
        .unit-status-pill.hold { background: rgba(139, 92, 246, 0.15); color: #8b5cf6; }

        .unit-type {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-color);
        }

        .unit-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .unit-card-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.75rem;
          border-top: 1px solid var(--glass-border);
        }

        .unit-price {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0284c7;
        }

        .tap-hint {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .selected-unit-modal {
          background: var(--bg-alpha-hover);
          border: 1px solid #0284c7;
          border-radius: 16px;
          padding: 1.5rem;
          margin-top: 1.5rem;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .modal-header h3 {
          margin: 0 0 0.3rem 0;
          font-size: 1.25rem;
          color: var(--text-color);
        }

        .modal-header p {
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

        .cost-breakdown-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
          background: var(--bg-alpha-light);
          padding: 1rem;
          border-radius: 10px;
        }

        .cost-item span {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .cost-item strong {
          font-size: 1rem;
          color: var(--text-color);
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-modal-action {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          border: none;
          transition: transform 0.2s;
        }

        .btn-modal-action.token { background: #10b981; color: white; }
        .btn-modal-action.hold { background: #8b5cf6; color: white; }
        .btn-modal-action.share { background: #0284c7; color: white; }

        /* Leads View Table */
        .leads-stats-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .lead-stat-badge {
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          display: flex;
          gap: 0.5rem;
        }

        .lead-stat-badge .label { color: var(--text-muted); }
        .lead-stat-badge .value { font-weight: 700; color: var(--text-color); }
        .lead-stat-badge .value.success { color: #10b981; }

        .leads-table-container {
          overflow-x: auto;
        }

        .leads-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          text-align: left;
        }

        .leads-table th {
          padding: 0.85rem 1rem;
          border-bottom: 2px solid var(--glass-border);
          color: var(--text-muted);
          font-weight: 600;
        }

        .leads-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--glass-border);
          color: var(--text-color);
        }

        .lead-id-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .source-tag {
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .bhk-tag {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .lead-budget {
          font-weight: 700;
          color: #0284c7;
        }

        .agent-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
        }

        .score-badge {
          padding: 0.25rem 0.6rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .score-badge.hot { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
        .score-badge.warm { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }

        .action-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(2, 132, 199, 0.12);
          color: #0284c7;
          border: 1px solid rgba(2, 132, 199, 0.3);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
        }

        /* Site Visits View */
        .sitevisits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .sitevisit-card {
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          padding: 1.5rem;
        }

        .sitevisit-card.active {
          border-color: #0284c7;
          box-shadow: 0 10px 30px rgba(2, 132, 199, 0.1);
        }

        .sv-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .sv-time {
          font-weight: 700;
          font-size: 0.9rem;
          color: #0284c7;
        }

        .sv-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 20px;
        }
        .sv-badge.in-transit { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .sv-badge.confirmed { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }

        .sitevisit-card h4 {
          font-size: 1.2rem;
          margin: 0 0 0.3rem 0;
          color: var(--text-color);
        }

        .sv-details {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .sv-cab-info {
          background: var(--bg-alpha-hover);
          padding: 0.85rem;
          border-radius: 8px;
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          color: var(--text-color);
          margin-bottom: 1.25rem;
        }

        .sv-actions {
          display: flex;
          gap: 0.75rem;
        }

        .btn-sv {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.6rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid var(--glass-border);
          background: var(--bg-alpha-light);
          color: var(--text-color);
        }

        .btn-sv.whatsapp { background: #25d366; color: white; border: none; }
        .btn-sv.location { border-color: #0284c7; color: #0284c7; }

        /* RERA Milestone Billing */
        .rera-top-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .rera-top-banner h4 {
          margin: 0 0 0.3rem 0;
          font-size: 1.2rem;
          color: var(--text-color);
        }

        .rera-top-banner p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .btn-demand-all {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #0284c7;
          color: white;
          padding: 0.65rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
        }

        .milestones-table-wrapper {
          overflow-x: auto;
        }

        .milestones-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          text-align: left;
        }

        .milestones-table th {
          padding: 0.85rem 1rem;
          border-bottom: 2px solid var(--glass-border);
          color: var(--text-muted);
        }

        .milestones-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--glass-border);
          color: var(--text-color);
        }

        .milestones-table tr.active-row {
          background: rgba(2, 132, 199, 0.05);
        }

        .slab-status-tag {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .pct-badge {
          background: rgba(2, 132, 199, 0.12);
          color: #0284c7;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-weight: 700;
        }

        .progress-bar-container {
          width: 140px;
          background: var(--bg-alpha-hover);
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.3rem;
          position: relative;
        }

        .progress-bar-fill {
          height: 100%;
          background: #10b981;
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
          color: #0284c7;
          font-size: 1.1rem;
        }

        .calc-slider {
          width: 100%;
          accent-color: #0284c7;
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

        .metric-val.highlight { color: #0284c7; }
        .metric-val.green { color: #10b981; }

        .calc-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          justify-content: center;
          background: #0284c7;
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
          background: #0284c7;
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
          border-color: #0284c7;
          box-shadow: 0 15px 40px rgba(2, 132, 199, 0.2);
        }

        .popular-ribbon {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #0284c7;
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
          background: #0284c7;
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
          color: #0284c7;
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
          border-color: #0284c7;
          box-shadow: 0 10px 30px rgba(2, 132, 199, 0.1);
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
          color: #0284c7;
          background: rgba(2, 132, 199, 0.08);
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
          color: #0284c7;
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
          color: #0284c7;
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
          background: #0284c7;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 3px 10px rgba(2, 132, 199, 0.18);
          margin-top: auto;
        }

        .p-dep-btn:hover {
          background: #0369a1;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .stats-strip { grid-template-columns: repeat(2, 1fr); }
          .units-grid { grid-template-columns: repeat(2, 1fr); }
          .capabilities-grid { grid-template-columns: 1fr; }
          .product-deployments-grid { grid-template-columns: 1fr; }
          .calc-body { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .sitevisits-grid { grid-template-columns: 1fr; }
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

          .inventory-toolbar {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
          }

          .project-select-group {
            flex-direction: column;
            align-items: stretch;
            gap: 0.35rem;
          }

          .custom-select {
            width: 100%;
          }

          .status-filters {
            width: 100%;
            gap: 0.35rem;
          }

          .filter-btn {
            padding: 0.35rem 0.65rem;
            font-size: 0.72rem;
          }

          .units-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }

          .selected-unit-modal {
            padding: 1rem;
            border-radius: 12px;
            margin-top: 1rem;
          }

          .cost-breakdown-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem;
            padding: 0.75rem;
          }

          .modal-actions {
            flex-direction: column;
            gap: 0.5rem;
          }

          .btn-modal-action {
            width: 100%;
            justify-content: center;
          }

          .leads-stats-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }

          .lead-stat-badge {
            padding: 0.5rem 0.65rem;
            font-size: 0.78rem;
            flex-direction: column;
            gap: 0.2rem;
          }

          .leads-table-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin: 0 -0.85rem;
            padding: 0 0.85rem;
          }

          .leads-table {
            min-width: 580px;
            font-size: 0.82rem;
          }

          .leads-table th, .leads-table td {
            padding: 0.65rem 0.75rem;
          }

          .sitevisits-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .sitevisit-card {
            padding: 1rem;
          }

          .sv-actions {
            flex-direction: column;
            gap: 0.5rem;
          }

          .btn-sv {
            width: 100%;
          }

          .rera-top-banner {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }

          .btn-demand-all {
            width: 100%;
            justify-content: center;
          }

          .milestones-table-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin: 0 -0.85rem;
            padding: 0 0.85rem;
          }

          .milestones-table {
            min-width: 520px;
            font-size: 0.82rem;
          }

          .milestones-table th, .milestones-table td {
            padding: 0.65rem 0.75rem;
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

          .cost-breakdown-grid {
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
