import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are "Merlin AI", the official lead solutions architect and intelligent product consultant for MerlinFlow Technologies (merlinflow.in).
Your mission is to provide ultra-accurate, highly specific, articulate, and actionable answers to prospective clients, business owners, developers, and administrators.

### COMPANY PROFILE:
- Name: MerlinFlow Technologies
- Website: https://merlinflow.in
- Headquarters: Vijayawada, Andhra Pradesh, India
- Phone Hotline / WhatsApp: +91 83743 73753
- Email: info@merlinflow.in
- Core Proposition: Next-generation, high-performance, cloud-native enterprise operating systems and vertical SaaS replacing legacy desktop software.
- Trusted Clients: Nest Infra Developers (crm.nestinfradevelopers.in), Kalaakshi (www.kalaakshi.com), OneClickBiz, HimasTech.
- Payment Gateway Partner: Cashfree Payments (Instant UPI, Cards, NetBanking, Automated reconciliation).

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

### FORMATTING & TONE INSTRUCTIONS:
- Directly answer the specific prompt with deep, structured facts.
- Use clean Markdown formatting: bold titles (**Title**), clear bullet points (- item), and emojis for readability.
- When pricing or demos are asked, provide concrete numbers and clear links.
- Always offer to connect for a personalized 1-on-1 walkthrough via +91 83743 73753 or info@merlinflow.in.`;

// Intelligent Knowledge Engine for instant fallback when external AI is rate-limited or offline
function generateAccurateFallbackResponse(userPrompt, conversationHistory = []) {
  const query = (userPrompt || '').toLowerCase();

  // 1. Real Estate CRM
  if (query.includes('real estate') || query.includes('proptech') || query.includes('builder') || query.includes('rera') || query.includes('3d inventory') || query.includes('channel partner')) {
    return `### 🏢 MerlinFlow Real Estate CRM & PropTech OS

Our **Real Estate CRM** is purpose-built for property developers, builders, and real estate brokerages:

