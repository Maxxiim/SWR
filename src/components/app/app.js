import React from "react";

import Header from "../header/header";
import Random from "../random-details/random";
import ItemList from "../item-list/item-list";

import "./app.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Random />
      <ItemList />
    </div>
  );
};

export default App;
