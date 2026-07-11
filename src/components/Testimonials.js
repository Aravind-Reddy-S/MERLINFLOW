"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, Send, X } from "lucide-react";

export default function Testimonials() {
  const initialTestimonials = [
    {
      quote: "MerlinFlow ERP transformed how we manage our 3,000+ students. The fee collection and parent portal modules alone saved us hundreds of hours.",
      author: "Dr. Sarah Jenkins",
      role: "Principal, Oakridge International",
      industry: "Education",
      rating: 5
    },
    {
      quote: "Managing a 5-star resort requires flawless execution. The seamless PMS to POS integration means our guests never experience delays.",
      author: "Michael Chang",
      role: "General Manager, The Azure Resort",
      industry: "Hotels & Resorts",
      rating: 5
    },
    {
      quote: "HIPAA compliance was our biggest hurdle. MerlinFlow provided an incredibly secure EHR system that our doctors actually love using.",
      author: "Dr. Elena Rodriguez",
      role: "Chief Medical Officer, City Health",
      industry: "Hospitals & Clinics",
      rating: 5
    },
    {
      quote: "The analytics tools provided by MerlinFlow ERP gave us the exact insights we needed to optimize our supply chain and cut costs by 15%.",
      author: "James Peterson",
      role: "Operations Director, Global Logistics",
      industry: "Corporate",
      rating: 5
    }
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratingHover, setRatingHover] = useState(0);
  const [newReview, setNewReview] = useState({
    author: "",
    role: "",
    industry: "",
    quote: "",
    rating: 5
  });

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/merlinflowtechnologies@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Customer Testimonial Submitted!",
          Name: newReview.author,
          Role: newReview.role,
          Industry: newReview.industry,
          Rating: `${newReview.rating} Stars`,
          Review: newReview.quote
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setShowForm(false);
          setNewReview({ author: "", role: "", industry: "", quote: "", rating: 5 });
        }, 5000);
      } else {
        alert("Oops! Something went wrong while sending your review.");
      }
    } catch (error) {
      alert("Oops! A network error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <div className="badge">Success Stories</div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Don't just take <span className="text-gradient">our word for it.</span>
          </h2>
        </motion.div>

        <div className="testimonials-grid">
          <AnimatePresence>
            {testimonials.map((test, i) => (
              <motion.div
                key={i + test.author}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i > 3 ? 0 : i * 0.1 }}
                className="testimonial-card glass-panel"
              >
                <Quote className="quote-icon" size={40} />
                <div className="stars">
                  {[...Array(test.rating)].map((_, j) => <Star key={j} size={16} fill="#FFC107" color="#FFC107" />)}
                  {[...Array(5 - test.rating)].map((_, j) => <Star key={`empty-${j}`} size={16} color="var(--glass-border)" />)}
                </div>
                <p className="quote-text">"{test.quote}"</p>
                <div className="author-info">
                  <div className="author-details">
                    <h4>{test.author}</h4>
                    <p>{test.role}</p>
                    <span className="industry-tag">{test.industry || "General"}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="feedback-action">
          {!showForm ? (
            <button className="leave-review-btn" onClick={() => setShowForm(true)}>
              Leave a Review
            </button>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="feedback-form-container glass-panel"
            >
              <button className="close-form" onClick={() => setShowForm(false)}>
                <X size={24} />
              </button>
              
              {isSubmitted ? (
                <div className="success-state" style={{ textAlign: "center", padding: "2rem" }}>
                  <Star size={64} fill="#FFC107" color="#FFC107" style={{ marginBottom: "1.5rem" }} />
                  <h3 style={{ marginBottom: "1rem" }}>Review Sent for Approval!</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Thank you for your feedback. Our team will review it shortly.</p>
                </div>
              ) : (
                <>
                  <h3>Share Your Experience</h3>
                  <form onSubmit={handleReviewSubmit} className="feedback-form">
                    
                    <div className="rating-select">
                      <label>Your Rating</label>
                      <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={28} 
                            fill={(ratingHover || newReview.rating) >= star ? "#FFC107" : "transparent"} 
                            color={(ratingHover || newReview.rating) >= star ? "#FFC107" : "var(--glass-border)"}
                            className="clickable-star"
                            onMouseEnter={() => setRatingHover(star)}
                            onMouseLeave={() => setRatingHover(0)}
                            onClick={() => setNewReview({...newReview, rating: star})}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="feedback-input-row">
                      <div className="feedback-input-group">
                        <label>Full Name</label>
                        <input type="text" required value={newReview.author} onChange={e => setNewReview({...newReview, author: e.target.value})} placeholder="Jane Doe" />
                      </div>
                      <div className="feedback-input-group">
                        <label>Job Title & Company</label>
                        <input type="text" required value={newReview.role} onChange={e => setNewReview({...newReview, role: e.target.value})} placeholder="CEO, Tech Solutions" />
                      </div>
                    </div>

                    <div className="feedback-input-group">
                      <label>Industry</label>
                      <input type="text" required value={newReview.industry} onChange={e => setNewReview({...newReview, industry: e.target.value})} placeholder="e.g. Healthcare, Education..." />
                    </div>

                    <div className="feedback-input-group">
                      <label>Your Review</label>
                      <textarea rows="4" required value={newReview.quote} onChange={e => setNewReview({...newReview, quote: e.target.value})} placeholder="How has MerlinFlow helped your business?"></textarea>
                    </div>

                    <button type="submit" className="feedback-submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : <>Submit Review <Send size={18} /></>}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .testimonials-section {
          padding: 3rem 0;
          background: transparent;
          position: relative;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .testimonials-grid {
          display: flex;
          overflow-x: auto;
          gap: 1.5rem;
          margin-bottom: 4rem;
          padding: 1rem 0 2rem 0; /* Add padding to prevent hover effects from clipping */
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          width: 100%;
          max-width: 100%;
        }
        
        .testimonials-grid::-webkit-scrollbar {
          height: 8px;
        }
        
        .testimonials-grid::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        .testimonials-grid::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }

        .testimonial-card {
          flex: 0 0 min(350px, 85vw);
          scroll-snap-align: center;
          padding: 1.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .quote-icon {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: rgba(255, 255, 255, 0.05);
        }

        .stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }

        .quote-text {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-color);
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
        }

        .author-details h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 0.2rem;
        }

        .author-details p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .industry-tag {
          display: inline-block;
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50px;
          color: var(--text-color);
        }

        .feedback-action {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .leave-review-btn {
          padding: 1rem 2.5rem;
          background: transparent;
          color: var(--primary);
          border: 1px solid var(--primary);
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .leave-review-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          transform: translateY(-2px);
        }

        .feedback-form-container {
          padding: 3rem;
          width: 100%;
          max-width: 800px;
          position: relative;
          text-align: left;
        }

        .feedback-form-container h3 {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .close-form {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s;
        }

        .close-form:hover {
          color: white;
        }

        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .rating-select {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .star-rating {
          display: flex;
          gap: 0.5rem;
        }

        .clickable-star {
          cursor: pointer;
          transition: transform 0.1s;
        }

        .clickable-star:hover {
          transform: scale(1.1);
        }

        .feedback-input-row {
          display: flex;
          gap: 1.5rem;
        }

        .feedback-input-row .feedback-input-group {
          flex: 1;
        }

        .feedback-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .feedback-input-group label {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .feedback-input-group input,
        .feedback-input-group textarea {
          width: 100%;
          padding: 1rem;
          background: var(--bg-alpha-light);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-color);
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
        }

        .feedback-input-group input:focus,
        .feedback-input-group textarea:focus {
          border-color: var(--primary);
        }

        .feedback-submit-btn {
          margin-top: 1rem;
          padding: 1rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background 0.2s;
        }

        .feedback-submit-btn:hover {
          background: var(--primary-hover);
        }

        @media (max-width: 768px) {
          .feedback-input-row {
            flex-direction: column;
          }
          .feedback-form-container {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
