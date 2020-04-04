import React, { Component } from 'react';

import './random-planet.css';

export default class PlanetDetails extends Component {
  render() {
    return(
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${2}.jpg`} />
        <div className="random-planet__info">
          <h4>Planet Name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>123</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>123</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>123</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
};