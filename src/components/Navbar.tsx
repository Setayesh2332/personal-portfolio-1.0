import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef(null);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.body.classList.add("dark-theme");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    
    if (newDarkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
    
    setDarkMode(newDarkMode);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="custom-navbar">
        <Link
          to="/"
          className="brand"
          aria-label="Back to home"
          onClick={() => setMenuOpen(false)}
        >
          S.A.M.
        </Link>

        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li className="nav-links__cta">
              <a
                href="/CV-Setayesh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cv-btn"
              >
                Download CV
              </a>
            </li>
            <li className="nav-links__theme">
              <button 
                className="theme-btn" 
                onClick={toggleTheme}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </li>
          </ul>

          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Dropdown mobile menu */}
      {menuOpen && (
        <div className="mobile-dropdown-menu" ref={menuRef}>
          <ul className="mobile-full-links">
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>

          <div className="mobile-full-footer">
            <button 
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href="/CV-Setayesh.pdf"
              target="_blank"
              className="cv-btn-mobile"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;