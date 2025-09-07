import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Socials.css";

function Socials() {
  return (
    <section id="socials" className="socials-section">
      <h2>Socials</h2>
      <div className="social-icons">
        <a href="https://github.com/Setayesh2332" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/setayesh-abbasi-moghadam/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="mailto:abbasimoghadam222@gmail.com">
          <FaEnvelope size={40} />
        </a>
      </div>
    </section>
  );
}

export default Socials;
