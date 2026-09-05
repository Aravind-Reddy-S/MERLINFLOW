import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are "Merlin AI", the official intelligent AI consultant for MerlinFlow Technologies (merlinflow.in).
Your job is to assist website visitors, school administrators, pharmacy owners, restaurant managers, and retail founders in understanding MerlinFlow's SaaS software suite, choosing the right plan, calculating ROI, and scheduling live product walkthroughs.

### COMPANY OVERVIEW:
- Company Name: MerlinFlow Technologies
- Website: merlinflow.in
- Headquarters: Vijayawada, Andhra Pradesh, India
- Phone Hotline: +91 83743 73753
- Email: info@merlinflow.in
- Mission: Modern, high-performance, cloud-native enterprise operating systems replacing outdated legacy desktop software.

### OUR 4 CORE PRODUCTS:
1. 🎓 **School IMS (Integrated Management System)**:
   - Target: K-12 schools, private academies, CBSE/ICSE institutions, colleges.
   - Core Features: Multi-tier Fee Collection (UPI/Cash/Auto-receipts), Attendance & Biometrics/RFID, Exam & Report Card Builder, Automated Timetable Scheduler, Parent Communication App, GPS Bus Tracking, Staff Payroll & HR.
   - Pricing: Starter (₹4,999/mo), Professional (₹8,999/mo), Enterprise (Custom).

2. 💊 **Medical ERP (Pharmacy & Medical Shop OS)**:
   - Target: Retail pharmacies, medical stores, hospital dispensaries, pharmacy chains.
   - Core Features: Sub-second Barcode POS dispensing, Expiry & FEFO Watchdog (reduces expired stock wastage by up to 3.5%), Schedule H/H1 Drug Regulatory Audit readiness, 100% GST Invoicing with HSN auto-lookup, Smart Generic Salt Substitution suggestions, Distributor Return Tracker.
   - Pricing: Basic (₹1,999/mo), Growth (₹3,999/mo), Enterprise (Custom).

3. 🍽️ **Restaurant ERP (Dining, Bar & Cafe POS)**:
   - Target: Fine-dining restaurants, cafes, QSRs, bars, multi-chain cloud kitchens.
   - Core Features: Interactive Live Floor Plan & Table Status Grid (T1–T12), Sub-second Kitchen Display System (KDS) order routing, Captain Waiter tablet billing, Split Payments (UPI/Cash/Card), Recipe Costing & Stock Wastage Tracking, Third-party aggregator integration (Swiggy/Zomato).
   - Pricing: Cafe & Quick Serve (₹2,499/mo), Full-Service Fine Dining (₹4,999/mo), Multi-Outlet Enterprise (Custom).

4. 🛒 **E-Commerce Suite (Omnichannel Retail Engine)**:
   - Target: D2C brands, online retailers, hybrid wholesale-retail businesses.
   - Core Features: Centralized multi-channel inventory sync, Sub-second checkout, Automated logistics & courier dispatch (Shiprocket, Delhivery), Abandoned cart WhatsApp recovery, Real-time margin analytics.
   - Pricing: Launch (₹3,499/mo), Scale (₹7,499/mo), Enterprise (Custom).

### GUIDELINES:
- Keep answers concise, clear, and easy to read with bullet points when explaining features.
- Highlight tangible ROI (e.g. time saved per checkout, elimination of expired medicine losses, faster table turnover).
- If the visitor wants a demo, invite them to fill out the contact form or call +91 83743 73753.
- Always maintain an encouraging, knowledgeable, and professional tone.`;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          role: 'assistant',
          content: "Welcome to **MerlinFlow**! 🚀\n\nI am currently operating in preview mode because the `GROQ_API_KEY` is being configured.\n\nIn the meantime, feel free to explore our products:\n- 🎓 **School IMS** (`/products/edu`)\n- 💊 **Medical ERP** (`/products/health`)\n- 🍽️ **Restaurant ERP** (`/products/stay`)\n- 🛒 **E-Commerce Suite** (`/products/ecommerce`)\n\nOr contact our team directly at **+91 83743 73753** or **info@merlinflow.in** for a free live demo!"
        },
        { status: 200 }
      );
    }

    const conversation = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(Array.isArray(messages) ? messages.slice(-10) : [])
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-120b',
        messages: conversation,
        temperature: 0.5,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Groq API Error:', response.status, errorData);
      
      // Fallback response with helpful context
      return NextResponse.json({
        role: 'assistant',
        content: "I'm having a brief connection issue with the AI server. You can still reach our team directly at **+91 83743 73753** or **info@merlinflow.in** for immediate assistance and live demo bookings!"
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "How else can I assist you with MerlinFlow today?";

    return NextResponse.json({
      role: 'assistant',
      content: reply
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      {
        role: 'assistant',
        content: "Sorry, I ran into a technical hiccup. Please reach out to us at **+91 83743 73753** or **info@merlinflow.in** to connect with our solution specialists!"
      },
      { status: 500 }
    );
  }
}
