import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";

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
  Personal: {
    bg: "rgba(99,102,241,0.15)",
    border: "rgba(99,102,241,0.35)",
    text: "#818cf8",
  },
  "Full Stack": {
    bg: "rgba(167,139,250,0.15)",
    border: "rgba(167,139,250,0.35)",
    text: "#a78bfa",
  },
  Cloud: {
    bg: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.3)",
    text: "#34d399",
  },
};

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    fetchProjects();
  }, []);

 const fetchProjects = async () => {
  try {
    const res = await axios.get(
      "https://portfolio-kymh.onrender.com/api/projects"
    );

    if (Array.isArray(res.data)) {
      setProjects(res.data);
    } else if (Array.isArray(res.data.projects)) {
      setProjects(res.data.projects);
    } else {
      setProjects(fallbackProjects);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);

    setProjects(fallbackProjects);
  }
};

  const featured =
    projects.find((p) => p.featured) || projects[0];

  const rest = projects.filter(
    (p) => p._id !== featured?._id
  );

  return (
    <section className="projects" id="projects">
      <div className="pj-blob pj-blob1" />
      <div className="pj-blob pj-blob2" />

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

      {/* Featured Card */}
      {featured && (
        <motion.div
          className="pj-featured"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          viewport={{ once: true }}
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

            {featured.tag && (
              <span
                className="pj-badge"
                style={tagColors[featured.tag] || tagColors["Personal"]}
              >
                {featured.tag}
              </span>
            )}

            <span className="pj-featured-label">✦ Featured</span>
          </div>

          <div className="pj-featured-info">
            <h3 className="pj-featured-title">{featured.title}</h3>

            <p className="pj-featured-desc">
              {featured.description}
            </p>

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
              <span className="pj-meta-item">
                <FaStar size={12} /> {featured.stars || 0}
              </span>

              <span className="pj-meta-item">
                <FaCodeBranch size={12} /> {featured.forks || 0}
              </span>
            </div>

            <div className="pj-featured-btns">
              <a
                href={featured.github}
                target="_blank"
                rel="noreferrer"
                className="pj-btn-primary"
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
                >
                  <FaExternalLinkAlt size={13} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Other Projects */}
      <div className="pj-grid">
        {rest.map((project, i) => {
          const tc =
            tagColors[project.tag] || tagColors["Personal"];

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
                <img
                  src={
                    projectImages[project.image] ||
                    projectImages["project2.jpg"]
                  }
                  alt={project.title}
                />

                <div className="pj-card-img-overlay" />

                {project.tag && (
                  <span className="pj-badge" style={tc}>
                    {project.tag}
                  </span>
                )}
              </div>

              <div className="pj-card-body">
                <h3 className="pj-card-title">{project.title}</h3>

                <p className="pj-card-desc">
                  {project.description}
                </p>

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
                    <span className="pj-meta-item">
                      <FaStar size={11} /> {project.stars || 0}
                    </span>

                    <span className="pj-meta-item">
                      <FaCodeBranch size={11} /> {project.forks || 0}
                    </span>
                  </div>

                  <div className="pj-card-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="pj-icon-btn"
                    >
                      <FaGithub size={16} />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="pj-icon-btn"
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
      </div>
    </section>
  );
}

export default Projects;