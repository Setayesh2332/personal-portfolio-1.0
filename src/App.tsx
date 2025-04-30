import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
<<<<<<< HEAD
import Skills from "./components/Skills"; 
=======
import Skills from "./components/Skills"; //*here */
>>>>>>> fe71001 (Update App.tsx)
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Socials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
