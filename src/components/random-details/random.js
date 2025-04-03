import React from "react";

import "./random.css";

const Random = () => {
  return (
    <div className="random">
      <div className="random-img">
        <img
          className="random-img"
          src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
        />
      </div>
      <ul className="random-info__list">
        <h3 className="random-info__title">Tatooine</h3>
        <li className="random-info__item">
          <p className="random-info random-info__population">Population</p>
          <span className="population__count"> 200000</span>
        </li>
        <li className="random-info__item">
          <p className="random-info random-info__period">Rotation Period</p>
          <span className="period__count"> 23</span>
        </li>
        <li className="random-info__item">
          <p className="random-info random-info__diameter">Diameter</p>
          <span className="diameter__count"> 10465</span>
        </li>
      </ul>
    </div>
  );
};

export default Random;
