import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Header />
      <div className="layout__container">
        <Sidebar />
        <main id="main-content" className="layout__main" role="main">
          <div className="layout__content">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;