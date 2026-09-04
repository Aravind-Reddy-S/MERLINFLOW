"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, Users, Bell, BookOpen, IndianRupee, 
  Calendar, MessageSquare, ShieldCheck, Shield, Lock, 
  Server, Smartphone, Activity, FileCheck, ArrowRight, 
  LayoutGrid, Target, UserCheck, Heart, ClipboardList, 
  CheckCircle2, ExternalLink, FileText, Sparkles, 
  Clock, ArrowLeft, Check, Layers
} from "lucide-react";
import Link from "next/link";
import ContactSection from "./ContactSection";

export default function SchoolImsView() {
  const [activeRole, setActiveRole] = useState(0);

  const features = [
    {
      title: "Voice Attendance Alerts",
      desc: "Instant automated calls to parents for absence, ensuring 100% student safety and real-time confirmation.",
      icon: <Bell className="w-6 h-6 text-blue-600" />,
      color: "#2563eb",
      bg: "rgba(37, 99, 235, 0.08)"
    },
    {
      title: "Daily Digital Diary",
      desc: "Teachers share homework, syllabus updates, and class notes directly to the parent mobile app in real time.",
      icon: <BookOpen className="w-6 h-6 text-teal-600" />,
      color: "#0d9488",
      bg: "rgba(13, 148, 136, 0.08)"
    },
    {
      title: "Smart Fee Management",
      desc: "Track pending dues, automate WhatsApp/SMS reminders, and accept secure online UPI and card payments.",
      icon: <IndianRupee className="w-6 h-6 text-amber-600" />,
      color: "#d97706",
      bg: "rgba(217, 119, 6, 0.08)"
    },
    {
      title: "Timetable & Exam Alerts",
      desc: "Generate conflict-free schedules and keep everyone informed about test dates, syllabus, and score cards.",
      icon: <Calendar className="w-6 h-6 text-orange-600" />,
      color: "#ea580c",
      bg: "rgba(234, 88, 12, 0.08)"
    },
    {
      title: "Teacher-Parent Chat",
      desc: "Secure, direct messaging channel between educators and guardians for personalized academic progress.",
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
      color: "#9333ea",
      bg: "rgba(147, 51, 234, 0.08)"
    },
    {
      title: "Student Safety & Insurance",
      desc: "Comprehensive safety records and student insurance coverage ensuring complete peace of mind.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      color: "#059669",
      bg: "rgba(5, 150, 105, 0.08)"
    }
  ];

  const roleData = [
    {
      role: "Management & Principals",
      desc: "Gain total visibility into your institution. Make informed strategic decisions with real-time analytics.",
      icon: <Target className="w-7 h-7 text-blue-600" />,
      color: "#2563eb",
      points: [
        "Centralized Institutional Dashboard",
        "Staff Productivity & Attendance Tracking",
        "Automated Financial & Audit Reports",
        "Board & Government Inspection Ready"
      ]
    },
    {
      role: "Teachers & Staff",
      desc: "Eliminate repetitive administrative paperwork. Focus more on teaching and inspiring students.",
      icon: <UserCheck className="w-7 h-7 text-teal-600" />,
      color: "#0d9488",
      points: [
        "One-Click Digital Attendance Register",
        "Fast Marks & Grade Card Entry",
        "Digital Lesson Planning & Homework Sync",
        "Direct Parent Communication Portal"
      ]
    },
    {
      role: "Parents & Students",
      desc: "Stay connected to the academic journey anytime, anywhere with dedicated mobile access.",
      icon: <Heart className="w-7 h-7 text-purple-600" />,
      color: "#9333ea",
      points: [
        "Live Attendance & Bus GPS Tracking",
        "Instant Online Fee Payment & Receipts",
        "Subject-wise Performance Analytics",
        "Instant Exam Schedules & Circulars"
      ]
    }
  ];

  const modules = [
    { name: "Student Profiles", desc: "Comprehensive demographic, biometric, academic history, and family records.", icon: <GraduationCap size={22} color="#2563eb" /> },
    { name: "Staff Administration", desc: "Manage teacher qualifications, biometric logs, payroll, and workload allocations.", icon: <Users size={22} color="#059669" /> },
    { name: "Attendance Automation", desc: "Multi-session biometric and manual attendance with automated parent phone alerts.", icon: <UserCheck size={22} color="#ea580c" /> },
    { name: "Fees & Collections", desc: "Multi-head fee setup, online checkout, installment plans, and automated receipts.", icon: <IndianRupee size={22} color="#e11d48" /> },
    { name: "Examinations & Grading", desc: "CBE/CBSE/State board grading formulas, custom report card generation, and rank lists.", icon: <ClipboardList size={22} color="#7c3aed" /> },
    { name: "Timetable Engine", desc: "Auto-generate conflict-free timetables for classes, substitute teachers, and labs.", icon: <Calendar size={22} color="#d97706" /> },
    { name: "Digital Diary & Homework", desc: "Daily classroom notes, assignment uploads, file attachments, and submission tracking.", icon: <BookOpen size={22} color="#2563eb" /> },
    { name: "Circulars & Broadcasts", desc: "Broadcast urgent school alerts, holiday notices, and circulars with read receipts.", icon: <Bell size={22} color="#059669" /> }
  ];

  const workflowSteps = [
    { step: "01", title: "Admission Inquiry", desc: "Parents submit digital applications via the school portal", icon: <Users size={24} /> },
    { step: "02", title: "Document Review", desc: "Administrative staff verifies certificates and eligibility", icon: <FileText size={24} /> },
    { step: "03", title: "Enrollment Confirmed", desc: "Student ID, roll number, and parent credentials auto-generated", icon: <CheckCircle2 size={24} /> },
    { step: "04", title: "Academic Journey", desc: "Live timetable, attendance, homework, and fee ledger active", icon: <GraduationCap size={24} /> }
  ];

  const securityPoints = [
    { title: "Role-Based Access Control (RBAC)", desc: "Ensure staff, teachers, and accountants only access data relevant to their role.", icon: <Lock size={22} color="#2563eb" /> },
    { title: "Daily Automated Cloud Backups", desc: "All school databases are mirrored every 24 hours with zero data loss guarantee.", icon: <Server size={22} color="#2563eb" /> },
    { title: "Bank-Grade AES-256 Encryption", desc: "End-to-end encrypted student PII and fee transaction records in transit and at rest.", icon: <Shield size={22} color="#2563eb" /> },
    { title: "Compliance & Audit Ready", desc: "Fully aligned with CBSE, ICSE, state boards, and educational privacy standards.", icon: <FileCheck size={22} color="#2563eb" /> },
    { title: "Packaged Mobile Apps", desc: "Custom branded iOS & Android apps ready for immediate App Store and Play Store deployment.", icon: <Smartphone size={22} color="#2563eb" /> },
    { title: "99.99% High Availability", desc: "Cloud infrastructure guaranteeing ultra-fast load times even on result declaration days.", icon: <Activity size={22} color="#2563eb" /> }
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToModules = () => {
    const el = document.getElementById("modules-suite");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="school-ims-page">
      {/* Top Breadcrumb */}
      <div className="container top-nav-container">
        <Link href="/#products" className="back-link">
          <ArrowLeft size={16} /> Back to All Products
        </Link>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-grid">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-text-col"
            >
              <div className="hero-badge">
                <span className="ping-dot"></span>
                <span>INSTITUTIONAL OPERATING SYSTEM</span>
              </div>
              <h1 className="hero-heading">
                The Operating System for <span className="highlight-text">High-Performance Schools</span>
              </h1>
              <p className="hero-subtitle">
                Go beyond basic management. MerlinFlow School IMS is the integrated digital infrastructure that creates harmony between your academic goals, administrative operations, and financial growth.
              </p>
              
              <div className="hero-cta-group">
                <button onClick={scrollToContact} className="btn-primary">
                  Request Access <ArrowRight size={18} />
                </button>
                <button onClick={scrollToModules} className="btn-secondary">
                  <LayoutGrid size={18} /> Explore Platform
                </button>
              </div>

              <div className="trust-badges">
                <div className="trust-item">
                  <div className="trust-icon"><ShieldCheck size={20} color="#059669" /></div>
                  <span>Enterprise Security</span>
                </div>
                <div className="trust-item">
                  <div className="trust-icon"><Clock size={20} color="#2563eb" /></div>
                  <span>99.99% Uptime</span>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Live Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-demo-col"
            >
              <div className="browser-window">
                <div className="browser-header">
                  <div className="traffic-lights">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <a 
                    href="https://default.nexsyrus.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="browser-url-bar"
                    title="Open live demo in new tab"
                  >
                    <span>https://demo.merlinflow.in/school</span>
                    <ExternalLink size={12} className="ext-icon" />
                  </a>
                </div>
                <div className="browser-body">
                  <iframe 
                    src="https://default.nexsyrus.com" 
                    title="MerlinFlow School IMS Live Demo" 
                    className="demo-iframe"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proven Features Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">Proven Features for Modern Schools</h2>
            <p className="section-desc">Practical, battle-tested tools that solve real daily academic and administrative challenges.</p>
          </div>

          <div className="features-grid">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="feature-card-modern"
              >
                <div className="feat-icon-box" style={{ background: feat.bg }}>
                  {feat.icon}
                </div>
                <h3 className="feat-title">{feat.title}</h3>
                <p className="feat-desc">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Dashboards Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">Smart Dashboards for Better Decisions</h2>
            <p className="section-desc">Get a clear, real-time view of your school's health. From attendance trends to fee collection status, everything is at your fingertips.</p>
          </div>

          <div className="dashboard-preview-grid">
            {/* Left Mockup Dashboard Card */}
            <div className="principal-card-widget">
              <div className="widget-header">
                <div>
                  <h4 className="widget-title">Principal's Live Overview</h4>
                  <span className="widget-sub">Today's Real-time Activity</span>
                </div>
                <div className="admin-badge">ADMIN</div>
              </div>

              <div className="metrics-row">
                <div className="metric-box blue-metric">
                  <div className="metric-top">
                    <span className="metric-label">ATTENDANCE</span>
                    <Users size={16} color="#2563eb" />
                  </div>
                  <div className="metric-val">94.8%</div>
                  <span className="metric-trend">↑ 2.4% vs last week</span>
                </div>

                <div className="metric-box green-metric">
                  <div className="metric-top">
                    <span className="metric-label">FEE RECOVERY</span>
                    <IndianRupee size={16} color="#059669" />
                  </div>
                  <div className="metric-val">₹4.85L</div>
                  <span className="metric-trend green-trend">Collected today</span>
                </div>
              </div>

              <div className="events-box">
                <div className="events-title">
                  <Calendar size={14} /> UPCOMING EVENTS & ALERTS
                </div>
                <div className="event-item">
                  <div className="event-date"><span>12</span><span>SEP</span></div>
                  <div>
                    <div className="event-name">Parent-Teacher Conference (Std I - X)</div>
                    <div className="event-time">09:30 AM - Main Auditorium</div>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-date"><span>15</span><span>SEP</span></div>
                  <div>
                    <div className="event-name">Mid-Term Assessment Cycle Begins</div>
                    <div className="event-time">Automated Hall Tickets Generated</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Value Points */}
            <div className="dashboard-benefits">
              <div className="benefit-item">
                <div className="benefit-icon"><Activity size={24} color="#2563eb" /></div>
                <div>
                  <h3>Data-Driven Strategic Insights</h3>
                  <p>Eliminate manual spreadsheets. Visualize student enrollment patterns, faculty workload balance, and multi-branch cash flows in one unified screen.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon"><Users size={24} color="#7c3aed" /></div>
                <div>
                  <h3>Role-Specific Views & Permissions</h3>
                  <p>Principals view high-level institutional health, accountants manage fee collection ledgers, and teachers manage grades and attendance seamlessly.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon"><Smartphone size={24} color="#059669" /></div>
                <div>
                  <h3>Direct Mobile App Notification Engine</h3>
                  <p>Send instant push notifications and voice alerts directly to parents' smartphones with 100% verified receipt logs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Every Role */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">Designed for Every Role</h2>
            <p className="section-desc">A unified platform that adapts to the specific needs of your entire school ecosystem.</p>
          </div>

          <div className="roles-grid">
            {roleData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="role-card-modern"
              >
                <div className="role-icon-header">
                  <div className="role-icon-circle">{item.icon}</div>
                  <h3 className="role-name">{item.role}</h3>
                  <p className="role-desc">{item.desc}</p>
                </div>
                <ul className="role-points">
                  {item.points.map((pt, idx) => (
                    <li key={idx}>
                      <Check size={16} color={item.color} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Module Suite */}
      <section id="modules-suite" className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">Complete 45+ Module Suite</h2>
            <p className="section-desc">Everything required to operate an institution with zero friction from admission to alumni management.</p>
          </div>

          <div className="modules-grid">
            {modules.map((mod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="module-card-item"
              >
                <div className="mod-icon-wrapper">
                  {mod.icon}
                </div>
                <h4 className="mod-name">{mod.name}</h4>
                <p className="mod-desc">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Streamline Complex Workflows */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">Streamline Complex Workflows</h2>
            <p className="section-desc">From initial inquiry to graduation, MerlinFlow connects every phase of the student lifecycle.</p>
          </div>

          <div className="workflow-steps-grid">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="workflow-step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon-circle">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank-Grade Security Section */}
      <section className="section-padding">
        <div className="container">
          <div className="security-section-grid">
            <div className="sec-left">
              <div className="sec-badge">
                <Shield size={14} color="#2563eb" />
                <span>BANK-GRADE SECURITY & INFRASTRUCTURE</span>
              </div>
              <h2 className="sec-heading">Uncompromising Data Protection & High Availability</h2>
              <p className="sec-sub">Schools handle sensitive child and financial records daily. MerlinFlow is built with a strict Zero-Trust security architecture to protect your institution's reputation.</p>
              <button onClick={scrollToContact} className="btn-primary">
                Request Security Whitepaper <ArrowRight size={16} />
              </button>
            </div>

            <div className="sec-right-grid">
              {securityPoints.map((pt, i) => (
                <div key={i} className="sec-point-card">
                  <div className="sec-pt-icon">{pt.icon}</div>
                  <h4 className="sec-pt-title">{pt.title}</h4>
                  <p className="sec-pt-desc">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-box">
            <span className="cta-pill">AFFORDABLE FOR EVERY INSTITUTION</span>
            <h2 className="cta-heading">Ready to Transform Your School Operations?</h2>
            <p className="cta-sub">Join progressive institutions modernizing their workflows with MerlinFlow School IMS.</p>
            <div className="cta-btns">
              <button onClick={scrollToContact} className="btn-white">
                Book a Live Demo <ArrowRight size={18} />
              </button>
              <a href="tel:+918374373753" className="btn-outline-white">
                Call Our Specialists (+91 83743 73753)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Contact Section */}
      <ContactSection />

      <style jsx global>{`
        .school-ims-page {
          background-color: #f8fafc;
          color: #0f172a;
          padding-top: 5rem;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .top-nav-container {
          padding-top: 2rem;
          padding-bottom: 1rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: #2563eb;
        }

        /* HERO SECTION */
        .hero-section {
          padding: 3rem 0 5rem;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          padding: 0.4rem 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #475569;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }

        .ping-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #059669;
        }

        .hero-heading {
          font-family: var(--font-heading);
          font-size: 3.1rem;
          font-weight: 800;
          line-height: 1.15;
          color: #0f172a;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .highlight-text {
          color: #2563eb;
          display: block;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          line-height: 1.65;
          color: #475569;
          margin-bottom: 2.25rem;
        }

        .hero-cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #0f172a;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.9rem 1.8rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          background: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffffff;
          color: #334155;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.9rem 1.6rem;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          background: #f1f5f9;
          transform: translateY(-2px);
        }

        .trust-badges {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: #475569;
        }

        .trust-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* BROWSER MOCKUP */
        .browser-window {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #cbd5e1;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
          overflow: hidden;
          height: 520px;
          display: flex;
          flex-direction: column;
        }

        .browser-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.25rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .traffic-lights {
          display: flex;
          gap: 6px;
        }

        .traffic-lights .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .browser-url-bar {
          flex: 1;
          background: #e2e8f0;
          border-radius: 8px;
          padding: 0.35rem 0.8rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          transition: background 0.2s;
        }

        .browser-url-bar:hover {
          background: #cbd5e1;
          color: #0f172a;
        }

        .browser-body {
          flex: 1;
          position: relative;
          background: #ffffff;
        }

        .demo-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* COMMON SECTION STYLES */
        .section-padding {
          padding: 5.5rem 0;
        }

        .bg-light {
          background: #ffffff;
        }

        .section-header-center {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 3.5rem;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 2.3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.8rem;
          letter-spacing: -0.01em;
        }

        .section-desc {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* FEATURES GRID */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .feature-card-modern {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }

        .feature-card-modern:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 35px rgba(0,0,0,0.06);
          border-color: #cbd5e1;
        }

        .feat-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .feat-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.6rem;
        }

        .feat-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* DASHBOARD SECTION */
        .dashboard-preview-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .principal-card-widget {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #cbd5e1;
          padding: 2.25rem;
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
        }

        .widget-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .widget-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .widget-sub {
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 600;
        }

        .admin-badge {
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #bfdbfe;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
        }

        .metrics-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .metric-box {
          padding: 1.25rem;
          border-radius: 16px;
          border: 1px solid;
        }

        .blue-metric {
          background: #eff6ff;
          border-color: #dbeafe;
        }

        .green-metric {
          background: #ecfdf5;
          border-color: #d1fae5;
        }

        .metric-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.05em;
        }

        .metric-val {
          font-size: 1.8rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 0.4rem;
        }

        .metric-trend {
          font-size: 0.75rem;
          font-weight: 700;
          color: #2563eb;
        }

        .green-trend {
          color: #059669;
        }

        .events-box {
          background: #f8fafc;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          padding: 1.25rem;
        }

        .events-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }

        .event-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          margin-bottom: 0.75rem;
        }

        .event-item:last-child {
          margin-bottom: 0;
        }

        .event-date {
          width: 44px;
          height: 44px;
          background: #eff6ff;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.8rem;
          color: #2563eb;
          flex-shrink: 0;
        }

        .event-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1e293b;
        }

        .event-time {
          font-size: 0.76rem;
          color: #64748b;
        }

        .dashboard-benefits {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .benefit-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .benefit-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .benefit-item h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }

        .benefit-item p {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* ROLES GRID */
        .roles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .role-card-modern {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 2.25rem;
          transition: all 0.3s ease;
        }

        .role-card-modern:hover {
          background: #ffffff;
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.06);
          border-color: #cbd5e1;
        }

        .role-icon-circle {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
        }

        .role-name {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.6rem;
        }

        .role-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .role-points {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .role-points li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: #334155;
          line-height: 1.45;
        }

        /* MODULES GRID */
        .modules-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .module-card-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.25s ease;
        }

        .module-card-item:hover {
          border-color: #2563eb;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.08);
        }

        .mod-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .mod-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }

        .mod-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
        }

        /* WORKFLOW */
        .workflow-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .workflow-step-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 2rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .step-number {
          font-size: 0.75rem;
          font-weight: 900;
          color: #2563eb;
          background: #eff6ff;
          padding: 0.25rem 0.6rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .step-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .step-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .step-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
        }

        /* SECURITY */
        .security-section-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 4rem;
          align-items: center;
        }

        .sec-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #bfdbfe;
          border-radius: 50px;
          padding: 0.35rem 0.9rem;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-bottom: 1.25rem;
        }

        .sec-heading {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }

        .sec-sub {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .sec-right-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .sec-point-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
        }

        .sec-pt-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
        }

        .sec-pt-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.35rem;
        }

        .sec-pt-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
        }

        /* CTA BANNER */
        .cta-banner-section {
          padding: 4rem 0;
        }

        .cta-box {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 28px;
          padding: 4.5rem 3rem;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.2);
        }

        .cta-pill {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 0.35rem 1rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
        }

        .cta-heading {
          font-family: var(--font-heading);
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .cta-sub {
          font-size: 1.1rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        .cta-btns {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          color: #0f172a;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.9rem 2rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-white:hover {
          background: #f1f5f9;
          transform: translateY(-2px);
        }

        .btn-outline-white {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.9rem 1.8rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          text-decoration: none;
          transition: all 0.2s;
        }

        .btn-outline-white:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-badge, .trust-badges, .hero-cta-group {
            justify-content: center;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-preview-grid {
            grid-template-columns: 1fr;
          }

          .roles-grid {
            grid-template-columns: 1fr;
          }

          .modules-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .workflow-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .security-section-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .sec-left .sec-badge {
            margin: 0 auto 1.25rem;
          }
        }

        @media (max-width: 640px) {
          .hero-heading {
            font-size: 2.2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .modules-grid {
            grid-template-columns: 1fr;
          }

          .workflow-steps-grid {
            grid-template-columns: 1fr;
          }

          .sec-right-grid {
            grid-template-columns: 1fr;
          }

          .cta-box {
            padding: 3rem 1.5rem;
          }

          .cta-heading {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
