import React from 'react';
import ItemList from '../item-list/index';
import {compose, withSwapiService, withData} from '../hoc-helper/index';


const withChildFunc = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>{fn}</Wrapped>
        )
    }
}

const renderName = (props) => `${props.name}`
const renderNameAndBirthYear = (props) => `${props.name} (${props.birthYear})`

const mapPersonMethodToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllPeople
    }
}

const mapStarshipMethodToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllStarShips
    }
}

const mapPlanetMethodToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllPlanets
    }
}

// const PersonList = WithSwapiService(mapPersonMethodToProps)(
//                         WithData(
//                             WithChildFunc(renderNameAndBirthYear)(
//                                 ItemList)));
const PersonList = compose(
                            withSwapiService(mapPersonMethodToProps),
                            withData,
                            withChildFunc(renderNameAndBirthYear)
                            )(ItemList)
// const StarshipList =  WithSwapiService(mapStarshipMethodToProps)(
//                         WithData(
//                             WithChildFunc(renderName)(
//                                 ItemList)));
const StarshipList = compose(
                            withSwapiService(mapStarshipMethodToProps),
                            withData,
                            withChildFunc(renderName)
                            )(ItemList)
// const PlanetList = WithSwapiService(mapPlanetMethodToProps)(
//                         WithData(
//                             WithChildFunc(renderName)(
//                                 ItemList)));
const PlanetList = compose(
                            withSwapiService(mapPlanetMethodToProps),
                            withData,
                            withChildFunc(renderName)
                            )(ItemList) 

export {
    PersonList,
    StarshipList,
    PlanetList
}