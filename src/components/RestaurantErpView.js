"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  QrCode, Utensils, UtensilsCrossed, ChefHat, Clock, 
  CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, Users, 
  CalendarCheck, CreditCard, Sparkles, Smartphone, BarChart3, 
  Database, Lock, Server, AlertCircle, ShoppingCart, 
  Receipt, Award, MapPin, Zap, Layers, ChevronDown, 
  Check, Star, Quote, Phone, HelpCircle, FileText, 
  Sliders, Calculator, X, Globe, Heart, Shield,
  ArrowLeft, FileCheck, PhoneCall
} from "lucide-react";
import Link from "next/link";
import ContactSection from "./ContactSection";

export default function RestaurantErpView() {
  const [activeNav, setActiveNav] = useState("overview");
  const [activeModuleCat, setActiveModuleCat] = useState("all");
  const [activeDashboardTab, setActiveDashboardTab] = useState("manager"); // manager, kds
  const [dailyTables, setDailyTables] = useState(150);
  const [avgOrderValue, setAvgOrderValue] = useState(650);
  const [isYearlyPricing, setIsYearlyPricing] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeAudience, setActiveAudience] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Pain Points
  const painPoints = [
    {
      title: "Wrong Orders & Wastage",
      desc: "Waiters mishearing or scribbling incorrect orders leads to guest frustration, food remakes, and direct kitchen wastage.",
      icon: <AlertCircle className="w-5 h-5 text-rose-500" />,
      tag: "ORDER ACCURACY"
    },
    {
      title: "Peak Hour Billing Bottlenecks",
      desc: "Manual bill generation creates long exit queues and impatient tables waiting 15+ minutes just to settle their checks.",
      icon: <Clock className="w-5 h-5 text-rose-500" />,
      tag: "CHECKOUT DELAYS"
    },
    {
      title: "Expensive Menu Reprinting",
      desc: "Every price update, seasonal dish addition, or seasonal festival special requires costly reprinting of bulky paper menus.",
      icon: <FileText className="w-5 h-5 text-rose-500" />,
      tag: "MENU COSTS"
    },
    {
      title: "Walk-In Reservation Chaos",
      desc: "Phone-call bookings scribbled on paper registers result in duplicate table assignments and chaotic customer walk-in crowds.",
      icon: <CalendarCheck className="w-5 h-5 text-rose-500" />,
      tag: "SEATING CONFLICTS"
    },
    {
      title: "Kitchen Coordination Gaps",
      desc: "Lost paper KOTs and unclear handwritten modifiers cause delayed cooking times and cold food served to impatient tables.",
      icon: <ChefHat className="w-5 h-5 text-rose-500" />,
      tag: "KITCHEN SYNC"
    },
    {
      title: "Lack of Revenue Visibility",
      desc: "No real-time insight into hourly item velocity, table turn times, cashier cash vs UPI splits, or raw material food costs.",
      icon: <BarChart3 className="w-5 h-5 text-rose-500" />,
      tag: "BLIND OPERATIONS"
    }
  ];

  // Core Purpose-Built Restaurant Modules
  const restaurantModules = [
    {
      id: "foh",
      category: "Front of House & POS",
      badgeColor: "linear-gradient(135deg, #ea580c, #c2410c)",
      badgeBg: "#fff7ed",
      badgeBorder: "#fed7aa",
      badgeText: "#ea580c",
      items: [
        {
          name: "Smart QR Table Ordering",
          desc: "Guests scan table QR codes to browse rich visual digital menus, customize spice levels, and place orders directly from their phones.",
          icon: <QrCode size={22} color="#ea580c" />,
          iconBg: "#fff7ed",
          borderColor: "#fed7aa",
          tags: ["Zero App Install", "Custom Modifiers", "Live Price Sync"]
        },
        {
          name: "High-Speed Counter POS",
          desc: "Lightning-fast billing terminal with offline mode support, automated GST split, and split cash/UPI/card settlement in seconds.",
          icon: <Receipt size={22} color="#059669" />,
          iconBg: "#ecfdf5",
          borderColor: "#a7f3d0",
          tags: ["< 3s Billing", "Split Payment", "Offline POS Ready"]
        },
        {
          name: "Dynamic Digital Menu Engine",
          desc: "Instantly update item prices, add chef's specials, highlight bestseller tags, or toggle out-of-stock items in real time across all tables.",
          icon: <Utensils size={22} color="#7c3aed" />,
          iconBg: "#faf5ff",
          borderColor: "#e9d5ff",
          tags: ["Instant 86 Lock", "Happy Hour Pricing", "Rich Visuals"]
        }
      ]
    },
    {
      id: "kitchen",
      category: "Kitchen & KDS Automation",
      badgeColor: "linear-gradient(135deg, #0d9488, #059669)",
      badgeBg: "#f0fdfa",
      badgeBorder: "#99f6e4",
      badgeText: "#0d9488",
      items: [
        {
          name: "Smart Kitchen Display (KDS)",
          desc: "Real-time kitchen order tickets (KOTs) categorized by preparation station (Grill, Bar, Main) with prep-time alert countdowns.",
          icon: <ChefHat size={22} color="#0d9488" />,
          iconBg: "#f0fdfa",
          borderColor: "#99f6e4",
          tags: ["Station Routing", "Prep Timers", "Color Coded Alerts"]
        },
        {
          name: "Live Order Status Tracker",
          desc: "Live status updates streamed from kitchen to captain consoles and customer mobile screens (Received → Cooking → Served).",
          icon: <Clock size={22} color="#2563eb" />,
          iconBg: "#eff6ff",
          borderColor: "#bfdbfe",
          tags: ["Table Live Status", "Captain Alert", "Zero Waiter Confusion"]
        },
        {
          name: "Recipe & Inventory Consumption",
          desc: "Deduct raw ingredients automatically from master inventory on every order placed, tracking batch yields and food wastage.",
          icon: <Database size={22} color="#ea580c" />,
          iconBg: "#fff7ed",
          borderColor: "#fed7aa",
          tags: ["Auto Stock Depletion", "Recipe Yield", "Food Cost %"]
        }
      ]
    },
    {
      id: "admin",
      category: "Management & Growth",
      badgeColor: "linear-gradient(135deg, #2563eb, #1d4ed8)",
      badgeBg: "#eff6ff",
      badgeBorder: "#bfdbfe",
      badgeText: "#2563eb",
      items: [
        {
          name: "Table Booking & Seating",
          desc: "Centralized reservation portal with auto table allocation, SMS/WhatsApp booking confirmations, and waitlist management.",
          icon: <CalendarCheck size={22} color="#2563eb" />,
          iconBg: "#eff6ff",
          borderColor: "#bfdbfe",
          tags: ["Online Booking", "WhatsApp Confirm", "Capacity Watchdog"]
        },
        {
          name: "Executive Analytics & P&L",
          desc: "Real-time visibility into daily gross revenue, average table turn times, highest margin dishes, and peak sales hours.",
          icon: <BarChart3 size={22} color="#d97706" />,
          iconBg: "#fffbeb",
          borderColor: "#fde68a",
          tags: ["Hourly Velocity", "Table Turn Time", "Bestseller Matrix"]
        },
        {
          name: "Multi-Outlet & Franchise Sync",
          desc: "Manage multiple restaurant branches, synchronize master menus, compare branch revenues, and control staff permissions from one view.",
          icon: <Globe size={22} color="#7c3aed" />,
          iconBg: "#faf5ff",
          borderColor: "#e9d5ff",
          tags: ["Multi-Branch", "Consolidated P&L", "Staff RBAC"]
        }
      ]
    }
  ];

  const displayedModuleCategories = activeModuleCat === "all"
    ? restaurantModules
    : restaurantModules.filter(c => c.id === activeModuleCat);

  // 5 Step QR Ordering Flow
  const qrSteps = [
    {
      step: "01",
      title: "Scan Table QR Code",
      desc: "Diner scans the table-specific contactless QR code using any smartphone camera. No app download needed.",
      icon: <QrCode size={24} color="#ea580c" />
    },
    {
      step: "02",
      title: "Interactive Digital Menu",
      desc: "A rich digital menu loads in milliseconds with high-res food images, dietary filters (Veg/Non-Veg/Vegan), and descriptions.",
      icon: <Utensils size={24} color="#0d9488" />
    },
    {
      step: "03",
      title: "Customize & Place Order",
      desc: "Guests select modifiers, spice levels, add beverages or extra toppings, and submit their order directly.",
      icon: <ShoppingCart size={24} color="#2563eb" />
    },
    {
      step: "04",
      title: "Instant KDS Kitchen Routing",
      desc: "Kitchen display screens immediately receive the order ticket categorized by station (Kitchen / Bar / Dessert).",
      icon: <ChefHat size={24} color="#7c3aed" />
    },
    {
      step: "05",
      title: "Split UPI Billing & Pay",
      desc: "Instant automated bill generation with dynamic UPI QR code, tip options, split bills, and digital WhatsApp tax invoice.",
      icon: <CreditCard size={24} color="#059669" />
    }
  ];

  // Target Audiences
  const targetAudiences = [
    {
      title: "Cafes & Quick Service (QSR)",
      tag: "Sub-5s Counter Checkouts & Fast Table Turns",
      desc: "Keep ordering queues short, process self-service counter orders effortlessly, and automate digital UPI receipts.",
      icon: <Zap className="w-5 h-5 text-orange-600" />,
      features: ["Self-service QR Menu", "Fast Barcode Billing", "Inventory Low-Stock Alerts", "WhatsApp Invoicing"]
    },
    {
      title: "Dine-In & Casual Dining",
      tag: "Zero Order Errors & Enhanced Guest Experience",
      desc: "Empower tables to order add-ons and desserts on demand while captains oversee guest hospitality with handheld tablets.",
      icon: <Utensils className="w-5 h-5 text-emerald-600" />,
      features: ["Table-wise KOT Sync", "Captain Tablet Ordering", "Split Payment Support", "Customer Khata Accounts"]
    },
    {
      title: "Fine Dining & Bars",
      tag: "Upselling Modifiers & Premium Guest Loyalty",
      desc: "Showcase signature cocktails, chef tastings, and wine pairings with premium digital storytelling menus and automated table booking.",
      icon: <Award className="w-5 h-5 text-purple-600" />,
      features: ["Pre-booking & Table Allocation", "Multi-course KOT Timers", "Guest VIP Profiles", "Integrated Feedback Engine"]
    },
    {
      title: "Cloud Kitchens & Delivery Hubs",
      tag: "Multi-brand KDS & Streamlined Dispatch",
      desc: "Consolidate orders from multiple cloud kitchen brands onto a unified kitchen display system and track delivery rider dispatch.",
      icon: <Server className="w-5 h-5 text-blue-600" />,
      features: ["Multi-Brand KDS Matrix", "Rider Dispatch Tracker", "Raw Ingredient Batch Depletion", "Daily P&L Dashboard"]
    }
  ];

  // Comparison Matrix
  const comparisonItems = [
    { feature: "Table Ordering Method", legacy: "Waiters write paper slips manually (prone to errors)", merlinflow: "Instant smartphone QR scan with custom modifiers" },
    { feature: "Kitchen Order Routing", legacy: "Waiters run physical paper slips to kitchen", merlinflow: "Instant multi-station digital KDS sync in < 1s" },
    { feature: "Menu Updates & Pricing", legacy: "Expensive paper reprinting (₹10k+ every update)", merlinflow: "Instant real-time cloud updates across all tables in 1-click" },
    { feature: "Average Bill Settle Time", legacy: "10-15 minutes waiting for cashier check", merlinflow: "Sub-15 second instant dynamic UPI QR payment" },
    { feature: "Table Turnover Speed", legacy: "Slow transitions during peak rush hours", merlinflow: "30% faster turnover with automated bill closure" },
    { feature: "Inventory & Food Cost", legacy: "Manual end-of-month estimates with high wastage", merlinflow: "Automated recipe-level stock depletion & wastage tracking" }
  ];

  // Pricing Plans
  const pricingPlans = [
    {
      name: "Café Starter",
      tag: "Ideal for single-counter QSRs & small coffee shops",
      monthlyPrice: 1999,
      yearlyPrice: 1599,
      popular: false,
      features: [
        "Up to 15 QR Table Stands",
        "Digital Menu & QR Ordering",
        "High-Speed Counter POS",
        "Dynamic UPI QR Payments",
        "WhatsApp GST Invoices",
        "Basic Daily Sales Analytics",
        "Standard Email & Chat Support"
      ]
    },
    {
      name: "Dine-In Pro (POS + KDS)",
      tag: "Most popular for busy dine-in restaurants & bars",
      monthlyPrice: 3999,
      yearlyPrice: 3199,
      popular: true,
      features: [
        "Unlimited QR Table Ordering",
        "Kitchen Display System (KDS)",
        "Table Booking & Reservation Engine",
        "Captain Mobile / Tablet POS",
        "Recipe & Raw Stock Depletion",
        "Staff RBAC & Tamper Audit Logs",
        "WhatsApp Booking Confirmations",
        "Priority 24/7 Phone & On-Site Support"
      ]
    },
    {
      name: "Multi-Chain Enterprise",
      tag: "For growing restaurant chains & cloud kitchen networks",
      monthlyPrice: 7999,
      yearlyPrice: 6499,
      popular: false,
      features: [
        "Everything in Dine-In Pro",
        "Multi-Branch Centralized Sync",
        "Franchise Royalty & Consolidated P&L",
        "Central Recipe & Menu Push",
        "Custom Restaurant Domain & Branding",
        "Dedicated Account Manager",
        "Custom ERP & Accounting API Sync"
      ]
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "Do customers need to download an app to order via QR code?",
      a: "No! Customers simply open their smartphone camera or Google Lens to scan the table QR code. The digital menu loads instantly in their mobile browser with no app installation required."
    },
    {
      q: "Can customers still place orders with waiters if they prefer?",
      a: "Absolutely. MerlinFlow Restaurant ERP offers a hybrid mode. Waiters and captains can use handheld tablets or smartphones to punch orders on behalf of guests, while other tables self-order via QR."
    },
    {
      q: "Does the system work if internet connectivity drops temporarily?",
      a: "Yes. Our POS architecture features Local Area Network (LAN) fallback. Counter billing and KDS kitchen routing continue uninterrupted even during internet outages, syncing back to the cloud once connectivity resumes."
    },
    {
      q: "How does the Kitchen Display System (KDS) help our chefs?",
      a: "Chefs see incoming tickets color-coded by waiting time. Orders are automatically routed to specific prep stations (e.g. Tandoor, Grill, Bar), eliminating lost paper KOTs and order confusion."
    },
    {
      q: "Can we integrate UPI, credit cards, and split payments?",
      a: "Yes. Customers can pay via dynamic UPI QR codes (PhonePe, GPay, Paytm) right at their table, or cashiers can split the bill across multiple cards, cash, and digital payment modes."
    }
  ];

  // ROI Calculations
  const calculatedRevBoost = Math.round(dailyTables * 30 * avgOrderValue * 0.18);
  const calculatedHoursSaved = Math.round((dailyTables * 30 * 12) / 60);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="restaurant-erp-page">
      {/* Hero Section */}
      <section className="restaurant-hero">
        <div className="hero-bg-container" aria-hidden="true">
          <div className="hero-bg-image" />
          <div className="hero-bg-overlay" />
          <div className="hero-glow-orb" />
        </div>

        <div className="container hero-content-wrap">
          <div className="hero-text-block">
            <div className="hero-top-badge">
              <span className="hero-pulse-dot"></span>
              <span>SMART RESTAURANT AUTOMATION & QR POS</span>
            </div>

            <h1 className="hero-heading">
              Transform Your Restaurant with <br className="hidden-sm" />
              <span className="gradient-text">Smart QR Table Ordering & KDS</span>
            </h1>

            <p className="hero-subtext">
              Digitize menus, eliminate waiter errors, streamline kitchen order dispatch, and increase table turnover by 30%. The all-in-one automation platform for modern dining.
            </p>

            <div className="hero-actions">
              <button onClick={scrollToContact} className="hero-btn-primary">
                Book Free Restaurant Demo <ArrowRight size={18} />
              </button>
              <a href="#qr-workflow" className="hero-btn-secondary">
                <QrCode size={18} className="text-orange-500" /> See Interactive QR Flow
              </a>
            </div>
          </div>

          {/* Hero Metrics Strip */}
          <div className="hero-stats-grid">
            <div className="stat-card">
              <div className="stat-icon-box bg-orange-soft">
                <TrendingUp size={22} color="#ea580c" />
              </div>
              <div className="stat-num text-orange">+20%</div>
              <div className="stat-label">Average Revenue Uplift</div>
              <div className="stat-sub">Via digital upsell & desserts</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-box bg-emerald-soft">
                <Clock size={22} color="#059669" />
              </div>
              <div className="stat-num text-emerald">30%</div>
              <div className="stat-label">Faster Table Turnover</div>
              <div className="stat-sub">Sub-15s instant UPI checkout</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-box bg-blue-soft">
                <Users size={22} color="#2563eb" />
              </div>
              <div className="stat-num text-blue">40%</div>
              <div className="stat-label">Lower Waiter Load</div>
              <div className="stat-sub">Automated table self-ordering</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-box bg-purple-soft">
                <ShieldCheck size={22} color="#7c3aed" />
              </div>
              <div className="stat-num text-purple">99.99%</div>
              <div className="stat-label">Cloud POS Uptime</div>
              <div className="stat-sub">Offline LAN fallback ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Bottlenecks Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><AlertCircle size={14} /> OPERATIONAL CHALLENGES</div>
            <h2 className="section-title">Running a Restaurant Shouldn&apos;t Be Chaotic</h2>
            <p className="section-desc">Traditional manual dining workflows cost you valuable revenue, food waste, and customer loyalty every shift.</p>
          </div>

          <div className="cards-grid-3">
            {painPoints.map((item, idx) => (
              <div key={idx} className="feature-border-card">
                <div className="card-top-row">
                  <div className="card-icon-wrap bg-rose-soft">
                    {item.icon}
                  </div>
                  <span className="card-tag-badge bg-rose-tag">{item.tag}</span>
                </div>
                <h3 className="card-item-title">{item.title}</h3>
                <p className="card-item-desc">{item.desc}</p>
                <div className="card-footer-row">
                  <span className="card-status-label">
                    <span className="status-dot bg-rose-dot"></span>
                    <span>Solved by MerlinFlow</span>
                  </span>
                  <div className="card-arrow-btn">
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Purpose-Built Restaurant Modules */}
      <section id="modules" className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Layers size={14} /> ALL-IN-ONE SUITE</div>
            <h2 className="section-title">Everything You Need to Run & Scale Your Restaurant</h2>
            <p className="section-desc">Integrated front-of-house, kitchen display, inventory, and reservation engines designed for Indian restaurants.</p>

            {/* Category Filter Pills */}
            <div className="category-filters">
              {[
                { id: "all", label: "All Modules (9+)" },
                { id: "foh", label: "Front of House & POS" },
                { id: "kitchen", label: "Kitchen & KDS" },
                { id: "admin", label: "Management & Growth" }
              ].map(cat => (
                <button
                  key={cat.id}
                  className={`cat-pill ${activeModuleCat === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveModuleCat(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="module-stack-container">
            {displayedModuleCategories.map((category) => (
              <div key={category.id} className="module-category-block">
                <div className="category-header-row">
                  <div className="category-badge-pill" style={{ background: category.badgeColor }}>
                    {category.category}
                  </div>
                  <span className="category-counter">{category.items.length} Modules</span>
                </div>

                <div className="cards-grid-3">
                  {category.items.map((mod, idx) => (
                    <div key={idx} className="feature-border-card">
                      <div className="card-main-content">
                        <div className="card-top-row">
                          <div 
                            className="card-icon-wrap" 
                            style={{ background: mod.iconBg, borderColor: mod.borderColor }}
                          >
                            {mod.icon}
                          </div>
                          <span 
                            className="card-tag-badge"
                            style={{ 
                              background: category.badgeBg, 
                              borderColor: category.badgeBorder,
                              color: category.badgeText 
                            }}
                          >
                            {category.id.toUpperCase()}
                          </span>
                        </div>

                        <h3 className="card-item-title">{mod.name}</h3>
                        <p className="card-item-desc">{mod.desc}</p>

                        <div className="card-chips-wrap">
                          {mod.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="card-chip">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="card-footer-row">
                        <span className="card-status-label">
                          <span className="status-dot" style={{ background: mod.borderColor || '#ea580c' }}></span>
                          <span>Verified Capability</span>
                        </span>
                        <div className="card-arrow-btn">
                          <ArrowRight size={13} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step QR Ordering Workflow */}
      <section id="qr-workflow" className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><QrCode size={14} /> INTERACTIVE CUSTOMER JOURNEY</div>
            <h2 className="section-title">How Contactless Table QR Ordering Works</h2>
            <p className="section-desc">A frictionless 5-step ordering and payment experience from table scan to kitchen sync.</p>
          </div>

          <div className="roadmap-cards-grid">
            {qrSteps.map((step, idx) => (
              <div key={idx} className="roadmap-step-card">
                <div className="roadmap-step-badge">{step.step}</div>
                <div className="roadmap-icon-box">{step.icon}</div>
                <h3 className="roadmap-card-title">{step.title}</h3>
                <p className="roadmap-card-desc">{step.desc}</p>
                <div className="roadmap-card-footer">
                  <CheckCircle2 size={14} className="text-orange-500" />
                  <span>Frictionless Step</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Sliders size={14} /> LIVE SYSTEM PREVIEW</div>
            <h2 className="section-title">Built for Managers, Chefs & Cashiers</h2>
            <p className="section-desc">Switch views below to see how our restaurant management software powers your daily service.</p>

            <div className="dashboard-toggle-bar">
              <button 
                className={`dashboard-tab-btn ${activeDashboardTab === "manager" ? "active" : ""}`}
                onClick={() => setActiveDashboardTab("manager")}
              >
                <BarChart3 size={16} /> Manager Overview & Table Grid
              </button>
              <button 
                className={`dashboard-tab-btn ${activeDashboardTab === "kds" ? "active" : ""}`}
                onClick={() => setActiveDashboardTab("kds")}
              >
                <ChefHat size={16} /> Kitchen KDS Display (Live Orders)
              </button>
            </div>
          </div>

          {/* Interactive Live Screen Box */}
          <div className="dashboard-preview-wrapper">
            {activeDashboardTab === "manager" ? (
              <div className="manager-dashboard-view">
                <div className="dash-metrics-row">
                  <div className="dash-metric-card">
                    <span className="dash-metric-label">Today&apos;s Total Orders</span>
                    <span className="dash-metric-value">184 Orders</span>
                    <span className="dash-metric-sub text-emerald">↑ 22% vs last week</span>
                  </div>
                  <div className="dash-metric-card">
                    <span className="dash-metric-label">Gross Collection</span>
                    <span className="dash-metric-value">₹94,620</span>
                    <span className="dash-metric-sub text-emerald">UPI: 72% | Card: 18% | Cash: 10%</span>
                  </div>
                  <div className="dash-metric-card">
                    <span className="dash-metric-label">Average Table Turnaround</span>
                    <span className="dash-metric-value">34 Mins</span>
                    <span className="dash-metric-sub text-emerald">↓ 14 min faster</span>
                  </div>
                </div>

                <div className="table-grid-section">
                  <div className="table-grid-header">
                    <h4>Live Table Status Floor Plan</h4>
                    <div className="table-legend">
                      <span className="legend-item"><span className="legend-dot bg-emerald"></span> Available (4)</span>
                      <span className="legend-item"><span className="legend-dot bg-orange"></span> Dining / Billed (6)</span>
                      <span className="legend-item"><span className="legend-dot bg-purple"></span> Reserved (2)</span>
                    </div>
                  </div>

                  <div className="table-boxes-grid">
                    {[
                      { id: "T1", status: "occupied", order: "₹1,450", time: "18m", items: 4 },
                      { id: "T2", status: "occupied", order: "₹820", time: "8m", items: 2 },
                      { id: "T3", status: "available", order: "--", time: "Ready", items: 0 },
                      { id: "T4", status: "occupied", order: "₹2,340", time: "28m", items: 6 },
                      { id: "T5", status: "available", order: "--", time: "Ready", items: 0 },
                      { id: "T6", status: "reserved", order: "Party of 6", time: "8:00 PM", items: 0 },
                      { id: "T7", status: "occupied", order: "₹1,120", time: "12m", items: 3 },
                      { id: "T8", status: "available", order: "--", time: "Ready", items: 0 },
                      { id: "T9", status: "occupied", order: "₹3,180", time: "32m", items: 8 },
                      { id: "T10", status: "occupied", order: "₹650", time: "4m", items: 2 },
                      { id: "T11", status: "reserved", order: "Party of 4", time: "8:30 PM", items: 0 },
                      { id: "T12", status: "available", order: "--", time: "Ready", items: 0 }
                    ].map((tbl, i) => (
                      <div key={i} className={`table-status-cell status-${tbl.status}`}>
                        <div className="table-num">{tbl.id}</div>
                        <div className="table-val">{tbl.order}</div>
                        <div className="table-time">{tbl.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="kds-dashboard-view">
                <div className="kds-header-bar">
                  <div className="kds-title">
                    <ChefHat size={18} className="text-orange-500" />
                    <span>Kitchen Station Display (Live Active KOTs)</span>
                  </div>
                  <span className="kds-live-tag">● 4 Orders in Prep</span>
                </div>

                <div className="kds-cards-grid">
                  {[
                    { kot: "#KOT-142", table: "Table 4", time: "06:14", items: ["2x Butter Chicken", "4x Garlic Naan", "1x Dal Makhani"], status: "Cooking", priority: "high" },
                    { kot: "#KOT-143", table: "Table 1", time: "03:45", items: ["1x Paneer Tikka", "2x Virgin Mojito", "1x Crispy Corn"], status: "Plating", priority: "med" },
                    { kot: "#KOT-144", table: "Table 7", time: "01:20", items: ["1x Veg Biryani (Extra Spicy)", "1x Raita", "2x Gulab Jamun"], status: "Received", priority: "low" },
                    { kot: "#KOT-145", table: "Table 10", time: "00:45", items: ["2x Cold Coffee", "1x Chicken Club Sandwich"], status: "Received", priority: "low" }
                  ].map((kot, kIdx) => (
                    <div key={kIdx} className={`kds-order-card priority-${kot.priority}`}>
                      <div className="kds-card-head">
                        <div>
                          <span className="kds-kot-num">{kot.kot}</span>
                          <span className="kds-table-badge">{kot.table}</span>
                        </div>
                        <span className="kds-timer"><Clock size={12} /> {kot.time}</span>
                      </div>
                      <div className="kds-items-list">
                        {kot.items.map((it, idx) => (
                          <div key={idx} className="kds-item-row">
                            <span className="kds-item-check">✓</span>
                            <span>{it}</span>
                          </div>
                        ))}
                      </div>
                      <div className="kds-card-foot">
                        <span className="kds-status-badge">{kot.status}</span>
                        <button className="kds-complete-btn">Mark Done ✓</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Users size={14} /> TAILORED SOLUTIONS</div>
            <h2 className="section-title">Built for Every Format of Modern Dining</h2>
            <p className="section-desc">Whether you run a single busy café or a 10-outlet dining chain, MerlinFlow adapts to your exact operational style.</p>
          </div>

          <div className="cards-grid-4">
            {targetAudiences.map((aud, idx) => (
              <div key={idx} className="feature-border-card">
                <div className="card-top-row">
                  <div className="card-icon-wrap bg-orange-soft">
                    {aud.icon}
                  </div>
                  <span className="card-tag-badge bg-orange-tag">DEDICATED</span>
                </div>
                <h3 className="card-item-title">{aud.title}</h3>
                <p className="card-item-desc">{aud.desc}</p>
                <div className="audience-features-list">
                  {aud.features.map((f, fIdx) => (
                    <div key={fIdx} className="aud-feature-item">
                      <Check size={12} className="text-orange-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="card-footer-row">
                  <span className="card-status-label">
                    <span className="status-dot bg-orange-dot"></span>
                    <span>Format Ready</span>
                  </span>
                  <div className="card-arrow-btn">
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section className="section-padding">
        <div className="container">
          <div className="calculator-panel-box">
            <div className="calculator-layout">
              <div className="calc-inputs-col">
                <div className="pill-tag"><Calculator size={14} /> ROI ESTIMATOR</div>
                <h2 className="calc-title">Calculate Your Monthly Revenue Boost</h2>
                <p className="calc-desc">See how much additional revenue and table turnaround time your restaurant unlocks with QR ordering and automated KDS billing.</p>

                <div className="slider-item">
                  <div className="slider-header">
                    <span>Daily Tables Served</span>
                    <span className="slider-val-highlight">{dailyTables} Tables / day</span>
                  </div>
                  <input 
                    type="range" 
                    min="30" 
                    max="500" 
                    step="10" 
                    value={dailyTables} 
                    onChange={(e) => setDailyTables(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="slider-range-labels">
                    <span>30 tables</span>
                    <span>500 tables</span>
                  </div>
                </div>

                <div className="slider-item">
                  <div className="slider-header">
                    <span>Average Bill Value (AOV)</span>
                    <span className="slider-val-highlight">₹{avgOrderValue.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="200" 
                    max="3000" 
                    step="50" 
                    value={avgOrderValue} 
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="slider-range-labels">
                    <span>₹200</span>
                    <span>₹3,000</span>
                  </div>
                </div>
              </div>

              <div className="calc-results-col">
                <div className="roi-result-card">
                  <span className="roi-label">Estimated Monthly Revenue Boost</span>
                  <div className="roi-big-num">₹{calculatedRevBoost.toLocaleString()}</div>
                  <p className="roi-subtext">From 18% higher digital upsell, beverage prompts, and dessert re-orders.</p>

                  <div className="roi-divider"></div>

                  <div className="roi-secondary-stat">
                    <span className="sec-label">Table Waiting Hours Saved</span>
                    <span className="sec-num">{calculatedHoursSaved} Hours / Month</span>
                  </div>

                  <button onClick={scrollToContact} className="calc-action-btn">
                    Unlock This Growth for Your Restaurant <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Sparkles size={14} /> SYSTEM COMPARISON</div>
            <h2 className="section-title">Why Restaurants Choose MerlinFlow</h2>
            <p className="section-desc">See the clear performance difference between traditional manual operations and our smart cloud restaurant OS.</p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="col-feat">Workflow Area</th>
                  <th className="col-legacy">Legacy Paper & Desktop Billing</th>
                  <th className="col-merlinflow">MerlinFlow Smart Restaurant ERP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="cell-feat font-bold">{item.feature}</td>
                    <td className="cell-legacy text-muted">{item.legacy}</td>
                    <td className="cell-merlinflow text-orange font-semibold">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        <span>{item.merlinflow}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Quote size={14} /> VERIFIED STORIES</div>
            <h2 className="section-title">Loved by 200+ Restaurant Owners</h2>
            <p className="section-desc">See how top restaurants, cafes, and multi-branch food chains elevated their guest experience.</p>
          </div>

          <div className="cards-grid-3">
            {[
              {
                quote: "Order errors dropped to virtually zero after introducing the table QR system. Our weekend rush hours run smoothly without kitchen panic, and table turnover is 30% faster.",
                name: "Rajesh Sharma",
                role: "Owner, Spice Garden Restaurant",
                location: "Hyderabad",
                stars: 5
              },
              {
                quote: "We reduced our front-of-house waiter requirements from 8 staff to 5 while increasing customer satisfaction. The KDS display keeps our kitchen station chefs perfectly synchronized.",
                name: "Vikram Reddy",
                role: "Director, Coastal Bites Café & Bar",
                location: "Bangalore",
                stars: 5
              },
              {
                quote: "Updating daily specials or festival menus takes 10 seconds. No more printing costs, and our customers love splitting UPI payments at the table right from their phones.",
                name: "Ananya Sen",
                role: "Operations Manager, Royal Tandoor Hub",
                location: "Mumbai",
                stars: 5
              }
            ].map((test, tIdx) => (
              <div key={tIdx} className="feature-border-card">
                <div className="stars-row">
                  {[...Array(test.stars)].map((_, s) => (
                    <Star key={s} size={15} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="testimonial-quote">&ldquo;{test.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{test.name[0]}</div>
                  <div>
                    <h4 className="author-name">{test.name}</h4>
                    <p className="author-role">{test.role} • {test.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><CreditCard size={14} /> TRANSPARENT PRICING</div>
            <h2 className="section-title">Simple, Predictable Restaurant Software Plans</h2>
            <p className="section-desc">No hidden commissions or per-order transaction fees. Pay a flat subscription for complete peace of mind.</p>

            <div className="pricing-toggle-wrap">
              <span className={!isYearlyPricing ? "active font-bold" : "text-muted"}>Monthly</span>
              <button 
                className={`pricing-switch-btn ${isYearlyPricing ? "yearly" : ""}`}
                onClick={() => setIsYearlyPricing(!isYearlyPricing)}
                aria-label="Toggle annual pricing"
              >
                <span className="switch-slider"></span>
              </button>
              <span className={isYearlyPricing ? "active font-bold" : "text-muted"}>
                Annual <span className="discount-pill">20% OFF</span>
              </span>
            </div>
          </div>

          <div className="cards-grid-3">
            {pricingPlans.map((plan, pIdx) => {
              const price = isYearlyPricing ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <div key={pIdx} className={`pricing-border-card ${plan.popular ? "popular-plan" : ""}`}>
                  {plan.popular && <div className="popular-badge">RECOMMENDED FOR DINE-IN</div>}
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tag">{plan.tag}</p>

                  <div className="plan-price-row">
                    <span className="plan-curr">₹</span>
                    <span className="plan-val">{price.toLocaleString()}</span>
                    <span className="plan-period">/ month</span>
                  </div>

                  <button onClick={scrollToContact} className={`plan-action-btn ${plan.popular ? "btn-solid" : "btn-outline"}`}>
                    Get Started with {plan.name}
                  </button>

                  <div className="plan-features-list">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="plan-feat-row">
                        <Check size={14} className="text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><HelpCircle size={14} /> FREQUENTLY ASKED QUESTIONS</div>
            <h2 className="section-title">Everything You Need to Know</h2>
            <p className="section-desc">Got questions about setup, hardware compatibility, or menu migration? We&apos;ve got answers.</p>
          </div>

          <div className="faq-accordion-box">
            {faqs.map((faq, fIdx) => (
              <div 
                key={fIdx} 
                className={`faq-item ${openFaq === fIdx ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === fIdx ? -1 : fIdx)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="faq-chevron" />
                </div>
                {openFaq === fIdx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Contact Form Section */}
      <div id="contact" className="contact-embed-wrapper">
        <ContactSection />
      </div>

      <style jsx>{`
        .restaurant-erp-page {
          min-height: 100vh;
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-padding {
          padding: 5.5rem 0;
        }

        .bg-light {
          background-color: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        /* HERO SECTION */
        .restaurant-hero {
          position: relative;
          padding: 8.5rem 0 4.5rem;
          overflow: hidden;
          background-color: #fcfbf9;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-image: url('/images/resturant_hero_bg.jpg');
          background-size: cover;
          background-position: left 25%;
          background-repeat: no-repeat;
          opacity: 0.68;
          filter: saturate(1.18) brightness(0.86);
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(252, 251, 249, 0.15) 0%,
            rgba(252, 251, 249, 0.38) 32%,
            rgba(252, 251, 249, 0.82) 65%,
            rgba(252, 251, 249, 0.96) 100%
          ),
          linear-gradient(
            180deg,
            rgba(252, 251, 249, 0.2) 0%,
            transparent 40%,
            #fcfbf9 100%
          );
        }

        .hero-glow-orb {
          position: absolute;
          top: 5%;
          right: 15%;
          width: 600px;
          height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, rgba(234, 88, 12, 0) 70%);
          filter: blur(80px);
        }

        .hero-content-wrap {
          position: relative;
          z-index: 10;
        }

        .hero-text-block {
          max-width: 720px;
          margin-left: auto;
          margin-right: 0;
          text-align: left;
          padding-left: 1.5rem;
        }

        .hero-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          color: #ea580c;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
        }

        .hero-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ea580c;
          box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.3);
        }

        .hero-heading {
          font-size: 3.15rem;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #0f172a;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ea580c, #c2410c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtext {
          font-size: 1.15rem;
          color: #475569;
          max-width: 680px;
          margin: 0 0 2.5rem 0;
          line-height: 1.6;
          font-weight: 450;
          text-align: left;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1.25rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ea580c;
          color: #ffffff;
          padding: 0.95rem 2rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 25px -5px rgba(234, 88, 12, 0.35);
        }

        .hero-btn-primary:hover {
          background: #c2410c;
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -5px rgba(234, 88, 12, 0.45);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffffff;
          color: #334155;
          border: 1.5px solid #e2e8f0;
          padding: 0.95rem 1.8rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .hero-btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          transform: translateY(-2px);
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          text-align: left;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          border: 1.5px solid rgba(226, 232, 240, 0.95);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 8px 24px -4px rgba(0,0,0,0.06);
          transition: transform 0.25s, border-color 0.25s;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          border-color: #cbd5e1;
        }

        .stat-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .stat-num {
          font-size: 1.85rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 0.35rem;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        .stat-sub {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 500;
        }

        .bg-orange-soft { background: #fff7ed; }
        .bg-emerald-soft { background: #ecfdf5; }
        .bg-blue-soft { background: #eff6ff; }
        .bg-purple-soft { background: #faf5ff; }
        .bg-rose-soft { background: #fff1f2; }

        .text-orange { color: #ea580c; }
        .text-emerald { color: #059669; }
        .text-blue { color: #2563eb; }
        .text-purple { color: #7c3aed; }

        /* SECTION HEADINGS */
        .section-header-center {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 3.5rem;
        }

        .pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #ea580c;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.35rem;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-desc {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* 3 COLUMN & 4 COLUMN CARDS GRID */
        .cards-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .cards-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        /* UNIVERSAL BORDER CARD */
        .feature-border-card {
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
        }

        .feature-border-card:hover {
          border-color: #cbd5e1;
          transform: translateY(-5px);
          box-shadow: 0 16px 28px -6px rgba(15, 23, 42, 0.1), 0 6px 10px -4px rgba(0, 0, 0, 0.04);
        }

        .card-main-content {
          display: flex;
          flex-direction: column;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.1rem;
        }

        .card-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .feature-border-card:hover .card-icon-wrap {
          transform: scale(1.08) rotate(2deg);
        }

        .card-tag-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid #e2e8f0;
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
        }

        .bg-rose-tag {
          color: #e11d48;
          background: #fff1f2;
          border-color: #fecdd3;
        }

        .bg-orange-tag {
          color: #ea580c;
          background: #fff7ed;
          border-color: #fed7aa;
        }

        .card-item-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.45rem;
          line-height: 1.35;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }

        .feature-border-card:hover .card-item-title {
          color: #ea580c;
        }

        .card-item-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
          font-weight: 450;
        }

        .card-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: 0.85rem;
        }

        .card-chip {
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

        .feature-border-card:hover .card-chip {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .card-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .card-status-label {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: #64748b;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .bg-rose-dot { background: #e11d48; }
        .bg-orange-dot { background: #ea580c; }

        .card-arrow-btn {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .feature-border-card:hover .card-arrow-btn {
          transform: translateX(3px);
          background: #ea580c;
          border-color: #ea580c;
          color: #ffffff;
        }

        /* AUDIENCE LIST */
        .audience-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-top: 0.75rem;
        }

        .aud-feature-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #475569;
        }

        /* CATEGORY FILTER PILLS */
        .category-filters {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .cat-pill {
          padding: 0.55rem 1.25rem;
          border-radius: 50px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #64748b;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cat-pill.active, .cat-pill:hover {
          background: #ea580c;
          border-color: #ea580c;
          color: #ffffff;
        }

        .module-stack-container {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
          margin-top: 1rem;
        }

        .module-category-block {
          background: transparent;
        }

        .category-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .category-badge-pill {
          padding: 0.4rem 1.25rem;
          border-radius: 50px;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
        }

        .category-counter {
          font-size: 0.85rem;
          font-weight: 700;
          color: #ea580c;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
        }

        /* 5 STEP ROADMAP CARDS */
        .roadmap-cards-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
        }

        .roadmap-step-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.04);
          position: relative;
          transition: transform 0.25s;
        }

        .roadmap-step-card:hover {
          transform: translateY(-5px);
          border-color: #cbd5e1;
        }

        .roadmap-step-badge {
          font-size: 0.7rem;
          font-weight: 900;
          color: #ea580c;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          padding: 0.2rem 0.6rem;
          border-radius: 50px;
          width: fit-content;
          margin-bottom: 1rem;
        }

        .roadmap-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .roadmap-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.4rem;
          line-height: 1.3;
        }

        .roadmap-card-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .roadmap-card-footer {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: #ea580c;
          padding-top: 0.75rem;
          border-top: 1px solid #f1f5f9;
        }

        /* DASHBOARD PREVIEW */
        .dashboard-toggle-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .dashboard-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          color: #475569;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .dashboard-tab-btn.active {
          background: #ea580c;
          border-color: #ea580c;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(234, 88, 12, 0.25);
        }

        .dashboard-preview-wrapper {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.25rem;
          box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.08);
          margin-top: 1.5rem;
        }

        .dash-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .dash-metric-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
        }

        .dash-metric-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748b;
          margin-bottom: 0.35rem;
        }

        .dash-metric-value {
          font-size: 1.75rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .dash-metric-sub {
          font-size: 0.75rem;
          font-weight: 700;
        }

        .table-grid-section {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
        }

        .table-grid-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .table-grid-header h4 {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .table-legend {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #64748b;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .bg-emerald { background: #059669; }
        .bg-orange { background: #ea580c; }
        .bg-purple { background: #7c3aed; }

        .table-boxes-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.85rem;
        }

        .table-status-cell {
          border-radius: 12px;
          padding: 0.85rem 0.5rem;
          text-align: center;
          border: 1.5px solid;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .status-occupied {
          background: #fff7ed;
          border-color: #fed7aa;
          color: #ea580c;
        }

        .status-available {
          background: #ecfdf5;
          border-color: #a7f3d0;
          color: #059669;
        }

        .status-reserved {
          background: #faf5ff;
          border-color: #e9d5ff;
          color: #7c3aed;
        }

        .table-num {
          font-size: 0.95rem;
          font-weight: 900;
          margin-bottom: 0.15rem;
        }

        .table-val {
          font-size: 0.75rem;
          font-weight: 700;
        }

        .table-time {
          font-size: 0.65rem;
          opacity: 0.8;
          margin-top: 0.15rem;
        }

        /* KDS VIEW */
        .kds-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 1.5rem;
        }

        .kds-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
        }

        .kds-live-tag {
          font-size: 0.8rem;
          font-weight: 800;
          color: #059669;
          background: #ecfdf5;
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
        }

        .kds-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .kds-order-card {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .priority-high { border-color: #fca5a5; background: #fff1f2; }
        .priority-med { border-color: #fed7aa; background: #fff7ed; }
        .priority-low { border-color: #e2e8f0; }

        .kds-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .kds-kot-num {
          font-size: 0.85rem;
          font-weight: 900;
          color: #0f172a;
          margin-right: 0.4rem;
        }

        .kds-table-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: #ea580c;
          background: #ffffff;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        .kds-timer {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: #e11d48;
        }

        .kds-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }

        .kds-item-row {
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
        }

        .kds-item-check {
          color: #059669;
          font-weight: 900;
        }

        .kds-card-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        .kds-status-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: #ea580c;
          text-transform: uppercase;
        }

        .kds-complete-btn {
          background: #059669;
          color: #ffffff;
          border: none;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          cursor: pointer;
        }

        /* ROI CALCULATOR */
        .calculator-panel-box {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          padding: 3rem;
          box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.05);
        }

        .calculator-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        .calc-title {
          font-size: 2.1rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .calc-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .slider-item {
          margin-bottom: 1.75rem;
        }

        .slider-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          font-weight: 700;
          color: #334155;
          margin-bottom: 0.6rem;
        }

        .slider-val-highlight {
          color: #ea580c;
          font-weight: 900;
        }

        .calc-range-slider {
          width: 100%;
          accent-color: #ea580c;
          height: 6px;
          cursor: pointer;
        }

        .slider-range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 600;
          margin-top: 0.35rem;
        }

        .roi-result-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.25rem;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
          text-align: center;
        }

        .roi-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .roi-big-num {
          font-size: 3rem;
          font-weight: 900;
          color: #ea580c;
          line-height: 1.1;
          margin: 0.5rem 0 0.4rem;
        }

        .roi-subtext {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
        }

        .roi-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 1.5rem 0;
        }

        .roi-secondary-stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .sec-label {
          color: #475569;
          font-weight: 600;
        }

        .sec-num {
          font-weight: 800;
          color: #059669;
        }

        .calc-action-btn {
          width: 100%;
          background: #ea580c;
          color: #ffffff;
          padding: 0.95rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background 0.2s;
        }

        .calc-action-btn:hover {
          background: #c2410c;
        }

        /* COMPARISON TABLE */
        .comparison-table-wrapper {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .comparison-table th {
          background: #f8fafc;
          padding: 1.25rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 800;
          color: #0f172a;
          border-bottom: 1.5px solid #e2e8f0;
        }

        .comparison-table td {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.9rem;
        }

        .col-merlinflow {
          background: #fff7ed !important;
          color: #ea580c !important;
        }

        /* TESTIMONIALS */
        .stars-row {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 0.85rem;
        }

        .testimonial-quote {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.25rem;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 0.85rem;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .author-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ea580c;
          color: #ffffff;
          font-weight: 900;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-name {
          font-size: 0.9rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .author-role {
          font-size: 0.75rem;
          color: #64748b;
          margin: 0;
        }

        /* PRICING */
        .pricing-toggle-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 0.95rem;
          margin-top: 1.5rem;
        }

        .pricing-switch-btn {
          width: 48px;
          height: 26px;
          border-radius: 50px;
          background: #cbd5e1;
          border: none;
          position: relative;
          cursor: pointer;
          transition: background 0.2s;
        }

        .pricing-switch-btn.yearly {
          background: #ea580c;
        }

        .switch-slider {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffffff;
          transition: transform 0.2s;
        }

        .pricing-switch-btn.yearly .switch-slider {
          transform: translateX(22px);
        }

        .discount-pill {
          font-size: 0.7rem;
          font-weight: 800;
          color: #059669;
          background: #ecfdf5;
          padding: 0.2rem 0.5rem;
          border-radius: 50px;
          margin-left: 0.35rem;
        }

        .pricing-border-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.04);
          transition: transform 0.25s;
        }

        .popular-plan {
          border-color: #ea580c;
          box-shadow: 0 14px 30px -5px rgba(234, 88, 12, 0.15);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #ea580c;
          color: #ffffff;
          font-size: 0.68rem;
          font-weight: 900;
          padding: 0.3rem 0.9rem;
          border-radius: 50px;
          letter-spacing: 0.05em;
        }

        .plan-name {
          font-size: 1.35rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        .plan-tag {
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 1.5rem;
          min-height: 38px;
        }

        .plan-price-row {
          display: flex;
          align-items: baseline;
          margin-bottom: 1.5rem;
        }

        .plan-curr {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
        }

        .plan-val {
          font-size: 2.5rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1;
        }

        .plan-period {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 600;
          margin-left: 0.35rem;
        }

        .plan-action-btn {
          width: 100%;
          padding: 0.85rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          margin-bottom: 2rem;
          transition: all 0.2s;
        }

        .btn-solid {
          background: #ea580c;
          color: #ffffff;
          border: none;
        }

        .btn-solid:hover {
          background: #c2410c;
        }

        .btn-outline {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          color: #0f172a;
        }

        .btn-outline:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .plan-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .plan-feat-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #334155;
          font-weight: 500;
        }

        /* FAQ ACCORDION */
        .faq-accordion-box {
          max-width: 840px;
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
          transition: all 0.2s;
        }

        .faq-item.open {
          border-color: #ea580c;
          box-shadow: 0 6px 20px -4px rgba(234, 88, 12, 0.1);
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.02rem;
          font-weight: 800;
          color: #0f172a;
        }

        .faq-chevron {
          transition: transform 0.2s;
          color: #ea580c;
        }

        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }

        .faq-answer {
          margin-top: 0.85rem;
          padding-top: 0.85rem;
          border-top: 1px solid #f1f5f9;
        }

        .faq-answer p {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .contact-embed-wrapper {
          border-top: 1px solid #e2e8f0;
        }

        /* RESPONSIVENESS */
        @media (max-width: 1024px) {
          .hero-stats-grid, .cards-grid-4, .kds-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cards-grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
          .roadmap-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .table-boxes-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .calculator-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .hero-heading {
            font-size: 2.2rem;
          }
          .hero-stats-grid, .cards-grid-3, .cards-grid-4, .roadmap-cards-grid, .dash-metrics-row, .kds-cards-grid {
            grid-template-columns: 1fr;
          }
          .table-boxes-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .calculator-panel-box {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
