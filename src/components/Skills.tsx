import "./Skills.css";

const skillCategories = [
  {
    title: "Languages",
    items: [
      "Java",
      "Python",
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Bash/Shell",
    ],
  },
  {
    title: "Tools & Frameworks",
    items: ["Git", "VS Code", "React", "Figma", "IntelliJ"],
  },
  {
    title: "Database",
    items: ["PostgreSQL"],
  },
] as const;

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <h2 className="skills__title">Skills</h2>
        <div className="skills__grid">
          {skillCategories.map(({ title, items }, index) => (
            <article
              key={title}
              className={`skills-card${index === 0 ? " skills-card--featured" : ""}`}
            ><h3 className="skills-card__title">{title}</h3>
              <ul className="skills-card__list">
                {items.map((item) => (
                  <li className="skills-card__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
  }

export default Skills;