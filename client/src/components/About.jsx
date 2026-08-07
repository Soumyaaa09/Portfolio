import { motion } from "framer-motion";
import { FaGraduationCap, FaRocket, FaCode, FaCloud, FaPython, FaUsers } from "react-icons/fa";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "2027", label: "Expected Grad" },
  { value: "100%", label: "Commitment" },
];

const highlights = [
  { icon: <FaCloud />,      color: "#6366f1", title: "Cloud & IoT",       desc: "Three-tier cloud architecture, MQTT protocols & IoT data pipelines." },
  { icon: <FaPython />,     color: "#a5b4fc", title: "Python & Scripting", desc: "Backend logic, automation, Flask, FastAPI & DevOps workflows." },
  { icon: <FaCode />,       color: "#34d399", title: "Full Stack Dev",    desc: "React.js, Supabase, REST APIs & responsive web interfaces." },
  { icon: <FaUsers />,      color: "#fb923c", title: "Team Player",       desc: "Group projects, systematic debugging & technical communication." },
];

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="ab-blob ab-blob1" />
      <div className="ab-blob ab-blob2" />

      <div className="ab-inner">
        {/* LEFT */}
        <motion.div
          className="ab-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="ab-tag">WHO I AM</p>
          <h2>About <span className="ab-grad">Me</span></h2>

          <p className="ab-bio">
            I'm a passionate BCA student at <strong>Centurion University of Technology
            and Management</strong>, with hands-on experience building backend systems,
            cloud-connected IoT applications, and automated data pipelines using Python.
          </p>
          <p className="ab-bio">
            I'm seeking an entry-level <strong>Cloud Engineer</strong> role to apply my
            scripting, systems, and problem-solving skills toward building scalable,
            secure cloud infrastructure.
          </p>

          {/* Stats row */}
          <div className="ab-stats">
            {stats.map((s, i) => (
              <motion.div
                className="ab-stat"
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="ab-stat-val">{s.value}</span>
                <span className="ab-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Education timeline */}
          <div className="ab-timeline">
            <p className="ab-section-label">Education</p>
            <div className="ab-tl-item">
              <div className="ab-tl-dot" />
              <div>
                <p className="ab-tl-title">BCA — Centurion University</p>
                <p className="ab-tl-sub">2024 – May 2027</p>
              </div>
            </div>
            <div className="ab-tl-line" />
            <div className="ab-tl-item">
              <div className="ab-tl-dot ab-tl-dot2" />
              <div>
                <p className="ab-tl-title">12th — K.V Danapur Cantt, Bihar</p>
                <p className="ab-tl-sub">May 2022</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="ab-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="ab-highlights">
            {highlights.map((h, i) => (
              <motion.div
                className="ab-card"
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                style={{ "--hc": h.color }}
              >
                <div className="ab-card-icon">{h.icon}</div>
                <div>
                  <p className="ab-card-title">{h.title}</p>
                  <p className="ab-card-desc">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Currently learning badge */}
          <motion.div
            className="ab-learning"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="ab-learning-dot" />
            <span className="ab-learning-text">
              Currently learning: <strong>AWS Cloud, Docker & Infrastructure-as-Code</strong>
            </span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .about {
          position: relative;
          padding: 100px 10% 120px;
          overflow: hidden;
          max-width: 100% !important;
        }
        .ab-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .ab-blob1 {
          width: 380px; height: 380px;
          background: rgba(79,70,229,0.1);
          top: -80px; right: 5%;
        }
        .ab-blob2 {
          width: 300px; height: 300px;
          background: rgba(52,211,153,0.07);
          bottom: 0; left: -60px;
        }

        .ab-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* LEFT */
        .ab-left { display: flex; flex-direction: column; gap: 0; }
        .ab-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #818cf8;
          margin-bottom: 12px;
        }
        .about h2 {
          font-family: 'Syne', sans-serif !important;
          font-size: clamp(2rem, 3.5vw, 3rem) !important;
          font-weight: 800 !important;
          margin-bottom: 24px !important;
          letter-spacing: -0.02em !important;
        }
        .about h2::after { display: none !important; }
        .ab-grad {
          background: linear-gradient(90deg, #a5b4fc, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ab-bio {
          color: var(--muted);
          font-size: 0.92rem;
          line-height: 1.9;
          margin-bottom: 14px;
        }
        .ab-bio strong { color: #4f46e5; font-weight: 600; }

        /* Stats */
        .ab-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin: 28px 0 36px;
        }
        .ab-stat {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 16px 10px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .ab-stat:hover {
          border-color: #4f46e5;
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(79,70,229,0.15);
        }
        .ab-stat-val {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          background: linear-gradient(90deg, #a5b4fc, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }
        .ab-stat-label {
          font-size: 0.7rem;
          color: #64748b;
          font-weight: 500;
          letter-spacing: 0.04em;
        }

        /* Timeline */
        .ab-section-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 16px;
        }
        .ab-timeline {
          position: relative;
          padding-left: 4px;
        }
        .ab-tl-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 8px;
        }
        .ab-tl-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #4f46e5;
          box-shadow: 0 0 8px rgba(79,70,229,0.6);
          flex-shrink: 0;
          margin-top: 4px;
        }
        .ab-tl-dot2 { background: #6366f1; box-shadow: 0 0 8px rgba(167,139,250,0.6); }
        .ab-tl-line {
          width: 1px;
          height: 20px;
          background: linear-gradient(to bottom, #4f46e5, #6366f1);
          margin-left: 4px;
          margin-bottom: 8px;
        }
        .ab-tl-title {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--title);
          margin-bottom: 2px;
        }
        .ab-tl-sub {
          font-size: 0.78rem;
          color: #64748b;
        }

        /* RIGHT — highlight cards */
        .ab-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        .ab-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 22px 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .ab-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--hc);
          opacity: 0.7;
        }
        .ab-card:hover {
          border-color: #4f46e5;
          transform: translateY(-5px);
          box-shadow: var(--hover-shadow);
        }
        .ab-card-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid var(--card-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: var(--hc);
        }
        .ab-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--title);
          margin-bottom: 5px;
        }
        .ab-card-desc {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.7;
        }

        /* Learning badge */
        .ab-learning {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 10px;
          padding: 12px 16px;
        }
        .ab-learning-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(0.8); }
        }
        .ab-learning-text {
          font-size: 0.82rem;
          color: var(--muted);
        }
        .ab-learning-text strong { color: #10b981; font-weight: 600; }

        @media (max-width: 860px) {
          .ab-inner { grid-template-columns: 1fr; gap: 48px; }
          .about { padding: 80px 6% 100px; }
          .ab-stats { grid-template-columns: repeat(2, 1fr); }
          .ab-highlights { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .ab-highlights { grid-template-columns: 1fr; }
          .ab-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </motion.section>
  );
}

export default About;