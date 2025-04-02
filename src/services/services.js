class SomeApi {
  _baseApi = "https://swapi.dev/api/";

  async getResource(url) {
    const res = await fetch(`${this._baseApi}${url}`);
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  }

  async getPeople() {
    const res = await this.getResource("people");
    return res.results;
  }

  async getPerson(id) {
    const res = await this.getResource(`people/${id}`);
    return res;
  }

  async getPlanets() {
    const res = await this.getResource("planets");
    return res.results;
  }

  async getPlanet(id) {
    const res = await this.getResource(`planets/${id}/`);
    return res;
  }

  async getStarShips() {
    const res = await this.getResource(`starships`);
    return res.results;
  }

  async getStarShip(id) {
    const res = await this.getResource(`starships/${id}/`);
    return res;
  }
}

export default SomeApi;
