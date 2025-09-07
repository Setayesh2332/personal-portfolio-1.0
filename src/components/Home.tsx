import "./Home.css";
import { useEffect, useState } from "react";
 
function Home() {
  const letters = ["S", "E", "T", "A", "Y", "E", "S", "H"];
  const phrases = ["am amazing", "love to code", "am looking for a stage"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases.length]);

   return (
    <section className="hero-container doodle-hero" id="home">
      <div className="doodle-squares">
        <div className="doodle-square square1"></div>
        <div className="doodle-square square2"></div>
        <div className="doodle-square square3"></div>
        <div className="doodle-square square4"></div>
        <div className="doodle-square square5"></div>
        <div className="doodle-square square6"></div>
        <div className="doodle-square square7"></div>
        <div className="doodle-square square8"></div>
        <div className="doodle-square square9"></div>
      </div>
      <div className="google-doodle-name">
        {letters.map((letter, idx) => (
          <span key={idx} className="google-letter">
            {letter}
          </span>
        ))}
       </div>
      <p className="intro-text">
        Hi my name is Setayesh and I <br />
        <span className="rotating-text">{phrases[index]}</span>
      </p>
    </section>
  );
}

export default Home;
