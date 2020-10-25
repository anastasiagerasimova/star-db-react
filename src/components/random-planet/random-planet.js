import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/index';
import ErrorIndicator from '../error-indicator/index';

import './random-planet.css';

export default class RandomPlanet extends React.Component  {
    constructor(){
        super();
        this.swapiService = new SwapiService();
        this.state = {
            planet: {},
            loading: true,
            error: false
        };
    }

    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 18 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        const {planet, loading, error} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = (!loading && !error) ? <PlanetView planet={planet}/> : null;
        const errorMessege = error ? <ErrorIndicator /> : null;
        return(
            <div className="jumbotron random-planet d-flex">
                {spinner}
                {content}
                {errorMessege}
            </div>
        )
    }
}

const PlanetView = ({planet}) =>{
    const {id, name, population, rotationPeriod, diameter} = planet
    return (
        <React.Fragment>
            <div className="random-img">
                <img 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    alt="planet" 
                />
            </div>
            <div>
                <h1>{name}</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}