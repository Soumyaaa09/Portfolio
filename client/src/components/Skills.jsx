import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython,
  FaGitAlt, FaAws, FaDatabase,
} from "react-icons/fa";
import { SiFlask, SiFastapi, SiSupabase, SiPostgresql, SiTailwindcss, SiMqtt, SiVercel, SiRender } from "react-icons/si";

const categories = [
  {
    label: "Cloud & Infrastructure",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.2)",
    skills: [
      { name: "AWS Cloud",        icon: <FaAws />,          level: 65 },
      { name: "Supabase",         icon: <SiSupabase />,     level: 72 },
      { name: "PostgreSQL",       icon: <SiPostgresql />,   level: 68 },
      { name: "MySQL",            icon: <FaDatabase />,     level: 65 },
      { name: "MQTT / IoT",       icon: <SiMqtt />,         level: 60 },
    ],
  },
  {
    label: "Programming & Scripting",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.2)",
    skills: [
      { name: "Python",           icon: <FaPython />,       level: 85 },
      { name: "Flask",            icon: <SiFlask />,        level: 75 },
      { name: "FastAPI",          icon: <SiFastapi />,      level: 72 },
      { name: "JavaScript",       icon: <FaJs />,           level: 78 },
      { name: "C++",              icon: <FaDatabase />,     level: 60 },
    ],
  },
  {
    label: "Web Dev & Tools",
    color: "#34d399",
    glow: "rgba(52,211,153,0.18)",
    skills: [
      { name: "React.js",         icon: <FaReact />,        level: 80 },
      { name: "HTML / CSS",       icon: <FaHtml5 />,        level: 90 },
      { name: "Tailwind CSS",     icon: <SiTailwindcss />,  level: 75 },
      { name: "Git & GitHub",     icon: <FaGitAlt />,       level: 85 },
      { name: "Vercel / Render",  icon: <SiVercel />,       level: 70 },
    ],
  },
];

function Skills() {
  return (
    <motion.section
      className="skills"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="sk-blob sk-blob1" />
      <div className="sk-blob sk-blob2" />

      <div className="sk-header">
        <motion.p
          className="sk-tag"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          WHAT I WORK WITH
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Skills &amp; <span className="sk-grad">Technologies</span>
        </motion.h2>
        <motion.p
          className="sk-desc"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A curated set of tools and technologies I use to build modern,
          scalable web applications.
        </motion.p>
      </div>

      <div className="sk-grid">
        {categories.map((cat, ci) => (
          <motion.div
            className="sk-cat-card"
            key={cat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: ci * 0.12 }}
            viewport={{ once: true }}
            style={{ "--cat-color": cat.color, "--cat-glow": cat.glow }}
          >
            <div className="sk-cat-header">
              <span className="sk-cat-dot" />
              <span className="sk-cat-label">{cat.label}</span>
            </div>

            <div className="sk-skill-list">
              {cat.skills.map((skill, si) => (
                <motion.div
                  className="sk-skill-row"
                  key={skill.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="sk-skill-left">
                    <span className="sk-skill-icon">{skill.icon}</span>
                    <span className="sk-skill-name">{skill.name}</span>
                  </div>
                  <div className="sk-bar-wrap">
                    <motion.div
                      className="sk-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, delay: ci * 0.1 + si * 0.08, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="sk-pct">{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skills {
          position: relative;
          padding: 100px 10% 120px;
          overflow: hidden;
        }
        .sk-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .sk-blob1 {
          width: 420px; height: 420px;
          background: rgba(99,102,241,0.1);
          top: 0; right: 0;
        }
        .sk-blob2 {
          width: 320px; height: 320px;
          background: rgba(139,92,246,0.08);
          bottom: 0; left: 5%;
        }

        .sk-header {
          position: relative;
          z-index: 1;
          margin-bottom: 56px;
        }
        .sk-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #818cf8;
          margin-bottom: 12px;
        }
        .skills h2 {
          font-family: 'Syne', sans-serif !important;
          font-size: clamp(1.8rem, 3.2vw, 2.8rem) !important;
          font-weight: 800 !important;
          margin-bottom: 14px !important;
          letter-spacing: -0.02em !important;
        }
        .skills h2::after { display: none !important; }
        .sk-grad {
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sk-desc {
          color: #94a3b8;
          font-size: 0.92rem;
          max-width: 500px;
          line-height: 1.8;
        }

        /* Grid */
        .sk-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Category card */
        .sk-cat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px;
          backdrop-filter: blur(12px);
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .sk-cat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--cat-color);
          opacity: 0.7;
        }
        .sk-cat-card::after {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 160px; height: 160px;
          border-radius: 50%;
          background: var(--cat-glow);
          filter: blur(40px);
          pointer-events: none;
        }
        .sk-cat-card:hover {
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }

        .sk-cat-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }
        .sk-cat-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: var(--cat-color);
          box-shadow: 0 0 8px var(--cat-color);
          flex-shrink: 0;
        }
        .sk-cat-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--cat-color);
        }

        /* Skill rows */
        .sk-skill-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .sk-skill-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sk-skill-left {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 115px;
        }
        .sk-skill-icon {
          font-size: 1rem;
          color: var(--cat-color);
          opacity: 0.85;
          flex-shrink: 0;
        }
        .sk-skill-name {
          font-size: 0.82rem;
          font-weight: 500;
          color: #cbd5e1;
          white-space: nowrap;
        }
        .sk-bar-wrap {
          flex: 1;
          height: 5px;
          background: rgba(255,255,255,0.07);
          border-radius: 99px;
          overflow: hidden;
        }
        .sk-bar-fill {
          height: 100%;
          border-radius: 99px;
          background: linear-gradient(90deg, var(--cat-color), rgba(255,255,255,0.4));
          box-shadow: 0 0 8px var(--cat-color);
        }
        .sk-pct {
          font-size: 0.72rem;
          font-weight: 600;
          color: #64748b;
          min-width: 30px;
          text-align: right;
        }

        @media (max-width: 900px) {
          .sk-grid { grid-template-columns: 1fr; }
          .skills { padding: 80px 6% 100px; }
        }
        @media (max-width: 600px) {
          .sk-skill-left { min-width: 90px; }
        }
      `}</style>
    </motion.section>
  );
}

export default Skills;