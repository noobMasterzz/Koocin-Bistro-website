import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/Koocina Bistro logo.jpg" alt="Koocina Bistro" className="logo" />
        </Link>
      </div>
      
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/menu" className="nav-link" onClick={closeMenu}>Menu</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
        <Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar; 