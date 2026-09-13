"use client";

import Link from "next/link";
import { ExternalLink, Sparkles } from "lucide-react";

export default function LogosStrip() {
  const clientLogos = [
    {
      name: "Nest Infra Developers",
      tagline: "PropTech CRM & Sales OS",
      domain: "crm.nestinfradevelopers.in",
      url: "https://crm.nestinfradevelopers.in",
      logo: "/images/logos/nestinfra.png",
      category: "Real Estate CRM",
      themeColor: "#10b981",
      isImage: true
    },
    {
      name: "OneClickBiz",
      tagline: "Digital Identity & WhatsApp SaaS",
      domain: "oneclickbiz.in",
      url: "https://oneclickbiz.in",
      logo: "/images/logos/oneclickbiz.png",
      category: "Smart SaaS",
      themeColor: "#f59e0b",
      isImage: true
    },
    {
      name: "Kalaakshi",
      tagline: "Culture & Show Bookings",
      domain: "www.kalaakshi.com",
      url: "https://www.kalaakshi.com",
      logo: "/images/logos/kalaakshi.jpg",
      category: "Cultural E-Commerce",
      themeColor: "#e11d48",
      isImage: true
    },
    {
      name: "HimasTech",
      tagline: "Digital Realty Marketing",
      domain: "himastech.com",
      url: "https://himastech.com",
      logo: "/images/logos/himastech.png",
      category: "Growth & PropTech",
      themeColor: "#f59e0b",
      isImage: true
    },
    {
      name: "Cashfree Payments",
      tagline: "Instant Payment Gateway Sync",
      domain: "Automated Collections",
      category: "Fintech Partner",
      themeColor: "#0066ff",
      isImage: false,
      badgeText: "Cashfree"
    },
    {
      name: "WhatsApp Cloud API",
      tagline: "Verified Business Dispatcher",
      domain: "Sub-second Alerts",
      category: "Communication",
      themeColor: "#25d366",
      isImage: false,
      badgeText: "WhatsApp"
    },
    {
      name: "Shiprocket",
      tagline: "Automated Logistics & COD",
      domain: "29,000+ Pincodes",
      category: "Supply Chain",
      themeColor: "#8b5cf6",
      isImage: false,
      badgeText: "Logistics"
    },
    {
      name: "AWS Cloud",
      tagline: "99.99% Enterprise Uptime",
      domain: "Zero-Trust Infrastructure",
      category: "Cloud Scale",
      themeColor: "#ff9900",
      isImage: false,
      badgeText: "AWS Cloud"
    }
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <section className="logos-ticker-section">
      <div className="ticker-header container">
        <div className="ticker-label-badge">
          <Sparkles size={13} className="sparkle-icon" />
          <span>TRUSTED CLIENT DEPLOYMENTS & PARTNERS</span>
        </div>
        <p className="ticker-sub">Powering high-growth real estate developers, SaaS platforms, and digital enterprises</p>
      </div>

      <div className="marquee-wrapper" aria-label="Client logos scrolling banner">
        <div className="marquee-gradient-left" />
        <div className="marquee-gradient-right" />

        <div className="marquee-track">
          {marqueeItems.map((item, idx) => {
            const isExternal = item.url && item.url.startsWith("http");
            
            return (
              <a
                key={idx}
                href={item.url || "#"}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : ""}
                className={`logo-card ${!item.url ? "no-link" : ""}`}
                style={{ "--accent-color": item.themeColor }}
              >
                <div className="logo-badge-container">
                  {item.isImage ? (
                    <img 
                      src={item.logo} 
                      alt={`${item.name} logo`} 
                      className="logo-img" 
                      loading="lazy"
                    />
                  ) : (
                    <div className="tech-badge-icon" style={{ borderColor: item.themeColor, color: item.themeColor }}>
                      {item.badgeText}
                    </div>
                  )}
                </div>

                <div className="logo-info">
                  <div className="logo-name-row">
                    <span className="logo-name">{item.name}</span>
                    {item.url && <ExternalLink size={12} className="link-icon" />}
                  </div>
                  <span className="logo-domain">{item.domain}</span>
                </div>

                <span className="logo-category-pill">{item.category}</span>
              </a>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .logos-ticker-section {
          padding: 3rem 0 3.5rem;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(10, 15, 30, 0.9) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }

        .ticker-header {
          text-align: center;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .ticker-label-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: #38bdf8;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.8px;
        }

        .sparkle-icon {
          color: #38bdf8;
        }

        .ticker-sub {
          color: #94a3b8;
          font-size: 0.92rem;
          margin: 0;
          max-width: 600px;
        }

        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 0.5rem 0;
        }

        .marquee-gradient-left,
        .marquee-gradient-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-gradient-left {
          left: 0;
          background: linear-gradient(to right, #090d1a, transparent);
        }

        .marquee-gradient-right {
          right: 0;
          background: linear-gradient(to left, #090d1a, transparent);
        }

        .marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scrollMarquee 38s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-card {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.25rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          text-decoration: none;
          color: inherit;
          transition: all 0.25s ease;
          white-space: nowrap;
          flex-shrink: 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .logo-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-color, #38bdf8);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35), 0 0 15px rgba(56, 189, 248, 0.15);
        }

        .logo-card.no-link {
          cursor: default;
        }

        .logo-badge-container {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
          padding: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .tech-badge-icon {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.68rem;
          font-weight: 800;
          background: #0f172a;
          border: 1px solid;
          text-align: center;
          padding: 2px;
        }

        .logo-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .logo-name-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .logo-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #f8fafc;
          letter-spacing: -0.2px;
        }

        .link-icon {
          color: #64748b;
          transition: color 0.2s;
        }

        .logo-card:hover .link-icon {
          color: var(--accent-color, #38bdf8);
        }

        .logo-domain {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .logo-category-pill {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #cbd5e1;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 0.25rem 0.6rem;
          border-radius: 50px;
          margin-left: 0.25rem;
        }

        @media (max-width: 768px) {
          .logos-ticker-section {
            padding: 2.25rem 0 2.75rem;
          }

          .marquee-gradient-left,
          .marquee-gradient-right {
            width: 40px;
          }

          .marquee-track {
            gap: 1rem;
            animation-duration: 28s;
          }

          .logo-card {
            padding: 0.6rem 0.95rem;
            gap: 0.75rem;
            border-radius: 12px;
          }

          .logo-badge-container {
            width: 36px;
            height: 36px;
          }

          .logo-name {
            font-size: 0.85rem;
          }

          .logo-domain {
            font-size: 0.7rem;
          }

          .logo-category-pill {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
