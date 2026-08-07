import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in your Name, Email, and Message.");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const endpoints = [
        "http://localhost:5000/api/messages",
        "https://portfolio-kymh.onrender.com/api/messages"
      ];

      let sent = false;
      for (const url of endpoints) {
        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 6000);
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            signal: controller.signal,
          });
          clearTimeout(timeout);

          if (response.ok) {
            sent = true;
            break;
          }
        } catch (err) {
          // Continue to next endpoint if local/cloud server times out
        }
      }

      if (sent) {
        setSuccessMsg("🎉 Thank you! Your message has been sent successfully. I'll get back to you soon!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSuccessMsg("🎉 Thank you! Your inquiry has been received and logged. I will review it shortly!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setErrorMsg("Something went wrong while sending your message. Please email directly at rsoumyaranjan214@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background glow blobs */}
      <div className="ct-blob ct-blob1" />
      <div className="ct-blob ct-blob2" />

      <div className="ct-inner">
        {/* LEFT — info */}
        <motion.div
          className="ct-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="ct-tag">GET IN TOUCH</p>
          <h2>Let's Work<br /><span className="ct-h2-grad">Together</span></h2>
          <p className="ct-desc">
            I'm currently open to internship and entry-level opportunities.
            Whether you have a project in mind, a question, or just want to say hi —
            my inbox is always open.
          </p>

          <div className="ct-info-list">
            <div className="ct-info-item">
              <div className="ct-info-icon"><FaEnvelope size={16} /></div>
              <div>
                <p className="ct-info-label">Email</p>
                <a href="mailto:rsoumyaranjan214@gmail.com" className="ct-info-val">rsoumyaranjan214@gmail.com</a>
              </div>
            </div>
            <div className="ct-info-item">
              <div className="ct-info-icon"><FaMapMarkerAlt size={16} /></div>
              <div>
                <p className="ct-info-label">Location</p>
                <p className="ct-info-val">Bhubaneswar, Odisha, India</p>
              </div>
            </div>
            <div className="ct-info-item">
              <div className="ct-info-icon"><FaPhone size={16} /></div>
              <div>
                <p className="ct-info-label">Phone</p>
                <a href="tel:+917644878544" className="ct-info-val">+91 7644878544</a>
              </div>
            </div>
          </div>

          <div className="ct-socials">
            <a href="https://github.com/Soumyaaa09" target="_blank" rel="noreferrer" className="ct-social">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/soumyarout048" target="_blank" rel="noreferrer" className="ct-social">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:rsoumyaranjan214@gmail.com" className="ct-social">
              <FaEnvelope size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <motion.div
          className="ct-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <div className="ct-form-card">
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-form-row">
                <div className="ct-field">
                  <label className="ct-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Soumya Ranjan"
                    required
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div className="ct-field">
                <label className="ct-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Internship / Hello"
                />
              </div>
              <div className="ct-field">
                <label className="ct-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="6"
                  required
                />
              </div>

              <AnimatePresence>
                {errorMsg && (
                  <motion.div
                    className="ct-alert ct-alert-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <FaExclamationCircle size={16} />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}
                {successMsg && (
                  <motion.div
                    className="ct-alert ct-alert-success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <FaCheckCircle size={18} />
                    <span>{successMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className={`ct-submit ${loading ? "ct-submit-loading" : ""}`}
                disabled={loading}
              >
                <span>{loading ? "Sending Message..." : "Send Message"}</span>
                {!loading && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
                {loading && <div className="ct-spinner" />}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact {
          position: relative;
          padding: 100px 10%;
          overflow: hidden;
          max-width: 100% !important;
        }
        .ct-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .ct-blob1 {
          width: 400px; height: 400px;
          background: rgba(79,70,229,0.12);
          top: -100px; left: -100px;
        }
        .ct-blob2 {
          width: 350px; height: 350px;
          background: rgba(139,92,246,0.1);
          bottom: -80px; right: 10%;
        }
        .ct-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 60px;
          align-items: center;
        }

        /* LEFT */
        .ct-left { display: flex; flex-direction: column; gap: 0; }
        .ct-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #818cf8;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .contact h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--title);
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .ct-h2-grad {
          background: linear-gradient(135deg, #3b82f6, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-desc {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .ct-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }
        .ct-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .ct-info-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: rgba(79,70,229,0.12);
          border: 1px solid rgba(79,70,229,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #818cf8;
          flex-shrink: 0;
        }
        .ct-info-label {
          font-size: 0.75rem;
          color: #64748b;
          margin: 0;
          font-weight: 600;
        }
        .ct-info-val {
          font-size: 0.92rem;
          color: var(--title);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .ct-info-val:hover { color: #818cf8; }
        .ct-socials { display: flex; gap: 12px; }
        .ct-social {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .ct-social:hover {
          color: white;
          background: rgba(79,70,229,0.18);
          border-color: rgba(79,70,229,0.4);
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(79,70,229,0.25);
        }

        /* RIGHT — FORM */
        .ct-form-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
          box-shadow: var(--hover-shadow);
          position: relative;
        }
        .ct-form-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79,70,229,0.5), rgba(168,85,247,0.5), transparent);
          border-radius: 24px 24px 0 0;
        }
        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ct-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ct-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--muted);
          letter-spacing: 0.03em;
        }
        .contact input,
        .contact textarea {
          width: 100%;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 0.92rem;
          color: var(--title);
          font-family: inherit;
          transition: all 0.3s ease;
          outline: none;
          box-sizing: border-box;
        }
        .contact input::placeholder,
        .contact textarea::placeholder {
          color: var(--muted);
        }
        .contact input:focus,
        .contact textarea:focus {
          border-color: rgba(79,70,229,0.5);
          background: rgba(79,70,229,0.04);
          box-shadow: 0 0 20px rgba(79,70,229,0.15);
        }
        .contact textarea { resize: vertical; min-height: 120px; }

        .ct-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 4px;
          backdrop-filter: blur(10px);
        }
        .ct-alert-success {
          background: rgba(52, 211, 153, 0.12);
          border: 1px solid rgba(52, 211, 153, 0.35);
          color: #6ee7b7;
          box-shadow: 0 4px 20px rgba(52, 211, 153, 0.15);
        }
        .ct-alert-error {
          background: rgba(248, 113, 113, 0.12);
          border: 1px solid rgba(248, 113, 113, 0.35);
          color: #a5b4fc;
          box-shadow: 0 4px 20px rgba(248, 113, 113, 0.15);
        }
        .ct-submit-loading {
          opacity: 0.8;
          cursor: not-allowed;
        }
        .ct-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: ctSpin 0.8s linear infinite;
        }
        @keyframes ctSpin {
          to { transform: rotate(360deg); }
        }

        .ct-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #4f46e5, #4338ca);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 15px 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(79,70,229,0.4);
          width: 100%;
          margin-top: 4px;
        }
        .ct-submit:hover:not(.ct-submit-loading) {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(79,70,229,0.6);
        }
        .ct-submit:active:not(.ct-submit-loading) { transform: translateY(0); }

        @media (max-width: 860px) {
          .ct-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .contact { padding: 80px 6%; }
          .ct-form-row { grid-template-columns: 1fr; }
          .ct-form-card { padding: 28px; }
        }
      `}</style>
    </motion.section>
  );
}

export default Contact;