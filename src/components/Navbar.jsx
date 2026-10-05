import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    'About TIS',
    'Academics',
    'Boarding Life',
    'Beyond Academics',
    'Events',
    'Admission',
    'Mandatory Disclosure',
    'Alumni Network',
    'Quick Links',
  ];

  return (
    <nav className="navbar">
      {/* Top-Left Corner Logo/Icon */}
      <div className="corner-logo corner-left">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00a896"
          position="relative"
          top="0"
          zIndex="1000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        <span className="logo-text">TIS</span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
          </li>
        ))}
      </ul>

      {/* Top-Right Corner Icon & Hamburger Menu */}
      <div className="nav-right-actions">
        {/* Top-Right Corner Icon */}
        <div className="corner-logo corner-right" title="CBSE / Accreditation">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1f2937"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
        </div>

        {/* Hamburger Icon */}
        <button
          className="hamburger-icon"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            position="relative"
            top="0"
            zIndex="1000"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}