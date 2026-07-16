import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
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
            <form className="ct-form">
              <div className="ct-form-row">
                <div className="ct-field">
                  <label className="ct-label">Your Name</label>
                  <input type="text" placeholder="Soumya Ranjan" />
                </div>
                <div className="ct-field">
                  <label className="ct-label">Your Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="ct-field">
                <label className="ct-label">Subject</label>
                <input type="text" placeholder="Project Inquiry / Internship / Hello" />
              </div>
              <div className="ct-field">
                <label className="ct-label">Message</label>
                <textarea placeholder="Write your message here..." rows="6" />
              </div>
              <button type="submit" className="ct-submit">
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
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
          background: rgba(99,102,241,0.12);
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
          margin-bottom: 14px;
        }
        .contact h2 {
          font-family: 'Syne', sans-serif !important;
          font-size: clamp(2rem, 3.5vw, 3rem) !important;
          font-weight: 800 !important;
          line-height: 1.1 !important;
          margin-bottom: 20px !important;
          letter-spacing: -0.02em !important;
        }
        .contact h2::after { display: none !important; }
        .ct-h2-grad {
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-desc {
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.9;
          margin-bottom: 36px;
          max-width: 420px;
        }
        .ct-info-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 36px;
        }
        .ct-info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .ct-info-icon {
          width: 38px; height: 38px;
          flex-shrink: 0;
          border-radius: 9px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #818cf8;
        }
        .ct-info-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 2px;
        }
        .ct-info-val {
          font-size: 0.88rem;
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.2s;
        }
        a.ct-info-val:hover { color: #818cf8; }

        .ct-socials {
          display: flex;
          gap: 12px;
        }
        .ct-social {
          width: 40px; height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 9px;
          color: #94a3b8;
          text-decoration: none;
          background: rgba(255,255,255,0.03);
          transition: all 0.3s ease;
        }
        .ct-social:hover {
          border-color: #818cf8;
          color: #818cf8;
          transform: translateY(-3px);
          box-shadow: 0 5px 14px rgba(99,102,241,0.28);
        }

        /* RIGHT — form card */
        .ct-form-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          padding: 40px;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          position: relative;
          overflow: hidden;
        }
        .ct-form-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #a78bfa, #60a5fa);
        }
        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .ct-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .ct-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .contact .ct-form input,
        .contact .ct-form textarea {
          padding: 13px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: #f1f5f9;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: all 0.28s ease;
          resize: vertical;
          width: 100%;
        }
        .contact .ct-form input::placeholder,
        .contact .ct-form textarea::placeholder { color: #334155; }
        .contact .ct-form input:focus,
        .contact .ct-form textarea:focus {
          border-color: #6366f1;
          background: rgba(99,102,241,0.06);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }
        .ct-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 11px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(99,102,241,0.4);
          width: 100%;
          margin-top: 4px;
        }
        .ct-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(99,102,241,0.6);
        }
        .ct-submit:active { transform: translateY(0); }

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