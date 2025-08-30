import { useState } from "react";

const skills: Record<string, string[]> = {
  Languages: ["JavaScript", "Python", "Java", "HTML5", "CSS3"],
  Frameworks: ["React"],
  Tools: ["Git", "Figma"],
  Others: ["Problem Solving", "Teamwork"],
};
const segments = [
  { cat: "Tools", color: "red" },
  { cat: "Tools", color: "red" },
  { cat: "Languages", color: "yellow" },
  { cat: "Languages", color: "yellow" },
  { cat: "Frameworks", color: "blue" },
  { cat: "Frameworks", color: "blue" },
  { cat: "Others", color: "white" },
  { cat: "Others", color: "white" },
];

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
  const [rotation, setRotation] = useState(0);
  
  const spinWheel = () => setRotation((r) => r + 360);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="wheel-wrapper">
          <svg
            viewBox="0 0 200 200"
            className="skill-wheel"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
             {segments.map((seg, index) => {
              const start = index * 45;
              const end = start + 45;
              const d = describeArc(100, 100, 100, start, end);
              return (
                <path key={index} d={d} className={`wheel-segment ${seg.color}`} />
              );
            })}
          </svg>
          <button className="surprise-button" onClick={spinWheel}>
            Spin
          </button>
        </div>
           <div className="skill-details">
          <h3>My Skills</h3>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4>{category}</h4>
              <ol className="skill-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
  