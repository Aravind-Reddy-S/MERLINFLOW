"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  ShoppingBag, 
  Briefcase, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Users, 
  X, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ClientShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Deployments", icon: Layers },
    { id: "ecommerce", label: "SaaS & E-Commerce", icon: ShoppingBag },
    { id: "enterprise", label: "Real Estate CRM Models", icon: Briefcase },
    { id: "real-estate", label: "Performance Marketing & PropTech", icon: Building2 },
  ];

  const projects = [
    {
      id: "oneclickbiz-smart-networking-saas",
      title: "OneClickBiz - Digital Business Card (vCard), NFC & WhatsApp Store SaaS",
      client: "OneClickBiz",
      liveUrl: "https://oneclickbiz.in",
      displayUrl: "oneclickbiz.in",
      location: "India & Global",
      category: "ecommerce",
      categoryLabel: "Digital Identity & SaaS",
      badge: "NFC Smart Identity",
      featured: true,
      summary: "Comprehensive Smart Digital Identity & Networking SaaS combining dynamic NFC smart cards, interactive vCard profiles with 1-click contact downloads (.vcf), integrated WhatsApp mini-store e-commerce, and appointment booking.",
      metrics: [
        { label: "Smart Profile Taps", value: "250,000+" },
        { label: "Contact Save Rate", value: "88.4%" },
        { label: "WhatsApp Store Leads", value: "3.8x Boost" }
      ],
      techStack: ["Next.js Architecture", "Dynamic NFC Routing", "WhatsApp Order Engine", "Razorpay Multi-Gateway", "Real-Time Analytics"],
      keyFeatures: [
        "Dynamic NFC & QR Smart Profiles with 1-click 'Save Contact (.vcf)'",
        "Integrated WhatsApp Mini-Store with direct cart-to-chat order routing",
        "Interactive appointment booking calendar & inquiry forms with file attachments",
        "Tiered SaaS subscription engine with multi-gateway payments & affiliate tracking"
      ]
    },
    {
      id: "nestinfra-real-estate-crm",
      title: "Nest Infra Developers - Real Estate CRM & Sales Automation Model",
      client: "Nest Infra Developers",
      liveUrl: "https://crm.nestinfradevelopers.in",
      displayUrl: "crm.nestinfradevelopers.in",
      location: "Hyderabad & Telangana",
      category: "enterprise",
      categoryLabel: "Real Estate CRM",
      badge: "CRM Business Model",
      featured: true,
      summary: "Specialized CRM model engineered for real estate developers and infrastructure builders. Automates channel partner broker lead distribution, site-visit tracking, live unit inventory matrices, and customer payment milestone schedules.",
      metrics: [
        { label: "Broker Lead Response", value: "< 2 Mins" },
        { label: "Lead Leakage Reduction", value: "-92%" },
        { label: "Pipeline Value Managed", value: "₹450 Cr+" }
      ],
      techStack: ["Real Estate CRM Engine", "Next.js Enterprise", "Interactive Unit Inventory Grid", "WhatsApp API", "PostgreSQL RBAC"],
      keyFeatures: [
        "Omnichannel broker lead capture with automated channel partner attribution",
        "Dynamic unit inventory matrix with instant reservation locking",
        "Customer installment tracking with automated RERA progress billing notes",
        "Executive real estate sales dashboards with project absorption analytics"
      ]
    },
    {
      id: "kalaakshi-culture-events-ecommerce",
      title: "Kalaakshi - Culture, Heritage & Event Show Bookings Platform",
      client: "Kalaakshi",
      liveUrl: "https://www.kalaakshi.com",
      displayUrl: "www.kalaakshi.com",
      location: "India",
      category: "ecommerce",
      categoryLabel: "Cultural E-Commerce",
      badge: "Culture & Show Bookings",
      featured: true,
      summary: "Dynamic cultural event ticketing, traditional show bookings, and Indian heritage promotion e-commerce platform featuring interactive seat selection, artist spotlights, instant show reservations, and traditional merchandise.",
      metrics: [
        { label: "Show Ticket Bookings", value: "35,000+" },
        { label: "Cultural Events Hosted", value: "180+ Shows" },
        { label: "Audience Engagement", value: "+340%" }
      ],
      techStack: ["Event Ticketing Engine", "Next.js 15", "Seat Reservation Matrix", "Razorpay / UPI Gateway", "QR Show Pass Generator"],
      keyFeatures: [
        "Live interactive seat-tier selection & instant QR digital show pass dispatch",
        "Cultural event discovery with artist profiles, performance trailers & schedules",
        "Seamless UPI & Multi-Card payment checkout with instant WhatsApp ticket delivery",
        "Organizer portal for live gate check-in scanning and ticket revenue analytics"
      ]
    },
    {
      id: "himastech-growth-proptech",
      title: "HimasTech - Performance Marketing, Training Academy & Enterprise PropTech",
      client: "HimasTech (Synergy with MerlinFlow)",
      liveUrl: "https://himastech.com",
      displayUrl: "himastech.com",
      location: "India & Global",
      category: "real-estate",
      categoryLabel: "Marketing & PropTech",
      badge: "Agency & Academy",
      featured: true,
      summary: "High-impact performance marketing engine, Generative AI Search Optimization (GEO) architecture, digital talent training academy, and integrated MerlinFlow enterprise SaaS solutions ecosystem.",
      metrics: [
        { label: "Client ROAS Boost", value: "4.8x Avg" },
        { label: "CAC Reduction", value: "-48%" },
        { label: "Trained Marketers", value: "1,200+ Alumni" }
      ],
      techStack: ["Next.js App Router", "Tailwind CSS v4", "Generative Engine Optimization (GEO)", "Server-Side CAPI", "Interactive ROI Simulator"],
      keyFeatures: [
        "Generative Engine Optimization (GEO) & Search Marketing for AI Overviews & ChatGPT",
        "Paid Media & Demand Gen with Server-Side Conversions API (CAPI) attribution",
        "Cohort-Based Digital Marketing Training Academy with live sandbox ad budgets",
        "Seamless deployment of MerlinFlow Enterprise Software (Real Estate, Healthcare, ERP)"
      ]
    }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(proj => {
      const matchesCategory = selectedCategory === "all" || proj.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === "" || 
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (proj.displayUrl && proj.displayUrl.toLowerCase().includes(searchQuery.toLowerCase())) ||
        proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, projects]);

  return (
    <section id="deployments" className="showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="showcase-badge"
          >
            <Sparkles size={15} />
            <span>Live Client Deployments & Architectures</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="showcase-heading"
          >
            Engineered for Impact. <br />
            <span className="text-gradient">Proven at Global Enterprise Scale.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="showcase-subtext"
          >
            Explore live production systems built and powered by MerlinFlow across Smart SaaS, Real Estate CRM Models, Cultural E-Commerce, and Growth Marketing.
          </motion.p>
        </div>

        {/* Filter & Search Bar */}
        <div className="showcase-filter-bar">
          <div className="filter-scroll-wrapper">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`filter-btn ${isActive ? "active" : ""}`}
                >
                  <IconComponent size={16} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="search-box-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search deployments, domains, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery("")}>
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="empty-state-box">
            <Layers size={40} className="empty-icon" />
            <h3>No matching projects found</h3>
            <p>Try resetting the search or selecting another category.</p>
            <button 
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="reset-btn"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="showcase-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="deployment-card">
                <div className="card-top-row">
                  <span className="category-tag">{project.categoryLabel}</span>
                  <span className="badge-tag">{project.badge}</span>
                </div>

                <h3 className="card-title">{project.title}</h3>

                <div className="client-meta-line">
                  <span className="client-bold">{project.client}</span>
                  {project.displayUrl && (
                    <>
                      <span className="dot-sep">•</span>
                      <span className="domain-text">{project.displayUrl}</span>
                    </>
                  )}
                  <span className="dot-sep">•</span>
                  <span className="loc-text">{project.location}</span>
                </div>

                <p className="card-summary">{project.summary}</p>

                {/* Key Metrics */}
                <div className="metrics-strip">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="metric-cell">
                      <span className="m-val">{m.value}</span>
                      <span className="m-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Key Features */}
                <div className="key-bullets-list">
                  {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="bullet-item">
                      <CheckCircle2 size={14} className="bullet-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="tech-chips-row">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="chip">{tech}</span>
                  ))}
                </div>

                {/* Card Action */}
                <div className="card-action-bottom">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="visit-live-btn"
                  >
                    <span>Visit Live Platform ({project.displayUrl})</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .showcase-section {
          padding: 4.5rem 0 3.5rem;
          background: #ffffff;
          position: relative;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .section-header-center {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 2.25rem auto;
        }

        .showcase-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 1rem;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.25);
          border-radius: 50px;
          color: #2563eb;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }

        .showcase-heading {
          font-size: clamp(1.8rem, 3.2vw, 2.4rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.75rem;
          color: #0f172a;
        }

        .text-gradient {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .showcase-subtext {
          font-size: clamp(0.92rem, 1.2vw, 1.05rem);
          color: #475569;
          line-height: 1.55;
        }

        .showcase-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.85rem;
          flex-wrap: wrap;
          margin-bottom: 1.75rem;
        }

        .filter-scroll-wrapper {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 0.2rem;
        }

        .filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.95rem;
          border-radius: 50px;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          color: #475569;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: #2563eb;
          border-color: #3b82f6;
          background: #ffffff;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 3px 12px rgba(37, 99, 235, 0.25);
        }

        .search-box-wrapper {
          position: relative;
          min-width: 250px;
          flex: 1;
          max-width: 340px;
        }

        .search-icon {
          position: absolute;
          left: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 0.45rem 2rem 0.45rem 2.3rem;
          border-radius: 50px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #0f172a;
          font-size: 0.84rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .search-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        .clear-btn {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 1fr;
          gap: 1.35rem 1.35rem;
        }

        .deployment-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 14px;
          padding: 1.35rem 1.4rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          height: 100%;
        }

        .deployment-card:hover {
          transform: translateY(-3px);
          border-color: #2563eb;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1);
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .category-tag {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.08);
          padding: 0.22rem 0.6rem;
          border-radius: 50px;
        }

        .badge-tag {
          font-size: 0.68rem;
          font-weight: 700;
          color: #059669;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.2rem 0.55rem;
          border-radius: 50px;
        }

        .card-title {
          font-size: 1.12rem;
          font-weight: 700;
          line-height: 1.35;
          margin: 0 0 0.35rem 0;
          color: #0f172a;
        }

        .client-meta-line {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 0.65rem;
          flex-wrap: wrap;
        }

        .client-bold {
          color: #334155;
          font-weight: 600;
        }

        .domain-text {
          color: #2563eb;
          font-weight: 600;
        }

        .dot-sep {
          opacity: 0.4;
        }

        .card-summary {
          font-size: 0.84rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 0.85rem;
          flex-grow: 1;
        }

        .metrics-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
          background: #f8fafc;
          padding: 0.55rem 0.65rem;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          margin-bottom: 0.85rem;
        }

        .metric-cell {
          text-align: center;
        }

        .m-val {
          display: block;
          font-size: 1.05rem;
          font-weight: 800;
          color: #0284c7;
          line-height: 1.15;
        }

        .m-lbl {
          display: block;
          font-size: 0.65rem;
          color: #64748b;
          margin-top: 0.1rem;
          font-weight: 600;
        }

        .key-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 0.85rem;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: #334155;
          line-height: 1.35;
        }

        :global(.bullet-icon) {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tech-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.15rem;
        }

        .chip {
          font-size: 0.68rem;
          font-weight: 600;
          padding: 0.15rem 0.5rem;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 5px;
          color: #475569;
        }

        .card-action-bottom {
          margin-top: auto;
        }

        .visit-live-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          width: 100%;
          padding: 0.6rem 1.1rem;
          border-radius: 8px;
          background: #2563eb;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 3px 10px rgba(37, 99, 235, 0.18);
        }

        .visit-live-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 5px 14px rgba(37, 99, 235, 0.28);
        }

        .empty-state-box {
          text-align: center;
          padding: 3rem 1rem;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px dashed #cbd5e1;
        }

        .empty-icon {
          color: #94a3b8;
          margin-bottom: 0.75rem;
        }

        .reset-btn {
          margin-top: 0.75rem;
          padding: 0.5rem 1.2rem;
          background: #2563eb;
          color: #ffffff;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.82rem;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 992px) {
          .showcase-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
