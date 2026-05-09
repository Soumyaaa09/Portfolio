import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3>SOUMYA RANJAN ROUT</h3>

      <p>Aspiring Cloud Engineer & Full Stack Developer</p>

      <div className="footer-icons">
        <a
          href="https://github.com/Soumyaaa09"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/soumyarout048"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="copyright">
        © 2026 Soumya Ranjan Rout. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;