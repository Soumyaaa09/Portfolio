import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
  FaTimes,
  FaArrowRight,
  FaFolder,
} from "react-icons/fa";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import nextstepAiImg from "../assets/nextstep_ai.png";
import blogPlatformImg from "../assets/blog_platform.png";
import ecommerceImg from "../assets/ecommerce_platform.png";
import taskManagementImg from "../assets/task_management.png";
import portfolioWebsiteImg from "../assets/portfolio_website.png";

const projectImages = {
  "project1.png": project1,
  "project2.jpg": project2,
  "project3.jpg": project3,
  "nextstep_ai.png": nextstepAiImg,
  "blog_platform.png": blogPlatformImg,
  "ecommerce_platform.png": ecommerceImg,
  "task_management.png": taskManagementImg,
  "portfolio_website.png": portfolioWebsiteImg,
};

const fallbackProjects = [
  {
    _id: "1",
    title: "NextStep AI",
    description:
      "AI-powered career development platform that analyzes resumes, evaluates ATS compatibility, and identifies skill gaps using Gemini AI. Features personalized learning roadmaps, career recommendations, and AI-powered mock interviews.",
    tech: "React.js • FastAPI • Python • Supabase • Gemini AI • Tailwind CSS",
    image: "nextstep_ai.png",
    github: "https://github.com/Soumyaaa09/nextstep.ai",
    live: "https://nextstep-ai-demo.vercel.app",
    featured: true,
    stars: 12,
    forks: 3,
    tag: "AI / ML",
  },
  {
    _id: "2",
    title: "House Price Predictor",
    description:
      "Machine learning project for predicting property prices based on various property attributes and historical transaction datasets using trained regression models.",
    tech: "Python • Machine Learning • Scikit-Learn • Pandas • Flask",
    image: "project2.jpg",
    github: "https://github.com/Soumyaaa09/House-price-predictor",
    live: "",
    featured: false,
    stars: 14,
    forks: 4,
    tag: "AI / ML",
  },
  {
    _id: "3",
    title: "Vehicle Renting Portal",
    description:
      "Web-based vehicle rental system with separate user and admin modules. Includes comprehensive booking workflow with administrator approval logic and responsive UI.",
    tech: "Flask • Python • HTML • CSS • MySQL • Supabase • AWS",
    image: "project3.jpg",
    github: "https://github.com/Soumyaaa09/renting-portal",
    live: "",
    featured: false,
    stars: 8,
    forks: 2,
    tag: "Cloud",
  },
  {
    _id: "6",
    title: "Task Management Suite",
    description:
      "Collaborative productivity and workflow tracking suite with Kanban boards, real-time status updates, priority tagging, and team assignment capabilities.",
    tech: "React.js • Node.js • Express • Socket.io • MongoDB",
    image: "task_management.png",
    github: "https://github.com/Soumyaaa09/Task-management",
    live: "",
    featured: false,
    stars: 7,
    forks: 1,
    tag: "Full Stack",
  },
  {
    _id: "7",
    title: "Portfolio Website",
    description:
      "Modern responsive developer portfolio with 3D tilt animations, interactive category filtering, glassmorphic UI, smooth transitions, and full-stack contact API.",
    tech: "React.js • Node.js • MongoDB • Framer Motion • Vite",
    image: "portfolio_website.png",
    github: "https://github.com/Soumyaaa09/Portfolio",
    live: "https://portfolio-nu-mocha-89.vercel.app",
    featured: false,
    stars: 10,
    forks: 2,
    tag: "Frontend",
  },
];

const tagColors = {
  All: {
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
    text: "#e2e8f0",
    glow: "rgba(255,255,255,0.08)",
  },
  "Full Stack": {
    bg: "rgba(167,139,250,0.15)",
    border: "rgba(167,139,250,0.35)",
    text: "#6366f1",
    glow: "rgba(167,139,250,0.20)",
  },
  Cloud: {
    bg: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.3)",
    text: "#34d399",
    glow: "rgba(52,211,153,0.18)",
  },
  Frontend: {
    bg: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.3)",
    text: "#a5b4fc",
    glow: "rgba(96,165,250,0.18)",
  },
  "AI / ML": {
    bg: "rgba(244,63,94,0.12)",
    border: "rgba(244,63,94,0.3)",
    text: "#f43f5e",
    glow: "rgba(244,63,94,0.18)",
  },
  Personal: {
    bg: "rgba(79,70,229,0.15)",
    border: "rgba(79,70,229,0.35)",
    text: "#818cf8",
    glow: "rgba(79,70,229,0.18)",
  },
};

