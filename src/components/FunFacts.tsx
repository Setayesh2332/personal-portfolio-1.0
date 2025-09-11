import { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import "./FunFacts.css";

function FunFacts() {
  const facts = [
    "You’re taller in the morning by ~1–2 cm; your spine compresses during the day.",
    "Your stomach gets a new lining every few days so it doesn’t digest itself.",
    "Your brain runs on ~20 watts—about a dim light bulb—yet out-thinks supercomputers at pattern stuff.",
    "If you unraveled your DNA, it’d stretch from Earth to the Sun and back… several times.",
    "You have more microbial cells on/inside you than human cells (by count, not by mass).",
    "Your blood vessels, end to end, would wrap Earth about twice (~100,000 km).",
    "Bones are stronger than steel by weight; they’re just more flexible (and fix themselves!).",
    "Your nose can distinguish over a trillion scents, even if we can’t name most of them.",
    "You’ve already been a star: most atoms in you were forged in ancient supernovae.",
    "You shed ~0.5 kg of skin a year; a good slice of household dust is you-glitter.",
    "Earth’s core is as hot as the Sun’s surface (~5,500°C).",
    "Lightning is hotter than the Sun’s surface (up to ~30,000°C) and strikes Earth ~8 million times a day.",
    "A day is getting longer: tidal tug adds ~1.7 milliseconds per century.",
    "Mount Everest grows a few millimeters each year (plates don’t stop).",
    "There are more trees on Earth (~3 trillion) than stars in the Milky Way.",
    "Honey basically never spoils; 3,000-year-old honey is still edible.",
    "Bananas are slightly radioactive (potassium-40). So are you.",
    "Wombats poop cubes; nature said “perfect stackables.",
    "Octopuses have three hearts and blue blood.",
    "Tardigrades can survive in space, vacuum, and radiation like tiny plush tanks.",
    "The Sun’s photons take ~8 minutes to reach us—but may wander inside the Sun for ~100,000+ years first.",
    "The Moon is drifting away ~3.8 cm per year; ancient days were shorter.",
    "Venus has a day (noon to noon) longer than its year: ~243 vs ~225 Earth days.",
    "Saturn would float in a bathtub… if you had a planet-sized tub.",
    "A teaspoon of neutron-star matter would weigh billions of tons on Earth.",
    "The ISS circles Earth about every 90 minutes; astronauts see ~16 sunrises a day.",
    "The observable universe likely holds ~2 trillion galaxies. That’s galaxies, not stars.",
    "Andromeda is on a slow-motion collision course with the Milky Way (~4 billion years).",
    "There are more possible shuffles of a deck of cards than atoms on Earth.",
    "If you could fold paper 42 times, it’d reach the Moon (exponentials are wild).",
    "Koala fingerprints can fool crime labs—they’re eerily human-like.",
    "Sharks are older than trees (sharks ~400M years, trees ~360M).",
    "Cleopatra lived closer to the Moon landing than to the building of the Great Pyramid.",
    "Rain’s smell (petrichor) comes from plant oils + soil bacteria “geosmin.”",
    "Birds are living dinosaurs; your city pigeons are tiny thunder-lizards with crumbs.",
    "Every two people share a birthday with ~50% odds in a group of just 23 (birthday paradox).",
  ];

  const [index, setIndex] = useState(0);
  const letters = ["S", "E", "T", "A", "Y", "E", "S", "H"];

  const nextFact = () => setIndex((i) => i + 1);
  const resetFacts = () => setIndex(0);

  return (
    <section id="funfacts" className="funfacts-hero">
      <div className="funfacts-name">
        {letters.map((letter, idx) => (
          <span key={idx} className="painted-letter">
            {letter}
          </span>
        ))}
      </div>

      {index < facts.length ? (
        <div className="fact-card" role="region" aria-live="polite">
          <h3 className="fact-title">Did you know?</h3>
          <p>{facts[index]}</p>
          <button onClick={nextFact} className="next-btn">
            Next
          </button>
        </div>
      ) : (
       <button
          onClick={resetFacts}
          className="reminder-btn"
          aria-label="Need reminder"
        >
          <FiRefreshCw size={24} />
      </button>
      )}
    </section>
  );
}

export default FunFacts;