import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef(null);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setDarkMode(!darkMode);
  };

  // ✅ Close menu when clicking outside
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
        <a href="#home" className="brand">Setayesh</a>

        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#socials">Socials</a></li>
            <li>
              <button className="theme-btn" onClick={toggleTheme}>
                {darkMode ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </li>
            <li>
              <a href="/CV-Setayesh.pdf" target="_blank" className="cv-btn" rel="noopener noreferrer">
                Download CV
              </a>
            </li>
          </ul>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* ✅ Dropdown mobile menu */}
      {menuOpen && (
        <div className="mobile-dropdown-menu" ref={menuRef}>
          <ul className="mobile-full-links">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#project" onClick={() => setMenuOpen(false)}>Project</a></li>
            <li><a href="#socials" onClick={() => setMenuOpen(false)}>Socials</a></li>
          </ul>

          <div className="mobile-full-footer">
            <button onClick={toggleTheme}>
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a href="/Seta_CV.pdf" target="_blank" className="cv-btn-mobile" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
