"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, Users, Bell, BookOpen, IndianRupee, 
  Calendar, MessageSquare, ShieldCheck, Shield, Lock, 
  Server, Smartphone, Activity, FileCheck, ArrowRight, 
  LayoutGrid, Target, UserCheck, Heart, ClipboardList, 
  CheckCircle2, ExternalLink, FileText, Sparkles, 
  Clock, ArrowLeft, Check, Layers, Bus, Library, Bed, 
  Package, Stethoscope, CreditCard, TrendingUp, 
  FileSpreadsheet, AlertTriangle, ChevronDown, Phone,
  HelpCircle, Award, Crown, Zap, Radio, Globe, BarChart3, Laptop,
  Send, MapPin, Navigation, Search, CheckCircle, RefreshCw, SmartphoneNfc, AlertCircle
} from "lucide-react";
import Link from "next/link";
import ContactSection from "./ContactSection";

export default function SchoolImsView() {
  const [activeTab, setActiveTab] = useState("overview"); // overview, modules, solutions, pricing, security
  const [moduleCategory, setModuleCategory] = useState("all");
  const [isYearlyPricing, setIsYearlyPricing] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeRole, setActiveRole] = useState(0);

  // In-Website Interactive School Demo States
  const [demoTab, setDemoTab] = useState("cockpit"); // 'cockpit', 'students', 'fees', 'transport', 'attendance'
  const [toastMessage, setToastMessage] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(0);
  const [feeReminderSent, setFeeReminderSent] = useState({});
  const [busLocationStep, setBusLocationStep] = useState(2);
  const [rfidScans, setRfidScans] = useState([
    { id: 1, name: "Aarav Sharma", grade: "Class 10-A", roll: "14", time: "08:12 AM", status: "Gate In", mode: "RFID Smart Card" },
    { id: 2, name: "Diya Patel", grade: "Class 08-B", roll: "22", time: "08:14 AM", status: "Gate In", mode: "Face Biometric" },
    { id: 3, name: "Kavya Reddy", grade: "Class 12-C", roll: "09", time: "08:18 AM", status: "Gate In", mode: "RFID Smart Card" },
  ]);

  const studentsData = [
    {
      name: "Ananya Sharma",
      grade: "Grade 10-A",
      roll: "CBSE-10018",
      blood: "O+",
      gpa: "9.6 / 10",
      gradeLevel: "A1 Distinction",
      attendance: "98.4%",
      daysPresent: "168 / 170 Days",
      parent: "Rajesh Sharma",
      phone: "+91 98450 •••••",
      feeStatus: "Paid (Receipt #MF-7712)",
      feeStatusColor: "#10b981",
      subjects: [
        { name: "Mathematics", score: "98/100", grade: "A+" },
        { name: "Physics & Chem", score: "95/100", grade: "A+" },
        { name: "Computer Science", score: "100/100", grade: "A+" },
        { name: "English Lit", score: "92/100", grade: "A" }
      ]
    },
    {
      name: "Rohan Gupta",
      grade: "Grade 09-B",
      roll: "CBSE-09042",
      blood: "B+",
      gpa: "9.2 / 10",
      gradeLevel: "A1 Distinction",
      attendance: "96.5%",
      daysPresent: "164 / 170 Days",
      parent: "Sunil Gupta",
      phone: "+91 97312 •••••",
      feeStatus: "Term 2 Pending (₹12,500)",
      feeStatusColor: "#f59e0b",
      subjects: [
        { name: "Mathematics", score: "91/100", grade: "A" },
        { name: "Science", score: "94/100", grade: "A+" },
        { name: "Social Science", score: "88/100", grade: "B+" },
        { name: "English", score: "95/100", grade: "A+" }
      ]
    },
    {
      name: "Diya Patel",
      grade: "Grade 11-Sci",
      roll: "CBSE-11007",
      blood: "A+",
      gpa: "9.8 / 10",
      gradeLevel: "School Topper",
      attendance: "99.1%",
      daysPresent: "169 / 170 Days",
      parent: "Kiran Patel",
      phone: "+91 99014 •••••",
      feeStatus: "Paid (Receipt #MF-8104)",
      feeStatusColor: "#10b981",
      subjects: [
        { name: "Advanced Math", score: "100/100", grade: "A+" },
        { name: "Physics", score: "97/100", grade: "A+" },
        { name: "Chemistry", score: "96/100", grade: "A+" },
        { name: "AI & Python", score: "99/100", grade: "A+" }
      ]
    }
  ];

  const pendingFeeStudents = [
    { id: 1, name: "Rahul Verma", grade: "Class 8-A", amount: "₹12,500", due: "Term 2 Tuition", parent: "Vikas Verma" },
    { id: 2, name: "Sneha Nair", grade: "Class 10-B", amount: "₹18,000", due: "Transport + Lab", parent: "Girish Nair" },
    { id: 3, name: "Vikram Rao", grade: "Class 12-A", amount: "₹24,500", due: "Board Exam & Term", parent: "Ramesh Rao" },
    { id: 4, name: "Tanvi Kulkarni", grade: "Class 6-C", amount: "₹9,800", due: "Activity Fee", parent: "Anand Kulkarni" },
  ];

  const busRouteStops = [
    { name: "Koramangala 4th Block", time: "07:45 AM", status: "Departed" },
    { name: "Sony World Junction", time: "08:00 AM", status: "Departed" },
    { name: "Indiranagar 100ft Road", time: "08:15 AM", status: "Current Stop" },
    { name: "Domlur Flyover", time: "08:25 AM", status: "Next Stop" },
    { name: "MerlinFlow Campus Main Gate", time: "08:40 AM", status: "Destination" },
  ];

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSendReminder = (id, name, amount) => {
    setFeeReminderSent(prev => ({ ...prev, [id]: true }));
    triggerToast(`📲 WhatsApp & SMS fee reminder sent to ${name}'s parent for ${amount}!`);
  };

  const handleSimulateRfid = () => {
    const names = ["Tanmay Joshi (8-A)", "Meera Sen (11-B)", "Rishi Kapoor (10-C)", "Ananya Rao (7-B)"];
    const randomStudent = names[Math.floor(Math.random() * names.length)];
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newScan = {
      id: Date.now(),
      name: randomStudent,
      grade: "Gate Main",
      roll: `ID-${Math.floor(1000 + Math.random() * 9000)}`,
      time: timeNow,
      status: "Gate In",
      mode: "Smart RFID Scan"
    };
    setRfidScans(prev => [newScan, ...prev.slice(0, 4)]);
    triggerToast(`🔔 RFID Scan Verified: ${randomStudent} entered campus. Parent notified!`);
  };

  const handleAdvanceBus = () => {
    setBusLocationStep(prev => (prev + 1) % busRouteStops.length);
    const nextStopName = busRouteStops[(busLocationStep + 1) % busRouteStops.length].name;
    triggerToast(`🚌 Bus #04 GPS Ping Updated: Approaching ${nextStopName} (Speed: 38 km/h). Parent tracking synced!`);
  };

  const handleExperienceRolePortal = (roleIndex) => {
    const roleToTabMap = {
      0: "cockpit",    // Management & Principals
      1: "students",   // Teachers & Academic Staff
      2: "transport",  // Parents & Students
      3: "fees",       // Accountants & Administrators
    };
    const targetTab = roleToTabMap[roleIndex] || "cockpit";
    setDemoTab(targetTab);
    
    // Smoothly scroll to the interactive demo hero
    const el = document.getElementById("overview");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    
    const roleTitles = [
      "Management & Principals Cockpit",
      "Teachers & Academic Staff SIS",
      "Parents & Students Smart Fleet & Portal",
      "Accountants & Administrators Fee Automation"
    ];
    const roleName = roleTitles[roleIndex] || "Portal";
    triggerToast(`🚀 Loaded ${roleName} Live Demo! Test the interactive controls.`);
  };

  const handleModuleClick = (modName) => {
    let targetTab = "cockpit";
    if (modName.includes("Fee") || modName.includes("Collection") || modName.includes("Invoicing")) {
      targetTab = "fees";
    } else if (modName.includes("Student") || modName.includes("Grading") || modName.includes("Report") || modName.includes("Exam") || modName.includes("Academic")) {
      targetTab = "students";
    } else if (modName.includes("Transport") || modName.includes("GPS") || modName.includes("Bus")) {
      targetTab = "transport";
    } else if (modName.includes("Attendance") || modName.includes("Biometric") || modName.includes("RFID") || modName.includes("Gate")) {
      targetTab = "attendance";
    }
    setDemoTab(targetTab);
    const el = document.getElementById("overview");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    triggerToast(`✨ Loaded "${modName}" module in interactive simulator!`);
  };

  // 45+ Purpose-Built Modules categorized internally
  const moduleCategories = [
    {
      id: "core",
      title: "Core Modules",
      subtitle: "Essential daily school operations & student lifecycle management",
      badgeColor: "linear-gradient(135deg, #3b82f6, #6366f1)",
      modules: [
        { name: "Student Profiles", desc: "Maintain comprehensive records, academic history, and family details.", icon: <GraduationCap size={22} color="#2563eb" /> },
        { name: "Staff Administration", desc: "Track teacher qualifications, roles, biometric logs, and workload assignments.", icon: <Users size={22} color="#059669" /> },
        { name: "Attendance Automation", desc: "Record daily multi-session attendance with automated parent absence phone calls.", icon: <UserCheck size={22} color="#ea580c" /> },
        { name: "Fees & Collections", desc: "Process collections, track dues, automate reminders, and generate receipts.", icon: <IndianRupee size={22} color="#e11d48" /> },
        { name: "Examinations & Grading", desc: "Schedule assessments, grade papers, generate report cards, and publish results.", icon: <ClipboardList size={22} color="#7c3aed" /> },
        { name: "Timetable Generator", desc: "Generate conflict-free schedules for classes, substitute teachers, and labs.", icon: <Calendar size={22} color="#d97706" /> },
        { name: "Digital Diary & Homework", desc: "Assign homework, syllabus updates, and share class notes with parents.", icon: <BookOpen size={22} color="#2563eb" /> },
        { name: "Circulars & Notices", desc: "Broadcast official updates and emergency notices to specific groups or school-wide.", icon: <Bell size={22} color="#059669" /> },
        { name: "Communication Hub", desc: "Enable secure, direct messaging and announcements between staff and parents.", icon: <MessageSquare size={22} color="#ea580c" /> },
        { name: "Transport & GPS", desc: "Optimize routes, track live school bus GPS locations, and manage driver logs.", icon: <Bus size={22} color="#e11d48" /> },
        { name: "Library Management", desc: "Catalog inventory, scan barcodes, and track book issues, returns, and overdue fines.", icon: <Library size={22} color="#7c3aed" /> },
        { name: "Hostel & Dormitory", desc: "Allocate rooms, manage wardens, and monitor student curfews and visitor logs.", icon: <Bed size={22} color="#d97706" /> },
        { name: "Inventory & Assets", desc: "Track school furniture, lab consumables, procurement orders, and stock balance.", icon: <Package size={22} color="#2563eb" /> },
        { name: "Certificates & TCs", desc: "Issue Transfer Certificates (TCs), Bonafides, and Character documents in one click.", icon: <FileText size={22} color="#059669" /> },
        { name: "Smart ID Cards", desc: "Design and print high-resolution identification cards for students and staff.", icon: <CreditCard size={22} color="#ea580c" /> },
        { name: "Infirmary & Health", desc: "Maintain medical checkup records, allergy logs, and student health histories.", icon: <Stethoscope size={22} color="#e11d48" /> }
      ]
    },
    {
      id: "academic",
      title: "Academic & Insights",
      subtitle: "Track student performance, behavioral metrics & learning outcomes",
      badgeColor: "linear-gradient(135deg, #0d9488, #10b981)",
      modules: [
        { name: "Performance Analytics", desc: "Analyze student academic trends, subject averages, and progress over terms.", icon: <TrendingUp size={22} color="#2563eb" /> },
        { name: "Digital Report Cards", desc: "Generate customizable term reports and CBSE/ICSE transcripts with digital signatures.", icon: <FileSpreadsheet size={22} color="#059669" /> },
        { name: "Teacher Feedback Matrix", desc: "Collect structured feedback on student behavior, attentiveness, and soft skills.", icon: <MessageSquare size={22} color="#ea580c" /> },
        { name: "Discipline & Merits", desc: "Log disciplinary incidents, merits, awards, and positive reinforcement points.", icon: <AlertTriangle size={22} color="#e11d48" /> },
        { name: "Co-curricular Tracker", desc: "Manage sports teams, cultural clubs, competitions, and extracurricular participation.", icon: <Award size={22} color="#7c3aed" /> },
        { name: "Student Achievements", desc: "Record academic honors, Olympiad ranks, sports trophies, and special recognitions.", icon: <Crown size={22} color="#d97706" /> },
        { name: "Online Assessments", desc: "Administer secure computer-based tests, quizzes, and automated evaluation papers.", icon: <Laptop size={22} color="#2563eb" /> },
        { name: "Student 360 Dossier", desc: "Centralize all student academic, behavioral, attendance, and financial history.", icon: <FileCheck size={22} color="#059669" /> }
      ]
    },
    {
      id: "admin",
      title: "Admin & Operations",
      subtitle: "Streamline campus administration, admissions, compliance & HR",
      badgeColor: "linear-gradient(135deg, #f59e0b, #ea580c)",
      modules: [
        { name: "Role-Based Access Control", desc: "Configure granular permissions for administrative staff, teachers, and accountants.", icon: <Lock size={22} color="#2563eb" /> },
        { name: "Multi-Branch Management", desc: "Centralize operations, reporting, and finances across multiple school campuses.", icon: <Globe size={22} color="#059669" /> },
        { name: "Academic Calendar", desc: "Plan terms, examination cycles, holidays, and major institutional events.", icon: <Calendar size={22} color="#ea580c" /> },
        { name: "Automated Data Backup", desc: "Automate daily cloud backups and ensure continuous disaster recovery.", icon: <Server size={22} color="#e11d48" /> },
        { name: "Audit & Security Logs", desc: "Monitor system logins, administrative fee edits, and grade modifications.", icon: <ShieldCheck size={22} color="#7c3aed" /> },
        { name: "Visitor Gate Pass", desc: "Digitize security gate entries and track campus visitors in real time with SMS alerts.", icon: <Users size={22} color="#d97706" /> },
        { name: "Staff Leave Management", desc: "Process faculty leave requests, casual leaves, and substitute teacher assignments.", icon: <Calendar size={22} color="#2563eb" /> },
        { name: "Admissions CRM", desc: "Track prospective admission leads, follow-ups, and student campus visits.", icon: <Phone size={22} color="#059669" /> },
        { name: "Online Admissions Portal", desc: "Accept digital application forms, uploaded certificates, and registration fees.", icon: <Laptop size={22} color="#ea580c" /> },
        { name: "Staff Work Allocation", desc: "Distribute teaching periods, invigilation duties, and co-curricular charges.", icon: <ClipboardList size={22} color="#e11d48" /> },
        { name: "U-DISE & Board Compliance", desc: "Generate government and board compliance data reports with one-click export.", icon: <FileCheck size={22} color="#7c3aed" /> },
        { name: "Student Safety Insurance", desc: "Manage policy enrollments and track student accident insurance claims.", icon: <Shield size={22} color="#d97706" /> }
      ]
    },
    {
      id: "future",
      title: "Future-Ready & Hardware IoT",
      subtitle: "Cutting-edge hardware integrations, mobile apps & automation",
      badgeColor: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      modules: [
        { name: "Virtual Classrooms", desc: "Conduct live remote interactive lectures with Google Meet and Zoom integration.", icon: <Radio size={22} color="#2563eb" /> },
        { name: "Biometric Hardware Sync", desc: "Sync real-time punch logs from facial recognition and fingerprint LAN devices.", icon: <Lock size={22} color="#059669" /> },
        { name: "School Media Gallery", desc: "Publish annual day, sports, and celebration photo albums directly to parents.", icon: <Sparkles size={22} color="#ea580c" /> },
        { name: "Native Mobile Apps", desc: "Custom branded iOS & Android applications ready for App Store and Play Store.", icon: <Smartphone size={22} color="#e11d48" /> },
        { name: "Multi-Language Localization", desc: "Localize parent interface into regional Indian languages for higher engagement.", icon: <Globe size={22} color="#7c3aed" /> },
        { name: "Custom Report Builder", desc: "Build tailored analytical datasets, custom exports, and automated CSV digests.", icon: <BarChart3 size={22} color="#d97706" /> }
      ]
    }
  ];

  const displayedCategories = moduleCategory === "all"
    ? moduleCategories
    : moduleCategories.filter(cat => cat.id === moduleCategory);

  const roleSolutions = [
    {
      title: "Management & Principals",
      tag: "Strategic Visibility & Institutional Control",
      desc: "Gain total visibility into your institution. Make informed strategic decisions with real-time financial, attendance, and academic analytics.",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      color: "#2563eb",
      badge: "EXECUTIVE SUITE",
      highlights: [
        "Executive Dashboard with real-time institutional KPIs",
        "Staff productivity, biometric time logs, and leave approvals",
        "Financial cash flow reports, fee collection vs outstanding balance",
        "CBSE, ICSE, and State Board compliance-ready audits",
        "Multi-branch administrative overview from a single login"
      ]
    },
    {
      title: "Teachers & Academic Staff",
      tag: "Zero Paperwork & Effortless Classroom Management",
      desc: "Eliminate repetitive administrative paperwork. Focus more on teaching and mentoring students with streamlined grading and digital attendance.",
      icon: <UserCheck className="w-8 h-8 text-teal-600" />,
      color: "#0d9488",
      badge: "TEACHER PORTAL",
      highlights: [
        "One-click digital attendance register from mobile or desktop",
        "Rapid marks entry with automatic GPA and grade calculations",
        "Digital lesson plans, assignment sharing, and homework tracking",
        "Direct parent communication portal for academic reviews",
        "Conflict-free timetable access and substitute teacher alerts"
      ]
    },
    {
      title: "Parents & Students",
      tag: "Total Transparency & 24/7 Academic Connectedness",
      desc: "Stay connected to the school journey anytime, anywhere with dedicated mobile access to grades, attendance, fee payments, and announcements.",
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      color: "#9333ea",
      badge: "MOBILE APP",
      highlights: [
        "Real-time attendance alerts and automated voice calls on absence",
        "Instant online fee payment with downloadable tax receipts",
        "Subject-wise term performance analytics and exam scorecards",
        "Daily digital diary with homework and teacher remarks",
        "Live school bus GPS tracking with pickup and drop-off alerts"
      ]
    },
    {
      title: "Accountants & Administrators",
      tag: "Error-Free Billing & Automated Ledger Reconciliation",
      desc: "Automate complex multi-head fee schedules, concessions, and vendor accounting with real-time banking integration.",
      icon: <IndianRupee className="w-8 h-8 text-amber-600" />,
      color: "#d97706",
      badge: "FINANCE HUB",
      highlights: [
        "Custom fee structure configurer for tuition, transport, and lab fees",
        "Instant payment reconciliation via UPI, cards, and bank transfers",
        "Automated WhatsApp and SMS reminders for overdue fee installments",
        "Staff payroll calculation with PF, ESI, and tax deductions",
        "1-click export of audit-ready balance sheets and Tally sync"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      desc: "Perfect for small schools starting their digital transformation.",
      monthlyPrice: 19,
      yearlyPrice: 16,
      icon: <GraduationCap className="w-6 h-6 text-slate-600" />,
      popular: false,
      btnBg: "#0f172a",
      features: [
        "Student & Staff Profiles",
        "Attendance Tracking & Absence SMS",
        "Fee Collection & Printable Receipts",
        "Examination & Report Card Generator",
        "Parent Mobile Web Portal",
        "Basic Reports & Data Export",
        "Email Support within 24 hours"
      ]
    },
    {
      name: "Standard",
      desc: "Most popular for growing schools wanting complete automation.",
      monthlyPrice: 25,
      yearlyPrice: 21,
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      popular: true,
      popularBadge: "MOST POPULAR",
      btnBg: "linear-gradient(135deg, #059669, #10b981)",
      features: [
        "Everything in Basic",
        "Automated Voice Phone Calls on Absence",
        "Daily Digital Diary & Homework Sync",
        "Direct Teacher-Parent WhatsApp Messaging",
        "Transport & GPS Vehicle Tracking",
        "Library & Book Inventory Module",
        "Hostel & Room Allocation System",
        "Priority Phone & WhatsApp Support",
        "Full Staff Onboarding & Training Included"
      ]
    },
    {
      name: "Premium",
      desc: "For leading institutions needing multi-branch control & bespoke features.",
      monthlyPrice: 29,
      yearlyPrice: 24,
      icon: <Crown className="w-6 h-6 text-amber-600" />,
      popular: false,
      popularBadge: "BEST VALUE",
      btnBg: "linear-gradient(135deg, #d97706, #ea580c)",
      features: [
        "Everything in Standard",
        "Multi-Branch & Trust Central Dashboard",
        "Custom Branded Mobile App (Play Store & App Store)",
        "Biometric Machine LAN/Cloud Direct Sync",
        "RFID Turnstile & Smart Gate Automation",
        "Custom REST API & Webhooks Access",
        "Dedicated Account Manager & On-site Support",
        "Unlimited Cloud File Storage & Backups",
        "99.99% High-Availability SLA Guarantee"
      ]
    }
  ];

  const comparisonRows = [
    { feature: "Per-Student Pricing", merlin: "₹19 - ₹25 / mo", others: "₹50k - ₹2L / year upfront", sheets: "Free (High human cost)" },
    { feature: "Automated Voice Calls on Absence", merlin: "✓ Included", others: "✕ Extra ₹20,000 add-on", sheets: "✕ Not possible" },
    { feature: "Branded Parent Mobile Apps", merlin: "✓ Native iOS & Android", others: "△ Clunky WebView only", sheets: "✕ None" },
    { feature: "Setup & Onboarding Cost", merlin: "✓ ₹0 Free Setup", others: "✕ ₹25,000+ Setup fee", sheets: "✕ Manual setup" },
    { feature: "Hardware Biometric Sync", merlin: "✓ Direct Cloud/LAN", others: "△ Third-party sync tool", sheets: "✕ Manual entry" },
    { feature: "Online Fee UPI Checkout", merlin: "✓ Instant zero-delay", others: "△ 3-5 days batch settlement", sheets: "✕ Cash/Cheque only" },
    { feature: "Data Security & Daily Backups", merlin: "✓ AES-256 Cloud Mirror", others: "△ Local PC storage risk", sheets: "✕ High loss risk" }
  ];

  const faqs = [
    {
      q: "How is the pricing calculated for our school?",
      a: "Our pricing is simple and transparent: ₹X per student per month. For example, if you have 500 students on the Standard plan (₹25/student), your fee is ₹12,500/month. There are no hidden fees, no software maintenance costs, and no surprise add-on charges."
    },
    {
      q: "Is there a free trial before we commit?",
      a: "Yes! We offer a full 14-day free trial on all plans. No credit card or upfront payment is required. Our team helps you upload sample student and staff data so you can test everything with real classroom scenarios."
    },
    {
      q: "How long does onboarding and training take?",
      a: "Most schools go live within 24 to 48 hours. Our dedicated onboarding specialists assist you with bulk importing student records, configuring fee structures, setting up class timetables, and conducting a live staff training session."
    },
    {
      q: "Can we integrate our existing biometric devices and GPS trackers?",
      a: "Yes. MerlinFlow School IMS seamlessly integrates with all major biometric attendance machines (Essl, Realtime, ZKTeco, Mantra) and vehicle GPS tracking hardware via our plug-and-play API connectors."
    },
    {
      q: "Can parents pay fees online using UPI or NetBanking?",
      a: "Absolutely. Parents receive a secure payment link on their mobile app and WhatsApp. They can pay via Google Pay, PhonePe, Paytm, credit/debit cards, or net banking, and an instant GST-compliant tax receipt is generated automatically."
    },
    {
      q: "Can we switch or upgrade our plan later?",
      a: "Yes. You can upgrade, downgrade, or adjust student counts at any time based on your admissions cycle. Changes take effect from the next billing period."
    }
  ];

  useEffect(() => {
    // Ensure the page always loads at the top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const handleScroll = () => {
      const sections = ['overview', 'modules', 'solutions', 'pricing', 'security'];
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

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    if (sectionId === "overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70; // offset for sticky subnav
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="school-ims-page" style={{ paddingTop: "5.5rem" }}>
      {/* Top Breadcrumb & Sub Navigation */}
      <div className="sticky-subnav" style={{ position: "sticky", top: "76px", zIndex: 900 }}>
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
              45+ Modules
            </button>
            <button 
              className={`subnav-tab ${activeTab === 'solutions' ? 'active' : ''}`}
              onClick={() => scrollToSection('solutions')}
            >
              Role Solutions
            </button>
            <button 
              className={`subnav-tab ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => scrollToSection('pricing')}
            >
              Pricing Plans
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
                <button onClick={() => scrollToSection('modules')} className="btn-secondary">
                  <LayoutGrid size={18} /> Explore 45+ Modules
                </button>
              </div>

              <div className="stats-strip">
                <div 
                  className="stat-card" 
                  onClick={() => scrollToSection('modules')} 
                  style={{ cursor: "pointer" }}
                  title="Click to view 45+ modules"
                >
                  <div className="stat-number">45+</div>
                  <div className="stat-label">Integrated Modules</div>
                </div>
                <div className="stat-divider"></div>
                <div 
                  className="stat-card"
                  onClick={() => scrollToSection('solutions')}
                  style={{ cursor: "pointer" }}
                  title="Click to view role solutions"
                >
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Paperless Campus</div>
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
              className="hero-demo-col"
            >
              <div className="browser-window">
                {/* Mac Browser Header */}
                <div className="browser-header">
                  <div className="traffic-lights">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="browser-url-bar">
                    <div className="url-lock-group">
                      <Lock size={12} className="text-emerald" />
                      <span>school.merlinflow.in/portal/dashboard</span>
                    </div>
                    <div className="url-badge-group">
                      <span className="live-pulse-dot"></span>
                      <span className="live-status-text">Live System • AY 2025-26</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Demo Navigation Tab Switcher */}
                <div className="demo-nav-bar">
                  <button 
                    className={`demo-tab-btn ${demoTab === 'cockpit' ? 'active' : ''}`}
                    onClick={() => setDemoTab('cockpit')}
                  >
                    <BarChart3 size={13} />
                    <span>Cockpit</span>
                  </button>
                  <button 
                    className={`demo-tab-btn ${demoTab === 'students' ? 'active' : ''}`}
                    onClick={() => setDemoTab('students')}
                  >
                    <GraduationCap size={13} />
                    <span>Student SIS</span>
                  </button>
                  <button 
                    className={`demo-tab-btn ${demoTab === 'fees' ? 'active' : ''}`}
                    onClick={() => setDemoTab('fees')}
                  >
                    <CreditCard size={13} />
                    <span>Fee Automation</span>
                  </button>
                  <button 
                    className={`demo-tab-btn ${demoTab === 'transport' ? 'active' : ''}`}
                    onClick={() => setDemoTab('transport')}
                  >
                    <Bus size={13} />
                    <span>Smart Bus GPS</span>
                  </button>
                  <button 
                    className={`demo-tab-btn ${demoTab === 'attendance' ? 'active' : ''}`}
                    onClick={() => setDemoTab('attendance')}
                  >
                    <SmartphoneNfc size={13} />
                    <span>RFID Tap</span>
                  </button>
                </div>

                {/* Interactive Demo Body */}
                <div className="browser-body school-demo-container">
                  {/* TAB 1: PRINCIPAL COCKPIT */}
                  {demoTab === 'cockpit' && (
                    <div className="demo-pane">
                      <div className="demo-pane-header">
                        <div>
                          <div className="demo-sub-tag">INSTITUTIONAL DASHBOARD</div>
                          <h4 className="demo-pane-title">MerlinFlow Campus Cockpit</h4>
                        </div>
                        <span className="demo-live-badge">
                          <span className="pulsing-green-dot"></span> All 45 Modules Synced
                        </span>
                      </div>

                      {/* 4 Stat KPI Cards */}
                      <div className="demo-kpi-grid">
                        <div className="demo-kpi-card">
                          <div className="demo-kpi-head">
                            <span className="demo-kpi-label">Today Attendance</span>
                            <span className="demo-kpi-badge success">+1.4% vs avg</span>
                          </div>
                          <div className="demo-kpi-num">96.8%</div>
                          <span className="demo-kpi-foot">1,374 / 1,420 Students Present</span>
                        </div>

                        <div className="demo-kpi-card">
                          <div className="demo-kpi-head">
                            <span className="demo-kpi-label">Term 2 Fee Collected</span>
                            <span className="demo-kpi-badge primary">89.2%</span>
                          </div>
                          <div className="demo-kpi-num text-emerald">₹24.8L</div>
                          <span className="demo-kpi-foot">Auto-reconciled via UPI / Gateway</span>
                        </div>

                        <div className="demo-kpi-card">
                          <div className="demo-kpi-head">
                            <span className="demo-kpi-label">Bus GPS Fleet</span>
                            <span className="demo-kpi-badge info">12 / 12 Active</span>
                          </div>
                          <div className="demo-kpi-num">0 Delays</div>
                          <span className="demo-kpi-foot">All routes on schedule</span>
                        </div>

                        <div className="demo-kpi-card">
                          <div className="demo-kpi-head">
                            <span className="demo-kpi-label">Faculty On Duty</span>
                            <span className="demo-kpi-badge success">Biometric</span>
                          </div>
                          <div className="demo-kpi-num">84 / 88</div>
                          <span className="demo-kpi-foot">4 Approved Casual Leaves</span>
                        </div>
                      </div>

                      {/* Interactive Action Bar */}
                      <div className="demo-action-bar">
                        <button 
                          className="demo-action-btn primary"
                          onClick={() => triggerToast("📢 Emergency Broadcast dispatched to 1,420 parents & staff via WhatsApp & SMS!")}
                        >
                          <Send size={13} /> Broadcast Parent Alert
                        </button>
                        <button 
                          className="demo-action-btn secondary"
                          onClick={() => triggerToast("📄 CBSE Board compliant daily attendance digest exported as PDF!")}
                        >
                          <FileText size={13} /> Export CBSE Daily Digest
                        </button>
                        <button 
                          className="demo-action-btn accent"
                          onClick={handleSimulateRfid}
                        >
                          <SmartphoneNfc size={13} /> Simulate RFID Tap
                        </button>
                      </div>

                      {/* Live Activity Feed */}
                      <div className="demo-activity-box">
                        <div className="demo-activity-title">
                          <Clock size={13} className="text-primary" />
                          <span>Real-Time Campus Activity Feed</span>
                        </div>
                        <div className="activity-items">
                          <div className="activity-item">
                            <span className="activity-time">10:14 AM</span>
                            <span className="activity-desc"><strong>Bus #04 (North Express)</strong> arrived safely at Gate B with 42 students.</span>
                          </div>
                          <div className="activity-item">
                            <span className="activity-time">09:45 AM</span>
                            <span className="activity-desc"><strong>Class 10-A Math Mid-Term</strong> grading completed & marks synchronized.</span>
                          </div>
                          <div className="activity-item">
                            <span className="activity-time">09:12 AM</span>
                            <span className="activity-desc"><strong>₹45,000 Fee Payment</strong> received via UPI (Auto-Receipt #MF-9821 issued).</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: STUDENT 360 & SIS */}
                  {demoTab === 'students' && (
                    <div className="demo-pane">
                      <div className="demo-pane-header">
                        <div>
                          <div className="demo-sub-tag">STUDENT INFORMATION SYSTEM</div>
                          <h4 className="demo-pane-title">Student 360° Academic Dossier</h4>
                        </div>
                        <div className="student-selector">
                          {studentsData.map((s, idx) => (
                            <button
                              key={s.name}
                              className={`student-select-pill ${selectedStudent === idx ? 'active' : ''}`}
                              onClick={() => setSelectedStudent(idx)}
                            >
                              {s.name.split(" ")[0]}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Selected Student Profile Box */}
                      {(() => {
                        const cur = studentsData[selectedStudent];
                        return (
                          <div className="student-dossier-card">
                            <div className="student-top-banner">
                              <div className="student-avatar-col">
                                <div className="student-avatar">{cur.name.charAt(0)}</div>
                                <div>
                                  <div className="student-name-row">
                                    <h5>{cur.name}</h5>
                                    <span className="badge-grade">{cur.grade}</span>
                                  </div>
                                  <span className="student-roll-id">Roll No: {cur.roll} • Blood: {cur.blood}</span>
                                </div>
                              </div>
                              <div className="student-status-right">
                                <div className="student-gpa-badge">
                                  <span className="gpa-score">{cur.gpa}</span>
                                  <span className="gpa-label">{cur.gradeLevel}</span>
                                </div>
                              </div>
                            </div>

                            {/* Metrics Strip */}
                            <div className="student-stats-row">
                              <div className="s-stat-box">
                                <span className="s-stat-lbl">Attendance</span>
                                <span className="s-stat-val text-emerald">{cur.attendance}</span>
                                <span className="s-stat-sub">{cur.daysPresent}</span>
                              </div>
                              <div className="s-stat-box">
                                <span className="s-stat-lbl">Fee Status</span>
                                <span className="s-stat-val" style={{ color: cur.feeStatusColor }}>{cur.feeStatus.split(" ")[0]}</span>
                                <span className="s-stat-sub">{cur.feeStatus}</span>
                              </div>
                              <div className="s-stat-box">
                                <span className="s-stat-lbl">Parent / Guardian</span>
                                <span className="s-stat-val">{cur.parent}</span>
                                <span className="s-stat-sub">{cur.phone}</span>
                              </div>
                            </div>

                            {/* Subject Marks Grid */}
                            <div className="student-subjects-grid">
                              {cur.subjects.map(subj => (
                                <div key={subj.name} className="subject-score-card">
                                  <span className="subj-name">{subj.name}</span>
                                  <div className="subj-score-row">
                                    <span className="subj-score">{subj.score}</span>
                                    <span className="subj-grade-badge">{subj.grade}</span>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="demo-action-bar" style={{ marginTop: '0.9rem' }}>
                              <button 
                                className="demo-action-btn primary"
                                onClick={() => triggerToast(`📑 Official CBSE Term Report Card generated for ${cur.name}!`)}
                              >
                                <FileSpreadsheet size={13} /> Generate CBSE Report Card
                              </button>
                              <button 
                                className="demo-action-btn secondary"
                                onClick={() => triggerToast(`💬 WhatsApp parent notification sent to ${cur.parent} (${cur.phone})!`)}
                              >
                                <MessageSquare size={13} /> WhatsApp Parent
                              </button>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* TAB 3: FEE AUTOMATION */}
                  {demoTab === 'fees' && (
                    <div className="demo-pane">
                      <div className="demo-pane-header">
                        <div>
                          <div className="demo-sub-tag">AUTOMATED BILLING & RECOVERY</div>
                          <h4 className="demo-pane-title">Smart Fee Invoicing & WhatsApp Dues</h4>
                        </div>
                        <button 
                          className="demo-action-btn primary compact"
                          onClick={() => {
                            const updated = {};
                            pendingFeeStudents.forEach(s => { updated[s.id] = true; });
                            setFeeReminderSent(updated);
                            triggerToast("⚡ Bulk WhatsApp fee reminders dispatched to all 4 pending parents with UPI payment links!");
                          }}
                        >
                          <Zap size={13} /> 1-Click Dispatches (All Dues)
                        </button>
                      </div>

                      {/* Fee Collection Summary Bar */}
                      <div className="fee-progress-card">
                        <div className="fee-progress-head">
                          <div>
                            <span className="fee-prog-label">AY 2025-26 Term 2 Collection</span>
                            <div className="fee-prog-figures">
                              <strong>₹24,80,000</strong> <span className="fee-total">/ ₹28,00,000</span>
                            </div>
                          </div>
                          <span className="fee-percentage-pill">89% Collected</span>
                        </div>
                        <div className="fee-bar-track">
                          <div className="fee-bar-fill" style={{ width: '89%' }}></div>
                        </div>
                      </div>

                      {/* Pending Fee Ledger */}
                      <div className="fee-table-container">
                        <div className="fee-table-header">
                          <span>Student & Class</span>
                          <span>Due Particulars</span>
                          <span>Amount</span>
                          <span>WhatsApp Action</span>
                        </div>
                        <div className="fee-table-body">
                          {pendingFeeStudents.map(student => {
                            const isSent = feeReminderSent[student.id];
                            return (
                              <div key={student.id} className="fee-table-row">
                                <div className="fee-student-info">
                                  <div className="fee-avatar">{student.name.charAt(0)}</div>
                                  <div>
                                    <div className="fee-s-name">{student.name}</div>
                                    <span className="fee-s-class">{student.grade} • {student.parent}</span>
                                  </div>
                                </div>
                                <span className="fee-due-tag">{student.due}</span>
                                <span className="fee-amt-val">{student.amount}</span>
                                <div>
                                  {isSent ? (
                                    <span className="fee-sent-pill">
                                      <CheckCircle2 size={12} /> Reminder Sent
                                    </span>
                                  ) : (
                                    <button 
                                      className="btn-send-whatsapp-fee"
                                      onClick={() => handleSendReminder(student.id, student.name, student.amount)}
                                    >
                                      <MessageSquare size={12} /> Send WhatsApp
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: SMART BUS GPS */}
                  {demoTab === 'transport' && (
                    <div className="demo-pane">
                      <div className="demo-pane-header">
                        <div>
                          <div className="demo-sub-tag">RFID & FLEET TELEMATICS</div>
                          <h4 className="demo-pane-title">Live School Bus GPS Tracking</h4>
                        </div>
                        <button 
                          className="demo-action-btn secondary compact"
                          onClick={handleAdvanceBus}
                        >
                          <RefreshCw size={13} /> Simulate GPS Ping
                        </button>
                      </div>

                      {/* Bus Hero Telemetry Card */}
                      <div className="bus-telemetry-card">
                        <div className="bus-telemetry-top">
                          <div className="bus-id-group">
                            <div className="bus-icon-circle"><Bus size={18} /></div>
                            <div>
                              <h5>Bus #04 • North Campus Express</h5>
                              <span className="bus-sub-info">Driver: Suresh Kumar • +91 98765 43210</span>
                            </div>
                          </div>
                          <div className="bus-speed-badge">
                            <span className="speed-val">38 km/h</span>
                            <span className="speed-status text-emerald">● Safe Speed</span>
                          </div>
                        </div>

                        <div className="bus-stat-pills">
                          <span className="bus-pill"><strong>42 / 45</strong> Students Onboard</span>
                          <span className="bus-pill"><strong>Next Stop:</strong> {busRouteStops[busLocationStep].name}</span>
                          <span className="bus-pill text-emerald"><strong>ETA:</strong> 4 Mins</span>
                        </div>
                      </div>

                      {/* Step-by-Step Route Tracker */}
                      <div className="route-tracker-card">
                        <div className="route-tracker-title">
                          <MapPin size={13} className="text-primary" />
                          <span>Route Stops & Real-Time Proximity Alert</span>
                        </div>
                        <div className="route-stops-list">
                          {busRouteStops.map((stop, idx) => {
                            const isCurrent = idx === busLocationStep;
                            const isPassed = idx < busLocationStep;
                            return (
                              <div key={stop.name} className={`route-stop-item ${isCurrent ? 'current' : ''} ${isPassed ? 'passed' : ''}`}>
                                <div className="stop-marker-col">
                                  <div className={`stop-dot ${isCurrent ? 'current-pulse' : ''} ${isPassed ? 'passed' : ''}`}>
                                    {isPassed && <Check size={10} color="#fff" />}
                                  </div>
                                  {idx !== busRouteStops.length - 1 && <div className="stop-line"></div>}
                                </div>
                                <div className="stop-info-col">
                                  <div className="stop-name-row">
                                    <span className="stop-name">{stop.name}</span>
                                    <span className="stop-time-tag">{stop.time}</span>
                                  </div>
                                  <span className="stop-status-label">
                                    {isCurrent ? "📍 Approaching Stop - Parent WhatsApp Alerts Sent" : isPassed ? "✓ Departed on schedule" : "Upcoming Scheduled Stop"}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 5: RFID & BIOMETRIC GATE TAP */}
                  {demoTab === 'attendance' && (
                    <div className="demo-pane">
                      <div className="demo-pane-header">
                        <div>
                          <div className="demo-sub-tag">IOT HARDWARE & GATE PASS</div>
                          <h4 className="demo-pane-title">Smart RFID & Face ID Attendance</h4>
                        </div>
                        <button 
                          className="demo-action-btn primary compact"
                          onClick={handleSimulateRfid}
                        >
                          <SmartphoneNfc size={13} /> Tap RFID Card
                        </button>
                      </div>

                      {/* Gate Terminal Status Banner */}
                      <div className="gate-terminal-banner">
                        <div className="gate-status-left">
                          <span className="pulsing-green-dot"></span>
                          <div>
                            <strong>Terminal Gate 01 - Main Entrance</strong>
                            <span className="gate-sub">Hardware Connected • 1,374 Cards Processed Today</span>
                          </div>
                        </div>
                        <span className="badge-sync-ok">Zero Delay SMS Sync</span>
                      </div>

                      {/* Live RFID Event Logs Table */}
                      <div className="rfid-logs-table">
                        <div className="rfid-table-head">
                          <span>Student & ID</span>
                          <span>Scan Time</span>
                          <span>Gate Status</span>
                          <span>Parent SMS Status</span>
                        </div>
                        <div className="rfid-table-rows">
                          {rfidScans.map(scan => (
                            <div key={scan.id} className="rfid-row-item">
                              <div className="rfid-student-col">
                                <div className="rfid-avatar">{scan.name.charAt(0)}</div>
                                <div>
                                  <span className="rfid-name">{scan.name}</span>
                                  <span className="rfid-id-tag">{scan.roll} • {scan.mode}</span>
                                </div>
                              </div>
                              <span className="rfid-time">{scan.time}</span>
                              <span className="rfid-status-badge">{scan.status}</span>
                              <span className="rfid-sms-ok">
                                <CheckCircle2 size={12} /> SMS Dispatched
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Floating Action Toast */}
                  <AnimatePresence>
                    {toastMessage && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        className="demo-toast-popup"
                      >
                        <Sparkles size={14} className="text-emerald" />
                        <span>{toastMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 45+ Modules Suite Section */}
      <section id="modules" className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Layers size={14} /> COMPLETE SUITE</div>
            <h2 className="section-title">45+ Purpose-Built Modules</h2>
            <p className="section-desc">Modular, customizable, and seamlessly synchronized across web and mobile.</p>

            {/* Category Filter Pills */}
            <div className="category-filters">
              {[
                { id: "all", label: "All Modules (42+)" },
                { id: "core", label: "Core Modules (16)" },
                { id: "academic", label: "Academic & Insights (8)" },
                { id: "admin", label: "Admin & Operations (12)" },
                { id: "future", label: "Future-Ready & Hardware IoT (6)" }
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
                      transition={{ duration: 0.25, delay: idx * 0.02 }}
                      className="module-large-card"
                      onClick={() => handleModuleClick(mod.name)}
                      style={{ cursor: "pointer" }}
                      title={`Click to test ${mod.name} in live simulator`}
                    >
                      <div className="mod-large-icon">{mod.icon}</div>
                      <h3 className="mod-large-name">{mod.name}</h3>
                      <p className="mod-large-desc">{mod.desc}</p>
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
            <p className="section-desc">Each stakeholder gets a customized dashboard optimized for their exact responsibilities.</p>
          </div>

          <div className="roles-layout">
            <div className="roles-nav-pills">
              {roleSolutions.map((r, idx) => (
                <button 
                  key={idx}
                  className={`role-nav-btn ${activeRole === idx ? 'active' : ''}`}
                  onClick={() => setActiveRole(idx)}
                >
                  {r.title}
                </button>
              ))}
            </div>

            <div className="role-detail-card">
              <div className="role-detail-header">
                <div className="role-icon-box">{roleSolutions[activeRole].icon}</div>
                <div>
                  <span className="role-badge-tag">{roleSolutions[activeRole].badge}</span>
                  <h3 className="role-detail-title">{roleSolutions[activeRole].title}</h3>
                  <p className="role-detail-tag">{roleSolutions[activeRole].tag}</p>
                </div>
              </div>
              <p className="role-detail-desc">{roleSolutions[activeRole].desc}</p>
              
              <div className="role-highlights-title">KEY CAPABILITIES & WORKFLOWS</div>
              <ul className="role-highlights-list">
                {roleSolutions[activeRole].highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} color={roleSolutions[activeRole].color} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="role-actions-row">
                <button 
                  onClick={() => handleExperienceRolePortal(activeRole)} 
                  className="role-request-btn" 
                  style={{ background: roleSolutions[activeRole].color }}
                >
                  <Sparkles size={16} /> Experience {roleSolutions[activeRole].title} Live Demo <ArrowRight size={16} />
                </button>
                <button 
                  onClick={scrollToContact} 
                  className="role-contact-sub-btn"
                  title="Request customized institutional deployment consultation"
                >
                  Book Custom Walkthrough
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="section-padding bg-light">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><CreditCard size={14} /> TRANSPARENT PRICING</div>
            <h2 className="section-title">Simple, Honest Per-Student Pricing</h2>
            <p className="section-desc">Pay only for what you use. No hidden setup fees, no software maintenance costs.</p>

            {/* Monthly / Yearly Switcher */}
            <div className="billing-switcher">
              <span className={`switch-label ${!isYearlyPricing ? 'active' : ''}`}>Monthly Billing</span>
              <button 
                className={`switch-toggle ${isYearlyPricing ? 'yearly' : ''}`}
                onClick={() => setIsYearlyPricing(!isYearlyPricing)}
                aria-label="Toggle annual billing discount"
              >
                <div className="toggle-thumb"></div>
              </button>
              <span className={`switch-label ${isYearlyPricing ? 'active' : ''}`}>
                Annual Billing <span className="discount-badge">2 Months Free (17% Off)</span>
              </span>
            </div>
          </div>

          <div className="pricing-cards-grid">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className={`pricing-card ${plan.popular ? 'featured-card' : ''}`}>
                {plan.popularBadge && (
                  <div className="popular-ribbon">{plan.popularBadge}</div>
                )}
                
                <div className="plan-icon-wrap">{plan.icon}</div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>

                <div className="price-tag-box">
                  <span className="currency">₹</span>
                  <span className="amount">{isYearlyPricing ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="period">/ student / mo</span>
                </div>

                <ul className="plan-features">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <div className="feat-check">✓</div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToContact} 
                  className="plan-select-btn"
                  style={{ background: plan.btnBg, color: '#ffffff' }}
                >
                  Select {plan.name} Plan <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <p className="pricing-footnote">
            All plans include SSL encryption, automated data backups, guided onboarding, and free software updates.
          </p>
        </div>
      </section>

      {/* Why Choose Us Comparison Matrix */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><Sparkles size={14} /> WHY MERLINFLOW</div>
            <h2 className="section-title">How MerlinFlow Compares</h2>
            <p className="section-desc">See why modern schools choose MerlinFlow over outdated legacy software and manual Excel sheets.</p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Features & Capabilities</th>
                  <th className="highlight-col">MerlinFlow School IMS</th>
                  <th>Legacy Software</th>
                  <th>Manual Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="feat-col-name">{row.feature}</td>
                    <td className="highlight-cell">{row.merlin}</td>
                    <td className="others-cell">{row.others}</td>
                    <td className="sheets-cell">{row.sheets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security & Infrastructure Section */}
      <section id="security" className="section-padding bg-light">
        <div className="container">
          <div className="security-banner">
            <div className="sec-header">
              <div className="pill-tag"><ShieldCheck size={14} /> ZERO-TRUST ARCHITECTURE</div>
              <h2 className="sec-banner-title">Bank-Grade Security & 99.99% Uptime</h2>
              <p className="sec-banner-desc">
                Schools handle sensitive minor student records and financial ledgers daily. MerlinFlow is architected with strict Zero-Trust protocols, automated disaster recovery, and military-grade encryption.
              </p>
            </div>

            <div className="sec-grid-cards">
              <div className="sec-mini-card">
                <Lock size={24} color="#2563eb" />
                <h4>Role-Based Access Control</h4>
                <p>Granular field-level permissions for teachers, accountants, and principals.</p>
              </div>
              <div className="sec-mini-card">
                <Server size={24} color="#2563eb" />
                <h4>Daily Cloud Backups</h4>
                <p>Automated database replication every 24 hours with instantaneous point-in-time recovery.</p>
              </div>
              <div className="sec-mini-card">
                <Shield size={24} color="#2563eb" />
                <h4>AES-256 Bit Encryption</h4>
                <p>All sensitive PII and fee transaction records are encrypted in transit and at rest.</p>
              </div>
              <div className="sec-mini-card">
                <Smartphone size={24} color="#2563eb" />
                <h4>App Store & Play Store Packaged</h4>
                <p>Native compiled iOS & Android applications ready for instant institutional deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <div className="pill-tag"><HelpCircle size={14} /> FAQ SUPPORT</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">Have questions before onboarding? Here are the most common inquiries from school administrators.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-card-item">
                <button 
                  className="faq-toggle-btn"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <ChevronDown size={18} className={`faq-arrow ${openFaq === idx ? 'open' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="faq-answer-wrapper"
                    >
                      <p className="faq-answer-text">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting CTA Box */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-box">
            <span className="cta-pill">FREE 14-DAY FULL TRIAL</span>
            <h2 className="cta-heading">Ready to Join the Future of School Management?</h2>
            <p className="cta-sub">
              Experience the difference of a platform built for trust, reliability, and academic excellence. Book a live demo or get started right away.
            </p>
            <div className="cta-btns">
              <button onClick={scrollToContact} className="btn-white">
                Book a Live Demo <ArrowRight size={18} />
              </button>
              <a href="tel:+918374373753" className="btn-outline-white">
                Call Direct: +91 83743 73753
              </a>
            </div>
            <p className="cta-footnote">No setup fees • Free staff training & support • Self-serve setup in 24 hours</p>
          </div>
        </div>
      </section>

      {/* Integrated Contact Section */}
      <ContactSection />

      <style jsx global>{`
        .school-ims-page {
          background-color: #f8fafc;
          color: #0f172a;
          padding-top: 5.75rem;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* STICKY SUB-NAV */
        .sticky-subnav {
          position: sticky;
          top: 76px;
          z-index: 900;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }

        .subnav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          gap: 1rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .back-link:hover {
          color: #2563eb;
        }

        .subnav-tabs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .subnav-tab {
          padding: 0.45rem 0.9rem;
          border-radius: 50px;
          border: none;
          background: transparent;
          font-size: 0.84rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .subnav-tab:hover {
          color: #0f172a;
          background: #f1f5f9;
        }

        .subnav-tab.active {
          background: #0f172a;
          color: #ffffff;
        }

        .subnav-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #2563eb;
          color: #ffffff;
          padding: 0.45rem 1rem;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
        }

        .subnav-cta-btn:hover {
          background: #1d4ed8;
        }

        /* HERO SECTION */
        .hero-section {
          padding: 5.25rem 0 5rem;
          position: relative;
          background: radial-gradient(circle at 85% 15%, rgba(37, 99, 235, 0.04) 0%, rgba(255, 255, 255, 0) 50%);
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
          font-weight: 800;
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

        .stats-strip {
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 1.25rem 1.75rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          max-width: 500px;
        }

        .stat-card {
          flex: 1;
          text-align: center;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 900;
          color: #2563eb;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          margin-top: 0.35rem;
        }

        .stat-divider {
          width: 1px;
          height: 36px;
          background: #e2e8f0;
        }

        /* BROWSER DEMO FRAME & INTERACTIVE SCHOOL DEMO */
        .browser-window {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #cbd5e1;
          box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.16);
          overflow: hidden;
          height: 570px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .browser-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.7rem 1.15rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .traffic-lights {
          display: flex;
          gap: 6px;
        }

        .traffic-lights .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .browser-url-bar {
          flex: 1;
          background: #eef2f6;
          border-radius: 8px;
          padding: 0.35rem 0.85rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #334155;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #e2e8f0;
        }

        .url-lock-group {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .url-badge-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .live-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.25);
          animation: pulseGreen 2s infinite;
        }

        .live-status-text {
          font-size: 0.68rem;
          font-weight: 700;
          color: #059669;
        }

        /* DEMO NAVIGATION TABS */
        .demo-nav-bar {
          display: flex;
          background: #f1f5f9;
          padding: 0.35rem 0.6rem;
          gap: 0.35rem;
          border-bottom: 1px solid #e2e8f0;
          overflow-x: auto;
        }

        .demo-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.75rem;
          border-radius: 7px;
          border: none;
          background: transparent;
          color: #64748b;
          font-size: 0.74rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .demo-tab-btn:hover {
          color: #0f172a;
          background: rgba(255, 255, 255, 0.6);
        }

        .demo-tab-btn.active {
          background: #ffffff;
          color: #2563eb;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
        }

        .browser-body {
          flex: 1;
          position: relative;
          background: #f8fafc;
          overflow: hidden;
        }

        .school-demo-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .demo-pane {
          flex: 1;
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          overflow-y: auto;
        }

        .demo-pane-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .demo-sub-tag {
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #2563eb;
          text-transform: uppercase;
        }

        .demo-pane-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0.1rem 0 0;
        }

        .demo-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #ecfdf5;
          color: #059669;
          border: 1px solid #a7f3d0;
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
          font-size: 0.68rem;
          font-weight: 700;
        }

        .pulsing-green-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          display: inline-block;
        }

        /* KPI GRID */
        .demo-kpi-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem;
        }

        .demo-kpi-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.75rem 0.85rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .demo-kpi-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }

        .demo-kpi-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        .demo-kpi-badge {
          font-size: 0.62rem;
          font-weight: 700;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        .demo-kpi-badge.success { background: #dcfce7; color: #15803d; }
        .demo-kpi-badge.primary { background: #eff6ff; color: #1d4ed8; }
        .demo-kpi-badge.info { background: #f0fdfa; color: #0f766e; }

        .demo-kpi-num {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        .demo-kpi-foot {
          font-size: 0.65rem;
          color: #94a3b8;
          font-weight: 500;
          margin-top: 0.2rem;
          display: block;
        }

        /* ACTION BAR */
        .demo-action-bar {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .demo-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          font-size: 0.74rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .demo-action-btn.primary {
          background: #2563eb;
          color: #ffffff;
        }
        .demo-action-btn.primary:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .demo-action-btn.secondary {
          background: #ffffff;
          color: #334155;
          border: 1px solid #cbd5e1;
        }
        .demo-action-btn.secondary:hover {
          background: #f1f5f9;
        }

        .demo-action-btn.accent {
          background: #ecfdf5;
          color: #059669;
          border: 1px solid #a7f3d0;
        }
        .demo-action-btn.accent:hover {
          background: #d1fae5;
        }

        .demo-action-btn.compact {
          padding: 0.35rem 0.7rem;
          font-size: 0.7rem;
        }

        /* ACTIVITY FEED */
        .demo-activity-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.75rem 0.9rem;
        }

        .demo-activity-title {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.72rem;
          font-weight: 800;
          color: #334155;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .activity-items {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.72rem;
          color: #475569;
          line-height: 1.35;
        }

        .activity-time {
          font-size: 0.65rem;
          font-weight: 700;
          color: #2563eb;
          background: #eff6ff;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          white-space: nowrap;
        }

        /* STUDENT 360 DOSSIER */
        .student-selector {
          display: flex;
          gap: 0.35rem;
        }

        .student-select-pill {
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          font-size: 0.7rem;
          font-weight: 700;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }

        .student-select-pill.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        .student-dossier-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 0.9rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .student-top-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .student-avatar-col {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .student-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1rem;
        }

        .student-name-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .student-name-row h5 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .badge-grade {
          background: #eff6ff;
          color: #2563eb;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
        }

        .student-roll-id {
          font-size: 0.68rem;
          color: #64748b;
        }

        .student-gpa-badge {
          text-align: right;
        }

        .gpa-score {
          display: block;
          font-size: 1.15rem;
          font-weight: 900;
          color: #059669;
          line-height: 1;
        }

        .gpa-label {
          font-size: 0.62rem;
          font-weight: 700;
          color: #059669;
          text-transform: uppercase;
        }

        .student-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          background: #f8fafc;
          border-radius: 10px;
          padding: 0.6rem 0.75rem;
        }

        .s-stat-lbl {
          font-size: 0.62rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          display: block;
        }

        .s-stat-val {
          font-size: 0.85rem;
          font-weight: 800;
          color: #0f172a;
          display: block;
          margin-top: 0.1rem;
        }

        .s-stat-sub {
          font-size: 0.62rem;
          color: #94a3b8;
          display: block;
        }

        .student-subjects-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.45rem;
        }

        .subject-score-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.45rem 0.55rem;
        }

        .subj-name {
          font-size: 0.62rem;
          font-weight: 700;
          color: #64748b;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .subj-score-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.2rem;
        }

        .subj-score {
          font-size: 0.78rem;
          font-weight: 800;
          color: #0f172a;
        }

        .subj-grade-badge {
          font-size: 0.6rem;
          font-weight: 800;
          color: #059669;
          background: #dcfce7;
          padding: 0.05rem 0.35rem;
          border-radius: 3px;
        }

        /* FEE AUTOMATION PANE */
        .fee-progress-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.75rem 0.9rem;
        }

        .fee-progress-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.45rem;
        }

        .fee-prog-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        .fee-prog-figures {
          font-size: 1rem;
          color: #0f172a;
          margin-top: 0.1rem;
        }

        .fee-prog-figures strong {
          color: #059669;
          font-weight: 800;
        }

        .fee-total {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .fee-percentage-pill {
          background: #dcfce7;
          color: #15803d;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0.2rem 0.55rem;
          border-radius: 50px;
        }

        .fee-bar-track {
          width: 100%;
          height: 7px;
          background: #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
        }

        .fee-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #059669);
          border-radius: 10px;
          transition: width 0.6s ease;
        }

        .fee-table-container {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .fee-table-header {
          display: grid;
          grid-template-columns: 1.6fr 1.2fr 0.9fr 1.3fr;
          padding: 0.5rem 0.75rem;
          background: #f1f5f9;
          font-size: 0.65rem;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
        }

        .fee-table-body {
          display: flex;
          flex-direction: column;
        }

        .fee-table-row {
          display: grid;
          grid-template-columns: 1.6fr 1.2fr 0.9fr 1.3fr;
          align-items: center;
          padding: 0.55rem 0.75rem;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.72rem;
        }

        .fee-table-row:last-child {
          border-bottom: none;
        }

        .fee-student-info {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .fee-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #eff6ff;
          color: #2563eb;
          font-weight: 800;
          font-size: 0.68rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fee-s-name {
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }

        .fee-s-class {
          font-size: 0.62rem;
          color: #64748b;
        }

        .fee-due-tag {
          font-size: 0.65rem;
          color: #475569;
          font-weight: 600;
        }

        .fee-amt-val {
          font-weight: 800;
          color: #e11d48;
        }

        .btn-send-whatsapp-fee {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #25d366;
          color: #ffffff;
          border: none;
          padding: 0.3rem 0.55rem;
          border-radius: 6px;
          font-size: 0.65rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-send-whatsapp-fee:hover {
          background: #1eb956;
        }

        .fee-sent-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: #ecfdf5;
          color: #059669;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
        }

        /* SMART BUS GPS PANE */
        .bus-telemetry-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.8rem 0.9rem;
        }

        .bus-telemetry-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }

        .bus-id-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .bus-icon-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bus-id-group h5 {
          font-size: 0.88rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .bus-sub-info {
          font-size: 0.64rem;
          color: #64748b;
        }

        .bus-speed-badge {
          text-align: right;
        }

        .speed-val {
          font-size: 0.95rem;
          font-weight: 900;
          color: #0f172a;
          display: block;
        }

        .speed-status {
          font-size: 0.62rem;
          font-weight: 700;
        }

        .bus-stat-pills {
          display: flex;
          gap: 0.45rem;
          flex-wrap: wrap;
        }

        .bus-pill {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          font-size: 0.65rem;
          color: #475569;
        }

        .route-tracker-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.8rem 0.9rem;
        }

        .route-tracker-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.7rem;
          font-weight: 800;
          color: #334155;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .route-stops-list {
          display: flex;
          flex-direction: column;
        }

        .route-stop-item {
          display: flex;
          gap: 0.75rem;
          min-height: 38px;
        }

        .stop-marker-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 16px;
        }

        .stop-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #e2e8f0;
          border: 2px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .stop-dot.passed {
          background: #10b981;
          border-color: #10b981;
        }

        .stop-dot.current-pulse {
          background: #2563eb;
          border-color: #93c5fd;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
          animation: pulseBlue 1.8s infinite;
        }

        .stop-line {
          width: 2px;
          flex: 1;
          background: #e2e8f0;
          margin: 2px 0;
        }

        .stop-info-col {
          flex: 1;
          padding-bottom: 0.5rem;
        }

        .stop-name-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stop-name {
          font-size: 0.74rem;
          font-weight: 700;
          color: #0f172a;
        }

        .route-stop-item.current .stop-name {
          color: #2563eb;
          font-weight: 800;
        }

        .stop-time-tag {
          font-size: 0.62rem;
          font-weight: 700;
          color: #64748b;
        }

        .stop-status-label {
          font-size: 0.62rem;
          color: #94a3b8;
          display: block;
        }

        .route-stop-item.current .stop-status-label {
          color: #2563eb;
          font-weight: 600;
        }

        /* RFID & BIOMETRIC GATE PANE */
        .gate-terminal-banner {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 0.65rem 0.85rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .gate-status-left {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }

        .gate-status-left strong {
          font-size: 0.78rem;
          color: #0f172a;
          display: block;
        }

        .gate-sub {
          font-size: 0.62rem;
          color: #64748b;
          display: block;
        }

        .badge-sync-ok {
          background: #ecfdf5;
          color: #059669;
          font-size: 0.62rem;
          font-weight: 800;
          padding: 0.2rem 0.55rem;
          border-radius: 50px;
        }

        .rfid-logs-table {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .rfid-table-head {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
          padding: 0.5rem 0.75rem;
          background: #f1f5f9;
          font-size: 0.65rem;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
        }

        .rfid-table-rows {
          display: flex;
          flex-direction: column;
        }

        .rfid-row-item {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
          align-items: center;
          padding: 0.55rem 0.75rem;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.72rem;
        }

        .rfid-row-item:last-child {
          border-bottom: none;
        }

        .rfid-student-col {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .rfid-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #eff6ff;
          color: #2563eb;
          font-size: 0.68rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rfid-name {
          font-weight: 700;
          color: #0f172a;
          display: block;
          line-height: 1.2;
        }

        .rfid-id-tag {
          font-size: 0.62rem;
          color: #64748b;
        }

        .rfid-time {
          font-weight: 600;
          color: #334155;
        }

        .rfid-status-badge {
          background: #dcfce7;
          color: #15803d;
          font-size: 0.62rem;
          font-weight: 800;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          display: inline-block;
          width: fit-content;
        }

        .rfid-sms-ok {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: #059669;
          font-size: 0.65rem;
          font-weight: 700;
        }

        /* FLOATING TOAST POPUP */
        .demo-toast-popup {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(12px);
          color: #ffffff;
          padding: 0.65rem 1rem;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.15);
          z-index: 50;
        }

        @keyframes pulseGreen {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }

        @keyframes pulseBlue {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25); }
          50% { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.15); }
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
          max-width: 800px;
          margin: 0 auto 3.5rem;
        }

        .pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #bfdbfe;
          border-radius: 50px;
          padding: 0.3rem 0.9rem;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          margin-bottom: 1rem;
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

        /* CATEGORY FILTER PILLS */
        .category-filters {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-top: 1.75rem;
        }

        .cat-pill {
          padding: 0.5rem 1.1rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cat-pill:hover {
          border-color: #2563eb;
          color: #2563eb;
        }

        .cat-pill.active {
          background: #2563eb;
          border-color: #2563eb;
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
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.25rem;
          box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.04);
          margin-bottom: 2.5rem;
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
          color: #2563eb;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
        }

        /* MODULES GRID LARGE */
        .modules-grid-large {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .module-large-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.02);
          position: relative;
        }

        .module-large-card:hover {
          border-color: #2563eb;
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -10px rgba(37, 99, 235, 0.16), 0 10px 15px -5px rgba(0, 0, 0, 0.05);
        }

        .mod-large-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .mod-large-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .mod-large-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.55;
        }

        /* ROLE SOLUTIONS SECTION */
        .roles-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 2.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .roles-nav-pills {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .role-nav-btn {
          text-align: left;
          padding: 1.1rem 1.4rem;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
        }

        .role-nav-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
        }

        .role-nav-btn.active {
          background: #0f172a;
          border-color: #0f172a;
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.15);
        }

        .role-detail-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 10px 35px rgba(0,0,0,0.04);
        }

        .role-detail-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .role-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .role-badge-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: #2563eb;
          letter-spacing: 0.05em;
        }

        .role-detail-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0.2rem 0;
        }

        .role-detail-tag {
          font-size: 0.88rem;
          color: #64748b;
          font-weight: 600;
        }

        .role-detail-desc {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .role-highlights-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 0.06em;
          margin-bottom: 1rem;
        }

        .role-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .role-highlights-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.92rem;
          font-weight: 600;
          color: #334155;
        }

        .role-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .role-request-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: #ffffff;
          padding: 0.85rem 1.6rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.92rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        }

        .role-request-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.18);
        }

        .role-contact-sub-btn {
          display: inline-flex;
          align-items: center;
          background: #ffffff;
          color: #475569;
          border: 1.5px solid #cbd5e1;
          padding: 0.8rem 1.4rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .role-contact-sub-btn:hover {
          background: #f8fafc;
          color: #0f172a;
          border-color: #94a3b8;
          transform: translateY(-1px);
        }

        /* PRICING PLANS */
        .billing-switcher {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: #f1f5f9;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          border: 1px solid #e2e8f0;
          margin-top: 1.5rem;
        }

        .switch-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .switch-label.active {
          color: #0f172a;
        }

        .switch-toggle {
          width: 48px;
          height: 26px;
          background: #cbd5e1;
          border-radius: 50px;
          border: none;
          position: relative;
          cursor: pointer;
          transition: background 0.2s;
        }

        .switch-toggle.yearly {
          background: #059669;
        }

        .toggle-thumb {
          width: 20px;
          height: 20px;
          background: #ffffff;
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 3px;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .switch-toggle.yearly .toggle-thumb {
          transform: translateX(22px);
        }

        .discount-badge {
          background: #ecfdf5;
          color: #059669;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: 50px;
          border: 1px solid #a7f3d0;
        }

        .pricing-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .pricing-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s ease;
        }

        .pricing-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.08);
        }

        .featured-card {
          border-color: #10b981;
          box-shadow: 0 15px 40px rgba(16, 185, 129, 0.12);
        }

        .popular-ribbon {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #059669;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 0.3rem 1rem;
          border-radius: 50px;
        }

        .plan-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .plan-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }

        .plan-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          min-height: 40px;
        }

        .price-tag-box {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
          background: #f8fafc;
          padding: 1rem 1.25rem;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          margin-bottom: 2rem;
        }

        .currency {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
        }

        .amount {
          font-size: 2.4rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1;
        }

        .period {
          font-size: 0.78rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          flex-grow: 1;
        }

        .plan-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.86rem;
          color: #334155;
          line-height: 1.4;
        }

        .feat-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #eff6ff;
          color: #2563eb;
          font-size: 0.75rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .plan-select-btn {
          width: 100%;
          padding: 0.9rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .plan-select-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }

        .pricing-footnote {
          text-align: center;
          font-size: 0.82rem;
          color: #94a3b8;
          margin-top: 2.5rem;
        }

        /* COMPARISON TABLE */
        .comparison-table-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #cbd5e1;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .comparison-table th {
          padding: 1.25rem 1.5rem;
          font-size: 0.88rem;
          font-weight: 800;
          color: #0f172a;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .comparison-table th.highlight-col {
          background: #eff6ff;
          color: #2563eb;
        }

        .comparison-table td {
          padding: 1.1rem 1.5rem;
          font-size: 0.88rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .feat-col-name {
          font-weight: 700;
          color: #1e293b;
        }

        .highlight-cell {
          background: #eff6ff;
          font-weight: 800;
          color: #2563eb;
        }

        .others-cell {
          color: #64748b;
        }

        .sheets-cell {
          color: #94a3b8;
        }

        /* SECURITY BANNER */
        .security-banner {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 24px;
          padding: 3.5rem;
        }

        .sec-header {
          max-width: 700px;
          margin-bottom: 3rem;
        }

        .sec-banner-title {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.8rem;
        }

        .sec-banner-desc {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.65;
        }

        .sec-grid-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .sec-mini-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
        }

        .sec-mini-card h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0.75rem 0 0.35rem 0;
        }

        .sec-mini-card p {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
        }

        /* FAQ ACCORDION */
        .faq-accordion-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-card-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .faq-toggle-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.35rem 1.75rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .faq-arrow {
          color: #94a3b8;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }

        .faq-arrow.open {
          transform: rotate(180deg);
          color: #2563eb;
        }

        .faq-answer-wrapper {
          overflow: hidden;
        }

        .faq-answer-text {
          padding: 0 1.75rem 1.35rem;
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* CTA BANNER (CLEAN FROSTED GLASS / LIGHT AESTHETIC) */
        .cta-banner-section {
          padding: 4.5rem 0;
        }

        .cta-box {
          background: radial-gradient(circle at 90% 10%, rgba(59, 130, 246, 0.12), transparent 45%),
                      radial-gradient(circle at 10% 90%, rgba(99, 102, 241, 0.08), transparent 45%),
                      linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #eff6ff 100%);
          border-radius: 28px;
          padding: 4.5rem 3rem;
          text-align: center;
          color: #0f172a;
          border: 1.5px solid #dbeafe;
          box-shadow: 0 25px 60px -15px rgba(37, 99, 235, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.8) inset;
          position: relative;
          overflow: hidden;
        }

        .cta-pill {
          display: inline-block;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #2563eb;
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
          color: #0f172a;
          margin-bottom: 1rem;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .cta-sub {
          font-size: 1.1rem;
          color: #475569;
          max-width: 620px;
          margin: 0 auto 2.5rem;
          line-height: 1.65;
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
          background: #2563eb;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.95rem 2.2rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.35);
        }

        .btn-white:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.45);
        }

        .btn-outline-white {
          display: inline-flex;
          align-items: center;
          background: #ffffff;
          color: #1e293b;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.95rem 2rem;
          border-radius: 12px;
          border: 1.5px solid #cbd5e1;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .btn-outline-white:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: translateY(-2px);
        }

        .cta-footnote {
          font-size: 0.78rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 600;
          margin-top: 2.2rem;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-badge, .stats-strip, .hero-cta-group {
            margin-left: auto;
            margin-right: auto;
          }

          .modules-grid-large {
            grid-template-columns: repeat(2, 1fr);
          }

          .roles-layout {
            grid-template-columns: 1fr;
          }

          .pricing-cards-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
          }

          .sec-grid-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .hero-heading {
            font-size: 2.2rem;
          }

          .modules-grid-large {
            grid-template-columns: 1fr;
          }

          .sec-grid-cards {
            grid-template-columns: 1fr;
          }

          .cta-box {
            padding: 3rem 1.5rem;
          }

          .cta-heading {
            font-size: 2rem;
          }

          .subnav-tabs {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
