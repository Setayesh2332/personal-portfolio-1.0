import { useState } from "react";
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

type Skill = {
  name: string;
  Icon: React.ComponentType<{ size?: number }>;
  blurb: string;
};

const skillData: Record<string, Skill[]> = {
  Languages: [
    { name: "JavaScript", Icon: SiJavascript, blurb: "Used in many web apps" },
    { name: "Python", Icon: SiPython, blurb: "Great for scripts" },
    { name: "Java", Icon: FaJava, blurb: "OOP strong" },
    { name: "HTML5", Icon: SiHtml5, blurb: "Markup master" },
    { name: "CSS3", Icon: SiCss3, blurb: "Styling wizard" },
  ],
  Frameworks: [{ name: "React", Icon: SiReact, blurb: "Frontend magic ✨" }],
  Tools: [
    { name: "Git", Icon: SiGit, blurb: "Version control" },
    { name: "Figma", Icon: SiFigma, blurb: "Design drafts" },
  ],
};

const categories = Object.keys(skillData);

const describeArc = (
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) => {
  const polarToCartesian = (
    cx: number,
    cy: number,
    r: number,
    angle: number
  ) => {
    const rad = ((angle - 90) * Math.PI) / 180.0;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M",
    x,
    y,
    "L",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    "Z",
  ].join(" ");
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Languages");
  const [rotation, setRotation] = useState(0);

  const handleCategoryClick = (cat: string) => setActiveCategory(cat);

  const handleSurprise = () => {
    const cats = categories;
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    setActiveCategory(randomCat);
    setRotation((r) => r + 720); // spin twice
  };

  return (
    <section id="skills" className="skills-section">
      <h1>Technical Skills</h1>
      <div className="skills-container">
        <div className="wheel-wrapper">
          <svg
            viewBox="0 0 200 200"
            className="skill-wheel"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {categories.map((cat, index) => {
              const start = index * 120;
              const end = start + 120;
              const d = describeArc(100, 100, 100, start, end);
              return (
                <path
                  key={cat}
                  d={d}
                  className={
                    "wheel-segment" +
                    (activeCategory === cat ? " active" : "")
                  }
                  data-cat={cat}
                  onClick={() => handleCategoryClick(cat)}
                />
              );
            })}
          </svg>
          <button className="surprise-button" onClick={handleSurprise}>
            Surprise Me ✨
          </button>
        </div>
          <div className="skill-details">
          <h3>{activeCategory}</h3>
          <div className="icon-grid">
            {skillData[activeCategory].map((skill) => (
              <div
                key={skill.name}
                className="icon-card"
                title={`Used in ${skill.blurb}`}
              >
                <skill.Icon size={48} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          <a href="#projects" className="projects-link">
            See Projects with this Skill
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
  