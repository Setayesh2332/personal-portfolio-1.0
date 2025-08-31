import { useState } from "react";

type Category = "Languages" | "Frameworks" | "Tools" | "Others";

const categories: Record<Category, { color: string; items: string[] }> = {
  Languages: {
    color: "#2E42D1",
    items: ["JavaScript", "Python", "Java", "HTML5", "CSS3"],
  },
  Frameworks: { color: "#CA3BE2", items: ["React"] },
  Tools: { color: "#29B571", items: ["Git", "Figma"] },
  Others: { color: "#FF701F", items: ["Problem Solving", "Teamwork"] },
};

const describeArc = (
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number
) => {
  const polarToCartesian = (
    centerX: number,
    centerY: number,
    r: number,
    angleInDegrees: number
  ) => {
   const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + r * Math.cos(angleInRadians),
      y: centerY + r * Math.sin(angleInRadians),
    };
  };

  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M",
    cx,
    cy,
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
  const catArray = Object.entries(categories) as [
    Category,
    { color: string; items: string[] }
  ][];
  const angle = 360 / catArray.length;
  const [selected, setSelected] = useState(0);

  const randomSelect = () => {
    setSelected(Math.floor(Math.random() * catArray.length));
  };

  return (
    <section id="skills" className="skills-section">
      <h2>
        Discover my skills by <span>category</span>
      </h2>
      <div className="skills-container">
        <div className="discover-color">
          <div className="pointer" />
          <div className="color-picker-container">
            <div className="color-picker-center" />
            <svg
              className="color-picker"
              viewBox="0 0 200 200"
              style={{ transform: `rotate(${-selected * angle}deg)` }}
            >
              {catArray.map(([cat, data], idx) => {
                const start = idx * angle;
                const end = start + angle;
                const d = describeArc(100, 100, 100, start, end);
                return (
                  <path
                    key={cat}
                    d={d}
                    style={{ fill: data.color, stroke: "black" }}
                    onClick={() => setSelected(idx)}
                  />
                );
              })}
            </svg>
          </div>
          <div className="label">
            {catArray.map(([cat, data], idx) => (
              <span
                key={cat}
                className="label__text"
                style={{ color: data.color }}
                onClick={() => setSelected(idx)}
              >
                {cat}
              </span>
            ))}
          </div>
          <button className="surprise-button" onClick={randomSelect}>
            Surprise me
          </button>
        </div>
        <div className="skill-details">
          <h3>{catArray[selected][0]}</h3>
          <ol className="skill-list">
            {catArray[selected][1].items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Skills;