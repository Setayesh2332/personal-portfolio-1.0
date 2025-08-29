import { useState } from "react";

function FunFacts() {
  const facts = [
    "Multilingual Explorer: You speak English, French, Persian, some Arabic, and Spanish — a rare mix that surprises people when they find out.",
    "Hackathon Spirit: You’ve already participated in a Morgan Stanley hackathon, building a site for women in need (Le Chaînon). Not many students dive into real-world coding that early.",
    "Running Club Vibes: You’re part of a run club, balancing student life with fitness. You even create fun captions and stories about your runs.",
    "Creative Techie: Besides coding, you design doodles, logos, and even Nowruz stamp concepts of your name “Setayesh.” A mix of art + tech isn’t something most people expect.",
    "Organized & Stubborn (in a good way): You’re the type who makes Excel sheets to track weight loss and homework, and your stubbornness helps you stick to long-term goals.",
  ];

  const [index, setIndex] = useState(0);
  const letters = ["S", "E", "T", "A", "Y", "E", "S", "H"];

  const nextFact = () => setIndex((i) => i + 1);
  const resetFacts = () => setIndex(0);

  return (
    <section id="funfacts" className="funfacts-hero">
      <div className="google-doodle-name funfacts-name">
        {letters.map((letter, idx) => (
          <span key={idx} className="google-letter">
            {letter}
          </span>
        ))}
      </div>

      {index < facts.length ? (
        <div className="fact-card" role="region" aria-live="polite">
          <p>{facts[index]}</p>
          <button onClick={nextFact} className="next-btn">
            Next
          </button>
        </div>
      ) : (
        <button onClick={resetFacts} className="reminder-btn">
          Need reminder :)
        </button>
      )}
    </section>
  );
}

export default FunFacts;