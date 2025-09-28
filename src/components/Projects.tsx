import Portfolio from "../assets/portfolio.png";
import Sentient from "../assets/AI-sentient.png";
import Chainon from "../assets/Chainon.png";
import "./Projects.css";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  figmaLink?: string;
};
const projects: Project[] = [
  {
    title: "Sentient(Ongoing)",
    description:
      "An AI-powered assistant demo with integrated NLP and live querying capabilities.",
    image: Sentient,
    tech: ["React", "Next.js", "TypeScript", "Figma", "Git"],
    link: "https://sentient-app.netlify.app/",
    figmaLink:
      "https://www.figma.com/design/CVe75JV86Pdk19oU68ar1l/Untitled?node-id=0-1&t=BIpQ4D0xKzz3zIbb-0",
  },
  {
    title: "Nimbus",
    description:
      "Weather app.",
    image: Sentient,
    tech: ["React", "Next.js", "TypeScript", "Figma", "Git"],
    link: "https://nimbus0.netlify.app/",
    figmaLink:
      "https://www.figma.com/design/8EpdFpSw2hoCDvjFBa17N6/Untitled?node-id=0-1&p=f&t=D6fN06dwoJffsEo0-0",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio showcasing projects, skills, and contact info.",
    image: Portfolio,
    tech: ["React", "Next.js", "TypeScript", "Figma", "CSS", "Git"],
    link: "https://setayesh.netlify.app/",
  },
  {
    title: "Le Chainon",
    description:
      "A website designed to support women in need and promote social outreach.",
    image: Chainon,
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
    link: "#",
  },
];
function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__list">
          {projects.map((project) => (
            <article className="projects-card" key={project.title}>
              <div className="projects-card__media">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projects-card__content">
                <h3 className="projects-card__heading">{project.title}</h3>
                <p className="projects-card__description">{project.description}</p>
                <div className="projects-card__tags">
                  {project.tech.map((tech) => (
                    <span className="projects-card__tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="projects-card__actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-card__link"
                    aria-label={`Open ${project.title} project in a new tab`}
                  >
                    View project ↗
                  </a>
                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects-card__link projects-card__link--secondary"
                      aria-label={`Open ${project.title} design in Figma`}
                    >
                      Figma file ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        </div>
    </section>
  );
}

export default Projects;