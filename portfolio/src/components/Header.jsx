import React from 'react';

const Header = ({ onScrollToAbout, onScrollToProjects, onScrollToResume }) => {
  return (
    <header className="header">
      <h1 className="site-title">Sam Pautrat's Portfolio</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <button className="nav-button" onClick={onScrollToAbout}>
              About
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={onScrollToProjects}>
              Projects
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={onScrollToResume}>
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
