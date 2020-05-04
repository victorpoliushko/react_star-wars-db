import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, { Record } from "../item-details";

import "./app.css";
import ItemList from "../item-list";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onTogglePlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const {
      getPerson,
      getStarship,
      getAllPeople,
      getAllPlanets,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={this.swapiService.getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={this.swapiService.getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="app">
          <Header />
          {/* <Row left={personDetails} right={starshipDetails} /> */}
          <ItemList getData={getAllPeople} onItemSelected={() => {}}>
            {({ name }) => <span>{name}</span>}
          </ItemList>

          <ItemList getData={getAllPlanets} onItemSelected={() => {}}>
            {({ name }) => <span>{name}</span>}
          </ItemList>
        </div>
      </ErrorBoundry>
    );
  }
}
