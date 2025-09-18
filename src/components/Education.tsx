import { FaGraduationCap, FaMapMarkerAlt, FaRegCalendar } from "react-icons/fa";
import "./Education.css";

const educationItems = [
  {
    institution: "Université du Québec à Montréal",
    degree: "B.Sc. in Computer Science",
    location: "Montreal, Canada",
    timeframe: "2023 - 2026 (expected)",
  },
  {
    institution: "Vanier College",
    degree: "DEC in Commerce",
    location: "Montreal, Canada",
    timeframe: "2020 - 2022",
  },
] as const;

function Education() {
  return (
    <section id="education" className="education">
      <div className="education__inner">
        <h2 className="education__title">Education</h2>
        <div className="education__list">
          {educationItems.map(({ institution, degree, location, timeframe }) => (
            <article className="education-card" key={institution}>
              <div className="education-card__icon">
                <FaGraduationCap aria-hidden="true" />
              </div>

              <div className="education-card__body">
                <h3 className="education-card__institution">{institution}</h3>
                <p className="education-card__degree">{degree}</p>
                <div className="education-card__meta">
                  <span className="education-card__meta-item">
                    <FaMapMarkerAlt aria-hidden="true" />
                    {location}
                  </span>
                  <span className="education-card__meta-item">
                    <FaRegCalendar aria-hidden="true" />
                    {timeframe}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;