const normalizeProjects = (list) => {
  if (!Array.isArray(list)) return fallbackProjects;
  return list.map((p, index) => {
    let tag = p.tag;
    if (!tag) {
      const lowerTech = (p.tech || "").toLowerCase();
      const lowerTitle = (p.title || "").toLowerCase();
      if (
        lowerTitle.includes("price") ||
        lowerTech.includes("machine learning") ||
        lowerTech.includes("ai") ||
        lowerTitle.includes("ai")
      ) {
        tag = "AI / ML";
      } else if (
        lowerTech.includes("aws") ||
        lowerTech.includes("cloud") ||
        lowerTech.includes("docker") ||
        lowerTitle.includes("rent")
      ) {
        tag = "Cloud";
      } else if (
        lowerTech.includes("react") &&
        (lowerTech.includes("node") ||
          lowerTech.includes("fastapi") ||
          lowerTech.includes("flask") ||
          lowerTech.includes("express") ||
          lowerTech.includes("mongodb") ||
          lowerTech.includes("sql"))
      ) {
        tag = "Full Stack";
      } else {
        tag = "Frontend";
      }
    }

    let image = p.image;
    const lowerTitle = (p.title || "").toLowerCase();
    if (lowerTitle.includes("nextstep")) image = "nextstep_ai.png";
    else if (lowerTitle.includes("price") || lowerTitle.includes("house") || lowerTitle.includes("estate")) image = "project2.jpg";
    else if (lowerTitle.includes("rent") || lowerTitle.includes("vehicle") || lowerTitle.includes("drive")) image = "project3.jpg";
    else if (lowerTitle.includes("blog")) image = "blog_platform.png";
    else if (lowerTitle.includes("commerce") || lowerTitle.includes("shop") || lowerTitle.includes("nexus")) image = "ecommerce_platform.png";
    else if (lowerTitle.includes("task") || lowerTitle.includes("manage") || lowerTitle.includes("flow")) image = "task_management.png";
    else if (lowerTitle.includes("portfolio")) image = "portfolio_website.png";
    else if (!image) image = "project2.jpg";

    return {
      ...p,
      tag,
      stars: p.stars !== undefined ? p.stars : (index === 0 ? 12 : 8),
      forks: p.forks !== undefined ? p.forks : (index === 0 ? 3 : 1),
      image,
      featured: p.featured !== undefined ? p.featured : index === 0,
    };
  });
};

const mergeWithFallback = (apiList) => {
  if (!Array.isArray(apiList) || apiList.length === 0) {
    return normalizeProjects(fallbackProjects);
  }
  const filteredApi = apiList.filter((p) => {
    const lower = (p.title || "").toLowerCase();
    return !lower.includes("blog platform") && !lower.includes("e-commerce") && !lower.includes("ecommerce");
  });
  const normalizedApi = normalizeProjects(filteredApi);
  const apiTitles = new Set(
    normalizedApi.map((p) => (p.title || "").toLowerCase().trim())
  );
  const apiLinks = new Set(
    normalizedApi.map((p) => (p.github || "").toLowerCase().trim())
  );

  const extraFromFallback = fallbackProjects.filter((fb) => {
    const fbTitle = (fb.title || "").toLowerCase().trim();
    const fbLink = (fb.github || "").toLowerCase().trim();
    return !apiTitles.has(fbTitle) && !apiLinks.has(fbLink);
  });

  return normalizeProjects([...normalizedApi, ...extraFromFallback]);
};

