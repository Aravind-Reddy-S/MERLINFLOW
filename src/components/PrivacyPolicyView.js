"use client";

import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail, MapPin, Globe, Phone } from "lucide-react";

export default function PrivacyPolicyView() {
  return (
    <div className="policy-page-wrapper">
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="policy-header text-center">
          <div className="policy-badge">
            <ShieldCheck size={16} /> Legal & Compliance
          </div>
          <h1 className="policy-title">Privacy Policy</h1>
          <div className="policy-meta-dates">
            <span><strong>Effective Date:</strong> 4 September 2026</span>
            <span className="dot-sep">•</span>
            <span><strong>Last Updated:</strong> 4 September 2026</span>
          </div>
        </div>

        {/* Content Box */}
        <div className="glass-panel policy-card">
          <p className="policy-intro">
            <strong>Merlinflow Technologies Private Limited</strong> (“Company,” “we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit <a href="https://merlinflow.in" className="policy-link">merlinflow.in</a>, use our services, or interact with us.
          </p>
          <p className="policy-intro" style={{ marginTop: '0.75rem' }}>
            By accessing or using our website, you agree to the practices described in this Privacy Policy.
          </p>

          <hr className="policy-divider" />

          {/* Section 1 */}
          <section className="policy-section">
            <h2>1. About Us</h2>
            <div className="about-details-box">
              <p><strong>Company Name:</strong> Merlinflow Technologies Private Limited</p>
              <p><strong>Registered Office:</strong> Bollepelli, Gudur, Mahabubabad, Telangana, 506134, India</p>
              <p><strong>Website:</strong> <a href="https://merlinflow.in" className="policy-link">merlinflow.in</a></p>
              <p><strong>Email:</strong> <a href="mailto:hello@merlinflow.in" className="policy-link">hello@merlinflow.in</a></p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following information when you interact with our website or services:</p>
            
            <h3>Information You Provide</h3>
            <ul className="policy-list">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or organization name</li>
              <li>Information submitted through contact forms, enquiry forms, or service requests</li>
              <li>Any other information you voluntarily provide</li>
            </ul>

            <h3 style={{ marginTop: '1.5rem' }}>Information Collected Automatically</h3>
            <p>When you visit our website, we may collect certain technical information, such as:</p>
            <ul className="policy-list">
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on the website</li>
              <li>Website usage and diagnostic information</li>
            </ul>
            <p style={{ marginTop: '0.75rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              We collect this information only to the extent necessary for the purposes described in this Policy.
            </p>
          </section>

          {/* Section 3 */}
          <section className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect to:</p>
            <ul className="policy-list">
              <li>Respond to enquiries and provide customer support</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about requested services or updates</li>
              <li>Process business enquiries and service requests</li>
              <li>Improve website functionality and user experience</li>
              <li>Protect our website and services from misuse or unauthorized access</li>
              <li>Comply with applicable legal and regulatory requirements</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              We will not use your personal information for purposes unrelated to this Policy without a lawful basis or your consent where required.
            </p>
          </section>

          {/* Section 4 */}
          <section className="policy-section">
            <h2>4. Cookies and Similar Technologies</h2>
            <p>
              Our website may use cookies or similar technologies to improve functionality, understand website usage, and enhance user experience.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              You may be able to control or disable cookies through your browser settings. However, disabling certain cookies may affect the functionality of the website.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              If we use third-party analytics, advertising, or other tracking services, their use of information will be governed by their respective privacy policies.
            </p>
          </section>

          {/* Section 5 */}
          <section className="policy-section">
            <h2>5. Sharing of Information</h2>
            <p>We do not sell or rent your personal information.</p>
            <p style={{ marginTop: '0.75rem' }}>We may share information with:</p>
            <ul className="policy-list">
              <li>Service providers who help us operate our website or deliver services</li>
              <li>Professional advisers, where necessary</li>
              <li>Government authorities or law-enforcement agencies when required by applicable law</li>
              <li>Other parties where you have provided consent or where disclosure is otherwise legally permitted</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              We require service providers to handle personal information appropriately and only for authorized purposes.
            </p>
          </section>

          {/* Section 6 */}
          <section className="policy-section">
            <h2>6. Data Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or destruction.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 7 */}
          <section className="policy-section">
            <h2>7. Data Retention</h2>
            <p>
              We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, provide our services, resolve disputes, maintain business records, or comply with applicable legal obligations.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              When information is no longer required, we will take reasonable steps to delete or securely dispose of it, subject to applicable law.
            </p>
          </section>

          {/* Section 8 */}
          <section className="policy-section">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of those third parties.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              We encourage you to review their privacy policies before providing personal information.
            </p>
          </section>

          {/* Section 9 */}
          <section className="policy-section">
            <h2>9. Your Privacy Rights</h2>
            <p>Depending on applicable law, you may have rights regarding your personal information, including the right to:</p>
            <ul className="policy-list">
              <li>Request access to personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of information where legally permitted</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Raise concerns about how your information is handled</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              To exercise these rights, please contact us using the details provided below. We may need to verify your identity before processing certain requests.
            </p>
          </section>

          {/* Section 10 */}
          <section className="policy-section">
            <h2>10. Children’s Privacy</h2>
            <p>
              Our website and services are not intended for children under the age of 18 unless expressly stated otherwise.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              We do not knowingly collect personal information from children without appropriate consent where required by law. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.
            </p>
          </section>

          {/* Section 11 */}
          <section className="policy-section">
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or privacy practices.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Any updates will be posted on this page with a revised “Last Updated” date. We encourage you to review this Policy periodically.
            </p>
          </section>

          {/* Section 12 */}
          <section className="policy-section" style={{ borderBottom: 'none' }}>
            <h2>12. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle personal information, please contact us:</p>
            
            <div className="contact-card-box">
              <h3 style={{ color: 'var(--text-color)', marginBottom: '0.75rem', fontSize: '1.15rem' }}>Merlinflow Technologies Private Limited</h3>
              <div className="contact-line">
                <Mail size={18} className="contact-icon" />
                <span><strong>Email:</strong> <a href="mailto:hello@merlinflow.in" className="policy-link">hello@merlinflow.in</a></span>
              </div>
              <div className="contact-line">
                <Phone size={18} className="contact-icon" />
                <span><strong>Phone:</strong> <a href="tel:+918374373753" className="policy-link">+91 83743 73753</a> / <a href="tel:+918247716878" className="policy-link">+91 82477 16878</a></span>
              </div>
              <div className="contact-line">
                <MapPin size={18} className="contact-icon" />
                <span><strong>Registered Office:</strong> Bollepelli, Gudur, Mahabubabad, Telangana, 506134, India</span>
              </div>
              <div className="contact-line">
                <Globe size={18} className="contact-icon" />
                <span><strong>Website:</strong> <a href="https://merlinflow.in" className="policy-link">https://merlinflow.in</a></span>
              </div>
            </div>
          </section>

        </div>
      </div>

      <style jsx>{`
        .policy-page-wrapper {
          min-height: 100vh;
          background: transparent;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 1rem;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .back-link:hover {
          background: rgba(59, 130, 246, 0.15);
          transform: translateX(-3px);
        }

        .policy-header {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .policy-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .policy-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-color);
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .policy-meta-dates {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .dot-sep {
          color: var(--primary);
        }

        .policy-card {
          padding: 3.5rem;
          border-radius: 24px;
          max-width: 960px;
          margin: 0 auto;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .policy-intro {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-color);
        }

        .policy-divider {
          border: none;
          height: 1px;
          background: var(--glass-border);
          margin: 2.5rem 0;
        }

        .policy-section {
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .policy-section h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 1rem;
          letter-spacing: -0.3px;
        }

        .policy-section h3 {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-color);
          margin-top: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .policy-section p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1rem;
        }

        .policy-list {
          list-style-type: none;
          padding-left: 0;
          margin-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .policy-list li {
          position: relative;
          padding-left: 1.5rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.98rem;
        }

        .policy-list li::before {
          content: "•";
          position: absolute;
          left: 0.5rem;
          color: var(--primary);
          font-weight: bold;
          font-size: 1.1rem;
        }

        .policy-link {
          color: var(--primary);
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
        }

        .policy-link:hover {
          color: var(--accent-1, #60a5fa);
        }

        .about-details-box, .contact-card-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 1.5rem;
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-line {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-muted);
          font-size: 0.98rem;
        }

        .contact-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .policy-card {
            padding: 2rem 1.5rem;
          }

          .policy-title {
            font-size: 2.2rem;
          }

          .policy-meta-dates {
            flex-direction: column;
            gap: 0.25rem;
          }

          .dot-sep {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
