import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaPaperPlane, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-logo">
          <a href="#" style={{ textDecoration: "none", color: "var(--text)" }}>
            Portfolio <span className="logo-tag">&lt;/&gt;</span>
          </a>
        </div>

        <ul className="nav-links">
          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="nav-link">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a
            href="https://www.linkedin.com/in/soumyarout048"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Let's Connect <FaPaperPlane size={12} />
          </a>

          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
          </button>


          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="mobile-links">
              {["about", "skills", "projects", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://www.linkedin.com/in/soumyarout048"
              target="_blank"
              rel="noreferrer"
              className="mobile-cta"
              onClick={() => setMobileOpen(false)}
            >
              Let's Connect <FaPaperPlane size={12} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 10%;
          background: var(--nav-bg);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--card-border);
          transition: all 0.3s ease;
        }
        .navbar-scrolled {
          padding: 16px 10%;
          background: var(--nav-scrolled);
          border-bottom-color: var(--card-border);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        
        .theme-toggle-btn {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .theme-toggle-btn:hover {
          background: var(--bg-card);
          border-color: var(--primary);
          color: var(--primary);
        }

        /* Logo */
        .nav-logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--title);
          letter-spacing: -0.02em;
          cursor: pointer;
        }
        .logo-tag {
          color: #4f46e5;
          font-weight: 400;
          font-size: 1.2rem;
        }

        /* Links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link {
          position: relative;
          text-decoration: none;
          color: var(--muted);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 6px;
          letter-spacing: 0.02em;
          transition: color 0.25s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 14px;
          right: 14px;
          height: 2px;
          background: linear-gradient(90deg, #4f46e5, #6366f1);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }
        .nav-link:hover {
          color: var(--title);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* CTA Button */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          color: white;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          background: #4f46e5;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .nav-cta:hover {
          background: #4338ca;
          border-color: #818cf8;
          box-shadow: 0 0 18px rgba(79,70,229, 0.35);
          transform: translateY(-1px);
        }

        .nav-hamburger {
          display: none;
          background: transparent;
          border: none;
          color: var(--title);
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
        }
        .nav-hamburger:hover {
          background: var(--card-border);
        }

        .mobile-menu {
          position: fixed;
          top: 72px;
          left: 5%;
          right: 5%;
          z-index: 999;
          background: var(--nav-scrolled);
          border: 1px solid rgba(129, 140, 248, 0.3);
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .mobile-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-link {
          text-decoration: none;
          color: var(--muted);
          font-size: 1.05rem;
          font-weight: 600;
          display: block;
          padding: 10px 14px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .mobile-link:hover {
          background: rgba(79,70,229, 0.15);
          color: #4f46e5;
        }
        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 10px;
          background: linear-gradient(135deg, #4f46e5, #4338ca);
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          box-shadow: 0 4px 15px rgba(79,70,229, 0.4);
        }

        @media (max-width: 768px) {
          .navbar { padding: 16px 5%; }
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .nav-hamburger { display: flex; align-items: center; justify-content: center; }
        }
      `}</style>
    </>
  );
}

export default Navbar;