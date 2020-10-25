
export default class SwapiService {
    constructor(){
        this._apiBase = 'https://swapi.dev/api';
        // this._apiBase = 'https://swapi.py4e.com/api';
        this._imageBase = 'https://starwars-visualguide.com/assets/img';
    }

    async getResource(url){
        const result = await fetch(`${this._apiBase}${url}`)

        if(!result.ok){
            throw new Error(`Could not fetch ${url}, received ${result.status}`)
        }

        return await result.json()
    }

    // getResource(url){
    //     return new Promise(resolve => {
    //         const result = fetch(url)
    //         resolve(result)
    //     }).then(result =>{
    //         return result.json()
    //     })
    // }

    _transformPerson = (person) =>{
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    getAllPeople = async() => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async(id) => {
        const res = await this.getResource(`/people/${id}/`);
        return this._transformPerson(res)
    }

    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    getPlanet = async(id) => {
        const res = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(res)
    }

    getAllPlanets = async() => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    _transformStarShips = (starship) =>{
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    getStarShips = async(id) => {
        const res = await this.getResource(`/starships/${id}/`);
        return this._transformStarShips(res)
    }

    getAllStarShips = async() => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarShips);
    }

    getImagePerson = (id) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    }

    getImagePlanet = (id) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    }

    getImageStarShip = (id) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    }
}


