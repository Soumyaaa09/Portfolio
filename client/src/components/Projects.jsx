import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";

import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projectImages = {
  "project2.jpg": project2,
  "project3.jpg": project3,
};

const fallbackProjects = [
  {
    _id: "1",
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React.js featuring smooth scroll animations, parallax planet, a contact form, and a dark space-themed UI.",
    tech: "React.js • Framer Motion • CSS3",
    image: "project2.jpg",
    github: "https://github.com/Soumyaaa09",
    live: "",
    featured: true,
    stars: 12,
    forks: 3,
    tag: "Personal",
  },
  {
    _id: "2",
    title: "Full Stack Blog App",
    description:
      "A MERN stack blog application with user authentication, CRUD operations, rich text editor, and a fully responsive design.",
    tech: "MongoDB • Express • React • Node.js",
    image: "project3.jpg",
    github: "https://github.com/Soumyaaa09",
    live: "",
    featured: false,
    stars: 8,
    forks: 2,
    tag: "Full Stack",
  },
  {
    _id: "3",
    title: "Cloud Storage Dashboard",
    description:
      "An AWS-powered file storage dashboard with upload, download, delete and file management features built on S3.",
    tech: "React.js • AWS S3 • Node.js",
    image: "project2.jpg",
    github: "https://github.com/Soumyaaa09",
    live: "",
    featured: false,
    stars: 5,
    forks: 1,
    tag: "Cloud",
  },
];

