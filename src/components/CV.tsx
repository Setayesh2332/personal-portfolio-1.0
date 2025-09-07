import cvPreview from "../assets/portfolio.png";
import "./CV.css";

function CV() {
  return (
    <section id="cv" className="cv-section">
      <div className="cv-card">
        <div className="cv-image-wrapper">
          <img src={cvPreview} alt="Preview of CV" className="cv-image" />
        </div>
        <div className="cv-content">
          <h2>Explore my CV</h2>
          <p>Discover my skills, education, and experience in detail.</p>
          <a
            href="/CV-Setayesh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-view-btn"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default CV;
  