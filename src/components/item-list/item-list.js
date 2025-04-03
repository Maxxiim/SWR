import React from "react";
import { Component } from "react";
import Person from "../person-details/person";

import "./item-list.css";

class ItemList extends Component {
  render() {
    return (
      <div className="list">
        <ul className="name-list">
          <li className="name-list__item">
            <p className="name-list__item-name">Luke Skywalker</p>
          </li>
          <li className="name-list__item">
            <p className="name-list__item-name">C-3PO</p>
          </li>
          <li className="name-list__item">
            <p className="name-list__item-name">R2-D2</p>
          </li>
          <li className="name-list__item">
            <p className="name-list__item-name">Darth Vader</p>
          </li>
          <li className="name-list__item">
            <p className="name-list__item-name">Leia Organa</p>
          </li>
        </ul>
        <Person />
      </div>
    );
  }
}

export default ItemList;
