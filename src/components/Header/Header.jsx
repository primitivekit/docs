import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon" aria-hidden="true">🎨</span>
          <span className="header__logo-text">Component Library</span>
        </Link>
        
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <Link to="/" className="header__nav-link">Documentation</Link>
          <Link to="/components" className="header__nav-link">Components</Link>
          <a 
            href="https://github.com/yourusername/component-library" 
            className="header__nav-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub (opens in new tab)"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;