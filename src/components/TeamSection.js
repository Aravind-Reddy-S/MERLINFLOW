"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TeamSection() {
  const team = [
    {
      name: "S Aravind Reddy",
      role: "Founder & CEO",
      image: "/team/aravind.jpg",
      bio: "Driving the vision to revolutionize enterprise software with seamless, scalable solutions.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "N Rithish Reddy",
      role: "Co-Founder & CTO",
      image: "/team/rithish.jpg",
      bio: "Expert in cloud infrastructure, cybersecurity, and modern full-stack architectures.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Y Pavan Kumar",
      role: "Chief Operating Officer",
      image: "/team/pavan.jpg?v=2",
      bio: "Master of scaling business operations and ensuring flawless execution for enterprise clients.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "R Lokesh",
      role: "Chief Product Officer",
      image: "/team/lokesh.jpg",
      bio: "Passionate about designing intuitive, user-centric experiences for complex B2B platforms.",
      socials: { linkedin: "#", twitter: "#" }
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <div className="badge">Leadership</div>
          <h2 style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
            Meet the <span className="text-gradient">Innovators</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Our team brings together decades of experience in enterprise software, cloud architecture, and business operations.
          </p>
        </motion.div>

        <div className="team-grid">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              className="team-card glass-panel"
            >
              <div className="image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="social-overlay">
                  <a href={member.socials.linkedin} className="social-icon"><FaLinkedin size={20} /></a>
                  <a href={member.socials.twitter} className="social-icon"><FaXTwitter size={20} /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-section {
          padding: 5rem 0;
          background: transparent;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .badge {
          display: inline-block;
          background: var(--bg-alpha-light);
          color: var(--primary);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid var(--glass-border);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .team-section {
            padding: 3.5rem 0;
          }
          .team-grid {
            grid-template-columns: 1fr;
          }
        }

        .team-card {
          padding: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s, border-color 0.3s;
        }

        .team-card:hover {
          transform: translateY(-10px);
        }

        .image-wrapper {
          position: relative;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin: 0 auto 1.5rem auto;
          border: 3px solid var(--glass-border);
          overflow: hidden;
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%; /* Perfect for portrait photos to keep the face centered */
          transition: transform 0.5s, filter 0.5s;
          filter: grayscale(40%) brightness(0.85) contrast(1.1);
        }

        .team-card:hover .team-image {
          transform: scale(1.1);
          filter: grayscale(0%) brightness(1) contrast(1);
        }

        .social-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .team-card:hover .social-overlay {
          opacity: 1;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, background 0.2s;
        }

        .social-icon:hover {
          transform: scale(1.1);
          background: white;
          color: var(--primary);
        }

        .team-info {
          width: 100%;
          text-align: center;
        }

        .team-info h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: var(--text-color);
        }

        .team-role {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .team-bio {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
