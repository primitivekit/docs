import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page Not Found</h2>
        <p className="not-found__description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="not-found__button not-found__button--primary">
            <Home size={20} />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="not-found__button not-found__button--secondary"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
