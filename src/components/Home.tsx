import "./Home.css";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1 className="hero__heading">
          Hi my name is <span className="hero__name">Setayesh</span>
          <br />
          and ...
        </h1>
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