/* ── Animated counter hook ── */
function useCounter(target, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

/* ── Stat pill component ── */
function StatPill({ icon: Icon, value, size = 12 }) {
  const animatedValue = useCounter(value);
  return (
    <span className="pj-meta-item">
      <Icon size={size} /> {animatedValue}
    </span>
  );
}

/* ── Project Detail Modal ── */
function ProjectModal({ project, onClose }) {
  const tc = tagColors[project.tag] || tagColors["Personal"];

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="pj-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="pj-modal-content"
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 40 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="pj-modal-close" onClick={onClose} aria-label="Close modal">
          <FaTimes size={18} />
        </button>

        <div className="pj-modal-image-wrap">
          <img
            src={projectImages[project.image] || projectImages["project2.jpg"]}
            alt={project.title}
          />
          <div className="pj-modal-image-overlay" />
          {project.tag && (
            <span
              className="pj-badge"
              style={{
                background: tc.bg,
                borderColor: tc.border,
                color: tc.text,
                border: `1px solid ${tc.border}`,
              }}
            >
              {project.tag}
            </span>
          )}
        </div>

        <div className="pj-modal-body">
          <h3 className="pj-modal-title">{project.title}</h3>

          <p className="pj-modal-desc">{project.description}</p>

          <div className="pj-tech-wrap">
            {(project.tech || "")
              .split("•")
              .map((t) => (
                <span className="pj-tech-chip" key={t}>
                  {t.trim()}
                </span>
              ))}
          </div>

          <div className="pj-modal-stats">
            <span className="pj-meta-item">
              <FaStar size={13} /> {project.stars || 0} stars
            </span>
            <span className="pj-meta-item">
              <FaCodeBranch size={13} /> {project.forks || 0} forks
            </span>
          </div>

          <div className="pj-modal-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="pj-btn-primary"
            >
              <FaGithub size={16} />
              View on GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="pj-btn-outline"
              >
                <FaExternalLinkAlt size={13} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Projects Component ── */
function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        "https://portfolio-kymh.onrender.com/api/projects"
      );
      if (Array.isArray(res.data)) {
        setProjects(mergeWithFallback(res.data));
      } else if (Array.isArray(res.data.projects)) {
        setProjects(mergeWithFallback(res.data.projects));
      } else {
        setProjects(normalizeProjects(fallbackProjects));
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects(normalizeProjects(fallbackProjects));
    }
  };

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.tag || "Personal"))),
  ];

  const featured = projects.find((p) => p.featured) || projects[0];

  const showFeatured =
    activeFilter === "All" || (featured && featured.tag === activeFilter);

  const filteredProjects =
    activeFilter === "All"
      ? projects.filter((p) => p._id !== featured?._id)
      : showFeatured
      ? projects.filter((p) => p.tag === activeFilter && p._id !== featured?._id)
      : projects.filter((p) => p.tag === activeFilter);

  const openModal = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="pj-blob pj-blob1" />
      <div className="pj-blob pj-blob2" />
      <div className="pj-blob pj-blob3" />

      {/* Section Header */}
      <div className="pj-header">
        <motion.p
          className="pj-tag"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          WHAT I'VE BUILT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Featured <span className="pj-grad">Projects</span>
        </motion.h2>

        <motion.p
          className="pj-desc"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A selection of projects I've built — from full-stack web apps to
          cloud-powered tools.
        </motion.p>
      </div>

      {/* Category Filter Tabs */}
      <motion.div
        className="pj-filters"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`pj-filter-btn ${activeFilter === cat ? "pj-filter-active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {activeFilter === cat && (
              <motion.div
                className="pj-filter-bg"
                layoutId="activeFilter"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="pj-filter-label">{cat}</span>
          </button>
        ))}
      </motion.div>

      {/* Featured Card */}
      {showFeatured && featured && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="pj-featured-wrapper">
            <div className="pj-featured-glow" />
            <div
              className="pj-featured"
              onClick={() => openModal(featured)}
            >
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable={true}
                glareMaxOpacity={0.12}
                glareColor="#4f46e5"
                glarePosition="all"
                glareBorderRadius="14px"
                className="pj-featured-tilt"
              >
                <div className="pj-featured-img-wrap">
                  <img
                    src={
                      projectImages[featured.image] ||
                      projectImages["project2.jpg"]
                    }
                    alt={featured.title}
                  />
                  <div className="pj-featured-img-overlay" />
                  <span className="pj-featured-label">
                    <span className="pj-featured-pulse" />
                    Featured Project
                  </span>
                </div>
              </Tilt>

              <div className="pj-featured-info">
                {featured.tag && (
                  <span
                    className="pj-badge pj-badge-inline"
                    style={{
                      background: (tagColors[featured.tag] || tagColors["Personal"]).bg,
                      borderColor: (tagColors[featured.tag] || tagColors["Personal"]).border,
                      color: (tagColors[featured.tag] || tagColors["Personal"]).text,
                      border: `1px solid ${(tagColors[featured.tag] || tagColors["Personal"]).border}`,
                    }}
                  >
                    {featured.tag}
                  </span>
                )}

                <h3 className="pj-featured-title">{featured.title}</h3>

                <p className="pj-featured-desc">{featured.description}</p>

                <div className="pj-tech-wrap">
                  {(featured.tech || "")
                    .split("•")
                    .map((t) => (
                      <span className="pj-tech-chip" key={t}>
                        {t.trim()}
                      </span>
                    ))}
                </div>

                <div className="pj-meta">
                  <StatPill icon={FaStar} value={featured.stars || 0} />
                  <StatPill icon={FaCodeBranch} value={featured.forks || 0} />
                </div>

                <div className="pj-featured-btns">
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noreferrer"
                    className="pj-btn-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={15} />
                    View on GitHub
                  </a>
                  {featured.live && (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noreferrer"
                      className="pj-btn-outline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Other Projects — Bento Grid */}
      <div
        className={`pj-grid ${
          filteredProjects.length === 1 ? "pj-grid-single" : ""
        }`}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => {
            const tc = tagColors[project.tag] || tagColors["Personal"];

            return (
              <motion.div
                className="pj-card"
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => openModal(project)}
                style={{
                  "--card-glow": tc.glow,
                  "--card-border": tc.border,
                }}
              >
                <div className="pj-card-img-wrap">
                  <img
                    src={
                      projectImages[project.image] ||
                      projectImages["project2.jpg"]
                    }
                    alt={project.title}
                  />
                  <div className="pj-card-img-overlay" />
                  {project.tag && (
                    <span
                      className="pj-badge"
                      style={{
                        background: tc.bg,
                        borderColor: tc.border,
                        color: tc.text,
                        border: `1px solid ${tc.border}`,
                      }}
                    >
                      {project.tag}
                    </span>
                  )}

                  {/* Hover overlay with CTA */}
                  <div className="pj-card-hover-overlay">
                    <span className="pj-card-view-btn">
                      <FaFolder size={14} />
                      View Details
                      <FaArrowRight size={11} />
                    </span>
                  </div>
                </div>

                <div className="pj-card-body">
                  <h3 className="pj-card-title">{project.title}</h3>

                  <p className="pj-card-desc">{project.description}</p>

                  <div className="pj-tech-wrap">
                    {(project.tech || "")
                      .split("•")
                      .map((t) => (
                        <span className="pj-tech-chip" key={t}>
                          {t.trim()}
                        </span>
                      ))}
                  </div>

                  <div className="pj-card-footer">
                    <div className="pj-meta">
                      <StatPill icon={FaStar} value={project.stars || 0} size={11} />
                      <StatPill
                        icon={FaCodeBranch}
                        value={project.forks || 0}
                        size={11}
                      />
                    </div>

                    <div className="pj-card-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="pj-icon-btn"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="GitHub"
                      >
                        <FaGithub size={16} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="pj-icon-btn"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Live Demo"
                        >
                          <FaExternalLinkAlt size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {!showFeatured && filteredProjects.length === 0 && activeFilter !== "All" && (
        <motion.div
          className="pj-empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <FaFolder size={32} />
          <p>No {activeFilter} projects yet.</p>
        </motion.div>
      )}

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;