import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, Package } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">
            <Package size={20} />
          </span>
          <span className="header__logo-text">PrimitiveKit</span>
        </Link>
        
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <Link to="/" className="header__nav-link">Docs</Link>
          <Link to="/components/button" className="header__nav-link">Components</Link>
          <a 
            href="https://github.com/primitivekit/react" 
            className="header__github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
          >
            <GitBranch size={18} />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
