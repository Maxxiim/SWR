import React, { Component } from "react";
import SomeApi from "../../services/services";
import Spinner from "../spinner/spinner";
import Error from "../error-message/error";

import "./random.css";

const images = {
  Alderaan: require("../../img/alderaan.png"),
  Coruscant: require("../../img/coruscant.jpg"),
  Dagobah: require("../../img/dagobah.jpg"),
  Endor: require("../../img/endor.jpg"),
  Hoth: require("../../img/hoth.png"),
  Kamino: require("../../img/kamino.jpg"),
  Tatooine: require("../../img/tatooine.jpg"),
  "Yavin IV": require("../../img/yavin-IV.jpg"),
  Naboo: require("../../img/naboo.jpg"),
  Bespin: require("../../img/bespin.jpg"),
  Geonosis: require("../../img/geonosis.png"),
};

class Random extends Component {
  swapService = new SomeApi();

  state = {
    id: null,
    name: null,
    population: null,
    period: null,
    diameter: null,
    loading: true,
    error: false,
    test: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  errorMessage = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    const id = Math.round(Math.random() * 10);
    this.swapService
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          id: id,
          name: planet.name,
          population: planet.population,
          period: planet.orbital_period,
          diameter: planet.diameter,
          loading: false,
        });
      })
      .catch(this.errorMessage);
  };

  render() {
    const { name, population, period, diameter, loading, error } = this.state;
    const hasData = !(loading || error);

    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? (
      <PlanewView
        name={name}
        population={population}
        period={period}
        diameter={diameter}
      />
    ) : null;
    return (
      <div className="random">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
const PlanewView = ({ name, population, period, diameter }) => {
  return (
    <React.Fragment>
      <div className="random-img">
        <img
          className="random-img"
          src={images[name]}
          alt="Какая-то картинка"
        />
      </div>
      <ul className="random-info__list">
        <h3 className="random-info__title">{name}</h3>
        <li className="random-info__item">
          <p className="random-info random-info__population">Population</p>
          <span className="population__count"> {population}</span>
        </li>
        <li className="random-info__item">
          <p className="random-info random-info__period">Rotation Period</p>
          <span className="period__count">{period}</span>
        </li>
        <li className="random-info__item">
          <p className="random-info random-info__diameter">Diameter</p>
          <span className="diameter__count">{diameter}</span>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Random;
