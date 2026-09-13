import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are "Merlin AI", the official lead solutions architect and product consultant for MerlinFlow Technologies Pvt Ltd (merlinflow.in).
Your mission is to provide ultra-accurate, highly specific, articulate, and actionable answers to website visitors, prospective clients, and business owners.

### COMPANY PROFILE:
- Official Name: MerlinFlow Technologies Pvt Ltd
- Website: https://merlinflow.in
- Official Address: Bollepalli, Gudur, Mahabubabad, Telangana - 506134, India.
- Phone Hotline / WhatsApp: +91 83743 73753 | +91 82477 16878
- Emails: hello@merlinflow.in | info@merlinflow.in
- Core Mission: High-performance, cloud-native enterprise operating systems and vertical SaaS replacing legacy desktop software.
- Verified Client Deployments:
  1. Nest Infra Developers (crm.nestinfradevelopers.in) - Real Estate CRM
  2. Kalaakshi (www.kalaakshi.com) - Multi-channel retail & ERP
  3. OneClickBiz - Multi-GST Accounting & Enterprise Sales CRM
  4. HimasTech - Industrial inventory tracking & Biometric HRMS
- Payment Gateway Integration: Cashfree Payments (Instant dynamic UPI QR, Cards, NetBanking, Automated reconciliation).

### 6 CORE VERTICAL SAAS PRODUCTS & MODULES:

1. 🏢 **Real Estate CRM & PropTech OS** (/products/real-estate)
   - Real-Time 3D Unit Grid: Visual inventory status (Available, Blocked, Sold, Under Agreement) with sub-second concurrency locking to prevent double bookings.
   - Lead Ingestion Engine: Webhooks with 99acres, MagicBricks, Housing.com, Meta (FB/IG) Lead Ads, Google Ads with auto-assignment.
   - Site Visit & Logistics: Automated cab booking dispatch, digital gate pass, and visitor OTP verification.
   - RERA Milestone Billing: Automated demand notes tied to civil engineer slab completion proofs, automated interest calculations.
   - Channel Partner (CP) Mobile Portal: Commission ledger, payout tracker, referral link generator.
   - Pricing: Boutique Broker (₹2,499/mo), Developer Pro (₹6,999/mo), Enterprise Conglomerate (₹14,999/mo).

2. 💼 **Enterprise ERP & CRM Suite** (/products/enterprise)
   - Omnichannel Sales CRM: Visual Deals Kanban, automated lead scoring, email/WhatsApp sequences.
   - Multi-Entity & Multi-GST Accounting: Automated E-Invoicing (IRN generation) & E-Way bills directly connected to the GST portal.
   - Supply Chain & Procurement: RFQ broadcast, vendor comparison matrix, automated 3-way PO matching.
   - HRMS & Biometric Payroll: Real-time biometric sync, PF/ESI/TDS calculations, 1-click salary slip generation.
   - Low-Code Automation: Custom trigger-action workflows, role-based granular access control (RBAC).
   - Pricing: Growth ERP (₹4,999/mo), Enterprise Multi-Branch (₹11,999/mo), Global Conglomerate (Custom).

3. 🎓 **School IMS (Integrated Management System)** (/products/edu)
   - Fee Management: Multi-installment billing, automated WhatsApp payment links via Cashfree, instant digital receipts.
   - Biometric & RFID Attendance: Student/teacher punch sync with instant SMS/push notifications to parents upon arrival/departure.
   - Exam & Report Card Engine: CBSE, ICSE, and State Board CCE compliant grading with automated rank and GPA computation.
   - Automated Timetable Scheduler: Conflict-free teacher and subject allocation.
   - GPS Bus Fleet Tracking: Real-time bus location map with geofencing and speed alerts for parents.
   - Pricing: Starter (₹4,999/mo), Professional (₹8,999/mo), Enterprise (Custom).

