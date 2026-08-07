import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const techStack = [
    { icon: <FaReact />, label: "React", color: "#61dafb" },
    { icon: <FaNodeJs />, label: "Node", color: "#68a063" },
    { icon: <SiMongodb />, label: "Mongo", color: "#4db33d" },
    { icon: <SiExpress />, label: "Express", color: "#ffffff" },
    { icon: <FaAws />, label: "AWS", color: "#ff9900" },
  ];

  return (
    <section ref={ref} className="hero3d">
      {/* ──── BACKGROUND LAYERS ──── */}
      {/* Background animations moved to Background.jsx */}

      {/* 3D Floating geometric shapes */}
      <div className="h3-shapes" style={{
        transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
      }}>
        <div className="h3-shape h3-cube">
          <div className="cube-face front" />
          <div className="cube-face back" />
          <div className="cube-face left" />
          <div className="cube-face right" />
          <div className="cube-face top" />
          <div className="cube-face bottom" />
        </div>
        <div className="h3-shape h3-ring" />
        <div className="h3-shape h3-ring2" />
        <div className="h3-shape h3-sphere" />
        <div className="h3-shape h3-octahedron">
          <div className="octa-face o1" />
          <div className="octa-face o2" />
          <div className="octa-face o3" />
          <div className="octa-face o4" />
        </div>
        <div className="h3-shape h3-pyramid">
          <div className="pyr-face pf1" />
          <div className="pyr-face pf2" />
          <div className="pyr-face pf3" />
          <div className="pyr-face pf4" />
          <div className="pyr-base" />
        </div>
      </div>



      {/* ──── MAIN CONTENT ──── */}
      <motion.div className="h3-content" style={{ y: contentY, opacity }}>
        {/* Left Sidebar Panel - Fills the far left area circled by user */}
        <motion.div
          className="h3-side-panel h3-left-panel"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="h3-side-card">
            <div className="h3-side-header">
              <span className="h3-side-title">⚡ Cloud Infra Node</span>
              <span className="h3-side-badge green">Online</span>
            </div>
            <p className="h3-side-desc">
              Deploying low-latency microservices & IoT gateways across AWS Regions.
            </p>
            <div className="h3-side-metrics">
              <span>Region: <span className="h3-metric-val">ap-south-1</span></span>
              <span>Ping: <span className="h3-metric-val">18ms</span></span>
            </div>
          </div>

          <div className="h3-side-card">
            <div className="h3-side-header">
              <span className="h3-side-title">🐍 Python Automation</span>
              <span className="h3-side-badge">v3.11+</span>
            </div>
            <p className="h3-side-desc">
              Automating data pipelines, REST APIs, & web scrapers with FastAPI and Pandas.
            </p>
            <div className="h3-side-metrics">
              <span>Pipelines: <span className="h3-metric-val">Active</span></span>
              <span>ETL: <span className="h3-metric-val">100% Sync</span></span>
            </div>
          </div>

          <div className="h3-side-card">
            <div className="h3-side-header">
              <span className="h3-side-title">🛡️ Database & Auth</span>
              <span className="h3-side-badge">Secure</span>
            </div>
            <p className="h3-side-desc">
              Structured SQL/NoSQL schemas with Supabase, MongoDB, & JWT encryption.
            </p>
            <div className="h3-side-metrics">
              <span>Cluster: <span className="h3-metric-val">Healthy</span></span>
              <span>Uptime: <span className="h3-metric-val">99.9%</span></span>
            </div>
          </div>
        </motion.div>

        {/* Left side – text */}
        <div className="h3-text">
          {/* Status badge */}
          <motion.div
            className="h3-status"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="h3-status-dot" />
            <span>Available for Opportunities</span>
          </motion.div>

          <motion.p
            className="h3-hi"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm
          </motion.p>

          <div className="h3-name-block">
            <motion.span
              className="h3-name-line1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              SOUMYA
            </motion.span>
            <motion.span
              className="h3-name-line2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              RANJAN ROUT
            </motion.span>
          </div>

          <motion.div
            className="h3-role"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <span className="h3-role-divider" />
            <span className="h3-typewriter">
              <Typewriter
                words={["Aspiring Cloud Engineer", "Full Stack Developer", "Python & Cloud Enthusiast", "IoT & Backend Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={75}
                deleteSpeed={45}
                delaySpeed={1400}
              />
            </span>
          </motion.div>

          <motion.p
            className="h3-bio"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            Detail-oriented BCA student with hands-on experience building backend systems,
            cloud-connected IoT applications, and automated data pipelines using Python.
            Seeking an entry-level Cloud Engineer role to apply scripting, systems, and
            problem-solving skills toward scalable, secure cloud infrastructure.
          </motion.p>

          <motion.div
            className="h3-btns"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.88 }}
          >
            <a
              href="https://drive.google.com/file/d/1CgenTNe73eF-oHZ7yBV45m0ePDPfiP8o/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="h3-btn-glow"
            >
              <span className="h3-btn-bg" />
              <FaDownload size={13} /> Download Resume
            </a>
            <a href="#projects" className="h3-btn-outline">
              View Projects <FaArrowRight size={13} />
            </a>
          </motion.div>

          <motion.div
            className="h3-socials"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a href="https://github.com/Soumyaaa09" target="_blank" rel="noreferrer" className="h3-social">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/soumyarout048" target="_blank" rel="noreferrer" className="h3-social">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:rsoumyaranjan214@gmail.com" className="h3-social">
              <FaEnvelope size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right side – 3D tilt card */}
        <motion.div
          className="h3-card-area"
          initial={{ opacity: 0, scale: 0.85, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        >
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={900}
            scale={1.02}
            transitionSpeed={800}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#4338ca"
            glarePosition="all"
            className="h3-tilt-wrap"
          >
            <div className="h3-card-glass">
              <div className="h3-card-shine" />
              <div className="h3-card-inner">
                {/* Code window header */}
                <div className="h3-card-header">
                  <div className="h3-dots">
                    <span className="dot-r" />
                    <span className="dot-y" />
                    <span className="dot-g" />
                  </div>
                  <span className="h3-card-filename">portfolio.tsx</span>
                </div>

                {/* Fake code block */}
                <div className="h3-code">
                  <div className="h3-code-line">
                    <span className="ck">const</span> <span className="cv">engineer</span> <span className="co">=</span> <span className="cb">{'{'}</span>
                  </div>
                  <div className="h3-code-line indent">
                    <span className="cp">name</span><span className="co">:</span> <span className="cs">"Soumya Ranjan"</span><span className="co">,</span>
                  </div>
                  <div className="h3-code-line indent">
                    <span className="cp">role</span><span className="co">:</span> <span className="cs">"Cloud Engineer"</span><span className="co">,</span>
                  </div>
                  <div className="h3-code-line indent">
                    <span className="cp">stack</span><span className="co">:</span> <span className="cs">"Python • React • AWS"</span><span className="co">,</span>
                  </div>
                  <div className="h3-code-line indent">
                    <span className="cp">passion</span><span className="co">:</span> <span className="cs">"IoT & Cloud Infra"</span>
                  </div>
                  <div className="h3-code-line">
                    <span className="cb">{'}'}</span><span className="co">;</span>
                  </div>
                  <div className="h3-code-line mt">
                    <span className="ck">export default</span> <span className="cv">engineer</span><span className="co">;</span>
                  </div>
                </div>

                {/* Terminal output */}
                <div className="h3-terminal">
                  <span className="h3-term-prompt">❯</span>
                  <span className="h3-term-cmd"> python deploy_cloud_infra.py</span>
                  <div className="h3-term-cursor" />
                </div>
              </div>
            </div>
          </Tilt>

          {/* Tech orbit icons */}
          <div className="h3-orbit">
            {techStack.map((tech, i) => (
              <div
                key={tech.label}
                className="h3-orbit-icon"
                style={{
                  "--orbit-delay": `${i * -3}s`,
                  "--orbit-color": tech.color,
                }}
                title={tech.label}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Sidebar Panel - Fills the far right area circled by user */}
        <motion.div
          className="h3-side-panel h3-right-panel"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="h3-side-card">
            <div className="h3-side-header">
              <span className="h3-side-title">🧠 AI & ML Engine</span>
              <span className="h3-side-badge green">Gemini AI</span>
            </div>
            <p className="h3-side-desc">
              Integrating LLM resume scoring (NextStep AI) and Scikit-Learn regression models.
            </p>
            <div className="h3-side-metrics">
              <span>ATS Score: <span className="h3-metric-val">94%</span></span>
              <span>Models: <span className="h3-metric-val">Active</span></span>
            </div>
          </div>

          <div className="h3-side-card">
            <div className="h3-side-header">
              <span className="h3-side-title">📦 GitHub Stats</span>
              <span className="h3-side-badge">Soumyaaa09</span>
            </div>
            <p className="h3-side-desc">
              Consistent open-source contributions, modular clean code & CI/CD workflows.
            </p>
            <div className="h3-side-metrics">
              <span>Commits: <span className="h3-metric-val">450+</span></span>
              <span>Repos: <span className="h3-metric-val">7 Featured</span></span>
            </div>
          </div>

          <div className="h3-side-card">
            <div className="h3-side-header">
              <span className="h3-side-title">🚀 Full Stack Synergy</span>
              <span className="h3-side-badge">React + Node</span>
            </div>
            <p className="h3-side-desc">
              Pixel-perfect glassmorphic UIs powered by Express REST APIs and Socket.io.
            </p>
            <div className="h3-side-metrics">
              <span>Frontend: <span className="h3-metric-val">Vite</span></span>
              <span>State: <span className="h3-metric-val">Redux</span></span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="h3-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
      >
        <div className="h3-scroll-line" />
        <span>SCROLL</span>
        <div className="h3-scroll-chevrons">
          <div className="h3-chevron" />
          <div className="h3-chevron" />
          <div className="h3-chevron" />
        </div>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');

        /* ═══════ SECTION ═══════ */
        .hero3d {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: transparent;
          perspective: 1200px;
          z-index: 1;
        }



        /* ═══════ 3D FLOATING SHAPES ═══════ */
        .h3-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
          perspective: 800px;
          transition: transform 0.3s ease-out;
        }
        .h3-shape {
          position: absolute;
        }

        /* ── Cube ── */
        .h3-cube {
          width: 40px; height: 40px;
          top: 18%; right: 22%;
          transform-style: preserve-3d;
          animation: shapeSpin 15s linear infinite;
        }
        .cube-face {
          position: absolute;
          width: 40px; height: 40px;
          border: 1.5px solid rgba(79,70,229,0.35);
          background: rgba(79,70,229,0.06);
          backdrop-filter: blur(2px);
        }
        .cube-face.front  { transform: translateZ(20px); }
        .cube-face.back   { transform: rotateY(180deg) translateZ(20px); }
        .cube-face.left   { transform: rotateY(-90deg) translateZ(20px); }
        .cube-face.right  { transform: rotateY(90deg) translateZ(20px); }
        .cube-face.top    { transform: rotateX(90deg) translateZ(20px); }
        .cube-face.bottom { transform: rotateX(-90deg) translateZ(20px); }
        @keyframes shapeSpin {
          from { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          to   { transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg); }
        }

        /* ── Rings ── */
        .h3-ring {
          width: 70px; height: 70px;
          top: 65%; right: 35%;
          border: 2px solid rgba(139,92,246,0.3);
          border-radius: 50%;
          transform-style: preserve-3d;
          animation: ringOrbit 10s linear infinite;
          box-shadow: 0 0 15px rgba(139,92,246,0.15), inset 0 0 15px rgba(139,92,246,0.08);
        }
        .h3-ring2 {
          width: 50px; height: 50px;
          top: 30%; left: 8%;
          border: 1.5px solid rgba(59,130,246,0.25);
          border-radius: 50%;
          animation: ringOrbit 14s linear infinite reverse;
          box-shadow: 0 0 12px rgba(59,130,246,0.12);
        }
        @keyframes ringOrbit {
          from { transform: rotateX(70deg) rotateZ(0deg); }
          to   { transform: rotateX(70deg) rotateZ(360deg); }
        }

        /* ── Sphere ── */
        .h3-sphere {
          width: 28px; height: 28px;
          top: 75%; left: 15%;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, rgba(168,85,247,0.5), rgba(79,70,229,0.2) 60%, transparent 80%);
          box-shadow: 0 0 20px rgba(168,85,247,0.3), inset -4px -4px 8px rgba(0,0,0,0.3);
          animation: sphereBob 6s ease-in-out infinite;
        }
        @keyframes sphereBob {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-18px) scale(1.1); }
        }

        /* ── Octahedron ── */
        .h3-octahedron {
          width: 30px; height: 30px;
          top: 50%; left: 5%;
          transform-style: preserve-3d;
          animation: shapeSpin 20s linear infinite reverse;
        }
        .octa-face {
          position: absolute;
          width: 0; height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-bottom: 26px solid rgba(52,211,153,0.15);
          filter: drop-shadow(0 0 4px rgba(52,211,153,0.2));
        }
        .o1 { transform: rotateX(0deg) translateZ(10px); }
        .o2 { transform: rotateY(90deg) translateZ(10px); }
        .o3 { transform: rotateY(180deg) translateZ(10px); }
        .o4 { transform: rotateY(270deg) translateZ(10px); }

        /* ── Pyramid ── */
        .h3-pyramid {
          width: 35px; height: 35px;
          top: 22%; left: 18%;
          transform-style: preserve-3d;
          animation: shapeSpin 18s linear infinite;
          animation-delay: -5s;
        }
        .pyr-face {
          position: absolute;
          width: 0; height: 0;
          border-left: 17px solid transparent;
          border-right: 17px solid transparent;
          border-bottom: 30px solid rgba(251,146,60,0.12);
        }
        .pf1 { transform: rotateY(0deg)   translateZ(12px) rotateX(30deg); }
        .pf2 { transform: rotateY(90deg)  translateZ(12px) rotateX(30deg); }
        .pf3 { transform: rotateY(180deg) translateZ(12px) rotateX(30deg); }
        .pf4 { transform: rotateY(270deg) translateZ(12px) rotateX(30deg); }
        .pyr-base {
          position: absolute;
          width: 34px; height: 34px;
          background: rgba(251,146,60,0.06);
          border: 1px solid rgba(251,146,60,0.15);
          transform: rotateX(90deg) translateZ(-15px);
        }

        @keyframes gridGlowPulse {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }

        /* ═══════ CONTENT LAYOUT ═══════ */
        .h3-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1820px;
          margin: 0 auto;
          padding: 110px 2.5% 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 28px;
        }

        /* ═══════ SIDEBAR PANELS (Left & Right) ═══════ */
        .h3-side-panel {
          flex: 0 0 240px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          z-index: 10;
        }
        .h3-side-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 15px 16px;
          backdrop-filter: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .h3-side-card:hover {
          border-color: #3b82f6;
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 14px 35px rgba(59, 130, 246, 0.1);
          background: var(--card-bg);
        }
        .h3-side-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #4f46e5, #6366f1, #34d399);
          opacity: 0.7;
        }
        .h3-side-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .h3-side-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--title);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .h3-side-badge {
          font-size: 0.65rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 99px;
          background: rgba(79,70,229, 0.15);
          color: #a5b4fc;
          border: 1px solid rgba(79,70,229, 0.3);
        }
        .h3-side-badge.green {
          background: rgba(52, 211, 153, 0.15);
          color: #6ee7b7;
          border-color: rgba(52, 211, 153, 0.3);
        }
        .h3-side-desc {
          font-size: 0.73rem;
          color: var(--muted);
          line-height: 1.55;
          margin-bottom: 10px;
        }
        .h3-side-metrics {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          color: #64748b;
          padding-top: 8px;
          border-top: 1px dashed var(--card-border);
        }
        .h3-metric-val {
          color: #a5b4fc;
          font-weight: 700;
        }

        /* ═══════ LEFT TEXT ═══════ */
        .h3-text {
          flex: 1;
          max-width: 540px;
        }

        /* Status badge */
        .h3-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 99px;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.2);
          font-size: 0.75rem;
          font-weight: 600;
          color: #6ee7b7;
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }
        .h3-status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
          animation: statusPulse 2s ease-in-out infinite;
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.4; transform: scale(0.75); }
        }

        .h3-hi {
          font-size: 1.1rem;
          color: #4f46e5;
          font-style: italic;
          margin-bottom: 6px;
          letter-spacing: 0.04em;
        }

        /* ── Name with glitch ── */
        .h3-name-block {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
          margin-bottom: 20px;
          gap: 2px;
        }
        .h3-name-line1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 4.5rem);
          font-weight: 900;
          color: var(--title);
          letter-spacing: -0.03em;
          position: relative;
        }
        .h3-name-line1:hover {
          animation: glitch 0.3s ease forwards;
        }
        .h3-name-line2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6, #3b82f6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }
        .h3-name-line2:hover {
          animation: gradientShift 4s ease infinite, glitch 0.3s ease forwards;
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% center; }
          50%      { background-position: 100% center; }
        }
        @keyframes glitch {
          0%   { transform: translate(0); }
          20%  { transform: translate(-3px, 2px); }
          40%  { transform: translate(3px, -1px); }
          60%  { transform: translate(-1px, -2px); }
          80%  { transform: translate(2px, 1px); }
          100% { transform: translate(0); }
        }

        /* Role */
        .h3-role {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .h3-role-divider {
          width: 3px;
          height: 22px;
          border-radius: 2px;
          background: linear-gradient(to bottom, #4f46e5, #6366f1);
          flex-shrink: 0;
        }
        .h3-typewriter {
          font-size: 1rem;
          color: #4338ca;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .h3-bio {
          color: var(--muted);
          font-size: 0.92rem;
          line-height: 1.85;
          max-width: 480px;
          margin-bottom: 28px;
        }

        /* ── Neon glow CTA buttons ── */
        .h3-btns {
          display: flex;
          gap: 14px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .h3-btn-glow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: linear-gradient(135deg, #4f46e5, #4338ca);
          color: white;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.02em;
          transition: all 0.35s ease;
          box-shadow:
            0 4px 18px rgba(79,70,229,0.4),
            0 0 0 0 rgba(79,70,229,0);
          overflow: hidden;
          z-index: 1;
        }
        .h3-btn-bg {
          position: absolute;
          inset: -2px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3b82f6, #4f46e5);
          background-size: 300% 300%;
          animation: neonShift 3s ease infinite;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.35s;
          filter: blur(8px);
        }
        .h3-btn-glow:hover {
          transform: translateY(-4px);
          box-shadow:
            0 8px 30px rgba(79,70,229,0.6),
            0 0 40px rgba(139,92,246,0.3);
        }
        .h3-btn-glow:hover .h3-btn-bg {
          opacity: 1;
        }
        @keyframes neonShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        .h3-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: var(--card-bg);
          color: var(--title);
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.02em;
          transition: all 0.35s ease;
          backdrop-filter: blur(8px);
        }
        .h3-btn-outline:hover {
          border-color: rgba(139,92,246,0.5);
          background: rgba(139,92,246,0.08);
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(139,92,246,0.15);
        }

        /* ── Socials ── */
        .h3-socials { display: flex; gap: 12px; }
        .h3-social {
          width: 44px; height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          color: var(--muted);
          text-decoration: none;
          background: var(--card-bg);
          transition: all 0.35s ease;
          backdrop-filter: blur(6px);
        }
        .h3-social:hover {
          border-color: #4f46e5;
          color: #a5b4fc;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 6px 20px rgba(79,70,229,0.35);
          background: rgba(79,70,229,0.1);
        }

        /* ═══════ RIGHT — 3D CARD ═══════ */
        .h3-card-area {
          flex: 0 0 auto;
          width: 420px;
          position: relative;
        }
        .h3-tilt-wrap {
          width: 100%;
          border-radius: 20px;
        }
        .h3-card-glass {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: none;
          box-shadow: var(--hover-shadow);
        }
        .h3-card-shine {
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%);
          animation: cardShine 6s ease-in-out infinite;
        }
        @keyframes cardShine {
          0%, 100% { left: -100%; }
          50%      { left: 100%; }
        }

        .h3-card-inner {
          padding: 0;
        }

        /* Card header */
        .h3-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border-bottom: 1px solid var(--card-border);
          background: var(--bg-card-h);
        }
        .h3-dots {
          display: flex; gap: 6px;
        }
        .h3-dots span {
          width: 10px; height: 10px;
          border-radius: 50%;
        }
        .dot-r { background: #6366f1; }
        .dot-y { background: #eab308; }
        .dot-g { background: #22c55e; }
        .h3-card-filename {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: #64748b;
          letter-spacing: 0.02em;
        }

        /* Code block */
        .h3-code {
          padding: 20px 22px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          line-height: 2;
        }
        .h3-code-line {
          white-space: nowrap;
        }
        .h3-code-line.indent {
          padding-left: 22px;
        }
        .h3-code-line.mt {
          margin-top: 8px;
        }
        .ck { color: #6366f1; }  /* keyword */
        .cv { color: #3b82f6; }  /* variable */
        .co { color: var(--title); }  /* operator/punctuation */
        .cp { color: #10b981; }  /* property */
        .cs { color: #d97706; }  /* string */
        .cb { color: var(--title); }  /* brace */

        /* Terminal */
        .h3-terminal {
          padding: 14px 22px 18px;
          border-top: 1px solid var(--card-border);
          background: var(--bg-card-h);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .h3-term-prompt {
          color: #34d399;
          font-weight: 700;
        }
        .h3-term-cmd {
          color: var(--muted);
        }
        .h3-term-cursor {
          width: 7px; height: 14px;
          background: #4f46e5;
          border-radius: 1px;
          animation: cursorBlink 1s step-end infinite;
          margin-left: 2px;
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }

        /* ═══════ TECH ORBIT ═══════ */
        .h3-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 520px;
          height: 520px;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .h3-orbit-icon {
          position: absolute;
          width: 36px; height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(255, 255, 255,0.8);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--orbit-color);
          font-size: 1rem;
          box-shadow: 0 0 15px rgba(79,70,229,0.1);
          animation: orbitSpin 15s linear infinite;
          animation-delay: var(--orbit-delay);
          top: 50%; left: 50%;
          margin: -18px;
          backdrop-filter: blur(8px);
        }
        @keyframes orbitSpin {
          0%   { transform: rotate(0deg)   translateX(260px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(260px) rotate(-360deg); }
        }

        /* ═══════ SCROLL INDICATOR ═══════ */
        .h3-scroll {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 3;
        }
        .h3-scroll-line {
          width: 1px;
          height: 35px;
          background: linear-gradient(to bottom, transparent, rgba(79,70,229,0.5));
          animation: scrollLinePulse 2s ease-in-out infinite;
        }
        .h3-scroll span {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--muted);
        }
        .h3-scroll-chevrons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }
        .h3-chevron {
          width: 10px; height: 10px;
          border-right: 2px solid rgba(79,70,229,0.5);
          border-bottom: 2px solid rgba(79,70,229,0.5);
          transform: rotate(45deg);
          animation: chevronBounce 2s ease-in-out infinite;
        }
        .h3-chevron:nth-child(2) { animation-delay: 0.15s; opacity: 0.6; }
        .h3-chevron:nth-child(3) { animation-delay: 0.3s; opacity: 0.3; }
        @keyframes scrollLinePulse {
          0%, 100% { opacity: 0.5; height: 35px; }
          50%      { opacity: 1; height: 45px; }
        }
        @keyframes chevronBounce {
          0%, 100% { transform: rotate(45deg) translateY(0); }
          50%      { transform: rotate(45deg) translateY(5px); }
        }

        /* ═══════ RESPONSIVE ═══════ */
        @media (max-width: 1380px) {
          .h3-side-panel { display: none; }
          .h3-content { justify-content: space-between; padding: 100px 5% 0; }
        }

        @media (max-width: 1100px) {
          .h3-card-area { width: 360px; }
          .h3-orbit { width: 440px; height: 440px; }
          .h3-orbit-icon { animation-name: orbitSpinSm; }
          @keyframes orbitSpinSm {
            0%   { transform: rotate(0deg)   translateX(220px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(220px) rotate(-360deg); }
          }
        }

        @media (max-width: 960px) {
          .h3-content {
            flex-direction: column;
            text-align: center;
            padding-top: 120px;
          }
          .h3-text { max-width: 100%; }
          .h3-status { margin: 0 auto 20px; }
          .h3-bio { max-width: 100%; margin-left: auto; margin-right: auto; }
          .h3-btns { justify-content: center; }
          .h3-socials { justify-content: center; }
          .h3-role { justify-content: center; }
          .h3-card-area {
            width: 380px;
            order: -1;
            margin-bottom: 10px;
          }
          .h3-orbit { display: none; }
          .h3-shapes { opacity: 0.3; }
          .h3-name-line1, .h3-name-line2 {
            font-size: clamp(1.8rem, 6vw, 3rem);
          }
        }

        @media (max-width: 600px) {
          .hero3d { min-height: 100vh; }
          .h3-content { padding: 100px 5% 0; gap: 24px; }
          .h3-card-area { width: 100%; max-width: 340px; }
          .h3-name-line1, .h3-name-line2 {
            font-size: clamp(1.5rem, 8vw, 2.2rem);
          }
          .h3-shapes { display: none; }
          .h3-grid-floor { display: none; }
          .h3-aurora-wrap { opacity: 0.2; }
          .h3-scroll { bottom: 16px; }
          .h3-btns { flex-direction: column; width: 100%; }
          .h3-btn-glow, .h3-btn-outline { width: 100%; justify-content: center; }
        }

        @media (max-width: 400px) {
          .h3-card-area { max-width: 100%; }
          .h3-terminal { flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}

export default Hero;