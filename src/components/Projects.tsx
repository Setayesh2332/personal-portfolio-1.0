import { useRef } from 'react';
import Portfolio from '../assets/portfolio.png';
import Sentient from '../assets/AI-sentient.png';
import Chainon from '../assets/Chainon.png';

function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive personal portfolio showcasing projects, skills, and contact info.",
      image: Portfolio,
      tech: ["React", "Next.js", "Typescript","Figma", "CSS", "Git"],
      link: "https://setayesh.netlify.app/"
    },
    {
      title: "Sentient",
      description: "An AI-powered assistant demo with integrated NLP and live querying capabilities.",
      image: Sentient,
      tech: ["React", "Next.js", "Typescript", "Figma", "Git"],
      link: "https://sentient-app.netlify.app/",
      figmaLink: "https://www.figma.com/design/CVe75JV86Pdk19oU68ar1l/Untitled?node-id=0-1&t=BIpQ4D0xKzz3zIbb-0"
    },
    {
      title: "Le Chainon",
      description: "A website designed to support women in need and promote social outreach.",
      image: Chainon,
      tech: ["React", "Next.js", "Typescript", "Tailwindcss", "Git"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <p className="discover-more" aria-label="discover more projects">
        <span aria-hidden="true">✨</span> Discover more projects
      </p>
      <h2 className="projects-title">Latest projects from Setayesh</h2>

      <div className="projects-scroll">
        <button
          className="scroll-button prev"
          aria-label="previous project"
          onClick={() => handleScroll('left')}
        >
          &#8249;
        </button>
        <div className="projects-grid" ref={scrollRef}>
          {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-details">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-tags">
                {proj.tech.map((tech, i) => (
                  <span className="tag" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="external-link">
                  ↗
                </a>
                {proj.figmaLink && (
                  <a href={proj.figmaLink} target="_blank" rel="noopener noreferrer" className="external-link figma-link">
                   (Figma)
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        </div>
        <button
          className="scroll-button next"
          aria-label="next project"
          onClick={() => handleScroll('right')}
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default Projects;