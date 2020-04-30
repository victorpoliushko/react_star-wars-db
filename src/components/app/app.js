import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

import "./app.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  componentDidCatch() {
    console.log("componentDidCatch");
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
    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="app">
        <Header />
        {randomPlanet}
        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.onTogglePlanet}
          >
            <span>Toggle random planet</span>
          </button>
          <ErrorButton />
        </div>

        <PeoplePage />
      </div>
    );
  }
}
