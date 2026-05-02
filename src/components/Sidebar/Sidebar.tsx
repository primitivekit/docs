import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    {
      title: 'Getting Started',
      items: [
        { label: 'Introduction', path: '/' },
        { label: 'Installation', path: '/installation' },
        { label: 'Customization', path: '/customization' },
        { label: 'Accessibility', path: '/accessibility' },
      ]
    },
    {
      title: 'Components',
      items: [
        { label: 'Button', path: '/components/button' },
      ]
    }
  ];

  return (
    <aside className="sidebar" role="complementary" aria-label="Documentation navigation">
      <nav className="sidebar__nav">
        {navItems.map((section) => (
          <div key={section.title} className="sidebar__section">
            <h3 className="sidebar__section-title">{section.title}</h3>
            <ul className="sidebar__list">
              {section.items.map((item) => (
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
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;