4. 💊 **Medical ERP & Pharmacy OS** (/products/health)
   - Sub-Second Barcode POS: Dispense medicines in under 0.8 seconds per prescription.
   - Expiry Watchdog & FEFO: First-Expired-First-Out batch sorting prevents up to 3.5% dead stock inventory losses.
   - Schedule H/H1 Audit Vault: Encrypted prescription storage and 1-click drug controller audit reports.
   - 100% GST & HSN Invoicing: Automated tax slab determination (0%, 5%, 12%, 18%).
   - Smart Salt Substitution: Recommends equivalent generic medicine brands when requested items are out of stock.
   - Pricing: Basic (₹1,999/mo), Growth (₹3,999/mo), Enterprise (Custom).

5. 🍽️ **Restaurant ERP & Dining POS** (/products/stay)
   - Interactive Floor Plan: Color-coded live tables (T1–T12: Green=Vacant, Blue=Occupied, Amber=Billed, Purple=Reserved).
   - Sub-Second Kitchen Display System (KDS): Routes items to Kitchen, Bar, or Dessert counters with live prep timers.
   - Captain / Waiter Tablet POS: Instant order taking at the table, split billing, and table transfers.
   - Ingredient & Recipe Costing: Depletes exact grams of raw inventory (e.g., cheese, dough, coffee beans) per order.
   - Delivery Aggregators: Centralized sync with Swiggy and Zomato.
   - Pricing: Cafe & Quick Serve (₹2,499/mo), Full-Service Fine Dining (₹4,999/mo), Multi-Outlet Enterprise (Custom).

6. 🛒 **E-Commerce Suite & Omnichannel Retail** (/products/ecommerce)
   - Multi-Channel Inventory Sync: Real-time 2-way sync across website, Amazon, Flipkart, and offline retail POS.
   - High-Speed Headless Checkout: 1-click Cashfree checkout with address auto-completion.
   - Automated Courier Dispatch: Auto-assigns fastest & cheapest courier (Shiprocket, Delhivery, Bluedart) with AWB tracking.
   - Abandoned Cart WhatsApp Recovery: Automated targeted discounts that recover 20%+ lost carts.
   - Pricing: Launch (₹3,499/mo), Scale (₹7,499/mo), Enterprise (Custom).

### CRITICAL INSTRUCTIONS:
1. GREETINGS & BASIC WEBSITE QUESTIONS: If the user says "hey", "hi", "hello", "what is this website about", "who are you", "what do you do", or asks general questions about MerlinFlow, provide a warm, informative response explaining our company and the 6 vertical SaaS solutions we provide.
2. STRICT UNRELATED TOPIC REJECTION: If the user query is completely unrelated to MerlinFlow, our website, SaaS products, features, pricing, architecture, company location/contact, or booking a demo (e.g., cooking recipes, weather, movies, politics, personal questions, code debugging unrelated to our tools, or gibberish), DO NOT answer the off-topic question. Politely respond:
"Please enter your query related to the website and MerlinFlow SaaS products (Real Estate CRM, Enterprise ERP, Medical ERP, School IMS, Restaurant POS, E-Commerce), features, pricing, or scheduling a live demo."
3. CONTINUOUS CONTEXTUAL SUGGESTIONS: At the very end of EVERY response, on a single JSON line, output exactly 3 clickable follow-up suggestion questions formatted as:
SUGGESTIONS: ["Question 1", "Question 2", "Question 3"]
4. ACCURACY: Always use the exact company address: "Bollepalli, Gudur, Mahabubabad, Telangana, 506134, India." and phone numbers +91 83743 73753 / +91 82477 16878.`;

// Intelligent Knowledge Fallback Engine
function generateAccurateFallbackResponse(userPrompt) {
  const query = (userPrompt || '').trim().toLowerCase();

  // 1. Common Greetings & Basic Website Questions
  const isGreeting = /^(hi|hey|hello|good\s*(morning|afternoon|evening)|namaste|hola|yo|sup)(\s+.*)?$/.test(query) || query === 'hi' || query === 'hey' || query === 'hello';
  const isAboutWebsite = query.includes('what is this website') || 
    query.includes('what is merlinflow') || 
    query.includes('about this website') || 
    query.includes('what do you do') || 
    query.includes('who are you') || 
    query.includes('tell me about') || 
    query.includes('what is this company') ||
    query.includes('how does this work') ||
    query.includes('overview');

  if (isGreeting || isAboutWebsite) {
    return {
      content: `### 👋 Welcome to MerlinFlow Technologies!

