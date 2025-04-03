import React from "react";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Star DB</h1>
      <div className="header__sections">
        <button className="section-btn" aria-label="btn section people">
          People
        </button>
        <button className="section-btn" aria-label="btn section planet">
          Planets
        </button>
        <button className="section-btn" aria-label="btn section starships">
          Starships
        </button>
      </div>
    </header>
  );
};

export default Header;
