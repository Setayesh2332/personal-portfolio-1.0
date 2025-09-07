import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
    <footer className="footer">
      <div className="footer-socials social-icons">
        <a
          href="https://www.linkedin.com/in/setayesh-abbasi-moghadam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://github.com/Setayesh2332"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <a href="mailto:abbasimoghadam222@gmail.com">
          <FaEnvelope size={28} />
        </a>
      </div>

      <nav className="footer-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="#cv">Resume</a>
      </nav>

      <p className="footer-note">Made with ❤️ and ☕ by Setayesh A.M.</p>
      <p className="footer-help">
        Need something? → <a href="#contact">Contact Me</a>
      </p>
      <p className="footer-copy">© 2025 Setayesh Abbasi M.</p>
    </footer>
  );
}

export default Footer;
  