import "../App.css";
import flower1 from "../assets/Hibiscus.svg";
import flower2 from "../assets/Orchid.svg";
import flower3 from "../assets/Flower.svg";

function Home() {
  return (
    <section className="hero-container" id="home">
      <div className="hero-text">
        <h1>Hi, I’m Setayesh! <span className="wave">👋</span></h1>
        <p>
          I’m a passionate Computer Science student with a love for problem-solving,
          coding, and building things that make a difference. Whether it’s developing
          sleek web applications, diving into the world of AI, or exploring game
          development, I’m always excited to learn and create.
        </p>
        <p>
          Currently, I’m on the lookout for a <strong>stage (internship)</strong> where
          I can apply my skills, grow as a developer, and contribute to meaningful
          projects. If you’re looking for someone who’s curious, dedicated, and always
          ready to take on a challenge — let’s connect!
        </p>
      </div>
      <div className="hero-flowers">
        <img src={flower1} alt="flower1" className="flower flower1" />
        <img src={flower2} alt="flower2" className="flower flower2" />
        <img src={flower3} alt="flower3" className="flower flower3" />
      </div>
    </section>
  );
}

export default Home;
