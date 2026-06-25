import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navClass = (path) => (isActive(path) ? "active" : "");

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src="/elva-logo.svg" alt="ELVA" className="logo-img" />
        <span className="logo-text">ELVA</span>
      </Link>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" className={navClass("/")} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/services" className={navClass("/services")} onClick={closeMenu}>Services</Link></li>
        <li><Link to="/industries" className={navClass("/industries")} onClick={closeMenu}>Industries</Link></li>
        <li><Link to="/portfolio" className={navClass("/portfolio")} onClick={closeMenu}>Portfolio</Link></li>
        <li><Link to="/pricing" className={navClass("/pricing")} onClick={closeMenu}>Pricing</Link></li>
        <li><Link to="/about" className={navClass("/about")} onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/contact" className={navClass("/contact")} onClick={closeMenu}>Contact Us</Link></li>
      </ul>

      <Link to="/contact" className="nav-cta" onClick={closeMenu}>
        Get Started
      </Link>

      <button
        type="button"
        className="menu-icon"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
