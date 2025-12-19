import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import UQAMarketplace from "./pages/UQAMarketplace";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Home />
              <Skills />
              <Projects />
              <Education />
              <Contact />
              <Footer />
            </main>
          }
        />

        <Route
          path="/projects/uqamarketplace"
          element={<UQAMarketplace />}
        />
      </Routes>
    </>
  );
}

export default App;
