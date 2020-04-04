export default class SwapiService {
  _apiBase = 'https://swapi.co/api';

  async getResource(url) { 
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  //Get people
  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  };

  getPerson(id) {
    return this.getResource(`/people/${id}`);
  };

  //Get planets
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  };

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  };

  //get starships
  async getAllStarships() {
    const res = await this.getResource(`/starship/`);
    return res.results;
  };

  getStarship(id) {
    return this.getResource(`/starship/${id}`);
  };

};