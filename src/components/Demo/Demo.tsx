import React from 'react';
import './Demo.css';

const Demo = ({ children, title, description }) => {
  return (
    <div className="demo">
      {(title || description) && (
        <div className="demo__header">
          {title && <h3 className="demo__title">{title}</h3>}
          {description && <p className="demo__description">{description}</p>}
        </div>
      )}
      <div className="demo__content">
        {children}
      </div>
    </div>
  );
};

export default Demo;