"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import merlinflowLogo from "../../public/images/company.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Integrations", href: "#integrations" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-content">
          <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <Image 
              src={merlinflowLogo}
              alt="MerlinFlow Logo"
              height={65}
              style={{ 
                width: 'auto', 
                objectFit: 'contain',
                transform: 'scale(1.3)'
              }}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <Link href="/dashboard" className="primary-btn dashboard-btn">
              Dashboard
            </Link>
            {/* Mobile Toggle */}
            <button className="mobile-toggle" onClick={() => setMobileOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="dashboard-backdrop"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mobile-nav glass-panel"
            >
              <button className="close-menu" onClick={() => setMobileOpen(false)}>
                <X size={32} />
              </button>
              <div className="mobile-links">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="mobile-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 1.5rem 0;
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-left: auto;
          margin-right: 1.5rem;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-link {
          font-weight: 500;
          font-size: 1.05rem;
          color: var(--text-color);
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .mobile-toggle, .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: var(--text-color);
          cursor: pointer;
          transition: transform 0.2s;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .mobile-toggle:hover, .theme-toggle:hover {
          transform: scale(1.1);
          color: var(--primary);
          background: var(--bg-alpha-light);
        }

        :global(.dashboard-backdrop) {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9998;
          cursor: pointer;
        }

        :global(.mobile-nav) {
          position: fixed;
          top: 0;
          right: 0;
          width: 400px;
          max-width: 100vw;
          height: 100vh;
          z-index: 9999;
          padding: 6rem 2rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          background: var(--bg-color);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid var(--glass-border);
          box-shadow: -20px 0 50px rgba(0,0,0,0.15);
        }

        :global(.close-menu) {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-alpha-light);
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          color: var(--text-color);
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10000;
        }

        :global(.close-menu:hover) {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
          transform: rotate(90deg) scale(1.1);
          border-color: rgba(239, 68, 68, 0.5);
        }

        :global(.mobile-links) {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        :global(.mobile-link) {
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s, background 0.2s;
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }

        :global(.mobile-link:hover) {
          color: var(--primary);
          background: var(--bg-alpha-light);
          padding-left: 1.25rem;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
        }

        @media (min-width: 1025px) {
          .mobile-toggle {
            display: none;
          }
        }

        :global(.dashboard-btn) {
          padding: 0.6rem 1.25rem;
          font-size: 0.95rem;
        }

        @media (max-width: 640px) {
          :global(.dashboard-btn) {
            display: none; /* Hide on very small screens to save space */
          }
        }
      `}</style>
    </>
  );
}
