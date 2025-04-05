import {
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiReact,
    SiGit,
    SiFigma,
  } from "react-icons/si";
  import { FaJava } from "react-icons/fa";
  
  const Skills = () => {
    return (
      <section id="skills" className="skills-section">
        <h1>Technical Skills</h1>
  
        {/* LANGUAGES */}
        <h3 className="skills-subtitle">Languages</h3>
        <div className="skills-grid">
          <div className="skill">
            <SiJavascript size={40} />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <SiPython size={40} />
            <span>Python</span>
          </div>
          <div className="skill">
            <FaJava size={40} />
            <span>Java</span>
          </div>
          <div className="skill">
            <SiHtml5 size={40} />
            <span>HTML5</span>
          </div>
          <div className="skill">
            <SiCss3 size={40} />
            <span>CSS3</span>
          </div>
        </div>
  
        {/* FRAMEWORKS */}
        <h3 className="skills-subtitle">Frameworks</h3>
        <div className="skills-grid">
          <div className="skill">
            <SiReact size={40} />
            <span>React</span>
          </div>
        </div>
  
        {/* TOOLS */}
        <h3 className="skills-subtitle">Tools</h3>
        <div className="skills-grid">
          <div className="skill">
            <SiGit size={40} />
            <span>Git</span>
          </div>
          <div className="skill">
            <SiFigma size={40} />
            <span>Figma</span>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  