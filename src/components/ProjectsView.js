"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
  ArrowRight, 
  Sparkles,
  Code2,
  Globe2
} from "lucide-react";

export default function ProjectsView() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Projects", icon: Layers },
    { id: "ecommerce", label: "SaaS & Digital Commerce", icon: ShoppingBag },
    { id: "enterprise", label: "Real Estate CRM Models", icon: Briefcase },
    { id: "real-estate", label: "Performance Marketing & Tech", icon: Building2 },
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
      year: "2025 - 2026",
      summary: "Comprehensive Smart Digital Identity & Networking SaaS combining dynamic NFC smart cards, interactive vCard profiles with 1-click contact downloads (.vcf), integrated WhatsApp mini-store e-commerce, and appointment booking.",
      metrics: [
        { label: "Smart Profile Taps", value: "250,000+" },
        { label: "Contact Save Rate", value: "88.4%" },
        { label: "WhatsApp Store Leads", value: "3.8x Boost" }
      ],
      techStack: ["Next.js Architecture", "Dynamic NFC Routing", "WhatsApp Order Engine", "Cashfree Multi-Gateway", "Real-Time Analytics"],
      challenge: "Legacy vCard scripts suffered from bloated hybrid script loading (Bootstrap, jQuery, and Livewire), generic stock template design, and sluggish mobile responsiveness, restricting enterprise adoption and conversion rates.",
      solution: "Modernized into a high-performance Digital Identity & Networking ecosystem featuring sub-second NFC/QR tap interactions, bespoke company-branded NFC physical cards, automated WhatsApp checkout dispatch, and multi-tier SaaS monetization.",
      keyFeatures: [
        "Dynamic NFC & QR Smart Profiles with 1-click 'Save Contact (.vcf)'",
        "Integrated WhatsApp Mini-Store with direct cart-to-chat order routing",
        "Interactive appointment booking calendar & inquiry forms with file attachments",
        "Real-time analytics tracking profile views, link taps, device types, and geographic location",
        "Custom company-branded physical NFC cards with automated production & shipping fulfillment",
        "Tiered SaaS subscription engine with multi-gateway payments & affiliate commission tracking"
      ],
      testimonial: {
        quote: "OneClickBiz modernized our entire business networking. Paper business cards are now obsolete—one tap instantly shares our digital portfolio, product catalog, and contact details.",
        author: "Platform Product Team",
        role: "OneClickBiz"
      }
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
      year: "2025 - 2026",
      summary: "Specialized CRM model engineered for real estate developers and infrastructure builders. Automates channel partner broker lead distribution, site-visit tracking, live unit inventory matrices, and customer payment milestone schedules.",
      metrics: [
        { label: "Broker Lead Response", value: "< 2 Mins" },
        { label: "Lead Leakage Reduction", value: "-92%" },
        { label: "Pipeline Value Managed", value: "₹450 Cr+" }
      ],
      techStack: ["Real Estate CRM Engine", "Next.js Enterprise", "Interactive Unit Inventory Grid", "WhatsApp API", "PostgreSQL RBAC"],
      challenge: "Managing massive multi-project property inquiries across 90+ channel partners with manual spreadsheets caused lead leakage, delayed buyer follow-ups, and inventory booking conflicts.",
      solution: "Engineered a dedicated Real Estate CRM suite featuring automated lead deduplication, round-robin agent assignment, dynamic unit inventory locking, and automated milestone installment demand notes.",
      keyFeatures: [
        "Omnichannel broker lead capture with automated channel partner attribution",
        "Dynamic unit inventory matrix with instant reservation locking",
        "Customer installment tracking with automated RERA progress billing notes",
        "Executive real estate sales dashboards with project absorption analytics"
      ],
      testimonial: {
        quote: "The CRM model gives our management real-time visibility into every unit booking, agent conversion rate, and payment milestone across all construction phases.",
        author: "Director of Sales",
        role: "Nest Infra Developers"
      }
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
      year: "2025 - 2026",
      summary: "Dynamic cultural event ticketing, traditional show bookings, and Indian heritage promotion e-commerce platform featuring interactive seat selection, artist spotlights, instant show reservations, and traditional merchandise.",
      metrics: [
        { label: "Show Ticket Bookings", value: "35,000+" },
        { label: "Cultural Events Hosted", value: "180+ Shows" },
        { label: "Audience Engagement", value: "+340%" }
      ],
      techStack: ["Event Ticketing Engine", "Next.js 15", "Seat Reservation Matrix", "Cashfree / UPI Gateway", "QR Show Pass Generator"],
      challenge: "Promoting traditional culture, classical arts, and heritage events required an intuitive, modern digital ticketing platform to replace disjointed offline show pass distribution and manual seat management.",
      solution: "Created an immersive cultural e-commerce ecosystem with rich multimedia event previews, instant seat-tier bookings, automated QR ticket generation, and integrated heritage merchandise.",
      keyFeatures: [
        "Live interactive seat-tier selection & instant QR digital show pass dispatch",
        "Cultural event discovery with artist profiles, performance trailers & schedules",
        "Seamless UPI & Multi-Card payment checkout with instant WhatsApp ticket delivery",
        "Organizer portal for live gate check-in scanning and ticket revenue analytics"
      ],
      testimonial: {
        quote: "Kalaakshi seamlessly connects audiences with Indian tradition and live cultural performances. Our show bookings increased dramatically from day one.",
        author: "Cultural Programs Lead",
        role: "Kalaakshi"
      }
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
      year: "2025 - 2026",
      summary: "High-impact performance marketing engine, Generative AI Search Optimization (GEO) architecture, digital talent training academy, and integrated MerlinFlow enterprise SaaS solutions ecosystem.",
      metrics: [
        { label: "Client ROAS Boost", value: "4.8x Avg" },
        { label: "CAC Reduction", value: "-48%" },
        { label: "Trained Marketers", value: "1,200+ Alumni" }
      ],
      techStack: ["Next.js App Router", "Tailwind CSS v4", "Generative Engine Optimization (GEO)", "Server-Side CAPI", "Interactive ROI Simulator"],
      challenge: "Transforming traditional marketing guesswork into predictable revenue engines, resolving post-cookie attribution loss, and bridging the industry talent gap with hands-on live sandbox budget training.",
      solution: "Deployed a full-funnel digital ecosystem combining algorithmic ad buying (Meta Advantage+, Google PMax), Generative Engine Optimization (GEO) for AI search tools, cohort-based academy programs, and MerlinFlow ERP software suites.",
      keyFeatures: [
        "Generative Engine Optimization (GEO) & Search Marketing for AI Overviews, ChatGPT & Perplexity",
        "Paid Media & Demand Gen with Server-Side Conversions API (CAPI) multi-touch attribution",
        "Cohort-Based Digital Marketing Training Academy with live sandbox ad budgets & certifications",
        "Conversion Rate Optimization (CRO) funnels with real-time interactive ROI calculators",
        "Seamless deployment of MerlinFlow Enterprise Software (Real Estate, Healthcare, Universities, ERP)",
        "Integrated AI Chatbot advisor & instant WhatsApp lead qualification channels"
      ],
      testimonial: {
        quote: "Himastech turned digital marketing into an exact science. The synergy between high-performance media buying, GEO search optimization, and MerlinFlow enterprise software is unparalleled.",
        author: "Growth Operations Team",
        role: "Himastech"
      }
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
    <div className="projects-page-wrapper" style={{ paddingTop: "9.5rem" }}>
      {/* Hero Header */}
      <section className="projects-hero">
        <div className="container">
          <div className="hero-text-overlay">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge"
            >
              <Sparkles size={16} />
              <span>Client Showcase & Deployments</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="projects-title"
            >
              Engineered for Impact. <br />
              <span className="text-gradient">Proven at Global Enterprise Scale.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="projects-lead"
            >
              Explore how industry leaders across Smart Networking & SaaS, Cultural E-Commerce, Real Estate CRM Models, and Digital Growth rely on MerlinFlow custom software systems to automate workflows and accelerate revenue.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <div className="impact-stats-grid">
            <div className="impact-stat-item">
              <div className="stat-icon-wrapper"><Building2 size={24} /></div>
              <div className="stat-info">
                <h3>120+</h3>
                <p>Enterprise Deployments</p>
              </div>
            </div>
            <div className="impact-stat-item">
              <div className="stat-icon-wrapper"><TrendingUp size={24} /></div>
              <div className="stat-info">
                <h3>₹1,500 Cr+</h3>
                <p>Annual Transactions Handled</p>
              </div>
            </div>
            <div className="impact-stat-item">
              <div className="stat-icon-wrapper"><ShieldCheck size={24} /></div>
              <div className="stat-info">
                <h3>99.99%</h3>
                <p>High-Availability Cloud SLA</p>
              </div>
            </div>
            <div className="impact-stat-item">
              <div className="stat-icon-wrapper"><Users size={24} /></div>
              <div className="stat-info">
                <h3>450,000+</h3>
                <p>Daily Active End-Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-controls-container">
            {/* Category Pills */}
            <div className="category-scroll-container">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`category-pill ${isActive ? "active" : ""}`}
                  >
                    <IconComponent size={18} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="search-bar-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search projects, domains, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery("")}>
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <div className="results-count-bar">
            <span>Showing <strong>{filteredProjects.length}</strong> enterprise case studies</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="no-projects-found">
              <Layers size={48} className="empty-icon" />
              <h3>No matching projects found</h3>
              <p>Try searching for a different keyword or select another category filter.</p>
              <button 
                onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                className="btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="project-card"
                >
                  <div className="project-card-header">
                    <div className="header-top-row">
                      <span className="category-tag">
                        {project.categoryLabel}
                      </span>
                      <span className="project-badge">
                        {project.badge}
                      </span>
                    </div>
                    <h2 className="project-card-title">{project.title}</h2>
                    <div className="client-meta">
                      <span className="client-name">{project.client}</span>
                      {project.displayUrl && (
                        <>
                          <span className="meta-separator">•</span>
                          <span className="project-url-tag">{project.displayUrl}</span>
                        </>
                      )}
                      <span className="meta-separator">•</span>
                      <span className="location-name">{project.location}</span>
                    </div>
                  </div>

                  <p className="project-summary">{project.summary}</p>

                  {/* Highlight Metrics */}
                  <div className="card-metrics-grid">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="metric-box">
                        <span className="metric-val">{m.value}</span>
                        <span className="metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="tech-stack-row">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions - Direct Visit Live Platform */}
                  <div className="project-card-footer">
                    {project.liveUrl ? (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-live-link"
                      >
                        <span>Visit Live Platform</span>
                        <ExternalLink size={15} />
                      </a>
                    ) : (
                      <Link 
                        href="/contact"
                        className="btn-live-link"
                      >
                        <span>Inquire About Project</span>
                        <ArrowRight size={15} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta-section">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-content">
              <span className="cta-badge">Custom Engineering & Modernization</span>
              <h2>Have a complex enterprise project in mind?</h2>
              <p>
                Our engineering team builds high-throughput, secure, bespoke digital architectures for E-Commerce, Real Estate, and Enterprise CRM ecosystems.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn-primary">
                  Request Custom Architecture Blueprint
                </Link>
                <Link href="/products" className="btn-secondary-white">
                  Explore Pre-Built SaaS Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .projects-page-wrapper {
          min-height: 100vh;
          background: var(--bg-color);
          color: var(--text-color);
          padding-bottom: 5rem;
        }

        /* Hero Section */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: var(--bg-alpha-light);
          border: 1px solid var(--primary);
          border-radius: 50px;
          color: var(--primary);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
        }

        .projects-title {
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }

        .text-gradient {
          background: linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .projects-lead {
          font-size: clamp(1.05rem, 1.6vw, 1.25rem);
          color: var(--text-muted);
          max-width: 820px;
          margin: 0 auto 3rem auto;
          line-height: 1.7;
        }

        /* Impact Stats */
        .impact-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Impact Stats */
        :global(.impact-stats-grid) {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          justify-content: space-between !important;
          align-items: stretch !important;
          gap: 1.25rem !important;
          max-width: 1200px !important;
          margin: 2.5rem auto 0 !important;
          width: 100% !important;
        }

        :global(.impact-stat-item) {
          flex: 1 1 0px !important;
          min-width: 0 !important;
          display: flex !important;
          align-items: center !important;
          gap: 1rem !important;
          padding: 1.25rem 1.25rem !important;
          background: #ffffff !important;
          border: 1px solid #cbd5e1 !important;
          border-radius: 16px !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04) !important;
          text-align: left !important;
          transition: transform 0.2s, box-shadow 0.2s !important;
        }

        :global(.impact-stat-item:hover) {
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15) !important;
          border-color: #3b82f6 !important;
        }

        :global(.stat-icon-wrapper) {
          width: 48px !important;
          height: 48px !important;
          border-radius: 12px !important;
          background: rgba(59, 130, 246, 0.12) !important;
          color: #2563eb !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
        }

        :global(.stat-info h3) {
          font-size: 1.45rem !important;
          font-weight: 800 !important;
          margin: 0 0 0.15rem 0 !important;
          color: #0f172a !important;
          line-height: 1.1 !important;
        }

        :global(.stat-info p) {
          font-size: 0.82rem !important;
          color: #475569 !important;
          margin: 0 !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
        }

        /* Filter Section */
        .filter-section {
          padding: 2.5rem 0 1.5rem;
        }

        .filter-controls-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .category-scroll-container {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: thin;
        }

        .category-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.15rem;
          border-radius: 50px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #475569;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }

        .category-pill:hover {
          color: #2563eb;
          border-color: #3b82f6;
          background: #f8fafc;
        }

        .category-pill.active {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
        }

        .search-bar-wrapper {
          position: relative;
          min-width: 320px;
          flex: 1;
          max-width: 420px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 0.65rem 2.5rem 0.65rem 2.75rem;
          border-radius: 50px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #0f172a;
          font-size: 0.92rem;
          outline: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .search-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .clear-search {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .results-count-bar {
          margin-top: 1rem;
          font-size: 0.88rem;
          color: #64748b;
        }

        /* Projects Grid */
        .projects-grid-section {
          padding: 1rem 0 5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 1fr;
          gap: 2.5rem 2rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .project-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          height: 100%;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: #3b82f6;
          box-shadow: 0 20px 45px rgba(59, 130, 246, 0.12);
        }

        .header-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .category-tag {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #2563eb;
          background: rgba(59, 130, 246, 0.1);
          padding: 0.35rem 0.8rem;
          border-radius: 50px;
        }

        .project-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: #059669;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.3rem 0.75rem;
          border-radius: 50px;
        }

        .project-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.35;
          margin: 0 0 0.5rem 0;
          color: #0f172a;
        }

        .client-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .project-url-tag {
          color: #2563eb;
          font-weight: 600;
        }

        .meta-separator {
          opacity: 0.5;
        }

        .project-summary {
          font-size: 0.93rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        /* Metrics */
        .card-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          background: #f8fafc;
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          margin-bottom: 1.25rem;
          width: 100%;
        }

        .metric-box {
          text-align: center;
        }

        .metric-val {
          display: block;
          font-size: 1.2rem;
          font-weight: 800;
          color: #0284c7;
        }

        .metric-lbl {
          display: block;
          font-size: 0.72rem;
          color: #64748b;
          margin-top: 0.2rem;
          font-weight: 600;
        }

        /* Tech stack */
        .tech-stack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-chip {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.7rem;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          color: #334155;
        }

        .tech-chip-large {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.4rem 0.85rem;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #1e293b;
        }

        /* Card footer */
        .project-card-footer {
          padding-top: 1.25rem;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
          width: 100%;
        }

        .btn-live-link {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem 1.5rem;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          border: 1px solid #0f172a;
          color: #ffffff;
          border-radius: 50px;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(15, 23, 42, 0.15);
        }

        .btn-live-link:hover {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          border-color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.35);
          color: #ffffff;
        }

        /* No projects state */
        .no-projects-found {
          text-align: center;
          padding: 5rem 1rem;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
        }

        .empty-icon {
          color: #64748b;
          margin-bottom: 1rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: #ffffff;
          padding: 0.9rem 1.8rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary-outline {
          padding: 0.9rem 1.8rem;
          border-radius: 50px;
          background: transparent;
          border: 1px solid #cbd5e1;
          color: #334155;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }

        .btn-secondary-outline:hover {
          background: #f1f5f9;
          border-color: #94a3b8;
        }

        /* CTA Banner */
        .projects-cta-section {
          padding: 3rem 0;
        }

        .cta-banner-box {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.92), rgba(88, 28, 135, 0.92));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 28px;
          padding: 3.5rem 2rem;
          text-align: center;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
          color: #ffffff;
        }

        .cta-badge {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #93c5fd;
          background: rgba(255, 255, 255, 0.12);
          padding: 0.4rem 1.1rem;
          border-radius: 50px;
          margin-bottom: 1.25rem;
        }

        .cta-banner-box h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 800;
          margin: 0 0 1rem 0;
          color: #ffffff;
        }

        .cta-banner-box p {
          font-size: 1.1rem;
          color: #e2e8f0;
          max-width: 720px;
          margin: 0 auto 2rem auto;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-secondary-white {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.35);
          padding: 0.9rem 1.8rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-secondary-white:hover {
          background: #ffffff;
          color: #0f172a;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          :global(.impact-stats-grid) {
            flex-wrap: wrap !important;
          }
          :global(.impact-stat-item) {
            flex: 1 1 calc(50% - 1rem) !important;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .projects-hero {
            padding: 5.5rem 0 2.5rem;
          }
          :global(.impact-stats-grid) {
            flex-direction: column !important;
          }
          :global(.impact-stat-item) {
            flex: 1 1 100% !important;
          }
          .search-bar-wrapper {
            min-width: 100%;
          }
          .card-metrics-grid {
            grid-template-columns: 1fr;
          }
          .cta-buttons {
            flex-direction: column;
          }
          .cta-buttons .btn-primary,
          .cta-buttons .btn-secondary-white {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