**MerlinFlow** is a modern, cloud-native Enterprise & Vertical SaaS operating system designed to replace outdated legacy desktop software.

We provide **6 Specialized Industry Platforms**:
- 🏢 **Real Estate CRM & PropTech OS**: 3D unit inventory grid, RERA milestone billing, and Channel Partner portal.
- 💼 **Enterprise ERP & Multi-GST CRM**: Automated E-Invoicing, E-Way bills, Procurement 3-way matching, and Biometric HRMS.
- 🎓 **School IMS**: Automated fee receipts with UPI QR, RFID attendance, and CCE report card builder.
- 💊 **Medical ERP & Pharmacy OS**: Sub-second barcode POS dispensing, FEFO expiry watchdog, and Schedule H1 vault.
- 🍽️ **Restaurant POS & Dining ERP**: Color-coded live table floor map, sub-second Kitchen Display System (KDS), and recipe costing.
- 🛒 **E-Commerce Suite**: Omnichannel stock sync, 1-click Cashfree checkout, and automated courier dispatch.

How can I help you take your business to the next level today?`,
      suggestions: [
        "🏢 How does Real Estate 3D inventory & RERA billing work?",
        "💼 What are Enterprise ERP & Multi-GST capabilities?",
        "💰 What are your pricing plans for all products?"
      ]
    };
  }

  // 2. Address & Location & Contact
  if (query.includes('address') || query.includes('location') || query.includes('where') || query.includes('office') || query.includes('city') || query.includes('contact') || query.includes('phone') || query.includes('email') || query.includes('call') || query.includes('telangana')) {
    return {
      content: `### 📍 MerlinFlow Technologies Pvt Ltd - Contact & Location

We are headquartered in Telangana, India:

