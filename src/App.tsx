import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import FunFacts from "./components/FunFacts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <CV />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
