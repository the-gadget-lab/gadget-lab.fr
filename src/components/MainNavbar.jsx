import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/MainNavbar.scoped.scss";

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // Default to English

  // Language detection
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const preferredLanguage = browserLanguage.startsWith('fr') ? 'fr' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  const translations = {
    en: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      team: "Our team",
      contact: "Contact",
    },
    fr: {
      home: "Accueil",
      services: "Services",
      portfolio: "Portfolio",
      team: "Notre équipe",
      contact: "Contact",
    },
  };

  const t = translations[language]; // Select the translations for the current language

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <button
          onClick={toggleMobileMenu}
          className={`navbar-toggler ${isMobileMenuOpen ? 'toggled' : ''}`}
        >
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
        </button>

        <div
          id="basic-navbar-nav"
          className={`navbarCollapse ${isMobileMenuOpen ? 'show' : ''}`}
        >
          <ul className="navbarNav">
            <li className="navItem">
              <Link to="/" className="navLink home">
                {t.home}
              </Link>
            </li>
            <li className="navItem">
              <Link to="/services" className="navLink">
                {t.services}
              </Link>
            </li>
            <li className="navItem">
              <Link to="/portfolio" className="navLink">
                {t.portfolio}
              </Link>
            </li>
            <li className="navItem">
              <Link to="/team" className="navLink">
                {t.team}
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink contact">
                {t.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