- **🏢 Official Address**: Bollepalli, Gudur, Mahabubabad, Telangana - 506134, India.
- **📞 Phone / WhatsApp**: [+91 83743 73753](tel:+918374373753) & [+91 82477 16878](tel:+918247716878)
- **✉️ Official Emails**: [hello@merlinflow.in](mailto:hello@merlinflow.in) | [info@merlinflow.in](mailto:info@merlinflow.in)
- **🌐 Website**: [merlinflow.in](https://merlinflow.in)

Would you like to schedule a 1-on-1 personalized live screen demo?`,
      suggestions: [
        "📅 How can I book a live 1-on-1 demo?",
        "🏢 Show Real Estate CRM capabilities",
        "💰 What are your pricing plans?"
      ]
    };
  }

  // 3. Real Estate CRM
  if (query.includes('real estate') || query.includes('proptech') || query.includes('builder') || query.includes('rera') || query.includes('3d inventory') || query.includes('channel partner') || query.includes('nest infra') || query.includes('property') || query.includes('site visit')) {
    return {
      content: `### 🏢 MerlinFlow Real Estate CRM & PropTech OS

Our **Real Estate CRM** is engineered specifically for builders, developers, and brokerages:

- **⚡ Real-Time 3D Unit Inventory Grid**: Interactive visual grid with sub-second concurrency locks to eliminate double bookings.
- **📥 Omnichannel Lead Ingestion**: Auto-captures and scores leads from **99acres, MagicBricks, Meta (FB/IG) Ads, and Google Ads**.
- **🚗 Site Visit & Logistics**: Automated cab booking dispatch, digital gate passes, and customer OTP check-in.
- **📜 RERA Milestone Demand Notes**: Automated construction slab billing linked to civil engineer progress proofs.
- **🤝 Channel Partner (CP) Mobile Portal**: Transparent commission ledger, referral links, and payout statements.
- **📱 Live Client Implementation**: [Nest Infra Developers](https://crm.nestinfradevelopers.in).

**💰 Pricing:**
- **Boutique Broker**: ₹2,499 / mo
- **Developer Pro**: ₹6,999 / mo
- **Enterprise Conglomerate**: ₹14,999 / mo`,
      suggestions: [
        "📜 How does RERA milestone billing work?",
        "🚗 Explain site visit dispatch & gate pass",
        "💰 What are Developer Pro plan details?"
      ]
    };
  }

  // 4. Enterprise ERP & CRM
  if (query.includes('enterprise') || query.includes('gst') || query.includes('e-invoice') || query.includes('hrms') || query.includes('procurement') || query.includes('accounting') || query.includes('oneclickbiz') || query.includes('himastech') || query.includes('payroll') || query.includes('rfq')) {
    return {
      content: `### 💼 MerlinFlow Enterprise ERP & Unified CRM

A cloud-native operating system for manufacturers, distributors, and multi-branch enterprises:

- **📊 Omnichannel Sales CRM**: Deals Kanban pipelines, automated email/WhatsApp sequences, and rep quota tracking.
- **📑 Multi-Entity & Multi-GST Accounting**: Automated E-Invoicing (IRN generation) and E-Way Bills linked directly with the GST portal.
- **📦 Procurement & 3-Way PO Matching**: RFQ vendor comparison matrices and automated inventory reconciliation.
- **👥 Biometric HRMS & Payroll**: Biometric fingerprint/facial sync, automated PF/ESI/TDS tax deductions, and 1-click pay slips.
- **⚙️ Visual Workflow Builder**: Low-code automation triggers for custom approvals.
- **🌟 Live Clients**: OneClickBiz, HimasTech, and [Kalaakshi](https://www.kalaakshi.com).

**💰 Pricing:**
- **Growth ERP**: ₹4,999 / mo
- **Enterprise Multi-Branch**: ₹11,999 / mo
- **Global Conglomerate**: Custom tailored deployment`,
      suggestions: [
        "📑 How does automated E-Invoicing & GST work?",
        "👥 Explain Biometric HRMS & payroll sync",
        "💰 Can I get a quote for Multi-Branch ERP?"
      ]
    };
  }

  // 5. School IMS
  if (query.includes('school') || query.includes('college') || query.includes('education') || query.includes('attendance') || query.includes('student') || query.includes('timetable') || query.includes('report card') || query.includes('fee') || query.includes('rfid') || query.includes('bus')) {
    return {
      content: `### 🎓 MerlinFlow School IMS (Integrated Management System)

Complete campus operating system for modern educational institutions:

- **💳 Multi-Tier Fee Collection**: UPI QR codes, Cashfree payment gateway links, automatic receipt generation, and SMS fee reminders.
- **⏱️ Biometric & RFID Attendance**: Instant arrival/departure notifications sent to parents on WhatsApp/SMS.
- **📋 Exam & Digital Report Cards**: CCE, CBSE, and ICSE compliant grading system with automated ranking and GPA cards.
- **🗓️ Smart Timetable Scheduler**: Conflict-free teacher and classroom schedule generator.
- **🚌 Live GPS Fleet Tracking**: Real-time school bus tracking with parent notifications and speed alerts.

**💰 Pricing:**
- **Starter (Up to 500 Students)**: ₹4,999 / mo
- **Professional (Up to 2,000 Students)**: ₹8,999 / mo
- **Enterprise Campus**: Custom quote with mobile apps`,
      suggestions: [
        "💳 How does fee collection with UPI work?",
        "🚌 How does GPS bus tracking notify parents?",
        "💰 What is the cost for a 1,000 student school?"
      ]
    };
  }

  // 6. Medical ERP
  if (query.includes('medical') || query.includes('pharmacy') || query.includes('medicine') || query.includes('fefo') || query.includes('expiry') || query.includes('schedule h') || query.includes('drug') || query.includes('prescription')) {
    return {
      content: `### 💊 MerlinFlow Medical ERP (Pharmacy & Dispensary OS)

High-speed billing and regulatory compliance software for retail pharmacies and hospital dispensaries:

- **⚡ Sub-Second Barcode POS**: Complete billing in under 0.8 seconds per customer.
- **🛡️ Expiry Watchdog & FEFO**: First-Expired-First-Out batch sorting prevents up to 3.5% dead stock inventory losses.
- **📋 Schedule H / H1 Regulatory Vault**: Digital prescription archiving and 1-click audit reports for drug inspectors.
- **🧾 Automated GST & HSN Lookup**: Pre-configured HSN codes with automatic 0%, 5%, 12%, and 18% tax calculation.
- **🔄 Smart Generic Salt Substitution**: Recommends equivalent generic alternatives when a specific brand is out of stock.

**💰 Pricing:**
- **Basic (Single Counter)**: ₹1,999 / mo
- **Growth (Multi-Counter / Chain)**: ₹3,999 / mo
- **Enterprise Hospital OS**: Custom deployment`,
      suggestions: [
        "🛡️ How does FEFO expiry watchdog prevent losses?",
        "📋 How does Schedule H1 prescription audit work?",
        "💰 What is the pricing for a 3-counter pharmacy?"
      ]
    };
  }

  // 7. Restaurant ERP
  if (query.includes('restaurant') || query.includes('dining') || query.includes('cafe') || query.includes('food') || query.includes('kds') || query.includes('table') || query.includes('waiter') || query.includes('swiggy') || query.includes('zomato') || query.includes('kitchen') || query.includes('recipe')) {
    return {
      content: `### 🍽️ MerlinFlow Restaurant ERP & POS Suite

Complete dining and cloud kitchen management system:

- **🗺️ Interactive Live Table Grid**: Color-coded floor plan (T1–T12: Green=Available, Blue=Dining, Amber=Billed, Purple=Reserved).
- **📟 Sub-Second Kitchen Display System (KDS)**: Instant paperless order routing to Kitchen, Bar, and Bakery stations.
- **📱 Captain / Waiter Tablet Ordering**: Waiters punch orders at the table with split bills and table transfers.
- **🥩 Deep Recipe & Inventory Depletion**: Automatically tracks exact grams of ingredients (cheese, dough, coffee beans) used per dish.
- **🛵 Swiggy & Zomato Aggregator Sync**: Manage online deliveries and dine-in orders on a single dashboard.
- **💳 Integrated Cashfree Payments**: Quick dynamic UPI QR scan-to-pay at tables.

**💰 Pricing:**
- **Cafe & Quick Serve**: ₹2,499 / mo
- **Full-Service Fine Dining**: ₹4,999 / mo
- **Multi-Outlet Enterprise**: Custom pricing`,
      suggestions: [
        "📟 How does Kitchen Display System (KDS) work?",
        "🛵 How does Swiggy/Zomato menu sync operate?",
        "💰 What plan fits a 20-table fine dining restaurant?"
      ]
    };
  }

  // 8. E-Commerce Suite
  if (query.includes('ecommerce') || query.includes('e-commerce') || query.includes('store') || query.includes('shop') || query.includes('cart') || query.includes('shipping') || query.includes('delhivery') || query.includes('shiprocket') || query.includes('kalaakshi') || query.includes('retail')) {
    return {
      content: `### 🛒 MerlinFlow E-Commerce Suite & Omnichannel Retail

Engineered for D2C brands, online stores, and omnichannel retailers:

- **🔄 Multi-Channel Inventory Sync**: Centralized real-time stock sync across Shopify, Amazon, Flipkart, and retail POS.
- **⚡ High-Speed Checkout**: 1-click Cashfree checkout with instant UPI and card support.
- **🚚 Automated Courier Dispatch**: Auto-allocates fastest/cheapest logistics partners (Shiprocket, Delhivery, Bluedart).
- **💬 Abandoned Cart WhatsApp Recovery**: Automated personalized recovery messages recovering up to 20%+ abandoned checkouts.
- **📈 Profit & Margin Analytics**: Live cost-per-acquisition and SKU margin breakdown.
- **🌟 Featured Store**: [Kalaakshi](https://www.kalaakshi.com).

**💰 Pricing:**
- **Launch**: ₹3,499 / mo
- **Scale**: ₹7,499 / mo
- **Enterprise**: Custom volume pricing`,
      suggestions: [
        "🔄 How does multi-channel stock sync work?",
        "💬 How does WhatsApp abandoned cart recovery work?",
        "🚚 Which courier partners are pre-integrated?"
      ]
    };
  }

  // 9. Pricing overall
  if (query.includes('price') || query.includes('pricing') || query.includes('cost') || query.includes('plan') || query.includes('subscription') || query.includes('discount')) {
    return {
      content: `### 💰 MerlinFlow Transparent Pricing Overview

Here are our monthly subscription plans across all core platforms:

1. **🏢 Real Estate CRM**: Starts at **₹2,499/mo** (Developer Pro at ₹6,999/mo)
2. **💼 Enterprise ERP & CRM**: Starts at **₹4,999/mo** (Multi-Branch at ₹11,999/mo)
3. **🎓 School IMS**: Starts at **₹4,999/mo** (Professional at ₹8,999/mo)
4. **💊 Medical ERP**: Starts at **₹1,999/mo** (Growth at ₹3,999/mo)
5. **🍽️ Restaurant ERP**: Starts at **₹2,499/mo** (Fine Dining at ₹4,999/mo)
6. **🛒 E-Commerce Suite**: Starts at **₹3,499/mo** (Scale at ₹7,499/mo)

✨ **All plans include**: 99.9% uptime SLA, automated cloud backups, multi-user role access, and dedicated WhatsApp onboarding support.`,
      suggestions: [
        "🏢 Give me a breakdown of Real Estate CRM pricing",
        "💼 What is included in the Enterprise ERP plan?",
        "📞 Can I speak to sales for custom enterprise quotes?"
      ]
    };
  }

  // 10. Clients / Testimonials
  if (query.includes('client') || query.includes('customer') || query.includes('review') || query.includes('portfolio') || query.includes('case study')) {
    return {
      content: `### 🌟 Our Proven Enterprise Deployments

MerlinFlow powers mission-critical operations for industry leaders:

1. **🏢 Nest Infra Developers**: Enterprise PropTech CRM managing 3D inventory, RERA billing & 500+ unit allocations ([crm.nestinfradevelopers.in](https://crm.nestinfradevelopers.in)).
2. **🎨 Kalaakshi**: Unified cloud retail & multi-channel commerce ([www.kalaakshi.com](https://www.kalaakshi.com)).
3. **💼 OneClickBiz**: Enterprise multi-GST accounting & deals pipeline.
4. **⚙️ HimasTech**: Industrial inventory tracking & biometric HRMS.`,
      suggestions: [
        "🏢 Tell me more about Nest Infra Developers CRM",
        "🎨 How does Kalaakshi use MerlinFlow?",
        "📅 Can I book a live demo for my company?"
      ]
    };
  }

  // 11. Check general relevant keywords
  const relevantKeywords = [
    'merlin', 'flow', 'software', 'saas', 'app', 'product', 'products', 'system', 'cloud', 'feature', 'features',
    'demo', 'book', 'support', 'help', 'login', 'signup', 'integration', 'cashfree', 'payment', 'api', 'gst', 'rera'
  ];
  const isBroadlyRelevant = relevantKeywords.some(kw => query.includes(kw));

  if (isBroadlyRelevant) {
    return {
      content: `### 🚀 MerlinFlow Technologies SaaS Solutions

MerlinFlow provides high-performance cloud operating systems built to scale:

- 🏢 **Real Estate CRM** (/products/real-estate)
- 💼 **Enterprise ERP & CRM** (/products/enterprise)
- 🎓 **School IMS** (/products/edu)
- 💊 **Medical ERP** (/products/health)
- 🍽️ **Restaurant POS** (/products/stay)
- 🛒 **E-Commerce Suite** (/products/ecommerce)

Which industry or feature would you like to explore?`,
      suggestions: [
        "🏢 Real Estate CRM features",
        "💼 Enterprise ERP multi-GST",
        "💰 Transparent pricing plans"
      ]
    };
  }

  // 12. Off-Topic / Unrelated Query Rejection
  return {
    content: `Please enter your query related to the website and MerlinFlow SaaS products (**Real Estate CRM**, **Enterprise ERP**, **Medical ERP**, **School IMS**, **Restaurant POS**, **E-Commerce Suite**), features, pricing, or scheduling a live demo.\n\nHere are some popular topics to explore:`,
    suggestions: [
      "🏢 How does Real Estate 3D inventory & RERA billing work?",
      "💼 What are Enterprise ERP & Multi-GST capabilities?",
      "💰 What are your pricing plans for all products?"
    ]
  };
}

// Helper to extract suggestions from AI reply
function extractSuggestions(rawContent, userPrompt) {
  let cleanedContent = rawContent;
  let suggestions = [];

  const suggestionMatch = rawContent.match(/SUGGESTIONS:\s*(\[.*?\])/s);
  if (suggestionMatch) {
    try {
      suggestions = JSON.parse(suggestionMatch[1]);
      cleanedContent = rawContent.replace(/SUGGESTIONS:\s*\[.*?\]/s, '').trim();
    } catch (e) {
      cleanedContent = rawContent.replace(/SUGGESTIONS:.*$/s, '').trim();
    }
  }

  // If no suggestions found or empty, generate default contextual suggestions
  if (!suggestions || suggestions.length === 0) {
    const fallback = generateAccurateFallbackResponse(userPrompt);
    suggestions = fallback.suggestions;
  }

  return { cleanedContent, suggestions: suggestions.slice(0, 3) };
}

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = Array.isArray(messages) && messages.length > 0 
      ? messages[messages.length - 1]?.content || '' 
      : '';

    const apiKey = process.env.GROQ_API_KEY;

    if (apiKey) {
      const candidateModels = [
        'openai/gpt-oss-120b',
        'openai/gpt-oss-20b',
        'groq/compound',
        'groq/compound-mini'
      ];

      const conversation = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...(Array.isArray(messages) ? messages.slice(-8) : [])
      ];

      for (const model of candidateModels) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 6000);

          const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
              model: model,
              messages: conversation,
              temperature: 0.35,
              max_tokens: 750
            }),
            signal: controller.signal
          });

          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            const rawReply = data.choices?.[0]?.message?.content;
            if (rawReply && rawReply.trim().length > 0) {
              const { cleanedContent, suggestions } = extractSuggestions(rawReply, lastUserMessage);
              return NextResponse.json({
                role: 'assistant',
                content: cleanedContent,
                suggestions: suggestions
              });
            }
          }
        } catch (modelErr) {
          console.warn(`Groq model ${model} attempt error:`, modelErr.message);
        }
      }
    }

    // High-quality intelligent domain knowledge fallback
    const fallbackResult = generateAccurateFallbackResponse(lastUserMessage);
    return NextResponse.json({
      role: 'assistant',
      content: fallbackResult.content,
      suggestions: fallbackResult.suggestions
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    const emergencyResult = generateAccurateFallbackResponse('');
    return NextResponse.json({
      role: 'assistant',
      content: emergencyResult.content,
      suggestions: emergencyResult.suggestions
    });
  }
}
