import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand / About */}
          <div className="footer-section">
            <h3 className="footer-title">Setayesh A.M.</h3>
            <p className="footer-description">
              Computer Science student building clean, user-friendly web experiences.
              Let’s connect!
            </p>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/setayesh-abbasi-moghadam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/Setayesh2332"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a href="mailto:abbasimoghadam222@gmail.com" aria-label="Email">
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>

          {/* More */}
          <div className="footer-section">
            <h4 className="footer-heading">More</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#cv">Resume</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="footer-section">
            <h4 className="footer-heading">Say hi</h4>
            <p className="footer-description">
              Need something or want to collaborate?
            </p>
            <a className="footer-cta" href="#contact">
              Contact Me →
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Setayesh Abbasi M.
          </p>

          <div className="footer-legal">
            <a href="#contact">Support</a>
            <span className="footer-separator">•</span>
            <a href="#home">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