const tagColors = {
  "Personal":   { bg: "rgba(99,102,241,0.15)",  border: "rgba(99,102,241,0.35)",  text: "#818cf8" },
  "Full Stack": { bg: "rgba(167,139,250,0.15)", border: "rgba(167,139,250,0.35)", text: "#a78bfa" },
  "Cloud":      { bg: "rgba(52,211,153,0.12)",  border: "rgba(52,211,153,0.3)",   text: "#34d399" },
};

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => { fetchProjects(); }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("https://portfolio-kymh.onrender.com/");
      if (res.data && res.data.length > 0) setProjects(res.data);
    } catch (_) {}
  };

  const featured = projects.find(p => p.featured) || projects[0];
  const rest = projects.filter(p => p._id !== featured._id);

  return (
    <section className="projects" id="projects">
      <div className="pj-blob pj-blob1" />
      <div className="pj-blob pj-blob2" />

      {/* Header */}
      <div className="pj-header">
        <motion.p className="pj-tag"
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} viewport={{ once: true }}>
          WHAT I'VE BUILT
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
          Featured <span className="pj-grad">Projects</span>
        </motion.h2>
        <motion.p className="pj-desc"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
          A selection of projects I've built — from full-stack web apps to cloud-powered tools.
        </motion.p>
      </div>

      {/* Featured card — large */}
      <motion.div
        className="pj-featured"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div className="pj-featured-img-wrap">
          <img src={projectImages[featured.image] || projectImages["project2.jpg"]} alt={featured.title} />
          <div className="pj-featured-img-overlay" />
          {featured.tag && (
            <span className="pj-badge" style={tagColors[featured.tag] || tagColors["Personal"]}>
              {featured.tag}
            </span>
          )}
          <span className="pj-featured-label">✦ Featured</span>
        </div>

        <div className="pj-featured-info">
          <h3 className="pj-featured-title">{featured.title}</h3>
          <p className="pj-featured-desc">{featured.description}</p>

          <div className="pj-tech-wrap">
            {(featured.tech || "").split("•").map(t => (
              <span className="pj-tech-chip" key={t}>{t.trim()}</span>
            ))}
          </div>

          <div className="pj-meta">
            <span className="pj-meta-item"><FaStar size={12} /> {featured.stars || 0}</span>
            <span className="pj-meta-item"><FaCodeBranch size={12} /> {featured.forks || 0}</span>
          </div>

          <div className="pj-featured-btns">
            <a href={featured.github} target="_blank" rel="noreferrer" className="pj-btn-primary">
              <FaGithub size={15} /> View on GitHub
            </a>
            {featured.live && (
              <a href={featured.live} target="_blank" rel="noreferrer" className="pj-btn-outline">
                <FaExternalLinkAlt size={13} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Rest of projects grid */}
      <div className="pj-grid">
        {rest.map((project, i) => {
          const tc = tagColors[project.tag] || tagColors["Personal"];
          return (
            <motion.div
              className="pj-card"
              key={project._id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.13 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="pj-card-img-wrap">
                <img src={projectImages[project.image] || projectImages["project2.jpg"]} alt={project.title} />
                <div className="pj-card-img-overlay" />
                {project.tag && (
                  <span className="pj-badge" style={tc}>{project.tag}</span>
                )}
              </div>

              <div className="pj-card-body">
                <h3 className="pj-card-title">{project.title}</h3>
                <p className="pj-card-desc">{project.description}</p>

                <div className="pj-tech-wrap">
                  {(project.tech || "").split("•").map(t => (
                    <span className="pj-tech-chip" key={t}>{t.trim()}</span>
                  ))}
                </div>

                <div className="pj-card-footer">
                  <div className="pj-meta">
                    <span className="pj-meta-item"><FaStar size={11} /> {project.stars || 0}</span>
                    <span className="pj-meta-item"><FaCodeBranch size={11} /> {project.forks || 0}</span>
                  </div>
                  <div className="pj-card-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="pj-icon-btn" title="GitHub">
                      <FaGithub size={16} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="pj-icon-btn" title="Live">
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View all button */}
      <motion.div className="pj-all-wrap"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
        <a href="https://github.com/Soumyaaa09" target="_blank" rel="noreferrer" className="pj-all-btn">
          <FaGithub size={16} /> View All on GitHub
        </a>
      </motion.div>

      <style>{`
        .projects {
          position: relative;
          padding: 100px 10% 120px;
          overflow: hidden;
        }
        .pj-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .pj-blob1 { width: 400px; height: 400px; background: rgba(99,102,241,0.1); top: 0; right: -80px; }
        .pj-blob2 { width: 350px; height: 350px; background: rgba(139,92,246,0.08); bottom: 0; left: 0; }

        /* Header */
        .pj-header { position: relative; z-index: 1; margin-bottom: 52px; }
        .pj-tag {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.18em; color: #818cf8; margin-bottom: 12px;
        }
        .projects h2 {
          font-family: 'Syne', sans-serif !important;
          font-size: clamp(1.8rem, 3.2vw, 2.8rem) !important;
          font-weight: 800 !important;
          text-align: left !important;
          margin-bottom: 14px !important;
          letter-spacing: -0.02em !important;
          display: block !important;
          left: 0 !important;
          transform: none !important;
        }
        .projects h2::after { display: none !important; }
        .pj-grad {
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pj-desc { color: #94a3b8; font-size: 0.92rem; max-width: 520px; line-height: 1.8; }

        /* Badge */
        .pj-badge {
          position: absolute;
          top: 14px; left: 14px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: 99px;
          border: 1px solid;
          backdrop-filter: blur(8px);
          z-index: 2;
        }

        /* ---- FEATURED CARD ---- */
        .pj-featured {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 0;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          overflow: hidden;
          margin-bottom: 28px;
          transition: all 0.4s ease;
        }
        .pj-featured::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #a78bfa, #60a5fa);
          z-index: 3;
        }
        .pj-featured:hover {
          border-color: rgba(99,102,241,0.3);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }
        .pj-featured-img-wrap {
          position: relative;
          overflow: hidden;
          min-height: 320px;
        }
        .pj-featured-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: brightness(0.75) saturate(0.8);
          transition: all 0.5s ease;
        }
        .pj-featured:hover .pj-featured-img-wrap img {
          filter: brightness(0.9) saturate(1.1);
          transform: scale(1.04);
        }
        .pj-featured-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 60%, rgba(10,10,30,0.9));
        }
        .pj-featured-label {
          position: absolute;
          bottom: 14px; right: 14px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #fbbf24;
          letter-spacing: 0.06em;
          background: rgba(251,191,36,0.1);
          border: 1px solid rgba(251,191,36,0.25);
          padding: 4px 10px;
          border-radius: 99px;
          backdrop-filter: blur(8px);
        }
        .pj-featured-info {
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }
        .pj-featured-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #f1f5f9;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }
        .pj-featured-desc {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.85;
          margin-bottom: 20px;
        }

        /* Tech chips */
        .pj-tech-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }
        .pj-tech-chip {
          font-size: 0.75rem;
          font-weight: 500;
          color: #a5b4fc;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.2);
          padding: 4px 11px;
          border-radius: 99px;
          letter-spacing: 0.02em;
        }

        /* Meta */
        .pj-meta {
          display: flex;
          gap: 14px;
          margin-bottom: 24px;
        }
        .pj-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Buttons */
        .pj-featured-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .pj-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border-radius: 9px;
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(99,102,241,0.35);
        }
        .pj-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,0.55); }
        .pj-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          background: transparent;
          color: white;
          border: 1.5px solid rgba(255,255,255,0.18);
          border-radius: 9px;
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .pj-btn-outline:hover { border-color: rgba(255,255,255,0.45); background: rgba(255,255,255,0.04); transform: translateY(-2px); }

        /* ---- GRID CARDS ---- */
        .pj-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 22px;
          margin-bottom: 40px;
        }
        .pj-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.35s ease;
          cursor: default;
        }
        .pj-card:hover {
          border-color: rgba(99,102,241,0.3);
          box-shadow: 0 16px 40px rgba(0,0,0,0.35);
        }
        .pj-card-img-wrap {
          position: relative;
          height: 180px;
          overflow: hidden;
        }
        .pj-card-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: brightness(0.75) saturate(0.8);
          transition: all 0.4s ease;
        }
        .pj-card:hover .pj-card-img-wrap img {
          filter: brightness(0.92) saturate(1.1);
          transform: scale(1.06);
        }
        .pj-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,8,24,0.85) 0%, transparent 60%);
        }
        .pj-card-body { padding: 22px; }
        .pj-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #f1f5f9;
          letter-spacing: -0.01em;
          margin-bottom: 10px;
        }
        .pj-card-desc {
          color: #94a3b8;
          font-size: 0.85rem;
          line-height: 1.8;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pj-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .pj-card-links { display: flex; gap: 10px; }
        .pj-icon-btn {
          width: 34px; height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: #94a3b8;
          text-decoration: none;
          background: rgba(255,255,255,0.03);
          transition: all 0.28s ease;
        }
        .pj-icon-btn:hover {
          border-color: #818cf8;
          color: #818cf8;
          background: rgba(99,102,241,0.1);
          transform: translateY(-2px);
        }

        /* View all */
        .pj-all-wrap { display: flex; justify-content: center; position: relative; z-index: 1; }
        .pj-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 30px;
          border: 1.5px solid rgba(99,102,241,0.4);
          border-radius: 10px;
          color: #a5b4fc;
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          background: rgba(99,102,241,0.07);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .pj-all-btn:hover {
          background: rgba(99,102,241,0.16);
          border-color: #818cf8;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(99,102,241,0.28);
        }

        @media (max-width: 860px) {
          .pj-featured { grid-template-columns: 1fr; }
          .pj-featured-img-wrap { min-height: 220px; }
          .pj-featured-img-overlay { background: linear-gradient(to top, rgba(10,10,30,0.9) 0%, transparent 60%); }
          .projects { padding: 80px 6% 100px; }
        }
        @media (max-width: 600px) {
          .pj-grid { grid-template-columns: 1fr; }
          .pj-featured-info { padding: 24px 20px; }
        }
      `}</style>
    </section>
  );
}

export default Projects;