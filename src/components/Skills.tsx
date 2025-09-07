import { useEffect, useState } from "react";
import "./Skills.css";

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
  const [target, setTarget] = useState(0);
  const [, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(-angle / 2);
  const [duration, setDuration] = useState(1);
  const [items, setItems] = useState<string[]>(catArray[0][1].items);
  const [loading, setLoading] = useState(false);

  function getSkillsByCategory(cat: Category) {
    return Promise.resolve(categories[cat]?.items ?? []);
  }

  const spinTo = (idx: number) => {
    const rounds = Math.floor(Math.random() * 3) + 2; // at least 2 full spins
    setDuration(1 + rounds * 0.5);
    setRotation(-idx * angle - angle / 2 - rounds * 360);
    setTarget(idx);
    setSpinning(true);
  };

  const handleSelect = (idx: number) => {
    spinTo(idx);
  };

  const randomSelect = () => {
    spinTo(Math.floor(Math.random() * catArray.length));
  };

  // fetch skills whenever selected changes
  useEffect(() => {
    setLoading(true);
    getSkillsByCategory(catArray[selected][0])
      .then((res) => setItems(res))
      .finally(() => setLoading(false));
  }, [selected, catArray]);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="discover-color">
          <h4>
          Discover my skills by <span>category</span>
          </h4>
          <div className="color-picker-container">
            <div
              className="pointer"
              style={{ borderTopColor: catArray[selected][1].color }}
            />
            <div className="color-picker-center" />
            <svg
              className="color-picker"
              viewBox="0 0 200 200"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: `transform ${duration}s ease-out`,
              }}
              onTransitionEnd={() => {
                setSelected(target);
                setSpinning(false);
              }}
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
                    onClick={() => handleSelect(idx)}
                  />
                );
              })}
            </svg>
          </div>
          <div className="label">
            {catArray.map(([cat, data], idx) => (
              <span
                key={cat}
                className={`label__text${idx === selected ? " label__text--active" : ""}`}
                style={{ color: data.color }}
                onClick={() => handleSelect(idx)}
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
           {loading ? (
            <p className="skill-details__loading">Loading...</p>
          ) : items.length === 0 ? (
            <p className="skill-details__empty">No skills listed.</p>
          ) : (
            <ol className="skill-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;