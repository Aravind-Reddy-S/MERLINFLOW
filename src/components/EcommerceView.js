"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, Truck, Zap, Package, RefreshCw, 
  CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, Users, 
  CreditCard, Sparkles, Smartphone, BarChart3, 
  Database, Lock, AlertCircle, Receipt, Award, 
  Layers, ChevronDown, Check, Star, Quote, Phone, 
  HelpCircle, Sliders, Calculator, X, Globe, 
  ArrowLeft, ArrowUpRight, Box, MessageSquare, 
  Clock, Flame, Send, CheckCheck, MapPin, Search,
  Compass, Radio, Cpu, Share2, Tag, Shield, ExternalLink
} from "lucide-react";
import Link from "next/link";
import ContactSection from "./ContactSection";

export default function EcommerceView() {
  const [activeNav, setActiveNav] = useState("overview");
  const [activeTab, setActiveTab] = useState("feed"); // feed, logistics, inventory, funnel
  const [monthlyOrders, setMonthlyOrders] = useState(2500);
  const [avgOrderValue, setAvgOrderValue] = useState(1200);
  const [isYearlyPricing, setIsYearlyPricing] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Live order simulation data
  const liveOrders = [
    { id: "ORD-9284", customer: "Ananya Sharma", city: "Bengaluru, KA", items: "Silk Floral Kurti (M)", amount: "₹1,899", status: "Delivered", courier: "BlueDart", time: "2 min ago", type: "Prepaid UPI" },
    { id: "ORD-9283", customer: "Rohan Varma", city: "Mumbai, MH", items: "Wireless ANC Earbuds v2", amount: "₹2,499", status: "In Transit", courier: "Delhivery", time: "5 min ago", type: "Prepaid Card" },
    { id: "ORD-9282", customer: "Pooja Hegde", city: "Hyderabad, TS", items: "Vitamin C Glow Serum (50ml)", amount: "₹849", status: "AWB Generated", courier: "DTDC", time: "11 min ago", type: "COD Verified" },
    { id: "ORD-9281", customer: "Karan Patel", city: "Ahmedabad, GJ", items: "Oversized Vintage Hoodie", amount: "₹1,599", status: "Dispatched", courier: "XpressBees", time: "18 min ago", type: "Prepaid UPI" },
    { id: "ORD-9280", customer: "Sneha Mukherjee", city: "Kolkata, WB", items: "Ceramic Artisan Coffee Mug Set", amount: "₹1,150", status: "Delivered", courier: "BlueDart", time: "24 min ago", type: "Prepaid NetBanking" }
  ];

  // Core capabilities
  const capabilities = [
    {
      id: "checkout",
      title: "1-Click Accelerated Checkout",
      badge: "40% Less Drop-offs",
      color: "#3b82f6",
      bgLight: "#eff6ff",
      border: "#bfdbfe",
      desc: "Zero-friction checkout with OTP phone login, pre-filled address network across 10M+ Indian shoppers, and lightning fast 1-tap payment.",
      bullets: [
        "Prefilled shipping addresses for instant purchases",
        "WhatsApp OTP login without password friction",
        "Automated UPI intent & QR payment invocation",
        "Smart address autocomplete with pin-code validation"
      ],
      stat: "62%",
      statLabel: "Mobile Checkout Conversion"
    },
    {
      id: "logistics",
      title: "Shiprocket & NDR Automation",
      badge: "35% RTO Reduction",
      color: "#8b5cf6",
      bgLight: "#f5f3ff",
      border: "#ddd6fe",
      desc: "Deep two-way Shiprocket sync. Automated courier allocation (BlueDart, Delhivery, DTDC), automated AWB creation, and proactive WhatsApp NDR defense.",
      bullets: [
        "Smart courier routing based on SLA & pin-code performance",
        "Automated WhatsApp bot for re-attempt delivery scheduling",
        "Real-time COD order verification to filter fake orders",
        "Unified multi-courier tracking portal with your branding"
      ],
      stat: "5.2%",
      statLabel: "Lowest Industry RTO Rate"
    },
    {
      id: "inventory",
      title: "Omnichannel Multi-Store Sync",
      badge: "Real-Time Sync",
      color: "#10b981",
      bgLight: "#ecfdf5",
      border: "#a7f3d0",
      desc: "Single source of inventory truth. Automatically synchronizes real-time stock levels across your D2C store, Amazon, Flipkart, and offline warehouses.",
      bullets: [
        "Instant stock deduction across all sales channels",
        "Predictive low-stock warnings before stock-outs occur",
        "Multi-warehouse routing to fulfill from nearest hub",
        "Bulk CSV import/export & SKU barcode scanning"
      ],
      stat: "0.2s",
      statLabel: "Catalog Sync Latency"
    },
    {
      id: "whatsapp",
      title: "WhatsApp AI Bot & Retargeting",
      badge: "7.8x ROI",
      color: "#f59e0b",
      bgLight: "#fffbeb",
      border: "#fde68a",
      desc: "Automate high-converting customer conversations. Send instant order updates, abandoned cart recovery nudges, and convert COD orders to prepaid.",
      bullets: [
        "Automated abandoned cart WhatsApp recovery with custom discounts",
        "Live interactive order tracking with map links",
        "One-click COD to Prepaid conversion incentives",
        "Post-delivery feedback & 5-star review collection"
      ],
      stat: "28%",
      statLabel: "Abandoned Cart Recovery Rate"
    }
  ];

  // Industry Verticals
  const industries = [
    {
      name: "Fashion & Apparel",
      tagline: "Size charts, exchange management & quick drops",
      desc: "Handle flash sale surges effortlessly with sub-second page loads, automated variant exchange workflows, and WhatsApp size guidance.",
      metrics: ["4.2x Faster Flash Sales", "48% Lower Return Rate", "1-Click Exchange Portal"]
    },
    {
      name: "Beauty & Personal Care",
      tagline: "High repeat purchases, bundles & subscription boxes",
      desc: "Drive subscription recurring orders, custom skincare routine bundles, and proactive WhatsApp replenishment alerts based on consumption cycles.",
      metrics: ["32% Higher LTV", "Automated Refill Reminders", "Custom Kit Builder"]
    },
    {
      name: "Electronics & Accessories",
      tagline: "High AOV, serial tracking & warranty registration",
      desc: "Protect margins on high-value items with mandatory OTP delivery verification, serial number tracking, and automated digital warranty registration.",
      metrics: ["Zero Fake NDR Claims", "Serial Number Barcoding", "Instant GST Invoicing"]
    },
    {
      name: "Food, Gourmet & Health",
      tagline: "Batch expiry tracking, cold chain & rapid dispatch",
      desc: "Ensure fast shelf-life management with FEFO (First-Expired-First-Out) warehouse routing, priority courier dispatch, and temperature zone logistics.",
      metrics: ["FEFO Batch Picking", "48-Hour Metro Delivery", "Automated Expiry Alerts"]
    }
  ];

  // ROI calculations
  const rtoLossSaved = Math.round((monthlyOrders * 0.22 * 180) * 0.45);
  const conversionLiftValue = Math.round((monthlyOrders * 0.18 * avgOrderValue));
  const shippingSavings = Math.round((monthlyOrders * 22));
  const totalAnnualBenefit = ((rtoLossSaved + conversionLiftValue + shippingSavings) * 12);

  // Pricing plans
  const pricingPlans = [
    {
      name: "Starter Brand",
      desc: "For new D2C brands processing up to 1,000 orders/month looking to automate checkout and basic logistics.",
      price: isYearlyPricing ? 1599 : 1999,
      period: "/month",
      billing: isYearlyPricing ? "Billed ₹19,188/yr (Save 20%)" : "Billed monthly",
      badge: null,
      popular: false,
      features: [
        "Up to 1,000 orders / month",
        "1-Click Accelerated Checkout",
        "Shiprocket Direct API Integration",
        "Basic WhatsApp Order Alerts",
        "Real-time Inventory Sync (1 Store)",
        "Standard GST Invoicing",
        "Email & Chat Support (24h SLA)"
      ],
      cta: "Start 14-Day Free Trial",
      color: "#64748b"
    },
    {
      name: "Scale-Up D2C",
      desc: "For established e-commerce brands needing full NDR automation, WhatsApp bots, and multi-channel synchronization.",
      price: isYearlyPricing ? 3999 : 4999,
      period: "/month",
      billing: isYearlyPricing ? "Billed ₹47,988/yr (Save 20%)" : "Billed monthly",
      badge: "MOST POPULAR",
      popular: true,
      features: [
        "Up to 10,000 orders / month",
        "Everything in Starter, plus:",
        "Full WhatsApp NDR Defense & Re-attempt Bot",
        "Automated COD-to-Prepaid Conversion",
        "Multi-Courier Allocation (BlueDart, Delhivery, etc.)",
        "Omnichannel Inventory Sync (Shopify + Amazon + Flipkart)",
        "Custom Branded Tracking Page with Upsells",
        "Dedicated Account Manager & 1-Hr Priority SLA"
      ],
      cta: "Get Started Now",
      color: "#3b82f6"
    },
    {
      name: "Enterprise Omnichannel",
      desc: "For high-volume high-growth D2C brands, conglomerates, and multi-warehouse supply chains.",
      price: isYearlyPricing ? 7999 : 9999,
      period: "/month",
      billing: isYearlyPricing ? "Billed ₹95,988/yr (Save 20%)" : "Billed monthly",
      badge: "MAX PERFORMANCE",
      popular: false,
      features: [
        "Unlimited orders & SKUs",
        "Everything in Scale-Up, plus:",
        "Multi-Warehouse Smart Geographic Routing",
        "Custom ERP & SAP API Connectors",
        "Custom AI WhatsApp Agent with Product Recommendations",
        "White-Glove Onboarding & Catalog Migration",
        "99.99% Guaranteed SLA & Dedicated Solution Architect",
        "Custom B2B Wholesale Portal"
      ],
      cta: "Talk to Enterprise Sales",
      color: "#8b5cf6"
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "How does the Shiprocket integration work?",
      a: "MerlinFlow E-Commerce connects directly with your Shiprocket account via secure APIs. When a customer orders, the system automatically validates the address, assigns the fastest/cheapest courier (Delhivery, BlueDart, DTDC, XpressBees), generates the AWB label, and triggers pickup without any manual copy-pasting."
    },
    {
      q: "How does the WhatsApp NDR bot reduce our RTO rate?",
      a: "When a courier flags a Non-Delivery Report (customer unavailable, incorrect address, door locked), our system instantly fires an automated interactive WhatsApp message to the buyer. The customer can tap to confirm a new delivery slot or update their location pin, which automatically syncs back to the courier for the next delivery attempt."
    },
    {
      q: "Can I migrate my existing store from Shopify or WooCommerce?",
      a: "Yes! We offer a 1-click catalog, customer, and historical order migration tool for Shopify, WooCommerce, Magento, and custom backends. Our onboarding team also assists with zero-downtime DNS transfer."
    },
    {
      q: "Does this support Indian payment gateways and GST invoicing?",
      a: "Yes, fully native. We support Cashfree Payments, UPI QR codes, and multi-mode digital checkout with automated reconciliation. Every order automatically produces a downloadable, GST-compliant B2C/B2B tax invoice with HSN code breakdown."
    },
    {
      q: "What are the WhatsApp messaging costs?",
      a: "Meta official API conversation charges apply transparently with zero markup from MerlinFlow. You get direct access to official WhatsApp Cloud API with verified Green Tick verification assistance."
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ecommerce-page" style={{ paddingTop: "7.5rem" }}>
      {/* Background Animated SVG Roadmaps & Glow Orbs */}
      <div className="bg-decorations" aria-hidden="true">
        {/* Glowing radial ambient lights */}
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
        <div className="glow-orb orb-3" />
        
        {/* Interactive SVG dynamic circuit / roadmap animation */}
        <svg className="bg-svg-roadmap" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ecomPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="ecomGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          
          {/* Decorative Roadmap Curve 1 */}
          <path 
            d="M-50,200 C300,100 500,450 900,300 C1200,180 1350,500 1500,420" 
            stroke="url(#ecomPathGrad)" 
            strokeWidth="2.5" 
            strokeDasharray="8 8"
            fill="none" 
          />
          
          {/* Decorative Roadmap Curve 2 */}
          <path 
            d="M-100,550 C250,650 600,350 1000,600 C1300,800 1400,650 1550,700" 
            stroke="url(#ecomPathGrad)" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.6"
          />

          {/* Animated Light Pulse along track */}
          <circle cx="450" cy="320" r="6" fill="#3b82f6" className="pulse-node">
            <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="300" r="7" fill="#8b5cf6" className="pulse-node">
            <animate attributeName="r" values="5;9;5" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="680" r="6" fill="#06b6d4" className="pulse-node">
            <animate attributeName="r" values="4;8;4" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Subtle grid pattern overlay */}
        <div className="grid-overlay" />
      </div>

      {/* Top Breadcrumb & Sub Navigation */}
      <div className="sticky-subnav">
        <div className="container subnav-container">
          <Link href="/#products" className="back-link">
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="subnav-tabs">
            <button 
              className={`subnav-tab ${activeNav === 'overview' ? 'active' : ''}`}
              onClick={() => scrollToSection('overview')}
            >
              Overview
            </button>
            <button 
              className={`subnav-tab ${activeNav === 'capabilities' ? 'active' : ''}`}
              onClick={() => scrollToSection('capabilities')}
            >
              Capabilities
            </button>
            <button 
              className={`subnav-tab ${activeNav === 'workflow' ? 'active' : ''}`}
              onClick={() => scrollToSection('workflow')}
            >
              D2C Workflow
            </button>
            <button 
              className={`subnav-tab ${activeNav === 'calculator' ? 'active' : ''}`}
              onClick={() => scrollToSection('calculator')}
            >
              ROI Calculator
            </button>
            <button 
              className={`subnav-tab ${activeNav === 'industries' ? 'active' : ''}`}
              onClick={() => scrollToSection('industries')}
            >
              Industries
            </button>
            <button 
              className={`subnav-tab ${activeNav === 'pricing' ? 'active' : ''}`}
              onClick={() => scrollToSection('pricing')}
            >
              Pricing
            </button>
            <button 
              className={`subnav-tab ${activeNav === 'faq' ? 'active' : ''}`}
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </button>
          </div>

          <button onClick={scrollToContact} className="subnav-cta-btn">
            Request Demo <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section id="overview" className="hero-section">
        <div className="hero-bg-container" aria-hidden="true">
          <div className="ecommerce-hero-bg-image" />
          <div className="ecommerce-hero-bg-overlay" />
          <div className="hero-glow-orb" />
        </div>

        <div className="container hero-content-wrap">
          <div className="hero-glass-panel">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-badge"
            >
              <span className="badge-pulse" />
              <span className="badge-text">v2.0 Now Live</span>
              <span className="badge-divider">•</span>
              <span className="badge-sub">The Automation-first E-Commerce OS</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title"
            >
              Stop doing manual tasks. <br />
              <span className="gradient-text">Run Your E-Commerce On Autopilot.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-description"
            >
              From 1-click accelerated checkout to Shiprocket automated logistics and real-time omnichannel inventory sync — we automate every repetitive operation for fast-growing Indian D2C brands.
            </motion.p>

            {/* CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-ctas"
            >
              <a href="#calculator" className="btn-primary">
                <Sparkles size={18} />
                <span>Calculate Your ROI</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Book Interactive Demo</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Trust Guarantees */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="trust-badges"
            >
              <div className="trust-item">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>No credit card required</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>14-day full feature trial</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>1-click Shopify/Woo migration</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container relative z-10">

        {/* INTERACTIVE COMMAND DASHBOARD PREVIEW */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="dashboard-preview-section"
        >
          <div className="dashboard-container">
            {/* Window Top Bar */}
            <div className="dashboard-window-header">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="window-title">
                <Shield size={14} className="text-blue-500" />
                <span>MerlinFlow Command • Live D2C Store Engine</span>
              </div>
              <div className="window-status">
                <span className="status-live-indicator" />
                <span className="status-text">Shiprocket Sync 100%</span>
              </div>
            </div>

            {/* Dashboard Inner Body */}
            <div className="dashboard-body">
              {/* Top Stats 4-Card Grid */}
              <div className="kpi-grid">
                <div className="kpi-card">
                  <div className="kpi-header">
                    <span className="kpi-label">Gross Revenue (Today)</span>
                    <span className="kpi-badge positive">+14.2%</span>
                  </div>
                  <div className="kpi-value">₹1,84,920</div>
                  <div className="kpi-footer">
                    <TrendingUp size={14} className="text-emerald-500" />
                    <span>vs ₹1,61,900 yesterday</span>
                  </div>
                </div>

                <div className="kpi-card">
                  <div className="kpi-header">
                    <span className="kpi-label">Orders Processed</span>
                    <span className="kpi-badge positive">+5.8%</span>
                  </div>
                  <div className="kpi-value">342</div>
                  <div className="kpi-footer">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>99.4% automated dispatch</span>
                  </div>
                </div>

                <div className="kpi-card">
                  <div className="kpi-header">
                    <span className="kpi-label">Live Active Shoppers</span>
                    <span className="kpi-badge neutral">Real-time</span>
                  </div>
                  <div className="kpi-value">1,204</div>
                  <div className="kpi-footer">
                    <Users size={14} className="text-blue-500" />
                    <span>88 currently at checkout</span>
                  </div>
                </div>

                <div className="kpi-card">
                  <div className="kpi-header">
                    <span className="kpi-label">Delivery Success</span>
                    <span className="kpi-badge highlight">94.8% SLA</span>
                  </div>
                  <div className="kpi-value">5.2% RTO</div>
                  <div className="kpi-footer">
                    <Truck size={14} className="text-purple-500" />
                    <span>WhatsApp NDR active</span>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="dash-tabs-bar">
                <button 
                  className={`dash-tab ${activeTab === "feed" ? "active" : ""}`}
                  onClick={() => setActiveTab("feed")}
                >
                  <Radio size={16} /> Live Order Stream
                </button>
                <button 
                  className={`dash-tab ${activeTab === "logistics" ? "active" : ""}`}
                  onClick={() => setActiveTab("logistics")}
                >
                  <Truck size={16} /> Shiprocket Dispatch Matrix
                </button>
                <button 
                  className={`dash-tab ${activeTab === "inventory" ? "active" : ""}`}
                  onClick={() => setActiveTab("inventory")}
                >
                  <Box size={16} /> Omnichannel Stock
                </button>
              </div>

              {/* Tab 1: Live Orders Feed */}
              {activeTab === "feed" && (
                <div className="tab-content live-feed-tab">
                  <div className="table-responsive">
                    <table className="orders-table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Location</th>
                          <th>Product Item</th>
                          <th>Amount</th>
                          <th>Payment</th>
                          <th>Courier</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {liveOrders.map((ord, idx) => (
                          <tr key={idx}>
                            <td className="font-mono text-blue-600 font-semibold">{ord.id}</td>
                            <td className="font-medium text-slate-800">{ord.customer}</td>
                            <td className="text-slate-500 text-xs">{ord.city}</td>
                            <td className="text-slate-700 text-xs">{ord.items}</td>
                            <td className="font-semibold text-slate-900">{ord.amount}</td>
                            <td>
                              <span className={`payment-pill ${ord.type.includes("Prepaid") ? "prepaid" : "cod"}`}>
                                {ord.type}
                              </span>
                            </td>
                            <td>
                              <span className="courier-badge">
                                <Truck size={12} /> {ord.courier}
                              </span>
                            </td>
                            <td>
                              <span className={`status-pill ${ord.status.toLowerCase().replace(/\s+/g, "-")}`}>
                                <span className="status-dot" />
                                {ord.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 2: Shiprocket Dispatch Matrix */}
              {activeTab === "logistics" && (
                <div className="tab-content logistics-tab">
                  <div className="logistics-grid">
                    <div className="courier-card">
                      <div className="courier-header">
                        <h4>BlueDart Express</h4>
                        <span className="sla-badge">Fastest SLA (24-48h)</span>
                      </div>
                      <div className="courier-metric">
                        <span className="val">142</span>
                        <span className="lbl">Active Shipments</span>
                      </div>
                      <div className="courier-progress">
                        <div className="bar" style={{ width: "96%", backgroundColor: "#3b82f6" }} />
                      </div>
                      <div className="courier-footer">
                        <span>98.2% On-time Rate</span>
                        <span>Avg Cost: ₹48/500g</span>
                      </div>
                    </div>

                    <div className="courier-card">
                      <div className="courier-header">
                        <h4>Delhivery Surface & Air</h4>
                        <span className="sla-badge">Broadest Pin Coverage</span>
                      </div>
                      <div className="courier-metric">
                        <span className="val">118</span>
                        <span className="lbl">Active Shipments</span>
                      </div>
                      <div className="courier-progress">
                        <div className="bar" style={{ width: "93%", backgroundColor: "#8b5cf6" }} />
                      </div>
                      <div className="courier-footer">
                        <span>95.4% On-time Rate</span>
                        <span>Avg Cost: ₹42/500g</span>
                      </div>
                    </div>

                    <div className="courier-card">
                      <div className="courier-header">
                        <h4>WhatsApp NDR Defender</h4>
                        <span className="sla-badge green">Automated Bot</span>
                      </div>
                      <div className="courier-metric">
                        <span className="val">29</span>
                        <span className="lbl">NDR Cases Resolved</span>
                      </div>
                      <div className="courier-progress">
                        <div className="bar" style={{ width: "88%", backgroundColor: "#10b981" }} />
                      </div>
                      <div className="courier-footer">
                        <span>74% RTO Prevention</span>
                        <span>Auto WhatsApp Bot</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Omnichannel Stock */}
              {activeTab === "inventory" && (
                <div className="tab-content stock-tab">
                  <div className="stock-list">
                    <div className="stock-row">
                      <div className="stock-info">
                        <strong>Oversized Vintage Hoodie (Midnight Black / L)</strong>
                        <span>SKU: HOOD-BLK-L • Warehouse: Bengaluru Main</span>
                      </div>
                      <div className="stock-channels">
                        <span className="chan-badge shopify">D2C: 142</span>
                        <span className="chan-badge amazon">Amazon: 50</span>
                        <span className="chan-badge flipkart">Flipkart: 25</span>
                      </div>
                      <div className="stock-status in-stock">
                        <CheckCircle2 size={16} /> 217 in stock
                      </div>
                    </div>

                    <div className="stock-row">
                      <div className="stock-info">
                        <strong>Wireless ANC Earbuds v2 (Matte Silver)</strong>
                        <span>SKU: EAR-SLV-02 • Warehouse: Mumbai Hub</span>
                      </div>
                      <div className="stock-channels">
                        <span className="chan-badge shopify">D2C: 18</span>
                        <span className="chan-badge amazon">Amazon: 12</span>
                        <span className="chan-badge flipkart">Flipkart: 8</span>
                      </div>
                      <div className="stock-status low-stock">
                        <AlertCircle size={16} /> 38 (Low Stock Alert)
                      </div>
                    </div>

                    <div className="stock-row">
                      <div className="stock-info">
                        <strong>Vitamin C Glow Serum (50ml dropper)</strong>
                        <span>SKU: SERUM-VITC-50 • Warehouse: Delhi North</span>
                      </div>
                      <div className="stock-channels">
                        <span className="chan-badge shopify">D2C: 620</span>
                        <span className="chan-badge amazon">Amazon: 300</span>
                        <span className="chan-badge flipkart">Flipkart: 150</span>
                      </div>
                      <div className="stock-status in-stock">
                        <CheckCircle2 size={16} /> 1,070 in stock
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* 4 CORE CAPABILITIES (Using Established Premium 1.5px Card Layout) */}
        <section id="capabilities" className="capabilities-section">
          <div className="section-header text-center">
            <span className="section-eyebrow">BUILT FOR SCALE</span>
            <h2 className="section-title">Everything You Need To Scale To 50,000+ Orders</h2>
            <p className="section-subtitle">
              Engineered specifically for fast-moving consumer brands in India dealing with high COD volumes, multiple couriers, and omnichannel sales.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={cap.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="capability-card"
              >
                {/* Header with icon & badge */}
                <div className="card-top">
                  <div className="icon-wrapper" style={{ backgroundColor: cap.bgLight, borderColor: cap.border }}>
                    {idx === 0 && <Zap size={22} color={cap.color} />}
                    {idx === 1 && <Truck size={22} color={cap.color} />}
                    {idx === 2 && <RefreshCw size={22} color={cap.color} />}
                    {idx === 3 && <MessageSquare size={22} color={cap.color} />}
                  </div>
                  <span className="card-badge" style={{ color: cap.color, backgroundColor: cap.bgLight, borderColor: cap.border }}>
                    {cap.badge}
                  </span>
                </div>

                <h3 className="card-title">{cap.title}</h3>
                <p className="card-desc">{cap.desc}</p>

                {/* Bullets */}
                <ul className="card-bullets">
                  {cap.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle2 size={16} style={{ color: cap.color, flexShrink: 0 }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Stat Footer */}
                <div className="card-stat-footer" style={{ borderTop: `1px solid ${cap.border}`, backgroundColor: cap.bgLight }}>
                  <div className="stat-num" style={{ color: cap.color }}>{cap.stat}</div>
                  <div className="stat-desc">{cap.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Live Client Deployments in E-Commerce & SaaS */}
        <section className="product-deployments-section">
          <div className="section-header text-center">
            <span className="section-eyebrow">LIVE PRODUCTION DEPLOYMENTS</span>
            <h2 className="section-title">Proven E-Commerce & Digital Storefronts</h2>
            <p className="section-subtitle">
              See how modern digital storefronts, smart networking platforms, and cultural ticketing engines scale on MerlinFlow.
            </p>
          </div>

          <div className="product-deployments-grid">
            {/* Project 1: OneClickBiz */}
            <div className="prop-deployment-card">
              <div className="p-dep-top">
                <span className="p-dep-tag">WhatsApp Store & SaaS</span>
                <span className="p-dep-badge">Live Platform</span>
              </div>
              <h3 className="p-dep-title">OneClickBiz — Digital Business Card & WhatsApp Store SaaS</h3>
              <div className="p-dep-meta">
                <strong>OneClickBiz</strong> • <span className="p-domain">oneclickbiz.in</span> • India & Global
              </div>
              <p className="p-dep-desc">
                Full-featured digital storefront SaaS combining interactive vCards, dynamic NFC smart cards, 1-click contact downloads (.vcf), and direct cart-to-WhatsApp order dispatch.
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

            {/* Project 2: Kalaakshi */}
            <div className="prop-deployment-card">
              <div className="p-dep-top">
                <span className="p-dep-tag">Cultural E-Commerce</span>
                <span className="p-dep-badge">Live System</span>
              </div>
              <h3 className="p-dep-title">Kalaakshi — Culture, Heritage & Event Show Bookings</h3>
              <div className="p-dep-meta">
                <strong>Kalaakshi</strong> • <span className="p-domain">www.kalaakshi.com</span> • India
              </div>
              <p className="p-dep-desc">
                Dynamic cultural event ticketing, traditional show bookings, and Indian heritage promotion e-commerce platform with live interactive seat tier selection and QR pass generation.
              </p>
              <div className="p-dep-metrics">
                <div className="p-metric">
                  <span className="val">35,000+</span>
                  <span className="lbl">Show Tickets</span>
                </div>
                <div className="p-metric">
                  <span className="val">180+</span>
                  <span className="lbl">Shows Hosted</span>
                </div>
                <div className="p-metric">
                  <span className="val">+340%</span>
                  <span className="lbl">Engagement</span>
                </div>
              </div>
              <a 
                href="https://www.kalaakshi.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-dep-btn"
              >
                <span>Visit Live Platform (www.kalaakshi.com)</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* 3-STEP AUTOMATED WORKFLOW */}
        <section id="workflow" className="workflow-section">
          <div className="section-header text-center">
            <span className="section-eyebrow">SEAMLESS AUTOMATION</span>
            <h2 className="section-title">How MerlinFlow Automates Every Order in Seconds</h2>
            <p className="section-subtitle">From customer tap to doorstep delivery without human manual work.</p>
          </div>

          <div className="workflow-steps">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon-box">
                <Smartphone size={24} className="text-blue-600" />
              </div>
              <h3>1-Click Fast Checkout</h3>
              <p>Customer enters phone number, receives instant WhatsApp OTP, address auto-populates, and payment is processed via UPI or validated COD.</p>
              <div className="step-tag">Zero Password Login</div>
            </div>

            <div className="step-connector">
              <ArrowRight size={24} className="text-blue-400" />
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon-box">
                <Cpu size={24} className="text-purple-600" />
              </div>
              <h3>Automated Backend Pipeline</h3>
              <p>System automatically verifies tax invoices, allocates the optimal Shiprocket courier (BlueDart/Delhivery), and generates the shipping AWB.</p>
              <div className="step-tag">Sub-Second Processing</div>
            </div>

            <div className="step-connector">
              <ArrowRight size={24} className="text-purple-400" />
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon-box">
                <CheckCheck size={24} className="text-emerald-600" />
              </div>
              <h3>Tracking & NDR Defense</h3>
              <p>Buyer gets live WhatsApp tracking. If delivery fails, automated AI bot engages buyer immediately to re-schedule and stop RTO returns.</p>
              <div className="step-tag">35% Less Returns</div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE ROI & REVENUE RECOVERY CALCULATOR */}
        <section id="calculator" className="calculator-section">
          <div className="calculator-wrapper">
            <div className="calc-left">
              <span className="section-eyebrow">FINANCIAL IMPACT CALCULATOR</span>
              <h2 className="calc-title">See How Much Profit MerlinFlow Unlocks For Your Brand</h2>
              <p className="calc-desc">
                Adjust your current order volume and average order value to see calculated annual savings on RTO losses, checkout drop-off recovery, and shipping discounts.
              </p>

              {/* Sliders */}
              <div className="sliders-group">
                <div className="slider-box">
                  <div className="slider-header">
                    <label>Monthly Orders Processed</label>
                    <span className="slider-value">{monthlyOrders.toLocaleString()} orders</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="20000" 
                    step="250"
                    value={monthlyOrders}
                    onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                    className="styled-range"
                  />
                  <div className="slider-range-labels">
                    <span>500</span>
                    <span>10,000</span>
                    <span>20,000+</span>
                  </div>
                </div>

                <div className="slider-box">
                  <div className="slider-header">
                    <label>Average Order Value (AOV)</label>
                    <span className="slider-value">₹{avgOrderValue.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="400" 
                    max="5000" 
                    step="100"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="styled-range"
                  />
                  <div className="slider-range-labels">
                    <span>₹400</span>
                    <span>₹2,500</span>
                    <span>₹5,000+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calc Right Results Card */}
            <div className="calc-right">
              <div className="results-card">
                <div className="results-header">
                  <Calculator size={20} className="text-blue-500" />
                  <span>Estimated Annual Value Unlocked</span>
                </div>

                <div className="total-profit-box">
                  <div className="total-label">Total Annual Profit Boost</div>
                  <div className="total-amount">₹{(totalAnnualBenefit / 100000).toFixed(2)} Lakhs</div>
                  <div className="total-sub">Direct bottom-line margin addition</div>
                </div>

                <div className="breakdown-list">
                  <div className="breakdown-item">
                    <div className="item-label">
                      <ShieldCheck size={16} className="text-emerald-500" />
                      <span>RTO Losses Prevented</span>
                    </div>
                    <div className="item-val">₹{((rtoLossSaved * 12) / 100000).toFixed(2)}L / yr</div>
                  </div>

                  <div className="breakdown-item">
                    <div className="item-label">
                      <TrendingUp size={16} className="text-blue-500" />
                      <span>Checkout Conversion Lift</span>
                    </div>
                    <div className="item-val">₹{((conversionLiftValue * 12) / 100000).toFixed(2)}L / yr</div>
                  </div>

                  <div className="breakdown-item">
                    <div className="item-label">
                      <Truck size={16} className="text-purple-500" />
                      <span>Automated Shipping Savings</span>
                    </div>
                    <div className="item-val">₹{((shippingSavings * 12) / 100000).toFixed(2)}L / yr</div>
                  </div>
                </div>

                <a href="#contact" className="calc-cta-btn">
                  Claim Your Free Brand Audit <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TARGET INDUSTRY VERTICALS */}
        <section id="industries" className="industries-section">
          <div className="section-header text-center">
            <span className="section-eyebrow">TAILORED FOR YOUR NICHE</span>
            <h2 className="section-title">Built For The Complexities of Your Vertical</h2>
            <p className="section-subtitle">Whether fashion drops or gourmet health foods, our workflows adapt to your specific operational constraints.</p>
          </div>

          <div className="industry-tabs">
            {industries.map((ind, i) => (
              <button 
                key={i}
                className={`ind-tab-btn ${activeIndustry === i ? "active" : ""}`}
                onClick={() => setActiveIndustry(i)}
              >
                {ind.name}
              </button>
            ))}
          </div>

          <div className="industry-showcase-box">
            <div className="ind-content">
              <span className="ind-tagline">{industries[activeIndustry].tagline}</span>
              <h3>{industries[activeIndustry].name} Automation Suite</h3>
              <p>{industries[activeIndustry].desc}</p>
              <div className="ind-metrics-grid">
                {industries[activeIndustry].metrics.map((m, mIdx) => (
                  <div key={mIdx} className="ind-metric-card">
                    <CheckCircle2 size={16} className="text-blue-600" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="pricing-section">
          <div className="section-header text-center">
            <span className="section-eyebrow">SIMPLE TRANSPARENT PRICING</span>
            <h2 className="section-title">Invest in Growth, Not Hidden Fees</h2>
            <p className="section-subtitle">Predictable monthly billing with zero percentage cut on your gross GMV.</p>

            {/* Toggle */}
            <div className="pricing-toggle-wrap">
              <span className={!isYearlyPricing ? "active-term" : ""}>Monthly</span>
              <button 
                className={`toggle-switch ${isYearlyPricing ? "yearly" : ""}`}
                onClick={() => setIsYearlyPricing(!isYearlyPricing)}
                aria-label="Toggle annual pricing discount"
              >
                <span className="toggle-thumb" />
              </button>
              <span className={isYearlyPricing ? "active-term" : ""}>
                Yearly <span className="save-badge">Save 20%</span>
              </span>
            </div>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >
                {plan.badge && (
                  <div className="popular-badge">{plan.badge}</div>
                )}
                <div className="plan-name">{plan.name}</div>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-price-box">
                  <span className="currency">₹</span>
                  <span className="price">{plan.price.toLocaleString()}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <div className="billing-sub">{plan.billing}</div>

                <a 
                  href="#contact" 
                  className={`plan-btn ${plan.popular ? "popular-btn" : "standard-btn"}`}
                >
                  {plan.cta}
                </a>

                <div className="plan-divider" />

                <ul className="plan-features">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <Check size={16} className={plan.popular ? "text-blue-500" : "text-emerald-500"} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section id="faq" className="faq-section">
          <div className="section-header text-center">
            <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">Everything You Need To Know</h2>
            <p className="section-subtitle">Got questions? We have answers. If you need more clarity, our engineering team is ready to help.</p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-item ${isOpen ? "open" : ""}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                >
                  <div className="faq-question">
                    <span className="q-text">{faq.q}</span>
                    <ChevronDown size={18} className={`chevron-icon ${isOpen ? "rotate" : ""}`} />
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="faq-answer"
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Global Contact Form Section */}
      <div id="contact" className="contact-wrapper">
        <ContactSection />
      </div>

      <style jsx global>{`
        .ecommerce-page {
          min-height: 100vh;
          padding-top: 5.5rem;
          background-color: #f8fafc;
          position: relative;
          overflow-x: hidden;
        }

        /* Ambient Background SVG Roadmap & Radial Glow Orbs */
        .bg-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        /* STICKY SUB NAVIGATION */
        .sticky-subnav {
          position: sticky;
          top: 76px;
          z-index: 900;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #e9d5ff;
          padding: 0.65rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
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
          gap: 0.45rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: #7c3aed;
        }

        .subnav-tabs {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #faf5ff;
          padding: 0.25rem;
          border-radius: 50px;
          flex-wrap: wrap;
          border: 1px solid #f3e8ff;
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
          color: #7c3aed;
          box-shadow: 0 2px 6px rgba(124, 58, 237, 0.15);
        }

        .subnav-cta-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: #ffffff;
          border: none;
          border-radius: 50px;
          padding: 0.45rem 1.1rem;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.25);
        }

        .subnav-cta-btn:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 5.5rem 0 4.5rem;
          overflow: hidden;
          background-color: #f8fafc;
          margin-bottom: 2rem;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .ecommerce-hero-bg-image {
          position: absolute;
          inset: 0;
          background-image: url('/images/ecommerce_hero_bg.jpg');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          opacity: 0.65;
          filter: saturate(1.15) brightness(0.90);
        }

        .ecommerce-hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(248, 250, 252, 0.35) 0%,
            rgba(248, 250, 252, 0.55) 45%,
            rgba(248, 250, 252, 0.94) 85%,
            #f8fafc 100%
          );
        }

        .hero-glow-orb {
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0) 70%);
          filter: blur(80px);
        }

        .hero-content-wrap {
          position: relative;
          z-index: 10;
        }

        .hero-glass-panel {
          max-width: 860px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          border-radius: 28px;
          padding: 3rem 3.5rem;
          box-shadow: 0 20px 50px -10px rgba(15, 23, 42, 0.10), 0 0 0 1px rgba(226, 232, 240, 0.6);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .container {
          position: relative;
          z-index: 10;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.35;
        }

        .orb-1 {
          top: 5%;
          left: 10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #3b82f6 0%, rgba(59, 130, 246, 0) 70%);
        }

        .orb-2 {
          top: 25%;
          right: 5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #8b5cf6 0%, rgba(139, 92, 246, 0) 70%);
        }

        .orb-3 {
          top: 55%;
          left: 15%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, #06b6d4 0%, rgba(6, 182, 212, 0) 70%);
        }

        .bg-svg-roadmap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1400px;
          opacity: 0.7;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.4;
        }

        /* Navigation */
        .top-nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          margin-bottom: 2rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: #3b82f6;
        }

        .live-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          font-size: 0.8rem;
          font-weight: 600;
          color: #1e40af;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }

        .badge-text {
          color: #1e40af;
        }

        .badge-divider {
          color: #cbd5e1;
        }

        .badge-sub {
          color: #64748b;
        }

        .hero-title {
          font-size: 3.25rem;
          line-height: 1.15;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          text-align: center;
        }

        .gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #475569;
          max-width: 720px;
          margin: 0 auto 2.5rem;
          text-align: center;
        }

        .hero-ctas {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          margin-bottom: 2.25rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #ffffff;
          padding: 0.9rem 1.8rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -5px rgba(37, 99, 235, 0.5);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffffff;
          color: #0f172a;
          padding: 0.9rem 1.8rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s, border-color 0.2s;
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: #cbd5e1;
        }

        .trust-badges {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Dashboard Preview */
        .dashboard-preview-section {
          margin-bottom: 7rem;
        }

        .dashboard-container {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.6);
          overflow: hidden;
        }

        .dashboard-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.5rem;
          background: #f8fafc;
          border-bottom: 1.5px solid #e2e8f0;
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .window-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
        }

        .window-status {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #059669;
        }

        .status-live-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
        }

        .dashboard-body {
          padding: 1.75rem;
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.75rem;
        }

        .kpi-card {
          background: #f8fafc;
          padding: 1.25rem;
          border-radius: 14px;
          border: 1.5px solid #e2e8f0;
        }

        .kpi-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .kpi-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
        }

        .kpi-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
        }

        .kpi-badge.positive {
          background: #ecfdf5;
          color: #059669;
        }

        .kpi-badge.neutral {
          background: #eff6ff;
          color: #2563eb;
        }

        .kpi-badge.highlight {
          background: #faf5ff;
          color: #7c3aed;
        }

        .kpi-value {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.4rem;
          letter-spacing: -0.02em;
        }

        .kpi-footer {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: #64748b;
        }

        .dash-tabs-bar {
          display: flex;
          gap: 0.75rem;
          border-bottom: 1.5px solid #e2e8f0;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .dash-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          background: transparent;
          border: 1px solid transparent;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }

        .dash-tab:hover {
          color: #0f172a;
          background: #f1f5f9;
        }

        .dash-tab.active {
          background: #eff6ff;
          border-color: #bfdbfe;
          color: #1d4ed8;
        }

        .orders-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .orders-table th {
          text-align: left;
          padding: 0.75rem 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1.5px solid #e2e8f0;
          background: #f8fafc;
        }

        .orders-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .payment-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
        }

        .payment-pill.prepaid {
          background: #ecfdf5;
          color: #059669;
        }

        .payment-pill.cod {
          background: #fffbeb;
          color: #d97706;
        }

        .courier-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #475569;
          background: #f1f5f9;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
        }

        .status-pill.delivered {
          background: #ecfdf5;
          color: #059669;
        }

        .status-pill.in-transit {
          background: #eff6ff;
          color: #2563eb;
        }

        .status-pill.awb-generated {
          background: #faf5ff;
          color: #7c3aed;
        }

        .status-pill.dispatched {
          background: #fff7ed;
          color: #ea580c;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        /* Logistics Matrix */
        .logistics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .courier-card {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 1.5rem;
        }

        .courier-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .courier-header h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .sla-badge {
          font-size: 0.7rem;
          font-weight: 700;
          color: #2563eb;
          background: #eff6ff;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
        }

        .sla-badge.green {
          color: #059669;
          background: #ecfdf5;
        }

        .courier-metric {
          margin-bottom: 1rem;
        }

        .courier-metric .val {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0f172a;
          display: block;
        }

        .courier-metric .lbl {
          font-size: 0.75rem;
          color: #64748b;
        }

        .courier-progress {
          height: 6px;
          background: #e2e8f0;
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }

        .courier-progress .bar {
          height: 100%;
          border-radius: 999px;
        }

        .courier-footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Stock tab */
        .stock-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .stock-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
        }

        .stock-info strong {
          display: block;
          font-size: 0.9rem;
          color: #0f172a;
        }

        .stock-info span {
          font-size: 0.75rem;
          color: #64748b;
        }

        .stock-channels {
          display: flex;
          gap: 0.5rem;
        }

        .chan-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          background: #f1f5f9;
          color: #475569;
        }

        .stock-status {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .stock-status.in-stock {
          color: #059669;
        }

        .stock-status.low-stock {
          color: #d97706;
        }

        /* CAPABILITIES SECTION (Standard 1.5px border layout) */
        .capabilities-section {
          margin-bottom: 7rem;
        }

        .section-header {
          max-width: 760px;
          margin: 0 auto 3.5rem;
        }

        .section-eyebrow {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #2563eb;
          display: block;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 1.15rem;
          color: #64748b;
          line-height: 1.6;
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .capability-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }

        .capability-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 35px -5px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .card-top {
          padding: 2rem 2rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid;
        }

        .card-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          border: 1px solid;
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
          padding: 0 2rem;
          margin-bottom: 0.75rem;
        }

        .card-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
          padding: 0 2rem;
          margin-bottom: 1.5rem;
        }

        .card-bullets {
          list-style: none;
          padding: 0 2rem;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-grow: 1;
        }

        .card-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: #334155;
          line-height: 1.5;
        }

        .card-stat-footer {
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-num {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .stat-desc {
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
        }

        /* WORKFLOW 3-STEP */
        .workflow-section {
          margin-bottom: 7rem;
        }

        .workflow-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .step-card {
          flex: 1;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 2.25rem 2rem;
          position: relative;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
        }

        .step-number {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 1.75rem;
          font-weight: 800;
          color: #e2e8f0;
        }

        .step-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .step-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .step-card p {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .step-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #2563eb;
          background: #eff6ff;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
        }

        .step-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.7;
        }

        /* CALCULATOR */
        .calculator-section {
          margin-bottom: 7rem;
        }

        .calculator-wrapper {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 24px;
          padding: 3.5rem;
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          border: 1.5px solid #334155;
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25);
        }

        .calc-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 1rem;
        }

        .calc-desc {
          font-size: 1.05rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .sliders-group {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .slider-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
        }

        .slider-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .slider-header label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        .slider-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: #60a5fa;
        }

        .styled-range {
          width: 100%;
          accent-color: #3b82f6;
          cursor: pointer;
        }

        .slider-range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.5rem;
        }

        .results-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
        }

        .results-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }

        .total-profit-box {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(124, 58, 237, 0.25));
          border: 1.5px solid rgba(96, 165, 250, 0.3);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          margin-bottom: 1.75rem;
        }

        .total-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #93c5fd;
          margin-bottom: 0.35rem;
        }

        .total-amount {
          font-size: 2.75rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .total-sub {
          font-size: 0.8rem;
          color: #cbd5e1;
        }

        .breakdown-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .breakdown-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }

        .item-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #cbd5e1;
        }

        .item-val {
          font-weight: 700;
          color: #ffffff;
        }

        .calc-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: #ffffff;
          padding: 0.9rem 1.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .calc-cta-btn:hover {
          transform: translateY(-2px);
        }

        /* INDUSTRIES */
        .industries-section {
          margin-bottom: 7rem;
        }

        .industry-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .ind-tab-btn {
          padding: 0.65rem 1.4rem;
          border-radius: 999px;
          border: 1.5px solid #e2e8f0;
          background: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }

        .ind-tab-btn.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
        }

        .industry-showcase-box {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .ind-tagline {
          font-size: 0.8rem;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .ind-content h3 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .ind-content p {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.6;
          max-width: 800px;
          margin-bottom: 2rem;
        }

        .ind-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .ind-metric-card {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.9rem;
          color: #334155;
        }

        /* PRICING */
        .pricing-section {
          margin-bottom: 7rem;
        }

        .pricing-toggle-wrap {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: #ffffff;
          padding: 0.4rem 1.2rem;
          border-radius: 999px;
          border: 1.5px solid #e2e8f0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #64748b;
          margin-top: 1.5rem;
        }

        .active-term {
          color: #0f172a;
        }

        .toggle-switch {
          width: 44px;
          height: 24px;
          background: #cbd5e1;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          position: relative;
          transition: background 0.2s;
        }

        .toggle-switch.yearly {
          background: #2563eb;
        }

        .toggle-thumb {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: #ffffff;
          border-radius: 50%;
          transition: transform 0.2s;
        }

        .toggle-switch.yearly .toggle-thumb {
          transform: translateX(20px);
        }

        .save-badge {
          background: #ecfdf5;
          color: #059669;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.15rem 0.5rem;
          border-radius: 999px;
          margin-left: 0.25rem;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch;
        }

        .pricing-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pricing-card.popular {
          border-color: #3b82f6;
          box-shadow: 0 15px 35px -5px rgba(37, 99, 235, 0.15), 0 0 0 1px #3b82f6;
          transform: scale(1.02);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.3rem 0.9rem;
          border-radius: 999px;
          letter-spacing: 0.05em;
        }

        .plan-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .plan-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          min-height: 50px;
        }

        .plan-price-box {
          display: flex;
          align-items: baseline;
          gap: 0.2rem;
          margin-bottom: 0.25rem;
        }

        .plan-price-box .currency {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
        }

        .plan-price-box .price {
          font-size: 3rem;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.03em;
        }

        .plan-price-box .period {
          font-size: 0.95rem;
          color: #64748b;
          font-weight: 500;
        }

        .billing-sub {
          font-size: 0.78rem;
          color: #64748b;
          margin-bottom: 1.75rem;
        }

        .plan-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .popular-btn {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
        }

        .standard-btn {
          background: #f1f5f9;
          color: #0f172a;
          border: 1.5px solid #e2e8f0;
        }

        .plan-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 2rem 0;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          flex-grow: 1;
        }

        .plan-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #334155;
          line-height: 1.4;
        }

        /* FAQ */
        .faq-section {
          margin-bottom: 7rem;
        }

        .faq-accordion {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .faq-item:hover {
          border-color: #cbd5e1;
        }

        .faq-item.open {
          border-color: #3b82f6;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.08);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .q-text {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .chevron-icon {
          color: #64748b;
          transition: transform 0.2s;
          flex-shrink: 0;
        }

        .chevron-icon.rotate {
          transform: rotate(180deg);
          color: #3b82f6;
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer p {
          margin-top: 1rem;
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.6;
        }

        .contact-wrapper {
          border-top: 1px solid #e2e8f0;
          background-color: #ffffff;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .kpi-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
          .logistics-grid {
            grid-template-columns: 1fr;
          }
          .calculator-wrapper {
            grid-template-columns: 1fr;
          }
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          .pricing-card.popular {
            transform: none;
          }
          .workflow-steps {
            flex-direction: column;
          }
          .step-connector {
            transform: rotate(90deg);
            margin: 0.5rem 0;
          }
          .ind-metrics-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .ecommerce-page {
            padding-top: 4.5rem !important;
            width: 100% !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
          }

          .sticky-subnav {
            position: relative !important;
            top: auto !important;
            z-index: 20 !important;
            box-shadow: none !important;
            background: #ffffff !important;
            border-bottom: 1px solid #e9d5ff !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          .subnav-container {
            padding: 0.5rem 0.75rem !important;
            gap: 0.5rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
            justify-content: space-between !important;
          }

          .subnav-tabs {
            display: none !important;
          }

          .subnav-cta-btn {
            padding: 0.4rem 0.75rem !important;
            font-size: 0.78rem !important;
          }

          .hero-section {
            padding: 2.25rem 0 3rem !important;
            overflow: hidden !important;
            width: 100% !important;
            margin-bottom: 1rem !important;
          }

          .hero-glass-panel {
            padding: 2rem 1.15rem !important;
            border-radius: 20px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          .hero-badge {
            margin: 0 auto 1.25rem auto !important;
            font-size: 0.72rem !important;
            padding: 0.35rem 0.85rem !important;
            max-width: 95% !important;
          }

          .hero-title {
            font-size: clamp(1.45rem, 5vw, 2.1rem) !important;
            line-height: 1.25 !important;
            word-break: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
            margin: 0 auto 1.2rem auto !important;
            text-align: center !important;
            max-width: 100% !important;
          }

          .gradient-text {
            display: inline !important;
          }

          .hero-description {
            font-size: 0.95rem !important;
            line-height: 1.55 !important;
            margin: 0 auto 1.75rem auto !important;
            text-align: center !important;
            max-width: 100% !important;
          }

          .hero-ctas {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 100% !important;
            gap: 0.75rem !important;
            margin: 0 auto 2rem auto !important;
          }

          .btn-primary, .btn-secondary {
            width: 100% !important;
            justify-content: center !important;
            font-size: 0.9rem !important;
            padding: 0.8rem 1.25rem !important;
            box-sizing: border-box !important;
          }

          .kpi-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }

          .calculator-wrapper {
            padding: 1.5rem 1rem !important;
            border-radius: 18px !important;
          }

          .industry-showcase-box {
            padding: 1.5rem 1rem !important;
            border-radius: 18px !important;
          }

          .comparison-table-wrapper {
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            border-radius: 14px !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            box-sizing: border-box !important;
          }

          .comparison-table {
            min-width: 480px !important;
            width: 100% !important;
          }

          .comparison-table th, .comparison-table td {
            padding: 0.75rem 0.65rem !important;
            font-size: 0.78rem !important;
          }
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
          max-width: 1200px;
          margin: 0 auto;
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
          border-color: #3b82f6;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
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
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.08);
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
          color: #3b82f6;
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
          color: #3b82f6;
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
          background: #3b82f6;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 3px 10px rgba(59, 130, 246, 0.18);
          margin-top: auto;
        }

        .p-dep-btn:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }

        @media (max-width: 992px) {
          .product-deployments-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
