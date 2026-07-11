"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, ChevronDown, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [interest, setInterest] = useState("General Inquiry");
  const [budget, setBudget] = useState("Not decided");
  const [openFaq, setOpenFaq] = useState(-1);

  const faqs = [
    { q: "How quickly will I get a response?", a: "Our team typically responds within 2 hours during business hours." },
    { q: "Can I get a demo before signing up?", a: "Absolutely. We offer personalized demos tailored to your specific industry." },
    { q: "Do you offer onboarding support?", a: "Yes, all plans include guided onboarding. Enterprise plans include dedicated training sessions with your team." },
    { q: "Do you work with businesses outside Telangana?", a: "Yes, we serve clients across India and globally." }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="contact-new-section">
      <div className="container contact-container">
        
        {/* Left Column */}
        <div className="contact-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title">Reach us directly</h2>
            
            <div className="contact-pills">
              <div className="contact-pill">
                <div className="pill-icon"><Phone size={16} color="#4f46e5" /></div>
                <div className="pill-content">
                  <span className="pill-label">CALL OR WHATSAPP</span>
                  <a href="tel:+918374373753" className="pill-value">+91 83743 73753</a>
                </div>
              </div>
              
              <div className="contact-pill">
                <div className="pill-icon"><Mail size={16} color="#4f46e5" /></div>
                <div className="pill-content">
                  <span className="pill-label">EMAIL US</span>
                  <a href="mailto:merlinflowtechnologies@gmail.com" className="pill-value">merlinflowtechnologies@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-pill">
                <div className="pill-icon"><MapPin size={16} color="#4f46e5" /></div>
                <div className="pill-content">
                  <span className="pill-label">OUR LOCATION</span>
                  <span className="pill-value">Warangal, Telangana</span>
                </div>
              </div>
            </div>
            
            <div className="faq-divider">
              <span>FAQ</span>
            </div>
            
            <h3 className="section-title">Common questions</h3>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {faq.q}
                    <ChevronDown size={16} className={`faq-icon ${openFaq === i ? 'open' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="faq-a-wrapper">
                        <div className="faq-a">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="form-card">
            
            {isSubmitted ? (
               <div className="success-state">
                 <CheckCircle size={64} color="#4f46e5" />
                 <h3>Message Sent!</h3>
                 <p>We'll get back to you within 2 hours.</p>
               </div>
            ) : (
              <>
                <div className="form-header">
                  <div>
                    <h3 className="form-title">Send us a message</h3>
                    <p className="form-subtitle">We'll get back to you within 2 hours.</p>
                  </div>
                  <div className="mail-icon-bg">
                    <Mail size={16} color="#4f46e5" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="new-contact-form">
                  <div className="input-row">
                    <div className="input-field">
                      <input type="text" name="firstName" required placeholder=" " />
                      <label>First name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" name="lastName" required placeholder=" " />
                      <label>Last name</label>
                    </div>
                  </div>

                  <div className="input-row">
                    <div className="input-field">
                      <input type="email" name="email" required placeholder=" " />
                      <label>Email address</label>
                    </div>
                    <div className="input-field">
                      <input type="tel" name="phone" required placeholder=" " />
                      <label>Phone number</label>
                    </div>
                  </div>

                  <div className="input-field full-width">
                    <input type="text" name="company" required placeholder=" " />
                    <label>Company / Organization</label>
                  </div>

                  <div className="selection-group">
                    <label className="group-label">I'M INTERESTED IN</label>
                    <div className="pills-wrapper">
                      {['School ERP', 'Hospital ERP', 'Restaurant', 'E-Commerce', 'General Inquiry'].map(opt => (
                        <button type="button" key={opt} className={`selection-pill ${interest === opt ? 'active' : ''}`} onClick={() => setInterest(opt)}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="selection-group">
                    <label className="group-label">BUDGET RANGE</label>
                    <div className="pills-wrapper">
                      {['Under ₹1L', '₹1L - ₹5L', '₹5L - ₹10L', 'Above ₹10L', 'Not decided'].map(opt => (
                        <button type="button" key={opt} className={`selection-pill ${budget === opt ? 'active' : ''}`} onClick={() => setBudget(opt)}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="input-field full-width textarea-field">
                    <textarea name="message" rows="1" required placeholder=" "></textarea>
                    <label>Your message</label>
                  </div>

                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <>Send Message <ArrowRight size={16} /></>}
                  </button>
                  <p className="privacy-text">By submitting, you agree to our Privacy Policy. Your data is never sold or shared.</p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .contact-new-section {
          padding: 6rem 0;
          background: #fafafa;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* LEFT COLUMN */
        .section-title {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 2rem;
        }

        .contact-pills {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .contact-pill {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #ffffff;
          border: 1px solid #eaeaea;
          border-radius: 12px;
          padding: 1rem 1.25rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .pill-icon {
          width: 36px;
          height: 36px;
          background: var(--bg-alpha-light);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pill-content {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .pill-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: #888;
          letter-spacing: 0.05em;
        }

        .pill-value {
          font-size: 0.95rem;
          color: #1a1a1a;
          font-weight: 500;
          text-decoration: none;
          word-break: break-all;
        }

        .faq-divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 3rem 0;
        }

        .faq-divider::before, .faq-divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px dashed #ccc;
        }

        .faq-divider span {
          padding: 0 1rem;
          color: #999;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-bottom: 1px solid #eaeaea;
        }

        .faq-q {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 0;
          background: none;
          border: none;
          font-size: 0.95rem;
          font-weight: 600;
          color: #1a1a1a;
          text-align: left;
          cursor: pointer;
        }

        .faq-icon {
          color: #ccc;
          transition: transform 0.3s ease;
        }

        .faq-icon.open {
          transform: rotate(180deg);
          color: var(--primary);
        }

        .faq-a-wrapper {
          overflow: hidden;
        }

        .faq-a {
          padding-bottom: 1.25rem;
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
        }

        /* RIGHT COLUMN (CARD) */
        .form-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 3.5rem 3rem;
          border: 1px solid #cbd5e1;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2.5rem;
        }

        .form-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 0.3rem;
        }

        .form-subtitle {
          font-size: 0.85rem;
          color: #777;
        }

        .mail-icon-bg {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-alpha-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .new-contact-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .input-field {
          position: relative;
        }

        .input-field input, .input-field textarea {
          width: 100%;
          padding: 0.5rem 0;
          border: none;
          border-bottom: 1px solid #e0e0e0;
          background: transparent;
          font-size: 0.95rem;
          color: #1a1a1a;
          outline: none;
          transition: border-color 0.3s;
          resize: none;
        }

        .input-field input:focus, .input-field textarea:focus {
          border-bottom-color: var(--primary);
        }

        .input-field label {
          position: absolute;
          top: 0.5rem;
          left: 0;
          font-size: 0.85rem;
          color: #999;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .input-field input:focus ~ label,
        .input-field input:not(:placeholder-shown) ~ label,
        .input-field textarea:focus ~ label,
        .input-field textarea:not(:placeholder-shown) ~ label {
          top: -12px;
          font-size: 0.7rem;
          color: var(--primary);
          font-weight: 600;
        }

        .selection-group {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .group-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: #999;
          letter-spacing: 0.05em;
        }

        .pills-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .selection-pill {
          padding: 0.5rem 1rem;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .selection-pill:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        
        .selection-pill.active {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }

        .submit-btn {
          margin-top: 1rem;
          width: 100%;
          padding: 1.1rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
        }
        
        .submit-btn:hover:not(:disabled) {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: var(--neon-glow);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .privacy-text {
          font-size: 0.7rem;
          color: #999;
          text-align: center;
          margin-top: -0.5rem;
        }

        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 400px;
          text-align: center;
        }

        .success-state h3 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: #1a1a1a;
          margin: 1rem 0 0.5rem 0;
        }

        .success-state p {
          color: #666;
          font-size: 0.95rem;
        }

        @media (max-width: 968px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .contact-left {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .contact-pills {
            align-items: center;
            width: 100%;
            max-width: 450px;
          }
          
          .contact-pill {
            width: 100%;
            justify-content: center;
          }
          
          .faq-list {
            width: 100%;
            max-width: 500px;
          }
          
          .faq-q {
            text-align: left;
          }
          
          .form-card {
            padding: 2rem;
          }
        }
        
        @media (max-width: 600px) {
          .contact-new-section {
            padding: 4rem 0;
          }
          .form-card {
            padding: 1.5rem;
          }
          .input-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
