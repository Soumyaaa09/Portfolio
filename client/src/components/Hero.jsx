import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const planetY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="hs">
      {/* Stars */}
      <div className="hs-stars s1" />
      <div className="hs-stars s2" />
      <div className="hs-stars s3" />

      {/* Shooting stars */}
      {[1,2,3,4].map(i => <div key={i} className={`hs-shoot shoot${i}`} />)}

      {/* Planet */}
      <motion.div className="hs-planet-wrap" style={{ y: planetY }}>
        <div className="hs-planet">
          <div className="hs-planet-surface" />
          <div className="hs-planet-ring" />
          <div className="hs-planet-ring hs-planet-ring2" />
          <div className="hs-planet-glow" />
          <div className="hs-planet-shine" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div className="hs-content" style={{ y: contentY, opacity }}>
        <motion.p
          className="hs-hi"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm
        </motion.p>

        <div className="hs-name-block">
          <motion.span
            className="hs-name-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            SOUMYA
          </motion.span>
          <motion.span
            className="hs-name-grad"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            RANJAN ROUT
          </motion.span>
        </div>

        <motion.div
          className="hs-role"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <span className="hs-role-icon">☁</span>
          <span className="hs-typewriter">
            <Typewriter
              words={["Aspiring Cloud Engineer","Full Stack Developer","React Developer","BCA Student"]}
              loop={true} cursor cursorStyle="|"
              typeSpeed={75} deleteSpeed={45} delaySpeed={1400}
            />
          </span>
        </motion.div>

        <motion.p
          className="hs-bio"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          Detail-oriented BCA student with strong software development foundations,
          seeking an entry-level role to apply programming skills and contribute
          to real-world projects in a dynamic environment.
        </motion.p>

        <motion.div
          className="hs-btns"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.88 }}
        >
          <a href="https://drive.google.com/file/d/1CgenTNe73eF-oHZ7yBV45m0ePDPfiP8o/view?usp=drive_link"
            target="_blank" rel="noreferrer" className="hs-btn-primary">
            <FaDownload size={13} /> Download Resume
          </a>
          <a href="#projects" className="hs-btn-outline">
            View Projects <FaArrowRight size={13} />
          </a>
        </motion.div>

        <motion.div
          className="hs-socials"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a href="https://github.com/Soumyaaa09" target="_blank" rel="noreferrer" className="hs-social">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/soumyarout048" target="_blank" rel="noreferrer" className="hs-social">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:soumyarout048@gmail.com" className="hs-social">
            <FaEnvelope size={18} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="hs-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ opacity }}
      >
        <div className="hs-scroll-mouse"><div className="hs-scroll-dot" /></div>
        <span>Scroll Down</span>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');

        .hs {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(ellipse 70% 60% at 80% 50%, rgba(88,28,220,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 15% 85%, rgba(37,99,235,0.15) 0%, transparent 55%),
            linear-gradient(160deg, #020617 0%, #04091c 60%, #0f172a 100%);
        }

        .hs-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .s1 {
          background-image: radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px);
          background-size: 90px 90px;
          opacity: 0.1;
          animation: starDrift 90s linear infinite;
        }
        .s2 {
          background-image: radial-gradient(rgba(165,180,252,0.8) 1px, transparent 1px);
          background-size: 160px 160px;
          background-position: 40px 40px;
          opacity: 0.08;
          animation: starDrift 130s linear infinite reverse;
        }
        .s3 {
          background-image: radial-gradient(rgba(196,181,253,0.7) 1px, transparent 1px);
          background-size: 220px 220px;
          background-position: 80px 80px;
          opacity: 0.06;
          animation: starDrift 110s linear infinite;
        }
        @keyframes starDrift {
          from { transform: translateY(0); }
          to   { transform: translateY(-600px); }
        }

        .hs-shoot {
          position: absolute;
          width: 1.5px;
          height: 70px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.95), transparent);
          border-radius: 99px;
          opacity: 0;
        }
        .shoot1 { top: 10%; right: 28%; transform: rotate(35deg); animation: shoot 5s 1s infinite; }
        .shoot2 { top: 22%; right: 52%; transform: rotate(35deg); animation: shoot 7s 3.5s infinite; }
        .shoot3 { top: 6%;  right: 42%; transform: rotate(35deg); animation: shoot 6s 5.5s infinite; }
        .shoot4 { top: 35%; right: 35%; transform: rotate(35deg); animation: shoot 8s 2s infinite; }
        @keyframes shoot {
          0%   { opacity: 0; transform: rotate(35deg) translateY(-40px); }
          8%   { opacity: 1; }
          45%  { opacity: 0; transform: rotate(35deg) translateY(140px); }
          100% { opacity: 0; }
        }

        .hs-planet-wrap {
          position: absolute;
          right: 4%;
          top: 50%;
          transform: translateY(-50%);
          width: 44vw;
          max-width: 520px;
          min-width: 300px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .hs-planet {
          position: relative;
          width: 75%;
          aspect-ratio: 1;
          animation: planetFloat 7s ease-in-out infinite;
        }
        .hs-planet-surface {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle at 32% 30%,
            #9333ea 0%, #7c3aed 18%, #5b21b6 38%, #2e1065 65%, #0d0825 100%
          );
          box-shadow:
            inset -25px -18px 55px rgba(0,0,0,0.65),
            inset 18px 12px 35px rgba(147,51,234,0.35),
            0 0 55px rgba(139,92,246,0.55),
            0 0 110px rgba(139,92,246,0.28),
            0 0 180px rgba(99,102,241,0.15);
          position: relative;
          overflow: hidden;
        }
        .hs-planet-surface::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background-image:
            radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px);
          background-size: 16px 16px, 28px 28px;
          background-position: 0 0, 8px 8px;
          opacity: 0.1;
        }
        .hs-planet-shine {
          position: absolute;
          top: 9%; left: 13%;
          width: 36%; height: 28%;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(255,255,255,0.2) 0%, transparent 70%);
        }
        .hs-planet-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) rotateX(73deg);
          width: 155%;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 2px solid rgba(99,202,246,0.55);
          box-shadow: 0 0 14px rgba(99,202,246,0.35), 0 0 35px rgba(99,202,246,0.18);
        }
        .hs-planet-ring2 {
          width: 143%;
          border-color: rgba(168,85,247,0.3);
          box-shadow: none;
        }
        .hs-planet-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 140%; aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 68%);
          filter: blur(18px);
          animation: glowPulse 4s ease-in-out infinite alternate;
        }
        @keyframes planetFloat {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-16px) rotate(0.8deg); }
        }
        @keyframes glowPulse {
          from { opacity: 0.55; transform: translate(-50%,-50%) scale(1); }
          to   { opacity: 1;   transform: translate(-50%,-50%) scale(1.1); }
        }

        .hs-content {
          position: relative;
          z-index: 2;
          padding-left: 10%;
          padding-right: 52%;
          padding-top: 80px;
          width: 100%;
        }
        .hs-hi {
          font-size: 1.1rem;
          color: #818cf8;
          font-style: italic;
          margin-bottom: 6px;
          letter-spacing: 0.04em;
        }
        .hs-name-block {
          display: flex;
          flex-direction: column;
          line-height: 1.0;
          margin-bottom: 20px;
          gap: 0px;
        }
        .hs-name-white {
          font-size: clamp(1.8rem, 3.5vw, 4.2rem);
          font-weight: 900;
          color: #f1f5f9;
          letter-spacing: -0.03em;
          font-family: 'Syne', sans-serif;
        }
        .hs-name-grad {
          font-size: clamp(1.8rem, 3.5vw, 4.2rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          font-family: 'Syne', sans-serif;
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hs-role {
          display: flex;
          align-items: center;
          gap: 9px;
          padding-left: 14px;
          border-left: 3px solid #6366f1;
          margin-bottom: 16px;
        }
        .hs-role-icon { color: #a5b4fc; font-size: 1rem; }
        .hs-typewriter {
          font-size: 1rem;
          color: #c7d2fe;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        .hs-bio {
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.85;
          max-width: 460px;
          margin-bottom: 28px;
        }
        .hs-btns {
          display: flex;
          gap: 14px;
          margin-bottom: 26px;
          flex-wrap: wrap;
        }
        .hs-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          box-shadow: 0 4px 18px rgba(99,102,241,0.4);
        }
        .hs-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(99,102,241,0.6);
        }
        .hs-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: transparent;
          color: white;
          border: 1.5px solid rgba(255,255,255,0.22);
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          backdrop-filter: blur(6px);
        }
        .hs-btn-outline:hover {
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.05);
          transform: translateY(-3px);
        }
        .hs-socials { display: flex; gap: 12px; }
        .hs-social {
          width: 42px; height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid rgba(255,255,255,0.12);
          border-radius: 9px;
          color: #94a3b8;
          text-decoration: none;
          background: rgba(255,255,255,0.03);
          transition: all 0.3s ease;
        }
        .hs-social:hover {
          border-color: #818cf8;
          color: #818cf8;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(99,102,241,0.3);
          background: rgba(99,102,241,0.08);
        }
        .hs-scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
          color: #475569;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          z-index: 2;
          animation: scrollBounce 2.2s ease-in-out infinite;
        }
        .hs-scroll-mouse {
          width: 22px; height: 34px;
          border: 2px solid rgba(99,102,241,0.5);
          border-radius: 99px;
          display: flex;
          justify-content: center;
          padding-top: 5px;
        }
        .hs-scroll-dot {
          width: 4px; height: 6px;
          background: #6366f1;
          border-radius: 99px;
          animation: dotScroll 2.2s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(5px); }
        }
        @keyframes dotScroll {
          0%   { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }

        @media (max-width: 960px) {
          .hs-content { padding-right: 10%; padding-left: 6%; }
          .hs-planet-wrap { opacity: 0.2; right: -10%; width: 50vw; }
          .hs-bio { max-width: 100%; }
        }
        @media (max-width: 600px) {
          .hs-planet-wrap { display: none; }
          .hs-content { padding: 90px 5% 0; }
          .hs-name-white, .hs-name-grad { font-size: clamp(1.6rem, 8vw, 2.5rem); }
        }
      `}</style>
    </section>
  );
}

export default Hero;