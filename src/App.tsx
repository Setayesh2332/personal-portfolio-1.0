import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