- **⚡ Real-Time 3D Unit Inventory Grid**: Visual floor & unit availability with sub-second concurrency locking to eliminate double bookings.
- **📥 Omnichannel Lead Ingestion**: Automatic capture & assignment from **99acres, MagicBricks, Meta Ads (FB/IG)**, and Google Ads.
- **🚗 Site Visit & Logistics**: Automatic cab booking dispatch, customer digital gate pass, and OTP check-in.
- **📜 RERA Milestone Demand Notes**: Automated construction slab billing linked to engineer progress reports.
- **🤝 Channel Partner (CP) Portal**: Commission tracking, lead registration, and payout statements.
- **📱 Live Client Implementation**: [Nest Infra Developers](https://crm.nestinfradevelopers.in).

**💰 Pricing:**
- **Boutique Broker**: ₹2,499 / month (Up to 5 agents)
- **Developer Pro**: ₹6,999 / month (Unlimited projects & RERA billing)
- **Enterprise Conglomerate**: ₹14,999 / month (Multi-branch + CP portal)

👉 Explore in detail at **/products/real-estate** or call **+91 83743 73753** for a 1-on-1 live demo!`;
  }

  // 2. Enterprise ERP & CRM
  if (query.includes('enterprise') || query.includes('gst') || query.includes('e-invoice') || query.includes('hrms') || query.includes('procurement') || query.includes('accounting') || query.includes('crm')) {
    return `### 💼 MerlinFlow Enterprise ERP & CRM Suite

A unified cloud operating system replacing fragmented enterprise tools:

- **📊 Omnichannel Sales CRM**: Visual Kanban deal pipelines, automated lead scoring, and automated WhatsApp/email drip campaigns.
- **📑 Multi-Entity & Multi-GST Accounting**: Automated E-Invoicing (IRN generation) and E-Way Bills directly linked with the GST portal.
- **📦 Procurement & 3-Way PO Matching**: RFQ vendor comparison matrices and automated inventory reconciliation.
- **👥 Biometric HRMS & Payroll**: Fingerprint/facial recognition sync, automated PF/ESI/TDS tax deductions, and salary slips.
- **⚙️ Low-Code Automation**: Custom event triggers, conditional business logic, and audit logging.
- **🌟 Trusted By**: OneClickBiz, HimasTech, and [Kalaakshi](https://www.kalaakshi.com).

**💰 Pricing:**
- **Growth ERP**: ₹4,999 / month
- **Enterprise Multi-Branch**: ₹11,999 / month
- **Global Conglomerate**: Custom tailored deployment

👉 View full features at **/products/enterprise** or call **+91 83743 73753**!`;
  }

  // 3. School IMS
  if (query.includes('school') || query.includes('college') || query.includes('education') || query.includes('attendance') || query.includes('student') || query.includes('timetable') || query.includes('report card') || query.includes('fee')) {
    return `### 🎓 MerlinFlow School IMS (Integrated Management System)

Complete campus operating system for schools, colleges, and academies:

- **💳 Multi-Tier Fee Collection**: UPI QR codes, Cashfree payment gateway links, automatic receipt generation, and SMS fee reminders.
- **⏱️ Biometric & RFID Attendance**: Instant arrival/departure notifications sent to parents on WhatsApp/SMS.
- **📋 Exam & Digital Report Cards**: CCE, CBSE, and ICSE compliant grading system with automated ranking and GPA cards.
- **🗓️ Smart Timetable Scheduler**: Conflict-free teacher and classroom schedule generator.
- **🚌 Live GPS Fleet Tracking**: Real-time school bus tracking with parent notifications and speed alerts.

**💰 Pricing:**
- **Starter (Up to 500 Students)**: ₹4,999 / month
- **Professional (Up to 2,000 Students)**: ₹8,999 / month
- **Enterprise Campus**: Custom quote with custom domain & mobile app

👉 Check out details at **/products/edu** or book a live walkthrough!`;
  }

  // 4. Medical ERP
  if (query.includes('medical') || query.includes('pharmacy') || query.includes('medicine') || query.includes('fefo') || query.includes('expiry') || query.includes('schedule h') || query.includes('drug') || query.includes('doctor')) {
    return `### 💊 MerlinFlow Medical ERP (Pharmacy & Dispensary OS)

High-speed billing and regulatory compliance software for retail pharmacies and hospital dispensaries:

- **⚡ Sub-Second Barcode POS**: Complete billing in under 0.8 seconds per customer.
- **🛡️ Expiry Watchdog & FEFO**: First-Expired-First-Out batch sorting prevents up to 3.5% dead stock inventory losses.
- **📋 Schedule H / H1 Regulatory Vault**: Digital prescription archiving and 1-click audit reports for drug inspectors.
- **🧾 Automated GST & HSN Lookup**: Pre-configured HSN codes with automatic 0%, 5%, 12%, and 18% tax calculation.
- **🔄 Smart Generic Salt Substitution**: Recommends equivalent generic alternatives when a specific brand is out of stock.

**💰 Pricing:**
- **Basic (Single Counter)**: ₹1,999 / month
- **Growth (Multi-Counter / Chain)**: ₹3,999 / month
- **Enterprise Hospital OS**: Custom tailored solution

👉 Learn more at **/products/health** or contact us at **+91 83743 73753**!`;
  }

  // 5. Restaurant ERP
  if (query.includes('restaurant') || query.includes('dining') || query.includes('cafe') || query.includes('food') || query.includes('kds') || query.includes('table') || query.includes('waiter') || query.includes('swiggy') || query.includes('zomato')) {
    return `### 🍽️ MerlinFlow Restaurant ERP & POS Suite

Complete dining and cloud kitchen management system:

- **🗺️ Interactive Live Table Grid**: Color-coded floor plan (T1–T12: Green=Available, Blue=Dining, Amber=Billed, Purple=Reserved).
- **📟 Sub-Second Kitchen Display System (KDS)**: Instant paperless order routing to Kitchen, Bar, and Bakery stations.
- **📱 Captain / Waiter Tablet Ordering**: Waiters punch orders at the table with split bills and table transfers.
- **🥩 Deep Recipe & Inventory Depletion**: Automatically tracks exact grams of ingredients (cheese, dough, coffee beans) used per dish.
- **🛵 Swiggy & Zomato Aggregator Sync**: Manage online deliveries and dine-in orders on a single dashboard.
- **💳 Integrated Cashfree Payments**: Quick dynamic UPI QR scan-to-pay at tables.

**💰 Pricing:**
- **Cafe & Quick Serve**: ₹2,499 / month
- **Full-Service Fine Dining**: ₹4,999 / month
- **Multi-Outlet Enterprise**: Custom pricing

👉 View full capabilities at **/products/stay** or call **+91 83743 73753**!`;
  }

  // 6. E-Commerce Suite
  if (query.includes('ecommerce') || query.includes('e-commerce') || query.includes('store') || query.includes('shop') || query.includes('cart') || query.includes('shipping') || query.includes('delhivery') || query.includes('shiprocket')) {
    return `### 🛒 MerlinFlow E-Commerce Suite & Omnichannel Retail

Engineered for D2C brands, online stores, and omnichannel retailers:

- **🔄 Multi-Channel Inventory Sync**: Centralized real-time stock sync across Shopify, Amazon, Flipkart, and retail POS.
- **⚡ High-Speed Checkout**: 1-click Cashfree checkout with instant UPI and card support.
- **🚚 Automated Courier Dispatch**: Auto-allocates fastest/cheapest logistics partners (Shiprocket, Delhivery, Bluedart).
- **💬 Abandoned Cart WhatsApp Recovery**: Automated personalized recovery messages recovering up to 20%+ abandoned checkouts.
- **📈 Profit & Margin Analytics**: Live cost-per-acquisition and SKU margin breakdown.

**💰 Pricing:**
- **Launch**: ₹3,499 / month
- **Scale**: ₹7,499 / month
- **Enterprise**: Custom volume pricing

👉 Check it out at **/products/ecommerce**!`;
  }

  // 7. Pricing overall
  if (query.includes('price') || query.includes('pricing') || query.includes('cost') || query.includes('plan') || query.includes('subscription')) {
    return `### 💰 MerlinFlow Transparent Pricing Overview

Here are our starter monthly plans across our core SaaS platforms:

1. **🏢 Real Estate CRM**: Starts at **₹2,499/mo** (Developer Pro at ₹6,999/mo)
2. **💼 Enterprise ERP & CRM**: Starts at **₹4,999/mo** (Multi-Branch at ₹11,999/mo)
3. **🎓 School IMS**: Starts at **₹4,999/mo** (Professional at ₹8,999/mo)
4. **💊 Medical ERP**: Starts at **₹1,999/mo** (Growth at ₹3,999/mo)
5. **🍽️ Restaurant ERP**: Starts at **₹2,499/mo** (Fine Dining at ₹4,999/mo)
6. **🛒 E-Commerce Suite**: Starts at **₹3,499/mo** (Scale at ₹7,499/mo)

✨ **All plans include**: 99.9% uptime SLA, automated cloud backups, multi-user role access, and dedicated WhatsApp onboarding support.

👉 For custom enterprise packages or annual discounts, call our team at **+91 83743 73753** or email **info@merlinflow.in**!`;
  }

  // 8. Contact & Demo
  if (query.includes('contact') || query.includes('call') || query.includes('phone') || query.includes('email') || query.includes('demo') || query.includes('book') || query.includes('location') || query.includes('address')) {
    return `### 📞 Connect With MerlinFlow Technologies

We would love to show you a live 1-on-1 walkthrough tailored to your business:

- **📱 Phone / WhatsApp**: [+91 83743 73753](tel:+918374373753)
- **✉️ Official Email**: [info@merlinflow.in](mailto:info@merlinflow.in)
- **📍 Location**: Vijayawada, Andhra Pradesh, India
- **🌐 Website**: [merlinflow.in](https://merlinflow.in)

👉 You can also click **"Book a Free Demo"** in the top navigation or scroll to our contact section to schedule an instant screen-share demo!`;
  }

  // 9. Clients / Testimonials / Authenticity
  if (query.includes('client') || query.includes('customer') || query.includes('kalaakshi') || query.includes('nest infra') || query.includes('himastech') || query.includes('oneclickbiz') || query.includes('review') || query.includes('portfolio')) {
    return `### 🌟 Our Proven Enterprise Deployments

MerlinFlow powers mission-critical operations for industry leaders:

1. **🏢 Nest Infra Developers**: Enterprise PropTech CRM managing 3D inventory, RERA billing & 500+ unit allocations ([crm.nestinfradevelopers.in](https://crm.nestinfradevelopers.in)).
2. **🎨 Kalaakshi**: Unified cloud retail & multi-channel commerce ([www.kalaakshi.com](https://www.kalaakshi.com)).
3. **💼 OneClickBiz**: Enterprise multi-GST accounting & deals pipeline.
4. **⚙️ HimasTech**: Industrial inventory tracking & biometric HRMS.

Would you like to see a live case study or demo for your specific vertical? Let us know or call **+91 83743 73753**!`;
  }

  // 10. General / Greeting / Default
  return `### 👋 Welcome to MerlinFlow Technologies!

I'm **Merlin AI**, your 24/7 intelligent SaaS architect. How can I help power your business today?

Here is what we specialize in:
- 🏢 **Real Estate CRM & PropTech OS** (3D inventory locks, RERA billing, CP portal)
- 💼 **Enterprise ERP & Multi-GST CRM** (E-Invoicing, RFQ procurement, Biometric HRMS)
- 🎓 **School IMS** (Automated fee receipts, RFID attendance, Report card builder)
- 💊 **Medical ERP & Pharmacy OS** (Sub-second POS, Expiry watchdog, Schedule H vault)
- 🍽️ **Restaurant POS & Dining ERP** (Live table map, KDS routing, Recipe costing)
- 🛒 **E-Commerce Suite** (Multi-channel sync, Automated courier dispatch)

💬 Ask me anything about **features, pricing, integrations (Cashfree), or demo scheduling**, or reach our team at **+91 83743 73753**!`;
}

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = Array.isArray(messages) && messages.length > 0 
      ? messages[messages.length - 1]?.content || '' 
      : '';

    const apiKey = process.env.GROQ_API_KEY;

    // If Groq API key is available, attempt real AI model completion
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
              temperature: 0.4,
              max_tokens: 700
            }),
            signal: controller.signal
          });

          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            const reply = data.choices?.[0]?.message?.content;
            if (reply && reply.trim().length > 0) {
              return NextResponse.json({
                role: 'assistant',
                content: reply
              });
            }
          }
        } catch (modelErr) {
          console.warn(`Groq model ${model} attempt failed:`, modelErr.message);
          // continue to next model or fallback
        }
      }
    }

    // High quality intelligent domain knowledge fallback if AI service is offline or rate limited
    const fallbackReply = generateAccurateFallbackResponse(lastUserMessage, messages);
    return NextResponse.json({
      role: 'assistant',
      content: fallbackReply
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    const emergencyReply = generateAccurateFallbackResponse('');
    return NextResponse.json({
      role: 'assistant',
      content: emergencyReply
    });
  }
}
