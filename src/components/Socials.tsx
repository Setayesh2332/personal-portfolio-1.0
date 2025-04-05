import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Socials() {
  return (
    <section id="socials" className="socials-section">
      <h2>Socials</h2>
      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope size={40} />
        </a>
      </div>
    </section>
  );
}

export default Socials;
