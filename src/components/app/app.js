import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, { Record } from "../item-details";

import "./app.css";

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
      ></ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="app">
          <Header />
          <Row left={personDetails} right={starshipDetails} />
          {/* {randomPlanet}
          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.onTogglePlanet}
            >
              <span>Toggle random planet</span>
            </button>
            <ErrorButton />
          </div>
          <PeoplePage /> */}
        </div>
      </ErrorBoundry>
    );
  }
}
