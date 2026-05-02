import React from 'react';
import { NavLink } from 'react-router-dom';
import { componentsByCategory, categoryLabels } from '../../config/components';
import './Sidebar.css';

const Sidebar = () => {
  const gettingStartedItems = [
    { label: 'Introduction', path: '/' },
    { label: 'Installation', path: '/installation' },
    { label: 'Customization', path: '/customization' },
    { label: 'Accessibility', path: '/accessibility' },
    { label: 'Design Tokens', path: '/design-tokens' },
  ];

  return (
    <aside className="sidebar" role="complementary" aria-label="Documentation navigation">
      <nav className="sidebar__nav">
        {/* Getting Started Section */}
        <div className="sidebar__section">
          <h3 className="sidebar__section-title">Getting Started</h3>
          <ul className="sidebar__list">
            {gettingStartedItems.map((item) => (
              <li key={item.path} className="sidebar__item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Component Categories - Dynamically Generated */}
        {Object.entries(componentsByCategory).map(([category, items]) => (
          <div key={category} className="sidebar__section">
            <h3 className="sidebar__section-title">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h3>
            <ul className="sidebar__list">
              {items
                .filter(component => component.status === 'complete')
                .map((component) => (
                  <li key={component.id} className="sidebar__item">
                    <NavLink
                      to={component.path}
                      className={({ isActive }) =>
                        `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                      }
                    >
                      {component.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;