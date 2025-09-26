import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const fullText =
    "I'm Setayesh. I turn ideas into code and occasionally the code turns out exactly like I imagined.";
  const highlightWord = "Setayesh";

  const highlightStart = fullText.indexOf(highlightWord);
  const highlightEnd = highlightStart >= 0 ? highlightStart + highlightWord.length : highlightStart;

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDisplayText((current) => {
        if (current.length >= fullText.length) {
          window.clearInterval(interval);
          return current;
        }

        const nextLength = current.length + 1;
        return fullText.slice(0, nextLength);
      });
    }, 40);

    return () => {
      window.clearInterval(interval);
    };
  }, [fullText]);

  const beforeHighlight =
    highlightStart >= 0
      ? displayText.slice(0, Math.min(displayText.length, highlightStart))
      : displayText;
  const highlightText =
    highlightStart >= 0
      ? displayText.slice(
          Math.min(displayText.length, highlightStart),
          Math.min(displayText.length, highlightEnd),
        )
      : "";
  const afterHighlight =
    highlightStart >= 0
      ? displayText.slice(Math.min(displayText.length, highlightEnd))
      : "";

  const isTypingComplete = displayText.length === fullText.length;
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1 className="hero__heading">Hi there!</h1>
        <h2 aria-label={fullText} aria-live="polite" className="hero__typed-line">
          <span>{beforeHighlight}</span>
          {highlightText && <span className="hero__highlight">{highlightText}</span>}
          <span>{afterHighlight}</span>
          <span
            aria-hidden="true"
            className={`hero__cursor${isTypingComplete ? " hero__cursor--idle" : ""}`}
          />
        </h2>
        <div className="hero__actions">
          <a
            className="hero__cta"
            href="/CV-Setayesh.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download my CV
          </a>
        </div>
      </div>
      <div className="hero__image">
        <img src="/roseline.png" alt="Single line illustration of a rose" />
      </div>
    </section>
  );
}

export default Home;
