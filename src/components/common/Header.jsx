import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MelanieLogo from '../../assets/MelanieLogo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-5 ${scrolled ? 'scrolled-header' : ''}`}>
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={MelanieLogo} alt="Melanie Logo" className="melanie-logo" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-[#ffea00] uppercase text-lg font-medium hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-[#ffea00] uppercase text-lg font-medium hover:text-white transition-colors">
            About US
          </Link>
          <Link to="/products" className="text-[#ffea00] uppercase text-lg font-medium hover:text-white transition-colors">
            Our product
          </Link>
          <Link to="/contact" className="text-[#ffea00] uppercase text-lg font-medium hover:text-white transition-colors">
            Contact us
          </Link>
        </nav>
        <button className="md:hidden text-[#ffea00]" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Backdrop */}
      {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
      {/* Mobile Menu */}
      <nav className={`mobile-menu${menuOpen ? ' active' : ''}`}> 
        <button className="close-menu-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
        <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link className="nav-link" to="/products" onClick={() => setMenuOpen(false)}>Our Product</Link>
        <Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;