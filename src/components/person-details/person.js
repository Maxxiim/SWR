import React from "react";

import "./person.css";

const Person = () => {
  return (
    <div className="person">
      <div className="person__img">
        <img src="https://s.yimg.com/ny/api/res/1.2/nUwT2rhX.ttbUABl.cwWGQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04MTk-/https://media.zenfs.com/en-US/homerun/time_72/3bf1fa401598af01f0f45ba4969edc8d"></img>
      </div>
      <div className="person__info">
        <h3 className="person__info-title">Luke Skywalker</h3>
        <ul className="person__info-list">
          <li className="person__info-list-item">
            gender
            <span> male</span>
          </li>
          <li className="person__info-list-item">
            birth year
            <span> 19BBY</span>
          </li>
          <li className="person__info-list-item">
            eye color
            <span> blue</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Person;
